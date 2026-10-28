import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, Tv, Heart, Radio, X, RotateCcw, 
  Trophy, Film, Globe, Compass, Sparkles, Music, 
  Layers, Lock, Unlock, ShieldAlert,
  PanelRightClose, PanelRightOpen, Play, ChevronLeft, ChevronRight
} from 'lucide-react';
import type { Channel } from '../../types';
import { catalogService } from '../../services/catalogService';
import { storageService } from '../../services/storageService';
import { FALLBACK_CHANNELS } from '../../services/fallbackChannels';
import { ChannelCard } from './ChannelCard';
import { VideoPlayer } from '../player/VideoPlayer';
import { HeroSpotlight } from './HeroSpotlight';
import { PinModal } from '../modals/PinModal';
import { Pagination } from '../common/Pagination';

const CHANNELS_PER_PAGE = 24;
const SIDEBAR_CHANNELS_PER_PAGE = 10;

function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function getCategoryIcon(cat: string) {
  switch (cat) {
    case 'Jogos & Esportes':
      return <Trophy className="w-3.5 h-3.5 text-amber-400" />;
    case 'Filmes e Séries':
      return <Film className="w-3.5 h-3.5 text-rose-400" />;
    case 'TV Aberta':
      return <Tv className="w-3.5 h-3.5 text-blue-400" />;
    case 'Notícias':
      return <Globe className="w-3.5 h-3.5 text-cyan-400" />;
    case 'Infantil':
      return <Sparkles className="w-3.5 h-3.5 text-yellow-400" />;
    case 'Documentários':
      return <Compass className="w-3.5 h-3.5 text-emerald-400" />;
    case 'Músicas':
      return <Music className="w-3.5 h-3.5 text-purple-400" />;
    case 'Adulto (+18)':
      return <ShieldAlert className="w-3.5 h-3.5 text-red-400" />;
    default:
      return <Layers className="w-3.5 h-3.5 text-zinc-400" />;
  }
}

export const LiveTvView: React.FC = () => {
  const [channels, setChannels] = useState<Channel[]>(() => FALLBACK_CHANNELS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [isAdultUnlocked, setIsAdultUnlocked] = useState(() => storageService.isAdultUnlocked());
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);

  // Paginação da grade principal
  const [currentPage, setCurrentPage] = useState(1);

  // Menu Lateral (Sidebar)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [sidebarCategory, setSidebarCategory] = useState('Todos');
  const [sidebarPage, setSidebarPage] = useState(1);

  const playerContainerRef = useRef<HTMLDivElement>(null);

  const refreshChannels = () => {
    catalogService.fetchChannels().then((data) => {
      if (data && data.length > 0) {
        setChannels(data);
      }
    });
  };

  useEffect(() => {
    setFavorites(storageService.getFavoriteChannels());
    refreshChannels();

    const handleAdultChange = () => {
      setIsAdultUnlocked(storageService.isAdultUnlocked());
    };
    window.addEventListener('kestrel_adult_state_change', handleAdultChange);
    return () => window.removeEventListener('kestrel_adult_state_change', handleAdultChange);
  }, []);

  // Resetar página quando filtros mudam
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, onlyFavorites]);

  useEffect(() => {
    setSidebarPage(1);
  }, [sidebarSearch, sidebarCategory]);

  // Lista de canais visíveis respeitando o filtro de segurança parental (+18)
  const visibleChannels = useMemo(() => {
    if (isAdultUnlocked) return channels;
    return channels.filter((ch) => ch.category !== 'Adulto (+18)');
  }, [channels, isAdultUnlocked]);

  // Contagem de categorias
  const categories = useMemo(() => {
    const cats = new Map<string, number>();
    for (const ch of visibleChannels) {
      cats.set(ch.category, (cats.get(ch.category) || 0) + 1);
    }
    if (!isAdultUnlocked) {
      const adultCount = channels.filter((ch) => ch.category === 'Adulto (+18)').length;
      if (adultCount > 0) {
        cats.set('Adulto (+18)', adultCount);
      }
    }
    return Array.from(cats.entries()).sort((a, b) => {
      const order = ['Jogos & Esportes', 'Filmes e Séries', 'TV Aberta', 'Notícias', 'Infantil', 'Documentários', 'Variedades', 'Músicas', 'Adulto (+18)'];
      const idxA = order.indexOf(a[0]);
      const idxB = order.indexOf(b[0]);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return b[1] - a[1];
    });
  }, [visibleChannels, channels, isAdultUnlocked]);

  // Canais filtrados por busca, favoritos e categoria (Grade Principal)
  const filteredChannels = useMemo(() => {
    let result = visibleChannels;

    if (onlyFavorites) {
      const favSet = new Set(favorites);
      result = result.filter((ch) => favSet.has(ch.id));
    }

    if (searchQuery.trim()) {
      const q = normalizeText(searchQuery);
      result = result.filter((ch) => {
        const nameNorm = normalizeText(ch.name);
        const catNorm = normalizeText(ch.category);
        return nameNorm.includes(q) || catNorm.includes(q);
      });
    } else if (selectedCategory !== 'Todos') {
      result = result.filter((ch) => ch.category === selectedCategory);
    }

    return result;
  }, [visibleChannels, selectedCategory, searchQuery, onlyFavorites, favorites]);

  // Paginação da Grade Principal
  const paginatedChannels = useMemo(() => {
    const start = (currentPage - 1) * CHANNELS_PER_PAGE;
    return filteredChannels.slice(start, start + CHANNELS_PER_PAGE);
  }, [filteredChannels, currentPage]);

  // Canais filtrados especificamente para o Menu Lateral (Sidebar)
  const sidebarFilteredChannels = useMemo(() => {
    let result = visibleChannels;

    if (sidebarCategory !== 'Todos') {
      result = result.filter((ch) => ch.category === sidebarCategory);
    }

    if (sidebarSearch.trim()) {
      const q = normalizeText(sidebarSearch);
      result = result.filter((ch) => {
        const nameNorm = normalizeText(ch.name);
        return nameNorm.includes(q);
      });
    }

    return result;
  }, [visibleChannels, sidebarCategory, sidebarSearch]);

  // Paginação do Menu Lateral
  const sidebarTotalPages = Math.ceil(sidebarFilteredChannels.length / SIDEBAR_CHANNELS_PER_PAGE) || 1;
  const paginatedSidebarChannels = useMemo(() => {
    const start = (sidebarPage - 1) * SIDEBAR_CHANNELS_PER_PAGE;
    return sidebarFilteredChannels.slice(start, start + SIDEBAR_CHANNELS_PER_PAGE);
  }, [sidebarFilteredChannels, sidebarPage]);

  const handleSelectChannel = (channel: Channel) => {
    setSelectedChannel(channel);
    if (playerContainerRef.current) {
      playerContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCategoryClick = (cat: string) => {
    if (cat === 'Adulto (+18)' && !isAdultUnlocked) {
      setIsPinModalOpen(true);
      return;
    }
    setSelectedCategory(cat);
  };

  const handleToggleFavorite = (channelId: string) => {
    storageService.toggleFavoriteChannel(channelId);
    setFavorites(storageService.getFavoriteChannels());
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4 md:px-6 py-6 animate-in fade-in duration-300">
      {/* Active Player & Sidebar Split Area */}
      <div ref={playerContainerRef}>
        {selectedChannel && (
          <div className="flex flex-col lg:flex-row gap-5 mb-8 items-start">
            {/* Main Video Player Container */}
            <div className="flex-1 min-w-0 w-full bg-zinc-900/90 border border-white/10 p-3 md:p-5 rounded-3xl backdrop-blur-2xl shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Reproduzindo Agora</span>
                </div>

                {/* Sidebar Toggle Button */}
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    isSidebarOpen
                      ? 'bg-red-600/20 text-red-400 border-red-500/30'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-white/10'
                  }`}
                  title={isSidebarOpen ? 'Ocultar menu lateral' : 'Mostrar menu lateral de canais'}
                >
                  {isSidebarOpen ? <PanelRightClose className="w-4 h-4" /> : <PanelRightOpen className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isSidebarOpen ? 'Ocultar Menu Lateral' : 'Abrir Menu Lateral'}</span>
                </button>
              </div>

              <VideoPlayer
                title={selectedChannel.name}
                sources={selectedChannel.sources}
                isLive={true}
                onClose={() => setSelectedChannel(null)}
              />
            </div>

            {/* Menu Lateral de Canais (Sidebar) */}
            {isSidebarOpen && (
              <div className="w-full lg:w-80 xl:w-96 flex flex-col rounded-3xl bg-zinc-900/95 border border-white/10 p-4 backdrop-blur-2xl shadow-2xl flex-shrink-0 animate-in slide-in-from-right-4 duration-300">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-red-500 animate-pulse" />
                    <h3 className="text-sm font-bold text-white">Menu Lateral de Canais</h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-white/5">
                    {sidebarFilteredChannels.length} canais
                  </span>
                </div>

                {/* Sidebar Search */}
                <div className="relative my-3">
                  <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Filtrar canal no menu..."
                    value={sidebarSearch}
                    onChange={(e) => setSidebarSearch(e.target.value)}
                    className="w-full pl-8 pr-7 py-2 bg-zinc-950/80 border border-white/10 rounded-xl text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-red-500"
                  />
                  {sidebarSearch && (
                    <button
                      onClick={() => setSidebarSearch('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Sidebar Category Pills (Mini) */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-2 scrollbar-none text-[11px]">
                  <button
                    onClick={() => setSidebarCategory('Todos')}
                    className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${
                      sidebarCategory === 'Todos' ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Todos
                  </button>
                  {['Jogos & Esportes', 'TV Aberta', 'Filmes e Séries', 'Notícias', 'Infantil'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSidebarCategory(cat)}
                      className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${
                        sidebarCategory === cat ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {cat.split(' ')[0]}
                    </button>
                  ))}
                </div>

                {/* Sidebar Channel List */}
                <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[380px] pr-1 scrollbar-none">
                  {paginatedSidebarChannels.map((channel) => {
                    const isCurrent = selectedChannel.id === channel.id;
                    const isFav = favorites.includes(channel.id);

                    return (
                      <div
                        key={`side_${channel.id}`}
                        onClick={() => handleSelectChannel(channel)}
                        className={`group p-2 rounded-xl flex items-center justify-between cursor-pointer border transition-all ${
                          isCurrent
                            ? 'bg-red-600/20 border-red-500 text-white shadow-md'
                            : 'bg-zinc-950/60 border-white/5 hover:bg-zinc-800/80 hover:border-white/20 text-zinc-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {/* Logo */}
                          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center p-1 flex-shrink-0">
                            {channel.logo ? (
                              <img src={channel.logo} alt="" className="max-w-full max-h-full object-contain" />
                            ) : (
                              <Tv className="w-4 h-4 text-zinc-500" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-semibold truncate group-hover:text-white">
                              {channel.name}
                            </h4>
                            <span className="text-[10px] text-zinc-500 truncate block">
                              {channel.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-white/5">
                            {channel.sources.length} font.
                          </span>
                          {isCurrent ? (
                            <Play className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleFavorite(channel.id);
                              }}
                              className={`p-1 rounded hover:bg-zinc-700 ${isFav ? 'text-red-500' : 'text-zinc-600 hover:text-zinc-300'}`}
                            >
                              <Heart className={`w-3 h-3 ${isFav ? 'fill-red-500' : ''}`} />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Sidebar Pagination Footer */}
                <div className="pt-3 mt-2 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-zinc-400">
                    Pág. {sidebarPage} de {sidebarTotalPages}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setSidebarPage((p) => Math.max(1, p - 1))}
                      disabled={sidebarPage === 1}
                      className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      title="Página anterior"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setSidebarPage((p) => Math.min(sidebarTotalPages, p + 1))}
                      disabled={sidebarPage === sidebarTotalPages}
                      className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      title="Próxima página"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hero Spotlight (Apenas quando não houver player aberto) */}
      {!selectedChannel && (
        <HeroSpotlight
          channels={visibleChannels}
          onPlayChannel={handleSelectChannel}
          isFavorite={(id) => favorites.includes(id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* Adult Mode Unlocked Alert Banner */}
      {isAdultUnlocked && (
        <div className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
          <div className="flex items-center gap-2">
            <Unlock className="w-4 h-4 text-rose-400" />
            <span>
              <b>Modo Adulto (+18) Desbloqueado:</b> Os canais adultos estão visíveis na grade.
            </span>
          </div>
          <button
            onClick={() => {
              storageService.lockAdult();
              setSelectedCategory('Todos');
            }}
            className="px-3 py-1 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Lock className="w-3.5 h-3.5" />
            Bloquear Agora
          </button>
        </div>
      )}

      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between pt-2">
        <div>
          <h2 className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center gap-2.5">
            <Radio className="w-5 h-5 text-red-500 animate-pulse" />
            Canais de TV ao Vivo
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            {visibleChannels.length} canais transmitindo em tempo real com servidores redundantes e qualidade HD/FHD.
          </p>
        </div>

        {/* Search & Favorites Filter */}
        <div className="flex items-center gap-2.5 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar canal (ex: SporTV, CazéTV, Premiere, Globo)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 bg-zinc-900/90 border border-white/10 rounded-2xl text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20 transition-all shadow-inner"
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

          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`px-3.5 py-2.5 rounded-2xl border text-xs font-semibold flex items-center gap-2 transition-all ${
              onlyFavorites
                ? 'bg-red-600/20 text-red-400 border-red-500/40 shadow-sm'
                : 'bg-zinc-900 border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-red-500 text-red-500' : ''}`} />
            <span className="hidden sm:inline">Favoritos</span>
            {favorites.length > 0 && (
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${onlyFavorites ? 'bg-red-500 text-white' : 'bg-zinc-800 text-zinc-400'}`}>
                {favorites.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Category Pills Bar */}
      {!searchQuery && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('Todos')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
              selectedCategory === 'Todos'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-100'
                : 'bg-zinc-900/90 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>Todos ({visibleChannels.length})</span>
          </button>

          {categories.map(([cat, count]) => {
            const isAdultCat = cat === 'Adulto (+18)';
            const isLocked = isAdultCat && !isAdultUnlocked;

            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-3.5 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                    : isAdultCat && isLocked
                    ? 'bg-zinc-950 border-rose-500/30 text-rose-300 hover:border-rose-500/50'
                    : 'bg-zinc-900/90 border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {isAdultCat && isLocked ? <Lock className="w-3.5 h-3.5 text-rose-400" /> : getCategoryIcon(cat)}
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    selectedCategory === cat
                      ? 'bg-white/20 text-white'
                      : isAdultCat && isLocked
                      ? 'bg-rose-500/20 text-rose-300'
                      : 'bg-zinc-800 text-zinc-500'
                  }`}
                >
                  {isLocked ? 'PIN' : count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Search Result Banner */}
      {searchQuery.trim() && (
        <div className="flex items-center justify-between text-xs text-zinc-400 px-1 py-1">
          <span>
            Buscando por: <b className="text-white">"{searchQuery}"</b> em todos os canais ({filteredChannels.length} encontrados)
          </span>
          <button
            onClick={() => setSearchQuery('')}
            className="text-red-400 hover:text-red-300 font-semibold"
          >
            Limpar busca
          </button>
        </div>
      )}

      {/* Channel Grid */}
      {filteredChannels.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center justify-center gap-3 bg-zinc-900/40 rounded-3xl border border-white/10 p-8 shadow-inner">
          <Tv className="w-12 h-12 text-zinc-600" />
          <p className="text-base font-bold text-zinc-200">Nenhum canal encontrado</p>
          <p className="text-xs text-zinc-500 max-w-sm">
            {searchQuery
              ? `Nenhum canal corresponde a "${searchQuery}". Tente pesquisar outro termo ou limpar a busca.`
              : 'Não há canais nesta categoria no momento.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Todos');
              setOnlyFavorites(false);
              refreshChannels();
            }}
            className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-2xl flex items-center gap-2 mt-2 transition-colors shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            Recarregar Catálogo Completo
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 md:gap-4.5">
            {paginatedChannels.map((channel) => (
              <ChannelCard
                key={channel.id}
                channel={channel}
                isSelected={selectedChannel?.id === channel.id}
                isFavorite={favorites.includes(channel.id)}
                onSelect={handleSelectChannel}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>

          {/* Paginação da Grade Principal */}
          <Pagination
            currentPage={currentPage}
            totalItems={filteredChannels.length}
            itemsPerPage={CHANNELS_PER_PAGE}
            onPageChange={(p) => {
              setCurrentPage(p);
              if (playerContainerRef.current) {
                playerContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            itemLabel="canais"
          />
        </>
      )}

      {/* Pin Modal for Parental Access */}
      <PinModal
        isOpen={isPinModalOpen}
        onClose={() => setIsPinModalOpen(false)}
        onSuccess={() => {
          setIsAdultUnlocked(true);
          setSelectedCategory('Adulto (+18)');
        }}
      />
    </div>
  );
};
