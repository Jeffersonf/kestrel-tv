import fs from 'fs';
import path from 'path';

const content = fs.readFileSync(path.resolve('src/services/fallbackChannels.ts'), 'utf8');
const start = content.indexOf('= [') + 2;
const jsonPart = content.substring(start, content.lastIndexOf(']') + 1);
const channels = JSON.parse(jsonPart);

let out = '#EXTM3U\n';
for (const ch of channels) {
  const logo = ch.logo ? ` tvg-logo="${ch.logo}"` : '';
  const group = ` group-title="${ch.category}"`;
  for (const src of ch.sources) {
    const qual = src.quality ? ` (${src.quality})` : '';
    out += `#EXTINF:-1 tvg-id="${ch.name}"${logo}${group}, ${ch.name}${qual}\n`;
    out += `${src.url}\n`;
  }
}

fs.writeFileSync(path.resolve('public/data/canais.m3u8'), out, 'utf8');
console.log('Done! Wrote public/data/canais.m3u8 with', channels.length, 'channels.');
