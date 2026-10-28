import React from 'react';
import { Radio, Zap, Shield, Clock, Activity } from 'lucide-react';
import type { Channel } from '../../types';

interface TvOSDBannerProps {
  channel: Channel;
  channelNumber: number;
  bandwidthKbps?: number;
  isDirect?: boolean;
  visible: boolean;
  inputNumber?: string | null;
}

export const TvOSDBanner: React.FC<TvOSDBannerProps> = ({
  channel,
  channelNumber,
  bandwidthKbps = 0,
  isDirect = false,
  visible,
  inputNumber
}) => {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-4xl z-50 transition-all duration-300 pointer-events-none select-none ${
        visible || inputNumber ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
      }`}
    >
      <div className="relative bg-zinc-950/92 backdrop-blur-2xl border-2 border-red-500/30 rounded-3xl p-4 md:p-5 shadow-[0_20px_60px_-15px_rgba(220,38,38,0.35)] overflow-hidden">
        {/* Subtle Ambient Red Glow */}
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex items-center justify-between gap-4">
          {/* Left: Channel Number & Logo */}
          <div className="flex items-center gap-4">
            {/* Big Channel Number */}
            <div className="px-3.5 py-2 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white font-black font-mono text-xl md:text-2xl tracking-tight shadow-lg shadow-red-600/40 flex items-center justify-center min-w-[70px]">
              {inputNumber ? (
                <span className="animate-pulse text-amber-300">CH {inputNumber}</span>
              ) : (
                `CH ${String(channelNumber).padStart(3, '0')}`
              )}
            </div>

            {/* Logo */}
            <div className="w-14 h-12 md:w-16 md:h-14 rounded-2xl bg-zinc-900/90 border border-white/10 p-1.5 flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
              {channel.logo ? (
                <img
                  src={channel.logo}
                  alt={channel.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow"
                  onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                />
              ) : (
                <Radio className="w-6 h-6 text-red-500" />
              )}
            </div>

            {/* Name & Category */}
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-extrabold text-[9px] uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  AO VIVO
                </span>
                <span className="text-[11px] font-semibold text-zinc-400">
                  {channel.category}
                </span>
              </div>
              <h2 className="text-base md:text-xl font-black text-white tracking-tight truncate max-w-xs md:max-w-md mt-0.5 drop-shadow">
                {channel.name}
              </h2>
            </div>
          </div>

          {/* Right: Resolution, Bandwidth & Time */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Bandwidth / Quality */}
            {bandwidthKbps > 0 && (
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-white/10 text-xs font-mono font-semibold text-emerald-400">
                <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>
                  {bandwidthKbps >= 1000
                    ? `${(bandwidthKbps / 1000).toFixed(1)} Mb/s`
                    : `${bandwidthKbps} kb/s`}
                </span>
              </div>
            )}

            {/* Zero Quota Badge */}
            {isDirect ? (
              <div className="hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <Zap className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                <span>Zero Cota</span>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-medium">
                <Shield className="w-3 h-3 text-red-400" />
                <span>Proxy</span>
              </div>
            )}

            {/* Clock */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 text-zinc-200 text-xs font-mono font-bold">
              <Clock className="w-3.5 h-3.5 text-red-400" />
              <span>{timeStr}</span>
            </div>
          </div>
        </div>

        {/* TV Progress Accent Bar */}
        <div className="mt-3 w-full bg-zinc-800/80 h-1 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 h-full w-[65%] rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};
