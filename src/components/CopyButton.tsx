import { useState } from 'react'

/**
 * Copy-to-clipboard with a fallback for iOS Safari and older Android,
 * where the async clipboard API is unavailable outside a secure context.
 */
export default function CopyButton({ value }: { value: string }) {
  const [done, setDone] = useState(false)

  const copy = async () => {
    let ok = false
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(value)
        ok = true
      } catch {
        ok = false
      }
    }
    if (!ok) {
      const el = document.createElement('textarea')
      el.value = value
      el.setAttribute('readonly', '')
      el.style.position = 'fixed'
      el.style.top = '0'
      el.style.opacity = '0'
      document.body.appendChild(el)
      el.select()
      el.setSelectionRange(0, value.length) // iOS needs an explicit range
      try {
        document.execCommand('copy')
      } catch {
        /* nothing more we can do */
      }
      document.body.removeChild(el)
    }
    setDone(true)
    window.setTimeout(() => setDone(false), 1800)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`shrink-0 min-h-[44px] px-4 py-2 text-[0.85rem] font-semibold rounded-sm border transition-colors duration-200 ${
        done
          ? 'bg-ink text-cream border-ink'
          : 'bg-sand text-ink border-line hover:bg-marigold-l hover:border-marigold'
      }`}
    >
      {done ? 'Copied ✓' : 'Copy'}
    </button>
  )
}
