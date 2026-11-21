import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Hls from 'hls.js';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RefreshCw,
  AlertCircle,
  Layers,
  Check,
  ChevronLeft,
  ChevronRight,
  PanelLeft,
  ExternalLink,
  Activity,
} from 'lucide-react';
import type { ChannelSource } from '../../types';
import {
  proxyService,
  createProxyHlsLoader,
  createProxyFragLoader,
} from '../../services/proxyService';

interface VideoPlayerProps {
  title: string;
  sources: (ChannelSource | string)[];
  isLive?: boolean;
  onPrevChannel?: () => void;
  onNextChannel?: () => void;
  onToggleGuide?: () => void;
  isGuideOpen?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  title,
  sources,
  isLive = true,
  onPrevChannel,
  onNextChannel,
  onToggleGuide,
  isGuideOpen,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const controlsTimeoutRef = useRef<number | null>(null);
  const stallTimeoutRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const consecutiveErrorsRef = useRef<number>(0);

  const playableSources = useMemo(() => proxyService.expandSources(sources), [sources]);

  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const [retryTick, setRetryTick] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showUnmuteNotice, setShowUnmuteNotice] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(() => playableSources.length > 0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);
  const [showControls, setShowControls] = useState(true);
  const [showSourceMenu, setShowSourceMenu] = useState(false);
  const [bandwidthKbps, setBandwidthKbps] = useState(0);

  const activeSource = playableSources[currentSourceIndex] || playableSources[0];
  const displayError = !activeSource?.url
    ? 'Nenhuma fonte reproduzível disponível para este canal.'
    : errorMsg;

  const clearStallTimeout = useCallback(() => {
    if (stallTimeoutRef.current) {
      window.clearTimeout(stallTimeoutRef.current);
      stallTimeoutRef.current = null;
    }
  }, []);

  const handleNextSource = useCallback(() => {
    if (currentSourceIndex < playableSources.length - 1) {
      const nextIdx = currentSourceIndex + 1;
      consecutiveErrorsRef.current = 0;
      setIsLoading(true);
      setErrorMsg(null);
      setStatusNotice(`Tentando fonte ${nextIdx + 1} de ${playableSources.length}...`);
      setCurrentSourceIndex(nextIdx);
    } else {
      setErrorMsg('Não foi possível conectar às fontes disponíveis para este canal.');
      setStatusNotice(null);
      setIsLoading(false);
    }
  }, [currentSourceIndex, playableSources.length]);

  const scheduleStallCheck = useCallback(() => {
    clearStallTimeout();
    stallTimeoutRef.current = window.setTimeout(() => {
      const video = videoRef.current;
      if (!video) return;
      if (video.paused || video.currentTime === lastTimeRef.current || video.readyState < 2) {
        handleNextSource();
      }
    }, 5500);
  }, [clearStallTimeout, handleNextSource]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeSource?.url) return;

    clearStallTimeout();
    lastTimeRef.current = 0;
    consecutiveErrorsRef.current = 0;

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }
    video.pause();
    video.removeAttribute('src');
    video.load();

    scheduleStallCheck();

    const streamUrl = activeSource.url;
    const isHls = streamUrl.includes('.m3u8') || streamUrl.includes('.txt') || isLive;

    const tryAutoPlay = () => {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setShowUnmuteNotice(video.muted);
        })
        .catch(() => {
          video.muted = true;
          setIsMuted(true);
          setShowUnmuteNotice(true);
          video
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        });
    };

    if (isHls && Hls.isSupported()) {
      const hlsConfig: Partial<ConstructorParameters<typeof Hls>[0]> = {
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 30,
        maxBufferLength: 30,
        maxMaxBufferLength: 60,
        liveSyncDurationCount: 3,
        manifestLoadingTimeOut: 8000,
        levelLoadingTimeOut: 8000,
        fragLoadingTimeOut: 12000,
        startFragPrefetch: true,
      };

      if (activeSource.isProxied) {
        hlsConfig.loader = createProxyHlsLoader(streamUrl) as any;
        hlsConfig.fLoader = createProxyFragLoader(streamUrl) as any;
      }

      const hls = new Hls(hlsConfig);
      hlsRef.current = hls;
      hls.loadSource(streamUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoading(false);
        setStatusNotice(null);
        consecutiveErrorsRef.current = 0;
        tryAutoPlay();
      });

      hls.on(Hls.Events.FRAG_LOADED, (_, data) => {
        setIsLoading(false);
        setStatusNotice(null);
        consecutiveErrorsRef.current = 0;
        clearStallTimeout();

        const stats = data?.frag?.stats;
        if (stats && stats.total > 0 && stats.loading?.end > stats.loading?.start) {
          const durationSec = (stats.loading.end - stats.loading.start) / 1000;
          if (durationSec > 0) {
            setBandwidthKbps(Math.round((stats.total * 8) / 1000 / durationSec));
          }
        }
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.details?.includes('LoadError') || data.details?.includes('ParsingError')) {
          consecutiveErrorsRef.current++;
          if (consecutiveErrorsRef.current >= 2) {
            hls.destroy();
            hlsRef.current = null;
            handleNextSource();
            return;
          }
        }

        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              try {
                hls.startLoad();
              } catch {
                hls.destroy();
                hlsRef.current = null;
                handleNextSource();
              }
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              try {
                hls.recoverMediaError();
              } catch {
                hls.destroy();
                hlsRef.current = null;
                handleNextSource();
              }
              break;
            default:
              hls.destroy();
              hlsRef.current = null;
              handleNextSource();
              break;
          }
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl') && isHls) {
      video.src = streamUrl;
      video.addEventListener(
        'loadedmetadata',
        () => {
          setIsLoading(false);
          setStatusNotice(null);
          clearStallTimeout();
          tryAutoPlay();
        },
        { once: true }
      );
      video.addEventListener('error', () => handleNextSource(), { once: true });
    } else {
      video.src = streamUrl;
      video.load();
      video
        .play()
        .then(() => {
          setIsLoading(false);
          setStatusNotice(null);
          clearStallTimeout();
          setIsPlaying(true);
        })
        .catch(() => {
          video.muted = true;
          setIsMuted(true);
          setShowUnmuteNotice(true);
          video.play().catch(() => handleNextSource());
        });
    }

    return () => {
      clearStallTimeout();
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [activeSource, isLive, retryTick, clearStallTimeout, handleNextSource, scheduleStallCheck]);

  const revealControls = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) window.clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = window.setTimeout(() => {
      if (!showSourceMenu && !displayError) {
        setShowControls(false);
      }
    }, 3200);
  }, [showSourceMenu, displayError]);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
    revealControls();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) setShowUnmuteNotice(false);
    revealControls();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    const video = videoRef.current;
    if (!video) return;
    video.volume = val;
    video.muted = val === 0;
    setVolume(val);
    setIsMuted(val === 0);
    if (val > 0) setShowUnmuteNotice(false);
  };

  const toggleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    try {
      if (!document.fullscreenElement) {
        await el.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {}
    revealControls();
  };

  const handleRetry = () => {
    setIsLoading(playableSources.length > 0);
    setErrorMsg(null);
    setStatusNotice(null);
    setCurrentSourceIndex(0);
    setRetryTick((t) => t + 1);
  };

  const handleSelectSource = (idx: number) => {
    setCurrentSourceIndex(idx);
    setShowSourceMenu(false);
    setIsLoading(true);
    setErrorMsg(null);
    setStatusNotice(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={revealControls}
      onTouchStart={revealControls}
      className="relative w-full aspect-video bg-black rounded-none lg:rounded-2xl overflow-hidden border-b lg:border border-white/[0.08] select-none group"
    >
      <video
        ref={videoRef}
        playsInline
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={() => {
          const v = videoRef.current;
          if (v && v.currentTime > lastTimeRef.current) {
            lastTimeRef.current = v.currentTime;
            clearStallTimeout();
            setIsLoading(false);
          }
        }}
        className="w-full h-full object-contain bg-black cursor-pointer"
      />

      {/* Aviso tátil quando navegador bloqueia som automático */}
      {showUnmuteNotice && !displayError && (
        <button
          type="button"
          onClick={toggleMute}
          className="absolute top-3 right-3 z-30 h-9 px-3.5 rounded-xl bg-zinc-950/90 hover:bg-zinc-900 border border-white/15 text-xs font-semibold text-white flex items-center gap-2 shadow-lg transition-all active:scale-95"
        >
          <VolumeX className="w-4 h-4 text-red-500" />
          <span>Ativar som</span>
        </button>
      )}

      {/* Indicador de carregamento */}
      {isLoading && !displayError && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 pointer-events-none gap-2.5 px-4 text-center">
          <div className="w-8 h-8 rounded-full border-2 border-zinc-700 border-t-red-600 animate-spin" />
          <p className="text-xs font-medium text-zinc-200">
            {statusNotice || `Carregando ${title}...`}
          </p>
        </div>
      )}

      {/* Estado de erro com opções claras */}
      {displayError && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-zinc-950/95 p-5 text-center gap-3">
          <AlertCircle className="w-8 h-8 text-red-500" strokeWidth={1.75} />
          <div className="max-w-md space-y-1">
            <h4 className="text-sm font-semibold text-white">Falha na reprodução</h4>
            <p className="text-xs text-zinc-400">{displayError}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
            <button
              type="button"
              onClick={handleRetry}
              className="h-9 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold flex items-center gap-2 transition-all active:scale-95"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Tentar novamente
            </button>
            {activeSource?.url && (
              <a
                href={activeSource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Abrir stream
              </a>
            )}
          </div>
        </div>
      )}

      {/* Barra de controles limpa */}
      <div
        className={`absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-3 sm:px-4 pt-8 pb-2.5 transition-opacity duration-200 ${
          showControls || !isPlaying || showSourceMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          {/* Esquerda: Play, Zapping CH-/CH+, Volume */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
              className="h-9 w-9 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-white flex items-center justify-center transition-all active:scale-95"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>

            {onPrevChannel && (
              <button
                type="button"
                onClick={onPrevChannel}
                title="Canal anterior"
                aria-label="Canal anterior"
                className="h-9 w-9 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-zinc-200 flex items-center justify-center transition-all active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}

            {onNextChannel && (
              <button
                type="button"
                onClick={onNextChannel}
                title="Próximo canal"
                aria-label="Próximo canal"
                className="h-9 w-9 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-zinc-200 flex items-center justify-center transition-all active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Ativar som' : 'Silenciar'}
              className="h-9 w-9 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-zinc-200 flex items-center justify-center transition-all active:scale-95"
            >
              {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              aria-label="Volume"
              className="hidden sm:block w-20 accent-red-600 cursor-pointer"
            />

            {bandwidthKbps > 0 && (
              <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-white/10 text-[11px] font-mono text-emerald-400 tabular-nums">
                <Activity className="w-3 h-3" />
                <span>
                  {bandwidthKbps >= 1000
                    ? `${(bandwidthKbps / 1000).toFixed(1)} Mb/s`
                    : `${bandwidthKbps} kb/s`}
                </span>
              </div>
            )}
          </div>

          {/* Direita: Guia, Seletor de Fontes, Fullscreen */}
          <div className="flex items-center gap-1.5 relative">
            {onToggleGuide && (
              <button
                type="button"
                onClick={onToggleGuide}
                title="Alternar guia de canais (G)"
                className={`hidden lg:flex h-9 px-3 rounded-xl border text-xs font-semibold items-center gap-1.5 transition-all active:scale-95 ${
                  isGuideOpen
                    ? 'bg-red-600 border-red-500 text-white'
                    : 'bg-zinc-900/90 border-white/10 text-zinc-200 hover:bg-zinc-800'
                }`}
              >
                <PanelLeft className="w-3.5 h-3.5" />
                <span>Guia</span>
              </button>
            )}

            {playableSources.length > 0 && (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowSourceMenu((v) => !v)}
                  className="h-9 px-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-xs font-semibold text-zinc-200 flex items-center gap-1.5 transition-all active:scale-95"
                >
                  <Layers className="w-3.5 h-3.5 text-red-500" />
                  <span className="tabular-nums">
                    Fonte {currentSourceIndex + 1}/{playableSources.length}
                  </span>
                </button>

                {showSourceMenu && (
                  <div className="absolute right-0 bottom-11 w-64 max-h-60 overflow-y-auto rounded-xl bg-zinc-950/95 backdrop-blur-md border border-white/10 p-1.5 shadow-2xl space-y-1 z-40">
                    {playableSources.map((src, idx) => (
                      <button
                        key={`${src.url}_${idx}`}
                        type="button"
                        onClick={() => handleSelectSource(idx)}
                        className={`w-full text-left px-2.5 py-2 rounded-lg text-xs flex items-center justify-between gap-2 transition-colors ${
                          idx === currentSourceIndex
                            ? 'bg-red-600/20 text-white font-semibold'
                            : 'text-zinc-300 hover:bg-zinc-900'
                        }`}
                      >
                        <span className="truncate">{src.name}</span>
                        {idx === currentSourceIndex && <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
              className="h-9 w-9 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-zinc-200 flex items-center justify-center transition-all active:scale-95"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
