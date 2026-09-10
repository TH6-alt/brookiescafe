/* ==========================================================================
   Brookies Café — dados do site  (editável, sem build)
   Define window.BROOKIES. Carregado antes de main.js.
   --------------------------------------------------------------------------
   COMO EDITAR
   - Nomes e preços vieram da FOTO do cardápio da Brookies Café (2026-09-07).
     Preços em reais (número inteiro): price: 15  =>  "R$ 15,00".
   - price: null  =>  o site mostra "Sob consulta".
   - Imagem: todas usam placeholder de marca em assets/img/. Troque pelo arquivo
     da foto real mantendo o caminho, ou aponte "image" para o novo arquivo.
   - Ainda FALTAM (preços cortados no print): Salgados Premium / Croissants,
     Toasts, Salgados da Casa, Bebidas Geladas, Tapiocas.
   - Não afirmar nada que não esteja no cardápio (sabores, métodos, etc.).
   ========================================================================== */
(function () {
  "use strict";

  var ENDERECO_TXT = "R. Ranildo Cavalcante, 211 - Gruta de Lourdes, Maceió - AL, 57052-610";

  window.BROOKIES = {
    info: {
      nome: "Brookies Café",
      tagline: "Brownie, Cookie e Café",
      ratingValue: 5.0,
      horarioTexto: "17h às 22h",
      endereco: {
        linha1: "R. Ranildo Cavalcante, 211",
        bairro: "Gruta de Lourdes",
        cidade: "Maceió",
        uf: "AL",
        cep: "57052-610",
        referencia: "Praça Genésio de Carvalho"
      },
      instagram: {
        url: "https://www.instagram.com/brookiescafes/",
        user: "@brookiescafes",
        seguidores: "2.740",
        posts: "33"
      },
      // Links do Google Maps montados a partir do endereço (sem coordenadas inventadas).
      mapsDir: "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ENDERECO_TXT),
      mapsSearch: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Brookies Café, " + ENDERECO_TXT),
      mapsEmbed: "https://www.google.com/maps?q=" + encodeURIComponent(ENDERECO_TXT) + "&z=16&output=embed"
    },

    // Rótulos de categoria usados nos filtros e nos cards.
    categorias: [
      { id: "todos", label: "Todos" },
      { id: "brookies", label: "Brookies" },
      { id: "sobremesas", label: "Sobremesas" },
      { id: "bolos", label: "Bolos" },
      { id: "cafes", label: "Cafés" },
      { id: "smoothies", label: "Smoothies" },
      { id: "sodas", label: "Sodas" }
    ],

    // Itens e preços da foto do cardápio (2026-09-07). price em R$ (inteiro).
    produtos: [
      /* --- Brookies Clássico da Casa (brownie + cookie juntos, servido quentinho) --- */
      {
        id: "brookies-tradicional",
        nome: "Brookies Tradicional",
        categoria: "brookies",
        resumo: "Brownie + cookie juntos, servidos quentinhos.",
        descricao: "O clássico da casa: brownie e cookie assados juntos e servidos quentinhos.",
        image: "assets/img/ph-brownie.svg",
        alt: "Brookies Tradicional da Brookies Café (foto ilustrativa)",
        price: 15
      },
      {
        id: "brookies-com-caldas",
        nome: "Brookies com Caldas",
        categoria: "brookies",
        resumo: "Servido quentinho, com calda à escolha.",
        descricao: "O brookies quentinho com calda de Nutella, White Cream ou Pistache.",
        image: "assets/img/ph-brownie.svg",
        alt: "Brookies com caldas da Brookies Café (foto ilustrativa)",
        price: 17
      },
      {
        id: "brookies-com-sorvete",
        nome: "Brookies com Sorvete de Creme",
        categoria: "brookies",
        resumo: "O brookies quentinho com sorvete de creme.",
        descricao: "Brownie + cookie quentinhos servidos com uma porção de sorvete de creme.",
        image: "assets/img/ph-brownie.svg",
        alt: "Brookies com sorvete de creme da Brookies Café (foto ilustrativa)",
        price: 25
      },

      /* --- Sobremesas da Casa (Brookies no Pote + Wafle + Cookie) --- */
      {
        id: "pote-brookies-coffee",
        nome: "Brookies Coffee (no pote)",
        categoria: "sobremesas",
        resumo: "Pedaços de brookies, mousse de café e ganache de chocolate.",
        descricao: "Brookies no pote: pedaços de brookies, mousse de café e ganache de chocolate.",
        image: "assets/img/ph-vitrine.svg",
        alt: "Brookies no pote sabor coffee da Brookies Café (foto ilustrativa)",
        price: 17
      },
      {
        id: "pote-cheesecake",
        nome: "Cheesecake (no pote)",
        categoria: "sobremesas",
        resumo: "Pedaços de brookies, mousse de cream cheese e geleia de morango.",
        descricao: "Brookies no pote: pedaços de brookies, mousse de cream cheese e geleia de morango.",
        image: "assets/img/ph-vitrine.svg",
        alt: "Brookies no pote sabor cheesecake da Brookies Café (foto ilustrativa)",
        price: 17
      },
      {
        id: "pote-escocesa",
        nome: "Escocesa (no pote)",
        categoria: "sobremesas",
        resumo: "Pedaços de brookies, mousse de doce de leite e ganache de chocolate.",
        descricao: "Brookies no pote: pedaços de brookies, mousse de doce de leite e ganache de chocolate.",
        image: "assets/img/ph-vitrine.svg",
        alt: "Brookies no pote sabor escocesa da Brookies Café (foto ilustrativa)",
        price: 17
      },
      {
        id: "wafle-americano",
        nome: "Wafle Americano com Morango e Calda",
        categoria: "sobremesas",
        resumo: "Wafle americano com morango e calda.",
        descricao: "Wafle americano servido com morango e calda.",
        image: "assets/img/ph-vitrine.svg",
        alt: "Wafle americano com morango da Brookies Café (foto ilustrativa)",
        price: 25
      },
      {
        id: "cookie-da-casa",
        nome: "Cookie da Casa",
        categoria: "sobremesas",
        resumo: "Massa de baunilha e muito chocolate.",
        descricao: "Cookie da casa: massa de baunilha e muito chocolate.",
        image: "assets/img/ph-cookie.svg",
        alt: "Cookie da casa da Brookies Café (foto ilustrativa)",
        price: 16
      },

      /* --- Bolos da Casa --- */
      {
        id: "bolo-cenoura-ganache",
        nome: "Bolo de Cenoura com Ganache",
        categoria: "bolos",
        resumo: "Bolo da casa.",
        descricao: "Bolo de cenoura com cobertura de ganache.",
        image: "assets/img/ph-vitrine.svg",
        alt: "Bolo de cenoura com ganache da Brookies Café (foto ilustrativa)",
        price: 17
      },
      {
        id: "bolo-milho-goiabada",
        nome: "Bolo de Milho com Goiabada",
        categoria: "bolos",
        resumo: "Bolo da casa.",
        descricao: "Bolo de milho com goiabada.",
        image: "assets/img/ph-vitrine.svg",
        alt: "Bolo de milho com goiabada da Brookies Café (foto ilustrativa)",
        price: 17
      },
      {
        id: "bolo-fit-da-casa",
        nome: "Bolo Fit da Casa",
        categoria: "bolos",
        resumo: "Versão fit, receita da casa.",
        descricao: "Bolo fit da casa.",
        image: "assets/img/ph-vitrine.svg",
        alt: "Bolo fit da casa da Brookies Café (foto ilustrativa)",
        price: 16
      },

      /* --- Cafés Quentes --- */
      {
        id: "cafe-coado",
        nome: "Café Coado",
        categoria: "cafes",
        resumo: "Café coado na hora.",
        descricao: "Café coado na hora.",
        image: "assets/img/ph-cafe.svg",
        alt: "Café coado da Brookies Café (foto ilustrativa)",
        price: 6
      },
      {
        id: "expresso-curto",
        nome: "Expresso Curto",
        categoria: "cafes",
        resumo: "Shot curto de espresso.",
        descricao: "Espresso curto.",
        image: "assets/img/ph-cafe.svg",
        alt: "Expresso curto da Brookies Café (foto ilustrativa)",
        price: 8
      },
      {
        id: "curto-especial",
        nome: "Curto Especial",
        categoria: "cafes",
        resumo: "Espresso curto, versão especial da casa.",
        descricao: "Espresso curto, versão especial da casa.",
        image: "assets/img/ph-cafe.svg",
        alt: "Curto especial da Brookies Café (foto ilustrativa)",
        price: 9
      },
      {
        id: "expresso-longo",
        nome: "Expresso Longo",
        categoria: "cafes",
        resumo: "Espresso longo.",
        descricao: "Espresso longo.",
        image: "assets/img/ph-cafe.svg",
        alt: "Expresso longo da Brookies Café (foto ilustrativa)",
        price: 10
      },
      {
        id: "longo-especial",
        nome: "Longo Especial",
        categoria: "cafes",
        resumo: "Espresso longo, versão especial da casa.",
        descricao: "Espresso longo, versão especial da casa.",
        image: "assets/img/ph-cafe.svg",
        alt: "Longo especial da Brookies Café (foto ilustrativa)",
        price: 11
      },
      {
        id: "cafe-com-leite",
        nome: "Café com Leite",
        categoria: "cafes",
        resumo: "Café com leite.",
        descricao: "Café com leite.",
        image: "assets/img/ph-cafe.svg",
        alt: "Café com leite da Brookies Café (foto ilustrativa)",
        price: 10
      },
      {
        id: "cappuccino",
        nome: "Cappuccino",
        categoria: "cafes",
        resumo: "Café com leite vaporizado e espuma.",
        descricao: "Cappuccino: café com leite vaporizado e espuma.",
        image: "assets/img/ph-cafe.svg",
        alt: "Cappuccino da Brookies Café (foto ilustrativa)",
        price: 18
      },
      {
        id: "caramelo-coffee",
        nome: "Caramelo Coffee",
        categoria: "cafes",
        resumo: "Café com caramelo.",
        descricao: "Café com caramelo.",
        image: "assets/img/ph-cafe.svg",
        alt: "Caramelo coffee da Brookies Café (foto ilustrativa)",
        price: 14
      },
      {
        id: "mocha-brookies",
        nome: "Mocha Brookies",
        categoria: "cafes",
        resumo: "Café com chocolate, versão Brookies.",
        descricao: "Mocha na versão Brookies: café com chocolate.",
        image: "assets/img/ph-cafe.svg",
        alt: "Mocha Brookies da Brookies Café (foto ilustrativa)",
        price: 20
      },
      {
        id: "chocolate-quente",
        nome: "Chocolate Quente",
        categoria: "cafes",
        resumo: "Chocolate quente.",
        descricao: "Chocolate quente.",
        image: "assets/img/ph-cafe.svg",
        alt: "Chocolate quente da Brookies Café (foto ilustrativa)",
        price: 16
      },
      {
        id: "chocolate-quente-chantilly",
        nome: "Chocolate Quente com Chantilly e Calda",
        categoria: "cafes",
        resumo: "Chocolate quente com chantilly e calda.",
        descricao: "Chocolate quente coberto com chantilly e calda.",
        image: "assets/img/ph-cafe.svg",
        alt: "Chocolate quente com chantilly da Brookies Café (foto ilustrativa)",
        price: 20
      },

      /* --- Cafés Gelados --- */
      {
        id: "iced-caramelo",
        nome: "Iced Caramelo",
        categoria: "cafes",
        resumo: "Café gelado com caramelo.",
        descricao: "Café gelado com caramelo.",
        image: "assets/img/ph-bebida.svg",
        alt: "Iced caramelo da Brookies Café (foto ilustrativa)",
        price: 22
      },
      {
        id: "frappe-doce-de-leite",
        nome: "Frappé Doce de Leite com Caramelo Salgado",
        categoria: "cafes",
        resumo: "Frappé de doce de leite com caramelo salgado.",
        descricao: "Café gelado batido: doce de leite com caramelo salgado.",
        image: "assets/img/ph-bebida.svg",
        alt: "Frappé de doce de leite com caramelo salgado da Brookies Café (foto ilustrativa)",
        price: 26
      },
      {
        id: "frappe-nutella-cookies",
        nome: "Frappé de Nutella e Cookies",
        categoria: "cafes",
        resumo: "Frappé de Nutella com cookies.",
        descricao: "Café gelado batido com Nutella e cookies.",
        image: "assets/img/ph-bebida.svg",
        alt: "Frappé de Nutella e cookies da Brookies Café (foto ilustrativa)",
        price: 27
      },

      /* --- Smoothies Proteicos --- */
      {
        id: "protein-coffee-shake",
        nome: "Protein Coffee Shake",
        categoria: "smoothies",
        resumo: "Banana, leite, whey de baunilha, café, cacau e gelo.",
        descricao: "Smoothie proteico: banana, leite, whey de baunilha, café, cacau e gelo.",
        image: "assets/img/ph-bebida.svg",
        alt: "Protein coffee shake da Brookies Café (foto ilustrativa)",
        price: 23
      },
      {
        id: "berry-protein-shake",
        nome: "Berry Protein Shake",
        categoria: "smoothies",
        resumo: "Banana, leite, morango, whey de baunilha, geleia de morango e gelo.",
        descricao: "Smoothie proteico: banana, leite, morango, whey de baunilha, geleia de morango e gelo.",
        image: "assets/img/ph-bebida.svg",
        alt: "Berry protein shake da Brookies Café (foto ilustrativa)",
        price: 26
      },
      {
        id: "acai-shake",
        nome: "Açaí Shake",
        categoria: "smoothies",
        resumo: "Banana, açaí, whey, leite, amendoim e gelo.",
        descricao: "Smoothie proteico: banana, açaí, whey, leite, amendoim e gelo.",
        image: "assets/img/ph-bebida.svg",
        alt: "Açaí shake da Brookies Café (foto ilustrativa)",
        price: 22
      },
      {
        id: "smoothie-tropical",
        nome: "Smoothie Tropical",
        categoria: "smoothies",
        resumo: "Polpa de maracujá, whey, leite e gelo.",
        descricao: "Smoothie proteico: polpa de maracujá, whey, leite e gelo.",
        image: "assets/img/ph-bebida.svg",
        alt: "Smoothie tropical da Brookies Café (foto ilustrativa)",
        price: 24
      },

      /* --- Sodas Italianas --- */
      {
        id: "soda-limao-siciliano",
        nome: "Soda Italiana de Limão Siciliano",
        categoria: "sodas",
        resumo: "Soda italiana gelada.",
        descricao: "Soda italiana de limão siciliano.",
        image: "assets/img/ph-bebida.svg",
        alt: "Soda italiana de limão siciliano da Brookies Café (foto ilustrativa)",
        price: 15
      },
      {
        id: "soda-maca-verde",
        nome: "Soda Italiana de Maçã Verde",
        categoria: "sodas",
        resumo: "Soda italiana gelada.",
        descricao: "Soda italiana de maçã verde.",
        image: "assets/img/ph-bebida.svg",
        alt: "Soda italiana de maçã verde da Brookies Café (foto ilustrativa)",
        price: 15
      },
      {
        id: "soda-frutas-vermelhas",
        nome: "Soda Italiana de Frutas Vermelhas",
        categoria: "sodas",
        resumo: "Soda italiana gelada.",
        descricao: "Soda italiana de frutas vermelhas.",
        image: "assets/img/ph-bebida.svg",
        alt: "Soda italiana de frutas vermelhas da Brookies Café (foto ilustrativa)",
        price: 15
      }
    ],

    // Grade do Instagram — fotos reais da Brookies Café (em assets/img/fotos/).
    // "color" = cor dominante da foto (amostrada 2026-09-10), usada como placeholder (LQIP)
    // enquanto o JPEG carrega — evita o retângulo bege e dá sensação de carregamento instantâneo.
    instagramGrid: [
      { image: "assets/img/fotos/foto-01.jpg", color: "#5b442d", alt: "Cappuccino da Brookies Café em frente ao letreiro" },
      { image: "assets/img/fotos/foto-10.jpg", color: "#5c4b37", alt: "Soda italiana de frutas vermelhas da Brookies Café" },
      { image: "assets/img/fotos/foto-14.jpg", color: "#5f5738", alt: "Frappé de maracujá da Brookies Café" },
      { image: "assets/img/fotos/foto-06.jpg", color: "#59473a", alt: "Bandeja com smoothie de morango e fatias de brookies" },
      { image: "assets/img/fotos/foto-13.jpg", color: "#7c6c4b", alt: "Waffle de presunto e queijo com milkshake de morango" },
      { image: "assets/img/fotos/foto-21.jpg", color: "#7e6547", alt: "Pães com gotas de chocolate da Brookies Café, com o playground da praça ao fundo" }
    ]
  };
})();
