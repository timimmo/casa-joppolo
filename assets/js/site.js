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
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  var map = document.querySelector('.lageskizze');
  if (map) {
    var mq = window.matchMedia('(max-width: 40rem)');
    var full = map.getAttribute('viewBox');
    var zoom = function () { map.setAttribute('viewBox', mq.matches ? '300 60 420 560' : full); };
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
})();
