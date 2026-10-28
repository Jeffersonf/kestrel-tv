import React from 'react';
import { Radio, Film, Tv, Heart, Settings, Play, Download, Trophy } from 'lucide-react';
import { usePwaInstall } from '../../hooks/usePwaInstall';

export type NavTab = 'tv' | 'football' | 'movies' | 'series' | 'favorites' | 'settings';

interface HeaderProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  favoritesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  favoritesCount,
}) => {
  const { isInstalled, promptInstall } = usePwaInstall();

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-zinc-950/90 backdrop-blur-2xl border-b border-white/10 transition-all shadow-xl shadow-black/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => onTabChange('tv')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-red-600 via-red-600 to-rose-700 flex items-center justify-center text-white shadow-lg shadow-red-600/40 group-hover:scale-105 group-hover:shadow-red-600/60 transition-all duration-300">
              <Play className="w-4 h-4 fill-white ml-0.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white leading-none">
                kestrel<span className="text-red-500 font-extrabold">TV</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 mt-0.5">
                Smart TV & Live Stream
              </span>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1.5 bg-zinc-900/90 border border-white/10 p-1.5 rounded-2xl shadow-inner">
            <button
              onClick={() => onTabChange('tv')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'tv'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-100'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/70'
              }`}
            >
              <Radio className="w-3.5 h-3.5" /> TV ao Vivo
            </button>

            <button
              onClick={() => onTabChange('football')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'football'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold shadow-lg shadow-amber-500/20 scale-100'
                  : 'text-amber-300/80 hover:text-amber-300 hover:bg-amber-500/10'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Futebol & Santos</span>
            </button>

            <button
              onClick={() => onTabChange('movies')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'movies'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-100'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/70'
              }`}
            >
              <Film className="w-3.5 h-3.5" /> Filmes
            </button>

            <button
              onClick={() => onTabChange('series')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'series'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-100'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/70'
              }`}
            >
              <Tv className="w-3.5 h-3.5" /> Séries
            </button>

            <button
              onClick={() => onTabChange('favorites')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'favorites'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-100'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/70'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Favoritos</span>
              {favoritesCount > 0 && (
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-bold">
                  {favoritesCount}
                </span>
              )}
            </button>
          </nav>

          {/* Right Actions: Install PWA & Settings */}
          <div className="flex items-center gap-2.5">
            {/* Install PWA Button */}
            {!isInstalled && (
              <button
                onClick={promptInstall}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-600/20 to-rose-600/20 hover:from-red-600/30 hover:to-rose-600/30 border border-red-500/40 text-red-300 hover:text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
                title="Instalar App kestrelTV (Zero Cota Cloudflare & Modo Standalone)"
              >
                <Download className="w-3.5 h-3.5 text-red-400" />
                <span className="hidden sm:inline">Instalar App</span>
              </button>
            )}

            {/* Online Status Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-medium text-zinc-300">Ao Vivo</span>
            </div>

            {/* Settings Button */}
            <button
              onClick={() => onTabChange('settings')}
              className={`p-2 rounded-xl border transition-all ${
                activeTab === 'settings'
                  ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                  : 'bg-zinc-900 border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
              title="Configurações de Listas e Proxy"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Sub-bar */}
        <div className="md:hidden flex items-center justify-around border-t border-white/5 py-2 px-2 bg-zinc-950/95 overflow-x-auto scrollbar-none">
          <button
            onClick={() => onTabChange('tv')}
            className={`px-3 py-1 rounded-xl text-xs font-medium flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'tv' ? 'bg-red-600 text-white' : 'text-zinc-400'
            }`}
          >
            <Radio className="w-3.5 h-3.5" /> TV
          </button>

          <button
            onClick={() => onTabChange('football')}
            className={`px-3 py-1 rounded-xl text-xs font-medium flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'football' ? 'bg-amber-500 text-black font-bold' : 'text-amber-400'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" /> Santos & Futebol
          </button>

          <button
            onClick={() => onTabChange('movies')}
            className={`px-3 py-1 rounded-xl text-xs font-medium flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'movies' ? 'bg-red-600 text-white' : 'text-zinc-400'
            }`}
          >
            <Film className="w-3.5 h-3.5" /> Filmes
          </button>

          <button
            onClick={() => onTabChange('series')}
            className={`px-3 py-1 rounded-xl text-xs font-medium flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'series' ? 'bg-red-600 text-white' : 'text-zinc-400'
            }`}
          >
            <Tv className="w-3.5 h-3.5" /> Séries
          </button>

          <button
            onClick={() => onTabChange('favorites')}
            className={`px-3 py-1 rounded-xl text-xs font-medium flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'favorites' ? 'bg-red-600 text-white' : 'text-zinc-400'
            }`}
          >
            <Heart className="w-3.5 h-3.5" /> Favoritos ({favoritesCount})
          </button>
        </div>
      </header>
    </>
  );
};
