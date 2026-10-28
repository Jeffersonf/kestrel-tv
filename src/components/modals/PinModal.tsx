import React, { useState } from 'react';
import { X, ShieldAlert, KeyRound, Check } from 'lucide-react';
import { storageService } from '../../services/storageService';

interface PinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const PinModal: React.FC<PinModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [isChangingPin, setIsChangingPin] = useState(false);
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [changeSuccess, setChangeSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDigit = (digit: string) => {
    if (pin.length < 4) {
      const nextPin = pin + digit;
      setPin(nextPin);
      setError(false);

      if (nextPin.length === 4) {
        setTimeout(() => {
          const success = storageService.unlockAdult(nextPin);
          if (success) {
            onSuccess();
            onClose();
            setPin('');
          } else {
            setError(true);
            setPin('');
          }
        }, 150);
      }
    }
  };

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
    setError(false);
  };

  const handleSaveNewPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (oldPin !== storageService.getAdultPin()) {
      alert('PIN atual incorreto!');
      return;
    }
    if (newPin.length !== 4 || !/^\d{4}$/.test(newPin)) {
      alert('O novo PIN deve conter exatamente 4 dígitos numéricos.');
      return;
    }
    storageService.setAdultPin(newPin);
    setChangeSuccess(true);
    setTimeout(() => {
      setChangeSuccess(false);
      setIsChangingPin(false);
      setOldPin('');
      setNewPin('');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm rounded-3xl bg-zinc-900/95 border border-white/10 p-6 shadow-2xl backdrop-blur-2xl text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isChangingPin ? (
          <>
            {/* Header Icon */}
            <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600/20 to-red-600/5 border border-red-500/30 flex items-center justify-center text-red-500 mb-4 shadow-lg shadow-red-600/10">
              <ShieldAlert className="w-7 h-7" />
            </div>

            <h3 className="text-lg font-bold text-white">Controle Parental (+18)</h3>
            <p className="text-xs text-zinc-400 mt-1 mb-6">
              Digite o PIN de 4 dígitos para acessar os canais adultos.
              <br />
              <span className="text-[11px] text-zinc-500 font-mono">PIN padrão: 0000</span>
            </p>

            {/* PIN Dots */}
            <div className="flex items-center justify-center gap-3 mb-6">
              {[0, 1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-200 ${
                    idx < pin.length
                      ? 'bg-red-500 scale-110 shadow-md shadow-red-500/50'
                      : error
                      ? 'border border-red-500/60 bg-red-500/20 animate-shake'
                      : 'border border-white/20 bg-zinc-800'
                  }`}
                />
              ))}
            </div>

            {error && (
              <p className="text-xs font-medium text-red-400 mb-4 animate-in fade-in">
                PIN incorreto. Tente novamente ou use 0000.
              </p>
            )}

            {/* Numeric Keypad */}
            <div className="grid grid-cols-3 gap-2.5 max-w-[240px] mx-auto mb-6">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
                <button
                  key={digit}
                  onClick={() => handleDigit(digit)}
                  className="h-12 rounded-2xl bg-zinc-800/80 hover:bg-zinc-700/80 active:scale-95 border border-white/5 text-lg font-semibold text-white transition-all shadow-sm"
                >
                  {digit}
                </button>
              ))}
              <button
                onClick={() => setPin('')}
                className="h-12 rounded-2xl bg-zinc-800/40 hover:bg-zinc-800 active:scale-95 border border-white/5 text-xs font-medium text-zinc-400 hover:text-white transition-all"
              >
                Limpar
              </button>
              <button
                onClick={() => handleDigit('0')}
                className="h-12 rounded-2xl bg-zinc-800/80 hover:bg-zinc-700/80 active:scale-95 border border-white/5 text-lg font-semibold text-white transition-all shadow-sm"
              >
                0
              </button>
              <button
                onClick={handleBackspace}
                className="h-12 rounded-2xl bg-zinc-800/40 hover:bg-zinc-800 active:scale-95 border border-white/5 text-xs font-medium text-zinc-400 hover:text-white transition-all"
              >
                ⌫
              </button>
            </div>

            {/* Footer option to change PIN */}
            <button
              onClick={() => setIsChangingPin(true)}
              className="text-[11px] text-zinc-500 hover:text-zinc-300 flex items-center justify-center gap-1.5 mx-auto transition-colors"
            >
              <KeyRound className="w-3.5 h-3.5" />
              Alterar senha PIN
            </button>
          </>
        ) : (
          <form onSubmit={handleSaveNewPin} className="text-left">
            <div className="text-center mb-4">
              <KeyRound className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h3 className="text-base font-bold text-white">Alterar Senha PIN</h3>
              <p className="text-xs text-zinc-400">Configure um novo PIN de 4 dígitos para o controle parental.</p>
            </div>

            <div className="space-y-3 mb-6">
              <div>
                <label className="text-xs font-medium text-zinc-400 block mb-1">PIN Atual:</label>
                <input
                  type="password"
                  maxLength={4}
                  value={oldPin}
                  onChange={(e) => setOldPin(e.target.value)}
                  placeholder="0000"
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-white/10 text-white text-center tracking-widest text-sm focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium text-zinc-400 block mb-1">Novo PIN (4 dígitos):</label>
                <input
                  type="password"
                  maxLength={4}
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  placeholder="••••"
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-white/10 text-white text-center tracking-widest text-sm focus:outline-none focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsChangingPin(false)}
                className="flex-1 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition-colors"
              >
                Voltar
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-lg shadow-red-600/30 transition-all"
              >
                {changeSuccess ? <Check className="w-4 h-4" /> : null}
                {changeSuccess ? 'Salvo!' : 'Salvar Novo PIN'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
