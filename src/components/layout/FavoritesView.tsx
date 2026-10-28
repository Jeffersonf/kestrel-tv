import React, { useState, useEffect, useMemo } from 'react';
import { Heart, Radio } from 'lucide-react';
import type { Channel } from '../../types';
import { catalogService } from '../../services/catalogService';
import { storageService } from '../../services/storageService';
import { ChannelCard } from '../tv/ChannelCard';
import { VideoPlayer } from '../player/VideoPlayer';
import { Pagination } from '../common/Pagination';

const CHANNELS_PER_PAGE = 24;

export const FavoritesView: React.FC = () => {
  const [favoriteChannelIds, setFavoriteChannelIds] = useState<string[]>([]);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const favs = storageService.getFavoriteChannels();
    setFavoriteChannelIds(favs);

    catalogService.fetchChannels().then((all) => {
      setChannels(all);
      setIsLoading(false);
    });
  }, []);

  const favoriteChannels = useMemo(() => {
    return channels.filter((ch) => favoriteChannelIds.includes(ch.id));
  }, [channels, favoriteChannelIds]);

  const paginatedFavorites = useMemo(() => {
    const start = (currentPage - 1) * CHANNELS_PER_PAGE;
    return favoriteChannels.slice(start, start + CHANNELS_PER_PAGE);
  }, [favoriteChannels, currentPage]);

  const handleToggleFavorite = (channelId: string) => {
    storageService.toggleFavoriteChannel(channelId);
    setFavoriteChannelIds(storageService.getFavoriteChannels());
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 md:px-6 py-6 animate-in fade-in duration-300">
      {/* Active Player Box */}
      {selectedChannel && (
        <div className="flex flex-col gap-3 mb-6 bg-zinc-900/90 border border-white/10 p-3 md:p-5 rounded-3xl backdrop-blur-2xl shadow-2xl animate-in zoom-in-95 duration-200">
          <VideoPlayer
            title={selectedChannel.name}
            sources={selectedChannel.sources}
            isLive={true}
            onClose={() => setSelectedChannel(null)}
          />
        </div>
      )}

      <div>
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center gap-2.5">
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          Seus Favoritos
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Acesso rápido aos seus canais e transmissões prediletas salvos localmente.
        </p>
      </div>

      {isLoading ? (
        <div className="py-20 text-center text-xs text-zinc-500">
          Carregando seus canais favoritos...
        </div>
      ) : favoriteChannels.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center justify-center gap-2 bg-zinc-900/40 rounded-3xl border border-white/5 p-8">
          <Radio className="w-10 h-10 text-zinc-600" />
          <p className="text-sm font-semibold text-zinc-300">Nenhum canal favoritado ainda</p>
          <p className="text-xs text-zinc-500 max-w-sm">
            Clique no ícone de coração nos cards dos canais na aba "TV ao Vivo" para salvá-los aqui.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 md:gap-4.5">
            {paginatedFavorites.map((channel) => (
              <ChannelCard
                key={channel.id}
                channel={channel}
                isSelected={selectedChannel?.id === channel.id}
                isFavorite={true}
                onSelect={(ch) => setSelectedChannel(ch)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalItems={favoriteChannels.length}
            itemsPerPage={CHANNELS_PER_PAGE}
            onPageChange={setCurrentPage}
            itemLabel="canais favoritos"
          />
        </>
      )}
    </div>
  );
};
