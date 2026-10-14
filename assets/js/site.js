/* Casa Joppolo – progressive Verbesserung, ohne Abhängigkeiten.
   1. Abschnitte blenden einmalig ein, wenn sie ins Bild kommen.
   2. Die Navigation markiert den Abschnitt, der gerade gelesen wird.
   Ohne JavaScript ist alles sichtbar und die Navigation funktioniert als Sprungliste. */
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduce) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  var map = document.querySelector('.lageskizze');
  if (map) {
    var rail = map.querySelector('.rail');
    if (rail && rail.getTotalLength) { var len = Math.ceil(rail.getTotalLength()); rail.style.setProperty('--rail-len', len); }
    var mq = window.matchMedia('(max-width: 40rem)');
    var full = map.getAttribute('viewBox');
    var zoom = function () { map.setAttribute('viewBox', mq.matches ? '120 60 600 620' : full); };
    zoom(); mq.addEventListener ? mq.addEventListener('change', zoom) : mq.addListener(zoom);
  }

  var links = document.querySelectorAll('.nav a[href^="#"]');
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var sections = Object.keys(byId).map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    var current = null;
    var nav = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          if (current) current.removeAttribute('aria-current');
          current = byId[e.target.id]; current.setAttribute('aria-current', 'true');
          var bar = current.closest('.nav');
          if (bar && bar.scrollWidth > bar.clientWidth) {
            var left = current.offsetLeft - (bar.clientWidth - current.offsetWidth) / 2;
            bar.scrollTo({ left: Math.max(0, left), behavior: reduce ? 'auto' : 'smooth' });
          }
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(function (s) { nav.observe(s); });
  }

  /* 3. Lightbox: jedes Foto öffnet groß in einem nativen Dialog. */
  var figs = Array.prototype.slice.call(document.querySelectorAll('main figure img'));
  if (figs.length && window.HTMLDialogElement) {
    var en = (root.lang || '').slice(0, 2) === 'en';
    var t = en ? { dlg: 'Image enlarged', close: 'Close', prev: 'Previous image', next: 'Next image' }
               : { dlg: 'Bild groß', close: 'Schließen', prev: 'Vorheriges Bild', next: 'Nächstes Bild' };
    var dlg = document.createElement('dialog'); dlg.className = 'lightbox'; dlg.setAttribute('aria-label', t.dlg);
    dlg.innerHTML = '<button class="lb-close" type="button" aria-label="' + t.close + '">×</button><button class="lb-prev" type="button" aria-label="' + t.prev + '">‹</button><img alt=""><button class="lb-next" type="button" aria-label="' + t.next + '">›</button><p class="lb-cap"></p>';
    document.body.appendChild(dlg);
    var img = dlg.querySelector('img'), cap = dlg.querySelector('.lb-cap'), idx = 0;
    function largest(el) {
      var set = el.getAttribute('srcset'); if (!set) return el.currentSrc || el.src;
      var best = null, w = 0;
      set.split(',').forEach(function (c) { var p = c.trim().split(/\s+/); var n = parseInt(p[1] || '0', 10); if (n > w) { w = n; best = p[0]; } });
      return best || el.src;
    }
    function show(i) {
      idx = (i + figs.length) % figs.length; var el = figs[idx];
      img.src = largest(el); img.alt = el.alt || '';
      var fc = el.closest('figure').querySelector('figcaption'); cap.textContent = fc ? fc.textContent : '';
      if (!dlg.open) dlg.showModal();
    }
    figs.forEach(function (el, i) {
      el.style.cursor = 'zoom-in'; el.setAttribute('tabindex', '0'); el.setAttribute('role', 'button');
      el.addEventListener('click', function () { show(i); });
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(i); } });
    });
    dlg.querySelector('.lb-close').addEventListener('click', function () { dlg.close(); });
    dlg.querySelector('.lb-prev').addEventListener('click', function () { show(idx - 1); });
    dlg.querySelector('.lb-next').addEventListener('click', function () { show(idx + 1); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') show(idx + 1); if (e.key === 'ArrowLeft') show(idx - 1); });
    var x0 = null;
    dlg.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    dlg.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) show(dx < 0 ? idx + 1 : idx - 1); x0 = null; });
  }
})();