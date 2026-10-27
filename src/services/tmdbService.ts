import type { TMDBMetadata } from '../types';

const TMDB_KEY = '15d2ea6d0dc1d476efbca3eba2b9bbfb';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE = 'https://image.tmdb.org/t/p';

const cache = new Map<string, TMDBMetadata>();

export const tmdbService = {
  async searchMetadata(title: string, type: 'movie' | 'series', year?: string): Promise<TMDBMetadata> {
    const cleanTitle = title
      .replace(/\(.*\)/g, '')
      .replace(/\[.*\]/g, '')
      .trim();
    
    const cacheKey = `${type}_${cleanTitle}_${year || ''}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)!;
    }

    try {
      const stored = sessionStorage.getItem(`tmdb_${cacheKey}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        cache.set(cacheKey, parsed);
        return parsed;
      }
    } catch {}

    const endpoint = type === 'series' ? 'search/tv' : 'search/movie';
    let url = `${BASE_URL}/${endpoint}?api_key=${TMDB_KEY}&language=pt-BR&query=${encodeURIComponent(cleanTitle)}`;
    if (year) {
      url += type === 'series' ? `&first_air_date_year=${year}` : `&year=${year}`;
    }

    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 6000);
      const res = await fetch(url, { credentials: 'omit', signal: controller.signal });
      clearTimeout(timer);

      if (!res.ok) throw new Error(`TMDB error ${res.status}`);
      const data = await res.json();
      const first = data.results?.[0];

      if (first) {
        const meta: TMDBMetadata = {
          tmdbId: first.id,
          title: first.title || first.name,
          overview: first.overview || 'Sinopse não disponível.',
          posterUrl: first.poster_path ? `${IMAGE_BASE}/w342${first.poster_path}` : undefined,
          backdropUrl: first.backdrop_path ? `${IMAGE_BASE}/w1280${first.backdrop_path}` : undefined,
          rating: first.vote_average ? Math.round(first.vote_average * 10) / 10 : undefined,
          releaseYear: (first.release_date || first.first_air_date || '').slice(0, 4) || year,
        };

        cache.set(cacheKey, meta);
        try {
          sessionStorage.setItem(`tmdb_${cacheKey}`, JSON.stringify(meta));
        } catch {}

        return meta;
      }
    } catch (e) {
      console.warn(`TMDB lookup falhou para "${cleanTitle}":`, e);
    }

    const fallback: TMDBMetadata = {
      title,
      releaseYear: year,
    };
    cache.set(cacheKey, fallback);
    return fallback;
  }
};
