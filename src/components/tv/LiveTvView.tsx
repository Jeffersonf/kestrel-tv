import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  Search,
  X,
  Heart,
  ChevronLeft,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
  Clock,
  Tv,
} from 'lucide-react';
import type { Channel } from '../../types';
import { epgService } from '../../services/epgService';
import { VideoPlayer } from '../player/VideoPlayer';
import { ChannelRow } from './ChannelRow';
import { TvOSDBanner } from './TvOSDBanner';

interface LiveTvViewProps {
  channels: Channel[];
  selectedChannel: Channel | null;
  onSelectChannel: (channel: Channel) => void;
  favorites: string[];
  onToggleFavorite: (channelId: string) => void;
  epgVersion: number;
}

function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function formatEpoch(sec: number): string {
  return new Date(sec * 1000).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

const INITIAL_RENDER_LIMIT = 150;

export const LiveTvView: React.FC<LiveTvViewProps> = ({
  channels,
  selectedChannel,
  onSelectChannel,
  favorites,
  onToggleFavorite,
  epgVersion,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isGuideOpen, setIsGuideOpen] = useState(true);
  const [showAllRows, setShowAllRows] = useState(false);

  // OSD e zapping numérico para uso na TV
  const [showOSD, setShowOSD] = useState(false);
  const [inputNumber, setInputNumber] = useState<string | null>(null);
  const osdTimerRef = useRef<number | null>(null);
  const numberTimerRef = useRef<number | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const currentIndex = useMemo(() => {
    if (!selectedChannel || channels.length === 0) return 0;
    const idx = channels.findIndex((c) => c.id === selectedChannel.id);
    return idx >= 0 ? idx : 0;
  }, [channels, selectedChannel]);

  const activeChannel = selectedChannel || channels[0] || null;
  const activeChannelNumber = activeChannel?.number || currentIndex + 1;

  const triggerOSD = useCallback(() => {
    setShowOSD(true);
    if (osdTimerRef.current) window.clearTimeout(osdTimerRef.current);
    osdTimerRef.current = window.setTimeout(() => setShowOSD(false), 3200);
  }, []);

  const tuneByIndex = useCallback(
    (index: number) => {
      if (channels.length === 0) return;
      const safeIdx = (index + channels.length) % channels.length;
      onSelectChannel(channels[safeIdx]);
      triggerOSD();
    },
    [channels, onSelectChannel, triggerOSD]
  );

  const handlePrevChannel = useCallback(() => {
    tuneByIndex(currentIndex - 1);
  }, [currentIndex, tuneByIndex]);

  const handleNextChannel = useCallback(() => {
    tuneByIndex(currentIndex + 1);
  }, [currentIndex, tuneByIndex]);

  const handleChannelSelect = useCallback(
    (ch: Channel) => {
      onSelectChannel(ch);
      triggerOSD();
    },
    [onSelectChannel, triggerOSD]
  );

  // Atalhos de TV (controle remoto / teclado)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') {
        if (e.key === 'Escape') target?.blur();
        return;
      }

      if (e.key === 'PageUp' || e.key === 'ChannelUp') {
        e.preventDefault();
        handleNextChannel();
        return;
      }
      if (e.key === 'PageDown' || e.key === 'ChannelDown') {
        e.preventDefault();
        handlePrevChannel();
        return;
      }

      const insideList = Boolean(target?.closest('[data-channel-list="true"]'));
      if (!insideList && e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrevChannel();
        return;
      }
      if (!insideList && e.key === 'ArrowDown') {
        e.preventDefault();
        handleNextChannel();
        return;
      }

      if (e.key.toLowerCase() === 'g') {
        e.preventDefault();
        setIsGuideOpen((v) => !v);
        return;
      }
      if (e.key.toLowerCase() === 'i') {
        e.preventDefault();
        triggerOSD();
        return;
      }
      if (e.key === '/') {
        e.preventDefault();
        setIsGuideOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 50);
        return;
      }

      if (/^[0-9]$/.test(e.key)) {
        const nextDigits = ((inputNumber || '') + e.key).slice(-3);
        setInputNumber(nextDigits);
        if (numberTimerRef.current) window.clearTimeout(numberTimerRef.current);
        numberTimerRef.current = window.setTimeout(() => {
          const targetNum = parseInt(nextDigits, 10);
          if (!Number.isNaN(targetNum) && targetNum > 0) {
            const idx = channels.findIndex((c, i) => (c.number || i + 1) === targetNum);
            if (idx >= 0) tuneByIndex(idx);
            else if (targetNum <= channels.length) tuneByIndex(targetNum - 1);
          }
          setInputNumber(null);
        }, 1000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [channels, handleNextChannel, handlePrevChannel, inputNumber, triggerOSD, tuneByIndex]);

  useEffect(() => {
    return () => {
      if (osdTimerRef.current) window.clearTimeout(osdTimerRef.current);
      if (numberTimerRef.current) window.clearTimeout(numberTimerRef.current);
    };
  }, []);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const ch of channels) {
      counts.set(ch.category, (counts.get(ch.category) || 0) + 1);
    }
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  }, [channels]);

  const filteredChannels = useMemo(() => {
    let list = channels;

    if (selectedCategory === 'Favoritos') {
      const favSet = new Set(favorites);
      list = list.filter((c) => favSet.has(c.id));
    } else if (selectedCategory !== 'Todos') {
      list = list.filter((c) => c.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = normalizeText(searchQuery);
      list = list.filter((c, idx) => {
        const num = String(c.number || idx + 1);
        return (
          normalizeText(c.name).includes(q) ||
          normalizeText(c.category).includes(q) ||
          num === q
        );
      });
    }

    return list;
  }, [channels, favorites, selectedCategory, searchQuery]);

  const visibleRows = useMemo(() => {
    if (showAllRows || searchQuery.trim() || filteredChannels.length <= INITIAL_RENDER_LIMIT) {
      return filteredChannels;
    }
    return filteredChannels.slice(0, INITIAL_RENDER_LIMIT);
  }, [filteredChannels, showAllRows, searchQuery]);

  const activeEpg = useMemo(() => {
    void epgVersion;
    return activeChannel ? epgService.getChannelProgram(activeChannel.name) : undefined;
  }, [activeChannel, epgVersion]);

  const isCurrentFav = activeChannel ? favorites.includes(activeChannel.id) : false;

  return (
    <div className="flex-1 w-full max-w-[1600px] mx-auto lg:px-5 lg:py-4 flex flex-col lg:flex-row gap-4">
      {/* Área Principal do Player (Sticky no mobile, coluna principal na TV/Desktop) */}
      <div className="flex-1 min-w-0 flex flex-col lg:order-2">
        <div className="sticky top-12 lg:static z-30 bg-[#09090b]">
          {activeChannel ? (
            <VideoPlayer
              key={activeChannel.id}
              title={activeChannel.name}
              sources={activeChannel.sources}
              isLive={true}
              onPrevChannel={handlePrevChannel}
              onNextChannel={handleNextChannel}
              onToggleGuide={() => setIsGuideOpen((v) => !v)}
              isGuideOpen={isGuideOpen}
            />
          ) : (
            <div className="w-full aspect-video bg-zinc-950 border border-white/[0.08] lg:rounded-2xl flex flex-col items-center justify-center gap-2 text-zinc-500">
              <Tv className="w-8 h-8" strokeWidth={1.5} />
              <p className="text-xs font-medium">Nenhum canal carregado</p>
            </div>
          )}
        </div>

        {/* Faixa Agora no Ar + Controles rápidos */}
        {activeChannel && (
          <div className="px-3 sm:px-4 lg:px-0 py-3 lg:pt-3.5 border-b lg:border-b-0 border-white/[0.08] bg-[#09090b]">
            <div className="bg-zinc-900/70 border border-white/[0.08] rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3 min-w-0 flex-1">
                <div className="px-2.5 py-1 rounded-lg bg-red-600/15 border border-red-600/30 text-red-400 font-mono font-bold text-xs tabular-nums shrink-0 mt-0.5">
                  CH {String(activeChannelNumber).padStart(3, '0')}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-sm sm:text-base font-bold tracking-tight text-white truncate">
                      {activeChannel.name}
                    </h1>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zinc-800/80 text-[11px] font-medium text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {activeChannel.category}
                    </span>
                  </div>

                  {activeEpg?.current ? (
                    <div className="mt-1.5 space-y-1">
                      <div className="flex items-center gap-2 text-xs text-zinc-200">
                        <Clock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span className="font-mono text-[11px] text-zinc-400 tabular-nums shrink-0">
                          {formatEpoch(activeEpg.current.start)}–{formatEpoch(activeEpg.current.end)}
                        </span>
                        <span className="font-medium truncate">{activeEpg.current.title}</span>
                      </div>
                      <div className="h-1 w-full max-w-md bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-600 transition-all"
                          style={{ width: `${activeEpg.progressPercent}%` }}
                        />
                      </div>
                      {activeEpg.next && (
                        <p className="text-[11px] text-zinc-500 truncate">
                          A seguir ({formatEpoch(activeEpg.next.start)}): {activeEpg.next.title}
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-500 mt-1">
                      Use as setas ▲/▼ ou digite o número do canal na TV para trocar rápido.
                    </p>
                  )}
                </div>
              </div>

              {/* Ações rápidas (Mobile + Desktop) */}
              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                <button
                  type="button"
                  onClick={handlePrevChannel}
                  className="h-9 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] text-xs font-semibold text-zinc-200 flex items-center gap-1 transition-all active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>CH-</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextChannel}
                  className="h-9 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] text-xs font-semibold text-zinc-200 flex items-center gap-1 transition-all active:scale-95"
                >
                  <span>CH+</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onToggleFavorite(activeChannel.id)}
                  aria-label={isCurrentFav ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
                  className={`h-9 px-3 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 ${
                    isCurrentFav
                      ? 'bg-red-600/15 border-red-600/50 text-red-400'
                      : 'bg-zinc-900 hover:bg-zinc-800 border-white/[0.08] text-zinc-300'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isCurrentFav ? 'fill-red-500 text-red-500' : ''}`} />
                  <span className="hidden sm:inline">{isCurrentFav ? 'Favorito' : 'Favoritar'}</span>
                </button>

                {!isGuideOpen && (
                  <button
                    type="button"
                    onClick={() => setIsGuideOpen(true)}
                    className="hidden lg:flex h-9 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] text-xs font-semibold text-zinc-200 items-center gap-1.5 transition-all active:scale-95"
                  >
                    <PanelLeftOpen className="w-3.5 h-3.5" />
                    <span>Abrir Guia</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Painel de Canais (Sidebar retrátil na TV/Desktop + Lista direta abaixo no Mobile) */}
      <aside
        className={`${
          isGuideOpen ? 'flex' : 'flex lg:hidden'
        } lg:order-1 lg:w-[350px] xl:w-[380px] shrink-0 flex-col bg-zinc-950 lg:bg-zinc-900/50 lg:border lg:border-white/[0.08] lg:rounded-2xl lg:h-[calc(100vh-5.5rem)] lg:sticky lg:top-[4.5rem] px-3 sm:px-4 lg:p-3.5 pt-3`}
      >
        {/* Topo do Guia + Busca */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Guia de Canais
            </h2>
            <span className="text-[11px] font-mono text-zinc-500 tabular-nums">
              ({filteredChannels.length})
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsGuideOpen(false)}
            title="Recolher guia (G)"
            className="hidden lg:flex h-7 w-7 rounded-lg items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <PanelLeftClose className="w-4 h-4" />
          </button>
        </div>

        {/* Busca */}
        <div className="relative mb-2.5">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowAllRows(false);
            }}
            placeholder="Buscar canal ou número..."
            className="w-full h-10 pl-9 pr-8 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Limpar busca"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Pílulas de Categorias */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-2.5 shrink-0">
          {['Todos', 'Favoritos', ...categories.map(([cat]) => cat)].map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAllRows(false);
                }}
                className={`h-8 px-3 rounded-xl text-xs font-medium whitespace-nowrap transition-all active:scale-95 ${
                  active
                    ? 'bg-red-600 text-white'
                    : 'bg-zinc-900 text-zinc-400 hover:text-zinc-100 border border-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Lista de Canais */}
        <div
          data-channel-list="true"
          className="flex-1 lg:overflow-y-auto space-y-1.5 pr-0.5 pb-4"
        >
          {visibleRows.length === 0 ? (
            <div className="py-12 text-center text-xs text-zinc-500 border border-dashed border-white/[0.08] rounded-xl">
              Nenhum canal encontrado para este filtro.
            </div>
          ) : (
            <>
              {visibleRows.map((ch, idx) => {
                const epg = epgService.getChannelProgram(ch.name);
                return (
                  <ChannelRow
                    key={ch.id}
                    channel={ch}
                    channelNumber={ch.number || idx + 1}
                    isSelected={activeChannel?.id === ch.id}
                    isFavorite={favorites.includes(ch.id)}
                    epg={epg}
                    onSelect={handleChannelSelect}
                    onToggleFavorite={onToggleFavorite}
                  />
                );
              })}

              {!showAllRows && !searchQuery.trim() && filteredChannels.length > INITIAL_RENDER_LIMIT && (
                <button
                  type="button"
                  onClick={() => setShowAllRows(true)}
                  className="w-full h-10 mt-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] text-xs font-semibold text-zinc-300 transition-colors"
                >
                  Carregar todos os {filteredChannels.length} canais
                </button>
              )}
            </>
          )}
        </div>
      </aside>

      {/* Banner OSD discreto para TV */}
      <TvOSDBanner
        channel={activeChannel}
        channelNumber={activeChannelNumber}
        epg={activeEpg}
        visible={showOSD}
        inputNumber={inputNumber}
      />
    </div>
  );
};
