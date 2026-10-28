import { useState, useEffect } from 'react';
import { Header, type NavTab } from './components/layout/Header';
import { SmartTvView } from './components/tv/SmartTvView';
import { FootballHub } from './components/football/FootballHub';
import { VodView } from './components/vod/VodView';
import { FavoritesView } from './components/layout/FavoritesView';
import { SettingsModal } from './components/layout/SettingsModal';
import { SecretAdultHub } from './components/adult/SecretAdultHub';
import { storageService } from './services/storageService';

export function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('tv');
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [isSecretAdultOpen, setIsSecretAdultOpen] = useState(false);
  const [overrideChannelKeyword, setOverrideChannelKeyword] = useState<string | null>(null);

  useEffect(() => {
    const updateFavCount = () => {
      const favs = storageService.getFavoriteChannels();
      setFavoritesCount(favs.length);
    };
    updateFavCount();
    const interval = setInterval(updateFavCount, 2000);
    return () => clearInterval(interval);
  }, []);

  // Monitorar rota secreta +18 (#0000 ou ?0000) e atalho de teclado 0000
  useEffect(() => {
    const checkAdultTrigger = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (
        hash.includes('0000') ||
        search.includes('0000') ||
        hash.includes('adult') ||
        search.includes('adult')
      ) {
        setIsSecretAdultOpen(true);
      }
    };

    checkAdultTrigger();
    window.addEventListener('hashchange', checkAdultTrigger);
    window.addEventListener('popstate', checkAdultTrigger);

    // Atalho secreto: digitar 0000 em sequência ativa o vault
    let buffer = '';
    let timer: number | null = null;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      buffer += e.key;
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => { buffer = ''; }, 2000);

      if (buffer.endsWith('0000')) {
        buffer = '';
        window.location.hash = '0000';
        setIsSecretAdultOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', checkAdultTrigger);
      window.removeEventListener('popstate', checkAdultTrigger);
      window.removeEventListener('keydown', handleKeyDown);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  const handleCloseAdultHub = () => {
    // Remove o fragmento 0000 da URL discretamente sem recarregar
    try {
      history.replaceState(null, '', window.location.pathname);
    } catch {
      window.location.hash = '';
    }
    setIsSecretAdultOpen(false);
  };

  const handlePlayFootballChannel = (keyword: string) => {
    setOverrideChannelKeyword(keyword);
    setActiveTab('tv');
  };

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
        {activeTab === 'tv' && (
          <SmartTvView
            onOpenFootball={() => setActiveTab('football')}
            overrideChannelKeyword={overrideChannelKeyword}
            onClearOverrideChannel={() => setOverrideChannelKeyword(null)}
          />
        )}
        {activeTab === 'football' && (
          <FootballHub onPlayChannelKeyword={handlePlayFootballChannel} />
        )}
        {(activeTab === 'movies' || activeTab === 'series') && <VodView />}
        {activeTab === 'favorites' && <FavoritesView />}
        {activeTab === 'settings' && <SettingsModal />}
      </main>

      {/* Dedicated Secret +18 Vault Hub */}
      {isSecretAdultOpen && (
        <SecretAdultHub onClose={handleCloseAdultHub} />
      )}

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 px-4 text-center text-xs text-zinc-500 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-300">kestrelTV</span>
            <span>•</span>
            <span>Smart TV & Live Sports Player</span>
          </div>
          <p className="text-[11px] text-zinc-600">
            Design de Smart TV com zapping de canal, grade ao vivo do Santos FC e transmissões HLS/MP4.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
