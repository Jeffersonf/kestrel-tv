import Hls from 'hls.js';
import { storageService } from './storageService';
import type { ChannelSource } from '../types';

export const PROXY_BASE = 'https://saimo-tv.pages.dev/api/proxy';

/**
 * Algoritmo Kp (Reverse Engineered do Saimo TV player)
 * Intercepta requisições de chunks relativos (.m3u8, .ts) feitas pelo Hls.js
 * e reescreve a URL para passar pelo proxy apontando para o servidor remoto correto.
 */
export function fixProxiedSegmentUrl(masterProxyUrl: string, requestedUrl: string): string {
  let masterParsed: URL;
  let requestedParsed: URL;

  try {
    masterParsed = new URL(masterProxyUrl);
    requestedParsed = new URL(requestedUrl);
  } catch {
    return requestedUrl;
  }

  // Se já for a mesma rota ou outro domínio, não altera
  if (
    requestedParsed.pathname === masterParsed.pathname ||
    masterParsed.protocol !== requestedParsed.protocol ||
    masterParsed.host !== requestedParsed.host
  ) {
    return requestedUrl;
  }

  // Extrai o parâmetro url= do master playlist
  const urlParam = masterParsed.searchParams.get('url');
  if (!urlParam) return requestedUrl;

  let remoteParsed: URL;
  try {
    remoteParsed = new URL(urlParam);
  } catch {
    return requestedUrl;
  }

  const proxyPathPrefix = masterParsed.pathname.slice(0, masterParsed.pathname.lastIndexOf('/') + 1);
  const remotePathPrefix = remoteParsed.pathname.slice(0, remoteParsed.pathname.lastIndexOf('/') + 1);

  if (!proxyPathPrefix || !remotePathPrefix || !requestedParsed.pathname.startsWith(proxyPathPrefix)) {
    return requestedUrl;
  }

  const relativeSuffix = requestedParsed.pathname.slice(proxyPathPrefix.length);
  const correctedRemoteUrl = `${remoteParsed.protocol}//${remoteParsed.host}${remotePathPrefix}${relativeSuffix}${requestedParsed.search}${requestedParsed.hash}`;

  // Reconstrói a requisição via proxy mantendo parâmetros de referer e agente
  const newProxyUrl = new URL(masterParsed.origin + masterParsed.pathname);
  newProxyUrl.searchParams.set('url', correctedRemoteUrl);

  const referer = masterParsed.searchParams.get('referer');
  if (referer) newProxyUrl.searchParams.set('referer', referer);

  const ua = masterParsed.searchParams.get('ua');
  if (ua) newProxyUrl.searchParams.set('ua', ua);

  return newProxyUrl.toString();
}

/**
 * Cria o Custom Loader do Hls.js compatível com o proxy do Saimo TV
 */
export function createProxyHlsLoader(masterUrl: string) {
  const DefaultLoader = Hls.DefaultConfig.loader;

  return class ProxiedHlsLoader extends DefaultLoader {
    load(context: any, config: any, callbacks: any) {
      if (context.url) {
        context.url = fixProxiedSegmentUrl(masterUrl, context.url);
      }
      super.load(context, config, callbacks);
    }
  };
}

/**
 * Cria o Custom Fragment Loader do Hls.js compatível com o proxy do Saimo TV
 */
export function createProxyFragLoader(masterUrl: string) {
  const DefaultFragLoader = Hls.DefaultConfig.fLoader || Hls.DefaultConfig.loader;

  return class ProxiedFragLoader extends DefaultFragLoader {
    load(context: any, config: any, callbacks: any) {
      if (context.url) {
        context.url = fixProxiedSegmentUrl(masterUrl, context.url);
      }
      super.load(context, config, callbacks);
    }
  };
}

export const proxyService = {
  /**
   * Verifica se o link necessita obrigatoriamente de proxy
   */
  needsProxy(url: string): boolean {
    if (!url) return false;
    const lower = url.toLowerCase();

    // Links HTTP sempre precisam de proxy em páginas HTTPS para evitar Mixed Content
    if (lower.startsWith('http://')) return true;

    // Arquivos .txt ou streams do dadinho precisam de proxy
    if (lower.includes('.txt') || lower.includes('dadinhodetapioca.fun')) return true;

    // Servidores Cloudfront espelhados (*.lat) e servidores IPTV precisam de proxy
    if (lower.includes('.lat') || lower.includes('squareweb.app') || lower.includes('bbroot.com')) return true;

    return false;
  },

  /**
   * Envolve a URL com o proxy do Saimo TV com os cabeçalhos apropriados
   */
  wrapStreamUrl(url: string, referer?: string, agent?: string): string {
    if (!url) return '';
    let target = url.trim();

    // Converte links do workers.dev de http para https direto
    if (target.includes('.workers.dev') && target.startsWith('http://')) {
      return target.replace('http://', 'https://');
    }

    // Buckets R2 com https nativo tocam direto
    if (target.includes('.r2.dev') && target.startsWith('https://')) {
      return target;
    }

    const settings = storageService.getSettings();
    const proxyUrl = settings.proxyUrl || `${PROXY_BASE}?url=`;

    let finalUrl = `${proxyUrl}${encodeURIComponent(target)}`;
    if (referer) {
      finalUrl += `&referer=${encodeURIComponent(referer)}`;
    }
    if (agent) {
      finalUrl += `&ua=${encodeURIComponent(agent)}`;
    }

    return finalUrl;
  },

  /**
   * Prepara lista de fontes (direta + proxied) similar à função Gp do Saimo TV
   */
  expandSources(sources: (ChannelSource | string)[]): { name: string; url: string; referer?: string; agent?: string; isProxied: boolean }[] {
    const list: { name: string; url: string; referer?: string; agent?: string; isProxied: boolean }[] = [];

    sources.forEach((s, idx) => {
      const src: ChannelSource = typeof s === 'string' ? { url: s } : s;
      const rawUrl = src.url.trim();
      const baseName = src.name || `Fonte ${idx + 1}${src.quality ? ` (${src.quality})` : ''}`;

      // 1. Se o stream for HTTPS e não precisar estritamente de proxy, adiciona opção direta
      if (rawUrl.startsWith('https://') && !this.needsProxy(rawUrl)) {
        list.push({
          name: `${baseName} (Direto)`,
          url: rawUrl,
          referer: src.referer,
          agent: src.agent,
          isProxied: false,
        });
      }

      // 2. Sempre adiciona a variante roteada pelo proxy oficial com o resolver de chunks Kp
      list.push({
        name: baseName,
        url: this.wrapStreamUrl(rawUrl, src.referer, src.agent),
        referer: src.referer,
        agent: src.agent,
        isProxied: true,
      });
    });

    return list;
  }
};
