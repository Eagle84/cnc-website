// CnC website: header, footer, the Play button, live player count, small helpers shared by every page.
import { CONFIG } from './config.js';

const root = document.documentElement.dataset.root || '.';
const page = document.body.dataset.page;

export const ICONS = {
  play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z"/></svg>',
  discord: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.6 1.3a18.4 18.4 0 0 0-5.6 0L8.6 3a19.7 19.7 0 0 0-4.9 1.5C.6 9.1-.3 13.6.1 18.1A19.9 19.9 0 0 0 6.1 21l1.3-2.1a12.9 12.9 0 0 1-2-1l.5-.4a14.2 14.2 0 0 0 12.2 0l.5.4c-.6.4-1.3.7-2 1l1.3 2.1a19.8 19.8 0 0 0 6-3c.5-5.2-.8-9.7-3.6-13.6zM8 15.4c-1.2 0-2.2-1.1-2.2-2.4S6.8 10.6 8 10.6s2.2 1.1 2.2 2.4-1 2.4-2.2 2.4zm8 0c-1.2 0-2.2-1.1-2.2-2.4s1-2.4 2.2-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2"/><circle cx="10" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/></svg>',
};

const NAV = [
  ['home', 'Home', '/'],
  ['store', 'Store', '/store/'],
  ['rules', 'Rules', '/rules/'],
  ['notes', 'Release Notes', '/notes/'],
];
const href = (p) => root + p;

export const joinUrl = () => (CONFIG.joinCode ? `fivem://connect/cfx.re/join/${CONFIG.joinCode}` : '');
const isPhone = () => window.matchMedia('(pointer: coarse)').matches && window.innerWidth < 900;

function header() {
  const el = document.createElement('header');
  el.className = 'site-header';
  el.innerHTML = `
    <div class="wrap">
      <a class="brand" href="${href('/')}"><img src="${href('/assets/img/cnc-icon-512.png')}" alt="" width="40" height="40">
        <span>CnC<small>Cops &amp; Criminals</small></span></a>
      <nav class="nav" id="site-nav" aria-label="Main">
        ${NAV.map(([k, label, p]) => `<a href="${href(p)}"${k === page ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
      </nav>
      <div class="header-right">
        <span class="status" id="status" hidden><span class="dot"></span><span><b id="status-n">0</b> online</span></span>
        <a class="btn btn-play" data-play href="#">${ICONS.play}PLAY</a>
        <button class="menu-btn" aria-expanded="false" aria-controls="site-nav" aria-label="Menu">${ICONS.menu}</button>
      </div>
    </div>`;
  document.body.prepend(el);
  const skip = document.createElement('a');
  skip.className = 'skip'; skip.href = '#main'; skip.textContent = 'Skip to content';
  document.body.prepend(skip);
  const btn = el.querySelector('.menu-btn');
  const nav = el.querySelector('.nav');
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.innerHTML = open ? ICONS.close : ICONS.menu;
  });
}

function footer() {
  const el = document.createElement('footer');
  el.className = 'site-footer';
  const year = new Date().getFullYear();
  el.innerHTML = `
    <div class="wrap">
      <div class="foot">
        <div>
          <a class="brand" href="${href('/')}"><img src="${href('/assets/img/cnc-icon-512.png')}" alt="" width="40" height="40"><span>CnC<small>Cops &amp; Criminals</small></span></a>
          <p style="margin-top:14px;max-width:340px">A FiveM city where half the town is running and the other half is chasing. Pick a side, or switch whenever you like.</p>
        </div>
        <div><h4>Play</h4><ul>
          <li><a href="#" data-play>Join the server</a></li>
          <li><a href="${href('/#join')}">How to join</a></li>
          <li><a href="${href('/rules/')}">Rules</a></li>
          <li><a href="${href('/notes/')}">Release notes</a></li></ul></div>
        <div><h4>Store</h4><ul>
          <li><a href="${href('/store/')}">VIP &amp; perks</a></li>
          <li><a href="${href('/store/#history')}">Purchase history</a></li>
          <li><a href="${href('/legal/#refunds')}">Refunds</a></li></ul></div>
        <div><h4>Community</h4><ul>
          <li><a href="${CONFIG.discord}" rel="noopener" target="_blank">Discord</a></li>
          <li><a href="mailto:${CONFIG.supportEmail}">Support</a></li>
          <li><a href="${href('/legal/#terms')}">Terms</a></li>
          <li><a href="${href('/legal/#privacy')}">Privacy</a></li></ul></div>
      </div>
      <div class="legal-line">
        <span>© ${year} CnC. Not affiliated with or endorsed by Rockstar Games, Take-Two Interactive or Cfx.re.</span>
        <span>No in-game currency is sold. Payments by Tebex.</span>
      </div>
    </div>`;
  document.body.append(el);
}

function playModal() {
  const dlg = document.createElement('dialog');
  dlg.className = 'modal-sm';
  dlg.setAttribute('aria-labelledby', 'play-title');
  const url = joinUrl();
  const web = CONFIG.joinCode ? `https://cfx.re/join/${CONFIG.joinCode}` : '';
  dlg.innerHTML = `
    <div class="body">
      <button class="icon-btn close" style="position:absolute;top:14px;right:14px" aria-label="Close">${ICONS.close}</button>
      <h3 id="play-title" style="font-size:1.3rem">Join from your PC</h3>
      <p style="color:var(--muted)">CnC runs on <b>FiveM</b>, the GTA V multiplayer for PC.</p>
      <ol style="color:#d3d1ea;padding-left:1.2em;margin:0 0 6px">
        <li>Own GTA V on PC and install <a href="https://fivem.net" target="_blank" rel="noopener">FiveM</a>.</li>
        <li>${web ? 'Open this link on that PC, or press <b>Play</b> on this site there:' : 'Search <b>CnC</b> or <b>Cops &amp; Criminals</b> in the FiveM server list.'}</li>
      </ol>
      ${web ? `<div class="copy-row"><input readonly value="${web}" aria-label="Join link"><button class="btn" data-copy="${web}">Copy</button></div>` : ''}
      <p class="fine" style="margin-top:12px">Questions? Ask on our <a href="${CONFIG.discord}" target="_blank" rel="noopener">Discord</a>.</p>
    </div>`;
  document.body.append(dlg);
  dlg.querySelector('.close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  dlg.querySelector('[data-copy]')?.addEventListener('click', async (e) => {
    try { await navigator.clipboard.writeText(e.currentTarget.dataset.copy); toast('Link copied'); } catch { toast('Select the link and copy it'); }
  });
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-play]');
    if (!a) return;
    if (url && !isPhone()) { a.href = url; return; }
    e.preventDefault();
    dlg.showModal();
  });
}

async function liveStatus() {
  if (!CONFIG.joinCode) return;
  const el = document.getElementById('status');
  try {
    const res = await fetch(`https://servers-frontend.fivem.net/api/servers/single/${CONFIG.joinCode}`, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(res.status);
    const d = (await res.json()).Data;
    document.getElementById('status-n').textContent = `${d.clients}/${d.sv_maxclients}`;
    document.querySelectorAll('[data-online]').forEach((n) => { n.textContent = `${d.clients}`; });
    el.hidden = false;
  } catch { /* the count is a nice-to-have: stay hidden */ }
}

export function toast(text) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.append(t); }
  t.textContent = text;
  t.classList.add('show');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove('show'), 2200);
}

function reveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach((i) => i.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -60px 0px' });
  items.forEach((i) => io.observe(i));
}

export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

header();
footer();
playModal();
liveStatus();
reveal();
document.querySelectorAll('[data-discord]').forEach((a) => { a.href = CONFIG.discord; });
document.querySelectorAll('[data-mail]').forEach((a) => {
  a.href = `mailto:${CONFIG.supportEmail}`;
  if (a.dataset.mail === 'show') a.textContent = CONFIG.supportEmail;
});
