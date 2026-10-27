import React, { useState, useEffect } from 'react';
import { Search, Film, Tv, RefreshCw, X } from 'lucide-react';
import type { MediaItem, TMDBMetadata } from '../../types';
import { catalogService } from '../../services/catalogService';
import { MediaCard } from './MediaCard';
import { MediaModal } from './MediaModal';

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'];

export const VodView: React.FC = () => {
  const [mediaType, setMediaType] = useState<'movie' | 'series'>('movie');
  const [selectedLetter, setSelectedLetter] = useState<string>('A');
  const [items, setItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ title: string; isSeries: boolean; letter: string; year: string }[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Modal State
  const [activeModalItem, setActiveModalItem] = useState<{
    item: MediaItem;
    meta: TMDBMetadata;
  } | null>(null);

  // Carregar catálogo por letra
  useEffect(() => {
    if (searchQuery.trim().length >= 2) return;

    setIsLoading(true);
    if (mediaType === 'movie') {
      catalogService.fetchMoviesByLetter(selectedLetter).then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    } else {
      catalogService.fetchSeriesByLetter(selectedLetter).then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    }
  }, [mediaType, selectedLetter, searchQuery]);

  // Busca global com debounce
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      catalogService.searchVod(searchQuery).then((res) => {
        setSearchResults(res);
        setIsSearching(false);
      });
    }, 350);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleOpenSearchItem = async (sr: { title: string; isSeries: boolean; letter: string; year: string }) => {
    setIsLoading(true);
    if (sr.isSeries) {
      const allSeries = await catalogService.fetchSeriesByLetter(sr.letter);
      const match = allSeries.find((s) => s.title.toLowerCase() === sr.title.toLowerCase());
      if (match) {
        setActiveModalItem({
          item: match,
          meta: { title: match.title, releaseYear: match.year },
        });
      }
    } else {
      const allMovies = await catalogService.fetchMoviesByLetter(sr.letter);
      const match = allMovies.find((m) => m.title.toLowerCase() === sr.title.toLowerCase());
      if (match) {
        setActiveModalItem({
          item: match,
          meta: { title: match.title, releaseYear: match.year },
        });
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 md:px-6 py-6">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
            {mediaType === 'movie' ? (
              <Film className="w-5 h-5 text-red-500" />
            ) : (
              <Tv className="w-5 h-5 text-red-500" />
            )}
            {mediaType === 'movie' ? 'Catálogo de Filmes' : 'Catálogo de Séries'}
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Mais de 30.000 títulos sob demanda com metadados e capas em alta definição.
          </p>
        </div>

        {/* Search & Type Switcher */}
        <div className="flex items-center gap-2.5 w-full md:w-auto">
          {/* Switcher Filmes / Séries */}
          <div className="flex items-center bg-zinc-900 border border-white/10 p-1 rounded-xl">
            <button
              onClick={() => { setMediaType('movie'); setSearchQuery(''); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                mediaType === 'movie'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5" /> Filmes
            </button>
            <button
              onClick={() => { setMediaType('series'); setSearchQuery(''); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                mediaType === 'series'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Tv className="w-3.5 h-3.5" /> Séries
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar em todo catálogo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-zinc-900 border border-white/10 rounded-xl text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Alphabet Pills (hidden during active search) */}
      {!searchQuery && (
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
          {ALPHABET.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-8 h-8 rounded-xl text-xs font-bold transition-all flex items-center justify-center flex-shrink-0 ${
                selectedLetter === letter
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      )}

      {/* Search Results List View */}
      {searchQuery.trim().length >= 2 ? (
        <div>
          <div className="text-xs font-medium text-zinc-400 mb-3 flex items-center justify-between">
            <span>Resultados para "{searchQuery}":</span>
            {isSearching && <RefreshCw className="w-3.5 h-3.5 text-red-500 animate-spin" />}
          </div>

          {searchResults.length === 0 && !isSearching ? (
            <div className="py-20 text-center flex flex-col items-center justify-center gap-2 bg-zinc-900/40 rounded-3xl border border-white/5 p-8">
              <Film className="w-10 h-10 text-zinc-600" />
              <p className="text-sm font-semibold text-zinc-300">Nenhum título encontrado</p>
              <p className="text-xs text-zinc-500">Tente buscar por palavras-chave diferentes.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {searchResults.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOpenSearchItem(item)}
                  className="p-3.5 rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/20 hover:bg-zinc-800/80 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      {item.isSeries ? <Tv className="w-5 h-5" /> : <Film className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-100 group-hover:text-white line-clamp-1">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] text-zinc-400 mt-0.5">
                        <span className="uppercase font-semibold text-red-400">
                          {item.isSeries ? 'Série' : 'Filme'}
                        </span>
                        {item.year && <span>• {item.year}</span>}
                        <span>• Letra {item.letter}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] text-zinc-500 group-hover:text-red-400 font-medium">
                    Ver detalhes →
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Regular Alphabet Grid View */
        <div>
          {isLoading ? (
            <div className="py-24 flex flex-col items-center justify-center gap-3">
              <RefreshCw className="w-8 h-8 text-red-500 animate-spin" />
              <p className="text-xs text-zinc-400 font-medium">
                Carregando catálogo ({mediaType === 'movie' ? 'Filmes' : 'Séries'} - Letra {selectedLetter})...
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center gap-2 bg-zinc-900/40 rounded-3xl border border-white/5 p-8">
              <Film className="w-10 h-10 text-zinc-600" />
              <p className="text-sm font-semibold text-zinc-300">Nenhum título encontrado nesta letra</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
              {items.map((item) => (
                <MediaCard
                  key={item.id}
                  item={item}
                  onClick={(i, m) => setActiveModalItem({ item: i, meta: m })}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Details & Playback Modal */}
      {activeModalItem && (
        <MediaModal
          item={activeModalItem.item}
          meta={activeModalItem.meta}
          onClose={() => setActiveModalItem(null)}
        />
      )}
    </div>
  );
};
