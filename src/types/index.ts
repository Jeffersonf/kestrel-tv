export interface ChannelSource {
  url: string;
  name?: string;
  quality?: string;
  referer?: string;
  agent?: string;
}

export interface Channel {
  id: string;
  number?: number;
  name: string;
  category: string;
  logo: string;
  sources: ChannelSource[];
}

export interface EpgProgram {
  start: number;
  end: number;
  title: string;
  description?: string;
}

export interface ChannelEpgStatus {
  current: EpgProgram | null;
  next: EpgProgram | null;
  progressPercent: number;
}

export interface AppSettings {
  channelCatalogUrl: string;
  epgUrl: string;
  proxyUrl: string;
  useProxy: boolean;
  zeroProxyMode: boolean;
}
