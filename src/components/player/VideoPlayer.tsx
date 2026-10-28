import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Hls from 'hls.js';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Minimize, 
  RotateCcw, AlertCircle, RefreshCw, Layers, Check, ExternalLink,
  Radio, Tv
} from 'lucide-react';
import type { Channel, ChannelSource } from '../../types';
import { proxyService } from '../../services/proxyService';
import { storageService } from '../../services/storageService';

interface VideoPlayerProps {
  title: string;
  sources: (ChannelSource | string)[];
  isLive?: boolean;
  mediaId?: string;
  channelLogo?: string;
  channels?: Channel[];
  onSelectChannel?: (channel: Channel) => void;
  onClose?: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  title,
  sources,
  isLive = false,
  mediaId,
  channelLogo,
  channels,
  onSelectChannel,
  onClose
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  // Expande e ordena as fontes gerando opções diretas e roteadas pelo proxy
  const playableSources = useMemo(() => {
    return proxyService.expandSources(sources);
  }, [sources]);

  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showUnmuteNotice, setShowUnmuteNotice] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);
  const [showControls, setShowControls] = useState(true);
  const [showSourceMenu, setShowSourceMenu] = useState(false);
  const [showZappingBar, setShowZappingBar] = useState(true);

  const controlsTimeoutRef = useRef<number | null>(null);
  const stallTimeoutRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const consecutiveErrorsRef = useRef<number>(0);

  const activeSource = playableSources[currentSourceIndex] || playableSources[0];

  // Avança para a próxima fonte caso haja instabilidade ou erro 404
  const handleNextSource = useCallback(() => {
    if (currentSourceIndex < playableSources.length - 1) {
      const nextIdx = currentSourceIndex + 1;
      consecutiveErrorsRef.current = 0;
      setStatusNotice(`Fonte ${currentSourceIndex + 1} instável. Conectando à Fonte ${nextIdx + 1}...`);
      setCurrentSourceIndex(nextIdx);
    } else {
      setErrorMsg('Não foi possível reproduzir este conteúdo nas fontes disponíveis.');
      setIsLoading(false);
    }
  }, [currentSourceIndex, playableSources.length]);

  // Limpa timer de watchdog
  const clearStallTimeout = () => {
    if (stallTimeoutRef.current) {
      window.clearTimeout(stallTimeoutRef.current);
      stallTimeoutRef.current = null;
    }
  };

  // Agenda verificação de reprodução contínua (watchdog)
  const scheduleStallCheck = useCallback(() => {
    clearStallTimeout();
    stallTimeoutRef.current = window.setTimeout(() => {
      const video = videoRef.current;
      if (!video) return;
      // Se após 4.5 segundos o vídeo não estiver reproduzindo ou o tempo não avançar:
      if (video.paused || video.currentTime === lastTimeRef.current || video.readyState < 2) {
        console.warn('[Watchdog] Stream estagnou na fonte atual, avançando...');
        handleNextSource();
      }
    }, 4500);
  }, [handleNextSource]);

  // Carregar e reproduzir vídeo
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeSource?.url) return;

    setIsLoading(true);
    setErrorMsg(null);
    clearStallTimeout();
    lastTimeRef.current = 0;
    consecutiveErrorsRef.current = 0;

    const streamUrl = activeSource.url;

    // Destrói instância Hls anterior e limpa elemento de vídeo
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }
    video.pause();
    video.removeAttribute('src');
    video.load();

    // Agenda watchdog de carregamento
    scheduleStallCheck();

    const isHls = streamUrl.includes('.m3u8') || streamUrl.includes('.txt') || isLive;

    if (isHls && Hls.isSupported()) {
      const hls = new Hls({
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
      });

      hlsRef.current = hls;
      hls.loadSource(streamUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoading(false);
        setStatusNotice(null);
        consecutiveErrorsRef.current = 0;

        // Inicia reprodução com tratamento de bloqueio de áudio do navegador
        video.play().catch(() => {
          video.muted = true;
          setIsMuted(true);
          setShowUnmuteNotice(true);
          video.play().catch(() => setIsPlaying(false));
        });
      });

      hls.on(Hls.Events.FRAG_LOADED, () => {
        setIsLoading(false);
        consecutiveErrorsRef.current = 0;
        clearStallTimeout();
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        // Incrementa erros consecutivos em fragmentos ou níveis
        if (data.details?.includes('LoadError') || data.details?.includes('ParsingError')) {
          consecutiveErrorsRef.current++;
          if (consecutiveErrorsRef.current >= 3) {
            console.warn('[HLS] Múltiplos fragmentos falharam, alternando fonte...');
            hls.destroy();
            hlsRef.current = null;
            handleNextSource();
            return;
          }
        }

        if (data.fatal) {
          console.warn('[HLS Fatal]:', data.type, data.details);
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
      // Suporte nativo Safari iOS / macOS
      video.src = streamUrl;
      video.addEventListener('loadedmetadata', () => {
        setIsLoading(false);
        setStatusNotice(null);
        clearStallTimeout();
        video.play().catch(() => {
          video.muted = true;
          setIsMuted(true);
          setShowUnmuteNotice(true);
          video.play().catch(() => setIsPlaying(false));
        });
      }, { once: true });
    } else {
      // Reprodução HTML5 direta (MP4, WebM)
      video.src = streamUrl;
      video.load();
      video.play().then(() => {
        setIsLoading(false);
        setStatusNotice(null);
        clearStallTimeout();
      }).catch(() => {
        video.muted = true;
        setIsMuted(true);
        setShowUnmuteNotice(true);
        video.play().catch(() => setIsPlaying(false));
      });
    }

    // Retomar progresso se for VOD
    if (mediaId && !isLive) {
      const saved = storageService.getProgress(mediaId);
      if (saved && saved.currentTime > 5 && saved.currentTime < saved.duration - 30) {
        video.currentTime = saved.currentTime;
      }
    }

    return () => {
      clearStallTimeout();
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [currentSourceIndex, activeSource, isLive, mediaId, handleNextSource, scheduleStallCheck]);

  // Ativa som e remove aviso de autoplay
  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      setIsMuted(false);
      setShowUnmuteNotice(false);
    }
  };

  // Salvar progresso de VOD
  useEffect(() => {
    if (isLive || !mediaId || duration <= 0) return;
    const interval = setInterval(() => {
      if (videoRef.current && currentTime > 5) {
        storageService.saveProgress(mediaId, currentTime, duration);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isLive, mediaId, currentTime, duration]);

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
    if (!video.muted) setShowUnmuteNotice(false);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
      if (val > 0) setShowUnmuteNotice(false);
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
    <div className="flex flex-col gap-3 w-full">
      {/* Sky+ Theater Player Container */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full aspect-video bg-[#05070d] rounded-2xl md:rounded-3xl overflow-hidden group select-none shadow-2xl border border-white/10 ring-1 ring-white/5"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-contain cursor-pointer"
          onClick={togglePlay}
          onPlay={() => { 
            setIsPlaying(true); 
            setIsLoading(false); 
            clearStallTimeout();
          }}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={() => {
            if (videoRef.current) {
              const cur = videoRef.current.currentTime;
              setCurrentTime(cur);
              setDuration(videoRef.current.duration || 0);
              if (cur > lastTimeRef.current + 0.3) {
                lastTimeRef.current = cur;
                clearStallTimeout();
              }
            }
          }}
          onWaiting={() => {
            setIsLoading(true);
            scheduleStallCheck();
          }}
          onPlaying={() => { 
            setIsLoading(false); 
            setStatusNotice(null); 
            clearStallTimeout();
          }}
          onError={() => handleNextSource()}
          playsInline
        />

        {/* Unmute Notice Pill (Sky+ Autoplay Fix) */}
        {showUnmuteNotice && (
          <button
            onClick={handleUnmute}
            className="absolute top-16 left-1/2 -translate-x-1/2 z-25 px-4 py-2 rounded-full bg-red-600/95 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-2 shadow-2xl backdrop-blur-md animate-bounce"
          >
            <VolumeX className="w-4 h-4" />
            <span>Vídeo silenciado. Clique para ativar o som</span>
          </button>
        )}

        {/* Loading & Status Overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm pointer-events-none z-15">
            <div className="flex flex-col items-center gap-3 text-center px-4">
              <RefreshCw className="w-8 h-8 text-red-500 animate-spin" />
              <span className="text-xs font-semibold text-zinc-200 drop-shadow">
                {statusNotice || `Conectando (${activeSource?.name || `Fonte ${currentSourceIndex + 1}`})...`}
              </span>
            </div>
          </div>
        )}

        {/* Error View */}
        {errorMsg && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#070a13]/95 p-6 z-20">
            <div className="max-w-md text-center flex flex-col items-center gap-3">
              <AlertCircle className="w-10 h-10 text-red-500" />
              <h3 className="text-base font-bold text-white">Transmissão Indisponível</h3>
              <p className="text-xs text-zinc-400">{errorMsg}</p>
              <div className="flex flex-wrap gap-2 justify-center mt-3">
                <button 
                  onClick={() => { setCurrentSourceIndex(0); setErrorMsg(null); }}
                  className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-lg shadow-red-600/25"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Tentar novamente
                </button>
                {activeSource?.url && (
                  <a 
                    href={activeSource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 bg-white/10 hover:bg-white/15 text-zinc-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 border border-white/10"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Abrir link direto
                  </a>
                )}
                {onClose && (
                  <button 
                    onClick={onClose}
                    className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white text-xs font-medium rounded-xl border border-white/5"
                  >
                    Fechar
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Top Header Controls (Sky+ Style) */}
        <div 
          className={`absolute top-0 inset-x-0 p-4 md:p-5 bg-gradient-to-b from-black/85 via-black/40 to-transparent transition-opacity duration-300 flex items-center justify-between z-10 ${
            showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-3">
            {channelLogo && (
              <div className="w-8 h-8 rounded-lg bg-black/40 border border-white/15 p-1 flex items-center justify-center">
                <img src={channelLogo} alt={title} className="max-h-full max-w-full object-contain" />
              </div>
            )}

            <div className="flex items-center gap-2">
              {isLive && (
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md shadow-red-600/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Ao Vivo
                </span>
              )}
              <h2 className="text-xs md:text-sm font-bold text-white tracking-tight truncate max-w-[200px] sm:max-w-sm md:max-w-md">
                {title}
              </h2>
            </div>
          </div>

          {/* Right Actions: Source Switcher & Close */}
          <div className="flex items-center gap-2 relative">
            {playableSources.length > 1 && (
              <div className="relative">
                <button
                  onClick={() => setShowSourceMenu(!showSourceMenu)}
                  className="px-3 py-1.5 bg-[#121624]/90 hover:bg-[#1a2034] border border-white/15 rounded-xl text-xs font-semibold text-zinc-200 flex items-center gap-1.5 backdrop-blur-md shadow-lg transition-all"
                >
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  <span className="truncate max-w-[120px]">{activeSource?.name || `Fonte ${currentSourceIndex + 1}`}</span>
                </button>

                {showSourceMenu && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-[#0f1422]/95 border border-white/15 rounded-2xl shadow-2xl backdrop-blur-xl p-1.5 z-30 flex flex-col gap-0.5 max-h-64 overflow-y-auto">
                    <div className="px-2.5 py-1.5 text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                      Servidores de Transmissão
                    </div>
                    {playableSources.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setCurrentSourceIndex(i);
                          setShowSourceMenu(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                          i === currentSourceIndex
                            ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/20'
                            : 'text-zinc-300 hover:bg-white/10'
                        }`}
                      >
                        <span className="truncate">{src.name}</span>
                        {i === currentSourceIndex && <Check className="w-3.5 h-3.5 ml-2 shrink-0" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {onClose && (
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center backdrop-blur-md transition-colors text-xs font-bold"
                title="Fechar Player"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Bottom Controls (Sky+ Style) */}
        <div 
          className={`absolute bottom-0 inset-x-0 p-4 md:p-5 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-300 z-10 ${
            showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Progress Bar for VOD */}
          {!isLive && duration > 0 && (
            <div className="flex items-center gap-2 mb-2 group/progress">
              <span className="text-[11px] font-mono text-zinc-400 w-10 text-right">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min={0}
                max={duration}
                step={0.5}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-1 bg-zinc-800 accent-red-600 rounded-lg cursor-pointer transition-all hover:h-1.5"
              />
              <span className="text-[11px] font-mono text-zinc-400 w-10">
                {formatTime(duration)}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-9 h-9 rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all active:scale-95"
                title={isPlaying ? 'Pausar' : 'Reproduzir'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
              </button>

              <div className="flex items-center gap-1.5 group/vol">
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-xl text-zinc-300 hover:text-white transition-colors"
                  title={isMuted ? 'Ativar som' : 'Silenciar'}
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
                  className="w-16 md:w-24 h-1 bg-zinc-800 accent-red-600 rounded-lg cursor-pointer opacity-80 group-hover/vol:opacity-100 transition-opacity"
                />
              </div>

              {isLive && (
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-300 uppercase tracking-wider">
                  <Radio className="w-3 h-3 text-red-500 animate-pulse" />
                  Transmissão Contínua
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-xl text-zinc-300 hover:text-white transition-colors"
                title="Tela Cheia"
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sky+ In-Player Quick Channel Switcher (Zapping Bar) */}
      {channels && channels.length > 0 && onSelectChannel && (
        <div className="w-full bg-[#0b0f1a] border border-white/10 rounded-2xl p-3 flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Tv className="w-3.5 h-3.5 text-sky-400" />
              Trocar de Canal (Zapping Rápido)
            </span>
            <button
              onClick={() => setShowZappingBar(!showZappingBar)}
              className="text-[10px] text-zinc-500 hover:text-zinc-300 font-medium"
            >
              {showZappingBar ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>

          {showZappingBar && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {channels.slice(0, 30).map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => onSelectChannel(ch)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border shrink-0 text-xs font-semibold transition-all ${
                    ch.name === title
                      ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-600/30'
                      : 'bg-[#101626] text-zinc-300 border-white/10 hover:border-sky-500/40 hover:bg-[#162035]'
                  }`}
                >
                  {ch.logo && (
                    <img src={ch.logo} alt={ch.name} className="w-4 h-4 object-contain" />
                  )}
                  <span className="truncate max-w-[120px]">{ch.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
