import React, { useState, useEffect, useMemo } from 'react';
import { X, Play, Star, Calendar, RefreshCw, Film, Layers } from 'lucide-react';
import type { MediaItem, TMDBMetadata, SeriesEpisode } from '../../types';
import { catalogService } from '../../services/catalogService';
import { VideoPlayer } from '../player/VideoPlayer';

interface MediaModalProps {
  item: MediaItem;
  meta: TMDBMetadata;
  onClose: () => void;
}

export const MediaModal: React.FC<MediaModalProps> = ({ item, meta, onClose }) => {
  const [episodes, setEpisodes] = useState<SeriesEpisode[]>([]);
  const [isLoadingEpisodes, setIsLoadingEpisodes] = useState(item.type === 'series');
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const [selectedVersion, setSelectedVersion] = useState<string>('dub');

  // Player state
  const [activePlayback, setActivePlayback] = useState<{
    title: string;
    sources: string[];
    mediaId: string;
  } | null>(null);

  // Carregar episódios se for série
  useEffect(() => {
    if (item.type === 'series') {
      setIsLoadingEpisodes(true);
      catalogService
        .fetchSeriesEpisodes(item.letter, item.chunk || 0, item.title, item.year)
        .then((eps) => {
          setEpisodes(eps);
          setIsLoadingEpisodes(false);
          if (eps.length > 0) {
            setSelectedSeason(eps[0].season);
          }
        });
    }
  }, [item]);

  // Temporadas agrupadas
  const seasons = useMemo(() => {
    const sSet = new Set<number>();
    for (const ep of episodes) {
      sSet.add(ep.season);
    }
    return Array.from(sSet).sort((a, b) => a - b);
  }, [episodes]);

  // Episódios filtrados pela temporada atual
  const currentSeasonEpisodes = useMemo(() => {
    return episodes.filter((ep) => ep.season === selectedSeason);
  }, [episodes, selectedSeason]);

  // Se for filme: versões disponíveis (dub / leg)
  const movieVersions = useMemo(() => {
    if (item.type !== 'movie' || !item.sources) return [];
    return Object.keys(item.sources);
  }, [item]);

  const handlePlayMovie = () => {
    if (!item.sources) return;
    const sources = item.sources[selectedVersion] || Object.values(item.sources)[0] || [];
    setActivePlayback({
      title: `${item.title} (${selectedVersion.toUpperCase()})`,
      sources,
      mediaId: item.id,
    });
  };

  const handlePlayEpisode = (ep: SeriesEpisode) => {
    setActivePlayback({
      title: `${item.title} - T${ep.season}E${ep.episode} (${ep.version.toUpperCase()})`,
      sources: ep.urls,
      mediaId: `${item.id}_s${ep.season}_e${ep.episode}`,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Backdrop Banner */}
        <div className="relative h-48 md:h-64 w-full bg-zinc-900 overflow-hidden flex-shrink-0">
          {meta.backdropUrl ? (
            <img
              src={meta.backdropUrl}
              alt={item.title}
              className="w-full h-full object-cover opacity-40 filter blur-[1px]"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 opacity-60" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-zinc-300 hover:text-white border border-white/10 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Info Overlay */}
          <div className="absolute bottom-4 inset-x-4 md:inset-x-8 flex items-end gap-5 z-10">
            {/* Poster Thumbnail */}
            <div className="w-24 md:w-32 aspect-[2/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-800 hidden sm:block flex-shrink-0">
              {meta.posterUrl ? (
                <img src={meta.posterUrl} alt={item.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-600">
                  <Film className="w-8 h-8" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="px-2 py-0.5 rounded-md bg-red-600/20 text-red-400 border border-red-500/30 text-[10px] font-bold uppercase tracking-wider">
                  {item.type === 'series' ? 'Série' : 'Filme'}
                </span>

                {meta.releaseYear && (
                  <span className="flex items-center gap-1 text-xs text-zinc-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {meta.releaseYear}
                  </span>
                )}

                {meta.rating && meta.rating > 0 && (
                  <span className="flex items-center gap-1 text-xs text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    {meta.rating.toFixed(1)} / 10
                  </span>
                )}
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                {item.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Body / Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
          {/* Active Player View if Playing */}
          {activePlayback && (
            <div className="bg-zinc-900/80 p-3 rounded-2xl border border-white/10 mb-6">
              <VideoPlayer
                title={activePlayback.title}
                sources={activePlayback.sources}
                isLive={false}
                mediaId={activePlayback.mediaId}
                onClose={() => setActivePlayback(null)}
              />
            </div>
          )}

          {/* Overview / Synopsis */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Sinopse
            </h4>
            <p className="text-xs md:text-sm text-zinc-300 leading-relaxed max-w-3xl">
              {meta.overview || 'Nenhuma descrição detalhada disponível para este título.'}
            </p>
          </div>

          {/* MOVIE CONTROLS */}
          {item.type === 'movie' && (
            <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-4">
              {movieVersions.length > 1 && (
                <div className="flex items-center gap-1.5 bg-zinc-900 p-1 rounded-xl border border-white/5">
                  <span className="text-[11px] font-medium text-zinc-400 px-2 flex items-center gap-1">
                    <Layers className="w-3 h-3 text-red-400" /> Áudio:
                  </span>
                  {movieVersions.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVersion(v)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold uppercase transition-all ${
                        selectedVersion === v
                          ? 'bg-red-600 text-white shadow-md'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {v === 'dub' ? 'Dublado' : v === 'leg' ? 'Legendado' : v}
                    </button>
                  ))}
                </div>
              )}

              <button
                onClick={handlePlayMovie}
                className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-red-600/30 transition-all active:scale-95"
              >
                <Play className="w-4 h-4 fill-white" />
                Assistir Filme
              </button>
            </div>
          )}

          {/* SERIES CONTROLS & EPISODE LIST */}
          {item.type === 'series' && (
            <div className="pt-2 border-t border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Temporadas & Episódios
                </h4>

                {/* Season Pills */}
                {seasons.length > 1 && (
                  <div className="flex items-center gap-1 overflow-x-auto pb-1">
                    {seasons.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSeason(s)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                          selectedSeason === s
                            ? 'bg-red-600 text-white shadow-md'
                            : 'bg-zinc-900 text-zinc-400 border border-white/5 hover:text-white'
                        }`}
                      >
                        {s === 0 ? 'Especiais' : `Temporada ${s}`}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {isLoadingEpisodes ? (
                <div className="py-12 flex flex-col items-center justify-center gap-2">
                  <RefreshCw className="w-6 h-6 text-red-500 animate-spin" />
                  <span className="text-xs text-zinc-500 font-medium">
                    Carregando episódios...
                  </span>
                </div>
              ) : currentSeasonEpisodes.length === 0 ? (
                <div className="py-8 text-center text-xs text-zinc-500">
                  Nenhum episódio listado para esta temporada.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-72 overflow-y-auto pr-1">
                  {currentSeasonEpisodes.map((ep, idx) => (
                    <div
                      key={idx}
                      onClick={() => handlePlayEpisode(ep)}
                      className="p-3 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/20 hover:bg-zinc-800/80 cursor-pointer transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-red-600 group-hover:text-white transition-colors">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-zinc-200 block group-hover:text-white">
                            Episódio {ep.episode}
                          </span>
                          <span className="text-[10px] text-zinc-500 uppercase font-medium">
                            {ep.version === 'dub' ? 'Dublado' : ep.version === 'leg' ? 'Legendado' : ep.version}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] text-zinc-500 group-hover:text-red-400 font-medium">
                        Assistir
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
