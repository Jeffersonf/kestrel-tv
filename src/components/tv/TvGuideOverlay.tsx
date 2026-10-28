import React, { useState, useMemo } from 'react';
import { Search, X, Radio, Heart, Tv } from 'lucide-react';
import type { Channel } from '../../types';

interface TvGuideOverlayProps {
  channels: Channel[];
  currentChannel: Channel | null;
  onSelectChannel: (channel: Channel) => void;
  favorites: string[];
  onToggleFavorite: (channelId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const TvGuideOverlay: React.FC<TvGuideOverlayProps> = ({
  channels,
  currentChannel,
  onSelectChannel,
  favorites,
  onToggleFavorite,
  isOpen,
  onClose,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('Todos');

  // Categorias
  const categories = useMemo(() => {
    const set = new Set<string>();
    channels.forEach((c) => {
      if (c.category !== 'Adulto (+18)') set.add(c.category);
    });
    return ['Todos', ...Array.from(set)];
  }, [channels]);

  // Canais Filtrados
  const filtered = useMemo(() => {
    return channels.filter((c) => {
      if (c.category === 'Adulto (+18)') return false;
      const matchesSearch = !search.trim() || c.name.toLowerCase().includes(search.toLowerCase());
      const matchesCat = selectedCat === 'Todos' || c.category === selectedCat;
      return matchesSearch && matchesCat;
    });
  }, [channels, search, selectedCat]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl h-full bg-zinc-950/95 border-l border-white/10 p-5 md:p-6 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/40">
              <Radio className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-white leading-none">
                Guia de Canais (EPG)
              </h3>
              <span className="text-[10px] text-zinc-400 font-mono mt-0.5 block">
                {filtered.length} canais disponíveis
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Input */}
        <div className="pt-4">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Digite o nome ou número do canal..."
              autoFocus
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-white/10 rounded-2xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 font-sans"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-3 scrollbar-none shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCat === cat
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Channels List */}
        <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 mt-2">
          {filtered.map((ch, idx) => {
            const isPlaying = currentChannel?.id === ch.id;
            const isFav = favorites.includes(ch.id);
            const chNum = ch.number || idx + 1;

            return (
              <div
                key={ch.id}
                onClick={() => { onSelectChannel(ch); onClose(); }}
                className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                  isPlaying
                    ? 'bg-red-950/40 border-red-500/80 shadow-lg shadow-red-950/40'
                    : 'bg-zinc-900/70 border-white/5 hover:border-red-500/30 hover:bg-zinc-850'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Channel Number */}
                  <span className="font-mono text-xs font-black text-zinc-500 group-hover:text-red-400 w-10 shrink-0">
                    {String(chNum).padStart(3, '0')}
                  </span>

                  {/* Logo */}
                  <div className="w-10 h-8 rounded-lg bg-zinc-950/90 border border-white/5 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                    {ch.logo ? (
                      <img
                        src={ch.logo}
                        alt={ch.name}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                      />
                    ) : (
                      <Tv className="w-3.5 h-3.5 text-zinc-600" />
                    )}
                  </div>

                  {/* Name & Category */}
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-white block truncate group-hover:text-red-300">
                      {ch.name}
                    </span>
                    <span className="text-[10px] text-zinc-400 block truncate">
                      {ch.category}
                    </span>
                  </div>
                </div>

                {/* Right Status */}
                <div className="flex items-center gap-2 shrink-0">
                  {isPlaying ? (
                    <span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-black text-[9px] uppercase tracking-wider animate-pulse flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-white" />
                      NO AR
                    </span>
                  ) : (
                    <button
                      onClick={(e) => { e.stopPropagation(); onToggleFavorite(ch.id); }}
                      className="p-1.5 text-zinc-500 hover:text-red-500 transition-colors"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
