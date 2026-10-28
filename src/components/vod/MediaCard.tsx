import React, { useState, useEffect } from 'react';
import { Film, Play, Star, Tv } from 'lucide-react';
import type { MediaItem, TMDBMetadata } from '../../types';
import { tmdbService } from '../../services/tmdbService';

interface MediaCardProps {
  item: MediaItem;
  onClick: (item: MediaItem, meta: TMDBMetadata) => void;
}

export const MediaCard: React.FC<MediaCardProps> = ({ item, onClick }) => {
  const [meta, setMeta] = useState<TMDBMetadata | null>(() => {
    if (item.poster) {
      return {
        title: item.title,
        releaseYear: item.year,
        posterUrl: item.poster.startsWith('http') ? item.poster : `https://image.tmdb.org/t/p/w342${item.poster}`,
        genres: item.genres
      };
    }
    return null;
  });

  useEffect(() => {
    if (meta?.posterUrl) return;

    let isMounted = true;
    tmdbService.searchMetadata(item.title, item.type, item.year).then((data) => {
      if (isMounted && data) {
        setMeta(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [item.title, item.type, item.year, meta?.posterUrl]);

  return (
    <div
      onClick={() => onClick(item, meta || { title: item.title, releaseYear: item.year })}
      className="group relative rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden cursor-pointer hover:border-red-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1 flex flex-col"
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
          <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-semibold text-zinc-300 border border-white/10 uppercase tracking-wider">
            {item.type === 'series' ? 'Série' : 'Filme'}
          </span>

          {meta?.rating && meta.rating > 0 ? (
            <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-bold text-amber-400 border border-white/10 flex items-center gap-1">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              {meta.rating.toFixed(1)}
            </span>
          ) : item.year ? (
            <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-medium text-zinc-400 border border-white/10">
              {item.year}
            </span>
          ) : null}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl shadow-red-600/40 transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Info Bar */}
      <div className="p-3 flex flex-col flex-1 justify-between bg-zinc-900/95">
        <div>
          <h4 className="text-xs font-semibold text-zinc-100 group-hover:text-white line-clamp-1 transition-colors">
            {item.title}
          </h4>
          <div className="flex items-center gap-2 mt-1 text-[11px] text-zinc-500">
            {item.year && <span>{item.year}</span>}
            {item.genres && item.genres.length > 0 && (
              <span className="truncate max-w-[120px] text-zinc-400">
                • {item.genres.slice(0, 2).join(', ')}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
