/* ============================================================
   Site configuration — the things to change before launch
   ============================================================ */

/**
 * Optional hero photograph.
 *
 * Leave this empty and the hero uses the designed backdrop in
 * `src/components/HeroBackdrop.tsx` — a warm paper texture with a soft
 * sunrise glow. No photograph needed, nothing to license, nothing to load.
 *
 * To use a photograph instead, put the file in `public/` and set this to
 * its path, e.g. '/hero.jpg'. It is rendered full-bleed behind a cream
 * scrim that keeps the headline readable.
 *
 * A note worth more than the code: use your OWN photographs — your
 * students, your counselling sessions, your ceremony. A real photograph of
 * a real scholar is worth a dozen stock graduation shots, and for a
 * foundation asking people for money and trust, a stock photo of somebody
 * else’s students is a small dishonesty that visitors do notice. Get written
 * consent from anyone identifiable, and from a parent if they are a minor.
 *
 * Practicalities: landscape, at least 2000px wide, and keep the subject in
 * the middle-left, since the right side sits behind the headline. Compress it
 * — anything above about 400KB will slow the first paint noticeably.
 */
export const HERO_IMAGE_URL = ''

export type FormKey = 'apply' | 'request' | 'partner' | 'sponsor'

/**
 * THE FORMS — wired to Supabase.
 *
 * All four forms POST their JSON to one Supabase Edge Function (`submit-form`),
 * which validates the payload and stores it as a row in the `submissions`
 * table. Each row keeps the full submission in a `data` jsonb column, with
 * name / email / mobile pulled out into their own columns for scanning.
 *
 * The `?form=` query string tells the function which form the submission is,
 * so every entry below points at the same function with a different key.
 *
 * Where the submissions go:
 *   Supabase project : educate-india-foundation (ap-south-1 / Mumbai)
 *   Table            : public.submissions
 *   Read them at     : Supabase dashboard → Table editor → submissions
 *                      (the table is private — only the server can write it,
 *                       and only your dashboard/service role can read it)
 *
 * Nothing here is secret: the function is a public write-only endpoint, the
 * same way any contact form is. The service-role key lives only inside the
 * function on Supabase, never in this frontend bundle.
 */
const SUBMIT_FN = 'https://poxdogbtrhebpfzxhlvy.supabase.co/functions/v1/submit-form'

export const FORM_ENDPOINTS: Record<FormKey, string> = {
  apply: `${SUBMIT_FN}?form=apply`,
  request: `${SUBMIT_FN}?form=request`,
  partner: `${SUBMIT_FN}?form=partner`,
  sponsor: `${SUBMIT_FN}?form=sponsor`,
}

export const CONTACT_EMAIL = 'contact@shikshasarathifoundation.org'
export const CONTACT_PHONE = '+91 85498 67440'

/** The current scholarship programme. Update each cycle. */
export const PROGRAMME = {
  name: 'All India Merit Scholarship 2026',
  cycle: '2026–27',
  opens: '1 October 2026',
  closes: '10 November 2026',
  /** Short form used in the announcement bar and receipts. */
  window: '1 October – 10 November 2026',
}

/**
 * Implementation partner — runs the application process for the Foundation:
 * eligibility assessment, application guidance and support through to the award.
 */
export const IMPLEMENTATION_PARTNER = {
  name: 'ScholarshipBuddy',
  url: 'https://scholarshipbuddy.in',
  blurb:
    'Eligibility assessment, application guidance and claims support are handled for the Foundation by ScholarshipBuddy and its team.',
}
