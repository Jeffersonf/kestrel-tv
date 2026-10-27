import React from 'react';
import { Radio, Film, Tv, Heart, Settings, Play } from 'lucide-react';

export type NavTab = 'tv' | 'movies' | 'series' | 'favorites' | 'settings';

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
  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => onTabChange('tv')}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
            <Play className="w-4 h-4 fill-white ml-0.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-white leading-none">
              kestrel<span className="text-red-500">TV</span>
            </span>
            <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-500 mt-0.5">
              Stream & Live
            </span>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 border border-white/5 p-1 rounded-2xl">
          <button
            onClick={() => onTabChange('tv')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'tv'
                ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <Radio className="w-3.5 h-3.5" /> TV ao Vivo
          </button>

          <button
            onClick={() => onTabChange('movies')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'movies'
                ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <Film className="w-3.5 h-3.5" /> Filmes
          </button>

          <button
            onClick={() => onTabChange('series')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'series'
                ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <Tv className="w-3.5 h-3.5" /> Séries
          </button>

          <button
            onClick={() => onTabChange('favorites')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'favorites'
                ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Favoritos</span>
            {favoritesCount > 0 && (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white">
                {favoritesCount}
              </span>
            )}
          </button>
        </nav>

        {/* Right Actions: Settings & Status */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-white/5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-medium text-zinc-400">Online</span>
          </div>

          <button
            onClick={() => onTabChange('settings')}
            className={`p-2 rounded-xl border transition-all ${
              activeTab === 'settings'
                ? 'bg-red-600 text-white border-red-500'
                : 'bg-zinc-900 text-zinc-400 border-white/5 hover:text-white hover:bg-zinc-800'
            }`}
            title="Ajustes e Configurações"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden flex items-center justify-around border-t border-white/5 bg-zinc-950 px-2 py-2">
        <button
          onClick={() => onTabChange('tv')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-[10px] font-semibold transition-colors ${
            activeTab === 'tv' ? 'text-red-500' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <Radio className="w-4 h-4" />
          <span>Ao Vivo</span>
        </button>

        <button
          onClick={() => onTabChange('movies')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-[10px] font-semibold transition-colors ${
            activeTab === 'movies' ? 'text-red-500' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <Film className="w-4 h-4" />
          <span>Filmes</span>
        </button>

        <button
          onClick={() => onTabChange('series')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-[10px] font-semibold transition-colors ${
            activeTab === 'series' ? 'text-red-500' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <Tv className="w-4 h-4" />
          <span>Séries</span>
        </button>

        <button
          onClick={() => onTabChange('favorites')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-[10px] font-semibold transition-colors ${
            activeTab === 'favorites' ? 'text-red-500' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>Favoritos</span>
        </button>
      </div>
    </header>
  );
};
