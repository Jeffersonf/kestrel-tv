import fs from 'fs';
import path from 'path';

async function buildGenres() {
  console.log('Baixando fichas.txt e novidades.json...');
  const [fichasRes, novidadesRes] = await Promise.all([
    fetch('https://filmes-saimo.pages.dev/fichas.txt'),
    fetch('https://filmes-saimo.pages.dev/novidades.json')
  ]);

  if (!fichasRes.ok) {
    console.error('Falha ao baixar fichas.txt');
    return;
  }

  const fichasTxt = await fichasRes.text();
  let novidadesData = [];
  try {
    if (novidadesRes.ok) {
      const novJson = await novidadesRes.json();
      if (Array.isArray(novJson.rodadas)) {
        for (const rodada of novJson.rodadas) {
          if (Array.isArray(rodada.adicionados)) {
            for (const item of rodada.adicionados) {
              novidadesData.push({
                title: item.t,
                type: item.tp === 's' ? 'series' : 'movie',
                year: item.ano,
                poster: item.capa
              });
            }
          }
        }
      }
    }
  } catch (e) {
    console.warn('Erro ao processar novidades:', e);
  }

  const GENRES_LIST = [
    'Ação',
    'Comédia',
    'Terror',
    'Suspense',
    'Ficção científica',
    'Animação',
    'Romance',
    'Drama',
    'Aventura',
    'Crime',
    'Documentário',
    'Família'
  ];

  const genreMap = {
    'Lançamentos': novidadesData.slice(0, 100),
  };

  for (const g of GENRES_LIST) {
    genreMap[g] = [];
  }

  const lines = fichasTxt.split('\n');
  for (const line of lines) {
    if (line.startsWith('#') || !line.trim()) continue;
    const parts = line.split('\t');
    if (parts.length < 5) continue;

    const tipo = parts[0].trim(); // 'f' ou 's'
    const titulo = parts[1].trim();
    const id = parts[2].trim();
    const poster = parts[3].trim();
    const generosStr = parts[4].trim();

    if (!generosStr) continue;
    const generos = generosStr.split(',').map(g => g.trim());

    // Extrair ano do título se houver "(2024)"
    const yearMatch = titulo.match(/\((\d{4})\)/);
    const year = yearMatch ? yearMatch[1] : '';

    const item = {
      id,
      title: titulo,
      type: tipo === 's' ? 'series' : 'movie',
      poster: poster || null,
      year: year || null,
      genres: generos
    };

    for (const g of generos) {
      if (genreMap[g] && genreMap[g].length < 250) {
        genreMap[g].push(item);
      }
      // Mapear variações comuns
      if (/ficção/i.test(g) && genreMap['Ficção científica'] && genreMap['Ficção científica'].length < 250) {
        if (!genreMap['Ficção científica'].some(x => x.id === item.id)) {
          genreMap['Ficção científica'].push(item);
        }
      }
    }
  }

  // Renomear "Ficção científica" para "Ficção Científica" para o front-end
  genreMap['Ficção Científica'] = genreMap['Ficção científica'];
  delete genreMap['Ficção científica'];

  const outputPath = path.resolve('public/data/generos.json');
  fs.writeFileSync(outputPath, JSON.stringify(genreMap), 'utf8');

  console.log('Sucesso! public/data/generos.json gerado com as seguintes categorias:');
  for (const [k, v] of Object.entries(genreMap)) {
    console.log(` - ${k}: ${v.length} títulos`);
  }
}

buildGenres().catch(console.error);
