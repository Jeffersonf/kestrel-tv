// RedGifs API v2 Service
export interface RedGifItem {
  id: string;
  userName: string;
  title?: string;
  previewUrl: string;
  hdUrl: string;
  sdUrl: string;
  duration: number;
  likes: number;
  views: number;
  tags: string[];
  hasAudio: boolean;
}

let cachedToken: string | null = null;
let tokenExpiresAt = 0;

export const redgifsService = {
  async getAuthToken(): Promise<string | null> {
    const now = Date.now();
    if (cachedToken && now < tokenExpiresAt) {
      return cachedToken;
    }

    try {
      const res = await fetch('https://api.redgifs.com/v2/auth/temporary');
      if (!res.ok) return null;
      const data = await res.json();
      if (data.token) {
        cachedToken = data.token;
        // Token expira em 24h, cache por 20h
        tokenExpiresAt = now + 20 * 60 * 60 * 1000;
        return cachedToken;
      }
    } catch (e) {
      console.warn('Erro ao autenticar com RedGifs API:', e);
    }
    return null;
  },

  async search(query: string = 'trending', page: number = 1, count: number = 24): Promise<{ items: RedGifItem[]; total: number; pages: number }> {
    const token = await this.getAuthToken();
    if (!token) return { items: [], total: 0, pages: 0 };

    try {
      const url = `https://api.redgifs.com/v2/gifs/search?search_text=${encodeURIComponent(query)}&page=${page}&count=${count}&order=trending`;
      const res = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!res.ok) return { items: [], total: 0, pages: 0 };
      const data = await res.json();
      const gifs = data.gifs || [];

      const items: RedGifItem[] = gifs.map((g: any) => ({
        id: g.id,
        userName: g.userName || 'Anonymous',
        title: g.tags?.[0] ? `#${g.tags[0]}` : g.id,
        previewUrl: g.urls?.poster || g.urls?.thumbnail || `https://media.redgifs.com/${g.id}-poster.jpg`,
        hdUrl: g.urls?.hd || `https://media.redgifs.com/${g.id}.mp4`,
        sdUrl: g.urls?.sd || `https://media.redgifs.com/${g.id}-mobile.mp4`,
        duration: Math.round(g.duration || 0),
        likes: g.likes || 0,
        views: g.views || 0,
        tags: g.tags || [],
        hasAudio: !!g.hasAudio
      }));

      return {
        items,
        total: data.total || items.length,
        pages: data.pages || 1
      };
    } catch (e) {
      console.warn('Erro ao buscar RedGifs:', e);
      return { items: [], total: 0, pages: 0 };
    }
  },

  getPopularTags(): string[] {
    return [
      'Trending',
      'Brazilian',
      'Latina',
      'Amateur',
      'POV',
      'Blonde',
      'Brunette',
      'Hardcore',
      'Creampie',
      'Cosplay',
      'Masturbation',
      'Verified'
    ];
  }
};
