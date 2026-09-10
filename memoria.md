# memoria.md — Histórico vivo do projeto

Registro só o que ajuda na continuidade: decisões, aprendizados, pendências.
Não registro conversas inteiras. Datas em formato absoluto.

---

## Decisões aprovadas

- **2026-09-05** — Idioma do site: **português do Brasil**, idioma único.
- **2026-09-05** — Direção visual: **misturar as duas referências** — calor, aconchego e serifa
  do template de café + estrutura do gritcoffee.com (faixas full-bleed, blocos grandes
  arredondados, alternância claro/escuro, botão secundário em pill).
- **2026-09-05** — Tipografia: **serifada nos títulos + sans no corpo** → **Fraunces + Inter**.
  Fonte script **descartada** (não usar).
- **2026-09-05** — Stack técnica: **HTML + CSS + JavaScript puro**, sem framework e sem build.
  **Reafirmada na revisão 2**, mesmo com o briefing do site oficial sugerindo React + TS +
  Tailwind + Lucide — recusado.
- **2026-09-05** — Base factual do negócio: perfil público **@brookiescafes** + ficha do Google.
  Usados como referência de **informação**, nunca de identidade visual.
- **2026-09-05** — Criado o cérebro documental: CLAUDE.md, specs/site.md, specs/design.md, memoria.md.

### Revisão 2 — 2026-09-05 (briefing "SITE OFICIAL — BROOKIES CAFÉ")

- **Formato: site de PÁGINA ÚNICA (one-page)** com scroll suave e âncoras.
  **Substitui** a decisão anterior de site multi-páginas (que fica registrada como rejeitada).
  Seções: Header · Hero · Produtos · Cardápio interativo · Sobre · Experiência · Avaliações ·
  Instagram · Localização · Horário · CTA final · Footer · barra de CTA mobile.
- **CTA primária: "Ver cardápio"** (header + hero). **"Como chegar"** passa a **secundária**.
  **Substitui** a decisão anterior ("Como chegar" como primária).
- **Paleta ampliada com as cores do LOGO OFICIAL** (enviado pelo proprietário): base
  creme/chocolate + **verde esmeralda `#1E8A5A` / `#17724A`** e **amarelo-ouro `#F2B134`** como
  acentos de marca; caramelo `#B87945` como acento quente. O "verde-oliva discreto" anterior foi
  substituído pelo verde do logo. Botão primário usa `--cor-verde-escuro`.
- **Endereço corrigido:** **R. Ranildo Cavalcante, 211 — Gruta de Lourdes, Maceió – AL,
  57052-610** (antes só a praça, CEP 57052-620). Praça Genésio de Carvalho vira "referência".
- **Dados novos confirmados:** Google 5,0 com 1 avaliação, autora **Gabriela Morais** (sem texto
  de depoimento — não inventar); Instagram ~2.740 seguidores / 33 posts.
- **Objetivo reformulado:** "transformar visitantes em clientes" + incentivar visita presencial;
  fluxo produto → desejo → confiança → localização → visita. (Compatível com o objetivo antigo.)
- **Negócio:** segue **cafeteria única** — Brookies Café, Gruta de Lourdes, Maceió–AL,
  "Brownie, Cookie e Café", 17h–22h (dias não informados).

- **2026-09-08** — **Paleta re-amostrada do logo oficial** e seções ganharam ritmo
  creme / verde / marrom (variante `.section--verde`). Base creme mantida. Detalhes e hex em
  "Alterações realizadas" e em @specs/design.md §2/§10.

## Decisões rejeitadas

- **2026-09-05** — Seguir **apenas uma** referência (só Grit ou só template de café) — descartado;
  adotada a mistura das duas.
- **2026-09-05** — Tipografia "só sans" e "serif display + script como base" — descartadas.
  Na revisão 2 a **fonte script foi totalmente descartada** (nem como enfeite).
- **2026-09-05** — Stack com framework (Astro / Next.js / React / TypeScript / Tailwind) —
  descartada; inclusive quando o briefing do site oficial (revisão 2) a sugeriu.
- **2026-09-05** — **E-commerce / venda online / entrega / delivery** — fora do escopo.
- **2026-09-05 (revisão 2)** — **Site multi-páginas** (5 páginas: Início, Cardápio, Nossa
  História, Visite, Contato) — **substituído** por site de página única (one-page).
- **2026-09-05 (revisão 2)** — **"Como chegar" como CTA primária** — substituída por
  **"Ver cardápio"**; "Como chegar" agora é secundária.
- **2026-09-05 (revisão 2)** — Endereço "Praça Genésio de Carvalho / CEP 57052-620" como
  endereço principal — corrigido para R. Ranildo Cavalcante, 211 / 57052-610.
- **2026-09-07** — Seção **"Os queridinhos da Brookies"** / carrossel de destaques (`#produtos`)
  — **removida a pedido** logo após ser adicionada; redundante com o Cardápio completo. O
  carrossel como padrão de UI fica descartado nesta fase.
- **2026-09-08** — Galeria "fotos espalhadas" em **"wrap em ~2 linhas" no desktop** —
  **substituída** por **faixa em rolagem contínua (marquee)** a pedido. O swipe manual no mobile
  continua valendo. (Marquee lento com pausa no hover é exceção aprovada em design.md §9, não o
  "carrossel automático rápido" proibido.)
- **2026-09-08** — **Reskin escuro global** (fundo quase-preto/marrom como a arte do logo, tema
  claro invertido) — oferecido junto com o ajuste de cores, **não escolhido**. A base do site
  segue clara (creme).
- **2026-09-08** — Hex antigos dos acentos (`--cor-verde #1E8A5A`, `--cor-ouro #F2B134`,
  `--cor-chocolate #241714`) — substituídos pelos valores re-amostrados do emblema.
- **2026-09-08** — Paleta "acentos = cores do logo" **mantida como intenção**, mas os hex
  antigos (verde `#1E8A5A`, ouro `#F2B134`, chocolate frio `#241714`) **substituídos** pelos
  valores re-amostrados do emblema (`#24A05B` / `#EFC13D` / `#28190F` quente + `--cor-cafe`
  `#3B2417`). Base creme **mantida**. Também rejeitado o "reskin escuro global" (opção que o
  usuário não escolheu).

## Alterações realizadas

- **2026-09-05** — Link `https://gritcoffee.com` salvo em `referencia - site/refs.txt`.
- **2026-09-05** — Criados CLAUDE.md, specs/site.md, specs/design.md e memoria.md.
- **2026-09-05** — Pendentes de limpeza: arquivos vazios legados `CLAUDE.md.txt`,
  `memoria.md.txt` e `specs/design.md.txt` continuam na pasta. Remover após sua confirmação.
- **2026-09-05 (revisão 2)** — CLAUDE.md, specs/site.md e specs/design.md reescritos para
  one-page + CTA "Ver cardápio" + paleta com cores do logo + endereço R. Ranildo Cavalcante, 211.
- **2026-09-05 (revisão 2)** — Construído o site: `index.html`, `assets/css/styles.css`,
  `assets/js/data.js`, `assets/js/main.js`, `assets/img/*.svg` (logo recriado + placeholders),
  `favicon.svg`. Stack HTML/CSS/JS puro, sem build.
- **2026-09-07** — Aprovado: adicionar 4 elementos **adaptados** das referências (execução e
  conteúdo originais, sem cópia): (a) seção **"Por que a Brookies"** — trio de cards estilo
  "Why Choose Us"; (b) **carrossel** nos "queridinhos" estilo "Featured Coffees" (setas, sem
  autoplay); (c) seção **Experiência** virou **faixa full-bleed** com foto + overlay + headline
  centralizada, estilo banners do Grit; (d) botão **"voltar ao topo"**. Recusados: barra de aviso
  no topo, newsletter, e qualquer cópia de texto/layout/cor/logo/foto das referências.
  specs/site.md §5 atualizado (14 → 15 itens de seção).
- **2026-09-07** — A **tira de 3 fotos** abaixo da Experiência virou uma **galeria "fotos
  espalhadas"** (`.scatter-gallery`), a pedido, com base num vídeo de referência do proprietário
  (só consegui extrair 1 frame — sem ffmpeg e o painel de navegador roda oculto, sem play/seek).
  5 fotos (`foto-12/15/24/08/13`), cada uma com `--rot` inline; moldura branca + sombra; hover
  levanta/endireita/traz pra frente; entrada em stagger (IntersectionObserver + rede de
  segurança). Removido o CSS antigo `.experience*`. **A confirmar** se o comportamento bate com
  o vídeo (hover/scroll/animação que não pude ver).
- **2026-09-07** — Galeria "fotos espalhadas" ampliada de 5 → **8 fotos** (add `foto-02/09/22`).
  Mobile deixou de ser 2/linha e virou **tira horizontal com swipe** (scroll-snap) pra não
  esticar a página com 8 itens. (O pedido veio junto de um texto colado do briefing do vídeo do
  hero — que já estava feito; ignorado essa parte.)
- **2026-09-08** — Galeria "fotos espalhadas" no desktop/tablet virou **faixa em rolagem
  contínua (marquee)**, a pedido (referência: prints do Sunbeam/Grit — fileira de fotos que
  desliza). **Substitui** a decisão "wrap em ~2 linhas no desktop" (fica registrada como
  rejeitada). Como implementei: `.scatter-marquee` (`overflow: clip` + mask nas bordas) >
  `.scatter-marquee__track` (flex, `animation: scatter-scroll 55s linear infinite`,
  `translateX(0 → -50%)`) > 2× `.scatter-gallery` (o 2º `<ul>` é clonado por `main.js`,
  `aria-hidden`, `alt=""`, já `.is-in`). Loop **sem emenda** garantido pondo `padding-right:
  var(--sc-gap)` em cada `<ul>` (unidade = ul + gap; -50% = 1 unidade exata — verificado:
  `half 1879px` vs `unit 1878px`). **Pausa no `:hover`/`:focus-within`**; `main.js` também pausa
  a animação quando a seção sai da viewport (IntersectionObserver). **`prefers-reduced-motion`
  e mobile (≤600px):** `animation: none`, a cópia some (`display:none`) e a faixa vira **swipe
  manual** (`overflow: auto hidden` + scroll-snap) — comportamento aprovado antes p/ mobile,
  preservado. Sem rolagem horizontal na página (track de ~3,8 m contido pelo `overflow: clip`).
  specs/site.md §5 item 7 e design.md §9 atualizados. Sem alteração no `data.js`.
- **2026-09-08** — **Paleta alinhada ao logo oficial**, a pedido (opção escolhida: "mais
  presença de verde/marrom"). Duas partes:
  1. **Tokens re-amostrados** em `:root` (`styles.css`) pra bater com o emblema:
     `--cor-verde` `#1E8A5A → #24A05B`; `--cor-ouro` `#F2B134 → #EFC13D`;
     `--cor-chocolate` `#241714 → #28190F` (marrom quente, não mais quase-azulado);
     `--cor-cafe` `#4A2C24 → #3B2417` (marrom do aro); `--cor-ouro-suave` `#F6D18A → #F6D89E`.
     Novo token `--cor-verde-fundo` `#0F5C3A`. `--cor-verde-escuro`/`--cor-caramelo*`/base creme
     **inalterados**. `.btn--primary:hover` deixou de usar `--cor-verde` (ficou claro demais p/
     texto branco) e passou a `#1C7C48`.
  2. **Ritmo de seções** (creme / verde / marrom): nova variante **`.section--verde`**
     (fundo `--cor-verde-fundo`, texto claro, eyebrow/links dourados, botão primário **dourado**
     — verde+ouro = o emblema). Aplicado: **#por-que → verde**, **#historia → marrom**
     (era `--tint`), **#instagram → marrom** (já era, agora mais quente), **#final-cta → verde**
     (era `--dark`). `.hero::after` agora faz o fade pro verde de `#por-que`.
  3. **SVGs da marca** (`logo.svg`, `favicon.svg`, `og.svg`) recoloridos pros mesmos hex.
  Contraste verificado (AA): título/verde 7,7:1 · corpo/verde 4,7:1 · eyebrow dourado/verde
  5,1:1 · botão primário base 5,7:1 · botão dourado/CTA 10:1 · texto/marrom 10,8:1. Sem erros
  de console. specs/design.md §2 e §10 + specs/site.md §5 (itens 3, 6, 12) atualizados.
  Sem alteração no `data.js`.
- **2026-09-09** — **Site publicado na Vercel** via GitHub. Repo:
  **`github.com/TH6-alt/brookiescafe`** (branch `main`; `referencia - site/` fora por `.gitignore`).
  URL de produção: **https://brookiescafe-ten.vercel.app** (time Vercel `th6`, plano hobby).
  Todo `git push` no `main` redeploya sozinho. Verificado no ar: HTML/CSS/JS, as 25 fotos, os
  SVGs e **os 2 vídeos** (`hero-brookies.mp4` toca no hero; `historia-brookies.mp4` = 200/206);
  32 itens do cardápio, 6 tiles do Instagram, galeria marquee (8+8), seção verde `#0F5C3A`.
  Notas: (a) o `deploy_to_vercel`/`create_git_project` do MCP não funcionou aqui (token sem
  acesso aos projetos do time — criou 2 projetos fantasma `brookies-cafe`/`brookiescafe` que o
  dono deve apagar no painel); o deploy que vingou foi **import manual no painel da Vercel**.
  (b) `index.html` ainda tem `canonical`/`og:image`/JSON-LD apontando pro domínio placeholder
  `brookiescafe.com.br` — trocar pela URL real (ou pelo domínio final) — ver TODO no `<head>`.
  (c) `/favicon.ico` dá 404 cosmético (o site só tem `favicon.svg`); opcional adicionar um
  `.ico` ou um `<link rel="icon" sizes>` extra.
- **2026-09-10** — **Polimento "premium" (itens 3, 4 e 5 da lista de sugestões).**
  - **3 · LQIP** nas fotos reais: amostrei a cor dominante das 16 fotos usadas (via canvas no
    navegador) e pus como `background-color` inline em cada `<img class="photo">` (HTML) e em
    cada entrada de `instagramGrid` (`data.js`, campo `color`). CSS: `.js img.photo{opacity:0}`
    → `main.js` põe `.is-loaded` no `load` → revela em .55s por cima do tom quente.
    `prefers-reduced-motion`/sem-JS = aparece direto. **Não** foi feito WebP/AVIF/`srcset` (sem
    ffmpeg/imagemagick/node no ambiente) — segue como pendência §9 #5a.
  - **4 · Tipografia maior + números editoriais.** Escala ampliada em `:root`
    (`--fs-display` 4→4.75rem, `--fs-h1` 2.75→3.1, `--fs-h2` 2.125→2.55, `--fs-h3` 1.375→1.4);
    títulos com `line-height`/`letter-spacing` mais apertados; `.hero__title` `-.028em`/1.02.
    Novo: **número de capítulo** em cada `.section-head` via `counter(chapter, decimal-leading-
    zero)` no `::before` (Fraunces itálico, marca d'água — caramelo .16 no claro / ouro .22 no
    escuro). Numerados 01…07: Por que, Cardápio, Sobre (ganhou um `.section-head` p/ entrar na
    contagem), História, Avaliações, Instagram, Localização. Hero/Experiência/CTA sem número.
    design.md §3 atualizado.
  - **5 · Acabamento.** `::selection` (ouro-suave/chocolate), scrollbar estilizada
    (`scrollbar-color` + `::-webkit-scrollbar*`), `caret-color`, `:focus-visible` redesenhado
    (anel `--cor-verde-escuro` 2px + offset 3px + raio 6px; dourado sobre fundo escuro/hero/
    footer). Nova **`404.html`** de marca (logo + Fraunces + botões, `noindex`, usa o
    `styles.css`; a Vercel serve em rota desconhecida). Favicon completo: `favicon.ico` (32px),
    `apple-touch-icon` `icon-180.png`, `icon-192/512.png` + `site.webmanifest` — todos gerados
    do `favicon.svg` por canvas no navegador (sem ferramenta de imagem). `<head>` do
    `index.html` com os `<link>` novos (paths root-absolutos). Mata o 404 de `/favicon.ico`.
  Verificado local (1270/390px): sem overflow horizontal, 7 números de capítulo sem colisão
  (Instagram: gap 64px p/ `.ig-stats`), hero 76px / h2 40,8px no desktop, 404 renderiza,
  todos os ícones/manifest 200, sem erro de console. `styles.css`, `index.html`, `main.js`,
  `data.js` alterados; `404.html` + `site.webmanifest` + 5 ícones criados.
- **2026-09-10** — **Correção:** os `<h3>` dos cards de "Por que a Brookies"
  ("Café fresquinho" / "Doce artesanal" / "Do lado da praça") estavam **creme sobre card creme**
  (invisíveis). Causa: a regra `.section--verde h2, h3 { color: creme }` (da paleta de 2026-09-08)
  também atinge os `h3` dentro dos `.feature-card` claros. Fix: reasserção
  `.section--dark/--verde .feature-card h3` (e `.proof-card h2/h3`) → `--cor-chocolate`.
  Lição: regras de "título claro" em seção escura precisam excluir os cards de superfície clara.
- **2026-09-07** — Adicionada **foto no topo dos 3 cards** da seção "Por que a Brookies":
  Café fresquinho → `foto-01` (cappuccino), com `object-position: center 82%` pra o corte 16:10
  focar na xícara (o padrão pegava só a madeira do meio); Doce artesanal → `foto-06` (brownie); Do lado da
  praça → placeholder `assets/img/ph-entrada.svg` (o proprietário vai enviar a foto da entrada
  da loja — trocar o arquivo). Novo `.feature-card__media` (16:10, cover, hover zoom leve).
- **2026-09-07** — Removido o filtro **"Todos"** do cardápio, a pedido. Agora: sem filtro ativo
  na carga (mostra os 32 itens); clicar num filtro filtra; clicar de novo no filtro ativo limpa
  (mostra tudo). `applyFilter` em `main.js` virou toggle (`activeCat`). site.md §5/§6 atualizados.
- **2026-09-07** — **Hero virou vídeo de abertura em background.** Arquivo do proprietário →
  `assets/video/hero-brookies.mp4` (~2,8 MB, **vertical 720×1280**). `<video autoplay muted loop
  playsinline preload="metadata">` sem controles, `object-fit: cover`, poster/fallback =
  `assets/img/fotos/foto-25.jpg` (também fundo do `.hero__bg`). Camadas: vídeo → overlay em
  gradiente → conteúdo (z-index) → `::after` que faz o fade pro creme da próxima seção. Hero
  ~88/82/78vh (desktop/tablet/mobile), `min-height` (cresce se o conteúdo pedir). Conteúdo
  (headline, lead, CTAs, selos) preservado; texto branco/creme sobre o vídeo; entrada com
  `.reveal` + rede de segurança em JS. Novo: indicador **"Role para explorar"** → `#por-que`.
  `prefers-reduced-motion`: JS esconde o vídeo (fica o poster). Removido o layout antigo de 2
  colunas do hero (`.hero__grid`/`.hero__media`/`.hero__badge`) e o CSS morto de `.bean`.
  Adicionado `scroll-margin-top` nas âncoras (estava só no design.md). specs/site.md §2, §10,
  §13 e design.md §9 atualizados. Pendência: gerar `.webm` + reduzir bitrate do vídeo.
- **2026-09-07** — Seção **Avaliações** reformulada. Removidos, a pedido: o card com o nome
  **Gabriela Morais** e a **contagem de avaliações** ("1 avaliação"). Pedido de **criar
  depoimentos fictícios foi RECUSADO** (avaliações falsas num site real; contraria §15 e a
  honestidade básica). No lugar: bloco de **prova social real** — nota 5,0 ★ no Google (sem
  contagem/nome) + "2.740 seguidores em @brookiescafes" + botões "Avaliar no Google" e "Seguir
  no Instagram". Também removido o `aggregateRating` do JSON-LD (1 avaliação não é agregado) e os
  campos mortos `reviewerName`/`ratingCount` de `data.js` + chaves `reviewer*` de `main.js`.
  A decisão "não inventar depoimentos" (§15) **permanece firme**.
- **2026-09-07** — **Fotos reais** da Brookies adicionadas às seções visuais (NÃO ao cardápio,
  a pedido). 25 fotos do proprietário salvas em `assets/img/fotos/` (`foto-01`..`foto-25`);
  `foto-04` é a foto do menu, ignorada. Usadas 11: Hero = `foto-25`; Sobre = `foto-18`;
  faixa full-bleed da Experiência = `foto-05`; tira da Experiência = `foto-12/15/24`; grade do
  Instagram = `foto-01/10/14/06/13/21`. Como as fotos são todas retrato (celular), ajustei os
  `aspect-ratio` de `.about__media` (3/2 → 4/5) e da `.experience` (x-lg 7/6 → 4/5; x-sm sem
  proporção fixa no desktop). `preload` do hero agora aponta pro JPG. Cards do cardápio seguem
  com placeholder SVG. Pendência: otimizar (WebP/resize) e fotos por item do cardápio.
- **2026-09-07** — **Cardápio real** adicionado a partir da foto do menu: 8 seções, **32 itens
  com preço** em `assets/js/data.js`. Filtros passaram de 4 (Todos/Brownies/Cookies/Cafés) para
  **7**: Todos · Brookies · Sobremesas · Bolos · Cafés · Smoothies · Sodas (cafés quentes+gelados
  juntos; Cookie em Sobremesas). Novo placeholder `assets/img/ph-bebida.svg`. Adicionado
  `priceRange: "R$ 6–27"` no JSON-LD. Aviso do cardápio ajustado (fotos ainda ilustrativas).
  **Fora por ora** (preços cortados no print): Salgados Premium/Croissants, Toasts, Salgados da
  Casa, Bebidas Geladas, Tapiocas — viram pendência §9.
- **2026-09-07** — Removida a pedido a seção **"Os queridinhos da Brookies"** (`#produtos`,
  carrossel de destaques) — considerada redundante com o Cardápio completo logo abaixo.
  Tirados: o `<section id="produtos">`, o bloco do carrossel em `main.js` e os estilos
  `.carousel*` em `styles.css`. `#por-que` deixou de ser `section--tint` (agora `section`) para
  manter a alternância de fundos. Isso **reverte** o item (b) da adição de 2026-09-07 (carrossel).
  site.md §5 → 15 itens.
- **2026-09-07** — Aprovado: nova seção **"História"** (`#historia`, entre Sobre e Experiência)
  com o **vídeo real** enviado pelo proprietário → copiado para
  `assets/video/historia-brookies.mp4` (~26 MB). Player HTML nativo: `controls`, sem autoplay,
  `preload="none"`, poster `assets/img/ph-historia.svg`. "História" entrou na nav (7 itens) e no
  footer. Texto de apoio **sem fatos inventados**. site.md §5 → 16 itens; pendências §9 +2
  (legendas VTT; comprimir o vídeo).

## Problemas encontrados

- **2026-09-05** — Instagram não permite leitura completa sem login. Só a **bio pública** foi
  confirmada: nome (Brookies Café), conceito ("⭐ Brownie, Cookie e Café ⭐"), localização
  ("📍 Gruta de Lourdes, Praça Genésio de Carvalho"), horário ("17h às 22h"), link de mapa,
  ~2.755 seguidores.
- **2026-09-05** — O link de mapa da bio aponta para a **praça** (espaço público), não para uma
  ficha de empresa. Sem telefone, site ou horário por dia da semana oficiais. Google confirma o
  endereço/CEP e que a praça é ponto de encontro de ciclistas, tem playground e permite cães.
- **2026-09-05** — Cardápio e preços **não estão publicados** de forma estruturada. Menção a
  "gelato/pastries" apareceu em busca automática, mas **não confirmada**.

## Soluções aplicadas

- **2026-09-05** — Dados não confirmados marcados como `[A DEFINIR]` em specs/site.md; nada foi
  inventado.
- **2026-09-05** — Endereço oficial adotado a partir do Google:
  **Praça Genésio de Carvalho — Gruta de Lourdes, Maceió – AL, CEP 57052-620.**
- **2026-09-05** — Identidade visual tratada como **original** e documentada em design.md,
  independente da marca de referência e sem cópia do gritcoffee.com.

## Pendências

Lista completa e rastreável em **specs/site.md → seção 9**. Resumo:

1. Dias da semana de funcionamento (site mostra só "17h às 22h" + "confirme no Instagram").
2. Cardápio real: nomes, descrições, **preços** e **fotos**. Hoje: nomes genéricos, sem preço
   ("Sob consulta"), placeholders de imagem. Editar em `assets/js/data.js`.
3. **Arquivo oficial do logo** (.svg/.png) — recebido só como imagem; site usa recriação em SVG.
4. **Fotos reais** (produtos, ambiente, experiência) e **vídeo da história** — trocar os
   placeholders em `assets/img/`.
5. Texto da avaliação da **Gabriela Morais** e link direto da ficha no Google (não fornecidos).
6. Contatos (telefone/WhatsApp/e-mail), delivery e formas de pagamento — **ocultos** até confirmar.
7. Texto institucional / história real da marca (seção "Sobre" usa só posicionamento inferido).
8. Domínio e hospedagem.

## Problemas encontrados (revisão 2)

- **2026-09-05** — O briefing do site oficial contradizia 3 decisões aprovadas (stack,
  estrutura multi-páginas, CTA primária). Resolvido com rodada de perguntas → decisões revisadas
  acima. Stack mantida; estrutura e CTA substituídas.
- **2026-09-05** — Logo veio como imagem colada no chat, sem arquivo. Recriado fielmente em SVG
  (`assets/img/logo.svg`) com as cores da marca; substituir pelo oficial quando disponível.
- **2026-09-05** — Sem fotos reais: criado sistema de **placeholder de marca** em SVG, com
  proporção fixa por slot e `alt` real, pronto para troca 1-para-1.

## Próximos passos

1. Você revisa e valida os 4 documentos + o site (`index.html`).
2. Enviar: arquivo oficial do logo, fotos reais, cardápio com preços, dias de funcionamento.
3. Substituir placeholders em `assets/img/` e preencher `assets/js/data.js`.
4. Definir domínio + hospedagem e publicar.
5. Rodar Lighthouse mobile e ajustar o que ficar abaixo de 90.
