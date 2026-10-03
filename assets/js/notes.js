// Release notes: docs/release-notes/<lang>.md split into entries. Owner-only text ("Server owners: ...") stays off the public site.
const OWNERS = /(server owners|ל?בעלי שרת|serverio savinink|serverių savinink|ل?أصحاب الخوادم)/i;

function publicPart(line) {
  const text = line.replace(/\*\*/g, '');
  const at = text.search(OWNERS);
  if (at < 0) return line;
  if (at === 0) return '';
  // cut the owners' sentence off the end of a player bullet: find it in the original (with **) and keep what is before
  const raw = line.search(OWNERS);
  return line.slice(0, raw >= 0 ? raw : line.length).replace(/[\s*:(]+$/, '').trim();
}

export async function loadNotes(root, lang = 'en') {
  const res = await fetch(`${root}/notes/${lang}.md`);
  if (!res.ok) throw new Error(`notes ${lang}: ${res.status}`);
  const md = await res.text();
  const entries = [];
  for (const chunk of md.split(/^## /m).slice(1)) {
    const [head, ...rest] = chunk.split('\n');
    if (OWNERS.test(head)) continue;
    const m = head.match(/^(.*?)\s*\((\d+)\)\s*$/);
    const bullets = rest.filter((l) => /^\s*- /.test(l)).map((l) => publicPart(l.replace(/^\s*- /, '').trim())).filter(Boolean);
    if (bullets.length) entries.push({ title: (m ? m[1] : head).trim(), build: m ? m[2] : '', bullets });
  }
  return entries;
}

// The small bit of markdown the notes use: **bold**, `code`, *italic*. Everything is escaped first.
export function inline(text) {
  const e = String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  return e.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*(.+?)\*/g, '<em>$1</em>');
}

export const plain = (text) => String(text).replace(/\*\*|`|\*/g, '');
