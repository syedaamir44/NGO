import { useRef, useState, type ReactNode, type FormEvent } from 'react'
import { FORM_ENDPOINTS, CONTACT_EMAIL, CONTACT_PHONE, type FormKey } from '../config'
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
          <a href="/" className="border-b border-white/20 pb-1 hover:text-white transition-colors duration-200">
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

/** Named validation rules, checked in validateField. */
export type FieldRule =
  | 'aadhaar'
  | 'mobile'
  | 'pin'
  | 'ifsc'
  | 'account'
  | 'percentage'
  | 'year'
  | 'amount'

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
  max,
  step,
  style,
  numeric,
  maxLength,
  rule,
  inputMode,
}: BaseProps & {
  type?: 'text' | 'email' | 'tel' | 'number' | 'date'
  placeholder?: string
  autoComplete?: string
  min?: number
  max?: number
  step?: number | string
  style?: React.CSSProperties
  /** Restrict typing to digits only (also caps at maxLength). */
  numeric?: boolean
  maxLength?: number
  /** A named validation rule applied on submit. */
  rule?: FieldRule
  inputMode?: 'text' | 'numeric' | 'decimal' | 'tel' | 'email'
}) {
  const id = `f-${name.replace(/\W+/g, '-').toLowerCase()}`
  // Keep a digits-only field digits-only as the person types, and enforce the
  // length cap on paste as well as on keystroke.
  const filterDigits = numeric
    ? (e: React.FormEvent<HTMLInputElement>) => {
        const el = e.currentTarget
        let v = el.value.replace(/\D+/g, '')
        if (maxLength) v = v.slice(0, maxLength)
        if (v !== el.value) el.value = v
      }
    : undefined
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
        max={max}
        step={step}
        maxLength={numeric ? undefined : maxLength}
        inputMode={inputMode || (numeric ? 'numeric' : undefined)}
        onInput={filterDigits}
        data-rule={rule}
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
  value,
  onChange,
}: BaseProps & {
  options: string[]
  placeholder?: string
  /** Pass both to make the select controlled (used for conditional fields). */
  value?: string
  onChange?: (v: string) => void
}) {
  const id = `f-${name.replace(/\W+/g, '-').toLowerCase()}`
  const controlled = value !== undefined && onChange !== undefined
  return (
    <FieldShell full={full}>
      <FieldLabel htmlFor={id} required={required} hint={hint}>
        {label}
      </FieldLabel>
      <select
        id={id}
        name={name}
        required={required}
        value={controlled ? value : undefined}
        onChange={controlled ? (e) => onChange!(e.currentTarget.value) : undefined}
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

/**
 * Competitive exams offered for each stream. Shown once a stream is picked.
 */
const EXAMS_BY_STREAM: Record<string, string[]> = {
  Science: ['JEE (Main / Advanced)', 'KCET', 'NEET', 'CUET', 'Other / not decided yet'],
  Commerce: [
    'CA Foundation',
    'CS Foundation',
    'CMA Foundation',
    'CUET',
    'IPMAT (integrated BBA–MBA)',
    'CLAT',
    'Other / not decided yet',
  ],
  'Arts / Humanities': ['CUET', 'CLAT', 'NDA', 'NID / NIFT (design)', 'Other / not decided yet'],
}

/**
 * The whole academic section, which adapts to the class the student is in.
 *
 * A class 11 student gives their present (class 11) details plus class 10, and
 * the exams they plan to take. A class 12 student also gives their completed
 * class 11 result and the exams they are preparing for now. Class-12-only
 * fields never appear for a class 11 student. All state is local; every input
 * it renders is collected by the form's FormData by its `name`.
 */
export function AcademicSection() {
  const [currentClass, setCurrentClass] = useState('')
  const [stream, setStream] = useState('')
  const is11 = currentClass === 'Class 11'
  const is12 = currentClass === 'Class 12'
  const exams = EXAMS_BY_STREAM[stream]
  const examLabel = is11
    ? 'Which competitive exam(s) do you plan to take?'
    : 'Which competitive exam(s) are you preparing for?'

  return (
    <Grid2>
      {/* Stream and class are always visible; the rest of the section and the
          exam list adapt to them. */}
      <SelectField
        name="Stream"
        label="Which stream are you in?"
        required
        options={['Science', 'Commerce', 'Arts / Humanities', 'Other']}
        value={stream}
        onChange={setStream}
        hint="Sets the competitive exams shown below"
      />
      <SelectField
        name="Current class"
        label="Which class are you in now?"
        required
        options={['Class 11', 'Class 12']}
        value={currentClass}
        onChange={setCurrentClass}
        hint="Both class 11 and class 12 students may apply this cycle"
      />

      {exams && (
        <ChoiceGroup
          key={stream}
          full
          required
          type="checkbox"
          name="Competitive exams"
          label={examLabel}
          choices={exams.map((e) => ({ value: e, title: e }))}
        />
      )}
      {stream === 'Other' && (
        <TextField
          full
          name="Competitive exam (other)"
          label={examLabel}
          placeholder="Name the exam, or write ‘not decided yet’"
        />
      )}

      {currentClass && (
        <>
          <TextField
            full
            name="Present college"
            label={`Name of your present college${is11 ? ' (class 11)' : ' (class 12)'}`}
            required
          />
          <TextField
            name="Board"
            label={is11 ? 'Board of your present college' : 'Board of your class 12 / present college'}
            required
            placeholder="e.g. Karnataka PU Board, CBSE, ICSE"
          />

          {is12 && (
            <>
              <TextField
                full
                name="Class 11 college"
                label="Name of the college where you studied class 11"
                required
                hint="If it is the same as your present college, write the same name again"
              />
              <TextField
                name="Class 11 percentage"
                label="Class 11 percentage"
                type="number"
                min={0}
                max={100}
                step="0.01"
                rule="percentage"
                required
                placeholder="e.g. 72"
                hint="Number only, no % sign"
              />
            </>
          )}

          <TextField full name="Class 10 school" label="Name of your class 10 school" required />
          <TextField
            name="Class 10 year of passing"
            label="Year of passing class 10"
            required
            numeric
            maxLength={4}
            rule="year"
            placeholder="e.g. 2024"
          />
          <TextField
            name="Class 10 register number"
            label="Class 10 register number"
            required
            hint="As printed on your class 10 marksheet"
          />
          <TextField
            name="Class 10 percentage"
            label="Class 10 percentage"
            type="number"
            min={0}
            max={100}
            step="0.01"
            rule="percentage"
            required
            placeholder="e.g. 84"
            hint="Enter the number only, without the % sign"
          />
        </>
      )}
    </Grid2>
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
          href="/"
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
    const bad = (m: string) => {
      showError(field, m)
      return false
    }

    if (control.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      return bad('Please enter a valid email address.')
    }

    switch (control.dataset.rule) {
      case 'mobile':
        if (!/^\d{10}$/.test(value)) return bad('Enter a 10-digit mobile number — digits only.')
        if (!/^[6-9]/.test(value)) return bad('An Indian mobile number starts with 6, 7, 8 or 9.')
        break
      case 'aadhaar':
        if (!/^\d{12}$/.test(value)) return bad('Enter the 12-digit Aadhaar number — digits only.')
        break
      case 'pin':
        if (!/^\d{6}$/.test(value)) return bad('Enter a 6-digit PIN code.')
        break
      case 'account':
        if (!/^\d{9,18}$/.test(value)) return bad('Enter a valid account number (9–18 digits).')
        break
      case 'ifsc':
        if (!/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/.test(value))
          return bad('Enter a valid IFSC code, e.g. SBIN0001234.')
        break
      case 'year': {
        const now = new Date().getFullYear()
        const y = Number(value)
        if (!/^\d{4}$/.test(value) || y < 1990 || y > now)
          return bad(`Enter a 4-digit year between 1990 and ${now}.`)
        break
      }
      case 'percentage': {
        const n = Number(value)
        if (Number.isNaN(n) || n < 0 || n > 100)
          return bad('Enter a percentage between 0 and 100.')
        break
      }
      case 'amount': {
        const n = Number(value)
        if (Number.isNaN(n) || n < 0) return bad('Enter an amount in rupees (0 or more).')
        break
      }
    }
  }
  return true
}

/**
 * Validate every field inside one wizard step. Scrolls to and focuses the first
 * invalid field. Returns true when the step is complete.
 */
export function validateStep(container: Element | null): boolean {
  if (!container) return true
  let firstBad: Element | null = null
  container.querySelectorAll('.eif-field').forEach((field) => {
    if (!validateField(field) && !firstBad) firstBad = field
  })
  if (firstBad) {
    const bad = firstBad as HTMLElement
    bad.scrollIntoView({ behavior: 'smooth', block: 'center' })
    bad.querySelector<HTMLElement>('input, select, textarea')?.focus({ preventScroll: true })
    return false
  }
  return true
}

/** Progress indicator for the multi-step application form. */
export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  const pct = Math.round(((current + 1) / steps.length) * 100)
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-ink">
          Step {current + 1} of {steps.length}
        </span>
        <span className="text-sm text-muted text-right">{steps[current]}</span>
      </div>
      <div className="h-2 w-full bg-sand rounded-full overflow-hidden">
        <div
          className="h-full bg-ink rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <ol className="hidden sm:flex mt-4 gap-2 justify-between">
        {steps.map((s, i) => (
          <li key={s} className="flex-1 flex flex-col items-center text-center">
            <span
              className={`w-7 h-7 grid place-items-center rounded-full text-[0.78rem] font-semibold border-[1.5px] ${
                i < current
                  ? 'bg-ink text-cream border-ink'
                  : i === current
                    ? 'border-ink text-ink'
                    : 'border-line text-muted'
              }`}
            >
              {i < current ? '✓' : i + 1}
            </span>
            <span
              className={`mt-1.5 text-[0.72rem] leading-tight ${
                i === current ? 'text-ink font-medium' : 'text-muted'
              }`}
            >
              {s}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

/** Back / Next / Submit controls for the wizard. */
export function WizardNav({
  step,
  total,
  busy,
  onBack,
  onNext,
}: {
  step: number
  total: number
  busy: boolean
  onBack: () => void
  onNext: () => void
}) {
  const isLast = step === total - 1
  return (
    <div className="flex flex-wrap items-center gap-3 pt-6 mt-1 border-t border-line">
      {step > 0 && (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center justify-center px-6 py-3.5 min-h-[52px] text-sm font-medium rounded-lg border border-ink text-ink hover:bg-ink hover:text-cream transition-colors duration-200"
        >
          ← Back
        </button>
      )}
      {isLast ? (
        <button
          type="submit"
          disabled={busy}
          className="inline-flex items-center justify-center px-7 py-3.5 min-h-[52px] text-sm font-medium rounded-lg bg-ink text-cream hover:bg-ink-deep transition-colors duration-200 disabled:opacity-60"
        >
          {busy ? 'Submitting…' : 'Submit application'}
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center justify-center px-7 py-3.5 min-h-[52px] text-sm font-medium rounded-lg bg-ink text-cream hover:bg-ink-deep transition-colors duration-200"
        >
          Continue →
        </button>
      )}
      {isLast && (
        <span className="text-[0.86rem] text-muted">
          No fee is payable. We will never ask you for money.
        </span>
      )}
    </div>
  )
}

export function useEifForm(key: FormKey) {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [delivered, setDelivered] = useState(false)
  const [busy, setBusy] = useState(false)
  const [reference, setReference] = useState<string | null>(null)
  const [submittedData, setSubmittedData] = useState<Record<string, string>>({})

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
    setSubmittedData(data)

    const endpoint = FORM_ENDPOINTS[key]
    let ok = false
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          // text/plain keeps this a CORS "simple request", so the browser sends
          // it directly with no preflight — the most reliable path across mobile
          // browsers and flaky networks. The Supabase function parses the JSON
          // body regardless of the content-type header.
          headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error(`Server returned ${res.status}`)
        ok = true
        const payload = await res.json().catch(() => null)
        if (payload && typeof payload.reference === 'string') setReference(payload.reference)
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

  return { formRef, submitted, delivered, busy, reference, submittedData, onSubmit, onInput }
}

/** The application fields, grouped as they appear on the printed acknowledgment. */
const ACK_GROUPS: { title: string; fields: string[] }[] = [
  {
    title: 'Student details',
    fields: [
      'Full name', 'Date of birth', 'Gender', 'Religion', 'Category',
      'Aadhaar number', 'Mobile number', 'Email', 'Karnataka connection',
    ],
  },
  { title: 'Address', fields: ['Address', 'City or town', 'District', 'State', 'PIN code'] },
  {
    title: 'Academic details',
    fields: [
      'Current class', 'Present college', 'Board', 'Stream', 'Competitive exams',
      'Competitive exam (other)', 'Class 11 college', 'Class 11 percentage',
      'Class 10 school', 'Class 10 year of passing', 'Class 10 register number', 'Class 10 percentage',
    ],
  },
  { title: 'Fees', fields: ['Admission fee', 'Tuition fee'] },
  {
    title: 'Family & financial details',
    fields: [
      "Father's name", "Father's education qualification", "Father's occupation",
      "Mother's name", "Mother's education qualification", "Mother's occupation",
      'Guardian name and details', 'Annual family income', 'Dependents',
    ],
  },
  { title: 'Bank account', fields: ['Bank account number', 'IFSC code', 'Bank branch', 'Bank name'] },
  {
    title: 'Additional information',
    fields: ['Disability', 'Type of disability', 'Percentage of disability', 'Co-curricular activities'],
  },
  {
    title: 'Your situation',
    fields: ['Why you need this scholarship', 'What you want to study', 'Also interested in'],
  },
  {
    title: 'Parent / guardian consent',
    fields: [
      'Parent/guardian name', 'Relationship to applicant', 'Parent/guardian mobile',
      'Parent/guardian email', 'Parent consent',
    ],
  },
]

const LONG_FIELDS = new Set([
  'Address', 'Guardian name and details', 'Co-curricular activities',
  'Why you need this scholarship', 'What you want to study',
])

/**
 * The printable application acknowledgment. Lays out the whole submission with
 * its application ID and submission time, styled to print cleanly on paper or
 * save as a PDF from the browser's print dialog — no email service required.
 * Print CSS in index.css isolates this block (#app-receipt).
 */
export function ApplicationReceipt({
  reference,
  data,
  programme,
}: {
  reference: string | null
  data: Record<string, string>
  programme: string
}) {
  const submittedOn = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
  const has = (k: string) => (data[k] || '').trim().length > 0

  const FieldRow = ({ k }: { k: string }) => {
    const long = LONG_FIELDS.has(k)
    return (
      <div
        className={`border-b border-line last:border-b-0 py-2 ${
          long ? '' : 'sm:grid sm:grid-cols-[40%_1fr] sm:gap-4'
        }`}
      >
        <div className="text-[0.8rem] uppercase tracking-[0.06em] text-muted">{k}</div>
        <div className={`text-[15px] text-ink-deep ${long ? 'mt-1' : ''}`}>{data[k]}</div>
      </div>
    )
  }

  return (
    <div id="app-receipt" className="mt-6 border-[1.5px] border-ink bg-white">
      {/* Header */}
      <div className="px-5 sm:px-7 py-5 border-b-2 border-ink">
        <img src="/logo.png" alt="Shikshasarathi Foundation" className="h-10 w-auto" />
        <div className="mt-2 text-[0.78rem] text-muted leading-snug">
          Bangalore, Karnataka · {CONTACT_EMAIL} · {CONTACT_PHONE}
        </div>
      </div>

      <div className="px-5 sm:px-7 py-5">
        <div className="text-center font-serif text-[1.15rem] text-ink-deep">
          {programme} — Application Acknowledgment
        </div>

        {/* ID + submitted-on */}
        <div className="mt-4 grid sm:grid-cols-2 border-[1.5px] border-ink">
          <div className="px-4 py-3 border-b sm:border-b-0 sm:border-r border-ink">
            <div className="text-[0.7rem] uppercase tracking-[0.13em] text-muted">Application ID</div>
            <div className="font-serif text-[1.3rem] text-marigold-dark break-all">
              {reference || 'Recorded — reference will be emailed'}
            </div>
          </div>
          <div className="px-4 py-3">
            <div className="text-[0.7rem] uppercase tracking-[0.13em] text-muted">Submitted on</div>
            <div className="text-[15px] text-ink-deep mt-1">{submittedOn}</div>
          </div>
        </div>

        <p className="mt-4 text-[14px] text-muted leading-relaxed">
          Dear {data['Full name'] || 'Applicant'}, your application has been received. Keep this
          acknowledgment for your records and quote the Application ID in any message to us.
          Shortlisting and next steps will be sent to your registered email and mobile. No fee is
          payable at any stage.
        </p>

        {/* Office use */}
        <div className="mt-4 border border-line">
          <div className="text-[0.7rem] uppercase tracking-[0.12em] text-muted px-3 pt-2">
            For office use
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {['Received by', 'Verified by', 'Approved by', 'Status'].map((k) => (
              <div key={k} className="px-3 py-3 border-t border-line sm:border-t-0 sm:border-l first:border-l-0">
                <div className="text-[0.72rem] text-muted">{k}</div>
                <div className="h-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Detail groups */}
        {ACK_GROUPS.map((g) => {
          const rows = g.fields.filter(has)
          if (rows.length === 0) return null
          return (
            <div key={g.title} className="mt-5">
              <div className="font-serif text-[1.02rem] text-ink-deep border-b-2 border-ink pb-1.5">
                {g.title}
              </div>
              <div className="mt-1">
                {rows.map((k) => (
                  <FieldRow key={k} k={k} />
                ))}
              </div>
            </div>
          )
        })}

        {has('Declaration') && (
          <p className="mt-5 text-[13px] text-muted leading-relaxed border-t border-line pt-3">
            Declaration confirmed: the applicant has certified that the details are true and
            understands that applying is free and that false information disqualifies the
            application.
          </p>
        )}

        <div className="eif-noprint mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] text-sm font-medium rounded-lg bg-ink text-cream hover:bg-ink-deep transition-colors duration-200"
          >
            Download / Print acknowledgment
          </button>
          <span className="self-center text-[0.8rem] text-muted">
            Use “Save as PDF” in the print dialog to keep a copy.
          </span>
        </div>
      </div>
    </div>
  )
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
