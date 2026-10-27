import React, { useState } from 'react';
import { Settings, Shield, RefreshCw, Check, Globe } from 'lucide-react';
import { storageService, DEFAULT_SETTINGS } from '../../services/storageService';
import type { AppSettings } from '../../types';

export const SettingsModal: React.FC = () => {
  const [settings, setSettings] = useState<AppSettings>(() => storageService.getSettings());
  const [savedSuccess, setSavedSuccess] = useState(false);

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
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
            <Settings className="w-5 h-5 text-red-500" />
            Ajustes e Configurações
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Personalize as fontes de catálogo, controle de proxy CORS e parâmetros da aplicação.
          </p>
        </div>

        {/* Proxy Section */}
        <div className="p-4 rounded-2xl bg-zinc-950 border border-white/5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-red-400" />
              <div>
                <h4 className="text-xs font-semibold text-white">Proxy CORS Automático</h4>
                <p className="text-[11px] text-zinc-400">
                  Redireciona streams HTTP bloqueados por Mixed Content quando executado em HTTPS (ex: GitHub Pages).
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
                URL do Proxy (prefixo antes do link do stream):
              </label>
              <input
                type="text"
                value={settings.proxyUrl}
                onChange={(e) => setSettings({ ...settings, proxyUrl: e.target.value })}
                placeholder="https://api.allorigins.win/raw?url="
                className="w-full px-3 py-2 bg-zinc-900 border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-red-500"
              />
            </div>
          )}
        </div>

        {/* Catalogs Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <Globe className="w-4 h-4 text-red-400" />
            Fontes de Catálogo
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-300 block mb-1">
              Catálogo de Canais (catalogo.txt):
            </label>
            <input
              type="text"
              value={settings.channelCatalogUrl}
              onChange={(e) => setSettings({ ...settings, channelCatalogUrl: e.target.value })}
              className="w-full px-3.5 py-2 bg-zinc-950 border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-300 block mb-1">
              Servidor de Catálogo VOD (Filmes & Séries):
            </label>
            <input
              type="text"
              value={settings.vodCatalogUrl}
              onChange={(e) => setSettings({ ...settings, vodCatalogUrl: e.target.value })}
              className="w-full px-3.5 py-2 bg-zinc-950 border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-red-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium flex items-center gap-2 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Restaurar Padrões
          </button>

          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-red-600/25 transition-all active:scale-95"
          >
            {savedSuccess ? <Check className="w-4 h-4" /> : null}
            {savedSuccess ? 'Salvo com Sucesso!' : 'Salvar Alterações'}
          </button>
        </div>
      </div>
    </div>
  );
};
