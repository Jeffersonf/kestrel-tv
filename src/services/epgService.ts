import type { ChannelEpgStatus, EpgProgram } from '../types';
import { storageService } from './storageService';

type RawEntry = [number, number, string, string?];

let epgMap: Map<string, EpgProgram[]> | null = null;
let lastLoadedAt = 0;
let loadingPromise: Promise<void> | null = null;

const CACHE_TTL_MS = 10 * 60 * 1000;

export function toChannelSlug(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseEntries(raw: unknown): EpgProgram[] {
  if (!Array.isArray(raw)) return [];
  const items: EpgProgram[] = [];
  for (const row of raw) {
    if (Array.isArray(row) && row.length >= 3) {
      const [start, end, title, description] = row as RawEntry;
      if (typeof start === 'number' && typeof end === 'number' && typeof title === 'string') {
        items.push({ start, end, title, description });
      }
    }
  }
  return items;
}

export const epgService = {
  async loadEpg(force = false): Promise<void> {
    if (!force && epgMap && Date.now() - lastLoadedAt < CACHE_TTL_MS) {
      return;
    }
    if (loadingPromise) return loadingPromise;

    const { epgUrl } = storageService.getSettings();
    if (!epgUrl?.trim()) return;

    loadingPromise = (async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);
        const res = await fetch(epgUrl.trim(), { signal: controller.signal });
        clearTimeout(timeout);
        if (!res.ok) return;

        const data = await res.json();
        const nextMap = new Map<string, EpgProgram[]>();

        if (data && typeof data.g === 'object' && data.g !== null) {
          for (const [key, val] of Object.entries(data.g)) {
            const parsed = parseEntries(val);
            if (parsed.length > 0) {
              nextMap.set(toChannelSlug(key), parsed);
            }
          }
        }

        epgMap = nextMap;
        lastLoadedAt = Date.now();
      } catch {
        // EPG é complementar; falha silenciosa não bloqueia a TV
      } finally {
        loadingPromise = null;
      }
    })();

    return loadingPromise;
  },

  getChannelProgram(channelName: string, nowSec = Math.floor(Date.now() / 1000)): ChannelEpgStatus {
    if (!epgMap || !channelName) {
      return { current: null, next: null, progressPercent: 0 };
    }

    const baseSlug = toChannelSlug(channelName);
    const candidates = [
      baseSlug,
      baseSlug.replace(/-(f?hd|4k|sd|uhd|sp|rj|mg|rs|df|pr|ba|pe|ce|go|es|pb|am|sc|ao-vivo)$/g, ''),
      baseSlug.replace(/-\d+$/, ''),
    ];

    let programs: EpgProgram[] | undefined;
    for (const slug of candidates) {
      if (slug && epgMap.has(slug)) {
        programs = epgMap.get(slug);
        break;
      }
    }

    if (!programs || programs.length === 0) {
      return { current: null, next: null, progressPercent: 0 };
    }

    let current: EpgProgram | null = null;
    let next: EpgProgram | null = null;

    for (let i = 0; i < programs.length; i++) {
      const p = programs[i];
      if (p.start <= nowSec && nowSec < p.end) {
        current = p;
        next = programs[i + 1] || null;
        break;
      }
      if (p.start > nowSec) {
        next = p;
        break;
      }
    }

    let progressPercent = 0;
    if (current && current.end > current.start) {
      progressPercent = Math.max(
        0,
        Math.min(100, Math.round(((nowSec - current.start) / (current.end - current.start)) * 100))
      );
    }

    return { current, next, progressPercent };
  },
};
