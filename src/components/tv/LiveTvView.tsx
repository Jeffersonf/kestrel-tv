import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Tv, Heart, Radio, RefreshCw, X } from 'lucide-react';
import type { Channel } from '../../types';
import { catalogService } from '../../services/catalogService';
import { storageService } from '../../services/storageService';
import { ChannelCard } from './ChannelCard';
import { VideoPlayer } from '../player/VideoPlayer';

export const LiveTvView: React.FC = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const playerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFavorites(storageService.getFavoriteChannels());
    catalogService.fetchChannels().then((data) => {
      setChannels(data);
      setIsLoading(false);
    });
  }, []);

  const categories = useMemo(() => {
    const cats = new Map<string, number>();
    for (const ch of channels) {
      cats.set(ch.category, (cats.get(ch.category) || 0) + 1);
    }
    return Array.from(cats.entries()).sort((a, b) => b[1] - a[1]);
  }, [channels]);

  const filteredChannels = useMemo(() => {
    let result = channels;

    if (onlyFavorites) {
      const favSet = new Set(favorites);
      result = result.filter((ch) => favSet.has(ch.id));
    }

    if (selectedCategory !== 'Todos') {
      result = result.filter((ch) => ch.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (ch) => ch.name.toLowerCase().includes(q) || ch.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [channels, selectedCategory, searchQuery, onlyFavorites, favorites]);

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
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 md:px-6 py-6">
      {/* Active Player Box */}
      <div ref={playerContainerRef}>
        {selectedChannel && (
          <div className="flex flex-col gap-3 mb-6 bg-zinc-900/60 border border-white/10 p-3 md:p-4 rounded-3xl backdrop-blur-xl animate-in fade-in duration-300">
            <VideoPlayer
              title={selectedChannel.name}
              sources={selectedChannel.sources}
              isLive={true}
              onClose={() => setSelectedChannel(null)}
            />
          </div>
        )}
      </div>

      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
            <Radio className="w-5 h-5 text-red-500 animate-pulse" />
            Canais de TV ao Vivo
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            {channels.length} canais transmitindo em tempo real com múltiplas fontes redundantes.
          </p>
        </div>

        {/* Search & Favorites Filter */}
        <div className="flex items-center gap-2.5 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar canal ou categoria..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-zinc-900 border border-white/10 rounded-xl text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
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
            className={`px-3 py-2 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all ${
              onlyFavorites
                ? 'bg-red-600/15 text-red-400 border-red-500/40'
                : 'bg-zinc-900 text-zinc-400 border-white/5 hover:text-zinc-200'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-red-500 text-red-500' : ''}`} />
            <span className="hidden sm:inline">Favoritos</span>
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('Todos')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            selectedCategory === 'Todos'
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
              : 'bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800'
          }`}
        >
          Todos ({channels.length})
        </button>

        {categories.map(([cat, count]) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedCategory === cat
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                : 'bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <span>{cat}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-zinc-800 text-zinc-500'
              }`}
            >
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* Channel Grid */}
      {isLoading ? (
        <div className="py-24 flex flex-col items-center justify-center gap-3">
          <RefreshCw className="w-8 h-8 text-red-500 animate-spin" />
          <p className="text-xs text-zinc-400 font-medium">Carregando catálogo de canais...</p>
        </div>
      ) : filteredChannels.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center justify-center gap-2 bg-zinc-900/40 rounded-3xl border border-white/5 p-8">
          <Tv className="w-10 h-10 text-zinc-600" />
          <p className="text-sm font-semibold text-zinc-300">Nenhum canal encontrado</p>
          <p className="text-xs text-zinc-500">Tente buscar por outro termo ou categoria.</p>
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
  );
};
