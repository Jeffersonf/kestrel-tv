import React, { useState } from 'react';
import { Heart, Play, Tv } from 'lucide-react';
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

  return (
    <div
      onClick={() => onSelect(channel)}
      className={`group relative rounded-2xl bg-zinc-900 border transition-all duration-200 cursor-pointer overflow-hidden p-3.5 flex flex-col justify-between hover:bg-zinc-800/80 hover:border-white/20 hover:shadow-xl hover:-translate-y-0.5 ${
        isSelected
          ? 'border-red-500/80 ring-1 ring-red-500/50 bg-zinc-800/90'
          : 'border-white/5'
      }`}
    >
      {/* Top Bar: Category & Favorite */}
      <div className="flex items-center justify-between w-full mb-3">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 bg-zinc-800/90 px-2 py-0.5 rounded-md border border-white/5 truncate max-w-[120px]">
          {channel.category}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(channel.id);
          }}
          className={`p-1.5 rounded-lg transition-colors ${
            isFavorite
              ? 'text-red-500 bg-red-500/10 hover:bg-red-500/20'
              : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800'
          }`}
          title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-red-500' : ''}`} />
        </button>
      </div>

      {/* Channel Logo / Icon */}
      <div className="h-16 w-full flex items-center justify-center my-1 relative">
        {channel.logo && !logoError ? (
          <img
            src={channel.logo}
            alt={channel.name}
            onError={() => setLogoError(true)}
            className="max-h-14 max-w-[85%] object-contain filter drop-shadow transition-transform group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-red-400 transition-colors">
            <Tv className="w-6 h-6" />
          </div>
        )}

        {/* Hover Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px] rounded-xl">
          <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30 transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="w-4 h-4 fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Channel Info */}
      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
        <h4 className="text-xs font-semibold text-zinc-100 truncate max-w-[140px] group-hover:text-white">
          {channel.name}
        </h4>
        <span className="text-[10px] font-medium text-zinc-400 bg-zinc-800/60 px-1.5 py-0.5 rounded">
          {channel.sources.length} {channel.sources.length === 1 ? 'fonte' : 'fontes'}
        </span>
      </div>
    </div>
  );
};
