import React, { useMemo } from 'react';
import { Heart, Tv } from 'lucide-react';
import type { Channel } from '../../types';
import { epgService } from '../../services/epgService';
import { ChannelRow } from '../tv/ChannelRow';

interface FavoritesViewProps {
  channels: Channel[];
  favorites: string[];
  selectedChannelId?: string | null;
  epgVersion: number;
  onTuneChannel: (channel: Channel) => void;
  onToggleFavorite: (channelId: string) => void;
  onGoToLive: () => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  channels,
  favorites,
  selectedChannelId,
  epgVersion,
  onTuneChannel,
  onToggleFavorite,
  onGoToLive,
}) => {
  const favoriteChannels = useMemo(() => {
    const favSet = new Set(favorites);
    return channels.filter((ch) => favSet.has(ch.id));
  }, [channels, favorites]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            Favoritos
          </h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            Toque em qualquer canal salvo para abrir direto no player principal.
          </p>
        </div>

        <span className="text-xs font-mono font-semibold text-zinc-400 tabular-nums px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/[0.08]">
          {favoriteChannels.length} salvos
        </span>
      </div>

      {favoriteChannels.length === 0 ? (
        <div className="py-16 px-6 text-center flex flex-col items-center justify-center gap-3 bg-zinc-900/50 border border-white/[0.08] rounded-2xl">
          <Tv className="w-9 h-9 text-zinc-600" strokeWidth={1.5} />
          <div className="space-y-1">
            <p className="text-sm font-semibold text-zinc-200">Nenhum canal favoritado ainda</p>
            <p className="text-xs text-zinc-500 max-w-sm">
              Toque no ícone de coração em qualquer canal na aba Ao Vivo para deixar seus principais canais aqui.
            </p>
          </div>
          <button
            type="button"
            onClick={onGoToLive}
            className="h-9 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-all active:scale-95"
          >
            Ir para Ao Vivo
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {favoriteChannels.map((ch, idx) => {
            void epgVersion;
            return (
              <ChannelRow
                key={ch.id}
                channel={ch}
                channelNumber={ch.number || idx + 1}
                isSelected={selectedChannelId === ch.id}
                isFavorite={true}
                epg={epgService.getChannelProgram(ch.name)}
                onSelect={onTuneChannel}
                onToggleFavorite={onToggleFavorite}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
