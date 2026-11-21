import { useState, useEffect, useCallback } from 'react';
import { NavigationShell, type NavTab } from './components/layout/NavigationShell';
import { LiveTvView } from './components/tv/LiveTvView';
import { FavoritesView } from './components/layout/FavoritesView';
import { SettingsModal } from './components/layout/SettingsModal';
import { catalogService } from './services/catalogService';
import { epgService } from './services/epgService';
import { storageService } from './services/storageService';
import type { Channel } from './types';

export function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('tv');
  const [channels, setChannels] = useState<Channel[]>(() => catalogService.getFallbackChannels());
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(() => {
    const initial = catalogService.getFallbackChannels();
    const lastId = storageService.getLastChannelId();
    return initial.find((c) => c.id === lastId) || initial[0] || null;
  });
  const [favorites, setFavorites] = useState<string[]>(() => storageService.getFavoriteChannels());
  const [epgVersion, setEpgVersion] = useState(0);

  const loadCatalogAndEpg = useCallback((forceRefresh = false) => {
    if (forceRefresh) catalogService.invalidateCache();

    catalogService.fetchChannels(forceRefresh).then((data) => {
      if (data.length > 0) {
        setChannels(data);
        setSelectedChannel((prev) => {
          const targetId = prev?.id || storageService.getLastChannelId();
          const byId = targetId ? data.find((c) => c.id === targetId) : undefined;
          if (byId) return byId;
          const byName = prev
            ? data.find((c) => c.name.toLowerCase() === prev.name.toLowerCase())
            : undefined;
          return byName || data[0];
        });
      }
    });

    epgService.loadEpg(forceRefresh).then(() => {
      setEpgVersion((v) => v + 1);
    });
  }, []);

  useEffect(() => {
    loadCatalogAndEpg(false);

    // Atualiza barra de progresso do EPG a cada minuto
    const epgTick = window.setInterval(() => {
      setEpgVersion((v) => v + 1);
    }, 60_000);

    return () => window.clearInterval(epgTick);
  }, [loadCatalogAndEpg]);

  const handleSelectChannel = useCallback((ch: Channel) => {
    setSelectedChannel(ch);
    storageService.setLastChannelId(ch.id);
  }, []);

  const handleToggleFavorite = useCallback((channelId: string) => {
    storageService.toggleFavoriteChannel(channelId);
    setFavorites(storageService.getFavoriteChannels());
  }, []);

  const handleTuneFromFavorites = useCallback(
    (ch: Channel) => {
      handleSelectChannel(ch);
      setActiveTab('tv');
    },
    [handleSelectChannel]
  );

  return (
    <NavigationShell
      activeTab={activeTab}
      onTabChange={setActiveTab}
      favoritesCount={favorites.length}
      channelsCount={channels.length}
    >
      {activeTab === 'tv' && (
        <LiveTvView
          channels={channels}
          selectedChannel={selectedChannel}
          onSelectChannel={handleSelectChannel}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          epgVersion={epgVersion}
        />
      )}

      {activeTab === 'favorites' && (
        <FavoritesView
          channels={channels}
          favorites={favorites}
          selectedChannelId={selectedChannel?.id}
          epgVersion={epgVersion}
          onTuneChannel={handleTuneFromFavorites}
          onToggleFavorite={handleToggleFavorite}
          onGoToLive={() => setActiveTab('tv')}
        />
      )}

      {activeTab === 'settings' && (
        <SettingsModal onReloadCatalog={() => loadCatalogAndEpg(true)} />
      )}
    </NavigationShell>
  );
}

export default App;
