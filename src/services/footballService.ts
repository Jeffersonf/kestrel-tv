// Football & Santos FC Live Match Service
export interface FootballMatch {
  id: string;
  name: string;
  league: string;
  dateStr: string;
  timeStr: string;
  rawDate: string;
  status: 'LIVE' | 'SCHEDULED' | 'FINISHED';
  statusText: string;
  homeTeam: {
    name: string;
    logo: string;
    score?: string;
  };
  awayTeam: {
    name: string;
    logo: string;
    score?: string;
  };
  isSantos: boolean;
  targetChannelKeyword: string;
  broadcastName: string;
}

export const SANTOS_INFO = {
  id: '2674',
  name: 'Santos FC',
  fullName: 'Santos Futebol Clube',
  nickname: 'Peixe / Alvinegro Praiano',
  logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/2674.png',
  stadium: 'Vila Belmiro',
  primaryColor: '#000000',
  secondaryColor: '#ffffff'
};

const LEAGUES = [
  { key: 'bra.1', name: 'Brasileirão Série A', defaultChannel: 'premiere' },
  { key: 'bra.2', name: 'Brasileirão Série B', defaultChannel: 'premiere' },
  { key: 'uefa.champions', name: 'UEFA Champions League', defaultChannel: 'tnt' },
  { key: 'conmebol.libertadores', name: 'Copa Libertadores', defaultChannel: 'espn' }
];

export const footballService = {
  getSantosInfo() {
    return SANTOS_INFO;
  },

  async fetchSantosMatches(): Promise<FootballMatch[]> {
    const urls = [
      'https://site.api.espn.com/apis/site/v2/sports/soccer/bra.1/teams/2674/schedule',
      'https://site.api.espn.com/apis/site/v2/sports/soccer/bra.2/teams/2674/schedule'
    ];

    for (const url of urls) {
      try {
        const res = await fetch(url);
        if (!res.ok) continue;
        const data = await res.json();
        const events = data.events || [];
        if (events.length === 0) continue;

        const matches: FootballMatch[] = events.map((ev: any) => {
          const comp = ev.competitions?.[0];
          const home = comp?.competitors?.find((c: any) => c.homeAway === 'home') || comp?.competitors?.[0];
          const away = comp?.competitors?.find((c: any) => c.homeAway === 'away') || comp?.competitors?.[1];
          const statusType = comp?.status?.type?.name || '';

          let status: 'LIVE' | 'SCHEDULED' | 'FINISHED' = 'SCHEDULED';
          if (statusType.includes('IN_PROGRESS') || statusType.includes('HALFTIME')) {
            status = 'LIVE';
          } else if (statusType.includes('FINAL') || statusType.includes('FULL_TIME')) {
            status = 'FINISHED';
          }

          const matchDate = new Date(ev.date);
          const dateStr = matchDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', weekday: 'short' });
          const timeStr = matchDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

          return {
            id: ev.id,
            name: ev.name,
            league: comp?.league?.name || 'Brasileirão',
            dateStr,
            timeStr,
            rawDate: ev.date,
            status,
            statusText: status === 'LIVE' ? 'AO VIVO' : status === 'FINISHED' ? 'Fim de Jogo' : `${dateStr} às ${timeStr}`,
            homeTeam: {
              name: home?.team?.displayName || 'Santos',
              logo: home?.team?.logos?.[0]?.href || SANTOS_INFO.logo,
              score: home?.score?.displayValue
            },
            awayTeam: {
              name: away?.team?.displayName || 'Adversário',
              logo: away?.team?.logos?.[0]?.href || '',
              score: away?.score?.displayValue
            },
            isSantos: true,
            targetChannelKeyword: 'premiere',
            broadcastName: 'Premiere / SporTV / CazéTV'
          };
        });

        // Retorna os próximos jogos e o mais recente
        return matches;
      } catch (e) {
        console.warn('Erro ao carregar agenda do Santos:', e);
      }
    }

    return [];
  },

  async fetchAllLiveAndUpcoming(): Promise<FootballMatch[]> {
    const allMatches: FootballMatch[] = [];

    // 1. Tentar pegar a agenda do Santos primeiro
    const santosMatches = await this.fetchSantosMatches();
    // Prioriza próximos jogos do Santos ou jogo ao vivo
    const upcomingSantos = santosMatches.filter(m => m.status !== 'FINISHED').slice(0, 4);
    const recentSantos = santosMatches.filter(m => m.status === 'FINISHED').slice(-2);
    allMatches.push(...upcomingSantos, ...recentSantos);

    // 2. Buscar rodadas de ligas ao vivo
    for (const l of LEAGUES) {
      try {
        const url = `https://site.api.espn.com/apis/site/v2/sports/soccer/${l.key}/scoreboard`;
        const res = await fetch(url);
        if (!res.ok) continue;
        const data = await res.json();
        const events = data.events || [];

        for (const ev of events) {
          // Ignora se já inserimos o jogo do Santos
          if (allMatches.some(m => m.id === ev.id)) continue;

          const comp = ev.competitions?.[0];
          const home = comp?.competitors?.find((c: any) => c.homeAway === 'home') || comp?.competitors?.[0];
          const away = comp?.competitors?.find((c: any) => c.homeAway === 'away') || comp?.competitors?.[1];
          const statusType = comp?.status?.type?.name || '';

          let status: 'LIVE' | 'SCHEDULED' | 'FINISHED' = 'SCHEDULED';
          if (statusType.includes('IN_PROGRESS') || statusType.includes('HALFTIME')) {
            status = 'LIVE';
          } else if (statusType.includes('FINAL') || statusType.includes('FULL_TIME')) {
            status = 'FINISHED';
          }

          const matchDate = new Date(ev.date);
          const dateStr = matchDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', weekday: 'short' });
          const timeStr = matchDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

          const isSantos = 
            (home?.team?.displayName || '').toLowerCase().includes('santos') ||
            (away?.team?.displayName || '').toLowerCase().includes('santos');

          allMatches.push({
            id: ev.id,
            name: ev.name,
            league: l.name,
            dateStr,
            timeStr,
            rawDate: ev.date,
            status,
            statusText: status === 'LIVE' ? `AO VIVO ${comp?.status?.displayClock || ''}` : status === 'FINISHED' ? 'Fim de Jogo' : `${dateStr} às ${timeStr}`,
            homeTeam: {
              name: home?.team?.displayName || 'Mandante',
              logo: home?.team?.logos?.[0]?.href || '',
              score: home?.score?.displayValue
            },
            awayTeam: {
              name: away?.team?.displayName || 'Visitante',
              logo: away?.team?.logos?.[0]?.href || '',
              score: away?.score?.displayValue
            },
            isSantos,
            targetChannelKeyword: l.defaultChannel,
            broadcastName: l.defaultChannel === 'premiere' ? 'Premiere / SporTV' : l.defaultChannel === 'tnt' ? 'TNT Sports / Space' : 'ESPN / Disney+'
          });
        }
      } catch (e) {
        console.warn(`Erro ao carregar scoreboard de ${l.name}:`, e);
      }
    }

    // Ordenação: Santos primeiro, depois AO VIVO, depois futuros jogos
    allMatches.sort((a, b) => {
      if (a.isSantos && !b.isSantos) return -1;
      if (!a.isSantos && b.isSantos) return 1;
      if (a.status === 'LIVE' && b.status !== 'LIVE') return -1;
      if (a.status !== 'LIVE' && b.status === 'LIVE') return 1;
      return new Date(a.rawDate).getTime() - new Date(b.rawDate).getTime();
    });

    return allMatches;
  }
};
