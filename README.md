# kestrelTV 📺

Plataforma web moderna, ultra-rápida e responsiva de **TV ao Vivo, Jogos, Filmes e Séries** construída com **React, Vite, TypeScript, Tailwind CSS e Hls.js**.

Disponível online via **GitHub Pages**: [https://jeffersonf.github.io/kestrel-tv/](https://jeffersonf.github.io/kestrel-tv/)

---

## ✨ O Que Há de Novo

### 1. 🚀 Arquitetura Zero Custo / Zero Cota Cloudflare:
- **Suporte Completo a PWA (Progressive Web App):**
  - Instale com 1 clique no celular (Android / iOS) ou computador (Chrome / Edge).
  - Ícones adaptativos em alta definição (192x192, 512x512, SVG vetorial) e Service Worker com cache inteligente do shell da aplicação.
- **Bypass Inteligente de Proxy (CORS Nativo):**
  - Canais oficiais e FAST (como **CazéTV**, **Pluto TV Brasil**, **Samsung TV Plus**, **NSports**, **Red Bull TV**, **Amagi**, **Ottera**, **Akamai**) agora tocam diretamente no navegador via HTTPS com CORS aberto, consumindo **0 requisições do Cloudflare**.
- **Medidor de Conexão em Tempo Real:**
  - Exibe a velocidade de download em tempo real (`kb/s` e `Mb/s`) diretamente na tela do player.
  - Badge visual dinâmico identificando quando a transmissão está em **Zero Cota (Direto)** vs **Proxy CORS**.
- **Configuração de APK Android com Capacitor (Mixed Content Liberado):**
  - Arquivo `capacitor.config.json` pré-configurado com `cleartext: true` e `mixedContent: "always"`, permitindo que streams `http://` toquem direto no Android sem passar por nenhum proxy, com **custo R$ 0,00 e 0 requisições de proxy**.

### 2. 📡 Super Expansão de Conteúdo (1.528 Canais Únicos):
- **Jogos & Esportes (162 canais):** CazéTV, Premiere, SporTV (1, 2, 3), ESPN (1 a 6 + Extra), Combate, DAZN, NSports, FIFA+, Red Bull TV, BandSports, TNT Sports, canais internacionais de automobilismo, luta e futebol.
- **TV Aberta (318 canais):** Globo (redes e afiliadas de todo o Brasil), SBT, Record, Band, TV Cultura, RedeTV, canais legislativos e TVs comunitárias regionais.
- **Filmes e Séries (97 canais):** Telecine (Premium, Action, Touch, Pipoca, Fun, Cult), HBO, Cinemax, Paramount Network, Warner Channel, Universal TV, Sony, Space, Megapix, AXN, Studio Universal.
- **Infantil & Anime (122 canais):** Cartoon Network, Disney, Gloob, Nickelodeon, Toonami, Naruto 24h, animes e desenhos clássicos.
- **Pluto TV Brasil & Variedades (684 canais):** Catálogo completo 24h de reality shows, culinária, comédia, drama, documentários e produções FAST.
- **Notícias (18 canais):** CNN Brasil, BandNews, Record News, Jovem Pan News, GloboNews, Euronews, Bloomberg.
- **Documentários (17 canais):** Discovery Channel, NatGeo, History, Animal Planet, Discovery Science, Investigation Discovery.
- **Músicas (30 canais):** MTV, rádios ao vivo, canais sertanejos, pop, rock e clipes 24h.
- **Adulto +18 (80 canais com PIN 0000):** Playboy TV, Sexy Hot, Venus, Sextreme, Hustler, Red Light, Brasileirinhas, Penthouse. *(Canais de conteúdo indesejado foram estritamente removidos).*

### 3. 🛡️ Controle Parental (+18):
- **PIN Padrão de Fábrica:** `0000` (personalizável nas Configurações).
- Conteúdo restrito fica totalmente oculto por padrão até ser desbloqueado com autenticação segura.

### 4. 🧭 Navegação Profissional:
- **Menu Lateral Retrátil (Drawer):** Escolha canais ao vivo sem pausar a transmissão atual.
- **Categorização Automática de Filmes & Séries:** Filtro por Gêneros (Ação, Comédia, Suspense, Terror, Ficção, etc.).
- **Paginação Universal Otimizada:** Carregamento ultra-rápido de páginas, evitando travamentos por renderização excessiva.

---

## 📱 Como Gerar o Aplicativo Android com Capacitor (Zero Cota)

Para rodar como APK nativo no celular e tocar streams HTTP diretamente com 0 chamadas de proxy:

```bash
# 1. Instale o Capacitor CLI e o pacote Android
npm install @capacitor/core @capacitor/cli @capacitor/android

# 2. Inicialize o projeto Capacitor
npx cap init kestrelTV tv.kestrel.app --web-dir dist

# 3. Compile a aplicação web
npm run build

# 4. Adicione a plataforma Android e sincronize os arquivos
npx cap add android
npx cap sync android

# 5. Abra no Android Studio e gere seu APK
npx cap open android
```

No Android Studio, basta clicar em **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

---

## 🛠️ Tecnologias Utilizadas

- **React 19**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Hls.js**
- **Capacitor 7**
- **PWA / Service Worker**
- **Lucide Icons**
- **TMDB API v3**
- **GitHub Actions & GitHub Pages**

---

## 🚀 Como Rodar Localmente

```bash
git clone https://github.com/jeffersonf/kestrel-tv.git
cd kestrel-tv
npm install
npm run dev
```

Abra no navegador em `http://localhost:5173`.
