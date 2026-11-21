import type { Channel, ChannelSource } from '../types';
import { storageService } from './storageService';
import { FALLBACK_CHANNELS } from './fallbackChannels';

let cachedChannels: Channel[] | null = null;

// Domínios sabidamente mortos/offline (404, SSL expirado ou desativados)
const DEAD_HOSTS = new Set<string>([
  'desativado.invalid',
  's25-cloudfront-net.lat',
  's23-cloudfront-net.lat',
  'cdn10embed.xyz',
  'v-us-01.wisestream.io',
  'corruptx.org',
  'hubby.cx',
  'up.kiwi',
  'tvonhdbr.com',
  'aws.s13-s1001604.lat',
  '16-5-0-235.sslip.io',
]);

const flaggedHosts = new Set<string>();

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
          if (typeof h === 'string') flaggedHosts.add(h.trim().toLowerCase());
        }
      }
    }
  } catch {
    // Falha silenciosa
  }
}

function matchesHostList(urlStr: string, list: Set<string>): boolean {
  if (!urlStr) return true;
  try {
    const host = new URL(urlStr).hostname.toLowerCase();
    for (const d of list) {
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

function isPlayableInCurrentContext(
  src: ChannelSource & { clearKey?: string },
  hasCustomProxy: boolean,
  isHttpPage: boolean
): boolean {
  const raw = (src.url || '').trim();
  const lower = raw.toLowerCase();

  if (!lower.startsWith('http://') && !lower.startsWith('https://')) return false;
  if (src.clearKey || lower.includes('.mpd')) return false;
  if (matchesHostList(raw, DEAD_HOSTS)) return false;

  // Browsers não podem forjar Referer/User-Agent nem carregar HTTP em HTTPS sem proxy
  if (!hasCustomProxy) {
    if (src.referer || src.agent) return false;
    if (!isHttpPage && lower.startsWith('http://')) return false;
    if (lower.includes('mais.uol.com.br')) return false;
  }

  return true;
}

export function scoreSource(url: string): number {
  if (!url) return -100;
  if (matchesHostList(url, DEAD_HOSTS)) return -50;
  if (matchesHostList(url, flaggedHosts)) return -10;

  const u = url.toLowerCase();
  if (u.includes('amagi.tv') || u.includes('maissbt.com') || u.includes('ebc.com.br')) return 100;
  if (u.includes('multtv.tv.br') || u.includes('cloudfront.net') || u.includes('wurl.')) return 95;
  if (u.includes('sattvgo.com.br') || u.includes('nxtv.com.br') || u.includes('satlabscloud.com.br')) return 90;
  if (u.includes('otteravision.com') || u.includes('ottera.tv')) return 85;
  if (u.startsWith('https://')) return 70;
  return 20;
}

function sortAndFilterSources(
  sources: (ChannelSource & { clearKey?: string })[],
  hasCustomProxy: boolean,
  isHttpPage: boolean
): ChannelSource[] {
  const seen = new Set<string>();
  const valid: ChannelSource[] = [];

  for (const s of sources) {
    if (!isPlayableInCurrentContext(s, hasCustomProxy, isHttpPage)) continue;
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

function getSourceEnvironment(): { hasCustomProxy: boolean; isHttpPage: boolean } {
  const settings = storageService.getSettings();
  const hasCustomProxy = Boolean(settings.useProxy && settings.proxyUrl?.trim());
  const isHttpPage = typeof window !== 'undefined' && window.location.protocol === 'http:';
  return { hasCustomProxy, isHttpPage };
}

function parseM3uPlaylist(text: string): Channel[] {
  const { hasCustomProxy, isHttpPage } = getSourceEnvironment();
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

  return finalizeChannels(channels, hasCustomProxy, isHttpPage);
}

function parseCatalogText(text: string): Channel[] {
  if (text.trimStart().startsWith('#EXTM3U')) {
    return parseM3uPlaylist(text);
  }

  const { hasCustomProxy, isHttpPage } = getSourceEnvironment();
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

    const cleanSources = sortAndFilterSources(
      (currentChannel.sources || []) as ChannelSource[],
      hasCustomProxy,
      isHttpPage
    );
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
  return finalizeChannels(channels, hasCustomProxy, isHttpPage);
}

function finalizeChannels(
  rawList: Channel[],
  hasCustomProxy: boolean,
  isHttpPage: boolean
): Channel[] {
  const result: Channel[] = [];
  for (const ch of rawList) {
    if (isAdultText(`${ch.category} ${ch.name}`)) continue;
    const sources = sortAndFilterSources(ch.sources, hasCustomProxy, isHttpPage);
    if (sources.length === 0) continue;
    result.push({
      ...ch,
      number: result.length + 1,
      sources,
    });
  }
  return result;
}

export const catalogService = {
  getFallbackChannels(): Channel[] {
    return finalizeChannels(FALLBACK_CHANNELS, false, false);
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

    // 1. Buscar catálogo vivo oficial do Saimo (ou URL configurada pelo usuário)
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
            cachedChannels = parsed;
            try {
              localStorage.setItem('kestrel_cached_catalogo_v2', text);
            } catch {}
            return parsed;
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
      const savedText = localStorage.getItem('kestrel_cached_catalogo_v2');
      if (savedText) {
        const parsed = parseCatalogText(savedText);
        if (parsed.length > 0) {
          cachedChannels = parsed;
          return parsed;
        }
      }
    } catch {}

    // 4. Fallback embutido (apenas canais Saimo ativos)
    const fb = finalizeChannels(FALLBACK_CHANNELS, false, false);
    cachedChannels = fb;
    return fb;
  },
};
