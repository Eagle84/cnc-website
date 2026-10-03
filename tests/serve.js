// Static server for the tests and local preview: node tests/serve.js [port]. Serves the repo root like GitHub Pages does.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const PORT = Number(process.argv[2] || 8766);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8' };

createServer(async (req, res) => {
  try {
    let path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^[\\/]+/, '');
    let file = join(ROOT, path);
    if (!file.startsWith(ROOT) || file.includes(`${sep}node_modules${sep}`)) throw new Error('outside');
    if ((await stat(file).catch(() => null))?.isDirectory()) file = join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(await readFile(join(ROOT, '404.html')).catch(() => 'Not found'));
  }
}).listen(PORT, '127.0.0.1', () => console.log(`http://127.0.0.1:${PORT}/`));
