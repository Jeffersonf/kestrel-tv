import React, { useState } from 'react';
import { Heart, Tv } from 'lucide-react';
import type { Channel, ChannelEpgStatus } from '../../types';

interface ChannelRowProps {
  channel: Channel;
  channelNumber: number;
  isSelected?: boolean;
  isFavorite?: boolean;
  epg?: ChannelEpgStatus;
  onSelect: (channel: Channel) => void;
  onToggleFavorite: (channelId: string) => void;
}

export const ChannelRow: React.FC<ChannelRowProps> = ({
  channel,
  channelNumber,
  isSelected = false,
  isFavorite = false,
  epg,
  onSelect,
  onToggleFavorite,
}) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(channel)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(channel);
        }
      }}
      className={`group w-full text-left px-3 py-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2.5 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
        isSelected
          ? 'bg-red-600/15 border-red-600/60'
          : 'bg-zinc-900/70 border-white/[0.08] hover:bg-zinc-800/80 hover:border-white/15'
      }`}
    >
      <div className="flex items-center gap-2.5 min-w-0 flex-1">
        {/* Número tabular */}
        <span
          className={`w-8 text-xs font-mono font-bold tabular-nums shrink-0 ${
            isSelected ? 'text-red-400' : 'text-zinc-500 group-hover:text-zinc-300'
          }`}
        >
          {String(channelNumber).padStart(3, '0')}
        </span>

        {/* Logo */}
        <div className="w-10 h-8 rounded-lg bg-zinc-950 border border-white/[0.08] p-1 flex items-center justify-center shrink-0 overflow-hidden">
          {channel.logo && !logoError ? (
            <img
              src={channel.logo}
              alt=""
              loading="lazy"
              onError={() => setLogoError(true)}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <Tv className="w-4 h-4 text-zinc-600" strokeWidth={1.75} />
          )}
        </div>

        {/* Nome + EPG ou Categoria */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-zinc-100 truncate">
              {channel.name}
            </span>
            {isSelected && (
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
            )}
          </div>
          <p className="text-[11px] text-zinc-400 truncate mt-0.5">
            {epg?.current ? epg.current.title : channel.category}
          </p>
        </div>
      </div>

      {/* Favorito */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(channel.id);
        }}
        aria-label={isFavorite ? `Remover ${channel.name} dos favoritos` : `Adicionar ${channel.name} aos favoritos`}
        className={`min-h-[36px] min-w-[36px] rounded-lg flex items-center justify-center transition-colors shrink-0 ${
          isFavorite
            ? 'text-red-500 bg-red-500/10 hover:bg-red-500/20'
            : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/5'
        }`}
      >
        <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500' : ''}`} strokeWidth={1.75} />
      </button>
    </div>
  );
};
