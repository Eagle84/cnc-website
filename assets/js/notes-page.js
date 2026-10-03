// Release Notes page: one card per build, a language switch, right-to-left for Hebrew and Arabic.
import { loadNotes, inline, plain } from './notes.js';
import { esc } from './site.js';
import { CONFIG } from './config.js';

const RTL = new Set(['he', 'ar']);
const PAGE = 8;
const box = document.getElementById('notes');
const toc = document.getElementById('toc');
let entries = [];
let shown = 0;

function card(n) {
  return `<article class="card note" id="b${esc(n.build)}">
    <h2>${n.build ? `<span class="build">BUILD ${esc(n.build)}</span>` : ''}<span>${inline(n.title)}</span></h2>
    <ul>${n.bullets.map((b) => `<li>${inline(b)}</li>`).join('')}</ul>
  </article>`;
}

function more() {
  const next = entries.slice(shown, shown + PAGE);
  shown += next.length;
  box.querySelector('.load-more')?.remove();
  box.insertAdjacentHTML('beforeend', next.map(card).join(''));
  if (shown < entries.length) box.insertAdjacentHTML('beforeend', '<button class="btn load-more">Older updates</button>');
}

async function show(lang) {
  document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  box.lang = lang;
  box.dir = RTL.has(lang) ? 'rtl' : 'ltr';
  try {
    entries = await loadNotes('..', lang);
  } catch {
    box.innerHTML = '<p>The release notes could not load. Try again in a moment.</p>';
    return;
  }
  const want = location.hash.slice(2);
  const idx = want ? entries.findIndex((n) => n.build === want) : -1;
  shown = 0;
  box.innerHTML = '';
  while (shown < Math.max(PAGE, idx + 1) && shown < entries.length) more();
  toc.innerHTML = entries.slice(0, 12).map((n) => `<a href="#b${esc(n.build)}" dir="auto">${esc(n.build)} · ${esc(plain(n.title)).slice(0, 34)}</a>`).join('');
  if (idx >= 0) document.getElementById(`b${want}`)?.scrollIntoView();
  try { localStorage.setItem('cnc-notes-lang', lang); } catch { /* remember nothing */ }
}

box.addEventListener('click', (e) => { if (e.target.closest('.load-more')) more(); });
toc.addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  if (!document.getElementById(id)) { e.preventDefault(); while (!document.getElementById(id) && shown < entries.length) more(); document.getElementById(id)?.scrollIntoView(); }
});
const offered = CONFIG.noteLanguages?.length ? CONFIG.noteLanguages : ['en'];
document.querySelectorAll('[data-lang]').forEach((b) => {
  b.hidden = !offered.includes(b.dataset.lang);
  b.addEventListener('click', () => show(b.dataset.lang));
});
document.querySelector('.lang-switch').hidden = offered.length < 2;

let lang = new URLSearchParams(location.search).get('lang');
try { lang ||= localStorage.getItem('cnc-notes-lang'); } catch { /* default */ }
show(offered.includes(lang) ? lang : offered[0]);
