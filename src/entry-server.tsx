import { renderToString } from 'react-dom/server'
import App from './App'
import { PAGES, pageToPath, META, SITE_URL } from './lib/useHashRoute'

/** Every route to pre-render, with its head content. Consumed by prerender.mjs. */
export const routes = PAGES.map((page) => ({
  page,
  path: pageToPath(page),
  url: SITE_URL + pageToPath(page),
  title: META[page].title,
  description: META[page].description,
}))

/** Render the app to static HTML for a given path (Node-only, no browser). */
export function render(path: string): string {
  ;(globalThis as { __SSG_PATH__?: string }).__SSG_PATH__ = path
  return renderToString(<App />)
}
