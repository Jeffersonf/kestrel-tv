import React, { useState, useEffect } from 'react';
import { Film, Play, Star, Tv } from 'lucide-react';
import type { MediaItem, TMDBMetadata } from '../../types';
import { tmdbService } from '../../services/tmdbService';

interface MediaCardProps {
  item: MediaItem;
  onClick: (item: MediaItem, meta: TMDBMetadata) => void;
}

export const MediaCard: React.FC<MediaCardProps> = ({ item, onClick }) => {
  const [meta, setMeta] = useState<TMDBMetadata | null>(null);

  useEffect(() => {
    let isMounted = true;
    tmdbService.searchMetadata(item.title, item.type, item.year).then((data) => {
      if (isMounted) {
        setMeta(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [item.title, item.type, item.year]);

  return (
    <div
      onClick={() => onClick(item, meta || { title: item.title, releaseYear: item.year })}
      className="group relative rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden cursor-pointer hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col"
    >
      {/* Poster Aspect Ratio 2:3 */}
      <div className="relative aspect-[2/3] w-full bg-zinc-800/80 overflow-hidden">
        {meta?.posterUrl ? (
          <img
            src={meta.posterUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center text-zinc-500 gap-2">
            {item.type === 'series' ? <Tv className="w-8 h-8" /> : <Film className="w-8 h-8" />}
            <span className="text-[11px] font-medium line-clamp-3 text-zinc-400">
              {item.title}
            </span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none">
          <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-semibold text-zinc-300 border border-white/10 uppercase tracking-wider">
            {item.type === 'series' ? 'Série' : 'Filme'}
          </span>

          {meta?.rating && meta.rating > 0 && (
            <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-bold text-amber-400 border border-white/10 flex items-center gap-1">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              {meta.rating.toFixed(1)}
            </span>
          )}
        </div>

        {/* Hover Overlay Play Button */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl shadow-red-600/40 transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-3 flex flex-col flex-1 justify-between bg-zinc-900/95">
        <div>
          <h4 className="text-xs font-semibold text-zinc-100 line-clamp-1 group-hover:text-red-400 transition-colors">
            {item.title}
          </h4>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[11px] text-zinc-400 font-medium">
              {meta?.releaseYear || item.year || 'N/A'}
            </span>
            {item.type === 'series' && item.episodesCount && (
              <span className="text-[10px] text-zinc-400">
                • {item.episodesCount} eps
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
