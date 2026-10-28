import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, Film, Tv, RefreshCw, X, Flame, Sparkles, 
  Skull, Compass, Heart, Clapperboard, Rocket, 
  Smile, Shield, BookOpen, Users
} from 'lucide-react';
import type { MediaItem, TMDBMetadata } from '../../types';
import { catalogService } from '../../services/catalogService';
import { MediaCard } from './MediaCard';
import { MediaModal } from './MediaModal';
import { Pagination } from '../common/Pagination';

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'];

const GENRES = [
  { name: 'Lançamentos', label: 'Lançamentos', icon: Flame, color: 'text-amber-400' },
  { name: 'Ação', label: 'Ação', icon: Sparkles, color: 'text-red-400' },
  { name: 'Comédia', label: 'Comédia', icon: Smile, color: 'text-yellow-400' },
  { name: 'Terror', label: 'Terror', icon: Skull, color: 'text-purple-400' },
  { name: 'Suspense', label: 'Suspense', icon: Shield, color: 'text-cyan-400' },
  { name: 'Ficção Científica', label: 'Ficção', icon: Rocket, color: 'text-blue-400' },
  { name: 'Animação', label: 'Animação', icon: Sparkles, color: 'text-emerald-400' },
  { name: 'Romance', label: 'Romance', icon: Heart, color: 'text-rose-400' },
  { name: 'Drama', label: 'Drama', icon: Clapperboard, color: 'text-orange-400' },
  { name: 'Aventura', label: 'Aventura', icon: Compass, color: 'text-lime-400' },
  { name: 'Documentário', label: 'Documentário', icon: BookOpen, color: 'text-teal-400' },
  { name: 'Família', label: 'Família', icon: Users, color: 'text-pink-400' },
];

const ITEMS_PER_PAGE = 24;

export const VodView: React.FC = () => {
  const [mediaType, setMediaType] = useState<'movie' | 'series'>('movie');
  const [browseMode, setBrowseMode] = useState<'genre' | 'letter'>('genre');
  const [selectedGenre, setSelectedGenre] = useState<string>('Lançamentos');
  const [selectedLetter, setSelectedLetter] = useState<string>('A');

  const [items, setItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Busca
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ title: string; isSeries: boolean; letter: string; year: string }[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Modal State
  const [activeModalItem, setActiveModalItem] = useState<{
    item: MediaItem;
    meta: TMDBMetadata;
  } | null>(null);

  // Resetar página quando filtros mudam
  useEffect(() => {
    setCurrentPage(1);
  }, [mediaType, browseMode, selectedGenre, selectedLetter, searchQuery]);

  // Carregar dados de acordo com o modo (Gênero ou Letra)
  useEffect(() => {
    if (searchQuery.trim().length >= 2) return;

    setIsLoading(true);

    if (browseMode === 'genre') {
      catalogService.fetchMoviesByGenre(selectedGenre).then((data) => {
        // Filtrar por tipo (filme ou série se aplicável)
        const filtered = selectedGenre === 'Lançamentos'
          ? data.filter(d => d.type === mediaType)
          : data.filter(d => !d.type || d.type === mediaType);
        
        setItems(filtered.length > 0 ? filtered : data);
        setIsLoading(false);
      });
    } else {
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
    }
  }, [mediaType, browseMode, selectedGenre, selectedLetter, searchQuery]);

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

  // Paginação dos itens carregados
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  }, [items, currentPage]);

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
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 md:px-6 py-6 animate-in fade-in duration-300">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center gap-2.5">
            {mediaType === 'movie' ? (
              <Film className="w-5 h-5 text-red-500" />
            ) : (
              <Tv className="w-5 h-5 text-red-500" />
            )}
            {mediaType === 'movie' ? 'Catálogo de Filmes' : 'Catálogo de Séries'}
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Mais de 30.000 títulos sob demanda separados por categorias e gêneros cinematográficos.
          </p>
        </div>

        {/* Search & Type Switcher */}
        <div className="flex items-center gap-2.5 w-full md:w-auto">
          {/* Switcher Filmes / Séries */}
          <div className="flex items-center bg-zinc-900 border border-white/10 p-1 rounded-2xl">
            <button
              onClick={() => { setMediaType('movie'); setSearchQuery(''); }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                mediaType === 'movie'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5" /> Filmes
            </button>
            <button
              onClick={() => { setMediaType('series'); setSearchQuery(''); }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                mediaType === 'series'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Tv className="w-3.5 h-3.5" /> Séries
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar em todo catálogo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 bg-zinc-900 border border-white/10 rounded-2xl text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category / Genre Switcher Pills */}
      {!searchQuery && (
        <div className="space-y-3">
          {/* Main Mode Toggle: Categorias vs A-Z */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {GENRES.map((g) => {
              const Icon = g.icon;
              const isSelected = browseMode === 'genre' && selectedGenre === g.name;

              return (
                <button
                  key={g.name}
                  onClick={() => {
                    setBrowseMode('genre');
                    setSelectedGenre(g.name);
                  }}
                  className={`px-3.5 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                      : 'bg-zinc-900 border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : g.color}`} />
                  <span>{g.label}</span>
                </button>
              );
            })}

            {/* A-Z Mode Button */}
            <button
              onClick={() => setBrowseMode('letter')}
              className={`px-3.5 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 border ${
                browseMode === 'letter'
                  ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                  : 'bg-zinc-900 border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <span>🔤 Todos (A–Z)</span>
            </button>
          </div>

          {/* Alphabet Pills (visível somente quando browseMode for 'letter') */}
          {browseMode === 'letter' && (
            <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none animate-in fade-in">
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
        /* Regular Paginated Grid View */
        <div>
          {isLoading ? (
            <div className="py-24 flex flex-col items-center justify-center gap-3">
              <RefreshCw className="w-8 h-8 text-red-500 animate-spin" />
              <p className="text-xs text-zinc-400 font-medium">
                Carregando títulos ({browseMode === 'genre' ? selectedGenre : `Letra ${selectedLetter}`})...
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center gap-2 bg-zinc-900/40 rounded-3xl border border-white/5 p-8">
              <Film className="w-10 h-10 text-zinc-600" />
              <p className="text-sm font-semibold text-zinc-300">Nenhum título encontrado nesta categoria</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                {paginatedItems.map((item) => (
                  <MediaCard
                    key={item.id}
                    item={item}
                    onClick={(i, m) => setActiveModalItem({ item: i, meta: m })}
                  />
                ))}
              </div>

              {/* Paginação do VOD */}
              <Pagination
                currentPage={currentPage}
                totalItems={items.length}
                itemsPerPage={ITEMS_PER_PAGE}
                onPageChange={(p) => {
                  setCurrentPage(p);
                  window.scrollTo({ top: 120, behavior: 'smooth' });
                }}
                itemLabel="títulos"
              />
            </>
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
