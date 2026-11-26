import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

function parsePort(argv) {
  for (let i = 0; i < argv.length; i += 1) {
    if ((argv[i] === '--port' || argv[i] === '-p') && argv[i + 1]) {
      return Number(argv[i + 1]);
    }
  }
  return Number(process.env.PORT ?? 3000);
}

const PUBLIC_EXTENSIONS = new Set(['.css', '.html', '.ico', '.js', '.png', '.svg']);

function resolvePublicPath(requestUrl) {
  const { pathname } = new URL(requestUrl, 'http://127.0.0.1');
  const decoded = decodeURIComponent(pathname);
  const relative = decoded === '/' ? 'index.html' : decoded.replace(/^\/+/, '');
  const segments = relative.split('/').filter(Boolean);

  if (segments.length === 0 || segments.some((seg) => seg.startsWith('.') || seg === 'scripts')) {
    return null;
  }

  const ext = path.extname(relative).toLowerCase();
  if (!PUBLIC_EXTENSIONS.has(ext)) {
    return null;
  }

  const resolved = path.resolve(ROOT_DIR, relative);
  if (resolved !== ROOT_DIR && !resolved.startsWith(ROOT_DIR + path.sep)) {
    return null;
  }
  return resolved;
}

const port = parsePort(process.argv.slice(2));
const host = process.env.HOST ?? '127.0.0.1';

if (!Number.isInteger(port) || port < 0 || port > 65535) {
  console.error(`Invalid port: ${port}`);
  process.exit(1);
}

const server = createServer(async (req, res) => {
  const method = req.method ?? 'GET';
  if (method !== 'GET' && method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8', Allow: 'GET, HEAD' });
    res.end('Method Not Allowed');
    return;
  }

  let filePath;
  try {
    filePath = resolvePublicPath(req.url ?? '/');
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad Request');
    return;
  }

  if (!filePath) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not Found');
    return;
  }

  try {
    const info = await stat(filePath);
    if (!info.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] ?? 'application/octet-stream';
    const body = await readFile(filePath);

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': body.byteLength,
      'X-Content-Type-Options': 'nosniff',
    });
    res.end(method === 'HEAD' ? undefined : body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not Found');
  }
});

server.listen(port, host, () => {
  const address = server.address();
  const actualPort = typeof address === 'object' && address ? address.port : port;
  console.log(`Serving ${ROOT_DIR} at http://${host}:${actualPort}`);
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    server.close(() => process.exit(0));
  });
}
