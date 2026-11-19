import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  SEO_MANIFEST,
  NOT_FOUND_ENTRY,
  SITE_URL,
  OG_IMAGE,
  OG_IMAGE_ALT,
  buildSitemapXml,
  render,
} from '../dist-server/entry-server.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const template = readFileSync(join(distDir, 'index.html'), 'utf8');

const escAttr = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function setMeta(html, attr, key, content) {
  const pattern = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
  return html.replace(pattern, `$1${escAttr(content)}$2`);
}

function setTitle(html, title) {
  return html.replace(/<title>[^<]*<\/title>/, `<title>${escText(title)}</title>`);
}

function setCanonical(html, href) {
  return html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${escAttr(href)}">`,
  );
}

function removeCanonical(html) {
  return html.replace(/<link rel="canonical" href="[^"]*">\n?/, '');
}

function setOgType(html, type) {
  return html.replace(/(<meta property="og:type" content=")[^"]*(")/, `$1${type}$2`);
}

function renderPage(entry, outFile) {
  const body = render(entry.path);
  const url = `${SITE_URL}${entry.path}`;
  let html = template;

  html = setTitle(html, entry.title);
  html = setMeta(html, 'name', 'description', entry.description);
  html = setMeta(
    html,
    'name',
    'robots',
    entry.noindex ? 'noindex, follow' : 'index, follow',
  );
  html = entry.noindex
    ? removeCanonical(html)
    : setCanonical(html, url);

  html = setOgType(html, entry.ogType ?? 'website');
  html = setMeta(html, 'property', 'og:title', entry.title);
  html = setMeta(html, 'property', 'og:description', entry.description);
  html = setMeta(html, 'property', 'og:url', url);
  html = setMeta(html, 'property', 'og:image', OG_IMAGE);
  html = setMeta(html, 'property', 'og:image:alt', OG_IMAGE_ALT);

  html = setMeta(html, 'name', 'twitter:title', entry.title);
  html = setMeta(html, 'name', 'twitter:description', entry.description);

  if (entry.jsonLd) {
    const json = JSON.stringify(entry.jsonLd).replace(/</g, '\\u003c');
    html = html.replace(
      '</head>',
      `  <script type="application/ld+json">${json}</script>\n</head>`,
    );
  }

  html = html.replace(
    '<div id="root"></div>',
    () => `<div id="root">${body}</div>`,
  );

  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html);
}

for (const entry of SEO_MANIFEST) {
  const outFile =
    entry.path === '/'
      ? join(distDir, 'index.html')
      : join(distDir, entry.path.slice(1), 'index.html');
  renderPage(entry, outFile);
}

// 404 page for Cloudflare Pages / most static hosts.
renderPage(NOT_FOUND_ENTRY, join(distDir, '404.html'));

// Sitemap generated from the manifest so it cannot drift from the routes.
writeFileSync(join(distDir, 'sitemap.xml'), buildSitemapXml());

// The SSR build is a build-time artifact; keep only the client bundle in dist.
rmSync(join(root, 'dist-server'), { recursive: true, force: true });

console.log(
  `prerendered ${SEO_MANIFEST.length} pages + 404.html, regenerated sitemap.xml`,
);
