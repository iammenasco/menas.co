import { access, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';

const html = await readFile('index.html', 'utf8');
const css = await readFile('index.css', 'utf8');
const pkg = JSON.parse(await readFile('package.json', 'utf8'));

const requiredAssets = [
  'index.css',
  'index.js',
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'scripts/serve.mjs',
];

for (const asset of requiredAssets) {
  await access(asset, constants.R_OK);
}

const assertions = [
  [!pkg.dependencies || Object.keys(pkg.dependencies).length === 0, 'package.json must have zero runtime dependencies.'],
  [/<html\b[^>]*\blang="en"/.test(html), 'index.html must declare lang="en".'],
  [html.includes('name="viewport"'), 'index.html must include a viewport meta tag.'],
  [html.includes('name="description"'), 'index.html must include a description meta tag.'],
  [html.includes('fonts.googleapis.com/css2') && html.includes('display=swap'), 'index.html must load Google Fonts css2 with display=swap.'],
  [html.includes('index.css') && html.includes('index.js'), 'index.html must reference index.css and index.js.'],
  [!html.includes('icongr.am'), 'index.html must inline SVGs instead of referencing icongr.am.'],
  [(html.match(/<svg\b/g) ?? []).length >= 2, 'index.html must inline the GitHub and CodePen SVGs.'],
  [html.includes('rel="noopener noreferrer"'), 'External links must use rel="noopener noreferrer".'],
  [css.includes('prefers-reduced-motion: reduce'), 'index.css must support prefers-reduced-motion: reduce.'],
  [!css.includes('.container'), 'index.css must not retain unused .container rules.'],
];

for (const [ok, message] of assertions) {
  if (!ok) {
    throw new Error(message);
  }
}

console.log('Site assets, metadata, accessibility, and zero-dependency checks passed.');
