import { useState, useEffect } from 'react';
import { Header, type NavTab } from './components/layout/Header';
import { LiveTvView } from './components/tv/LiveTvView';
import { VodView } from './components/vod/VodView';
import { FavoritesView } from './components/layout/FavoritesView';
import { SettingsModal } from './components/layout/SettingsModal';
import { storageService } from './services/storageService';

export function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('tv');
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    const updateFavCount = () => {
      const favs = storageService.getFavoriteChannels();
      setFavoritesCount(favs.length);
    };
    updateFavCount();
    const interval = setInterval(updateFavCount, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-red-600/30 selection:text-white">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        favoritesCount={favoritesCount}
      />

      {/* Main View Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'tv' && <LiveTvView />}
        {(activeTab === 'movies' || activeTab === 'series') && <VodView />}
        {activeTab === 'favorites' && <FavoritesView />}
        {activeTab === 'settings' && <SettingsModal />}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 px-4 text-center text-xs text-zinc-500 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-300">kestrelTV</span>
            <span>•</span>
            <span>Stream & Live Player</span>
          </div>
          <p className="text-[11px] text-zinc-600">
            Interface para reprodução de streams públicos e compatibilidade HLS/MP4.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
