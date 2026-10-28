import React, { useState } from 'react';
import { Play, Radio, Trophy, ShieldCheck, Heart } from 'lucide-react';
import type { Channel } from '../../types';

interface HeroSpotlightProps {
  channels: Channel[];
  onPlayChannel: (channel: Channel) => void;
  isFavorite: (channelId: string) => boolean;
  onToggleFavorite: (channelId: string) => void;
}

export const HeroSpotlight: React.FC<HeroSpotlightProps> = ({
  channels,
  onPlayChannel,
  isFavorite,
  onToggleFavorite,
}) => {
  // Encontra canais principais de esportes e variedades para destaque
  const featuredCandidates = channels.filter((ch) => {
    const name = ch.name.toLowerCase();
    return (
      name.includes('cazé') ||
      name.includes('premiere') ||
      name.includes('sportv 1') ||
      name.includes('espn') ||
      name.includes('globo') ||
      name.includes('telecine') ||
      name.includes('hbo')
    );
  });

  const featuredList = featuredCandidates.length > 0 ? featuredCandidates.slice(0, 5) : channels.slice(0, 5);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeChannel = featuredList[selectedIndex] || channels[0];
  if (!activeChannel) return null;

  const isFav = isFavorite(activeChannel.id);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black shadow-2xl mb-8 group">
      {/* Background Ambient Glow & Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-600/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left Side: Channel Highlights */}
        <div className="flex-1 space-y-4 max-w-2xl">
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-[11px] font-bold text-red-400 uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              Ao Vivo Agora
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-800/80 border border-white/5 text-[11px] font-medium text-zinc-300">
              <Trophy className="w-3 h-3 text-amber-400" />
              {activeChannel.category}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-800/80 border border-white/5 text-[11px] font-medium text-emerald-400">
              <ShieldCheck className="w-3 h-3" />
              {activeChannel.sources.length} Servidores
            </span>
          </div>

          {/* Channel Name & Description */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight flex items-center gap-3">
              {activeChannel.name}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 line-clamp-2 max-w-xl">
              Transmissão em alta definição com múltiplos servidores redundantes e chaveamento automático de sinal. Sem anúncios invasivos.
            </p>
          </div>

          {/* Actions CTA */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => onPlayChannel(activeChannel)}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs sm:text-sm font-bold flex items-center gap-2.5 shadow-xl shadow-red-600/30 active:scale-95 transition-all group/btn"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
              </div>
              Assistir ao Vivo
            </button>

            <button
              onClick={() => onToggleFavorite(activeChannel.id)}
              className={`p-3 rounded-2xl border transition-all ${
                isFav
                  ? 'bg-red-500/10 border-red-500/40 text-red-500'
                  : 'bg-zinc-900/80 border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
              title={isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
              <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Right Side: Channel Logo & Quick Selector Chips */}
        <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
          {/* Logo Frame */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-zinc-900/80 border border-white/10 p-4 flex items-center justify-center shadow-xl backdrop-blur-xl group-hover:scale-105 transition-transform duration-300">
            {activeChannel.logo ? (
              <img
                src={activeChannel.logo}
                alt={activeChannel.name}
                className="max-w-full max-h-full object-contain filter drop-shadow-md"
              />
            ) : (
              <Radio className="w-12 h-12 text-zinc-600" />
            )}
          </div>

          {/* Featured Carousel Selector */}
          <div className="flex items-center gap-1.5 bg-zinc-950/80 border border-white/10 p-1 rounded-2xl">
            {featuredList.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => setSelectedIndex(idx)}
                className={`px-2.5 py-1 rounded-xl text-[10px] font-semibold transition-all ${
                  selectedIndex === idx
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {ch.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
