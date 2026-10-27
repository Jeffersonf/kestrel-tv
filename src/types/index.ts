export interface ChannelSource {
  url: string;
  name?: string;
  quality?: string;
  referer?: string;
  agent?: string;
  clearKey?: string;
}

export interface Channel {
  id: string;
  name: string;
  category: string;
  logo: string;
  sources: ChannelSource[];
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'movie' | 'series';
  year?: string;
  letter: string;
  chunk?: number;
  episodesCount?: number;
  sources?: Record<string, string[]>;
}

export interface SeriesEpisode {
  season: number;
  episode: number;
  version: string; // 'dub' | 'leg'
  urls: string[];
}

export interface TMDBMetadata {
  tmdbId?: number;
  title?: string;
  overview?: string;
  posterUrl?: string;
  backdropUrl?: string;
  rating?: number;
  releaseYear?: string;
  genres?: string[];
}

export interface PlaybackProgress {
  id: string;
  currentTime: number;
  duration: number;
  updatedAt: number;
}

export interface AppSettings {
  channelCatalogUrl: string;
  vodCatalogUrl: string;
  proxyUrl: string;
  useProxy: boolean;
}
