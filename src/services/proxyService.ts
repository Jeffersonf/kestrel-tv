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
   * Verifica se o ambiente do app permite carregar streams diretamente sem bloqueios
   * (ex: PWA instalado em standalone, Capacitor Android com Cleartext, ou HTTP localhost)
   */
  isDirectEnvironment(): boolean {
    if (typeof window === 'undefined') return false;
    const isStandalone = 
      (window.navigator as any).standalone === true ||
      window.matchMedia('(display-mode: standalone)').matches ||
      (window as any).Capacitor !== undefined ||
      window.location.protocol === 'http:';
    return isStandalone;
  },

  /**
   * Verifica se o stream é de um provedor que já possui CORS liberado nativamente
   * (Zero Cota: tocam direto em HTTPS sem proxy nenhum)
   */
  isCorsFriendlyStream(url: string): boolean {
    if (!url) return false;
    const lower = url.toLowerCase();

    // URLs de api/stream NUNCA podem ser consideradas direct friendly porque
    // redirecionam via 302 para http:// gerando bloqueio imediato de Mixed Content!
    if (lower.includes('/api/stream') || lower.includes('api/proxy')) {
      return false;
    }

    return (
      lower.includes('.amagi.tv') ||
      lower.includes('.otteravision.com') ||
      lower.includes('ads.ottera.tv') ||
      lower.includes('.wurl.tv') ||
      lower.includes('.akamaized.net') ||
      lower.includes('pluto.tv') ||
      lower.includes('jmp2.uk') ||
      (lower.includes('.workers.dev') && lower.startsWith('https://')) ||
      lower.includes('.r2.dev') ||
      lower.includes('.jmvstream.com') ||
      lower.includes('.ichibansys.com') ||
      lower.includes('github.io') ||
      lower.includes('githubusercontent.com') ||
      lower.includes('fastly.net') ||
      lower.includes('dailymotion.com')
    );
  },

  /**
   * Verifica se o link necessita obrigatoriamente de proxy
   */
  needsProxy(url: string): boolean {
    if (!url) return false;
    const lower = url.toLowerCase();

    // Endpoints de streaming da API do Saimo sempre precisam do proxy para resolver o 302 em HTTPS
    if (lower.includes('/api/stream')) return true;

    // CDNs oficiais com CORS aberto nunca precisam de proxy se forem HTTPS
    if (lower.startsWith('https://') && this.isCorsFriendlyStream(lower)) {
      return false;
    }

    // Se estiver em modo zero cota ou ambiente PWA/App que suporta cleartext
    const settings = storageService.getSettings();
    if ((settings.zeroProxyMode || this.isDirectEnvironment()) && lower.startsWith('http://')) {
      return false;
    }

    // Links HTTP sempre precisam de proxy em páginas HTTPS normais para evitar erro de Mixed Content
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
   * Prepara lista de fontes (direta + proxied) otimizada para Zero Cota e VOD
   */
  expandSources(sources: (ChannelSource | string)[]): { name: string; url: string; referer?: string; agent?: string; isProxied: boolean }[] {
    const list: { name: string; url: string; referer?: string; agent?: string; isProxied: boolean }[] = [];
    const settings = storageService.getSettings();
    const isDirectEnv = this.isDirectEnvironment();
    const preferDirect = settings.zeroProxyMode || isDirectEnv;

    sources.forEach((s, idx) => {
      const src: ChannelSource = typeof s === 'string' ? { url: s } : s;
      const rawUrl = src.url.trim();
      const baseName = src.name || `Fonte ${idx + 1}${src.quality ? ` (${src.quality})` : ''}`;
      const isHttps = rawUrl.startsWith('https://');
      const isCors = this.isCorsFriendlyStream(rawUrl);

      // CASO ESPECIAL: /api/stream de Filmes e Séries
      // Sempre deve passar pelo proxy para que o Cloudflare resolva o redirect 302 em HTTPS com suporte a Range bytes!
      if (rawUrl.includes('/api/stream')) {
        list.push({
          name: `${baseName} (Servidor VOD HD)`,
          url: this.wrapStreamUrl(rawUrl, src.referer, src.agent),
          referer: src.referer,
          agent: src.agent,
          isProxied: true,
        });
        return;
      }

      // CASO 1: Stream HTTPS com CORS liberado (CazéTV, Pluto TV, Samsung TV Plus, Akamai, etc.)
      // -> Zero Cota garantido! Toca direto sem passar por nenhum proxy.
      if (isHttps && isCors) {
        list.push({
          name: `${baseName} (Zero Cota - Direto)`,
          url: rawUrl,
          referer: src.referer,
          agent: src.agent,
          isProxied: false,
        });
        // Backup proxied caso haja alguma instabilidade na CDN
        list.push({
          name: `${baseName} (Proxy Backup)`,
          url: this.wrapStreamUrl(rawUrl, src.referer, src.agent),
          referer: src.referer,
          agent: src.agent,
          isProxied: true,
        });
        return;
      }

      // CASO 2: Modo Zero Cota ou App PWA/Capacitor ativo
      // -> Prioriza conexão direta para evitar gastar cota Cloudflare
      if (preferDirect) {
        list.push({
          name: `${baseName} (Zero Cota - Direto)`,
          url: rawUrl,
          referer: src.referer,
          agent: src.agent,
          isProxied: false,
        });
        list.push({
          name: `${baseName} (Proxy CORS)`,
          url: this.wrapStreamUrl(rawUrl, src.referer, src.agent),
          referer: src.referer,
          agent: src.agent,
          isProxied: true,
        });
        return;
      }

      // CASO 3: Navegador Web HTTPS comum
      if (isHttps && !this.needsProxy(rawUrl)) {
        list.push({
          name: `${baseName} (Direto)`,
          url: rawUrl,
          referer: src.referer,
          agent: src.agent,
          isProxied: false,
        });
      }

      // Fonte primária via proxy seguro para links HTTP
      list.push({
        name: baseName,
        url: this.wrapStreamUrl(rawUrl, src.referer, src.agent),
        referer: src.referer,
        agent: src.agent,
        isProxied: true,
      });

      // Fonte alternativa direta PWA
      if (rawUrl.startsWith('http://')) {
        list.push({
          name: `${baseName} (Direto PWA / 0 Cota)`,
          url: rawUrl,
          referer: src.referer,
          agent: src.agent,
          isProxied: false,
        });
      }
    });

    return list;
  }
};
