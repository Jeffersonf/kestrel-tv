import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Radio, Trophy, Film, Globe, Compass, Sparkles, Music, Tv } from 'lucide-react';
import type { Channel } from '../../types';

interface TvChannelRailsProps {
  channels: Channel[];
  currentChannel: Channel | null;
  onSelectChannel: (channel: Channel) => void;
}

interface RailSection {
  title: string;
  icon: any;
  category: string;
  filterFn?: (c: Channel) => boolean;
}

const SECTIONS: RailSection[] = [
  { title: 'Jogos & Esportes ao Vivo', icon: Trophy, category: 'Jogos & Esportes' },
  { title: 'TV Aberta Nacional', icon: Tv, category: 'TV Aberta' },
  { title: 'Filmes & Séries', icon: Film, category: 'Filmes e Séries' },
  { title: 'Infantil & Desenhos', icon: Sparkles, category: 'Infantil' },
  { title: 'Notícias & Jornalismo', icon: Globe, category: 'Notícias' },
  { title: 'Músicas & Shows 24h', icon: Music, category: 'Músicas' },
  { title: 'Variedades & Pluto TV', icon: Compass, category: 'Variedades' }
];

export const TvChannelRails: React.FC<TvChannelRailsProps> = ({
  channels,
  currentChannel,
  onSelectChannel,
}) => {
  return (
    <div className="space-y-8 pb-12 select-none">
      {SECTIONS.map((sec) => {
        const railChannels = channels.filter((c) => {
          if (c.category === 'Adulto (+18)') return false;
          if (sec.filterFn) return sec.filterFn(c);
          return c.category === sec.category;
        });

        if (railChannels.length === 0) return null;

        return (
          <SingleRail
            key={sec.title}
            section={sec}
            channels={railChannels}
            currentChannel={currentChannel}
            onSelectChannel={onSelectChannel}
          />
        );
      })}
    </div>
  );
};

const SingleRail: React.FC<{
  section: RailSection;
  channels: Channel[];
  currentChannel: Channel | null;
  onSelectChannel: (channel: Channel) => void;
}> = ({ section, channels, currentChannel, onSelectChannel }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const Icon = section.icon;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -480 : 480;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-3 group/rail">
      {/* Rail Title Header */}
      <div className="flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center">
            <Icon className="w-3.5 h-3.5" />
          </div>
          <h3 className="text-base md:text-lg font-black text-white tracking-tight flex items-center gap-2">
            {section.title}
            <span className="text-xs font-mono font-medium text-zinc-500">
              ({channels.length})
            </span>
          </h3>
        </div>

        {/* Scroll Arrows */}
        <div className="hidden sm:flex items-center gap-1.5 opacity-0 group-hover/rail:opacity-100 transition-opacity">
          <button
            onClick={() => scroll('left')}
            className="p-1.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-1.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Rail Row */}
      <div
        ref={scrollRef}
        className="flex items-center gap-4 overflow-x-auto px-4 md:px-6 py-2 scrollbar-none scroll-smooth"
      >
        {channels.map((ch, idx) => {
          const isPlaying = currentChannel?.id === ch.id;
          const chNum = ch.number || idx + 1;

          return (
            <div
              key={ch.id}
              onClick={() => onSelectChannel(ch)}
              className={`relative flex-shrink-0 w-48 sm:w-56 aspect-[16/10] rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden p-3.5 flex flex-col justify-between group/card ${
                isPlaying
                  ? 'bg-gradient-to-br from-red-950/60 to-black border-red-500 scale-105 shadow-[0_10px_30px_rgba(220,38,38,0.4)] ring-2 ring-red-500/50'
                  : 'bg-zinc-900/80 border-white/10 hover:border-red-500/60 hover:scale-105 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8)] hover:bg-zinc-850'
              }`}
            >
              {/* Background Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Top: Channel Number & Live Badge */}
              <div className="relative z-10 flex items-center justify-between text-[11px]">
                <span className="px-2 py-0.5 rounded-lg bg-black/70 backdrop-blur-md text-zinc-300 font-mono font-bold border border-white/10">
                  CH {String(chNum).padStart(3, '0')}
                </span>

                {isPlaying ? (
                  <span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-extrabold text-[9px] uppercase flex items-center gap-1 shadow animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    NO AR
                  </span>
                ) : (
                  <span className="text-[10px] text-zinc-400 group-hover/card:text-red-400 transition-colors font-semibold">
                    {ch.sources.length} fonte{ch.sources.length > 1 ? 's' : ''}
                  </span>
                )}
              </div>

              {/* Center: Logo */}
              <div className="relative z-10 h-14 flex items-center justify-center p-1">
                {ch.logo ? (
                  <img
                    src={ch.logo}
                    alt={ch.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow group-hover/card:scale-110 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                  />
                ) : (
                  <Radio className="w-8 h-8 text-zinc-600 group-hover/card:text-red-500 transition-colors" />
                )}
              </div>

              {/* Bottom: Channel Title */}
              <div className="relative z-10">
                <span className="text-xs font-bold text-white block truncate group-hover/card:text-red-300 transition-colors">
                  {ch.name}
                </span>
                <span className="text-[10px] text-zinc-400 truncate block">
                  {ch.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
