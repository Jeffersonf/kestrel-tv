# kestrelTV

Player web e PWA limpo de **TV ao Vivo** projetado para uso em **TV** (controle remoto / teclado) e **Celular** (barra inferior fixa e player fixo no topo).

## Funcionalidades

- **Interface TV + Mobile:**
  - **TV / Desktop:** Player principal ao vivo + guia lateral retrátil de canais com busca, categorias e controle via teclado (`▲/▼` ou `PageUp/PageDown` para zapping, `0-9` para número do canal, `G` para alternar o guia, `I` para OSD, `/` para buscar).
  - **Mobile / PWA:** Player `16:9` fixo no topo enquanto você navega pela lista de canais e barra inferior com abas **Ao Vivo**, **Favoritos** e **Ajustes**.
- **Base Saimo Limpa + EPG:**
  - Consome `catalogo.txt` e `epg.json` (programação "Agora" e "A seguir"), com fallback interno limpo da base Saimo original (`FALLBACK_CHANNELS` / `./data/catalogo.txt`) e suporte a listas customizadas `.txt` ou `.m3u/.m3u8` em **Ajustes**.
  - Sem módulos `+18`, sem visual SKY+ e sem rotas de terceiros fora da base original.

## Desenvolvimento Local

```bash
npm install
npm run dev
```

## Build e Verificação

```bash
npm run lint
npm run build
```
