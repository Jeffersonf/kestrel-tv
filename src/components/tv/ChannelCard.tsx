import React, { useState } from 'react';
import { Heart, Play, Tv, ShieldAlert, Zap } from 'lucide-react';
import type { Channel } from '../../types';

interface ChannelCardProps {
  channel: Channel;
  isSelected?: boolean;
  isFavorite?: boolean;
  onSelect: (channel: Channel) => void;
  onToggleFavorite: (channelId: string) => void;
}

export const ChannelCard: React.FC<ChannelCardProps> = ({
  channel,
  isSelected = false,
  isFavorite = false,
  onSelect,
  onToggleFavorite,
}) => {
  const [logoError, setLogoError] = useState(false);
  const isAdult = channel.category === 'Adulto (+18)';

  // Encontrar melhor qualidade informada
  const bestQuality = channel.sources.find((s) => s.quality && (s.quality.includes('4K') || s.quality.includes('FHD')))?.quality || 'HD';
  const shortQuality = bestQuality.includes('4K') ? '4K' : bestQuality.includes('FHD') ? 'FHD' : 'HD';

  return (
    <div
      onClick={() => onSelect(channel)}
      className={`group relative rounded-2xl bg-zinc-900/90 border transition-all duration-300 cursor-pointer overflow-hidden p-3.5 flex flex-col justify-between hover:bg-zinc-800/95 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1 ${
        isSelected
          ? 'border-red-500 ring-2 ring-red-500/40 bg-zinc-800/95 shadow-lg shadow-red-600/20'
          : 'border-white/5'
      }`}
    >
      {/* Background Hover Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Top Bar: Category, Quality & Favorite */}
      <div className="relative z-10 flex items-center justify-between w-full mb-3">
        <div className="flex items-center gap-1.5 truncate max-w-[130px]">
          {isAdult ? (
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300 bg-rose-500/20 border border-rose-500/30 px-1.5 py-0.5 rounded-md flex items-center gap-1">
              <ShieldAlert className="w-3 h-3 text-rose-400" />
              18+
            </span>
          ) : (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 bg-zinc-800/90 px-2 py-0.5 rounded-md border border-white/5 truncate">
              {channel.category}
            </span>
          )}
          <span className="text-[9px] font-bold text-zinc-500 bg-zinc-950/80 px-1.5 py-0.5 rounded border border-white/5">
            {shortQuality}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(channel.id);
          }}
          className={`p-1.5 rounded-xl transition-all ${
            isFavorite
              ? 'text-red-500 bg-red-500/15 hover:bg-red-500/25 scale-105'
              : 'text-zinc-500 hover:text-white hover:bg-zinc-800'
          }`}
          title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-red-500' : ''}`} />
        </button>
      </div>

      {/* Channel Logo / Icon */}
      <div className="relative z-10 h-16 w-full flex items-center justify-center my-1">
        {channel.logo && !logoError ? (
          <img
            src={channel.logo}
            alt={channel.name}
            onError={() => setLogoError(true)}
            className="max-h-14 max-w-[85%] object-contain filter drop-shadow transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-12 h-12 rounded-2xl bg-zinc-800/80 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-red-400 group-hover:bg-red-600/10 transition-colors">
            <Tv className="w-6 h-6" />
          </div>
        )}

        {/* Hover Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px] rounded-2xl">
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl shadow-red-600/40 transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="w-4 h-4 fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Channel Info & Bottom Meta */}
      <div className="relative z-10 mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
        <h4 className="text-xs font-semibold text-zinc-100 truncate max-w-[130px] group-hover:text-white group-hover:translate-x-0.5 transition-all">
          {channel.name}
        </h4>
        <div className="flex items-center gap-1 text-[10px] font-medium text-zinc-400 bg-zinc-950/70 border border-white/5 px-1.5 py-0.5 rounded-md">
          <Zap className="w-2.5 h-2.5 text-amber-400" />
          <span>{channel.sources.length}</span>
        </div>
      </div>
    </div>
  );
};
