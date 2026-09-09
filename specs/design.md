# specs/design.md — Fonte de verdade visual

Última atualização: 2026-09-05 (revisão 2 — cores do logo oficial + one-page)

Identidade visual da **Brookies Café**. É **original**: nada aqui é cópia das referências.
Mudanças exigem minha aprovação (regra de contradição em @../CLAUDE.md); decisões vão para @../memoria.md.

---

## 0. Insumos analisados

- `referencia - site/` — `gritcoffee.com` (captura completa) e template genérico de café.
  Usados só como direção de **estrutura e atmosfera**. **Nada de cópia** de texto, logo, nome,
  imagens ou layout.
- **Logo oficial da Brookies Café** (enviado pelo proprietário): emblema circular estilo
  "selo/carimbo". Anéis concêntricos **marrom-escuro** e **verde**, faixa fina **creme**,
  tipografia do nome em **amarelo-ouro** com contorno alaranjado, **2 estrelas brancas** e
  pontilhado, miolo **verde** com **xícara branca fumegante**. → As cores do logo entram na
  paleta como **acentos de marca** (decisão de 2026-09-05).

**Direção adotada:** calor e serifa do template + estrutura do gritcoffee (faixas full-bleed,
blocos grandes arredondados, alternância claro/escuro, botão secundário em pill), aplicados a
uma cafeteria de **brownie, cookie e café** que abre no **fim da tarde/noite** na Gruta de
Lourdes, Maceió. Site de **página única**.

## 1. Direção visual

Palavras-chave: **artesanal · indulgente · aconchegante · contemporâneo · jovem · editorial**.

A página deve provocar: *"Esse lugar parece muito bom, quero conhecer."* Layout arejado e
editorial, poucas cores, serifa com personalidade nos títulos, leitura tranquila no corpo.
Contraste vem da alternância entre **creme** e **faixas cor de chocolate** — não de bordas
duras nem sombras pesadas. Detalhes premium sutis: textura de papel, grãos de café decorativos,
selos, números grandes, seções levemente assimétricas, cards com profundidade.

**Evitar** aparência de: site corporativo, restaurante genérico, template pronto, franquia,
landing "gritada".

## 2. Paleta

> **Re-amostragem de 2026-09-08:** os acentos de marca foram recalibrados para bater **exatamente**
> com o logo oficial (verde do emblema, dourado, marrom do aro). A base creme foi mantida (é a
> direção editorial aprovada e o aro fino do logo também é creme). Novidade: `--cor-verde-fundo`
> (verde profundo p/ fundo de seção) e a variante `.section--verde`. Ver @../memoria.md.

### Base (fundos e texto)
| Token | Hex | Uso |
|---|---|---|
| `--cor-fundo` | `#F7F0E6` | Fundo padrão (creme) |
| `--cor-fundo-clara` | `#FFF9F1` | Cards, áreas de respiro |
| `--cor-fundo-torrada` | `#EFE4D2` | Faixas claras alternadas, hover sutil |
| `--cor-chocolate` | `#28190F` | Faixas escuras (marrom quase-preto, quente — aro marrom do logo) |
| `--cor-cafe` | `#3B2417` | Marrom médio do aro do logo — superfícies escuras 2ª, gradientes |
| `--cor-texto` | `#3A2A22` | Texto corrido sobre claro |
| `--cor-texto-suave` | `#6E5C4E` | Texto secundário, legendas |
| `--cor-texto-inverso`| `#F7F0E6` | Texto sobre faixa escura |
| `--cor-borda` | `#E3D6C0` | Bordas de 1px sobre claro |
| `--cor-borda-inversa`| `rgba(247,240,230,.24)` | Divisórias sobre escuro |

### Acentos de marca (do logo — re-amostrados 2026-09-08)
| Token | Hex | Papel |
|---|---|---|
| `--cor-verde` | `#24A05B` | **Acento de marca** (verde do emblema): selos, ícones, filetes, realces ≥ 18px/bold |
| `--cor-verde-escuro` | `#17724A` | **Fundo do botão primário** ("Ver cardápio"); contraste AA em texto claro |
| `--cor-verde-fundo` | `#0F5C3A` | **Fundo de seção verde** (`.section--verde`) com texto claro |
| `--cor-ouro` | `#EFC13D` | Estrelas de avaliação, eyebrow/botão sobre seção escura, números-destaque |
| `--cor-ouro-suave` | `#F6D89E` | Fundo de selo claro, sublinhado decorativo, hover do botão dourado |
| `--cor-caramelo` | `#B87945` | Acento quente: links, hover, contorno alaranjado do logo, grãos decorativos |
| `--cor-caramelo-escuro` | `#9C6236` | Hover de links e do caramelo |

### Regras de cor
- **Botão primário:** fundo `--cor-verde-escuro`, texto `--cor-fundo-clara` (contraste ≈ 5,7:1).
  **Exceção:** sobre `.section--verde` o botão primário vira **dourado** (`--cor-ouro` + texto
  `--cor-chocolate`) — verde + ouro = o emblema; verde sobre verde não separa.
- **Botão secundário:** contorno (pill), sem preenchimento.
- **Links de texto:** `--cor-caramelo-escuro` sobre claro; sublinhado com offset. Sobre seção
  escura (`--dark`/`--verde`): `--cor-ouro`.
- **Ouro** nunca em texto pequeno sobre creme (contraste baixo) — só em ícones, estrelas,
  números ≥ 24px/bold, ou sobre marrom/verde escuro.
- **Verde vivo** (`--cor-verde`) em texto só ≥ 18px/bold ou sobre superfície escura.
- Foto com texto por cima → overlay `--cor-chocolate` a **45–60%** (gradiente).
- Alvos de contraste: `--cor-texto`/`--cor-fundo` ≥ 7:1 · `--cor-texto-inverso`/`--cor-chocolate`
  ≥ 10:1 · texto claro/`--cor-verde-fundo` ≥ 4,5:1 (verificado: corpo 4,7:1, títulos 7,7:1).

## 3. Tipografia

Direção: **serifada contemporânea nos títulos + sans moderna no corpo**. Máx. **2 famílias**.

| Papel | Família | Fallback | Pesos |
|---|---|---|---|
| Títulos / display / preços | **Fraunces** (`opsz` alto) | `"Playfair Display", Georgia, serif` | 400, 500, 600, 600 italic |
| Corpo / interface / botões / categorias | **Inter** | `system-ui, "Segoe UI", Roboto, Arial, sans-serif` | 400, 500, 600, 700 |

- Títulos: Fraunces 500–600, `letter-spacing: -0.01em`, `line-height` 1.05–1.15. Itálico da
  Fraunces permitido em uma palavra de destaque na headline.
- Corpo: Inter 400, `line-height` 1.6, medida 60–75 caracteres.
- **Eyebrow/rótulo de seção:** Inter 700, caixa alta, `letter-spacing: .12em`, 0.8125rem,
  cor `--cor-caramelo-escuro` ou `--cor-verde`.
- **Preço:** Fraunces 600; quando não confirmado, exibir "Sob consulta" em Inter 500
  `--cor-texto-suave` (nunca inventar valor).
- **Categoria (tag do card):** Inter 600, caixa alta, 0.75rem, chip com `--raio-pill`.
- Sem serifa em blocos longos. Sem caixa alta em parágrafos. Sem fonte script (não usar).

### Escala (base 16px, fluida com `clamp()`)
| Token | Desktop | Mobile |
|---|---|---|
| `--fs-display` | 4rem | 2.4rem |
| `--fs-h1` | 2.75rem | 2rem |
| `--fs-h2` | 2.125rem | 1.6rem |
| `--fs-h3` | 1.375rem | 1.2rem |
| `--fs-body-lg` | 1.125rem | 1.0625rem |
| `--fs-body` | 1rem | 1rem |
| `--fs-small` | 0.875rem | 0.875rem |
| `--fs-eyebrow` | 0.8125rem | 0.8125rem |

Ex.: `--fs-display: clamp(2.4rem, 1.2rem + 5vw, 4rem);`

## 4. Espaçamentos

Escala base **4px**: `4 8 12 16 24 32 48 64 96 128` → `--space-1 … --space-10`.

- Padding vertical de seção: **clamp(64px, 8vw, 112px)**.
- Container: máx. **1200px**; gutter 24px (20px ≤ 600px).
- Título de seção → subtítulo: 12–16px. Bloco de texto → CTA: 24–32px.
- Grade de cards: gap 24px (desktop) / 16px (mobile).
- Faixas full-bleed encostam na viewport; conteúdo respeita o container.
- `scroll-margin-top` nas âncoras = altura do header + 16px.

## 5. Bordas e raios

| Token | Valor | Uso |
|---|---|---|
| `--raio-sm` | 10px | Inputs, chips, tags |
| `--raio-md` | 18px | Cards, imagens de card |
| `--raio-lg` | 28px | Blocos de imagem grandes, faixas arredondadas, modal |
| `--raio-pill` | 999px | Botão secundário, selos, filtros |

Bordas: 1px `--cor-borda` (claro) / `--cor-borda-inversa` (escuro). Divisória = filete de 1px.
Sem bordas grossas decorativas.

## 6. Botões

Estados obrigatórios: **normal, hover, active, focus-visible, disabled**. Altura ≥ 44px.
Ícone SVG opcional à esquerda (café, seta, mapa, Instagram). Transição 150–200ms.

**Primário — "Ver cardápio" / "Conheça o cardápio"**
- Fundo `--cor-verde-escuro`; texto `--cor-fundo-clara`; Inter 600; `--raio-md`; padding 14×26.
- Hover: `--cor-verde` + `translateY(-1px)` + sombra quente.
- Active: `translateY(0)`. Focus: `outline: 2px solid --cor-chocolate; outline-offset: 3px`.

**Secundário — "Como chegar"**
- Fundo transparente; borda 1.5px `--cor-chocolate` (ou `--cor-texto-inverso` sobre escuro);
  texto na cor da borda; `--raio-pill`; mesmo padding.
- Hover: preenche com a cor da borda a 10%.

**Terciário — "Seguir no Instagram" / "Avaliar no Google"**
- Link com ícone; texto `--cor-caramelo-escuro`; sublinhado animado (`text-underline-offset: 4px`).

Regra: **1 botão primário por seção**. "Ver cardápio" é sempre primário.

## 7. Cards

- Fundo `--cor-fundo-clara`; borda 1px `--cor-borda`; `--raio-md`.
- Sombra quente discreta:
  `0 1px 2px rgba(36,23,20,.06), 0 12px 32px rgba(36,23,20,.07)`.
- Padding 20–24px. Hover: `translateY(-3px)` + sombra maior + imagem com `scale(1.04)` (overflow
  hidden), 200ms.
- **Card de produto:** imagem topo (aspect 4:3, `--raio-md` nos cantos superiores), chip de
  categoria sobre a imagem, nome em Fraunces 600, descrição curta em `--cor-texto-suave`,
  linha de preço (valor ou "Sob consulta"), botão "Ver detalhes" (abre modal).
- **Card de selo/atributo:** ícone `--cor-verde` + rótulo curto; fundo `--cor-ouro-suave` a 40%
  ou `--cor-fundo-torrada`; `--raio-pill`.
- **Card de avaliação:** aspas decorativas, 5 estrelas `--cor-ouro`, nome da autora, rótulo
  "Avaliação no Google" (sem texto inventado), selo Google discreto.

## 8. Fotografia e placeholders

**Direção (para as fotos reais):** luz de fim de tarde / golden hour, tons quentes, sombras
suaves. Close de brownie (textura, migalha, brilho), cookie recém-saído, café com crema e vapor.
Mãos, mesa posta, ambiente aconchegante, encontro entre amigos. Registro artesanal e real,
**não** publicitário nem "stock". Produto descentralizado, respiro generoso, aspecto quente.

**Enquanto não há fotos:** sistema de **placeholder de marca** — retângulo com gradiente
`--cor-caramelo → --cor-chocolate`, textura de papel sutil, ícone de linha (xícara / brownie /
cookie) em creme, e rótulo pequeno em caixa alta ("FOTO — BROWNIE"). Todos com `--raio-md`,
proporção fixa por slot, `alt` descritivo real, e comentário no HTML indicando o arquivo a
substituir. Trocar placeholder = trocar arquivo em `assets/img/`. **Nunca** usar foto aleatória
que não represente a marca.

Slots: hero (4:5 grande), 3 produtos (4:3), 2–3 ambiente (3:2 / 1:1), 3 experiência,
6 Instagram (1:1).

## 9. Movimento e animações

- **Entrada:** fade + subida de 12–16px ao entrar na viewport (IntersectionObserver), 500–700ms,
  `ease-out`, uma vez. Stagger ~80ms entre cards de uma grade.
- **Hover card:** `translateY(-3px)` + sombra + leve zoom da imagem, 200ms.
- **Header:** encolhe e ganha sombra após 60–80px de scroll.
- **Modal:** fade do backdrop + subida/scale sutil do painel, 200ms.
- **Botões:** transição de cor/elevação; nada de bounce exagerado.
- Parallax **opcional** ≤ 12px em imagem de faixa (pode ser cortado).
- **Vídeo de abertura do hero** (exceção aprovada em 2026-09-07): vídeo em background,
  **sempre `muted`**, `loop`, `playsinline`, decorativo (`aria-hidden`), sem controles. Overlay
  em gradiente garante contraste. Com `prefers-reduced-motion: reduce` o vídeo é **escondido**
  (fica o poster) e a seta do indicador de scroll para de animar. O protagonismo é do vídeo — o
  conteúdo entra só com o fade/translate padrão, sem outros efeitos concorrentes.
- **Galeria "fotos espalhadas" em rolagem contínua** (marquee, exceção aprovada em 2026-09-08):
  a faixa de fotos abaixo da Experiência anda **devagar** (~55s por volta, `linear`, `translateX`
  em compositor) da direita p/ a esquerda no desktop/tablet. **Obrigatório:** pausar no
  `:hover`/`:focus-within`, fade nas bordas, e **parar** com `prefers-reduced-motion` e no mobile
  (onde vira swipe manual). A animação também pausa quando a seção sai da viewport. É lenta e
  contemplativa — **não** é o "carrossel automático rápido" proibido abaixo.
- **`@media (prefers-reduced-motion: reduce)`**: desliga fade, parallax, zoom, o vídeo do hero, a
  rolagem da galeria de fotos e transições não essenciais; conteúdo aparece imediatamente.
- **Nunca:** carrossel automático rápido, texto "digitando", splash screen, loop infinito
  distrativo, **autoplay de vídeo com som**, pop-up de entrada.

## 10. Layout desktop × mobile

**Desktop (≥ 901px)**
- Grade de 12 colunas no container 1200px. Faixas full-bleed com foto + overlay + texto.
- Seções alternam claro e escuro: `--cor-fundo` / `--cor-fundo-torrada` (`.section--tint`) nos
  blocos claros; `--cor-chocolate` (`.section--dark`, marrom) e `--cor-verde-fundo`
  (`.section--verde`) nos blocos escuros, ambos com texto claro (2026-09-08). Ritmo atual:
  Por que = **verde** · História e Instagram = **marrom** · CTA final = **verde** · Footer =
  marrom; as demais no creme. Nunca dois blocos escuros colados sem um claro entre eles.
- Produtos 3 col.; experiência em composição editorial assimétrica; Instagram 6 col.
- Header horizontal: logo à esquerda, nav ao centro/direita, CTA "Ver cardápio" à direita.

**Mobile (≤ 600px, ótimo a partir de 360px)**
- Uma coluna; imagem acima do texto; cards empilhados.
- Botões largura total até 420px; alvos ≥ 44px.
- Header compacto: logo + hambúrguer; menu em painel/overlay acessível.
- `--fs-*` variante mobile; padding de seção reduzido.
- **Barra de CTA inferior** fixa e discreta ("Ver cardápio" / "Como chegar"), com
  `padding-bottom: env(safe-area-inset-bottom)`, some ao chegar no footer, não cobre conteúdo
  (adicionar `padding-bottom` equivalente ao `<main>` no mobile).
- Mapa incorporado com altura menor.

## 11. Elementos a evitar

- Preto puro `#000`, cinzas frios, azul/roxo saturado, verde-menta neon.
- Sombras duras, "glow", bordas duplas, gradientes berrantes.
- Serifa em blocos longos; caixa alta em parágrafos; qualquer fonte script.
- Ícones 3D, emojis como ícones de UI (emoji só nos "selos rápidos" textuais do hero/footer,
  conforme briefing), stock corporativo.
- Copiar cor exata, layout, logo, nome ou fotos do gritcoffee.com ou do template.
- Mais de 1 CTA primária concorrendo por seção.
- Autoplay com som; pop-up de entrada; barra mobile cobrindo conteúdo.
