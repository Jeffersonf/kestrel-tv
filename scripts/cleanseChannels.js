import fs from 'fs';
import path from 'path';

const fallbackPath = path.resolve('src/services/fallbackChannels.ts');
const content = fs.readFileSync(fallbackPath, 'utf8');
const start = content.indexOf('= [') + 2;
const channels = JSON.parse(content.substring(start, content.lastIndexOf(']') + 1));

// Filtrar canais indesejados
const filtered = channels.filter(ch => !/gay|trans|shemale|homo|cuckold|travesti|ladyboy/i.test(ch.name));
console.log(`Removidos ${channels.length - filtered.length} canais.`);
console.log(`Restantes: ${filtered.length} canais.`);

// 1. Atualizar src/services/fallbackChannels.ts
const tsContent = `import type { Channel } from '../types';\n\nexport const FALLBACK_CHANNELS: Channel[] = ${JSON.stringify(filtered, null, 2)};\n`;
fs.writeFileSync(fallbackPath, tsContent, 'utf8');

// 2. Atualizar public/data/catalogo.txt
let outputTxt = '# KESTREL TV — CATÁLOGO INDEPENDENTE\n';
outputTxt += `# Total: ${filtered.length} canais\n\n`;

for (const ch of filtered) {
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

// 3. Atualizar public/data/canais.m3u8
let m3u = '#EXTM3U\n';
for (const ch of filtered) {
  const logo = ch.logo ? ` tvg-logo="${ch.logo}"` : '';
  const group = ` group-title="${ch.category}"`;
  for (const src of ch.sources) {
    const qual = src.quality ? ` (${src.quality})` : '';
    m3u += `#EXTINF:-1 tvg-id="${ch.name}"${logo}${group}, ${ch.name}${qual}\n`;
    m3u += `${src.url}\n`;
  }
}
fs.writeFileSync(path.resolve('public/data/canais.m3u8'), m3u, 'utf8');

console.log('Todos os arquivos de canais foram limpos e atualizados com sucesso!');
