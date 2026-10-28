# kestrelTV 📺

Plataforma web moderna, ultra-rápida e responsiva de **TV ao Vivo, Jogos, Filmes e Séries** construída com **React, Vite, TypeScript, Tailwind CSS e Hls.js**.

Disponível online via **GitHub Pages**: [https://jeffersonf.github.io/kestrel-tv/](https://jeffersonf.github.io/kestrel-tv/)

---

## ✨ O Que Há de Novo (Versão Independente & Aprimorada)

- **⚽ Jogos e Esportes Expandidos:**
  - Inclusão direta de canais como **CazéTV (Ao Vivo em 1080p FHD)**, **SporTV (1, 2 e 3)**, **Premiere (Clubes e canais de jogos)**, **ESPN (1 a 6 + Extra)**, **TNT Sports**, **BandSports**, **Combate**, **NSports**, **FIFA+** e **Red Bull TV**.
  - Fontes de alta velocidade com múltiplos servidores alternativos.

- **🔞 Modo Adulto (+18) com Controle Parental por PIN:**
  - Seção dedicada de canais adultos (**Playboy TV, Sexy Hot, Venus, Sextreme, Hustler, Brasileirinhas, Red Hot**, webcams e mais).
  - **Proteção Total por PIN**: Por padrão, o conteúdo +18 fica protegido e oculto de crianças.
  - **PIN Padrão de Fábrica:** `0000` (pode ser personalizado a qualquer momento pelo menu de Ajustes ou modal de desbloqueio).
  - Botão de bloqueio instantâneo no Header e banner de segurança.

- **💎 Cópia 100% Independente:**
  - O projeto possui seu próprio arquivo de catálogo local autônomo em `public/data/catalogo.txt` e lista M3U em `public/data/canais.m3u8` com **439 canais categorizados e corrigidos em UTF-8**.
  - Não fica fora do ar se servidores de terceiros caírem: o app testa a cópia local e possui catálogo embutido com zero delay.

- **🎨 Design Cinemático Aprimorado:**
  - **Hero Spotlight**: Destaque cinemático no topo da TV ao Vivo com transmissão em tempo real, badges de qualidade (4K, FHD), pulse "Ao Vivo" e carrossel de canais em destaque.
  - **Category Pills**: Navegação rápida com ícones temáticos para cada categoria (Jogos & Esportes, Filmes e Séries, TV Aberta, Notícias, Infantil, Documentários, Adulto +18, Músicas).
  - **Cards com Efeito Glassmorphism**: Badges de status ao vivo, indicação de qualidade (4K/FHD), quantidade de servidores em chip (`⚡ 5 fontes`) e hover com glow vermelho.

- **⚡ Player de Vídeo com Controles Profissionais:**
  - **Ambient Cinema Backlight**: Iluminação suave ao redor do vídeo.
  - **Barra de Troca Rápida de Servidor**: Alterne entre servidores (4K, FHD, Backup) em 1 clique direto na barra do player.
  - **Picture-in-Picture (PiP)**: Assista seus jogos em janela flutuante enquanto navega.
  - **Fallback Inteligente com Toast**: Se uma fonte travar ou cair, o player tenta automaticamente a próxima sem quebrar a tela.
  - **Atalhos de Teclado**:
    - `Espaço`: Play / Pause
    - `F`: Tela Cheia
    - `M`: Mudo
    - `P`: Picture-in-Picture (PiP)
    - `S`: Próximo Servidor
    - `Esc`: Fechar Player

---

## 🛠️ Tecnologias Utilizadas

- **React 19**
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
git clone https://github.com/jeffersonf/kestrel-tv.git
cd kestrel-tv

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra no navegador em `http://localhost:5173`.

---

## 📦 Como Publicar Atualizações no GitHub Pages

Basta fazer um commit e push para a branch `main`. A automação do **GitHub Actions** (`.github/workflows/deploy.yml`) compilará e publicará o site automaticamente:

```bash
git add .
git commit -m "Melhorias de design, jogos, +18 e cópia independente de canais"
git push origin main
```
