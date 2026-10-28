import React, { useState } from 'react';
import { Settings, Shield, RefreshCw, Check, Globe, Zap, Download, Smartphone } from 'lucide-react';
import { usePwaInstall } from '../../hooks/usePwaInstall';
import { storageService, DEFAULT_SETTINGS } from '../../services/storageService';
import type { AppSettings } from '../../types';

export const SettingsModal: React.FC = () => {
  const [settings, setSettings] = useState<AppSettings>(() => storageService.getSettings());
  const [savedSuccess, setSavedSuccess] = useState(false);
  const { isInstalled, promptInstall } = usePwaInstall();

  const handleSave = () => {
    storageService.saveSettings(settings);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleReset = () => {
    setSettings(DEFAULT_SETTINGS);
    storageService.saveSettings(DEFAULT_SETTINGS);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-6 py-8 animate-in fade-in duration-200">
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
        <div>
          <h2 className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center gap-2.5">
            <Settings className="w-5 h-5 text-red-500" />
            Ajustes e Configurações
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Personalize as fontes de catálogo independentes, economia de cota e parâmetros de streaming.
          </p>
        </div>

        {/* Proxy Section */}
        <div className="p-4.5 rounded-2xl bg-zinc-950 border border-white/5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-red-400" />
              <div>
                <h4 className="text-xs font-semibold text-white">Proxy CORS & Streaming Seguro</h4>
                <p className="text-[11px] text-zinc-400">
                  Permite carregar canais e vídeos HTTP em conexões HTTPS (GitHub Pages) sem bloqueios do navegador.
                </p>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.useProxy}
                onChange={(e) => setSettings({ ...settings, useProxy: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
            </label>
          </div>

          {settings.useProxy && (
            <div className="pt-2 border-t border-white/5">
              <label className="text-[11px] font-semibold text-zinc-400 block mb-1">
                Servidor Proxy de Streaming:
              </label>
              <input
                type="text"
                value={settings.proxyUrl}
                onChange={(e) => setSettings({ ...settings, proxyUrl: e.target.value })}
                placeholder="https://saimo-tv.pages.dev/api/proxy?url="
                className="w-full px-3 py-2 bg-zinc-900 border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-red-500 font-mono"
              />
            </div>
          )}
        </div>

                {/* Zero Proxy Mode & PWA Card */}
        <div className="p-4.5 rounded-2xl bg-zinc-950 border border-emerald-500/20 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Zap className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-white">Modo Zero Cota Cloudflare</h4>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-extrabold uppercase">
                    Zero Custo
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  Prioriza conexões diretas nos canais para consumir 0 requisições do seu limite diário do Cloudflare Workers.
                </p>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={!!settings.zeroProxyMode}
                onChange={(e) => setSettings({ ...settings, zeroProxyMode: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 space-y-2 text-[11px] text-zinc-300">
            <div className="flex items-start gap-2">
              <Smartphone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Dica de Ouro para Gastar Zero:</span>
                <p className="text-zinc-400 mt-0.5">
                  Ao instalar o kestrelTV como <strong>PWA no celular</strong> ou gerar o APK <strong>Android com Capacitor</strong>, seu dispositivo toca canais HTTP diretamente sem a barreira de Mixed Content. Consumo de proxy = <strong>0%</strong>!
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[10px] text-zinc-500">
                Status do App: {isInstalled ? '✅ Instalado (Modo Standalone Ativo)' : '🌐 Modo Navegador'}
              </span>
              {!isInstalled && (
                <button
                  type="button"
                  onClick={promptInstall}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <Download className="w-3.5 h-3.5" /> Instalar Aplicativo
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Catalogs Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <Globe className="w-4 h-4 text-red-400" />
            Fontes de Catálogo
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-medium text-zinc-300">
                Catálogo de Canais (catalogo.txt):
              </label>
              <button
                type="button"
                onClick={() => setSettings({ ...settings, channelCatalogUrl: './data/catalogo.txt' })}
                className="text-[10px] text-red-400 hover:text-red-300 underline"
              >
                Usar Cópia Local Independente
              </button>
            </div>
            <input
              type="text"
              value={settings.channelCatalogUrl}
              onChange={(e) => setSettings({ ...settings, channelCatalogUrl: e.target.value })}
              className="w-full px-3.5 py-2 bg-zinc-950 border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-red-500 font-mono"
            />
            <p className="text-[10px] text-zinc-500 mt-1">
              Dica: Use <code>./data/catalogo.txt</code> para independência total ou uma URL externa personalizada.
            </p>
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-300 block mb-1">
              Servidor de Catálogo VOD (Filmes & Séries):
            </label>
            <input
              type="text"
              value={settings.vodCatalogUrl}
              onChange={(e) => setSettings({ ...settings, vodCatalogUrl: e.target.value })}
              className="w-full px-3.5 py-2 bg-zinc-950 border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-red-500 font-mono"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium flex items-center gap-2 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Restaurar Padrões
          </button>

          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-red-600/25 transition-all active:scale-95"
          >
            {savedSuccess ? <Check className="w-4 h-4" /> : null}
            {savedSuccess ? 'Salvo com Sucesso!' : 'Salvar Alterações'}
          </button>
        </div>
      </div>
    </div>
  );
};
