/**
 * Offline draft autosave for the scholarship application form.
 *
 * The form holds its answers only in the page while it is open, so a dropped
 * connection, an accidental refresh or a closed tab would lose everything the
 * student typed. This saves a draft to the student's own browser (localStorage)
 * as they go, and restores it when they return — on the same device/browser.
 * It never leaves the device and is cleared once the application is submitted.
 */

const KEY = 'ssm_apply_draft_v1'
const MAX_AGE_MS = 45 * 24 * 60 * 60 * 1000 // ignore drafts older than ~45 days
// Not saved: the honeypot, the hidden form marker, and the consent checkbox
// (the student should actively re-accept the declaration, never have it pre-ticked).
const SKIP = new Set(['_gotcha', '_form', 'Declaration'])

type Draft = {
  v: number
  ts: number
  step: number
  fields: Record<string, string>
  checks: Record<string, string[]>
}

function serialize(form: HTMLFormElement, step: number): Draft {
  const fields: Record<string, string> = {}
  const checks: Record<string, string[]> = {}
  form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
    'input, select, textarea',
  ).forEach((el) => {
    const name = el.name
    if (!name || SKIP.has(name)) return
    const type = (el as HTMLInputElement).type
    if (type === 'checkbox' || type === 'radio') {
      if ((el as HTMLInputElement).checked) (checks[name] ||= []).push(el.value)
    } else if (el.value) {
      fields[name] = el.value
    }
  })
  return { v: 1, ts: Date.now(), step, fields, checks }
}

export function saveDraft(form: HTMLFormElement | null, step: number): void {
  if (!form) return
  try {
    localStorage.setItem(KEY, JSON.stringify(serialize(form, step)))
  } catch {
    /* storage full / private mode — best effort only */
  }
}

export function loadDraft(): Draft | null {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    const d = JSON.parse(raw) as Draft
    if (!d || typeof d !== 'object') return null
    if (!d.ts || Date.now() - d.ts > MAX_AGE_MS) return null
    if (!d.fields || Object.keys(d.fields).length === 0) return null
    return d
  } catch {
    return null
  }
}

export function clearDraft(): void {
  try {
    localStorage.removeItem(KEY)
  } catch {
    /* ignore */
  }
}

/** Set a value on a React-controlled input/select/textarea so React notices. */
function setNativeValue(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, value: string) {
  const proto =
    el instanceof HTMLTextAreaElement
      ? HTMLTextAreaElement.prototype
      : el instanceof HTMLSelectElement
        ? HTMLSelectElement.prototype
        : HTMLInputElement.prototype
  const setter = Object.getOwnPropertyDescriptor(proto, 'value')?.set
  if (setter) setter.call(el, value)
  else el.value = value
  el.dispatchEvent(new Event('input', { bubbles: true }))
  el.dispatchEvent(new Event('change', { bubbles: true }))
}

function setControl(form: HTMLFormElement, name: string, value: string) {
  const el = form.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
    `[name="${CSS.escape(name)}"]`,
  )
  if (!el) return false
  if (el instanceof HTMLSelectElement) {
    const ok = Array.from(el.options).some((o) => o.value === value)
    if (!ok) return false
  }
  setNativeValue(el, value)
  return true
}

/**
 * Restore a saved draft into the live form. Two passes: first the selects that
 * reveal conditional fields (stream, class), then — once React has rendered
 * those fields — every other field, then the checkboxes/radios.
 */
export function restoreDraft(form: HTMLFormElement, draft: Draft): void {
  const drivers = ['Stream', 'Current class']
  for (const name of drivers) {
    if (draft.fields[name]) setControl(form, name, draft.fields[name])
  }
  setTimeout(() => {
    for (const [name, value] of Object.entries(draft.fields)) {
      if (!drivers.includes(name)) setControl(form, name, value)
    }
    for (const [name, values] of Object.entries(draft.checks)) {
      for (const value of values) {
        const el = form.querySelector<HTMLInputElement>(
          `input[name="${CSS.escape(name)}"][value="${CSS.escape(value)}"]`,
        )
        if (el && !el.checked) el.click()
      }
    }
  }, 90)
}
