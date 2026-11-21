import Hls from 'hls.js';
import { storageService } from './storageService';
import type { ChannelSource } from '../types';

export interface PlayableSource {
  name: string;
  url: string;
  referer?: string;
  agent?: string;
  isProxied: boolean;
}

/**
 * Reescreve URLs de segmentos relativos (.m3u8, .ts) quando passam por um proxy ?url=
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

  if (
    requestedParsed.pathname === masterParsed.pathname ||
    masterParsed.protocol !== requestedParsed.protocol ||
    masterParsed.host !== requestedParsed.host
  ) {
    return requestedUrl;
  }

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

  const newProxyUrl = new URL(masterParsed.origin + masterParsed.pathname);
  newProxyUrl.searchParams.set('url', correctedRemoteUrl);

  const referer = masterParsed.searchParams.get('referer');
  if (referer) newProxyUrl.searchParams.set('referer', referer);

  const ua = masterParsed.searchParams.get('ua');
  if (ua) newProxyUrl.searchParams.set('ua', ua);

  return newProxyUrl.toString();
}

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
  isDirectEnvironment(): boolean {
    if (typeof window === 'undefined') return false;
    return (
      (window.navigator as any).standalone === true ||
      window.matchMedia('(display-mode: standalone)').matches ||
      window.location.protocol === 'http:'
    );
  },

  isPlayableUrl(url: string): boolean {
    if (!url) return false;
    const lower = url.toLowerCase();
    if (!lower.startsWith('http://') && !lower.startsWith('https://')) return false;
    if (lower.includes('desativado.invalid') || lower.includes('.mpd')) return false;
    return true;
  },

  wrapStreamUrl(url: string, proxyTemplate: string, referer?: string, agent?: string): string {
    const cleanProxy = proxyTemplate.trim();
    if (!cleanProxy) return url;

    const sep = cleanProxy.includes('?')
      ? cleanProxy.endsWith('=') || cleanProxy.endsWith('&')
        ? ''
        : '&url='
      : '?url=';

    let finalUrl = `${cleanProxy}${sep}${encodeURIComponent(url.trim())}`;
    if (referer) finalUrl += `&referer=${encodeURIComponent(referer)}`;
    if (agent) finalUrl += `&ua=${encodeURIComponent(agent)}`;
    return finalUrl;
  },

  expandSources(sources: (ChannelSource | string)[]): PlayableSource[] {
    const list: PlayableSource[] = [];
    const seen = new Set<string>();
    const settings = storageService.getSettings();
    const isHttpsPage = typeof window !== 'undefined' && window.location.protocol === 'https:';
    const hasCustomProxy = Boolean(settings.useProxy && settings.proxyUrl?.trim());
    const directEnv = this.isDirectEnvironment() || settings.zeroProxyMode;

    const pushUnique = (item: PlayableSource) => {
      if (!seen.has(item.url)) {
        seen.add(item.url);
        list.push(item);
      }
    };

    sources.forEach((s, idx) => {
      const src: ChannelSource = typeof s === 'string' ? { url: s } : s;
      const rawUrl = (src.url || '').trim();
      if (!this.isPlayableUrl(rawUrl)) return;

      const baseName = src.name || `Fonte ${idx + 1}${src.quality ? ` (${src.quality})` : ''}`;
      const isHttpsStream = rawUrl.startsWith('https://');

      // Streams HTTPS sempre tentam direto primeiro (sem custo de proxy)
      if (isHttpsStream) {
        pushUnique({
          name: `${baseName} (Direto)`,
          url: rawUrl,
          referer: src.referer,
          agent: src.agent,
          isProxied: false,
        });
      } else if (!isHttpsPage || directEnv) {
        // HTTP em localhost/HTTP ou modo direto/PWA
        pushUnique({
          name: `${baseName} (Direto)`,
          url: rawUrl,
          referer: src.referer,
          agent: src.agent,
          isProxied: false,
        });
      }

      // Proxy apenas quando configurado pelo usuário nas opções
      if (hasCustomProxy) {
        pushUnique({
          name: `${baseName} (Proxy)`,
          url: this.wrapStreamUrl(rawUrl, settings.proxyUrl, src.referer, src.agent),
          referer: src.referer,
          agent: src.agent,
          isProxied: true,
        });
      }
    });

    // Fallback final: caso a página seja HTTPS sem proxy e o canal só tenha HTTP
    if (list.length === 0) {
      sources.forEach((s, idx) => {
        const src: ChannelSource = typeof s === 'string' ? { url: s } : s;
        const rawUrl = (src.url || '').trim();
        if (!this.isPlayableUrl(rawUrl)) return;
        const baseName = src.name || `Fonte ${idx + 1}${src.quality ? ` (${src.quality})` : ''}`;
        pushUnique({
          name: baseName,
          url: rawUrl,
          referer: src.referer,
          agent: src.agent,
          isProxied: false,
        });
      });
    }

    return list;
  },
};
