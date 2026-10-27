import type { Channel, ChannelSource, MediaItem, SeriesEpisode } from '../types';
import { storageService } from './storageService';

let baseVodServers: Record<number, string> = {};
let cachedChannels: Channel[] | null = null;
let cachedBusca: { title: string; isSeries: boolean; letter: string; year: string }[] | null = null;
let disabledHosts = new Set<string>();
let disabledHostsLoaded = false;

async function loadDisabledHosts(): Promise<void> {
  if (disabledHostsLoaded) return;
  try {
    const res = await fetch('https://saimo-tv.pages.dev/fontes-desativadas.json');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.desativados)) {
        for (const h of data.desativados) {
          if (typeof h === 'string') disabledHosts.add(h.trim().toLowerCase());
        }
      }
    }
  } catch (e) {
    console.warn('Não foi possível carregar fontes desativadas:', e);
  } finally {
    disabledHostsLoaded = true;
  }
}

function isHostDisabled(urlStr: string): boolean {
  if (!urlStr || disabledHosts.size === 0) return false;
  try {
    const host = new URL(urlStr).hostname.toLowerCase();
    return disabledHosts.has(host);
  } catch {
    return false;
  }
}

function resolveStreamUrl(token: string): string {
  if (token.startsWith('http://') || token.startsWith('https://')) {
    return token;
  }
  const colonIdx = token.indexOf(':');
  if (colonIdx <= 0) return '';
  const baseId = Number(token.slice(0, colonIdx));
  const streamPart = token.slice(colonIdx + 1);
  const base = baseVodServers[baseId];
  if (!base) return '';
  return streamPart.includes('.') ? base + streamPart : `${base}${streamPart}.mp4`;
}

export const catalogService = {
  async fetchChannels(): Promise<Channel[]> {
    if (cachedChannels) return cachedChannels;

    await loadDisabledHosts();

    const { channelCatalogUrl } = storageService.getSettings();
    try {
      const res = await fetch(channelCatalogUrl);
      if (!res.ok) throw new Error(`Falha ao buscar catálogo de canais: ${res.status}`);
      const text = await res.text();

      const channels: Channel[] = [];
      let currentChannel: Partial<Channel> | null = null;
      let currentSource: Partial<ChannelSource> | null = null;

      const lines = text.split('\n');

      for (let rawLine of lines) {
        const line = rawLine.trim();
        if (!line || line.startsWith('#')) continue;

        const sepIndex = line.indexOf(':');
        if (sepIndex === -1) continue;

        const key = line.slice(0, sepIndex).trim().toLowerCase();
        const value = line.slice(sepIndex + 1).trim();

        if (key === 'canal') {
          if (currentChannel && currentChannel.name) {
            if (currentSource && currentSource.url && !isHostDisabled(currentSource.url)) {
              currentChannel.sources = currentChannel.sources || [];
              currentChannel.sources.push(currentSource as ChannelSource);
            }
            if (currentChannel.sources && currentChannel.sources.length > 0) {
              channels.push(currentChannel as Channel);
            }
          }

          currentChannel = {
            id: `ch_${channels.length + 1}_${encodeURIComponent(value.toLowerCase())}`,
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
          if (currentSource && currentSource.url && !isHostDisabled(currentSource.url)) {
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

      // Final channel push
      if (currentChannel && currentChannel.name) {
        if (currentSource && currentSource.url && !isHostDisabled(currentSource.url)) {
          currentChannel.sources = currentChannel.sources || [];
          currentChannel.sources.push(currentSource as ChannelSource);
        }
        if (currentChannel.sources && currentChannel.sources.length > 0) {
          channels.push(currentChannel as Channel);
        }
      }

      cachedChannels = channels;
      return channels;
    } catch (e) {
      console.error('Erro ao buscar canais:', e);
      return [];
    }
  },

  async initVodBases(): Promise<void> {
    if (Object.keys(baseVodServers).length > 0) return;
    const { vodCatalogUrl } = storageService.getSettings();
    try {
      const res = await fetch(`${vodCatalogUrl}indice.txt`);
      if (!res.ok) return;
      const text = await res.text();
      for (const line of text.split('\n')) {
        if (line.startsWith('base:')) {
          const parts = line.slice(5).trim().split(/\s+/);
          if (parts.length >= 2) {
            const id = Number(parts[0]);
            baseVodServers[id] = parts.slice(1).join(' ');
          }
        }
      }
    } catch (e) {
      console.warn('Erro ao carregar bases VOD:', e);
    }
  },

  async fetchMoviesByLetter(letter: string): Promise<MediaItem[]> {
    await this.initVodBases();
    await loadDisabledHosts();

    const { vodCatalogUrl } = storageService.getSettings();
    const encodedLetter = letter === '#' ? '%23' : letter;
    try {
      const res = await fetch(`${vodCatalogUrl}filmes-${encodedLetter}.txt`);
      if (!res.ok) return [];
      const text = await res.text();
      const items: MediaItem[] = [];

      for (const line of text.split('\n')) {
        const parts = line.split('\t');
        if (parts.length < 2 || !parts[0].trim()) continue;

        const title = parts[0].trim();
        const sourcesMap: Record<string, string[]> = {};

        for (const token of parts.slice(1)) {
          const eqIdx = token.indexOf('=');
          if (eqIdx <= 0) continue;
          const version = token.slice(0, eqIdx);
          const rawUrls = token.slice(eqIdx + 1).split(',').filter(Boolean);
          const resolvedUrls = rawUrls
            .map(resolveStreamUrl)
            .filter((u) => u && !isHostDisabled(u));

          if (resolvedUrls.length > 0) {
            sourcesMap[version] = resolvedUrls;
          }
        }

        if (Object.keys(sourcesMap).length > 0) {
          items.push({
            id: `m_${letter}_${encodeURIComponent(title)}`,
            title,
            type: 'movie',
            letter,
            sources: sourcesMap,
          });
        }
      }

      return items;
    } catch (e) {
      console.warn(`Erro ao carregar filmes-${letter}:`, e);
      return [];
    }
  },

  async fetchSeriesByLetter(letter: string): Promise<MediaItem[]> {
    await this.initVodBases();
    const { vodCatalogUrl } = storageService.getSettings();
    const encodedLetter = letter === '#' ? '%23' : letter;
    try {
      const res = await fetch(`${vodCatalogUrl}series-${encodedLetter}.txt`);
      if (!res.ok) return [];
      const text = await res.text();
      const items: MediaItem[] = [];

      for (const line of text.split('\n')) {
        const parts = line.split('\t');
        if (parts.length < 4 || !parts[0].trim()) continue;

        const title = parts[0].trim();
        const year = parts[1].trim();
        const chunk = Number(parts[2]) || 0;
        const episodesCount = Number(parts[3]) || 0;

        items.push({
          id: `s_${letter}_${encodeURIComponent(title)}_${year}`,
          title,
          type: 'series',
          year: year || undefined,
          letter,
          chunk,
          episodesCount,
        });
      }

      return items;
    } catch (e) {
      console.warn(`Erro ao carregar series-${letter}:`, e);
      return [];
    }
  },

  async fetchSeriesEpisodes(letter: string, chunk: number, title: string, year?: string): Promise<SeriesEpisode[]> {
    await this.initVodBases();
    await loadDisabledHosts();

    const { vodCatalogUrl } = storageService.getSettings();
    const encodedLetter = letter === '#' ? '%23' : letter;
    try {
      const res = await fetch(`${vodCatalogUrl}series-${encodedLetter}-${chunk}.txt`);
      if (!res.ok) return [];
      const text = await res.text();
      const episodes: SeriesEpisode[] = [];

      let isCurrentSeries = false;

      for (const line of text.split('\n')) {
        if (line.startsWith('@')) {
          if (isCurrentSeries) break;
          const seriesHeader = line.slice(1).split('\t');
          const hTitle = seriesHeader[0]?.trim();
          const hYear = seriesHeader[1]?.trim() || '';
          isCurrentSeries = hTitle === title && (!year || hYear === year);
          continue;
        }

        if (!isCurrentSeries) continue;

        const parts = line.split('\t');
        if (parts.length < 4) continue;

        const season = Number(parts[0]) || 0;
        const episode = Number(parts[1]) || 0;
        const version = parts[2] || 'dub';
        const rawUrls = parts[3].split(',').filter(Boolean);
        const resolved = rawUrls
          .map(resolveStreamUrl)
          .filter((u) => u && !isHostDisabled(u));

        if (resolved.length > 0) {
          episodes.push({ season, episode, version, urls: resolved });
        }
      }

      return episodes;
    } catch (e) {
      console.warn(`Erro ao carregar episódios da série ${title}:`, e);
      return [];
    }
  },

  async searchVod(query: string): Promise<{ title: string; isSeries: boolean; letter: string; year: string }[]> {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];

    if (!cachedBusca) {
      const { vodCatalogUrl } = storageService.getSettings();
      try {
        const res = await fetch(`${vodCatalogUrl}busca.txt`);
        if (res.ok) {
          const text = await res.text();
          const list: { title: string; isSeries: boolean; letter: string; year: string }[] = [];
          for (const line of text.split('\n')) {
            const parts = line.split('\t');
            if (parts.length < 3) continue;
            list.push({
              title: parts[0],
              isSeries: parts[1] === 's',
              letter: parts[2],
              year: parts[3] || '',
            });
          }
          cachedBusca = list;
        }
      } catch (e) {
        console.warn('Erro ao carregar busca.txt:', e);
      }
    }

    if (!cachedBusca) return [];
    return cachedBusca
      .filter((item) => item.title.toLowerCase().includes(q))
      .slice(0, 50);
  }
};
