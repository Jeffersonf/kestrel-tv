import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, ShieldAlert, Radio, Flame, Camera, Search, 
  ExternalLink, Volume2, VolumeX, RefreshCw, Eye, ThumbsUp
} from 'lucide-react';
import type { Channel } from '../../types';
import { catalogService } from '../../services/catalogService';
import { redgifsService, type RedGifItem } from '../../services/redgifsService';
import { eromeService, EROME_CATEGORIES } from '../../services/eromeService';
import { VideoPlayer } from '../player/VideoPlayer';
import { Pagination } from '../common/Pagination';

interface SecretAdultHubProps {
  onClose: () => void;
}

type AdultTab = 'tv' | 'redgifs' | 'erome';

const ITEMS_PER_PAGE = 24;

export const SecretAdultHub: React.FC<SecretAdultHubProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<AdultTab>('tv');

  // TV State
  const [adultChannels, setAdultChannels] = useState<Channel[]>([]);
  const [tvSearch, setTvSearch] = useState('');
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const [tvPage, setTvPage] = useState(1);

  // RedGifs State
  const [redgifs, setRedgifs] = useState<RedGifItem[]>([]);
  const [selectedGif, setSelectedGif] = useState<RedGifItem | null>(null);
  const [redgifQuery, setRedgifQuery] = useState('Trending');
  const [isSearchingGifs, setIsSearchingGifs] = useState(false);
  const [gifSound, setGifSound] = useState(true);

  // Erome State
  const [eromeInput, setEromeInput] = useState('');

  // Sair no Esc (Panic Key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedChannel) {
          setSelectedChannel(null);
        } else if (selectedGif) {
          setSelectedGif(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, selectedChannel, selectedGif]);

  // Carregar Canais Adultos
  useEffect(() => {
    catalogService.fetchChannels().then((channels) => {
      const filtered = channels.filter((c) => c.category === 'Adulto (+18)');
      setAdultChannels(filtered);
      if (filtered.length > 0 && !selectedChannel) {
        setSelectedChannel(filtered[0]);
      }
    });
  }, []);

  // Carregar RedGifs
  const loadRedGifs = async (query: string) => {
    setIsSearchingGifs(true);
    const data = await redgifsService.search(query, 1, 24);
    setRedgifs(data.items);
    setIsSearchingGifs(false);
  };

  useEffect(() => {
    if (activeTab === 'redgifs') {
      loadRedGifs(redgifQuery);
    }
  }, [activeTab]);

  // Canais Filtrados
  const filteredChannels = useMemo(() => {
    if (!tvSearch.trim()) return adultChannels;
    const q = tvSearch.toLowerCase();
    return adultChannels.filter((c) => c.name.toLowerCase().includes(q));
  }, [adultChannels, tvSearch]);

  const paginatedChannels = useMemo(() => {
    const start = (tvPage - 1) * ITEMS_PER_PAGE;
    return filteredChannels.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredChannels, tvPage]);

  const handleOpenEromeAlbum = (e: React.FormEvent) => {
    e.preventDefault();
    const id = eromeService.parseAlbumId(eromeInput);
    if (id) {
      window.open(`https://www.erome.com/a/${id}`, '_blank', 'noreferrer');
    } else if (eromeInput.trim()) {
      window.open(eromeService.getSearchUrl(eromeInput), '_blank', 'noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#09090b] text-zinc-100 flex flex-col overflow-hidden animate-in fade-in duration-300">
      {/* Top Vault Header */}
      <header className="h-16 px-4 md:px-6 bg-zinc-950/90 border-b border-rose-950/50 backdrop-blur-2xl flex items-center justify-between shadow-2xl flex-shrink-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-rose-600 via-rose-700 to-red-900 flex items-center justify-center text-white shadow-lg shadow-rose-900/40">
            <ShieldAlert className="w-5 h-5 text-rose-200" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-black tracking-tight text-white leading-none">
                kestrel<span className="text-rose-500 font-extrabold">VAULT</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40 text-[10px] font-extrabold uppercase tracking-wider">
                Restrito (+18)
              </span>
            </div>
            <p className="text-[10px] text-zinc-500 font-mono mt-0.5 hidden sm:block">
              Acesso reservado via chave 0000 • Conteúdo adulto
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-zinc-900/90 border border-white/10 p-1 rounded-2xl">
          <button
            onClick={() => setActiveTab('tv')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'tv'
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">TV Adulta Ao Vivo</span>
            <span className="sm:hidden">TV</span>
          </button>

          <button
            onClick={() => setActiveTab('redgifs')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'redgifs'
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            <span>RedGifs</span>
          </button>

          <button
            onClick={() => setActiveTab('erome')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'erome'
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-rose-400" />
            <span>Erome Hub</span>
          </button>
        </div>

        {/* Panic / Exit Button */}
        <button
          onClick={onClose}
          className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-rose-950/40 border border-white/10 hover:border-rose-500/40 text-zinc-300 hover:text-rose-300 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
          title="Fechar Vault e voltar à TV normal (ou pressione Esc)"
        >
          <X className="w-4 h-4" />
          <span className="hidden md:inline">Sair do Vault (Esc)</span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950">
        <div className="max-w-7xl mx-auto space-y-6">

          {/* TAB 1: TV ADULTA AO VIVO */}
          {activeTab === 'tv' && (
            <div className="space-y-6">
              {/* Active Player if Channel Selected */}
              {selectedChannel && (
                <div className="bg-zinc-950 border border-rose-500/20 rounded-3xl overflow-hidden shadow-2xl p-2 md:p-4">
                  <VideoPlayer
                    title={selectedChannel.name}
                    sources={selectedChannel.sources}
                    isLive={true}
                    mediaId={selectedChannel.id}
                    onClose={() => setSelectedChannel(null)}
                  />
                </div>
              )}

              {/* Channel Selector Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Radio className="w-4 h-4 text-rose-500" />
                    Canais de TV Adultos ({adultChannels.length} disponíveis)
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Playboy TV, Sexy Hot, Venus, Sextreme, Hustler, Brasileirinhas, Penthouse e mais.
                  </p>
                </div>

                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={tvSearch}
                    onChange={(e) => { setTvSearch(e.target.value); setTvPage(1); }}
                    placeholder="Filtrar canal adulto..."
                    className="w-full pl-9 pr-4 py-2 bg-zinc-950 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              {/* Channels Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {paginatedChannels.map((ch) => {
                  const isSelected = selectedChannel?.id === ch.id;
                  return (
                    <div
                      key={ch.id}
                      onClick={() => setSelectedChannel(ch)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                        isSelected
                          ? 'bg-rose-950/40 border-rose-500 shadow-lg shadow-rose-900/20'
                          : 'bg-zinc-900/80 border-white/5 hover:border-rose-500/30 hover:bg-zinc-800'
                      }`}
                    >
                      <div className="h-16 flex items-center justify-center p-1 bg-zinc-950/60 rounded-xl border border-white/5 mb-2.5 overflow-hidden">
                        {ch.logo ? (
                          <img
                            src={ch.logo}
                            alt={ch.name}
                            className="max-h-full max-w-full object-contain filter drop-shadow group-hover:scale-105 transition-transform"
                            onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                          />
                        ) : (
                          <Radio className="w-6 h-6 text-rose-500/50" />
                        )}
                      </div>

                      <div>
                        <span className="text-xs font-bold text-white block truncate group-hover:text-rose-300 transition-colors">
                          {ch.name}
                        </span>
                        <div className="flex items-center justify-between mt-1 text-[10px] text-zinc-400">
                          <span className="flex items-center gap-1 text-rose-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                            Ao Vivo
                          </span>
                          <span>{ch.sources.length} fonte{ch.sources.length > 1 ? 's' : ''}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredChannels.length > ITEMS_PER_PAGE && (
                <Pagination
                  currentPage={tvPage}
                  totalItems={filteredChannels.length}
                  itemsPerPage={ITEMS_PER_PAGE}
                  onPageChange={setTvPage}
                />
              )}
            </div>
          )}

          {/* TAB 2: REDGIFS HD CLIPS */}
          {activeTab === 'redgifs' && (
            <div className="space-y-6">
              {/* RedGifs Search & Tag Pills */}
              <div className="p-4.5 rounded-3xl bg-zinc-900/60 border border-white/5 space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Flame className="w-5 h-5 text-rose-500" />
                      RedGifs HD Clips
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Vídeos curtos em alta definição com reprodução rápida, tags e áudio.
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => { e.preventDefault(); loadRedGifs(redgifQuery); }}
                    className="relative w-full sm:w-80 flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={redgifQuery}
                      onChange={(e) => setRedgifQuery(e.target.value)}
                      placeholder="Pesquisar no RedGifs..."
                      className="w-full px-3.5 py-2 bg-zinc-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
                    >
                      Buscar
                    </button>
                  </form>
                </div>

                {/* Popular Tag Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {redgifsService.getPopularTags().map((tag) => (
                    <button
                      key={tag}
                      onClick={() => { setRedgifQuery(tag); loadRedGifs(tag); }}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                        redgifQuery.toLowerCase() === tag.toLowerCase()
                          ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                          : 'bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/5'
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* RedGifs Grid */}
              {isSearchingGifs ? (
                <div className="py-20 flex flex-col items-center justify-center gap-3">
                  <RefreshCw className="w-7 h-7 text-rose-500 animate-spin" />
                  <span className="text-xs text-zinc-400 font-mono">Carregando clips do RedGifs...</span>
                </div>
              ) : redgifs.length === 0 ? (
                <div className="py-16 text-center text-xs text-zinc-500">
                  Nenhum clip encontrado para esta pesquisa. Tente outro termo ou categoria.
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
                  {redgifs.map((gif) => (
                    <div
                      key={gif.id}
                      onClick={() => setSelectedGif(gif)}
                      className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/5 hover:border-rose-500/50 transition-all cursor-pointer shadow-lg hover:shadow-rose-900/20 aspect-[9/14] flex flex-col justify-end"
                    >
                      {/* Poster / Thumbnail Image */}
                      <img
                        src={gif.previewUrl}
                        alt={gif.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-2 inset-x-2 flex items-center justify-between text-[10px]">
                        {gif.hasAudio && (
                          <span className="px-1.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-zinc-300 flex items-center gap-1 font-semibold">
                            <Volume2 className="w-3 h-3 text-rose-400" /> Áudio
                          </span>
                        )}
                        <span className="px-1.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-zinc-300 font-mono ml-auto">
                          {gif.duration}s
                        </span>
                      </div>

                      {/* Bottom Info */}
                      <div className="relative p-2.5 z-10 space-y-1">
                        <span className="text-xs font-bold text-white block truncate group-hover:text-rose-300">
                          {gif.title}
                        </span>
                        <div className="flex items-center justify-between text-[10px] text-zinc-400">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" /> {(gif.views / 1000).toFixed(0)}k
                          </span>
                          <span className="flex items-center gap-1 text-rose-400">
                            <ThumbsUp className="w-3 h-3" /> {gif.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: EROME HUB */}
          {activeTab === 'erome' && (
            <div className="space-y-6">
              {/* Erome Album Opener Form */}
              <div className="p-6 rounded-3xl bg-zinc-900/60 border border-white/5 space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Camera className="w-5 h-5 text-rose-500" />
                    Erome Hub & Álbuns
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Explore álbuns fotográficos e coleções em destaque, ou insira o link de qualquer álbum do Erome.
                  </p>
                </div>

                <form onSubmit={handleOpenEromeAlbum} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="text"
                    value={eromeInput}
                    onChange={(e) => setEromeInput(e.target.value)}
                    placeholder="Cole o link ou ID do álbum (ex: https://www.erome.com/a/ABC123 ou termo de busca)..."
                    className="flex-1 px-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 font-mono"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 transition-all active:scale-95"
                  >
                    <ExternalLink className="w-4 h-4" /> Abrir Álbum / Busca
                  </button>
                </form>
              </div>

              {/* Curated Erome Categories */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  Categorias e Álbuns em Destaque
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {EROME_CATEGORIES.map((cat) => (
                    <a
                      key={cat.id}
                      href={eromeService.getSearchUrl(cat.tag)}
                      target="_blank"
                      rel="noreferrer"
                      className="p-4 rounded-2xl bg-zinc-900/80 border border-white/5 hover:border-rose-500/40 hover:bg-zinc-800 transition-all group flex items-start justify-between"
                    >
                      <div>
                        <span className="text-xs font-bold text-white block group-hover:text-rose-400 transition-colors">
                          {cat.name}
                        </span>
                        <p className="text-[11px] text-zinc-400 mt-1">
                          {cat.description}
                        </p>
                      </div>

                      <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-rose-400 transition-colors shrink-0 ml-2 mt-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* RedGifs Modal Player */}
      {selectedGif && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedGif(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-zinc-950 border border-rose-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-3.5 bg-zinc-900/90 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold text-white truncate max-w-xs">
                {selectedGif.title} • @{selectedGif.userName}
              </span>
              <button
                onClick={() => setSelectedGif(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative bg-black aspect-[9/16] max-h-[70vh] flex items-center justify-center">
              <video
                src={selectedGif.hdUrl || selectedGif.sdUrl}
                poster={selectedGif.previewUrl}
                controls
                autoPlay
                loop
                muted={!gifSound}
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Controls Bar */}
            <div className="p-3.5 bg-zinc-900 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => setGifSound(!gifSound)}
                className="px-3 py-1.5 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5"
              >
                {gifSound ? <Volume2 className="w-3.5 h-3.5 text-rose-400" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>{gifSound ? 'Som Ativo' : 'Mudo'}</span>
              </button>

              <a
                href={`https://www.redgifs.com/watch/${selectedGif.id}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1"
              >
                Ver no RedGifs <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
