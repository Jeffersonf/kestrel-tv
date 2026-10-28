import React from 'react';
import { Radio, Film, Tv, Heart, Settings, Download, Trophy } from 'lucide-react';
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
      <header className="sticky top-0 z-40 w-full bg-[#070a13]/90 backdrop-blur-2xl border-b border-white/10 transition-all shadow-2xl shadow-black/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo (Sky+ Styled: kestrel+) */}
          <div
            onClick={() => onTabChange('tv')}
            className="flex items-center gap-1.5 cursor-pointer group select-none shrink-0"
          >
            <div className="flex items-center tracking-tighter font-black text-xl md:text-2xl text-white">
              <span>kestrel</span>
              <span className="ml-1 px-1.5 py-0.5 rounded-md bg-gradient-to-r from-red-600 to-sky-500 text-white font-black text-sm md:text-base shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
                +
              </span>
            </div>
          </div>

          {/* Center Navigation Tabs (Sky+ Streaming Style) */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#0d1222]/80 border border-white/10 p-1.5 rounded-2xl shadow-inner">
            <button
              onClick={() => onTabChange('tv')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'tv'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Ao Vivo</span>
            </button>

            <button
              onClick={() => onTabChange('football')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'football'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg shadow-amber-500/20'
                  : 'text-amber-300/80 hover:text-amber-300 hover:bg-amber-500/10'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Futebol & Santos</span>
            </button>

            <button
              onClick={() => onTabChange('movies')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'movies'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Filmes</span>
            </button>

            <button
              onClick={() => onTabChange('series')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'series'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Séries</span>
            </button>

            <button
              onClick={() => onTabChange('favorites')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-200 ${
                activeTab === 'favorites'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Minha Lista</span>
              {favoritesCount > 0 && (
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-mono">
                  {favoritesCount}
                </span>
              )}
            </button>
          </nav>

          {/* Right Actions: APK Android TV, PWA & Settings */}
          <div className="flex items-center gap-2.5">
            {/* Android TV APK Download */}
            <a
              href="./downloads/kestrel-tv.apk"
              download="kestrel-tv.apk"
              title="Baixar APK Nativo para Android TV (Mi Box 3 / TV Box)"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 hover:text-white text-xs font-bold shadow-sm transition-all active:scale-95"
            >
              <Tv className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Baixar APK TV</span>
            </a>

            {/* Install PWA Button */}
            {!isInstalled && (
              <button
                onClick={promptInstall}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600/15 hover:bg-red-600/25 border border-red-500/30 text-red-300 hover:text-white text-xs font-bold shadow-sm transition-all active:scale-95"
                title="Instalar App kestrel+"
              >
                <Download className="w-3.5 h-3.5 text-red-400" />
                <span className="hidden sm:inline">Instalar App</span>
              </button>
            )}

            {/* Live Indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-[#0d1222] border border-white/10 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-zinc-300">Ao Vivo</span>
            </div>

            {/* Settings Button */}
            <button
              onClick={() => onTabChange('settings')}
              className={`p-2 rounded-xl border transition-all ${
                activeTab === 'settings'
                  ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                  : 'bg-[#0d1222] border-white/10 text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
              title="Configurações"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Sub-bar */}
        <div className="lg:hidden flex items-center justify-around border-t border-white/5 py-2 px-2 bg-[#080c17] overflow-x-auto scrollbar-none">
          <button
            onClick={() => onTabChange('tv')}
            className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'tv' ? 'bg-red-600 text-white' : 'text-zinc-400'
            }`}
          >
            <Radio className="w-3.5 h-3.5" /> Ao Vivo
          </button>

          <button
            onClick={() => onTabChange('football')}
            className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'football' ? 'bg-amber-500 text-black' : 'text-amber-400/80'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" /> Futebol
          </button>

          <button
            onClick={() => onTabChange('movies')}
            className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'movies' ? 'bg-red-600 text-white' : 'text-zinc-400'
            }`}
          >
            <Film className="w-3.5 h-3.5" /> Filmes
          </button>

          <button
            onClick={() => onTabChange('series')}
            className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'series' ? 'bg-red-600 text-white' : 'text-zinc-400'
            }`}
          >
            <Tv className="w-3.5 h-3.5" /> Séries
          </button>

          <button
            onClick={() => onTabChange('favorites')}
            className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'favorites' ? 'bg-red-600 text-white' : 'text-zinc-400'
            }`}
          >
            <Heart className="w-3.5 h-3.5" /> Minha Lista
          </button>
        </div>
      </header>
    </>
  );
};
