/* ============================================================
   SSF Scholarship Scheme 2026–27 — the facts shown on the site.
   Source: SSF Scholarship Scheme 2026–27 (scheme document) and the
   Website Policy Pack. Update here each cycle.
   ============================================================ */

/** Scholarship amounts by merit position. 100 scholarships, ₹3,00,000 total. */
export const AMOUNTS = [
  { band: 'Ranks 1 – 5', scholars: 5, amount: '₹15,000', note: 'per year' },
  { band: 'Ranks 6 – 40', scholars: 35, amount: '₹3,000', note: 'per year' },
  { band: 'Ranks 41 – 100', scholars: 60, amount: '₹2,000', note: 'per year' },
]

/** The three selection stages. */
export const SELECTION = [
  {
    title: 'Stage 1 — Screening',
    body: 'Applications are checked for completeness and eligibility. Eligible candidates are shortlisted on the marks obtained in the qualifying examination (Class 10 or Class 11).',
  },
  {
    title: 'Stage 2 — SSF Scholarship Examination',
    body: 'Shortlisted candidates sit the SSF Scholarship Examination — online, free, and taken from your own phone, tablet or computer. It tests aptitude and reasoning rather than syllabus, so class 11 and 12, and all three streams, are assessed on the same terms. A free mock test is held first so you can check your device and connection.',
  },
  {
    title: 'Stage 3 — Verification',
    body: 'Candidates provisionally selected on the examination submit their documents for verification. An interview or interaction is held only where particulars need clarification — no one is selected or rejected on an interview alone.',
  },
]

/** Exam pattern (100 marks, 120 minutes, no negative marking). */
export const EXAM_PATTERN = [
  { section: 'Mental Ability', detail: 'Logical and analytical reasoning', questions: 40, marks: 40 },
  { section: 'Quantitative Aptitude', detail: 'Numerical ability', questions: 30, marks: 30 },
  { section: 'Language', detail: 'English comprehension and usage', questions: 20, marks: 20 },
  { section: 'General Awareness', detail: 'General and current awareness', questions: 10, marks: 10 },
]

/** Timeline of the 2026–27 cycle. */
export const TIMELINE = [
  { stage: 'Applications open', date: 'Thursday 15 October 2026' },
  { stage: 'Last date to apply', date: 'Saturday 14 November 2026' },
  { stage: 'Shortlisted candidates notified', date: 'Sunday 22 November 2026' },
  { stage: 'Mock test for the online examination', date: 'Sunday 29 November 2026' },
  { stage: 'SSF Scholarship Examination', date: 'Sunday 6 December 2026' },
  { stage: 'Provisional merit list published', date: 'Sunday 13 December 2026' },
  { stage: 'Last date to submit documents for verification', date: 'Thursday 24 December 2026' },
  { stage: 'Final merit list published', date: 'Wednesday 30 December 2026' },
  { stage: 'Payment — Categories B & C, and first instalment of Category A', date: 'Friday 15 January 2027' },
  { stage: 'Second instalment — Category A only', date: 'Friday 1 May 2027' },
]

/** Documents needed — at application, and on selection. */
export const SCHEME_DOCUMENTS = [
  { doc: 'Mark sheet of the qualifying examination (Class 10 or Class 11)', atApplication: true, onSelection: 'Original for verification' },
  { doc: 'Proof of admission to Class 11 or 12 for 2026–27', atApplication: true, onSelection: 'Yes' },
  { doc: 'Income certificate from a competent Revenue Authority', atApplication: true, onSelection: 'Original for verification' },
  { doc: 'Recent passport-size photograph', atApplication: true, onSelection: '—' },
  { doc: 'Aadhaar or other proof of identity and date of birth', atApplication: true, onSelection: 'Yes' },
  { doc: 'Disability certificate, where a relaxation is claimed', atApplication: true, onSelection: 'Original for verification' },
  { doc: "Bank account details and cancelled cheque in the scholar's name", atApplication: false, onSelection: 'Yes' },
  { doc: 'Consent of parent or guardian', atApplication: true, onSelection: '—' },
]
