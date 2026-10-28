import React from 'react';
import { Play, Plus, Check, Radio, Sparkles } from 'lucide-react';
import type { Channel } from '../../types';

interface HeroBannerProps {
  featuredChannel: Channel;
  isFavorite: boolean;
  onPlay: (channel: Channel) => void;
  onToggleFavorite: (channelId: string) => void;
  onExploreGuide: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  featuredChannel,
  isFavorite,
  onPlay,
  onToggleFavorite,
  onExploreGuide,
}) => {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#0c101c] border border-white/10 shadow-2xl min-h-[340px] md:min-h-[420px] flex flex-col justify-end p-6 md:p-12 mb-8 group select-none">
      {/* Background Graphic & Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070a13] via-[#070a13]/85 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-transparent to-transparent z-10" />
      
      {/* Animated subtle ambient glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/25 transition-all duration-700" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Background Decorative Pattern / Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 group-hover:scale-100 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-2xl flex flex-col gap-3.5">
        {/* Badges */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-red-600/30">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Ao Vivo no kestrel+
          </span>

          <span className="px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/30 text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-sky-400" />
            {featuredChannel.category}
          </span>

          <span className="px-2 py-0.5 rounded bg-white/10 text-zinc-300 text-[10px] font-semibold tracking-wider">
            1080p FHD
          </span>
        </div>

        {/* Channel Emblem & Title */}
        <div className="flex items-center gap-4 mt-1">
          {featuredChannel.logo && (
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-2 flex items-center justify-center shadow-xl">
              <img
                src={featuredChannel.logo}
                alt={featuredChannel.name}
                className="max-h-full max-w-full object-contain filter drop-shadow"
              />
            </div>
          )}

          <div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
              {featuredChannel.name}
            </h1>
            <p className="text-xs md:text-sm text-zinc-300 font-medium flex items-center gap-2 mt-0.5">
              <span>Transmissão Oficial</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Radio className="w-3.5 h-3.5" /> Sinal Estável
              </span>
            </p>
          </div>
        </div>

        {/* Tagline / Description */}
        <p className="text-xs md:text-sm text-zinc-300/90 leading-relaxed max-w-xl font-normal drop-shadow">
          Acompanhe toda a programação ao vivo com qualidade máxima, alta taxa de quadros e múltiplos servidores redundantes de transmissão contínua.
        </p>

        {/* Action Buttons (Sky+ Style) */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={() => onPlay(featuredChannel)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold text-xs md:text-sm flex items-center gap-2.5 shadow-xl shadow-red-600/30 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <Play className="w-4 h-4 fill-white" />
            Assistir Agora
          </button>

          <button
            onClick={() => onToggleFavorite(featuredChannel.id)}
            className={`px-4 py-3 rounded-xl text-xs md:text-sm font-semibold flex items-center gap-2 backdrop-blur-md border transition-all active:scale-95 ${
              isFavorite
                ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                : 'bg-white/10 hover:bg-white/15 text-white border-white/10'
            }`}
          >
            {isFavorite ? <Check className="w-4 h-4 text-sky-400" /> : <Plus className="w-4 h-4" />}
            {isFavorite ? 'Na Minha Lista' : 'Minha Lista'}
          </button>

          <button
            onClick={onExploreGuide}
            className="hidden sm:flex px-4 py-3 rounded-xl bg-transparent hover:bg-white/5 text-zinc-300 hover:text-white font-medium text-xs md:text-sm items-center gap-2 transition-colors"
          >
            Guia de Canais ↓
          </button>
        </div>
      </div>
    </div>
  );
};
