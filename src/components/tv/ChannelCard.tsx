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

  // Encontrar melhor qualidade informada
  const bestQuality = channel.sources.find((s) => s.quality && (s.quality.includes('4K') || s.quality.includes('FHD')))?.quality || 'HD';
  const shortQuality = bestQuality.includes('4K') ? '4K' : bestQuality.includes('FHD') ? 'FHD' : 'HD';

  return (
    <div
      onClick={() => onSelect(channel)}
      className={`group relative rounded-2xl bg-[#0d1222]/90 border transition-all duration-200 cursor-pointer overflow-hidden p-3.5 flex flex-col justify-between hover:bg-[#141b2e] hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-950/40 hover:-translate-y-1 ${
        isSelected
          ? 'border-red-500 ring-2 ring-red-500/40 bg-[#161d31]'
          : 'border-white/10'
      }`}
    >
      {/* Top Header: AO VIVO Badge & Favorite Button */}
      <div className="flex items-center justify-between w-full mb-2 z-10">
        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-[9px] font-bold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Ao Vivo
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(channel.id);
          }}
          className={`p-1.5 rounded-lg transition-colors ${
            isFavorite
              ? 'text-red-500 bg-red-500/15 hover:bg-red-500/25'
              : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/5'
          }`}
          title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-red-500' : ''}`} />
        </button>
      </div>

      {/* Channel Logo Emblem Area */}
      <div className="h-20 w-full flex items-center justify-center my-1 relative rounded-xl bg-black/20 p-2 group-hover:bg-black/30 transition-colors">
        {channel.logo && !logoError ? (
          <img
            src={channel.logo}
            alt={channel.name}
            onError={() => setLogoError(true)}
            className="max-h-14 max-w-[85%] object-contain filter drop-shadow transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 group-hover:text-sky-400 transition-colors">
            <Tv className="w-6 h-6" />
          </div>
        )}

        {/* Hover Quick-Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px] rounded-xl">
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl shadow-red-600/40 transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="w-4 h-4 fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Channel Metadata */}
      <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between gap-2">
        <div className="flex flex-col min-w-0">
          <h4 className="text-xs font-bold text-zinc-100 truncate group-hover:text-white transition-colors">
            {channel.name}
          </h4>
          <span className="text-[10px] text-zinc-400 truncate">
            {channel.category}
          </span>
        </div>

        <span className="text-[9px] font-semibold text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20 whitespace-nowrap">
          {shortQuality}
        </span>
      </div>
    </div>
  );
};
