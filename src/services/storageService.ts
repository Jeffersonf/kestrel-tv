import type { AppSettings, PlaybackProgress } from '../types';

const SETTINGS_KEY = 'kestrel_settings_v3';
const FAVORITES_CHANNELS_KEY = 'kestrel_fav_channels_v1';
const FAVORITES_VOD_KEY = 'kestrel_fav_vod_v1';
const PROGRESS_PREFIX = 'kestrel_progress_';
const ADULT_UNLOCKED_KEY = 'kestrel_adult_unlocked_v1';
const ADULT_PIN_KEY = 'kestrel_adult_pin_v1';
const DEFAULT_PIN = '0000';

export const DEFAULT_SETTINGS: AppSettings = {
  channelCatalogUrl: './data/catalogo.txt',
  vodCatalogUrl: 'https://filmes-saimo.pages.dev/',
  proxyUrl: 'https://saimo-tv.pages.dev/api/proxy?url=',
  useProxy: true,
};

export const storageService = {
  getSettings(): AppSettings {
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        if (!parsed.proxyUrl || parsed.proxyUrl.includes('allorigins') || !parsed.useProxy) {
          parsed.proxyUrl = DEFAULT_SETTINGS.proxyUrl;
          parsed.useProxy = true;
          this.saveSettings(parsed);
        }
        return { ...DEFAULT_SETTINGS, ...parsed };
      }
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
  },

  // ============================================
  // Controle Parental (+18 / PIN)
  // ============================================
  isAdultUnlocked(): boolean {
    try {
      return sessionStorage.getItem(ADULT_UNLOCKED_KEY) === 'true';
    } catch {
      return false;
    }
  },

  unlockAdult(pin: string): boolean {
    const validPin = this.getAdultPin();
    if (pin === validPin) {
      try {
        sessionStorage.setItem(ADULT_UNLOCKED_KEY, 'true');
        window.dispatchEvent(new Event('kestrel_adult_state_change'));
        return true;
      } catch {}
    }
    return false;
  },

  lockAdult(): void {
    try {
      sessionStorage.removeItem(ADULT_UNLOCKED_KEY);
      window.dispatchEvent(new Event('kestrel_adult_state_change'));
    } catch {}
  },

  getAdultPin(): string {
    try {
      return localStorage.getItem(ADULT_PIN_KEY) || DEFAULT_PIN;
    } catch {
      return DEFAULT_PIN;
    }
  },

  setAdultPin(newPin: string): boolean {
    if (!newPin || newPin.length !== 4) return false;
    try {
      localStorage.setItem(ADULT_PIN_KEY, newPin);
      return true;
    } catch {
      return false;
    }
  }
};
