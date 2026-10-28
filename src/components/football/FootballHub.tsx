import React, { useState, useEffect } from 'react';
import { Trophy, Play, Calendar, RefreshCw } from 'lucide-react';
import { footballService, type FootballMatch, SANTOS_INFO } from '../../services/footballService';

interface FootballHubProps {
  onPlayChannelKeyword: (keyword: string, fallbackChannelName?: string) => void;
}

export const FootballHub: React.FC<FootballHubProps> = ({ onPlayChannelKeyword }) => {
  const [matches, setMatches] = useState<FootballMatch[]>([]);
  const [santosMatches, setSantosMatches] = useState<FootballMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'santos' | 'live' | 'bra' | 'champions'>('santos');

  const loadData = async () => {
    setIsLoading(true);
    const [all, santos] = await Promise.all([
      footballService.fetchAllLiveAndUpcoming(),
      footballService.fetchSantosMatches()
    ]);
    setMatches(all);
    setSantosMatches(santos);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 60000); // Atualiza placares a cada 1 minuto
    return () => clearInterval(interval);
  }, []);

  // Próximo jogo do Santos em destaque
  const nextSantosMatch = santosMatches.find((m) => m.status !== 'FINISHED') || santosMatches[0];

  // Filtro
  const filteredMatches = matches.filter((m) => {
    if (selectedFilter === 'santos') return m.isSantos;
    if (selectedFilter === 'live') return m.status === 'LIVE';
    if (selectedFilter === 'bra') return m.league.includes('Brasil');
    if (selectedFilter === 'champions') return m.league.includes('Champions');
    return true;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-8 animate-in fade-in duration-300">
      
      {/* ======================================================== */}
      {/* ⚪⚫ DESTAQUE SUPREMO DO SANTOS FUTEBOL CLUBE            */}
      {/* ======================================================== */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-zinc-950 via-zinc-900 to-black border-2 border-amber-500/40 p-6 md:p-8 shadow-[0_20px_50px_rgba(245,158,11,0.15)] group">
        {/* Glow dourado de campeão e fundo alvinegro */}
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Lado Esquerdo: Identidade do Santos FC */}
          <div className="flex items-center gap-5">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-zinc-950/80 border border-amber-500/40 p-2 flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-105 transition-transform duration-300">
              <img
                src={SANTOS_INFO.logo}
                alt={SANTOS_INFO.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.2)]"
              />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center text-[10px] text-black font-black">
                ★
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-black uppercase tracking-wider">
                  Destaque Especial
                </span>
                <span className="text-[11px] text-zinc-400 font-medium">
                  {SANTOS_INFO.nickname}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                {SANTOS_INFO.fullName}
              </h1>
              <p className="text-xs text-zinc-400">
                Acompanhe todas as partidas do Peixe ao vivo com transmissão direta no Premiere, SporTV e CazéTV.
              </p>
            </div>
          </div>

          {/* Lado Direito: Próximo Jogo ou Ao Vivo com Botão de Acesso Direto */}
          {nextSantosMatch ? (
            <div className="w-full lg:w-auto bg-zinc-950/90 border border-white/10 p-4.5 rounded-2xl flex flex-col sm:flex-row items-center gap-4 shrink-0 shadow-inner">
              <div className="text-center sm:text-left space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  {nextSantosMatch.status === 'LIVE' ? (
                    <span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-extrabold text-[10px] uppercase flex items-center gap-1 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      JOGO AO VIVO
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 text-[10px] font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      {nextSantosMatch.dateStr} às {nextSantosMatch.timeStr}
                    </span>
                  )}
                  <span className="text-[10px] text-zinc-400 font-mono">
                    {nextSantosMatch.league}
                  </span>
                </div>

                {/* Confronto */}
                <div className="flex items-center justify-center sm:justify-start gap-3 pt-1">
                  <span className="text-xs font-bold text-white">
                    {nextSantosMatch.homeTeam.name}
                  </span>
                  {nextSantosMatch.homeTeam.score && (
                    <span className="font-mono font-black text-amber-400">
                      {nextSantosMatch.homeTeam.score} x {nextSantosMatch.awayTeam.score}
                    </span>
                  )}
                  <span className="text-xs text-zinc-500 font-semibold">vs</span>
                  <span className="text-xs font-bold text-white">
                    {nextSantosMatch.awayTeam.name}
                  </span>
                </div>

                <span className="text-[10px] text-amber-300 font-medium block">
                  Transmissão: {nextSantosMatch.broadcastName}
                </span>
              </div>

              {/* Botão de 1 Clique */}
              <button
                onClick={() => onPlayChannelKeyword('premiere', 'Premiere Clubes')}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-black font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 active:scale-95 transition-all shrink-0"
              >
                <Play className="w-4 h-4 fill-black ml-0.5" />
                Assistir Santos ao Vivo
              </button>
            </div>
          ) : (
            <div className="text-xs text-zinc-500">
              Carregando calendário de jogos do Santos...
            </div>
          )}
        </div>

        {/* Linha dos Próximos Jogos do Santos FC */}
        {santosMatches.length > 1 && (
          <div className="mt-6 pt-5 border-t border-white/5">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-3">
              Próximos Confrontos Agendados do Peixe:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {santosMatches.filter(m => m.status !== 'FINISHED').slice(0, 4).map((m) => (
                <div
                  key={m.id}
                  onClick={() => onPlayChannelKeyword('premiere', 'Premiere Clubes')}
                  className="p-3 rounded-xl bg-zinc-950/80 border border-white/5 hover:border-amber-500/40 hover:bg-zinc-900 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-amber-400 font-bold block">
                      {m.dateStr} • {m.timeStr}
                    </span>
                    <span className="text-xs font-semibold text-white block truncate max-w-[170px] group-hover:text-amber-300">
                      {m.homeTeam.name} vs {m.awayTeam.name}
                    </span>
                    <span className="text-[9px] text-zinc-500">
                      {m.league}
                    </span>
                  </div>

                  <Play className="w-3.5 h-3.5 text-zinc-600 group-hover:text-amber-400 transition-colors shrink-0" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* ⚽ GRADE COMPLETA DE FUTEBOL AO VIVO                     */}
      {/* ======================================================== */}
      <div className="space-y-4">
        {/* Barra de Filtros e Atualização */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-900/70 border border-white/5">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-red-500" />
            <div>
              <h2 className="text-base font-bold text-white">
                Grade de Jogos de Futebol
              </h2>
              <p className="text-xs text-zinc-400">
                Clique em qualquer partida para sintonizar diretamente a transmissão ao vivo na TV.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none pb-1 sm:pb-0">
            <button
              onClick={() => setSelectedFilter('santos')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedFilter === 'santos'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-bold'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              ⚪⚫ Santos FC
            </button>

            <button
              onClick={() => setSelectedFilter('live')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedFilter === 'live'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
              Ao Vivo Agora
            </button>

            <button
              onClick={() => setSelectedFilter('bra')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedFilter === 'bra'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              🇧🇷 Brasileirão
            </button>

            <button
              onClick={() => setSelectedFilter('champions')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedFilter === 'champions'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              ⭐ Champions League
            </button>

            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedFilter === 'all'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              Todos os Jogos
            </button>

            <button
              onClick={loadData}
              className="p-2 rounded-xl bg-zinc-950 border border-white/5 text-zinc-400 hover:text-white transition-colors"
              title="Atualizar placares agora"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-red-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Grid de Partidas */}
        {isLoading && matches.length === 0 ? (
          <div className="py-20 flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-8 h-8 text-red-500 animate-spin" />
            <span className="text-xs text-zinc-400 font-mono">Carregando jogos e transmissões ao vivo...</span>
          </div>
        ) : filteredMatches.length === 0 ? (
          <div className="py-16 text-center text-xs text-zinc-500 bg-zinc-900/30 rounded-2xl border border-white/5">
            Nenhuma partida encontrada para este filtro no momento.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMatches.map((m) => {
              const isLive = m.status === 'LIVE';

              return (
                <div
                  key={m.id}
                  onClick={() => onPlayChannelKeyword(m.targetChannelKeyword, m.broadcastName)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                    isLive
                      ? 'bg-gradient-to-br from-red-950/30 via-zinc-900 to-zinc-950 border-red-500/50 shadow-lg shadow-red-900/20'
                      : m.isSantos
                      ? 'bg-zinc-950 border-amber-500/30 hover:border-amber-400'
                      : 'bg-zinc-900/80 border-white/5 hover:border-red-500/40 hover:bg-zinc-850'
                  }`}
                >
                  {/* Top Bar: League & Status */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 text-[11px]">
                    <span className="font-semibold text-zinc-400 truncate max-w-[180px]">
                      {m.league}
                    </span>

                    {isLive ? (
                      <span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-extrabold text-[10px] uppercase flex items-center gap-1 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        {m.statusText}
                      </span>
                    ) : (
                      <span className="text-[10px] text-zinc-400 font-mono">
                        {m.statusText}
                      </span>
                    )}
                  </div>

                  {/* Middle: Teams & Scores */}
                  <div className="py-4 space-y-3">
                    {/* Home Team */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-zinc-950/80 border border-white/5 p-0.5 flex items-center justify-center shrink-0">
                          {m.homeTeam.logo ? (
                            <img
                              src={m.homeTeam.logo}
                              alt={m.homeTeam.name}
                              className="max-h-full max-w-full object-contain"
                              onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                            />
                          ) : (
                            <Trophy className="w-4 h-4 text-zinc-600" />
                          )}
                        </div>
                        <span className="text-xs font-bold text-white group-hover:text-red-300 transition-colors">
                          {m.homeTeam.name}
                        </span>
                      </div>

                      {m.homeTeam.score !== undefined && (
                        <span className="font-mono text-base font-black text-white">
                          {m.homeTeam.score}
                        </span>
                      )}
                    </div>

                    {/* Away Team */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-zinc-950/80 border border-white/5 p-0.5 flex items-center justify-center shrink-0">
                          {m.awayTeam.logo ? (
                            <img
                              src={m.awayTeam.logo}
                              alt={m.awayTeam.name}
                              className="max-h-full max-w-full object-contain"
                              onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                            />
                          ) : (
                            <Trophy className="w-4 h-4 text-zinc-600" />
                          )}
                        </div>
                        <span className="text-xs font-bold text-white group-hover:text-red-300 transition-colors">
                          {m.awayTeam.name}
                        </span>
                      </div>

                      {m.awayTeam.score !== undefined && (
                        <span className="font-mono text-base font-black text-white">
                          {m.awayTeam.score}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom: Channel & Click to Watch */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-400 font-medium truncate max-w-[180px]">
                      📺 {m.broadcastName}
                    </span>

                    <button
                      className="px-3 py-1.5 rounded-lg bg-red-600/20 group-hover:bg-red-600 text-red-400 group-hover:text-white border border-red-500/30 text-xs font-bold flex items-center gap-1.5 transition-all"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Assistir</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};
