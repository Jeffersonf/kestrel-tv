import React, { useState, useEffect, useRef } from 'react';
import { 
  Tv, Trophy, List, ChevronUp, ChevronDown
} from 'lucide-react';
import type { Channel } from '../../types';
import { catalogService } from '../../services/catalogService';
import { storageService } from '../../services/storageService';
import { VideoPlayer } from '../player/VideoPlayer';
import { TvOSDBanner } from './TvOSDBanner';
import { TvGuideOverlay } from './TvGuideOverlay';
import { TvRemoteControl } from './TvRemoteControl';
import { TvChannelRails } from './TvChannelRails';

interface SmartTvViewProps {
  onOpenFootball: () => void;
  overrideChannelKeyword?: string | null;
  onClearOverrideChannel?: () => void;
}

export const SmartTvView: React.FC<SmartTvViewProps> = ({ 
  onOpenFootball,
  overrideChannelKeyword,
  onClearOverrideChannel
}) => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [currentChannelIndex, setCurrentChannelIndex] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  // OSD & Zapping State
  const [showOSD, setShowOSD] = useState(false);
  const [inputNumber, setInputNumber] = useState<string | null>(null);
  const osdTimerRef = useRef<number | null>(null);
  const numberTimerRef = useRef<number | null>(null);

  // Overlays
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isRemoteOpen, setIsRemoteOpen] = useState(false);

  // Player container ref for scrolling
  const playerRef = useRef<HTMLDivElement>(null);

  // Carregar canais
  useEffect(() => {
    catalogService.fetchChannels().then((data) => {
      // Filtra canais adultos que agora residem exclusivamente no #0000
      const clean = data.filter((c) => c.category !== 'Adulto (+18)');
      setChannels(clean);
      setFavorites(storageService.getFavoriteChannels());
    });
  }, []);

  // Monitorar se veio um comando externo de canal (ex: clicar no Santos FC ou jogo de futebol)
  useEffect(() => {
    if (overrideChannelKeyword && channels.length > 0) {
      const kw = overrideChannelKeyword.toLowerCase();
      const targetIdx = channels.findIndex((c) => c.name.toLowerCase().includes(kw));
      if (targetIdx !== -1) {
        changeChannel(targetIdx);
      }
      if (onClearOverrideChannel) onClearOverrideChannel();
    }
  }, [overrideChannelKeyword, channels]);

  const currentChannel = channels[currentChannelIndex] || channels[0] || null;

  // Função central de troca de canal
  const changeChannel = (index: number) => {
    if (channels.length === 0) return;
    const safeIdx = (index + channels.length) % channels.length;
    setCurrentChannelIndex(safeIdx);
    triggerOSD();

    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const channelUp = () => changeChannel(currentChannelIndex + 1);
  const channelDown = () => changeChannel(currentChannelIndex - 1);

  // Disparar OSD Banner por 3.5 segundos
  const triggerOSD = () => {
    setShowOSD(true);
    if (osdTimerRef.current) window.clearTimeout(osdTimerRef.current);
    osdTimerRef.current = window.setTimeout(() => {
      setShowOSD(false);
    }, 3500);
  };

  // Digitação numérica de canal (ex: 1, 10, 50)
  const handleNumericInput = (digit: string) => {
    let newNum = (inputNumber || '') + digit;
    if (digit === 'DEL') {
      newNum = (inputNumber || '').slice(0, -1);
    }
    setInputNumber(newNum);

    if (numberTimerRef.current) window.clearTimeout(numberTimerRef.current);

    numberTimerRef.current = window.setTimeout(() => {
      const targetNum = parseInt(newNum, 10);
      if (!isNaN(targetNum) && targetNum > 0) {
        const foundIdx = channels.findIndex((c) => (c.number || 0) === targetNum);
        if (foundIdx !== -1) {
          changeChannel(foundIdx);
        } else if (targetNum <= channels.length) {
          changeChannel(targetNum - 1);
        }
      }
      setInputNumber(null);
    }, 1200);
  };

  // Atalhos Globais de Controle Remoto / Teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      switch (e.key) {
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          channelUp();
          break;
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          channelDown();
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          setIsGuideOpen((prev) => !prev);
          break;
        case 'i':
        case 'I':
          e.preventDefault();
          triggerOSD();
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          setIsRemoteOpen((prev) => !prev);
          break;
      }

      // Se for dígito 0-9
      if (/^[0-9]$/.test(e.key)) {
        handleNumericInput(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [channels, currentChannelIndex, inputNumber]);

  const toggleFavorite = (channelId: string) => {
    storageService.toggleFavoriteChannel(channelId);
    setFavorites(storageService.getFavoriteChannels());
  };

  return (
    <div className="w-full flex flex-col gap-6 select-none animate-in fade-in duration-300">
      
      {/* ======================================================== */}
      {/* 📺 TV STAGE PRINCIPAL (CINEMA FULL SCREEN PLAYER)        */}
      {/* ======================================================== */}
      <div ref={playerRef} className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-2">
        <div className="relative rounded-3xl overflow-hidden bg-black border-2 border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.9)] group">
          {currentChannel ? (
            <VideoPlayer
              title={`CH ${String(currentChannel.number || currentChannelIndex + 1).padStart(3, '0')} - ${currentChannel.name}`}
              sources={currentChannel.sources}
              isLive={true}
              mediaId={currentChannel.id}
            />
          ) : (
            <div className="aspect-video w-full flex items-center justify-center bg-zinc-950">
              <span className="text-xs text-zinc-500 font-mono">Carregando canais da TV...</span>
            </div>
          )}

          {/* Quick TV Control Bar Under Player */}
          <div className="bg-zinc-950/95 border-t border-white/10 p-3.5 flex flex-wrap items-center justify-between gap-3">
            {/* Left Channel Details */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-xl bg-red-600 text-white font-mono font-black text-xs shadow-md shadow-red-600/30">
                CH {String(currentChannel?.number || currentChannelIndex + 1).padStart(3, '0')}
              </span>
              <span className="text-sm font-black text-white tracking-tight truncate max-w-xs sm:max-w-md">
                {currentChannel?.name}
              </span>
            </div>

            {/* TV Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={channelDown}
                className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-xs font-bold flex items-center gap-1 transition-all active:scale-95"
                title="Canal Anterior (Seta Baixo)"
              >
                <ChevronDown className="w-3.5 h-3.5" /> CH-
              </button>

              <button
                onClick={channelUp}
                className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-xs font-bold flex items-center gap-1 transition-all active:scale-95"
                title="Próximo Canal (Seta Cima)"
              >
                <ChevronUp className="w-3.5 h-3.5" /> CH+
              </button>

              <button
                onClick={() => setIsGuideOpen(true)}
                className="px-3.5 py-1.5 rounded-xl bg-red-600/20 hover:bg-red-600 border border-red-500/40 text-red-300 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm"
              >
                <List className="w-3.5 h-3.5" /> Guia (G)
              </button>

              <button
                onClick={onOpenFootball}
                className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500 border border-amber-500/40 text-amber-300 hover:text-black text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm"
              >
                <Trophy className="w-3.5 h-3.5 text-amber-400" /> Futebol & Santos
              </button>

              <button
                onClick={() => setIsRemoteOpen(!isRemoteOpen)}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white transition-all active:scale-95"
                title="Abrir Controle Remoto Virtual (R)"
              >
                <Tv className="w-4 h-4 text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 📺 CARROSSÉIS DE SMART TV (TRILHOS CATEGORIZADOS)       */}
      {/* ======================================================== */}
      <div className="w-full max-w-7xl mx-auto">
        <TvChannelRails
          channels={channels}
          currentChannel={currentChannel}
          onSelectChannel={(ch) => {
            const idx = channels.findIndex((c) => c.id === ch.id);
            if (idx !== -1) changeChannel(idx);
          }}
        />
      </div>

      {/* ======================================================== */}
      {/* 📺 TV OSD BANNER (ON-SCREEN DISPLAY)                     */}
      {/* ======================================================== */}
      {currentChannel && (
        <TvOSDBanner
          channel={currentChannel}
          channelNumber={currentChannel.number || currentChannelIndex + 1}
          visible={showOSD}
          inputNumber={inputNumber}
        />
      )}

      {/* ======================================================== */}
      {/* 📋 GUIA DE PROGRAMAÇÃO OVERLAY (EPG)                     */}
      {/* ======================================================== */}
      <TvGuideOverlay
        channels={channels}
        currentChannel={currentChannel}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        onSelectChannel={(ch) => {
          const idx = channels.findIndex((c) => c.id === ch.id);
          if (idx !== -1) changeChannel(idx);
        }}
      />

      {/* ======================================================== */}
      {/* 📱 CONTROLE REMOTO VIRTUAL FLUTUANTE                     */}
      {/* ======================================================== */}
      <TvRemoteControl
        isOpen={isRemoteOpen}
        onClose={() => setIsRemoteOpen(false)}
        onChannelUp={channelUp}
        onChannelDown={channelDown}
        onVolumeUp={() => {}}
        onVolumeDown={() => {}}
        onToggleMute={() => {}}
        onNumberClick={handleNumericInput}
        onToggleGuide={() => setIsGuideOpen((prev) => !prev)}
        onToggleInfo={triggerOSD}
        onToggleFullscreen={() => {
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            document.documentElement.requestFullscreen();
          }
        }}
        onOpenFootball={onOpenFootball}
      />

    </div>
  );
};
