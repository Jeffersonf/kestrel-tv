import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Radio, Heart, RotateCcw, X, Tv } from 'lucide-react';
import type { Channel } from '../../types';
import { catalogService } from '../../services/catalogService';
import { storageService } from '../../services/storageService';
import { FALLBACK_CHANNELS } from '../../services/fallbackChannels';
import { ChannelCard } from './ChannelCard';
import { VideoPlayer } from '../player/VideoPlayer';
import { HeroBanner } from './HeroBanner';

interface LiveTvViewProps {
  overrideKeyword?: string | null;
  onClearOverrideKeyword?: () => void;
}

function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export const LiveTvView: React.FC<LiveTvViewProps> = ({
  overrideKeyword,
  onClearOverrideKeyword,
}) => {
  // Inicialização síncrona com os canais pré-ordenados
  const [channels, setChannels] = useState<Channel[]>(() => FALLBACK_CHANNELS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const playerContainerRef = useRef<HTMLDivElement>(null);
  const guideContainerRef = useRef<HTMLDivElement>(null);

  const refreshChannels = () => {
    catalogService.fetchChannels().then((data) => {
      if (data && data.length > 0) {
        setChannels(data);
      }
    });
  };

  useEffect(() => {
    setFavorites(storageService.getFavoriteChannels());
    refreshChannels();
  }, []);

  // Se vier com keyword de futebol ou outro atalho
  useEffect(() => {
    if (overrideKeyword && channels.length > 0) {
      const q = normalizeText(overrideKeyword);
      const match = channels.find((c) => normalizeText(c.name).includes(q));
      if (match) {
        setSelectedChannel(match);
        if (playerContainerRef.current) {
          playerContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      onClearOverrideKeyword?.();
    }
  }, [overrideKeyword, channels, onClearOverrideKeyword]);

  // Filtra canais adultos da grade pública (ficam no Vault secreto)
  const visibleChannels = useMemo(() => {
    return channels.filter((c) => c.category !== 'Adulto (+18)');
  }, [channels]);

  // Canal em destaque para o Hero Banner do Sky+
  const featuredChannel = useMemo(() => {
    const priorityNames = ['SporTV', 'Premiere Clubes', 'Telecine Premium', 'HBO', 'Band', 'TV Brasil'];
    for (const name of priorityNames) {
      const match = visibleChannels.find((c) => c.name.toLowerCase().includes(name.toLowerCase()) && c.logo);
      if (match) return match;
    }
    return visibleChannels[0] || FALLBACK_CHANNELS[0];
  }, [visibleChannels]);

  const categories = useMemo(() => {
    const cats = new Map<string, number>();
    for (const ch of visibleChannels) {
      cats.set(ch.category, (cats.get(ch.category) || 0) + 1);
    }
    return Array.from(cats.entries()).sort((a, b) => b[1] - a[1]);
  }, [visibleChannels]);

  const filteredChannels = useMemo(() => {
    let result = visibleChannels;

    if (onlyFavorites) {
      const favSet = new Set(favorites);
      result = result.filter((ch) => favSet.has(ch.id));
    }

    if (searchQuery.trim()) {
      const q = normalizeText(searchQuery);
      result = result.filter((ch) => {
        const nameNorm = normalizeText(ch.name);
        const catNorm = normalizeText(ch.category);
        return nameNorm.includes(q) || catNorm.includes(q);
      });
    } else if (selectedCategory !== 'Todos') {
      result = result.filter((ch) => ch.category === selectedCategory);
    }

    return result;
  }, [visibleChannels, selectedCategory, searchQuery, onlyFavorites, favorites]);

  const handleSelectChannel = (channel: Channel) => {
    setSelectedChannel(channel);
    if (playerContainerRef.current) {
      playerContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleToggleFavorite = (channelId: string) => {
    storageService.toggleFavoriteChannel(channelId);
    setFavorites(storageService.getFavoriteChannels());
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
      {/* Active Video Player (Sky+ Cinema Theater) */}
      <div ref={playerContainerRef}>
        {selectedChannel && (
          <div className="flex flex-col gap-3 mb-8 bg-[#070b16]/90 border border-white/10 p-3 md:p-5 rounded-3xl backdrop-blur-2xl shadow-2xl animate-in fade-in duration-300">
            <VideoPlayer
              title={selectedChannel.name}
              sources={selectedChannel.sources}
              isLive={true}
              channelLogo={selectedChannel.logo}
              channels={visibleChannels}
              onSelectChannel={handleSelectChannel}
              onClose={() => setSelectedChannel(null)}
            />
          </div>
        )}
      </div>

      {/* Sky+ Featured Hero Banner (Mostrado quando não há player ativo) */}
      {!selectedChannel && featuredChannel && (
        <HeroBanner
          featuredChannel={featuredChannel}
          isFavorite={favorites.includes(featuredChannel.id)}
          onPlay={handleSelectChannel}
          onToggleFavorite={handleToggleFavorite}
          onExploreGuide={() => {
            guideContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      )}

      {/* Guide Section */}
      <div ref={guideContainerRef} className="flex flex-col gap-5">
        {/* Section Title & Search */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center gap-2.5">
              <Radio className="w-5 h-5 text-red-500 animate-pulse" />
              Guia de Canais Ao Vivo
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              {visibleChannels.length} canais transmitindo em tempo real com fontes de alta definição.
            </p>
          </div>

          {/* Search & Favorites Toggle */}
          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar canal (ex: SporTV, Premiere, HBO, SBT)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-[#0d1222] border border-white/10 rounded-xl text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={() => setOnlyFavorites(!onlyFavorites)}
              className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all ${
                onlyFavorites
                  ? 'bg-red-600/20 text-red-400 border-red-500/50'
                  : 'bg-[#0d1222] text-zinc-400 border-white/10 hover:text-zinc-200 hover:bg-[#141b2e]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-red-500 text-red-500' : ''}`} />
              <span className="hidden sm:inline">Minha Lista</span>
            </button>
          </div>
        </div>

        {/* Sky+ Category Pills */}
        {!searchQuery && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('Todos')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === 'Todos'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-[#0d1222] border border-white/10 text-zinc-400 hover:text-white hover:bg-[#141b2e]'
              }`}
            >
              Todos os Canais ({visibleChannels.length})
            </button>

            {categories.map(([cat, count]) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-[#0d1222] border border-white/10 text-zinc-400 hover:text-white hover:bg-[#141b2e]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-black/30 text-zinc-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Search Results Summary */}
        {searchQuery.trim() && (
          <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
            <span>
              Resultados para: <b className="text-white">"{searchQuery}"</b> ({filteredChannels.length} canais)
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-red-400 hover:text-red-300 font-semibold"
            >
              Limpar filtro
            </button>
          </div>
        )}

        {/* Channel Grid (Sky+ Style) */}
        {filteredChannels.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center justify-center gap-3 bg-[#0d1222]/50 rounded-3xl border border-white/10 p-8">
            <Tv className="w-10 h-10 text-zinc-600" />
            <p className="text-sm font-bold text-zinc-200">Nenhum canal encontrado</p>
            <p className="text-xs text-zinc-500 max-w-sm">
              {searchQuery
                ? `Nenhum canal corresponde a "${searchQuery}". Experimente outro termo.`
                : 'Não há canais nesta categoria no momento.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Todos');
                setOnlyFavorites(false);
                refreshChannels();
              }}
              className="px-4 py-2 bg-white/10 hover:bg-white/15 text-zinc-200 text-xs font-bold rounded-xl flex items-center gap-2 mt-2 transition-colors border border-white/10"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Recarregar Catálogo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {filteredChannels.map((channel) => (
              <ChannelCard
                key={channel.id}
                channel={channel}
                isSelected={selectedChannel?.id === channel.id}
                isFavorite={favorites.includes(channel.id)}
                onSelect={handleSelectChannel}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
