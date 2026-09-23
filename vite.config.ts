import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/' — the site is served from the domain root, and prerendered routes
// live in nested folders (e.g. /apply/index.html), so asset URLs must be
// absolute, not relative.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
