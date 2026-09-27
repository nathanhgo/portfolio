/* Portfólio de Nathan Guimarães — comportamento.
   Regra: tudo aqui é melhoria. Sem JavaScript a página continua legível, com o tema claro,
   o texto em português e os carrosséis como faixas roláveis na mão. */
document.documentElement.classList.add('js');

(function () {
  var HTML = document.documentElement;
  var reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- tema claro / escuro ---------------- */
  var guardado = null;
  try { guardado = localStorage.getItem('tema'); } catch (e) {}
  var tema = guardado || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro');
  var btnTema = document.querySelector('[data-tema-btn]');

  function aplicarTema(t) {
    HTML.setAttribute('data-tema', t);
    if (!btnTema) return;
    btnTema.setAttribute('aria-pressed', t === 'escuro' ? 'true' : 'false');
    var rot = btnTema.querySelector('[data-tema-rot]');
    if (rot) rot.textContent = t === 'escuro' ? 'escuro' : 'claro';
  }
  aplicarTema(tema);
  if (btnTema) btnTema.addEventListener('click', function () {
    tema = tema === 'escuro' ? 'claro' : 'escuro';
    try { localStorage.setItem('tema', tema); } catch (e) {}
    aplicarTema(tema);
  });

  /* ---------------- idioma (pt-BR / inglês) ---------------- */
  var idioma = 'pt';
  try { var salvoIdioma = localStorage.getItem('idioma'); if (salvoIdioma === 'en' || salvoIdioma === 'pt') idioma = salvoIdioma; } catch (e) {}

  function aplicarIdioma(l) {
    var texto = (window.TEXTOS || {})[l];
    if (!texto) return;
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
      var k = el.getAttribute('data-i18n');
      if (texto[k] != null && el.textContent !== texto[k]) el.textContent = texto[k];
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-alt]'), function (el) {
      var k = el.getAttribute('data-i18n-alt'); if (texto[k] != null) el.setAttribute('alt', texto[k]);
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-aria]'), function (el) {
      var k = el.getAttribute('data-i18n-aria'); if (texto[k] != null) el.setAttribute('aria-label', texto[k]);
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-ph]'), function (el) {
      var k = el.getAttribute('data-i18n-ph'); if (texto[k] != null) el.setAttribute('placeholder', texto[k]);
    });
    HTML.lang = l === 'pt' ? 'pt-BR' : 'en';
    if (texto['meta.titulo']) document.title = texto['meta.titulo'];
    var md = document.querySelector('meta[name="description"]');
    if (md && texto['meta.descricao']) md.setAttribute('content', texto['meta.descricao']);
    Array.prototype.forEach.call(document.querySelectorAll('[data-idioma-btn]'), function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-idioma-btn') === l ? 'true' : 'false');
    });
  }
  aplicarIdioma(idioma);
  Array.prototype.forEach.call(document.querySelectorAll('[data-idioma-btn]'), function (b) {
    b.addEventListener('click', function () {
      idioma = b.getAttribute('data-idioma-btn');
      try { localStorage.setItem('idioma', idioma); } catch (e) {}
      aplicarIdioma(idioma);
    });
  });

  /* ---------------- carrossel que passa sozinho ---------------- */
  Array.prototype.forEach.call(document.querySelectorAll('.carrossel'), function (c) {
    var trilho = c.querySelector('.trilho');
    if (!trilho) return;
    var itens = Array.prototype.slice.call(trilho.children);
    if (itens.length < 2) return;

    var quadro = c.querySelector('.quadro') || c;
    var barra = document.createElement('div');
    barra.className = 'controles-carrossel';
    var ant = document.createElement('button');
    ant.type = 'button'; ant.className = 'seta seta--ant'; ant.setAttribute('data-i18n-aria', 'carrossel.anterior');
    ant.setAttribute('aria-label', 'imagem anterior'); ant.textContent = '\u2039';
    var prox = document.createElement('button');
    prox.type = 'button'; prox.className = 'seta seta--prox'; prox.setAttribute('data-i18n-aria', 'carrossel.proximo');
    prox.setAttribute('aria-label', 'próxima imagem'); prox.textContent = '\u203a';
    var pontos = document.createElement('div');
    pontos.className = 'pontos';
    pontos.setAttribute('role', 'tablist');
    itens.forEach(function (_, n) {
      var p = document.createElement('button');
      p.type = 'button'; p.className = 'ponto';
      p.setAttribute('aria-label', 'imagem ' + (n + 1) + ' de ' + itens.length);
      p.addEventListener('click', function () { irPara(n, true); });
      pontos.appendChild(p);
    });
    barra.appendChild(pontos);
    quadro.appendChild(ant); quadro.appendChild(prox);
    c.appendChild(barra);

    function atual() {
      var melhor = 0, dist = Infinity;
      itens.forEach(function (el, n) {
        var d = Math.abs(el.offsetLeft - trilho.scrollLeft);
        if (d < dist) { dist = d; melhor = n; }
      });
      return melhor;
    }
    function pintar() {
      var n = atual();
      Array.prototype.forEach.call(pontos.children, function (p, i) {
        if (i === n) p.setAttribute('aria-current', 'true'); else p.removeAttribute('aria-current');
      });
    }
    function irPara(n, manual) {
      var el = itens[(n + itens.length) % itens.length];
      trilho.scrollTo({ left: el.offsetLeft - trilho.offsetLeft, behavior: reduzido ? 'auto' : 'smooth' });
      if (manual) parar();
    }
    ant.addEventListener('click', function () { irPara(atual() - 1, true); });
    prox.addEventListener('click', function () { irPara(atual() + 1, true); });

    var rodando = false, ciclo = null;
    function parar() { rodando = false; if (ciclo) { clearInterval(ciclo); ciclo = null; } }
    function comecar() {
      if (reduzido || rodando) return;
      rodando = true;
      ciclo = setInterval(function () {
        if (document.hidden) return;
        irPara(atual() + 1);
      }, 5000);
    }
    trilho.addEventListener('pointerdown', parar);
    trilho.addEventListener('mouseenter', parar);
    trilho.addEventListener('focusin', parar);
    trilho.addEventListener('scroll', function () { window.requestAnimationFrame(pintar); });
    document.addEventListener('visibilitychange', function () { if (document.hidden) parar(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entradas) {
        entradas.forEach(function (e) { if (e.isIntersecting) comecar(); });
      }, { threshold: .35 }).observe(c);
    } else { comecar(); }
    pintar();
  });

  /* ---------------- ampliar imagem (modal) ---------------- */
  var modal = document.getElementById('zoom');
  if (modal && typeof modal.showModal === 'function') {
    var imgModal = modal.querySelector('img');
    var legendaModal = modal.querySelector('figcaption');
    Array.prototype.forEach.call(document.querySelectorAll('img[data-zoom]'), function (img) {
      img.addEventListener('click', function () {
        var fig = img.closest('figure');
        if (!fig) return;
        imgModal.src = img.currentSrc || img.src;
        var cap = fig.querySelector('figcaption');
        legendaModal.textContent = cap ? cap.textContent : (img.alt || '');
        modal.showModal();
      });
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target.hasAttribute('data-fechar')) modal.close();
    });
    modal.addEventListener('close', function () { imgModal.removeAttribute('src'); });
  }

  /* ---------------- copiar e-mail ---------------- */
  var btnCopiar = document.querySelector('[data-copiar]');
  if (btnCopiar) btnCopiar.addEventListener('click', function () {
    var email = btnCopiar.getAttribute('data-copiar');
    var aviso = document.querySelector('[data-copiar-aviso]');
    function dizer(chave) { if (aviso) { aviso.setAttribute('data-i18n', chave); aviso.textContent = ((window.TEXTOS || {})[idioma] || {})[chave] || ''; } }
    function pronto() { dizer('copiado'); window.setTimeout(function () { dizer(''); }, 2500); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(pronto, function () { dizer('copiar.erro'); });
    } else {
      var campo = document.createElement('textarea');
      campo.value = email; document.body.appendChild(campo); campo.select();
      try { document.execCommand('copy'); pronto(); } catch (err) { dizer('copiar.erro'); }
      document.body.removeChild(campo);
    }
  });

  /* ---------------- formulário de contato (sem servidor) ---------------- */
  var form = document.querySelector('[data-form]');
  if (form) form.addEventListener('submit', function (e) {
    var nome = form.elements.nome ? form.elements.nome.value.trim() : '';
    var contato = form.elements.contato ? form.elements.contato.value.trim() : '';
    var mensagem = form.elements.mensagem ? form.elements.mensagem.value.trim() : '';
    if (!nome || !mensagem) return;              /* sem JS o action=mailto assume o envio */
    e.preventDefault();
    var assunto = (idioma === 'en' ? 'Message from the website: ' : 'Contato pelo site: ') + nome;
    var corpo = mensagem + '\n\n— ' + nome + (contato ? ' (' + contato + ')' : '');
    window.location.href = 'mailto:nathanhguimaraes@gmail.com'
      + '?subject=' + encodeURIComponent(assunto)
      + '&body=' + encodeURIComponent(corpo);
    var aviso = form.querySelector('.aviso');
    if (aviso) { aviso.setAttribute('data-i18n', 'form.enviado'); aviso.textContent = ((window.TEXTOS || {})[idioma] || {})['form.enviado'] || ''; }
  });

  /* ---------------- entrada suave e cabeçalho ---------------- */
  var alvos = document.querySelectorAll('[data-anima]');
  if ('IntersectionObserver' in window && !reduzido) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); }
      });
    }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
    Array.prototype.forEach.call(alvos, function (el) { obs.observe(el); });
  } else {
    Array.prototype.forEach.call(alvos, function (el) { el.classList.add('visivel'); });
  }
  /* rede de segurança: se o observador não disparar (aba oculta, navegador antigo),
     o texto não pode ficar invisível */
  window.setTimeout(function () {
    Array.prototype.forEach.call(alvos, function (el) { el.classList.add('visivel'); });
  }, 1500);

  var topo = document.querySelector('.topo');
  var secoes = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var ligacoes = {};
  Array.prototype.forEach.call(document.querySelectorAll('.topo nav a[href^="#"]'), function (a) {
    ligacoes[a.getAttribute('href').slice(1)] = a;
  });
  var marcando = false;
  function aoRolar() {
    if (topo) topo.classList.toggle('compacto', window.scrollY > 40);
    var alvo = null;
    secoes.forEach(function (s) {
      if (s.getBoundingClientRect().top <= 140) alvo = s.id;
    });
    Object.keys(ligacoes).forEach(function (id) {
      if (id === alvo) ligacoes[id].setAttribute('aria-current', 'true');
      else ligacoes[id].removeAttribute('aria-current');
    });
    marcando = false;
  }
  window.addEventListener('scroll', function () {
    if (!marcando) { marcando = true; window.requestAnimationFrame(aoRolar); }
  }, { passive: true });
  aoRolar();
})();
