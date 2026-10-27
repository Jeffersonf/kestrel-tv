# kestrelTV 📺

Plataforma web moderna e responsiva de **TV ao Vivo, Filmes e Séries** construída com **React 18, Vite, TypeScript, Tailwind CSS e Hls.js**.

Disponível online via **GitHub Pages**: [https://jeffersonf.github.io/kestrel-tv/](https://jeffersonf.github.io/kestrel-tv/)

---

## ✨ Funcionalidades

- **📺 TV ao Vivo:**
  - Mais de 400 canais organizados por categorias (Abertos, Esportes, Filmes e Séries, Notícias, Documentários, Infantis, etc.).
  - Alternância inteligente entre múltiplas fontes com fallback automático em caso de instabilidade.
  - Grade com logos, status ao vivo e busca em tempo real.
- **🎬 Filmes e Séries (VOD):**
  - Catálogo particionado por letras (A-Z, #) com mais de 30.000 títulos.
  - Enriquecimento visual em tempo real com a API do **The Movie Database (TMDB)** (posters em alta resolução, sinopse, nota e elenco).
  - Seletor de temporadas e episódios com suporte a áudio dublado e legendado.
- **⚡ Player de Vídeo Customizado:**
  - Suporte completo a HLS (.m3u8) e MP4.
  - Atalhos de teclado (Espaço para Play/Pause, F para tela cheia, M para mudo, setas para avançar/retroceder).
  - Memorização automática de progresso ("Continuar assistindo").
- **❤️ Favoritos & Ajustes:**
  - Salvamento local no navegador de canais e mídias favoritas.
  - Alternador de Proxy CORS configurável para compatibilidade com transmissões HTTP em conexões HTTPS.
- **🎨 Design System Oficial:**
  - Estética dark sóbria baseada na escala Zinc (`#09090b` / `#18181b`), accent Vermelho Esportivo (`#dc2626`) e ícones limpos Lucide.

---

## 🛠️ Tecnologias Utilizadas

- **React 18**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Hls.js**
- **Lucide Icons**
- **TMDB API v3**
- **GitHub Actions & GitHub Pages**

---

## 🚀 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/Jeffersonf/kestrel-tv.git
cd kestrel-tv

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra no navegador em `http://localhost:5173`.

---

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos estáticos otimizados serão gerados no diretório `dist/`.
