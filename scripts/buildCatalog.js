import fs from 'fs';
import path from 'path';

function parseCatalogText(content, defaultCategory) {
  const channels = [];
  let current = null;
  let currentSource = null;

  const lines = content.split('\n');
  for (let raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim().toLowerCase();
    const val = line.slice(colonIdx + 1).trim();

    if (key === 'canal') {
      if (current && current.name) {
        if (currentSource && currentSource.url) {
          current.sources.push(currentSource);
        }
        if (current.sources.length > 0) {
          channels.push(current);
        }
      }
      current = {
        name: val,
        category: defaultCategory || 'Variedades',
        logo: '',
        sources: []
      };
      currentSource = null;
    } else if (!current) {
      continue;
    } else if (key === 'categoria') {
      current.category = val;
    } else if (key === 'logo') {
      current.logo = val;
    } else if (key === 'fonte') {
      if (currentSource && currentSource.url) {
        current.sources.push(currentSource);
      }
      currentSource = { url: val };
    } else if (currentSource) {
      if (key === 'nome') currentSource.name = val;
      else if (key === 'qualidade') currentSource.quality = val;
      else if (key === 'referer') currentSource.referer = val;
      else if (key === 'agente') currentSource.agent = val;
      else if (key === 'chave') currentSource.clearKey = val;
    }
  }

  if (current && current.name) {
    if (currentSource && currentSource.url) {
      current.sources.push(currentSource);
    }
    if (current.sources.length > 0) {
      channels.push(current);
    }
  }

  return channels;
}

// Mapeamento e limpeza de categorias com acentuação correta
function cleanCategory(cat) {
  if (!cat) return 'Variedades';
  let c = cat.trim();
  // Corrigir caracteres corrompidos
  c = c.replace(/Document.rios/i, 'Documentários')
       .replace(/Filmes e S.ries/i, 'Filmes e Séries')
       .replace(/M.sicas/i, 'Músicas')
       .replace(/Not.cias/i, 'Notícias');

  if (/esporte|jogos|futebol|copa|nba|combate|ppv/i.test(c)) return 'Jogos & Esportes';
  if (/filme|s[eé]rie|cinema|telecine|hbo/i.test(c)) return 'Filmes e Séries';
  if (/aberta|globo|sbt|record|band|cultura/i.test(c)) return 'TV Aberta';
  if (/not[ií]cia|jornal|cnn|jp news/i.test(c)) return 'Notícias';
  if (/document[aá]rio|discovery|history|geo/i.test(c)) return 'Documentários';
  if (/infantil|kids|desenho|cartoon|disney|gloob/i.test(c)) return 'Infantil';
  if (/adulto|\+18|sexy|porn|playboy/i.test(c)) return 'Adulto (+18)';
  if (/m[uú]sica|r[aá]dio/i.test(c)) return 'Músicas';
  if (/24\s*horas|variedades|pluto/i.test(c)) return 'Variedades';
  return c;
}

const catalogoPath = fs.existsSync(path.resolve('public/catalogo_temp.txt'))
  ? path.resolve('public/catalogo_temp.txt')
  : path.resolve('public/data/catalogo.txt');

const catalogoTxt = fs.readFileSync(catalogoPath, 'utf8');
const restritosTxt = fs.existsSync(path.resolve('public/restritos_temp.txt'))
  ? fs.readFileSync(path.resolve('public/restritos_temp.txt'), 'utf8')
  : '';

const mainChannels = parseCatalogText(catalogoTxt, 'Variedades');
const adultChannels = parseCatalogText(restritosTxt, 'Adulto (+18)');

// Forçar categoria 'Adulto (+18)' nos canais restritos
for (const ch of adultChannels) {
  ch.category = 'Adulto (+18)';
}

// Canais adicionais garantidos de Esportes e Jogos de alta disponibilidade
const extraSportsChannels = [
  {
    name: 'CazéTV (Ao Vivo)',
    category: 'Jogos & Esportes',
    logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Caz%C3%A9TV_wordmark.svg?width=300',
    sources: [
      { url: 'https://amg01391-amg01391c10-tcl-br-9630.playouts.now.amagi.tv/playlist.m3u8', quality: '1080p FHD (Oficial TCL)' },
      { url: 'https://stream.ads.ottera.tv/playlist.m3u8?network_id=16337', quality: '720p HD' }
    ]
  },
  {
    name: 'NSports Ao Vivo',
    category: 'Jogos & Esportes',
    logo: 'https://mondrian.claro.com.br/channels/inverse/nsports.png',
    sources: [
      { url: 'https://ogc-nsprt-tcl-roku-syndication.otteravision.com/ogc/nsprt/nsprt_720p.m3u8', quality: '720p HD (Oficial Roku)' },
      { url: 'https://stream.ads.ottera.tv/playlist.m3u8?network_id=16337', quality: 'HD' }
    ]
  },
  {
    name: 'Red Bull TV Esportes',
    category: 'Jogos & Esportes',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Red_Bull_TV_logo.svg/320px-Red_Bull_TV_logo.svg.png',
    sources: [
      { url: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8', quality: '1080p FHD (Oficial)' }
    ]
  },
  {
    name: 'FIFA+ Ao Vivo',
    category: 'Jogos & Esportes',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/FIFA%2B_logo.svg/320px-FIFA%2B_logo.svg.png',
    sources: [
      { url: 'https://fifa-fifaplus1-1-br.samsung.wurl.tv/playlist.m3u8', quality: '1080p FHD (Samsung TV Plus)' }
    ]
  }
];

// Mescla e desduplica
const allChannelsMap = new Map();

for (const ch of [...extraSportsChannels, ...mainChannels, ...adultChannels]) {
  ch.category = cleanCategory(ch.category);
  const key = ch.name.toLowerCase().trim();
  if (allChannelsMap.has(key)) {
    const existing = allChannelsMap.get(key);
    // Adiciona fontes sem duplicar URL
    const existingUrls = new Set(existing.sources.map(s => s.url));
    for (const src of ch.sources) {
      if (!existingUrls.has(src.url)) {
        existing.sources.push(src);
        existingUrls.add(src.url);
      }
    }
  } else {
    ch.id = `ch_${allChannelsMap.size + 1}_${encodeURIComponent(ch.name.toLowerCase().replace(/\s+/g, '_'))}`;
    allChannelsMap.set(key, ch);
  }
}

const finalChannels = Array.from(allChannelsMap.values());

console.log(`Total de canais processados: ${finalChannels.length}`);

// Gerar public/data/catalogo.txt
let outputTxt = '# KESTREL TV — CATÁLOGO INDEPENDENTE\n';
outputTxt += `# Total: ${finalChannels.length} canais\n\n`;

for (const ch of finalChannels) {
  outputTxt += `canal: ${ch.name}\n`;
  outputTxt += `categoria: ${ch.category}\n`;
  if (ch.logo) outputTxt += `logo: ${ch.logo}\n`;
  for (const src of ch.sources) {
    outputTxt += `fonte: ${src.url}\n`;
    if (src.quality) outputTxt += `qualidade: ${src.quality}\n`;
    if (src.name) outputTxt += `nome: ${src.name}\n`;
    if (src.referer) outputTxt += `referer: ${src.referer}\n`;
    if (src.agent) outputTxt += `agente: ${src.agent}\n`;
    if (src.clearKey) outputTxt += `chave: ${src.clearKey}\n`;
  }
  outputTxt += '\n';
}

fs.writeFileSync(path.resolve('public/data/catalogo.txt'), outputTxt, 'utf8');
console.log('Salvo: public/data/catalogo.txt');

// Gerar src/services/fallbackChannels.ts
const tsContent = `import type { Channel } from '../types';\n\nexport const FALLBACK_CHANNELS: Channel[] = ${JSON.stringify(finalChannels, null, 2)};\n`;
fs.writeFileSync(path.resolve('src/services/fallbackChannels.ts'), tsContent, 'utf8');
console.log('Salvo: src/services/fallbackChannels.ts');

// Limpar arquivos temporários
try {
  fs.unlinkSync(catalogoPath);
  fs.unlinkSync(restritosPath);
} catch {}
