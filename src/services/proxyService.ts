import { storageService } from './storageService';

export const proxyService = {
  wrapStreamUrl(url: string, referer?: string, agent?: string): string {
    if (!url) return '';
    let target = url.trim();

    // 1. URLs do workers.dev funcionam nativamente em HTTPS
    if (target.includes('.workers.dev') && target.startsWith('http://')) {
      target = target.replace('http://', 'https://');
    }

    // 2. Buckets R2 com HTTPS direto possuem suporte nativo a CORS e streaming sem proxy
    if (target.includes('.r2.dev') && target.startsWith('https://')) {
      return target;
    }

    const settings = storageService.getSettings();

    // 3. Quase todos os servidores IPTV e links HTTP necessitam de proxy para funcionar no browser em HTTPS
    if (settings.useProxy && settings.proxyUrl) {
      let finalUrl = `${settings.proxyUrl}${encodeURIComponent(target)}`;
      if (referer) {
        finalUrl += `&referer=${encodeURIComponent(referer)}`;
      }
      if (agent) {
        finalUrl += `&ua=${encodeURIComponent(agent)}`;
      }
      return finalUrl;
    }

    return target;
  }
};
