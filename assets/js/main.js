/* ==========================================================================
   Brookies Café — main.js  (vanilla, sem dependências, carregado com defer)
   Depende de window.BROOKIES (assets/js/data.js).
   ========================================================================== */
(function () {
  "use strict";

  // Marca que o JS carregou: só então o CSS esconde os elementos animados (.js .reveal).
  document.documentElement.classList.add("js");

  var DATA = window.BROOKIES || { info: {}, produtos: [], categorias: [], instagramGrid: [] };
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Página única: evita o "pulo" de restauração de scroll ao recarregar.
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  /* ---------- helpers ---------------------------------------------------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  var ICON = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 21.4l1.4-6.8L2.2 9.9l6.9-.8z"/></svg>'
  };

  function catLabel(id) {
    for (var i = 0; i < (DATA.categorias || []).length; i++) {
      if (DATA.categorias[i].id === id) return DATA.categorias[i].label;
    }
    return id;
  }
  function priceInfo(p) {
    if (p === null || p === undefined) return { text: "Sob consulta", tba: true };
    return { text: "R$ " + Number(p).toFixed(2).replace(".", ","), tba: false };
  }

  /* ---------- footer year --------------------------------------------- */
  var yEl = $("#ano");
  if (yEl) yEl.textContent = new Date().getFullYear();

  /* ---------- hero: vídeo de abertura -------------------------------- */
  var heroVideo = $(".hero__video");
  if (heroVideo) {
    if (prefersReduced) {
      // sem movimento: esconde o vídeo; ficam o poster e o fundo do .hero__bg
      heroVideo.removeAttribute("autoplay");
      heroVideo.pause();
      heroVideo.hidden = true;
    } else {
      var heroPlay = function () {
        var p = heroVideo.play();
        if (p && typeof p.catch === "function") p.catch(function () {});
      };
      if (heroVideo.readyState >= 2) heroPlay();
      heroVideo.addEventListener("loadeddata", heroPlay, { once: true });
      // se o vídeo não carregar, o poster + o fundo do .hero__bg cobrem
      heroVideo.addEventListener("error", function () { heroVideo.hidden = true; });
    }
  }

  // Rede de segurança: garante a entrada do conteúdo do hero mesmo se o
  // IntersectionObserver não disparar (conteúdo crítico da primeira dobra).
  setTimeout(function () {
    $all(".hero .reveal").forEach(function (el, i) {
      if (!el.classList.contains("is-visible")) {
        el.style.transitionDelay = Math.min(i, 5) * 0.08 + "s";
        el.classList.add("is-visible");
      }
    });
  }, 250);

  /* ---------- galeria "fotos espalhadas" (entrada em stagger) -------- */
  var scatterItems = $all(".scatter-gallery__item");
  if (scatterItems.length) {
    var revealScatter = function (el, i) {
      el.style.transitionDelay = Math.min(i, 6) * 0.06 + "s";
      el.classList.add("is-in");
    };
    if (prefersReduced || !("IntersectionObserver" in window)) {
      scatterItems.forEach(revealScatter);
    } else {
      var scObs = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var el = en.target;
          var sibs = Array.prototype.slice.call(el.parentNode.children);
          revealScatter(el, sibs.indexOf(el));
          obs.unobserve(el);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
      scatterItems.forEach(function (el) { scObs.observe(el); });
      // rede de segurança
      setTimeout(function () {
        scatterItems.forEach(function (el, i) { if (!el.classList.contains("is-in")) revealScatter(el, i); });
      }, 2500);
    }
  }

  /* ---------- marquee: duplica a faixa p/ a rolagem contínua (loop sem emenda) ----
     A cópia é decorativa: aria-hidden, alt vazio e já visível (.is-in). No mobile e
     com prefers-reduced-motion o CSS esconde a cópia e a faixa vira swipe manual.
     Pausa a animação quando a seção sai da viewport (economiza CPU/GPU). ------------ */
  var scTrack = $(".scatter-marquee__track");
  if (scTrack) {
    var scList = $(".scatter-gallery", scTrack);
    if (scList && !prefersReduced) {
      var scClone = scList.cloneNode(true);
      scClone.setAttribute("aria-hidden", "true");
      scClone.removeAttribute("aria-label");
      $all(".scatter-gallery__item", scClone).forEach(function (el) { el.classList.add("is-in"); });
      $all("img", scClone).forEach(function (img) { img.alt = ""; });
      scTrack.appendChild(scClone);
    }
    var scMarquee = scTrack.parentNode;
    if (scMarquee && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          scTrack.style.animationPlayState = en.isIntersecting ? "" : "paused";
        });
      }, { threshold: 0 }).observe(scMarquee);
    }
  }

  /* ---------- fábrica de card de produto ---------------------------- */
  function productCard(p, reveal) {
    var pr = priceInfo(p.price);
    var art = document.createElement("article");
    art.className = "product-card" + (reveal ? " reveal" : "");
    art.setAttribute("data-cat", p.categoria);
    art.innerHTML =
      '<div class="product-card__media">' +
        '<span class="chip">' + catLabel(p.categoria) + '</span>' +
        '<img src="' + p.image + '" alt="' + p.alt + '" loading="lazy" decoding="async" width="800" height="600">' +
      '</div>' +
      '<div class="product-card__body">' +
        '<h3>' + p.nome + '</h3>' +
        '<p>' + p.resumo + '</p>' +
        '<div class="product-card__foot">' +
          '<span class="price ' + (pr.tba ? "price--tba" : "") + '">' + pr.text + '</span>' +
          '<button type="button" class="btn-link" data-open="' + p.id + '" aria-haspopup="dialog">' +
            '<span>Ver detalhes</span>' + ICON.arrow +
          '</button>' +
        '</div>' +
      '</div>';
    return art;
  }

  /* ---------- render: cardápio + filtros ---------------------------- */
  var menuWrap = $("#menu-grid");
  var menuEmpty = $("#menu-empty");
  if (menuWrap) {
    DATA.produtos.forEach(function (p) { menuWrap.appendChild(productCard(p, true)); });
  }

  var filterBtns = $all(".filter");
  var activeCat = null; // null = mostra tudo (sem filtro ativo)
  function applyFilter(cat) {
    if (cat === activeCat) cat = null;   // clicar na categoria ativa limpa o filtro
    activeCat = cat;
    var visible = 0;
    $all(".product-card", menuWrap).forEach(function (card) {
      var show = !cat || card.getAttribute("data-cat") === cat;
      card.classList.toggle("is-hidden", !show);
      if (show) visible++;
    });
    if (menuEmpty) menuEmpty.hidden = visible !== 0;
    filterBtns.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-filter") === cat));
    });
  }
  filterBtns.forEach(function (b) {
    b.addEventListener("click", function () { applyFilter(b.getAttribute("data-filter")); });
  });

  /* ---------- render: instagram grid ------------------------------- */
  var igWrap = $("#ig-grid");
  if (igWrap && DATA.instagramGrid) {
    var igUrl = (DATA.info.instagram && DATA.info.instagram.url) || "#";
    DATA.instagramGrid.forEach(function (item) {
      var a = document.createElement("a");
      a.href = igUrl; a.target = "_blank"; a.rel = "noopener";
      a.setAttribute("aria-label", "Abrir o Instagram da Brookies Café");
      var lqip = item.color ? ' style="background-color:' + item.color + '"' : "";
      a.innerHTML = '<img class="photo" src="' + item.image + '" alt="' + item.alt + '" loading="lazy" decoding="async" width="600" height="600"' + lqip + ">";
      igWrap.appendChild(a);
    });
  }

  /* ---------- fill dynamic bits from data ------------------------- */
  (function fillInfo() {
    var i = DATA.info || {};
    $all("[data-fill]").forEach(function (node) {
      var key = node.getAttribute("data-fill");
      var map = {
        "ig-user": i.instagram && i.instagram.user,
        "ig-seguidores": i.instagram && i.instagram.seguidores,
        "ig-posts": i.instagram && i.instagram.posts,
        "horario": i.horarioTexto,
        "rating": (typeof i.ratingValue === "number" ? i.ratingValue.toFixed(1) : String(i.ratingValue)).replace(".", ",")
      };
      if (map[key] != null) node.textContent = map[key];
    });
    $all('[data-href="instagram"]').forEach(function (a) { if (i.instagram) a.href = i.instagram.url; });
    $all('[data-href="maps-dir"]').forEach(function (a) { if (i.mapsDir) a.href = i.mapsDir; });
    $all('[data-href="maps-search"]').forEach(function (a) { if (i.mapsSearch) a.href = i.mapsSearch; });
  })();

  /* ---------- image fallback ------------------------------------- */
  var FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 6'%3E%3Crect width='8' height='6' fill='%234A2C24'/%3E%3Cpath d='M2 4l1.4-1.6L5 4.2 6 3.2 7 4.4V5H1z' fill='%23F7F0E6' fill-opacity='.5'/%3E%3C/svg%3E";
  document.addEventListener("error", function (e) {
    var t = e.target;
    if (t && t.tagName === "IMG" && t.getAttribute("data-failed") !== "1") {
      t.setAttribute("data-failed", "1");
      t.src = FALLBACK;
    }
  }, true);

  /* ---------- fotos: fade-in ao carregar (LQIP) -------------------
     Cada <img class="photo"> tem uma cor dominante como background (no HTML/data.js).
     O CSS deixa a foto em opacity:0 até ganhar a classe .is-loaded — assim ela
     revela por cima do placeholder de cor em vez de "piscar" do bege.
     Sem JS ou com prefers-reduced-motion, o CSS mantém tudo visível. */
  if (!prefersReduced) {
    $all("img.photo").forEach(function (img) {
      if (img.complete && img.naturalWidth) { img.classList.add("is-loaded"); return; }
      var done = function () { img.classList.add("is-loaded"); };
      img.addEventListener("load", done);
      img.addEventListener("error", done);
    });
  }

  /* ---------- header scroll state ------------------------------- */
  var header = $(".site-header");
  function onScrollHeader() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ---------- mobile nav -------------------------------------- */
  var nav = $("#primary-nav");
  var navToggle = $(".nav-toggle");
  function setNav(open) {
    if (!nav || !navToggle) return;
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  }
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      setNav(!nav.classList.contains("is-open"));
    });
  }
  if (nav) {
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav && nav.classList.contains("is-open")) {
      setNav(false); navToggle.focus();
    }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900 && nav && nav.classList.contains("is-open")) setNav(false);
  });

  /* ---------- scroll-spy (active nav link) ------------------- */
  var navLinks = $all('.nav__link[href^="#"]');
  var spyTargets = navLinks
    .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
    .filter(Boolean);
  if ("IntersectionObserver" in window && spyTargets.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    spyTargets.forEach(function (t) { spy.observe(t); });
  }

  /* ---------- reveal on scroll ----------------------------- */
  var revealEls = $all(".reveal");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var ro = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var sibs = Array.prototype.slice.call((el.parentNode || document).children).filter(function (c) { return c.classList.contains("reveal"); });
        var idx = sibs.indexOf(el);
        el.style.transitionDelay = (idx > 0 ? Math.min(idx, 5) * 0.07 : 0) + "s";
        el.classList.add("is-visible");
        obs.unobserve(el);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    revealEls.forEach(function (el) { ro.observe(el); });
  }

  /* ---------- lazy map --------------------------------------- */
  var mapFrame = $(".map-frame");
  if (mapFrame && DATA.info.mapsEmbed) {
    var mapLoaded = false;
    var loadMap = function () {
      if (mapLoaded) return;
      mapLoaded = true;
      mapFrame.innerHTML = '<iframe title="Mapa da localização da Brookies Café" src="' +
        DATA.info.mapsEmbed + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>';
      window.removeEventListener("scroll", onFirstScroll);
    };
    var onFirstScroll = function () { loadMap(); };
    if ("IntersectionObserver" in window) {
      var mo = new IntersectionObserver(function (entries, obs) {
        if (entries.some(function (e) { return e.isIntersecting; })) { loadMap(); obs.disconnect(); }
      }, { rootMargin: "400px" });
      mo.observe(mapFrame);
    }
    // Fallbacks: primeiro scroll do usuário ou timeout, para o mapa nunca ficar vazio.
    window.addEventListener("scroll", onFirstScroll, { passive: true, once: true });
    setTimeout(loadMap, 4000);
  }

  /* ---------- product modal --------------------------------- */
  var modal = $("#product-modal");
  var lastFocused = null;
  function findProduct(id) {
    for (var i = 0; i < DATA.produtos.length; i++) if (DATA.produtos[i].id === id) return DATA.produtos[i];
    return null;
  }
  function openModal(id) {
    var p = findProduct(id);
    if (!p || !modal) return;
    var pr = priceInfo(p.price);
    lastFocused = document.activeElement;
    $(".modal__media", modal).innerHTML = '<img src="' + p.image + '" alt="' + p.alt + '" width="800" height="500">';
    $(".modal__cat", modal).textContent = catLabel(p.categoria);
    $(".modal__title", modal).textContent = p.nome;
    $(".modal__desc", modal).textContent = p.descricao;
    $(".modal__price", modal).textContent = pr.text;
    $(".modal__price", modal).className = "price modal__price " + (pr.tba ? "price--tba" : "");
    modal.hidden = false;
    void modal.offsetWidth; // força reflow para a transição de entrada rodar
    modal.classList.add("is-open");
    document.body.classList.add("nav-open");
    $(".modal__close", modal).focus();
    document.addEventListener("keydown", modalKeydown);
  }
  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    document.removeEventListener("keydown", modalKeydown);
    var finished = false;
    var done = function () {
      if (finished) return;
      finished = true;
      modal.hidden = true;
      modal.removeEventListener("transitionend", done);
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    };
    modal.addEventListener("transitionend", done);
    setTimeout(done, prefersReduced ? 0 : 260); // fallback caso o transitionend não dispare
  }
  function modalKeydown(e) {
    if (e.key === "Escape") { closeModal(); return; }
    if (e.key !== "Tab") return;
    var f = $all('button, a[href], [tabindex]:not([tabindex="-1"])', modal).filter(function (el) { return el.offsetParent !== null; });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  document.addEventListener("click", function (e) {
    var opener = e.target.closest("[data-open]");
    if (opener) { openModal(opener.getAttribute("data-open")); return; }
    if (e.target.closest("[data-close-modal]")) closeModal();
  });

  /* ---------- mobile CTA bar ------------------------------- */
  var bar = $(".mobile-bar");
  var hero = $("#inicio");
  var footer = $(".site-footer");
  if (bar && hero) {
    var footerVisible = false;
    if ("IntersectionObserver" in window && footer) {
      new IntersectionObserver(function (en) { footerVisible = en[0].isIntersecting; updateBar(); }, { threshold: 0 }).observe(footer);
    }
    var updateBar = function () {
      var pastHero = window.scrollY > hero.offsetHeight * 0.55;
      bar.classList.toggle("is-visible", pastHero && !footerVisible);
    };
    updateBar();
    window.addEventListener("scroll", updateBar, { passive: true });
  }

  /* ---------- voltar ao topo ------------------------------- */
  var toTop = $(".to-top");
  if (toTop) {
    var updateToTop = function () { toTop.classList.toggle("is-visible", window.scrollY > 700); };
    updateToTop();
    window.addEventListener("scroll", updateToTop, { passive: true });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
      var h1 = document.querySelector("h1");
      if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); }
    });
  }
})();
