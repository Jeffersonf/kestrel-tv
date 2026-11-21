import React, { useState } from 'react';
import {
  Settings,
  Globe,
  Shield,
  Zap,
  RefreshCw,
  Check,
  Download,
  CheckCircle2,
  CalendarClock,
} from 'lucide-react';
import { usePwaInstall } from '../../hooks/usePwaInstall';
import { storageService, DEFAULT_SETTINGS } from '../../services/storageService';
import type { AppSettings } from '../../types';

interface SettingsModalProps {
  onReloadCatalog: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ onReloadCatalog }) => {
  const [settings, setSettings] = useState<AppSettings>(() => storageService.getSettings());
  const [saved, setSaved] = useState(false);
  const { isInstalled, isInstallable, promptInstall } = usePwaInstall();

  const handleSave = () => {
    storageService.saveSettings(settings);
    onReloadCatalog();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleReset = () => {
    const clean = { ...DEFAULT_SETTINGS };
    setSettings(clean);
    storageService.saveSettings(clean);
    onReloadCatalog();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-zinc-900/70 border border-white/[0.08] rounded-2xl p-5 sm:p-6 space-y-5">
        <div>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Settings className="w-5 h-5 text-red-500" />
            Ajustes
          </h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            Configure a origem dos canais, guia EPG, proxy opcional e instalação PWA.
          </p>
        </div>

        {/* Lista de Canais */}
        <div className="p-4 rounded-2xl bg-zinc-950 border border-white/[0.08] space-y-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-red-500" />
              <span className="text-xs font-semibold text-white">Lista de Canais (.txt ou .m3u/.m3u8)</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setSettings({
                    ...settings,
                    channelCatalogUrl: DEFAULT_SETTINGS.channelCatalogUrl,
                  })
                }
                className="text-[11px] font-medium text-red-400 hover:text-red-300"
              >
                Usar Saimo Ao Vivo
              </button>
              <span className="text-zinc-700">·</span>
              <button
                type="button"
                onClick={() =>
                  setSettings({
                    ...settings,
                    channelCatalogUrl: './data/catalogo.txt',
                  })
                }
                className="text-[11px] font-medium text-zinc-400 hover:text-zinc-200"
              >
                Usar Cópia Local
              </button>
            </div>
          </div>

          <input
            type="text"
            value={settings.channelCatalogUrl}
            onChange={(e) => setSettings({ ...settings, channelCatalogUrl: e.target.value })}
            placeholder="https://canais-saimo.pages.dev/catalogo.txt"
            className="w-full h-10 px-3 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-200 font-mono focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
        </div>

        {/* Guia EPG */}
        <div className="p-4 rounded-2xl bg-zinc-950 border border-white/[0.08] space-y-2.5">
          <div className="flex items-center gap-2">
            <CalendarClock className="w-4 h-4 text-red-500" />
            <span className="text-xs font-semibold text-white">Guia de Programação (EPG JSON)</span>
          </div>
          <input
            type="text"
            value={settings.epgUrl}
            onChange={(e) => setSettings({ ...settings, epgUrl: e.target.value })}
            placeholder="https://canais-saimo.pages.dev/epg.json"
            className="w-full h-10 px-3 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-200 font-mono focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
        </div>

        {/* Modo Direto + Proxy Opcional */}
        <div className="p-4 rounded-2xl bg-zinc-950 border border-white/[0.08] space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <Zap className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <h2 className="text-xs font-semibold text-white">Conexão Direta (Sem Proxy)</h2>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  Prioriza reprodução direta nos streams compatíveis sem intermediário.
                </p>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={settings.zeroProxyMode}
                onChange={(e) => setSettings({ ...settings, zeroProxyMode: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-10 h-6 bg-zinc-800 rounded-full peer peer-checked:bg-red-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-4" />
            </label>
          </div>

          <div className="pt-3 border-t border-white/[0.08] space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                <div>
                  <h2 className="text-xs font-semibold text-white">Proxy CORS Personalizado (Opcional)</h2>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Ative apenas se você hospedar um proxy próprio para streams HTTP/CORS.
                  </p>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  checked={settings.useProxy}
                  onChange={(e) => setSettings({ ...settings, useProxy: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-10 h-6 bg-zinc-800 rounded-full peer peer-checked:bg-red-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-4" />
              </label>
            </div>

            {settings.useProxy && (
              <input
                type="text"
                value={settings.proxyUrl}
                onChange={(e) => setSettings({ ...settings, proxyUrl: e.target.value })}
                placeholder="https://seu-worker.workers.dev/?url="
                className="w-full h-10 px-3 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-200 font-mono focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            )}
          </div>
        </div>

        {/* PWA Status */}
        <div className="p-4 rounded-2xl bg-zinc-950 border border-white/[0.08] flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2.5">
            {isInstalled ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <Globe className="w-4 h-4 text-zinc-400 shrink-0" />
            )}
            <div>
              <p className="text-xs font-semibold text-white">
                {isInstalled ? 'Aplicativo instalado (Modo PWA)' : 'Executando no navegador'}
              </p>
              <p className="text-[11px] text-zinc-400">
                No celular, você pode adicionar à tela inicial para abrir em tela cheia.
              </p>
            </div>
          </div>

          {!isInstalled && isInstallable && (
            <button
              type="button"
              onClick={promptInstall}
              className="h-9 px-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-red-500" />
              Instalar PWA
            </button>
          )}
        </div>

        {/* Botões finais */}
        <div className="pt-2 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="h-10 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-2 transition-all active:scale-95"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Restaurar Padrões
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="h-10 px-5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold flex items-center gap-2 shadow-sm shadow-red-600/20 transition-all active:scale-95"
          >
            {saved && <Check className="w-4 h-4" />}
            {saved ? 'Salvo e Atualizado' : 'Salvar Alterações'}
          </button>
        </div>
      </div>
    </div>
  );
};
