import type { Channel, ChannelSource } from '../types';
import { storageService } from './storageService';
import { FALLBACK_CHANNELS } from './fallbackChannels';

let cachedChannels: Channel[] | null = null;
const disabledHosts = new Set<string>([
  'desativado.invalid',
  'corruptx.org',
  'hubby.cx',
  'up.kiwi',
  'tvonhdbr.com',
  'aws.s13-s1001604.lat',
  's23-cloudfront-net.lat',
  's25-cloudfront-net.lat',
  'cdn10embed.xyz',
  'cdn8embed.xyz',
  '16-5-0-235.sslip.io',
]);

async function loadDisabledHosts(): Promise<void> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch('https://saimo-tv.pages.dev/fontes-desativadas.json', { signal: controller.signal });
    clearTimeout(timeout);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.desativados)) {
        for (const h of data.desativados) {
          if (typeof h === 'string') disabledHosts.add(h.trim().toLowerCase());
        }
      }
    }
  } catch {
    // Falha silenciosa
  }
}

function isHostDisabled(urlStr: string): boolean {
  if (!urlStr) return true;
  try {
    const host = new URL(urlStr).hostname.toLowerCase();
    for (const d of disabledHosts) {
      if (host === d || host.endsWith(`.${d}`)) return true;
    }
    return false;
  } catch {
    return true;
  }
}

function isAdultText(text: string): boolean {
  return /adulto|\+18|18\+|porn|sexo|sexy hot|playboy|venus|sextreme|hustler|red light|brasileirinhas|penthouse|21 sexture/i.test(
    text
  );
}

function isPlayableChannelSource(src: ChannelSource & { clearKey?: string }): boolean {
  const url = (src.url || '').trim().toLowerCase();
  if (!url.startsWith('http://') && !url.startsWith('https://')) return false;
  if (src.clearKey || url.includes('.mpd')) return false;
  if (url.includes('desativado.invalid')) return false;
  return true;
}

export function scoreSource(url: string): number {
  if (!url) return -100;
  if (isHostDisabled(url)) return -50;
  const u = url.toLowerCase();
  if (u.includes('amagi.tv') || u.includes('maissbt.com') || u.includes('ebc.com.br')) return 100;
  if (u.includes('multtv.tv.br') || u.includes('cloudfront.net')) return 95;
  if (u.includes('sattvgo.com.br') || u.includes('nxtv.com.br')) return 90;
  if (u.includes('dadinhodetapioca.fun')) return 85;
  if (u.startsWith('https://')) return 70;
  return 20;
}

function sortAndFilterSources(sources: (ChannelSource & { clearKey?: string })[]): ChannelSource[] {
  const seen = new Set<string>();
  const valid: ChannelSource[] = [];

  for (const s of sources) {
    if (!isPlayableChannelSource(s)) continue;
    const cleanUrl = s.url.trim();
    if (seen.has(cleanUrl)) continue;
    seen.add(cleanUrl);
    valid.push({
      url: cleanUrl,
      name: s.name,
      quality: s.quality,
      referer: s.referer,
      agent: s.agent,
    });
  }

  valid.sort((a, b) => scoreSource(b.url) - scoreSource(a.url));
  return valid;
}

function parseM3uPlaylist(text: string): Channel[] {
  const channels: Channel[] = [];
  const byName = new Map<string, Channel>();
  let meta: { name: string; logo: string; category: string } | null = null;

  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) continue;

    if (line.startsWith('#EXTINF:')) {
      const logoMatch = line.match(/tvg-logo="([^"]*)"/i);
      const groupMatch = line.match(/group-title="([^"]*)"/i);
      const commaIdx = line.lastIndexOf(',');
      const name = commaIdx >= 0 ? line.slice(commaIdx + 1).trim() : 'Canal';
      meta = {
        name: name || 'Canal',
        logo: logoMatch ? logoMatch[1] : '',
        category: groupMatch?.[1]?.trim() || 'Variedades',
      };
    } else if ((line.startsWith('http://') || line.startsWith('https://')) && meta) {
      if (isAdultText(`${meta.category} ${meta.name}`)) {
        meta = null;
        continue;
      }
      const key = meta.name.toLowerCase();
      let existing = byName.get(key);
      if (!existing) {
        existing = {
          id: `m3u_${channels.length + 1}`,
          name: meta.name,
          category: meta.category,
          logo: meta.logo,
          sources: [],
        };
        byName.set(key, existing);
        channels.push(existing);
      }
      existing.sources.push({ url: line });
      meta = null;
    }
  }

  return finalizeChannels(channels);
}

function parseCatalogText(text: string): Channel[] {
  if (text.trimStart().startsWith('#EXTM3U')) {
    return parseM3uPlaylist(text);
  }

  const channels: Channel[] = [];
  let currentChannel: Partial<Channel> | null = null;
  let currentSource: (Partial<ChannelSource> & { clearKey?: string }) | null = null;

  const commitChannel = () => {
    if (!currentChannel?.name) return;
    if (currentSource?.url) {
      currentChannel.sources = currentChannel.sources || [];
      currentChannel.sources.push(currentSource as ChannelSource);
    }
    if (isAdultText(`${currentChannel.category || ''} ${currentChannel.name}`)) return;

    const cleanSources = sortAndFilterSources((currentChannel.sources || []) as ChannelSource[]);
    if (cleanSources.length > 0) {
      channels.push({
        id: `ch_${channels.length + 1}_${encodeURIComponent(currentChannel.name.toLowerCase())}`,
        name: currentChannel.name,
        category: currentChannel.category || 'Variedades',
        logo: currentChannel.logo || '',
        sources: cleanSources,
      });
    }
  };

  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const sepIndex = line.indexOf(':');
    if (sepIndex === -1) continue;

    const key = line.slice(0, sepIndex).trim().toLowerCase();
    const value = line.slice(sepIndex + 1).trim();

    if (key === 'canal') {
      commitChannel();
      currentChannel = {
        name: value,
        category: 'Variedades',
        logo: '',
        sources: [],
      };
      currentSource = null;
    } else if (!currentChannel) {
      continue;
    } else if (key === 'categoria') {
      currentChannel.category = value;
    } else if (key === 'logo') {
      currentChannel.logo = value;
    } else if (key === 'fonte') {
      if (currentSource?.url) {
        currentChannel.sources = currentChannel.sources || [];
        currentChannel.sources.push(currentSource as ChannelSource);
      }
      currentSource = { url: value };
    } else if (currentSource) {
      if (key === 'nome') currentSource.name = value;
      else if (key === 'qualidade') currentSource.quality = value;
      else if (key === 'referer') currentSource.referer = value;
      else if (key === 'agente') currentSource.agent = value;
      else if (key === 'chave') currentSource.clearKey = value;
    }
  }

  commitChannel();
  return finalizeChannels(channels);
}

function finalizeChannels(rawList: Channel[]): Channel[] {
  const result: Channel[] = [];
  for (const ch of rawList) {
    if (isAdultText(`${ch.category} ${ch.name}`)) continue;
    const sources = sortAndFilterSources(ch.sources);
    if (sources.length === 0) continue;
    result.push({
      ...ch,
      number: result.length + 1,
      sources,
    });
  }
  return result;
}

function mergeSaimoWithFallback(primary: Channel[]): Channel[] {
  const fallbackClean = finalizeChannels(FALLBACK_CHANNELS);
  const byName = new Map<string, Channel>();

  for (const ch of primary) {
    byName.set(ch.name.toLowerCase().trim(), { ...ch, sources: [...ch.sources] });
  }

  for (const fb of fallbackClean) {
    const key = fb.name.toLowerCase().trim();
    const existing = byName.get(key);
    if (existing) {
      existing.sources = sortAndFilterSources([...existing.sources, ...fb.sources]);
      if (!existing.logo && fb.logo) existing.logo = fb.logo;
    } else {
      byName.set(key, fb);
    }
  }

  return finalizeChannels(Array.from(byName.values()));
}

export const catalogService = {
  getFallbackChannels(): Channel[] {
    return finalizeChannels(FALLBACK_CHANNELS);
  },

  invalidateCache(): void {
    cachedChannels = null;
  },

  async fetchChannels(forceRefresh = false): Promise<Channel[]> {
    if (!forceRefresh && cachedChannels && cachedChannels.length > 0) {
      return cachedChannels;
    }

    loadDisabledHosts().catch(() => {});

    const { channelCatalogUrl } = storageService.getSettings();
    const isSaimoLive = channelCatalogUrl.includes('canais-saimo.pages.dev');

    // 1. Tentar URL configurada pelo usuário (padrão: catálogo vivo do Saimo)
    if (channelCatalogUrl?.trim()) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 7000);
        const res = await fetch(channelCatalogUrl.trim(), { signal: controller.signal });
        clearTimeout(timeout);

        if (res.ok) {
          const text = await res.text();
          const parsed = parseCatalogText(text);
          if (parsed.length > 0) {
            const finalChannels = isSaimoLive ? mergeSaimoWithFallback(parsed) : parsed;
            cachedChannels = finalChannels;
            try {
              localStorage.setItem('kestrel_cached_catalogo', text);
            } catch {}
            return finalChannels;
          }
        }
      } catch (e) {
        console.warn('Falha ao buscar catálogo online:', e);
      }
    }

    // 2. Cópia local limpa (./data/catalogo.txt)
    try {
      const res = await fetch('./data/catalogo.txt');
      if (res.ok) {
        const text = await res.text();
        const parsed = parseCatalogText(text);
        if (parsed.length > 0) {
          cachedChannels = parsed;
          return parsed;
        }
      }
    } catch {}

    // 3. Cache local no navegador
    try {
      const savedText = localStorage.getItem('kestrel_cached_catalogo');
      if (savedText) {
        const parsed = parseCatalogText(savedText);
        if (parsed.length > 0) {
          cachedChannels = isSaimoLive ? mergeSaimoWithFallback(parsed) : parsed;
          return cachedChannels;
        }
      }
    } catch {}

    // 4. Fallback interno garantido (Saimo original limpo)
    const fb = finalizeChannels(FALLBACK_CHANNELS);
    cachedChannels = fb;
    return fb;
  },
};
