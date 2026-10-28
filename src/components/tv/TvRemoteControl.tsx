import React, { useState } from 'react';
import { 
  Tv, VolumeX, ChevronUp, ChevronDown, 
  ChevronLeft, ChevronRight, Info, List, 
  Trophy, Maximize, X, Minimize2
} from 'lucide-react';

interface TvRemoteControlProps {
  onChannelUp: () => void;
  onChannelDown: () => void;
  onVolumeUp: () => void;
  onVolumeDown: () => void;
  onToggleMute: () => void;
  onNumberClick: (num: string) => void;
  onToggleGuide: () => void;
  onToggleInfo: () => void;
  onToggleFullscreen: () => void;
  onOpenFootball: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const TvRemoteControl: React.FC<TvRemoteControlProps> = ({
  onChannelUp,
  onChannelDown,
  onVolumeUp,
  onVolumeDown,
  onToggleMute,
  onNumberClick,
  onToggleGuide,
  onToggleInfo,
  onToggleFullscreen,
  onOpenFootball,
  isOpen,
  onClose,
}) => {
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-8 duration-300">
      {/* Minimized Pill */}
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="px-4 py-2.5 rounded-2xl bg-zinc-900/90 border border-red-500/40 text-white shadow-2xl flex items-center gap-2 text-xs font-bold hover:scale-105 transition-all backdrop-blur-xl"
        >
          <Tv className="w-4 h-4 text-red-500" />
          <span>Controle Remoto</span>
        </button>
      ) : (
        /* Full Remote Control Chassis */
        <div className="relative w-64 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border-2 border-white/10 rounded-[38px] p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl text-white select-none space-y-4">
          {/* Subtle Remote Texture Lines */}
          <div className="absolute inset-0 rounded-[36px] bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          {/* Top Row: Brand & Minimize/Close */}
          <div className="flex items-center justify-between pb-1 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase">
                kestrel<span className="text-red-500">TV</span>
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1 rounded-lg text-zinc-500 hover:text-white transition-colors"
                title="Minimizar"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-zinc-500 hover:text-red-400 transition-colors"
                title="Fechar Controle"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Power & Shortcuts Row */}
          <div className="flex items-center justify-between px-2">
            <button
              onClick={onToggleFullscreen}
              className="p-2.5 rounded-2xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all active:scale-95 shadow"
              title="Tela Cheia"
            >
              <Maximize className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenFootball}
              className="px-3 py-1.5 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-[10px] font-bold flex items-center gap-1 transition-all active:scale-95 shadow"
              title="Grade de Futebol & Santos"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Santos FC</span>
            </button>

            <button
              onClick={onToggleMute}
              className="p-2.5 rounded-2xl bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/40 transition-all active:scale-95 shadow"
              title="Mudo"
            >
              <VolumeX className="w-4 h-4" />
            </button>
          </div>

          {/* D-PAD DIRECTIONAL WHEEL */}
          <div className="relative w-44 h-44 mx-auto rounded-full bg-zinc-900 border border-white/10 p-2 shadow-2xl flex items-center justify-center">
            {/* UP: CH+ */}
            <button
              onClick={onChannelUp}
              className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-10 rounded-t-full bg-zinc-800 hover:bg-red-600 text-zinc-300 hover:text-white flex flex-col items-center justify-center transition-all active:scale-90"
              title="Próximo Canal (CH+)"
            >
              <ChevronUp className="w-4 h-4" />
              <span className="text-[8px] font-bold">CH+</span>
            </button>

            {/* DOWN: CH- */}
            <button
              onClick={onChannelDown}
              className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-14 h-10 rounded-b-full bg-zinc-800 hover:bg-red-600 text-zinc-300 hover:text-white flex flex-col items-center justify-center transition-all active:scale-90"
              title="Canal Anterior (CH-)"
            >
              <span className="text-[8px] font-bold">CH-</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* LEFT: VOL- */}
            <button
              onClick={onVolumeDown}
              className="absolute left-1.5 top-1/2 -translate-y-1/2 w-10 h-14 rounded-l-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex flex-col items-center justify-center transition-all active:scale-90"
              title="Diminuir Volume (VOL-)"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[8px] font-bold">VOL-</span>
            </button>

            {/* RIGHT: VOL+ */}
            <button
              onClick={onVolumeUp}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-14 rounded-r-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex flex-col items-center justify-center transition-all active:scale-90"
              title="Aumentar Volume (VOL+)"
            >
              <ChevronRight className="w-4 h-4" />
              <span className="text-[8px] font-bold">VOL+</span>
            </button>

            {/* CENTER OK BUTTON */}
            <button
              onClick={onToggleInfo}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-black text-xs shadow-lg shadow-red-600/40 flex items-center justify-center transition-all active:scale-90"
              title="OK / Info"
            >
              OK
            </button>
          </div>

          {/* Quick Access Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={onToggleGuide}
              className="py-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-red-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-zinc-800 transition-all active:scale-95"
            >
              <List className="w-3.5 h-3.5 text-red-500" />
              <span>GUIA</span>
            </button>

            <button
              onClick={onToggleInfo}
              className="py-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-red-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-zinc-800 transition-all active:scale-95"
            >
              <Info className="w-3.5 h-3.5 text-zinc-400" />
              <span>INFO</span>
            </button>
          </div>

          {/* NUMERIC KEYPAD (0 - 9) */}
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'GUIA', '0', 'DEL'].map((k) => {
              if (k === 'GUIA') {
                return (
                  <button
                    key={k}
                    onClick={onToggleGuide}
                    className="py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-[10px] font-bold text-zinc-400 transition-all active:scale-95"
                  >
                    EPG
                  </button>
                );
              }
              if (k === 'DEL') {
                return (
                  <button
                    key={k}
                    onClick={() => onNumberClick('DEL')}
                    className="py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-[10px] font-bold text-zinc-400 transition-all active:scale-95"
                  >
                    ←
                  </button>
                );
              }

              return (
                <button
                  key={k}
                  onClick={() => onNumberClick(k)}
                  className="py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-xs font-mono font-bold text-zinc-200 hover:text-white transition-all active:scale-95 shadow"
                >
                  {k}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
