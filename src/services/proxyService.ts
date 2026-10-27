import { storageService } from './storageService';

export const proxyService = {
  wrapStreamUrl(url: string, referer?: string): string {
    if (!url) return '';
    const settings = storageService.getSettings();

    // Se estiver em HTTPS no browser e o stream for HTTP puro, o navegador bloqueia por Mixed Content.
    const isHttpsPage = typeof window !== 'undefined' && window.location.protocol === 'https:';
    const isHttpStream = url.startsWith('http://');

    if (settings.useProxy || (isHttpsPage && isHttpStream)) {
      if (settings.proxyUrl) {
        let finalUrl = `${settings.proxyUrl}${encodeURIComponent(url)}`;
        if (referer) {
          finalUrl += `&referer=${encodeURIComponent(referer)}`;
        }
        return finalUrl;
      }
    }

    return url;
  }
};
