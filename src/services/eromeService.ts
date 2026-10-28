// Erome Integration Service

export interface EromeCategory {
  id: string;
  name: string;
  tag: string;
  description: string;
  iconName: string;
}

export const EROME_CATEGORIES: EromeCategory[] = [
  { id: '1', name: 'Brasileiras', tag: 'brasileira', description: 'Conteúdo nacional amador e criadoras', iconName: 'Flame' },
  { id: '2', name: 'Amadoras', tag: 'amateur', description: 'Fotos e vídeos caseiros sem filtro', iconName: 'Sparkles' },
  { id: '3', name: 'TikTok & Reels', tag: 'tiktok', description: 'Dancinhas, tendências e vazados', iconName: 'Video' },
  { id: '4', name: 'OnlyFans & Privacy', tag: 'onlyfans', description: 'Prévias e ensaios exclusivos', iconName: 'Star' },
  { id: '5', name: 'Cosplay & Geeks', tag: 'cosplay', description: 'Fantasias, animes e gaming', iconName: 'Heart' },
  { id: '6', name: 'Casais Reais', tag: 'couple', description: 'Gravações reais de casais', iconName: 'Users' },
  { id: '7', name: 'Latinas', tag: 'latina', description: 'Criadoras latino-americanas', iconName: 'Compass' },
  { id: '8', name: 'Famosas & Influencers', tag: 'famosa', description: 'Ensaios e flagras de personalidades', iconName: 'Camera' }
];

export const eromeService = {
  getCategories(): EromeCategory[] {
    return EROME_CATEGORIES;
  },

  getSearchUrl(query: string): string {
    return `https://www.erome.com/search?q=${encodeURIComponent(query)}`;
  },

  parseAlbumId(urlOrId: string): string | null {
    if (!urlOrId) return null;
    const clean = urlOrId.trim();
    // Se for URL completa https://www.erome.com/a/ABC123
    const match = clean.match(/erome\.com\/a\/([a-zA-Z0-9]+)/i);
    if (match) return match[1];
    // Se for apenas o código do álbum
    if (/^[a-zA-Z0-9]{5,10}$/.test(clean)) return clean;
    return null;
  }
};
