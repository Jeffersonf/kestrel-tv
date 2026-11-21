import type { AppSettings } from '../types';

const SETTINGS_KEY = 'kestrel_settings_v4';
const FAVORITES_CHANNELS_KEY = 'kestrel_fav_channels_v1';
const LAST_CHANNEL_KEY = 'kestrel_last_channel_v1';

export const DEFAULT_SETTINGS: AppSettings = {
  channelCatalogUrl: 'https://canais-saimo.pages.dev/catalogo.txt',
  epgUrl: 'https://canais-saimo.pages.dev/epg.json',
  proxyUrl: '',
  useProxy: false,
  zeroProxyMode: true,
};

export const storageService = {
  getSettings(): AppSettings {
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return { ...DEFAULT_SETTINGS, ...parsed };
      }
    } catch (e) {
      console.warn('Erro ao ler configurações:', e);
    }
    return { ...DEFAULT_SETTINGS };
  },

  saveSettings(settings: AppSettings): void {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      window.dispatchEvent(new Event('kestrel_settings_changed'));
    } catch (e) {
      console.warn('Erro ao salvar configurações:', e);
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
      window.dispatchEvent(new Event('kestrel_favorites_changed'));
    } catch {}
    return isFav;
  },

  getLastChannelId(): string | null {
    try {
      return localStorage.getItem(LAST_CHANNEL_KEY);
    } catch {
      return null;
    }
  },

  setLastChannelId(channelId: string): void {
    try {
      localStorage.setItem(LAST_CHANNEL_KEY, channelId);
    } catch {}
  },
};
