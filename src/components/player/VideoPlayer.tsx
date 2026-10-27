import React, { useEffect, useRef, useState, useCallback } from 'react';
import Hls from 'hls.js';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Minimize, 
  RotateCcw, AlertCircle, RefreshCw, Layers, Check
} from 'lucide-react';
import type { ChannelSource } from '../../types';
import { proxyService } from '../../services/proxyService';
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

  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showControls, setShowControls] = useState(true);
  const [showSourceMenu, setShowSourceMenu] = useState(false);

  const controlsTimeoutRef = useRef<number | null>(null);

  // Normalizar fontes para ChannelSource
  const normalizedSources: ChannelSource[] = sources.map((s, idx) => {
    if (typeof s === 'string') {
      return { url: s, name: `Fonte ${idx + 1}` };
    }
    return {
      ...s,
      name: s.name || `Fonte ${idx + 1}${s.quality ? ` (${s.quality})` : ''}`
    };
  });

  const activeSource = normalizedSources[currentSourceIndex] || normalizedSources[0];

  const handleNextSource = useCallback(() => {
    if (currentSourceIndex < normalizedSources.length - 1) {
      console.log(`Alternando para fonte seguinte: ${currentSourceIndex + 1}`);
      setCurrentSourceIndex(prev => prev + 1);
    } else {
      setErrorMsg('Todas as fontes disponíveis falharam para este canal/título.');
      setIsLoading(false);
    }
  }, [currentSourceIndex, normalizedSources.length]);

  // Carregar e reproduzir vídeo
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeSource?.url) return;

    setIsLoading(true);
    setErrorMsg(null);

    const rawUrl = activeSource.url;
    const streamUrl = proxyService.wrapStreamUrl(rawUrl, activeSource.referer);

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    const isHls = streamUrl.includes('.m3u8') || streamUrl.includes('.txt') || isLive;

    if (isHls && Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 60,
      });
      hlsRef.current = hls;

      hls.loadSource(streamUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoading(false);
        video.play().catch(() => setIsPlaying(false));
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          console.warn('Erro fatal no HLS:', data.type, data.details);
          hls.destroy();
          hlsRef.current = null;
          handleNextSource();
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl') && isHls) {
      // Suporte nativo Safari iOS / Mac
      video.src = streamUrl;
      video.addEventListener('loadedmetadata', () => {
        setIsLoading(false);
        video.play().catch(() => setIsPlaying(false));
      }, { once: true });
    } else {
      // HTML5 video direto (MP4, WebM)
      video.src = streamUrl;
      video.load();
      video.play().catch(() => setIsPlaying(false));
    }

    // Retomar progresso se for VOD
    if (mediaId && !isLive) {
      const saved = storageService.getProgress(mediaId);
      if (saved && saved.currentTime > 5 && saved.currentTime < saved.duration - 30) {
        video.currentTime = saved.currentTime;
      }
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [currentSourceIndex, activeSource, isLive, mediaId, handleNextSource]);

  // Salvar progresso periodicamente para VOD
  useEffect(() => {
    if (isLive || !mediaId || duration <= 0) return;
    const interval = setInterval(() => {
      if (videoRef.current && currentTime > 5) {
        storageService.saveProgress(mediaId, currentTime, duration);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isLive, mediaId, currentTime, duration]);

  // Controles de visibilidade com auto-hide
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) window.clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = window.setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
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

  // Atalhos de teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'KeyF') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.code === 'KeyM') {
        e.preventDefault();
        toggleMute();
      } else if (e.code === 'ArrowRight' && !isLive && videoRef.current) {
        e.preventDefault();
        videoRef.current.currentTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + 10);
      } else if (e.code === 'ArrowLeft' && !isLive && videoRef.current) {
        e.preventDefault();
        videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
      } else if (e.code === 'Escape' && onClose && !document.fullscreenElement) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isLive]);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden group select-none shadow-2xl border border-white/5"
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
        onPlaying={() => setIsLoading(false)}
        onError={() => handleNextSource()}
        playsInline
      />

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm pointer-events-none">
          <div className="flex flex-col items-center gap-3">
            <RefreshCw className="w-8 h-8 text-red-500 animate-spin" />
            <span className="text-xs font-medium text-zinc-300">Carregando transmissão...</span>
          </div>
        </div>
      )}

      {/* Error Message */}
      {errorMsg && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/90 p-6 z-20">
          <div className="max-w-md text-center flex flex-col items-center gap-3">
            <AlertCircle className="w-10 h-10 text-red-500" />
            <h3 className="text-base font-semibold text-white">Falha na Reprodução</h3>
            <p className="text-xs text-zinc-400">{errorMsg}</p>
            <div className="flex gap-2 mt-2">
              <button 
                onClick={() => { setCurrentSourceIndex(0); setErrorMsg(null); }}
                className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Tentar novamente
              </button>
              {onClose && (
                <button 
                  onClick={onClose}
                  className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium rounded-lg"
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
        className={`absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-300 flex items-center justify-between z-10 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-3">
          {isLive && (
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-red-600/20 text-red-400 border border-red-500/30 text-[11px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Ao Vivo
            </span>
          )}
          <h2 className="text-sm md:text-base font-semibold text-white tracking-tight truncate max-w-sm md:max-w-xl">
            {title}
          </h2>
        </div>

        {/* Source Switcher & Close */}
        <div className="flex items-center gap-2 relative">
          {normalizedSources.length > 1 && (
            <div className="relative">
              <button
                onClick={() => setShowSourceMenu(!showSourceMenu)}
                className="px-2.5 py-1.5 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 rounded-lg text-xs font-medium text-zinc-200 flex items-center gap-1.5 backdrop-blur-md transition-colors"
                title="Trocar fonte de streaming"
              >
                <Layers className="w-3.5 h-3.5 text-red-400" />
                <span>{activeSource.name || `Fonte ${currentSourceIndex + 1}`}</span>
              </button>

              {showSourceMenu && (
                <div className="absolute right-0 top-full mt-1.5 w-48 bg-zinc-900/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl p-1 z-30 flex flex-col gap-0.5">
                  <div className="px-2 py-1 text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">
                    Servidores Disponíveis
                  </div>
                  {normalizedSources.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setCurrentSourceIndex(i);
                        setShowSourceMenu(false);
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        i === currentSourceIndex
                          ? 'bg-red-600/20 text-red-400 font-semibold'
                          : 'text-zinc-300 hover:bg-zinc-800/80'
                      }`}
                    >
                      <span className="truncate">{src.name || `Fonte ${i + 1}`}</span>
                      {i === currentSourceIndex && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 rounded-lg text-zinc-300 hover:text-white backdrop-blur-md transition-colors text-xs font-medium"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Bottom Controls Overlay */}
      <div 
        className={`absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 z-10 ${
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
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-1.5 group/vol">
              <button
                onClick={toggleMute}
                className="p-2 rounded-xl text-zinc-300 hover:text-white transition-colors"
              >
                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-zinc-800 accent-red-600 rounded-lg cursor-pointer opacity-80 group-hover/vol:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl text-zinc-300 hover:text-white transition-colors"
              title="Tela cheia (F)"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
