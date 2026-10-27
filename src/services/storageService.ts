import type { AppSettings, PlaybackProgress } from '../types';

const SETTINGS_KEY = 'kestrel_settings_v1';
const FAVORITES_CHANNELS_KEY = 'kestrel_fav_channels_v1';
const FAVORITES_VOD_KEY = 'kestrel_fav_vod_v1';
const PROGRESS_PREFIX = 'kestrel_progress_';

export const DEFAULT_SETTINGS: AppSettings = {
  channelCatalogUrl: 'https://canais-saimo.pages.dev/catalogo.txt',
  vodCatalogUrl: 'https://filmes-saimo.pages.dev/',
  proxyUrl: 'https://api.allorigins.win/raw?url=',
  useProxy: false,
};

export const storageService = {
  getSettings(): AppSettings {
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      if (data) return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
    } catch (e) {
      console.warn('Erro ao ler settings:', e);
    }
    return DEFAULT_SETTINGS;
  },

  saveSettings(settings: AppSettings): void {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.warn('Erro ao salvar settings:', e);
    }
  },

  getFavoriteChannels(): string[] {
    try {
      const data = localStorage.getItem(FAVORITES_CHANNELS_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  toggleFavoriteChannel(channelId: string): boolean {
    const list = this.getFavoriteChannels();
    const idx = list.indexOf(channelId);
    let isFav = false;
    if (idx >= 0) {
      list.splice(idx, 1);
    } else {
      list.push(channelId);
      isFav = true;
    }
    try {
      localStorage.setItem(FAVORITES_CHANNELS_KEY, JSON.stringify(list));
    } catch {}
    return isFav;
  },

  getFavoriteVod(): string[] {
    try {
      const data = localStorage.getItem(FAVORITES_VOD_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  toggleFavoriteVod(vodId: string): boolean {
    const list = this.getFavoriteVod();
    const idx = list.indexOf(vodId);
    let isFav = false;
    if (idx >= 0) {
      list.splice(idx, 1);
    } else {
      list.push(vodId);
      isFav = true;
    }
    try {
      localStorage.setItem(FAVORITES_VOD_KEY, JSON.stringify(list));
    } catch {}
    return isFav;
  },

  saveProgress(id: string, currentTime: number, duration: number): void {
    if (!id || duration <= 0) return;
    try {
      const p: PlaybackProgress = { id, currentTime, duration, updatedAt: Date.now() };
      localStorage.setItem(PROGRESS_PREFIX + id, JSON.stringify(p));
    } catch {}
  },

  getProgress(id: string): PlaybackProgress | null {
    try {
      const data = localStorage.getItem(PROGRESS_PREFIX + id);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }
};
