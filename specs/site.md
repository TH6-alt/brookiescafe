# specs/site.md — Fonte de verdade do produto

Última atualização: 2026-09-05 (revisão 2 — one-page, novo endereço, briefing do site oficial)

Define **o que** precisa ser construído. Mudanças aqui exigem minha aprovação (regra de
contradição em @../CLAUDE.md). Decisões vão para @../memoria.md.

---

## 1. Objetivo do site

Transformar visitantes em clientes e **incentivar visitas presenciais** à Brookies Café, na
Gruta de Lourdes, Maceió–AL. O site apresenta a marca de forma profissional, mostra brownies,
cookies e cafés de maneira apetitosa, facilita a descoberta do cardápio, destaca localização e
horário, e direciona para o Instagram.

Fluxo de conversão priorizado: **produto → desejo → confiança → localização → visita.**

Não é objetivo: vender pela internet, processar pagamentos, gerenciar reservas ou delivery.

## 2. Público-alvo

- Moradores da Gruta de Lourdes e bairros vizinhos de Maceió.
- Frequentadores da Praça Genésio de Carvalho: famílias, casais, grupos de amigos, ciclistas,
  tutores de pets.
- Peso em **jovens adultos (18–40)** que consomem café e sobremesa no fim da tarde/noite e
  compartilham no Instagram.
- Interesse por doçaria artesanal (brownie/cookie) e ambiente aconchegante.

## 3. Produto e proposta de valor

- **Produtos (confirmados pela bio/Instagram):** brownies, cookies e café.
- **Proposta:** "Café artesanal + doces indulgentes + ambiente aconchegante + estética
  contemporânea." Um cantinho para quem ama café, brownie e cookie.
- **Consumo:** no local. Sem e-commerce, sem delivery declarado.
- Sabores, recheios, ingredientes e métodos **não confirmados** → usar nomes genéricos e
  estrutura editável (ver §9 e regra de não inventar, §15).

## 4. Idiomas

Português do Brasil, idioma único. `lang="pt-BR"`. Sem multi-idioma.

## 5. Formato e páginas

**Página única (one-page)** com navegação por âncoras e scroll suave. **Decisão revisada em
2026-09-05:** a estrutura multi-páginas anterior foi substituída por one-page (ver @../memoria.md).

Documentos HTML: **1** (`index.html`). Estrutura preparada para, no futuro, desmembrar seções em
páginas próprias sem retrabalho de conteúdo.

### Seções (na ordem)

1. **Header** — fixo, compacto no scroll. Logo + nav (Início, Cardápio, Sobre, História,
   Avaliações, Localização, Instagram) + CTA "Ver cardápio". Mobile: logo + hambúrguer + CTA
   quando couber.
2. **Hero** (`#inicio`) — **vídeo de abertura em background** (`assets/video/hero-brookies.mp4`,
   ~2,8 MB, vertical 720×1280): `autoplay` + `muted` + `loop` + `playsinline`, sem controles,
   `object-fit: cover`, `preload="metadata"`, poster/fallback = `assets/img/fotos/foto-25.jpg`
   (também fundo do `.hero__bg`). Altura ~88vh desktop / ~82vh tablet / ~78vh mobile. Camadas:
   vídeo → overlay em gradiente (escurece base e lateral esquerda p/ leitura) → conteúdo
   (z-index) → fade inferior p/ creme (transição suave pra próxima seção). Conteúdo: eyebrow,
   headline forte, subheadline, CTAs "Conheça o cardápio" + "Como chegar", selos rápidos
   (⭐ 5,0 Google · 📍 Gruta de Lourdes · ☕ Café • Brownie • Cookie · 🕐 17h às 22h). Entrada
   suave (fade + translateY, reusa `.reveal`) + indicador "Role para explorar" (seta) no rodapé
   do hero → `#por-que`. **`prefers-reduced-motion`:** vídeo escondido via JS (fica o poster) e
   animações desligadas. Vídeo é decorativo (`aria-hidden`), todo texto essencial em HTML.
3. **Por que a Brookies** (`#por-que`) — **fundo verde profundo** (`.section--verde`, cor do
   emblema; decisão de 2026-09-08), com trio de cards creme (foto no topo + ícone + título +
   frase curta): café fresquinho (`foto-01`) · doce artesanal (`foto-06`) · do lado da praça
   (placeholder `ph-entrada.svg` até o proprietário enviar a **foto da entrada da loja**).
   Padrão "Why Choose Us" do template, execução e conteúdo originais. Sem novos fatos comerciais.
4. **Cardápio** (`#cardapio`) — cardápio interativo com **itens e preços reais** (da foto do
   menu, 2026-09-07). Filtros: Brookies · Sobremesas · Bolos · Cafés · Smoothies · Sodas
   (cafés quentes e gelados no mesmo filtro; Cookie dentro de Sobremesas). **Sem chip "Todos"**
   (removido em 2026-09-07): na carga, todos os itens aparecem e nenhum filtro fica ativo;
   clicar num filtro filtra, clicar de novo no filtro ativo limpa (volta a mostrar tudo).
   Cards + microinterações. Clique abre **modal** (imagem, nome, descrição, categoria, preço).
   Dados em `assets/js/data.js`. Aviso visível: fotos ainda ilustrativas; preços/disponibilidade
   podem mudar.
5. **Sobre** (`#sobre`) — proposta e posicionamento da marca. Sem história inventada. Destaques:
   ⭐ 5,0 · 🍪 brownies e cookies · ☕ café · 📍 Gruta de Lourdes.
6. **História** (`#historia`) — **fundo marrom** (`.section--dark`; decisão de 2026-09-08) —
   "A história da Brookies Café". **Vídeo** enviado pela Brookies
   (`assets/video/historia-brookies.mp4`) em player HTML nativo: `controls`, **sem autoplay**,
   `preload="none"`, poster de marca. Texto de apoio curto e **sem fatos inventados** (nada de
   datas, fundadores, tempo de casa). Legenda: "Vídeo enviado pela Brookies Café."
7. **Experiência** (`#experiencia`) — **faixa full-bleed** com foto de fundo, overlay chocolate
   (≥ 45%) e headline branca centralizada ("Seu café merece uma pausa") + botão pill "Ver o
   cardápio". Padrão dos banners do Grit, execução original. **Abaixo**, uma **galeria "fotos
   espalhadas"** (`.scatter-marquee` > `.scatter-marquee__track` > `.scatter-gallery`):
   **8 fotos reais**, cada uma com leve rotação (`--rot` por item), moldura branca estilo foto
   impressa e sombra suave. No **desktop/tablet** vira uma **faixa em rolagem contínua (marquee)**
   que anda devagar da direita p/ a esquerda (`@keyframes scatter-scroll`, `translateX(-50%)`,
   ~55s, linear, infinita) — **decisão de 2026-09-08**, substitui o "wrap em ~2 linhas". Loop sem
   emenda: main.js injeta uma 2ª cópia do `<ul>` (decorativa, `aria-hidden`, `alt=""`, já
   visível). **Pausa no hover / foco**; fade nas duas bordas (mask); a animação para quando a
   seção sai da viewport (IntersectionObserver, economia de CPU). Hover no card levanta,
   endireita e traz pra frente; entrada em stagger via IntersectionObserver. Rotação mais suave
   no tablet. **`prefers-reduced-motion` e mobile (≤600px):** sem animação, a cópia some e a
   faixa vira **tira horizontal com swipe manual** (scroll-snap) pra não esticar a página.
   Referência visual: vídeo enviado pelo proprietário (2026-09-07); pedido de "rolagem" em
   2026-09-08 (referência Sunbeam/Grit).
8. **Avaliações** (`#avaliacoes`) — "Quem prova, aprova." Dois blocos, **só com dados reais**:
   (a) nota **5,0** ★★★★★ no Google (sem exibir a contagem de avaliações nem o nome do
   avaliador) + link "Avaliar no Google"; (b) prova social do Instagram — **2.740** seguidores
   em @brookiescafes + botão "Seguir no Instagram". **Sem depoimentos** — nome/texto de
   avaliação individual foi removido em 2026-09-07 e criar depoimentos fictícios foi recusado
   (§15).
9. **Instagram** (`#instagram`) — "Acompanhe a Brookies". @brookiescafes · 2.740 seguidores ·
   33 posts. Grid visual (placeholders elegantes até haver imagens reais). CTA "Seguir no
   Instagram" → https://www.instagram.com/brookiescafes/.
10. **Localização** (`#localizacao`) — "Estamos em Gruta de Lourdes". Endereço (§12), referência
    Praça Genésio de Carvalho, mapa incorporado (Google Maps embed, lazy), botão "Como chegar".
11. **Horário** — card "Quando visitar". Mostrar **"Horário informado: 17h às 22h"** +
    "Consulte o Instagram para confirmar o funcionamento de hoje." **Não afirmar dias da semana.**
12. **CTA final** — **fundo verde profundo** (`.section--verde`; decisão de 2026-09-08). "Seu
    próximo café pode ser aqui." Botões "Como chegar" (dourado sobre o verde) + "Instagram".
13. **Footer** — Brookies Café · ⭐ 5,0 · Brownie • Cookie • Café · 📍 Gruta de Lourdes — Maceió/AL
    · 17h às 22h · @brookiescafes · links internos (Início, Cardápio, Sobre, História,
    Avaliações, Localização, Instagram) · © 2026 Brookies Café. Todos os direitos reservados.
14. **Barra de CTA mobile** — discreta, fixa no rodapé da viewport: "Ver cardápio" / "Como
    chegar". Não pode atrapalhar o conteúdo (respeitar safe-area, sumir junto ao footer).
15. **Voltar ao topo** — botão circular fixo, aparece após rolar ~700px, some perto do topo.
    No mobile fica acima da barra de CTA. Padrão do Grit.

> **Removido em 2026-09-07:** a seção "Os queridinhos da Brookies" (`#produtos`, carrossel de
> destaques) foi retirada a pedido — era redundante com o Cardápio completo logo abaixo.

## 6. Funcionalidades

- Navegação por âncoras com **scroll suave** e **active section** no menu (scroll-spy).
- Header fixo que encolhe/ganha sombra após rolar.
- **Menu mobile** hambúrguer acessível (`aria-expanded`, fecha no `Esc`, trava scroll do body).
- **Filtros de categoria** no cardápio (Brookies/Sobremesas/Bolos/Cafés/Smoothies/Sodas) —
  sem "Todos"; padrão mostra tudo, clicar no filtro ativo limpa.
- **Modal de produto** acessível (foco preso, `Esc`, clique no backdrop, `aria-modal`).
- Dados dos produtos em **arquivo separado** (`assets/js/data.js`), array editável.
- **Mapa incorporado** (iframe Google Maps `output=embed`, `loading="lazy"`).
- Botão **"Como chegar"** → `google.com/maps/dir/?api=1&destination=<endereço>`.
- Links para **Instagram** (@brookiescafes).
- **Animações de entrada** (IntersectionObserver) respeitando `prefers-reduced-motion`.
- Tratamento de **imagem que não carrega** (fallback visual).
- Tema **único** (claro/quente). Sem alternância.
- SEO: `title`, `meta description`, Open Graph, Twitter card, favicon, **JSON-LD**
  `CafeOrCoffeeShop`/`LocalBusiness` só com dados reais.

## 7. Chamadas para ação

- **Primária:** "Ver cardápio" / "Conheça o cardápio" (header + hero) → `#cardapio`.
  **Decisão revisada em 2026-09-05** (antes era "Como chegar").
- **Secundária:** "Como chegar" → Google Maps (hero, localização, CTA final, barra mobile).
- **Terciária:** "Seguir no Instagram" → perfil oficial (seção Instagram, footer).
- **Contextuais:** "Avaliar no Google" (avaliações), "Consulte o Instagram" (horário).
- Distribuir CTAs naturalmente pela página; no máximo 1 primária por seção.

## 8. Informações reais do estabelecimento (fonte principal)

| Campo | Valor |
|---|---|
| Nome | Brookies Café |
| Categoria | Cafeteria |
| Avaliação Google | 5,0 (1 avaliação, sem texto). **No site:** só a nota 5,0 — sem contagem e sem nome do avaliador |
| Endereço | R. Ranildo Cavalcante, 211 — Gruta de Lourdes, Maceió – AL, 57052-610 |
| Referência | Praça Genésio de Carvalho |
| Horário | "17h às 22h" (dias da semana **não informados**) |
| Instagram | https://www.instagram.com/brookiescafes/ · @brookiescafes |
| Bio Instagram | ⭐ Brownie, Cookie e Café ⭐ · 📍 Gruta de Lourdes, Praça Genésio de Carvalho · (17h às 22h) |
| Seguidores / posts | ~2.740 / 33 |
| Telefone | **Não informado — não inventar** |
| WhatsApp / e-mail / delivery / pagamento | **Não informados — não exibir** |
| Website | Não possui (este projeto) |

## 9. Informações que ainda precisam ser definidas

| # | Item | Situação |
|---|------|----------|
| 1 | Dias da semana de funcionamento | Só "17h às 22h" |
| 2 | Cardápio: nomes e **preços** | **Feito** (foto do menu, 2026-09-07) — 8 seções, 32 itens |
| 2a | Cardápio: seções com preço **cortado** no print | Faltam: Salgados Premium/Croissants, Toasts, Salgados da Casa, Bebidas Geladas, Tapiocas |
| 2b | **Fotos reais** dos itens do cardápio | Cards do cardápio seguem com placeholder (a pedido); seções visuais já usam fotos reais |
| 3 | WhatsApp, e-mail, telefone | Não divulgados — campos ocultos |
| 4 | Existe delivery/iFood, formas de pagamento | Desconhecido — não exibir |
| 5 | Fotos reais | **Parcial** (2026-09-07): 25 fotos em `assets/img/fotos/`; 13 já usadas em Hero, Sobre, Experiência, Instagram e "Por que". Faltam: **foto da entrada da loja** (card "Do lado da praça" usa `ph-entrada.svg`); fotos por item do cardápio |
| 5a | Fotos: otimizar (WebP/AVIF + resize) | JPEGs originais ~130–250 KB, ~1170 px de largura; ok, mas dá pra reduzir |
| 6 | Arquivo oficial do **logo** (.svg/.png) | Recebido só como imagem; usar recriação em SVG até chegar o oficial |
| 7 | Depoimentos de clientes (texto) | Nenhum real disponível. Seção usa nota + prova social do Instagram. Criar depoimentos fictícios foi **recusado** (§15). Se a Brookies coletar avaliações reais (Google/Instagram), dá pra montar cards |
| 8 | Link direto da ficha/avaliação no Google Maps | Não fornecido — usar link de busca por nome+endereço |
| 9 | Domínio e hospedagem | **Hospedado** na Vercel (2026-09-09) via GitHub `TH6-alt/brookiescafe` → https://brookiescafe-ten.vercel.app (redeploy automático a cada push). Falta só o **domínio próprio** (ex.: brookiescafe.com.br) — e então trocar canonical/OG/JSON-LD (hoje apontam pro placeholder `brookiescafe.com.br`) |
| 10 | História/tempo de funcionamento da marca | **Proibido inventar** (§15) |
| 11 | Vídeo da história: **legendas (VTT)** para acessibilidade | Player pronto; falta o arquivo de legendas |
| 12 | Vídeo `historia-brookies.mp4` pesa **~26 MB** | Idealmente comprimir (H.264/AAC ~1080p, `-crf 24`) ou hospedar; hoje `preload="none"` evita baixar antes do play |
| 13 | Vídeo do **hero** (`hero-brookies.mp4`, ~2,8 MB) | OK, mas gerar `.webm` (VP9/AV1) e reduzir bitrate melhora ainda mais; avaliar pular o vídeo em conexão lenta |

## 10. Stack técnica

- **HTML5 semântico + CSS3 + JavaScript (ES2020) puro.** Decisão mantida em 2026-09-05 mesmo
  com o briefing sugerindo React/TS/Tailwind (recusado).
- **Sem framework, sem build, sem bundler.** Sem Tailwind/Bootstrap/jQuery.
- CSS próprio com custom properties (tokens do design.md).
- JS modular em arquivos simples: `data.js` (dados) + `main.js` (comportamento). Sem dependências.
- Ícones: SVG inline (sem biblioteca).
- Fontes: Google Fonts via `<link>` com `preconnect` e `display=swap` (self-host é melhoria futura).
- Estrutura de pastas:
  ```
  index.html
  assets/css/styles.css
  assets/js/data.js
  assets/js/main.js
  assets/img/            (logo + placeholders SVG do cardápio)
  assets/img/fotos/      (fotos reais da Brookies)
  assets/video/          (hero-brookies.mp4 = vídeo de abertura; historia-brookies.mp4)
  favicon.svg
  ```
- Hospedagem estática (Netlify / Cloudflare Pages / GitHub Pages) — a definir.

## 11. Regras de responsividade

- **Mobile-first.** Excelente experiência a partir de **~360px**.
- Breakpoints de referência: `≤400` (mobile pequeno), `401–600` (mobile), `601–900` (tablet),
  `901–1200` (desktop), `≥1201` (desktop grande). Container máx. **1200px**; gutter 24px
  (20px ≤600px).
- **CSS Grid / Flexbox**, larguras fluidas, `clamp()` na tipografia.
- Imagens `max-width:100%`, `width`/`height` explícitos, `loading="lazy"` fora da 1ª dobra.
- **Sem rolagem horizontal** de 320px a 1920px. Alvos de toque **≥ 44px**.
- Mobile: nav simplificada, botões grandes, cards empilhados, header compacto, espaçamento
  confortável, barra de CTA inferior discreta.
- Testar em 360, 375, 414, 600, 768, 1024, 1280, 1440.

## 12. Requisitos de acessibilidade (WCAG 2.1 AA)

- Contraste ≥ 4.5:1 (texto normal), ≥ 3:1 (texto grande e ícones significativos).
- HTML semântico (`header/nav/main/section/footer`), headings em ordem, **skip link**.
- **Foco visível** em tudo que é interativo; navegação completa por teclado.
- `<button>` para ações, `<a>` para navegação — nunca `div` clicável.
- Menu e modal: `aria-expanded` / `aria-modal`, foco gerenciado, `Esc` fecha.
- `alt` descritivo em imagens de conteúdo; `alt=""` nas decorativas.
- Respeitar `prefers-reduced-motion`.
- `lang="pt-BR"`; textos de link descritivos.
- Endereço para "Como chegar" e JSON-LD:
  **R. Ranildo Cavalcante, 211 — Gruta de Lourdes, Maceió – AL, 57052-610.**

## 13. Requisitos de desempenho

- **Lighthouse mobile ≥ 90** em Performance, Acessibilidade, Boas Práticas e SEO.
- Core Web Vitals (mobile/4G): LCP < 2,5s · CLS < 0,1 · INP < 200ms.
- Imagens: formato leve (SVG placeholders no cardápio; WebP/AVIF nas reais — hoje JPEG),
  dimensões explícitas, `loading="lazy"` fora da 1ª dobra.
- **Vídeo do hero:** `preload="metadata"` (não bloqueia o carregamento), sem `fetchpriority`;
  o **poster** (`foto-25.jpg`, já com `preload as=image`) é o candidato a LCP e cobre enquanto
  o vídeo carrega ou se não puder tocar. Arquivo ~2,8 MB. Melhoria futura: gerar versão `.webm`
  (VP9/AV1) + reduzir resolução/bitrate; considerar não carregar o vídeo em conexões lentas
  (`navigator.connection`).
- CSS e JS enxutos; JS próprio idealmente < 22KB. Sem libs.
- Fontes: 2 famílias no máximo, `display=swap`, `preconnect`.
- Mapa via iframe com `loading="lazy"`. Sem trackers de terceiros.

## 14. SEO local

- **Title:** `Brookies Café | Brownie, Cookie e Café em Maceió`
- **Meta description:** `Conheça a Brookies Café, em Gruta de Lourdes, Maceió. Brownies, cookies
  e cafés para deixar seu momento ainda mais especial.`
- Open Graph + Twitter card + favicon.
- **JSON-LD** `CafeOrCoffeeShop`: `name`, `address` (real), `sameAs` [Instagram],
  `hasMenu` (#cardapio), `servesCuisine`, `priceRange` "R$ 6–27" (faixa real do cardápio).
  **Sem** `aggregateRating` (só 1 avaliação no Google, sem exibir contagem — decisão de
  2026-09-07), `telephone` nem `openingHours` com dias (dados não confirmados).
- Palavras-alvo: Brookies Café Maceió / Gruta de Lourdes; cafeteria / brownie / cookie / café
  em Maceió AL. Usar naturalmente em headings, alt e texto.

## 15. Não inventar informações (OBRIGATÓRIO)

Proibido inventar: telefone, WhatsApp, e-mail, preços, sabores, recheios, ingredientes,
métodos de produção, fornecedores, história/idade da empresa, nº de funcionários, datas,
avaliações, depoimentos, promoções, delivery, formas de pagamento, dias de funcionamento,
coordenadas geográficas, links que não existam.

Quando faltar dado: deixar o campo preparado para edição (comentário no código + estrutura no
`data.js`) **ou simplesmente não exibir**. Registrar a lacuna em @../memoria.md.

## 16. Escopo

### Dentro
- 1 página `index.html` em PT-BR com as 13 seções da §5.
- Cardápio interativo (filtros + modal), dados em `data.js`, placeholders de imagem trocáveis.
- Mapa incorporado, links Instagram, CTAs de conversão, barra mobile.
- SEO on-page, Open Graph, favicon, JSON-LD com dados reais.
- Recriação do logo em SVG (até chegar o arquivo oficial).
- Deploy estático.

### Fora (esta fase)
- Venda/checkout/pagamento, carrinho, delivery.
- Reservas, agenda de eventos, login/área do cliente.
- Blog, CMS, back-end, banco de dados.
- Multi-idioma, dark mode, PWA/offline, push.
- Integração iFood/PDV/e-mail marketing.
- Criação de identidade de marca definitiva (o site usa o logo existente + direção original do design.md).
- Redação da história real da marca (depende de material do proprietário).
