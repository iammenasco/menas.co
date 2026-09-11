import { access, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';

const html = await readFile('index.html', 'utf8');

for (const asset of ['index.css', 'index.js', 'favicon.ico']) {
  await access(asset, constants.R_OK);
}

if (!html.includes('index.css') || !html.includes('index.js')) {
  throw new Error('index.html must reference the site stylesheet and script.');
}

console.log('Site assets and entry points are valid.');
