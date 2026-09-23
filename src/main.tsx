import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const rootEl = document.getElementById('root')!

// Pages are pre-rendered to static HTML, so hydrate over that markup. If a page
// wasn't pre-rendered for some reason, fall back to a fresh client render.
if (rootEl.hasChildNodes()) {
  hydrateRoot(
    rootEl,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
