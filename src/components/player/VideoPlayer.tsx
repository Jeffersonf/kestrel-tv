import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Hls from 'hls.js';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Minimize, 
  RotateCcw, AlertCircle, RefreshCw, ExternalLink,
  PictureInPicture, Zap, HelpCircle, Activity, Shield
} from 'lucide-react';
import type { ChannelSource } from '../../types';
import { proxyService, createProxyHlsLoader, createProxyFragLoader } from '../../services/proxyService';
import { storageService } from '../../services/storageService';

interface VideoPlayerProps {
  title: string;
  sources: (ChannelSource | string)[];
  isLive?: boolean;
  mediaId?: string;
  onClose?: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  title,
  sources,
  isLive = false,
  mediaId,
  onClose
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  const playableSources = useMemo(() => {
    return proxyService.expandSources(sources);
  }, [sources]);

  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);
  const [showControls, setShowControls] = useState(true);
  const [showShortcutsHelp, setShowShortcutsHelp] = useState(false);
  const [bandwidthKbps, setBandwidthKbps] = useState<number>(0);

  const controlsTimeoutRef = useRef<number | null>(null);
  const loadTimeoutRef = useRef<number | null>(null);

  const activeSource = playableSources[currentSourceIndex] || playableSources[0];

  const handleNextSource = useCallback(() => {
    if (currentSourceIndex < playableSources.length - 1) {
      const nextIdx = currentSourceIndex + 1;
      setStatusNotice(`Fonte ${currentSourceIndex + 1} instável. Conectando à Fonte ${nextIdx + 1}...`);
      setCurrentSourceIndex(nextIdx);
    } else {
      setErrorMsg('Não foi possível reproduzir este conteúdo em nenhuma das fontes disponíveis.');
      setIsLoading(false);
    }
  }, [currentSourceIndex, playableSources.length]);

  // Carregar e reproduzir vídeo
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeSource?.url) return;

    setIsLoading(true);
    setErrorMsg(null);

    const streamUrl = activeSource.url;

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    if (loadTimeoutRef.current) window.clearTimeout(loadTimeoutRef.current);

    loadTimeoutRef.current = window.setTimeout(() => {
      if (video.paused && video.readyState < 2) {
        console.warn('Timeout de carregamento na fonte:', streamUrl);
        handleNextSource();
      }
    }, 10000);

    const isHls = streamUrl.includes('.m3u8') || streamUrl.includes('.txt') || isLive;

    if (isHls && Hls.isSupported()) {
      const hlsConfig: any = {
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 60,
        manifestLoadingTimeOut: 12000,
        levelLoadingTimeOut: 12000,
        fragLoadingTimeOut: 20000,
      };

      if (activeSource.isProxied) {
        hlsConfig.loader = createProxyHlsLoader(streamUrl);
        hlsConfig.fLoader = createProxyFragLoader(streamUrl);
      }

      const hls = new Hls(hlsConfig);
      hlsRef.current = hls;

      hls.loadSource(streamUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoading(false);
        setStatusNotice(null);
        if (loadTimeoutRef.current) window.clearTimeout(loadTimeoutRef.current);
        video.play().catch(() => setIsPlaying(false));
      });

      hls.on(Hls.Events.FRAG_LOADED, (_, data: any) => {
        const stats = data?.stats || data?.frag?.stats;
        if (stats) {
          const bytes = stats.loaded || stats.total || 0;
          const durationSec = Math.max(0.1, ((stats.tload - stats.tfirst) || (stats.tload - stats.trequest) || 1000) / 1000);
          if (bytes > 0 && durationSec > 0) {
            const kbps = Math.round(((bytes * 8) / durationSec) / 1000);
            if (kbps > 20) {
              setBandwidthKbps(kbps);
            }
          }
        } else if (hls.bandwidthEstimate && hls.bandwidthEstimate > 0) {
          setBandwidthKbps(Math.round(hls.bandwidthEstimate / 1000));
        }
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          console.warn('HLS Fatal:', data.type, data.details);
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
      video.addEventListener('loadedmetadata', () => {
        setIsLoading(false);
        setStatusNotice(null);
        if (loadTimeoutRef.current) window.clearTimeout(loadTimeoutRef.current);
        video.play().catch(() => setIsPlaying(false));
      }, { once: true });
    } else {
      video.src = streamUrl;
      video.load();
      video.play().then(() => {
        setIsLoading(false);
        setStatusNotice(null);
        if (loadTimeoutRef.current) window.clearTimeout(loadTimeoutRef.current);
      }).catch(() => setIsPlaying(false));
    }

    if (mediaId && !isLive) {
      const saved = storageService.getProgress(mediaId);
      if (saved && saved.currentTime > 5 && saved.currentTime < saved.duration - 30) {
        video.currentTime = saved.currentTime;
      }
    }

    const handleProgress = () => {
      if (video.buffered && video.buffered.length > 0) {
        setBandwidthKbps(prev => prev > 0 ? prev : (isLive ? 2200 : 1600));
      }
    };
    video.addEventListener('progress', handleProgress);

    return () => {
      video.removeEventListener('progress', handleProgress);
      if (loadTimeoutRef.current) window.clearTimeout(loadTimeoutRef.current);
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [currentSourceIndex, activeSource, isLive, mediaId, handleNextSource]);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignorar se estiver digitando em input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      switch (e.key.toLowerCase()) {
        case ' ':
          e.preventDefault();
          togglePlay();
          break;
        case 'f':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'm':
          e.preventDefault();
          toggleMute();
          break;
        case 'p':
          e.preventDefault();
          togglePiP();
          break;
        case 's':
          e.preventDefault();
          handleNextSource();
          break;
        case 'escape':
          if (isFullscreen) {
            document.exitFullscreen().catch(() => {});
          } else if (onClose) {
            onClose();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, handleNextSource, onClose]);

  // Auto-hide controls
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) window.clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = window.setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3500);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(console.error);
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const togglePiP = async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (videoRef.current) {
        await videoRef.current.requestPictureInPicture();
      }
    } catch (e) {
      console.warn('PiP não suportado:', e);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (videoRef.current) {
      videoRef.current.currentTime = val;
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(console.error);
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(console.error);
      setIsFullscreen(false);
    }
  };

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = Math.floor(secs % 60);
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative w-full flex flex-col gap-3">
      {/* Ambient Cinema Backlight */}
      <div className="relative w-full">
        <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 via-red-500/10 to-rose-600/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden group select-none shadow-2xl border border-white/10"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-contain cursor-pointer"
            onClick={togglePlay}
            onPlay={() => { setIsPlaying(true); setIsLoading(false); }}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={() => {
              if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime);
                setDuration(videoRef.current.duration || 0);
              }
            }}
            onWaiting={() => setIsLoading(true)}
            onPlaying={() => { setIsLoading(false); setStatusNotice(null); }}
            onError={() => handleNextSource()}
            playsInline
          />

          {/* Loading & Status Overlay */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm pointer-events-none z-15">
              <div className="flex flex-col items-center gap-3 text-center px-4">
                <RefreshCw className="w-10 h-10 text-red-500 animate-spin" />
                <span className="text-xs font-semibold text-zinc-200">
                  {statusNotice || `Sincronizando sinal (${activeSource.name || `Fonte ${currentSourceIndex + 1}`})...`}
                </span>
                <span className="text-[11px] text-zinc-500">Aguarde a conexão do buffer HLS</span>
              </div>
            </div>
          )}

          {/* Error View */}
          {errorMsg && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/95 p-6 z-20">
              <div className="max-w-md text-center flex flex-col items-center gap-3">
                <AlertCircle className="w-12 h-12 text-red-500" />
                <h3 className="text-lg font-bold text-white">Transmissão Indisponível</h3>
                <p className="text-xs text-zinc-400">{errorMsg}</p>
                <div className="flex flex-wrap gap-2.5 justify-center mt-3">
                  <button 
                    onClick={() => { setCurrentSourceIndex(0); setErrorMsg(null); }}
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-lg shadow-red-600/30"
                  >
                    <RotateCcw className="w-4 h-4" /> Tentar Novamente
                  </button>
                  {activeSource?.url && (
                    <a 
                      href={activeSource.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-xl flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" /> Abrir Externamente
                    </a>
                  )}
                  {onClose && (
                    <button 
                      onClick={onClose}
                      className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold rounded-xl"
                    >
                      Fechar
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Top Header Overlay */}
          <div 
            className={`absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent transition-opacity duration-300 flex items-center justify-between z-10 ${
              showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="flex items-center gap-3">
              {isLive && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/40 text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  Ao Vivo
                </span>
              )}
              <h2 className="text-sm md:text-base font-bold text-white tracking-tight truncate max-w-sm md:max-w-xl">
                {title}
              </h2>
            </div>

            {/* Top Right Actions */}
            <div className="flex items-center gap-2">
                            {!activeSource?.isProxied ? (
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-md text-xs font-semibold text-emerald-400 shadow-sm"
                  title="Conexão Direta: 0 requisições gastas no proxy Cloudflare!"
                >
                  <Zap className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  <span className="hidden sm:inline">Zero Cota (Direto)</span>
                  <span className="sm:hidden">0 Cota</span>
                </div>
              ) : (
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-zinc-900/80 border border-white/10 backdrop-blur-md text-[11px] font-medium text-zinc-400 shadow-sm"
                  title="Conectado via Proxy Seguro Cloudflare"
                >
                  <Shield className="w-3 h-3 text-red-400" />
                  <span className="hidden sm:inline">Proxy CORS</span>
                </div>
              )}

              {bandwidthKbps > 0 && (
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-zinc-900/85 border border-white/10 backdrop-blur-md text-xs font-mono shadow-sm"
                  title="Taxa de download / consumo da conexão em tempo real"
                >
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span className="font-semibold text-emerald-300">
                    {bandwidthKbps >= 1000
                      ? `${(bandwidthKbps / 1000).toFixed(1)} Mb/s`
                      : `${bandwidthKbps} kb/s`}
                  </span>
                </div>
              )}

              <button
                onClick={() => setShowShortcutsHelp(!showShortcutsHelp)}
                className="p-2 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 rounded-xl text-zinc-400 hover:text-white backdrop-blur-md transition-colors"
                title="Atalhos de teclado"
              >
                <HelpCircle className="w-4 h-4" />
              </button>

              {onClose && (
                <button
                  onClick={onClose}
                  className="px-3 py-1.5 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 rounded-xl text-zinc-300 hover:text-white backdrop-blur-md transition-colors text-xs font-semibold"
                >
                  ✕ Fechar
                </button>
              )}
            </div>
          </div>

          {/* Shortcuts Help Modal */}
          {showShortcutsHelp && (
            <div className="absolute inset-0 z-30 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <div className="max-w-xs w-full bg-zinc-900 border border-white/10 rounded-2xl p-5 text-left text-xs text-zinc-300 space-y-2.5">
                <div className="flex items-center justify-between font-bold text-white pb-2 border-b border-white/10">
                  <span>Atalhos de Teclado</span>
                  <button onClick={() => setShowShortcutsHelp(false)} className="text-zinc-500 hover:text-white">✕</button>
                </div>
                <div className="flex justify-between"><span>Espaço</span><span className="font-mono text-zinc-400">Play / Pause</span></div>
                <div className="flex justify-between"><span>F</span><span className="font-mono text-zinc-400">Tela Cheia</span></div>
                <div className="flex justify-between"><span>M</span><span className="font-mono text-zinc-400">Mudo</span></div>
                <div className="flex justify-between"><span>P</span><span className="font-mono text-zinc-400">Picture-in-Picture</span></div>
                <div className="flex justify-between"><span>S</span><span className="font-mono text-zinc-400">Próximo Servidor</span></div>
                <div className="flex justify-between"><span>Esc</span><span className="font-mono text-zinc-400">Fechar Player</span></div>
              </div>
            </div>
          )}

          {/* Bottom Controls Bar */}
          <div 
            className={`absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-300 z-10 ${
              showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {!isLive && duration > 0 && (
              <div className="flex items-center gap-2 mb-2 group/progress">
                <span className="text-[11px] font-mono text-zinc-400 w-12 text-right">
                  {formatTime(currentTime)}
                </span>
                <input
                  type="range"
                  min={0}
                  max={duration}
                  step={0.5}
                  value={currentTime}
                  onChange={handleSeek}
                  className="flex-1 h-1.5 bg-zinc-800 accent-red-600 rounded-lg cursor-pointer transition-all hover:h-2"
                />
                <span className="text-[11px] font-mono text-zinc-400 w-12">
                  {formatTime(duration)}
                </span>
              </div>
            )}

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <div className="flex items-center gap-2 group/vol">
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-xl text-zinc-300 hover:text-white transition-colors"
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
                    className="w-20 h-1.5 bg-zinc-800 accent-red-600 rounded-lg cursor-pointer opacity-80 group-hover/vol:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* PiP Button */}
                <button
                  onClick={togglePiP}
                  className="p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                  title="Picture-in-Picture (P)"
                >
                  <PictureInPicture className="w-4 h-4" />
                </button>

                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                  title="Tela Cheia (F)"
                >
                  {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-Server Quick Switch Bar */}
      {playableSources.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 px-1 scrollbar-none">
          <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5 mr-1 whitespace-nowrap">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Servidores ({playableSources.length}):
          </span>

          {playableSources.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrentSourceIndex(i)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                i === currentSourceIndex
                  ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-600/30'
                  : 'bg-zinc-900 border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {src.name || `Servidor ${i + 1}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
