import { useState } from 'react'
import { PageHeader } from '../components/form'
import { CONTACT_EMAIL, RECOVER_ENDPOINT } from '../config'

/**
 * "Find my application" — a student enters the email they applied with, and we
 * email their Application ID to that address. No OTP: because the ID is only
 * ever sent to the registered inbox, receiving it is the proof of ownership.
 */
export default function RecoverPage() {
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)
  const [message, setMessage] = useState('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = String(new FormData(e.currentTarget).get('email') || '').trim()
    if (!email) return
    setBusy(true)
    try {
      const res = await fetch(RECOVER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify({ email }),
      })
      const payload = await res.json().catch(() => null)
      setMessage(
        (payload && typeof payload.message === 'string' && payload.message) ||
          'If an application exists for this email, we have sent the Application ID to it. Please check your inbox and spam folder.',
      )
      setDone(true)
    } catch {
      setMessage(
        `We could not reach the server just now. Please check your internet and try again, or email us at ${CONTACT_EMAIL}.`,
      )
      setDone(true)
    }
    setBusy(false)
  }

  return (
    <>
      <PageHeader
        crumb="Find my application"
        label="Lost your Application ID?"
        title="Find my application"
        intro="Enter the email address you used when you applied, and we will send your Application ID to that inbox."
      />

      <div className="max-w-xl mx-auto px-6 sm:px-10 py-10 sm:py-14">
        {done ? (
          <div className="border-[1.5px] border-ink bg-cream p-6 sm:p-7 rounded-sm">
            <h2 className="font-serif font-normal text-xl text-ink-deep">Check your email</h2>
            <p className="mt-3 text-[15px] text-muted leading-relaxed">{message}</p>
            <p className="mt-4 text-[14px] text-muted leading-relaxed">
              It can take a couple of minutes. Still nothing after that? Write to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest2 underline break-all">
                {CONTACT_EMAIL}
              </a>{' '}
              and we will help.
            </p>
            <div className="mt-6">
              <a
                href="/scholarship"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg border border-ink text-ink hover:bg-ink hover:text-cream transition-colors duration-200"
              >
                ← Back to the scholarship
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="border border-line rounded-sm bg-[#F8F5EE] p-5 sm:p-6">
            <label htmlFor="recover-email" className="block mb-1.5 text-sm font-semibold text-ink">
              Registered email address
            </label>
            <input
              id="recover-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="the email you applied with"
              className="w-full max-w-full px-3.5 py-3 min-h-[50px] leading-snug text-ink bg-cream border-[1.5px] border-line rounded-sm outline-none transition-colors duration-150 focus:border-ink focus:ring-4 focus:ring-ink/10"
            />
            <p className="mt-2 text-[0.83rem] text-muted leading-snug">
              For your safety, the Application ID is only ever sent to the email on the application —
              never shown on screen.
            </p>
            <button
              type="submit"
              disabled={busy}
              className="mt-5 inline-flex items-center justify-center px-7 py-3.5 min-h-[52px] text-sm font-medium rounded-lg bg-ink text-cream hover:bg-ink-deep transition-colors duration-200 disabled:opacity-60"
            >
              {busy ? 'Sending…' : 'Email me my Application ID'}
            </button>
          </form>
        )}
      </div>
    </>
  )
}
