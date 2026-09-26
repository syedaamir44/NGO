import { useEffect, useState } from 'react'
import { PROGRAMME } from '../config'

// Bump this key when the announcement changes so returning visitors see it once.
const SEEN_KEY = 'ssf-annc-2026'

/**
 * A one-time launch announcement for the application window. Appears shortly
 * after load, only for visitors who haven't dismissed it. Rendered client-side
 * only (returns null on the server / first paint), so it never causes a
 * hydration mismatch, and it overlays the page without touching the layout.
 */
export default function AnnouncementModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let dismissed = false
    try {
      dismissed = localStorage.getItem(SEEN_KEY) === '1'
    } catch {
      /* private mode / storage blocked — just show it */
    }
    if (dismissed) return
    const t = setTimeout(() => setOpen(true), 700)
    return () => clearTimeout(t)
  }, [])

  const close = () => {
    try {
      localStorage.setItem(SEEN_KEY, '1')
    } catch {
      /* ignore */
    }
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="annc-title"
    >
      <div className="absolute inset-0 bg-ink-deep/60 backdrop-blur-sm" onClick={close} />
      <div className="relative w-full max-w-md bg-cream border-[1.5px] border-ink rounded-sm shadow-2xl overflow-hidden">
        <div className="relative bg-ink text-cream px-6 py-5">
          <span className="block text-[11px] uppercase tracking-[0.2em] text-marigold-l">Now open</span>
          <h2 id="annc-title" className="mt-1 font-serif text-xl sm:text-2xl leading-tight">
            {PROGRAMME.name}
          </h2>
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-3 top-3 h-8 w-8 grid place-items-center text-cream/70 hover:text-white text-xl leading-none"
          >
            ×
          </button>
        </div>
        <div className="p-6">
          <p className="text-[15px] text-muted leading-relaxed">
            Applications are open{' '}
            <strong className="text-ink-deep">{PROGRAMME.window}</strong>. Merit scholarships for
            class 11 and 12 students from low-income families across Karnataka.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/apply"
              onClick={close}
              className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] text-sm font-medium rounded-lg bg-ink text-cream hover:bg-ink-deep transition-colors duration-200"
            >
              Apply now →
            </a>
            <button
              type="button"
              onClick={close}
              className="inline-flex items-center justify-center px-5 py-3 min-h-[48px] text-sm font-medium rounded-lg border border-ink text-ink hover:bg-ink hover:text-cream transition-colors duration-200"
            >
              Maybe later
            </button>
          </div>
          <p className="mt-4 text-[0.8rem] text-muted">Applying is free. No fee at any stage.</p>
        </div>
      </div>
    </div>
  )
}
