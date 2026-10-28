import fs from 'fs';
import path from 'path';

// Lista de fontes externas para colher o máximo de conteúdo
const SOURCES = [
  {
    name: 'Ramys Canais BR 2026',
    url: 'https://raw.githubusercontent.com/Ramys/Iptv-Brasil-2026/master/Canais.m3u8',
    defaultCategory: 'Filmes e Séries'
  },
  {
    name: 'IPTV-ORG Brasil',
    url: 'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/br.m3u',
    defaultCategory: 'TV Aberta'
  },
  {
    name: 'Pluto TV Brasil (24h FAST)',
    url: 'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/br_pluto.m3u',
    defaultCategory: 'Variedades'
  },
  {
    name: 'IPTV-ORG Esportes',
    url: 'https://iptv-org.github.io/iptv/categories/sports.m3u',
    defaultCategory: 'Jogos & Esportes'
  },
  {
    name: 'IPTV-ORG Portugal',
    url: 'https://raw.githubusercontent.com/iptv-org/iptv/master/streams/pt.m3u',
    defaultCategory: 'Variedades'
  },
  {
    name: 'IPTV-ORG Animação & Kids',
    url: 'https://iptv-org.github.io/iptv/categories/animation.m3u',
    defaultCategory: 'Infantil'
  }
];

// Termos estritamente bloqueados conforme solicitação do usuário
const BANNED_REGEX = /gay|trans(?:\s|$|sexual|vestite|vestiti|vestir|filme)|cuckold|homossexual|travesti|lgbtq/i;

function cleanCategory(cat, title = '') {
  const c = (cat || '').toLowerCase();
  const t = (title || '').toLowerCase();
  const full = `${c} ${t}`;

  if (/adulto|\+18|sexy|porn|playboy|brasileirinhas|red light|hustler|venus|sextreme|penthouse/i.test(full)) {
    return 'Adulto (+18)';
  }
  if (/esporte|jogos|futebol|soccer|nba|nfl|fifa|caz[eé]|premiere|sportv|espn|combate|dazn|fight|racing|motor|corrida|tenis|t[eê]nis|basquete/i.test(full)) {
    return 'Jogos & Esportes';
  }
  if (/aberta|globo|sbt|record|band|cultura|redetv|tv brasil|legislat|camara|senado|justi[cç]a/i.test(full)) {
    return 'TV Aberta';
  }
  if (/filme|s[eé]rie|cinema|telecine|hbo|paramount|warner|sony|universal|tnt|space|megapix|cinemax|studio|axn|fx/i.test(full)) {
    return 'Filmes e Séries';
  }
  if (/not[ií]cia|news|jornal|cnn|jp news|bandnews|record news|euronews|al jazeera|bloomberg/i.test(full)) {
    return 'Notícias';
  }
  if (/document[aá]rio|discovery|history|nat\s*geo|geographic|animal planet|investiga|curiosidade/i.test(full)) {
    return 'Documentários';
  }
  if (/infantil|kids|desenho|cartoon|disney|gloob|nickelodeon|nick|anime|naruto|toonz|baby|junior/i.test(full)) {
    return 'Infantil';
  }
  if (/m[uú]sica|music|clip|show|mtv|radio|r[aá]dio|sertanejo|rock|pop/i.test(full)) {
    return 'Músicas';
  }
  return 'Variedades';
}

function parseM3u(content, sourceName, defaultCat) {
  const items = [];
  const lines = content.split('\n');
  let curMeta = null;

  for (let raw of lines) {
    const line = raw.trim();
    if (!line) continue;

    if (line.startsWith('#EXTINF:')) {
      // Extrai tvg-logo, group-title e nome do canal
      const logoMatch = line.match(/tvg-logo="([^"]*)"/i);
      const groupMatch = line.match(/group-title="([^"]*)"/i);
      const nameParts = line.split(',');
      const rawName = nameParts.length > 1 ? nameParts.slice(1).join(',').trim() : 'Canal';

      curMeta = {
        name: rawName.replace(/^BR:\s*/i, '').replace(/^PT:\s*/i, '').replace(/^ES:\s*/i, '').trim(),
        logo: logoMatch ? logoMatch[1] : '',
        group: groupMatch ? groupMatch[1] : defaultCat,
      };
    } else if (line.startsWith('http://') || line.startsWith('https://')) {
      if (curMeta && curMeta.name) {
        items.push({
          name: curMeta.name,
          category: cleanCategory(curMeta.group, curMeta.name),
          logo: curMeta.logo,
          url: line,
          sourceName
        });
      }
      curMeta = null;
    }
  }

  return items;
}

function parseExistingCatalog(content) {
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
        if (currentSource && currentSource.url) current.sources.push(currentSource);
        if (current.sources.length > 0) channels.push(current);
      }
      current = { name: val, category: 'Variedades', logo: '', sources: [] };
      currentSource = null;
    } else if (!current) {
      continue;
    } else if (key === 'categoria') {
      current.category = val;
    } else if (key === 'logo') {
      current.logo = val;
    } else if (key === 'fonte') {
      if (currentSource && currentSource.url) current.sources.push(currentSource);
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
    if (currentSource && currentSource.url) current.sources.push(currentSource);
    if (current.sources.length > 0) channels.push(current);
  }

  return channels;
}

async function harvest() {
  console.log('--- INICIANDO COLHEITA MÁXIMA DE CANAIS ---');

  // 1. Carrega catálogo existente atual
  const existingPath = path.resolve('public/data/catalogo.txt');
  let existingChannels = [];
  if (fs.existsSync(existingPath)) {
    const rawTxt = fs.readFileSync(existingPath, 'utf8');
    existingChannels = parseExistingCatalog(rawTxt);
    console.log(`Catálogo atual carregado: ${existingChannels.length} canais.`);
  }

  // 2. Colhe de todas as fontes externas
  const externalItems = [];
  for (const src of SOURCES) {
    try {
      console.log(`Baixando: ${src.name} (${src.url})...`);
      const res = await fetch(src.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.status === 200) {
        const text = await res.text();
        const parsed = parseM3u(text, src.name, src.defaultCategory);
        console.log(`  -> Obtidos ${parsed.length} canais de ${src.name}`);
        externalItems.push(...parsed);
      } else {
        console.warn(`  -> Falha HTTP ${res.status} para ${src.name}`);
      }
    } catch (e) {
      console.warn(`  -> Erro ao baixar ${src.name}: ${e.message}`);
    }
  }

  // 3. Mescla e unifica canais (evitando duplicatas e agrupando múltiplas fontes)
  const channelsMap = new Map();

  function normalizeChannelKey(name) {
    return name
      .toLowerCase()
      .replace(/\s*(fhd|hd|sd|4k|uhd|h\.265|hevc|\d+p|\¹|\²|\³|\*)\s*/gi, ' ')
      .replace(/[^\p{L}\p{N}]+/gu, ' ')
      .trim();
  }

  // Adiciona os canais existentes primeiro (mantendo prioridade e logos de alta qualidade)
  for (const ch of existingChannels) {
    // Aplica filtro de banimento
    if (BANNED_REGEX.test(ch.name) || BANNED_REGEX.test(ch.category)) {
      continue;
    }
    const key = normalizeChannelKey(ch.name);
    channelsMap.set(key, {
      id: ch.id || `ch_${channelsMap.size + 1}`,
      name: ch.name,
      category: cleanCategory(ch.category, ch.name),
      logo: ch.logo || '',
      sources: [...ch.sources]
    });
  }

  console.log(`Canais base mantidos após filtro: ${channelsMap.size}`);

  // Mescla canais externos
  let addedCount = 0;
  for (const item of externalItems) {
    // Filtro de banimento estrito
    if (BANNED_REGEX.test(item.name) || BANNED_REGEX.test(item.category)) {
      continue;
    }

    const key = normalizeChannelKey(item.name);
    if (!key || key.length < 2) continue;

    if (channelsMap.has(key)) {
      const existing = channelsMap.get(key);
      const urlExists = existing.sources.some(s => s.url === item.url);
      if (!urlExists) {
        existing.sources.push({
          url: item.url,
          name: `Fonte ${existing.sources.length + 1} (${item.sourceName.split(' ')[0]})`,
          quality: item.name.includes('FHD') ? '1080p FHD' : item.name.includes('HD') ? '720p HD' : undefined
        });
      }
      if (!existing.logo && item.logo) {
        existing.logo = item.logo;
      }
    } else {
      channelsMap.set(key, {
        id: `ch_${channelsMap.size + 1}_${encodeURIComponent(key.slice(0, 20).replace(/\s+/g, '_'))}`,
        name: item.name,
        category: item.category,
        logo: item.logo || '',
        sources: [
          {
            url: item.url,
            name: `Fonte 1 (${item.sourceName.split(' ')[0]})`,
            quality: item.name.includes('FHD') ? '1080p FHD' : item.name.includes('HD') ? '720p HD' : undefined
          }
        ]
      });
      addedCount++;
    }
  }

  const finalChannels = Array.from(channelsMap.values());
  // Ordena alfabeticamente dentro de cada categoria
  finalChannels.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category, 'pt-BR');
    }
    return a.name.localeCompare(b.name, 'pt-BR');
  });

  // Estatísticas por categoria
  const catStats = {};
  for (const ch of finalChannels) {
    catStats[ch.category] = (catStats[ch.category] || 0) + 1;
  }

  console.log('\n--- RESULTADO FINAL DA EXPANSÃO ---');
  console.log(`Total final de canais únicos: ${finalChannels.length}`);
  console.log(`Novos canais adicionados: ${addedCount}`);
  console.log('Distribuição por Categoria:', catStats);

  // 4. Salva public/data/catalogo.txt
  let outputTxt = '# KESTREL TV — CATÁLOGO EXPANDIDO INDEPENDENTE\n';
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

  // 5. Salva public/data/canais.m3u8
  let outputM3u = '#EXTM3U\n';
  for (const ch of finalChannels) {
    for (let i = 0; i < ch.sources.length; i++) {
      const src = ch.sources[i];
      const displayName = ch.sources.length > 1 ? `${ch.name} [F${i + 1}]` : ch.name;
      outputM3u += `#EXTINF:-1 tvg-id="${ch.id}" tvg-name="${ch.name}" tvg-logo="${ch.logo}" group-title="${ch.category}",${displayName}\n`;
      outputM3u += `${src.url}\n`;
    }
  }
  fs.writeFileSync(path.resolve('public/data/canais.m3u8'), outputM3u, 'utf8');
  console.log('Salvo: public/data/canais.m3u8');

  // 6. Salva src/services/fallbackChannels.ts
  const tsContent = `import type { Channel } from '../types';\n\nexport const FALLBACK_CHANNELS: Channel[] = ${JSON.stringify(finalChannels, null, 2)};\n`;
  fs.writeFileSync(path.resolve('src/services/fallbackChannels.ts'), tsContent, 'utf8');
  console.log('Salvo: src/services/fallbackChannels.ts');

  console.log('--- EXPANSÃO CONCLUÍDA COM SUCESSO! ---');
}

harvest();
