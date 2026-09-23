// Static pre-render. Runs after the client and SSR builds:
//   1. render each route to HTML with react-dom/server (no browser needed)
//   2. fill the per-page <head> placeholders in the built index.html template
//   3. write one static file per route (dist/<route>/index.html)
//   4. emit sitemap.xml from the same route list
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const { render, routes } = await import(
  pathToFileURL(path.resolve('dist-server/entry-server.js')).href
)

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

for (const r of routes) {
  const appHtml = render(r.path)
  const page = template
    .replaceAll('__SEO_TITLE__', esc(r.title))
    .replaceAll('__SEO_DESC__', esc(r.description))
    .replaceAll('__SEO_URL__', esc(r.url))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const outFile =
    r.path === '/' ? path.join(dist, 'index.html') : path.join(dist, r.path, 'index.html')
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, page)
  console.log('prerendered', r.path, '→', path.relative(dist, outFile))
}

// sitemap.xml — kept in sync with the route list.
const today = new Date().toISOString().slice(0, 10)
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map(
      (r) =>
        `  <url><loc>${r.url}</loc><lastmod>${today}</lastmod>` +
        `<priority>${r.path === '/' ? '1.0' : '0.7'}</priority></url>`,
    )
    .join('\n') +
  `\n</urlset>\n`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log('wrote sitemap.xml with', routes.length, 'urls')
