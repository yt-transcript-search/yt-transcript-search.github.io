/* YT Transcript Search website - top bar menu (v25.0)
   Adds a "Menu" button to the top bar on narrow screens (and at high browser zoom / display scaling),
   where style.css hides the row of links. The links themselves stay in each page as plain HTML.
   Nothing here touches the Chrome extension. */
/* Website version shown in every page footer. Change it here and upload nav.js only */
var YTTS_SITE_VERSION = 'v1.32.4';

(function () {
  'use strict';
  var BREAKPOINT = 1040;

  var css = [
    '.nav-menu-btn{display:none;margin-left:auto;padding:8px 14px;border-radius:8px;border:1px solid var(--border,#2a2a30);background:transparent;color:var(--text,#f0f0f2);font:600 13px/1 var(--font-body,sans-serif);letter-spacing:0.03em;cursor:pointer;white-space:nowrap;flex-shrink:0}',
    '.nav-menu-btn:hover{background:var(--surface,#16161a)}',
    '.nav-menu-btn:focus-visible{outline:2px solid var(--accent,#e8c547);outline-offset:2px}',
    '@media (max-width:' + BREAKPOINT + 'px){',
    '  .nav-menu-btn{display:inline-block}',
    '  .nav.menu-open .nav-links{display:flex !important;position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:stretch;gap:2px;padding:10px 24px 16px;background:rgba(13,13,15,0.98);border-bottom:1px solid var(--border,#2a2a30);box-shadow:0 18px 40px rgba(0,0,0,0.55);max-height:calc(100vh - var(--nav-h,64px));overflow-y:auto}',
    '  .nav.menu-open .nav-links li{list-style:none;width:100%}',
    '  .nav.menu-open .nav-links a{padding:12px 10px;font-size:15px;white-space:normal}',
    '}',
    '.nav-inner{position:relative}',
    '.nav-back{position:absolute;left:-12px;top:50%;transform:translateY(-50%);display:inline-flex;align-items:center;justify-content:center;width:26px;height:32px;padding:0;border:0;background:transparent;color:var(--accent,#e8c547);cursor:pointer;border-radius:6px;transition:color .15s}',
    '.nav-back svg{width:18px;height:18px;display:block}',
    '.nav-back:hover{color:var(--text,#f0f0f2)}',
    '.nav-back:focus-visible{outline:2px solid var(--accent,#e8c547);outline-offset:2px}',
    '@media (max-width:1110px){ .nav-back{left:2px;width:20px} }',
    '@media (max-width:440px){ .nav-logo .nav-banner{display:none} }'
  ].join('\n');

  function init() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    var inner = nav.querySelector('.nav-inner');
    var links = nav.querySelector('.nav-links');
    var cta = nav.querySelector('.nav-cta');
    /* Back arrow, left of the logo: returns to the previous page (goes to the Home page when the page was opened directly) */
    var logo = nav.querySelector('.nav-logo');
    if (inner && logo) {
      var back = document.createElement('button');
      back.type = 'button';
      back.className = 'nav-back';
      back.setAttribute('aria-label', 'Back to the previous page');
      back.title = 'Back';
      back.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';
      back.addEventListener('click', function () {
        if (window.history.length > 1) { window.history.back(); } else { window.location.href = 'index.html'; }
      });
      inner.appendChild(back);
    }
    if (!inner || !links || nav.querySelector('.nav-menu-btn')) return;

    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    if (!links.id) links.id = 'nav-links';
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nav-menu-btn';
    btn.setAttribute('aria-controls', links.id);
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = '☰ Menu';
    inner.insertBefore(btn, cta || null);

    function setOpen(open) {
      nav.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? '✕ Close' : '☰ Menu';
    }
    btn.addEventListener('click', function (e) { e.stopPropagation(); setOpen(!nav.classList.contains('menu-open')); });
    document.addEventListener('click', function (e) { if (nav.classList.contains('menu-open') && !nav.contains(e.target)) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('menu-open')) { setOpen(false); btn.focus(); } });
    links.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('a')) setOpen(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > BREAKPOINT) setOpen(false); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

  /* Footer version */
  (function () {
    var els = document.querySelectorAll('.footer-version');
    for (var i = 0; i < els.length; i++) els[i].textContent = YTTS_SITE_VERSION;
  })();

  /* Pinned section buttons: fixed under the top bar, with a spacer so the page starts below them */
  function initToc() {
    var bar = document.querySelector('.toc-bar');
    if (!bar) return;
    var nav = document.querySelector('.nav');
    var root = document.documentElement;
    var spacer = document.createElement('div');
    spacer.className = 'toc-spacer';
    bar.parentNode.insertBefore(spacer, bar.nextSibling);
    function set() {
      root.style.setProperty('--nav-h', (nav ? nav.offsetHeight : 64) + 'px');
      bar.classList.add('toc-fixed');
      var h = bar.offsetHeight;
      root.style.setProperty('--toc-h', h + 'px');
      spacer.style.height = h + 'px';
    }
    set();
    window.addEventListener('resize', set);
    window.addEventListener('load', set);
    if (window.ResizeObserver) new ResizeObserver(set).observe(bar);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initToc); else initToc();
})();
