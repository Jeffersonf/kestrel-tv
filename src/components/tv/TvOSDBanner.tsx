import React, { useState, useEffect } from 'react';
import { Tv } from 'lucide-react';
import type { Channel, ChannelEpgStatus } from '../../types';

interface TvOSDBannerProps {
  channel: Channel | null;
  channelNumber: number;
  epg?: ChannelEpgStatus;
  visible: boolean;
  inputNumber?: string | null;
}

function formatEpochTime(sec: number): string {
  return new Date(sec * 1000).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

function getCurrentTimeLabel(): string {
  return new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export const TvOSDBanner: React.FC<TvOSDBannerProps> = ({
  channel,
  channelNumber,
  epg,
  visible,
  inputNumber,
}) => {
  const [nowStr, setNowStr] = useState(getCurrentTimeLabel);

  useEffect(() => {
    const id = window.setInterval(() => {
      setNowStr(getCurrentTimeLabel());
    }, 15_000);
    return () => window.clearInterval(id);
  }, []);

  if (!channel && !inputNumber) return null;

  const isShown = visible || Boolean(inputNumber);

  return (
    <div
      className={`fixed bottom-20 lg:bottom-7 left-1/2 -translate-x-1/2 w-[94%] max-w-2xl z-50 pointer-events-none select-none transition-all duration-200 ${
        isShown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
    >
      <div className="bg-zinc-950/95 backdrop-blur-md border border-white/[0.08] rounded-2xl p-3.5 sm:p-4 shadow-2xl">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Número do canal */}
            <div className="px-3 py-1.5 rounded-xl bg-red-600 text-white font-mono font-bold text-base sm:text-lg tabular-nums shrink-0">
              {inputNumber ? `${inputNumber}_` : String(channelNumber).padStart(3, '0')}
            </div>

            {/* Logo discreto */}
            {channel && (
              <div className="w-11 h-9 rounded-lg bg-zinc-900 border border-white/[0.08] p-1 flex items-center justify-center shrink-0 overflow-hidden">
                {channel.logo ? (
                  <img
                    src={channel.logo}
                    alt={channel.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <Tv className="w-4 h-4 text-zinc-500" />
                )}
              </div>
            )}

            {/* Nome + programa atual */}
            {channel && (
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    AO VIVO
                  </span>
                  <span className="text-[11px] text-zinc-400 truncate">{channel.category}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold tracking-tight text-white truncate">
                  {channel.name}
                </h3>
                {epg?.current && (
                  <p className="text-xs text-zinc-400 truncate">
                    <span className="font-mono text-[11px] text-zinc-300 tabular-nums mr-1.5">
                      {formatEpochTime(epg.current.start)}–{formatEpochTime(epg.current.end)}
                    </span>
                    {epg.current.title}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Horário atual */}
          <div className="text-xs font-mono font-semibold text-zinc-300 tabular-nums px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/[0.08] shrink-0">
            {nowStr}
          </div>
        </div>

        {/* Barra de progresso do programa atual */}
        {epg?.current && (
          <div className="mt-2.5 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-600 transition-all duration-300"
              style={{ width: `${epg.progressPercent}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
