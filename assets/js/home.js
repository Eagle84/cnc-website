// Home: the three newest release-note entries.
import { loadNotes, inline, plain } from './notes.js';
import { esc } from './site.js';

const short = (b) => (b.length > 150 ? esc(plain(b).slice(0, plain(b).lastIndexOf(' ', 140))) + '…' : inline(b));

const box = document.getElementById('latest');
try {
  const notes = (await loadNotes('.', 'en')).slice(0, 3);
  box.innerHTML = notes.map((n) => `
    <article class="card update reveal in">
      ${n.build ? `<span class="tag">BUILD ${n.build}</span>` : ''}
      <h3>${inline(n.title)}</h3>
      <ul>${n.bullets.slice(0, 3).map((b) => `<li>${short(b)}</li>`).join('')}</ul>
      <a class="more" href="notes/#b${n.build}">Read more →</a>
    </article>`).join('');
} catch {
  box.innerHTML = '<p class="fine">The release notes are on the <a href="notes/">Release Notes</a> page.</p>';
}
