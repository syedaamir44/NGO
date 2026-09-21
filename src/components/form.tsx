import { useRef, useState, type ReactNode, type FormEvent } from 'react'
import { FORM_ENDPOINTS, CONTACT_EMAIL, type FormKey } from '../config'
import { Label } from './ui'

/* ==================================================================
   Page header — the forest band at the top of every inner page
   ================================================================== */
export function PageHeader({
  crumb,
  label,
  title,
  intro,
}: {
  crumb: string
  label: string
  title: string
  intro: string
}) {
  return (
    <header className="bg-ink text-[#E7DECC] pt-28 pb-12 sm:pt-32 sm:pb-14">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14">
        <div className="text-[0.82rem] text-[#A9BDB7] mb-4">
          <a href="#/home" className="border-b border-white/20 pb-1 hover:text-white transition-colors duration-200">
            Home
          </a>
          <span className="mx-2">/</span>
          {crumb}
        </div>
        <Label tone="light">{label}</Label>
        <h1 className="mt-4 font-serif font-normal text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-[#C9BFAB] leading-relaxed">{intro}</p>
      </div>
    </header>
  )
}

/* ==================================================================
   Field primitives
   ================================================================== */
const CONTROL =
  'w-full max-w-full px-3.5 py-3 min-h-[50px] leading-snug text-ink bg-cream border-[1.5px] border-line rounded-sm outline-none transition-colors duration-150 focus:border-ink focus:ring-4 focus:ring-ink/10'

export function Req() {
  return <span className="text-err">*</span>
}

function Hint({ children }: { children: ReactNode }) {
  return (
    <span className="block mt-1 font-normal text-[0.83rem] text-muted leading-snug">{children}</span>
  )
}

type BaseProps = {
  name: string
  label: ReactNode
  hint?: ReactNode
  required?: boolean
  full?: boolean
}

function FieldShell({
  full,
  groupRequired,
  children,
}: {
  full?: boolean
  groupRequired?: boolean
  children: ReactNode
}) {
  return (
    <div
      className={`eif-field flex flex-col mb-5 min-w-0 ${full ? 'sm:col-span-2' : ''}`}
      data-required={groupRequired ? 'true' : undefined}
    >
      {children}
      <span className="eif-err hidden mt-1.5 text-[0.85rem] text-err" />
    </div>
  )
}

function FieldLabel({ htmlFor, children, required, hint }: { htmlFor?: string; children: ReactNode; required?: boolean; hint?: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block flex-1 mb-1.5 text-sm font-semibold text-ink">
      {children} {required && <Req />}
      {hint && <Hint>{hint}</Hint>}
    </label>
  )
}

export function TextField({
  name,
  label,
  hint,
  required,
  full,
  type = 'text',
  placeholder,
  autoComplete,
  min,
  style,
}: BaseProps & {
  type?: 'text' | 'email' | 'tel' | 'number' | 'date'
  placeholder?: string
  autoComplete?: string
  min?: number
  style?: React.CSSProperties
}) {
  const id = `f-${name.replace(/\W+/g, '-').toLowerCase()}`
  return (
    <FieldShell full={full}>
      <FieldLabel htmlFor={id} required={required} hint={hint}>
        {label}
      </FieldLabel>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        min={min}
        style={style}
        className={CONTROL}
      />
    </FieldShell>
  )
}

export function SelectField({
  name,
  label,
  hint,
  required,
  full,
  options,
  placeholder = 'Select…',
}: BaseProps & { options: string[]; placeholder?: string }) {
  const id = `f-${name.replace(/\W+/g, '-').toLowerCase()}`
  return (
    <FieldShell full={full}>
      <FieldLabel htmlFor={id} required={required} hint={hint}>
        {label}
      </FieldLabel>
      <select
        id={id}
        name={name}
        required={required}
        className={`${CONTROL} appearance-none pr-10 bg-no-repeat`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2312403A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
          backgroundPosition: 'right 12px center',
          backgroundSize: '20px',
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </FieldShell>
  )
}

export function TextAreaField({ name, label, hint, required, full, placeholder }: BaseProps & { placeholder?: string }) {
  const id = `f-${name.replace(/\W+/g, '-').toLowerCase()}`
  return (
    <FieldShell full={full}>
      <FieldLabel htmlFor={id} required={required} hint={hint}>
        {label}
      </FieldLabel>
      <textarea
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        className={`${CONTROL} min-h-[110px] resize-y`}
      />
    </FieldShell>
  )
}

export type Choice = { value: string; title: string; note?: string }

export function ChoiceGroup({
  name,
  label,
  required,
  type = 'radio',
  inline,
  choices,
  full,
}: {
  name: string
  label?: ReactNode
  required?: boolean
  type?: 'radio' | 'checkbox'
  inline?: boolean
  choices: Choice[]
  full?: boolean
}) {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (value: string, checked: boolean) => {
    setSelected((prev) => {
      if (type === 'radio') return checked ? [value] : []
      return checked ? [...prev, value] : prev.filter((v) => v !== value)
    })
  }

  return (
    <FieldShell full={full} groupRequired={required}>
      {label && (
        <span className="block mb-1.5 text-sm font-semibold text-ink">
          {label} {required && <Req />}
        </span>
      )}
      <div className={`grid gap-2.5 ${inline ? 'sm:grid-cols-2 md:grid-cols-3' : ''}`}>
        {choices.map((c) => {
          const checked = selected.includes(c.value)
          return (
            <label
              key={c.value}
              className={`flex items-start gap-3 p-3.5 min-h-[52px] border-[1.5px] rounded-sm cursor-pointer text-[15px] transition-colors duration-150 ${
                checked ? 'border-ink bg-[#F4F8F6]' : 'border-line bg-cream'
              }`}
            >
              <input
                type={type}
                name={name}
                value={c.value}
                checked={checked}
                onChange={(e) => toggle(c.value, e.currentTarget.checked)}
                className="w-5 h-5 mt-0.5 shrink-0 accent-[#12403A]"
              />
              <span className="min-w-0">
                <strong className="block font-medium text-[15px] text-ink">{c.title}</strong>
                {c.note && (
                  <small className="block mt-0.5 text-[0.85rem] text-muted leading-snug">
                    {c.note}
                  </small>
                )}
              </span>
            </label>
          )
        })}
      </div>
    </FieldShell>
  )
}

export function Fieldset({ legend, note, children }: { legend: string; note?: ReactNode; children: ReactNode }) {
  return (
    <fieldset className="mb-8 min-w-0 border-0 p-0">
      <legend className="w-full pb-2.5 mb-4 font-serif text-[1.18rem] text-ink-deep border-b-2 border-ink">
        {legend}
      </legend>
      {note && <p className="mb-4 text-sm text-muted leading-relaxed">{note}</p>}
      {children}
    </fieldset>
  )
}

export function Grid2({ children }: { children: ReactNode }) {
  return <div className="grid sm:grid-cols-2 sm:gap-x-5">{children}</div>
}

/* ==================================================================
   Setup notice — shown until an endpoint is configured
   ================================================================== */
export function SetupNotice({ formKey }: { formKey: FormKey }) {
  if (FORM_ENDPOINTS[formKey]) return null
  return (
    <div className="mb-7 bg-[#FDF3DC] border-[1.5px] border-l-[5px] border-[#E0B95E] px-4 py-3.5 rounded-sm text-sm text-[#5C4409] leading-relaxed">
      <strong className="block mb-1">⚙ Setup needed before you publish this page</strong>
      This form is not yet connected to a mailbox, so submissions will not reach anyone. Open{' '}
      <code className="bg-[#F5E4BC] px-1.5 py-0.5 rounded-[2px] break-words">src/config.ts</code> and
      paste your form endpoint into{' '}
      <code className="bg-[#F5E4BC] px-1.5 py-0.5 rounded-[2px]">FORM_ENDPOINTS.{formKey}</code>. This
      notice disappears automatically once it is set.
    </div>
  )
}

/* ==================================================================
   Success panel
   ================================================================== */
export function SuccessPanel({
  label,
  title,
  intro,
  steps,
  delivered,
  children,
}: {
  label: string
  title: string
  intro: ReactNode
  steps: string[]
  delivered: boolean
  children?: ReactNode
}) {
  return (
    <div className="border-[1.5px] border-ink bg-cream p-6 sm:p-8 rounded-sm">
      <Label>{label}</Label>
      <h2 className="mt-4 font-serif font-normal text-2xl text-ink-deep">{title}</h2>
      <p className="mt-3 text-[15px] text-muted leading-relaxed">{intro}</p>
      <ul className="mt-4">
        {steps.map((s) => (
          <li
            key={s}
            className="relative pl-6 py-2.5 border-b border-line last:border-b-0 text-[15px] text-muted leading-relaxed"
          >
            <span className="absolute left-0 top-2.5 font-bold text-marigold">—</span>
            {s}
          </li>
        ))}
      </ul>
      {children}
      {!delivered && (
        <p className="mt-5 bg-[#FDF3DC] border-l-4 border-[#E0B95E] px-4 py-3 text-[0.88rem] text-[#5C4409] leading-relaxed">
          <strong>Note for the site administrator:</strong> this form is not connected to a mailbox
          yet, so this submission was not delivered. See{' '}
          <code className="bg-[#F5E4BC] px-1 rounded-[2px]">FORM_ENDPOINTS</code> in{' '}
          <code className="bg-[#F5E4BC] px-1 rounded-[2px]">src/config.ts</code>.
        </p>
      )}
      <div className="mt-6">
        <a
          href="#/home"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg border border-ink text-ink hover:bg-ink hover:text-cream transition-colors duration-200"
        >
          ← Back to home
        </a>
      </div>
    </div>
  )
}

/* ==================================================================
   Validation + submit
   ================================================================== */
function showError(field: Element, message: string) {
  const control = field.querySelector('input, select, textarea')
  const msg = field.querySelector('.eif-err')
  control?.classList.add('!border-err', 'bg-[#FDF4F2]')
  if (msg) {
    msg.textContent = message
    msg.classList.remove('hidden')
    msg.classList.add('block')
  }
}

function clearError(field: Element) {
  const control = field.querySelector('input, select, textarea')
  const msg = field.querySelector('.eif-err')
  control?.classList.remove('!border-err', 'bg-[#FDF4F2]')
  msg?.classList.add('hidden')
  msg?.classList.remove('block')
}

function validateField(field: Element): boolean {
  clearError(field)

  const group = field.querySelectorAll<HTMLInputElement>('input[type=radio], input[type=checkbox]')
  if (group.length && (field as HTMLElement).dataset.required === 'true') {
    if (!Array.from(group).some((i) => i.checked)) {
      showError(field, 'Please choose an option.')
      return false
    }
    return true
  }

  const control = field.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
    'input, select, textarea',
  )
  if (!control) return true

  const value = (control.value || '').trim()
  if ((control as HTMLInputElement).required && !value) {
    showError(field, 'This field is required.')
    return false
  }
  if (!value) return true

  if (control instanceof HTMLInputElement) {
    if (control.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      showError(field, 'Please enter a valid email address.')
      return false
    }
    if (control.type === 'tel') {
      const digits = value.replace(/\D/g, '')
      if (digits.length < 10 || digits.length > 12) {
        showError(field, 'Please enter a valid 10-digit mobile number.')
        return false
      }
    }
  }
  return true
}

export function useEifForm(key: FormKey) {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [delivered, setDelivered] = useState(false)
  const [busy, setBusy] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    let firstBad: Element | null = null
    form.querySelectorAll('.eif-field').forEach((field) => {
      if (!validateField(field) && !firstBad) firstBad = field
    })
    if (firstBad) {
      const bad = firstBad as HTMLElement
      bad.scrollIntoView({ behavior: 'smooth', block: 'center' })
      bad.querySelector<HTMLElement>('input, select, textarea')?.focus({ preventScroll: true })
      return
    }

    setBusy(true)

    const data: Record<string, string> = {}
    new FormData(form).forEach((value, k) => {
      const v = String(value)
      data[k] = k in data ? `${data[k]}, ${v}` : v
    })

    const endpoint = FORM_ENDPOINTS[key]
    let ok = false
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error(`Server returned ${res.status}`)
        ok = true
      } catch {
        setBusy(false)
        window.alert(
          `Sorry — we could not submit your form just now.\n\nPlease check your internet connection and try again, or email your details to ${CONTACT_EMAIL}`,
        )
        return
      }
    } else {
      console.warn(`[SSF] No endpoint configured for '${key}'. Submission NOT delivered.`)
      console.table(data)
    }

    setDelivered(ok)
    setSubmitted(true)
    setBusy(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /** Clear a field’s error as soon as the person starts fixing it. */
  const onInput = (e: FormEvent<HTMLFormElement>) => {
    const field = (e.target as HTMLElement).closest('.eif-field')
    if (field) clearError(field)
  }

  return { formRef, submitted, delivered, busy, onSubmit, onInput }
}

export function SubmitRow({ busy, label, note }: { busy: boolean; label: string; note?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-6 mt-1 border-t border-line">
      <button
        type="submit"
        disabled={busy}
        className="inline-flex items-center justify-center px-7 py-3.5 min-h-[52px] text-sm font-medium rounded-lg bg-ink text-cream hover:bg-ink-deep transition-colors duration-200 disabled:opacity-60"
      >
        {busy ? 'Submitting…' : label}
      </button>
      {note && <span className="text-[0.86rem] text-muted">{note}</span>}
    </div>
  )
}
