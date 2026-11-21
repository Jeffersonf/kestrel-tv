import React from 'react';
import { Tv, Heart, Settings, Download, Radio } from 'lucide-react';
import { usePwaInstall } from '../../hooks/usePwaInstall';

export type NavTab = 'tv' | 'favorites' | 'settings';

interface NavigationShellProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  favoritesCount: number;
  channelsCount: number;
  children: React.ReactNode;
}

export const NavigationShell: React.FC<NavigationShellProps> = ({
  activeTab,
  onTabChange,
  favoritesCount,
  channelsCount,
  children,
}) => {
  const { isInstalled, isInstallable, promptInstall } = usePwaInstall();

  const navItems: { id: NavTab; label: string; icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; badge?: number }[] = [
    { id: 'tv', label: 'Ao Vivo', icon: Tv },
    { id: 'favorites', label: 'Favoritos', icon: Heart, badge: favoritesCount > 0 ? favoritesCount : undefined },
    { id: 'settings', label: 'Ajustes', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col">
      {/* Header compacto para TV / Desktop / Mobile */}
      <header className="sticky top-0 z-40 h-12 lg:h-14 w-full bg-[#09090b]/95 backdrop-blur-md border-b border-white/[0.08]">
        <div className="h-full max-w-[1600px] mx-auto px-3 sm:px-5 flex items-center justify-between gap-3">
          {/* Marca limpa sem ruído visual */}
          <button
            type="button"
            onClick={() => onTabChange('tv')}
            className="flex items-center gap-2.5 rounded-xl px-1.5 py-1 hover:bg-white/5 transition-colors active:scale-95"
          >
            <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-sm shadow-red-600/20">
              <Radio className="w-4 h-4" strokeWidth={2} />
            </div>
            <span className="text-base font-bold tracking-tight text-white">
              kestrel<span className="text-red-500">TV</span>
            </span>
          </button>

          {/* Navegação Desktop / TV */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/90 border border-white/[0.08] p-1 rounded-xl" aria-label="Navegação principal">
            {navItems.map(({ id, label, icon: Icon, badge }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onTabChange(id)}
                  className={`h-9 px-3.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all active:scale-95 ${
                    active
                      ? 'bg-red-600 text-white shadow-sm shadow-red-600/20'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80'
                  }`}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.85} />
                  <span>{label}</span>
                  {badge !== undefined && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                        active ? 'bg-black/25 text-white' : 'bg-zinc-800 text-zinc-300'
                      }`}
                    >
                      {badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Ações direitas (indicador discreto + instalar PWA se disponível) */}
          <div className="flex items-center gap-2">
            {!isInstalled && isInstallable && (
              <button
                type="button"
                onClick={promptInstall}
                className="h-9 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95"
              >
                <Download className="w-3.5 h-3.5 text-red-500" strokeWidth={2} />
                <span className="hidden sm:inline">Instalar App</span>
              </button>
            )}

            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-zinc-900/80 border border-white/[0.08]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-medium text-zinc-300 tabular-nums">
                {channelsCount} canais
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col pb-20 lg:pb-0">
        {children}
      </main>

      {/* Barra inferior mobile (Design System: backdrop-blur-md, ícones Lucide + rótulos 10px) */}
      <nav
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#09090b]/95 backdrop-blur-md border-t border-white/[0.08] pb-safe"
        aria-label="Navegação mobile"
      >
        <div className="grid grid-cols-3 h-16 px-2">
          {navItems.map(({ id, label, icon: Icon, badge }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onTabChange(id)}
                className={`relative flex flex-col items-center justify-center gap-1 rounded-xl my-1 transition-colors active:scale-95 ${
                  active ? 'text-red-500' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <div className="relative">
                  <Icon className="w-5 h-5" strokeWidth={active ? 2 : 1.75} />
                  {badge !== undefined && (
                    <span className="absolute -top-1.5 -right-2.5 min-w-[16px] h-4 px-1 rounded-full bg-red-600 text-white text-[9px] font-bold flex items-center justify-center tabular-nums">
                      {badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-medium tracking-tight">{label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
