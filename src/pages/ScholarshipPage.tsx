import { PageHeader } from '../components/form'
import { Label, Button } from '../components/ui'
import ShareRow from '../components/ShareRow'
import { PROGRAMME, CONTACT_EMAIL, CONTACT_PHONE, IMPLEMENTATION_PARTNER } from '../config'
import { AMOUNTS, SELECTION, EXAM_PATTERN, TIMELINE, SCHEME_DOCUMENTS } from '../data/scheme'

const ELIGIBILITY = [
  {
    title: 'You are in class 11 or 12',
    body: 'Students who have taken admission for 2026–27 to Class 11 or Class 12 (First or Second PUC) in the Science, Commerce or Arts stream, at a recognised institution in Karnataka.',
  },
  {
    title: 'At least 60% in your last completed year',
    body: 'You passed Class 10 or Class 11 (or its equivalent) in 2025–26 with at least 60% marks, or the equivalent CGPA or grade. For a benchmark disability, this is relaxed by 10 percentage points on production of a valid certificate.',
  },
  {
    title: 'Family income below ₹8 lakh a year',
    body: 'The combined annual income of your parents or guardians from all sources must not exceed ₹8,00,000. Beyond this ceiling, income has no bearing on selection — it is used only to break a tie.',
  },
  {
    title: 'A regular, full-time student in Karnataka',
    body: 'You must be studying as a regular, full-time student. Correspondence, part-time, evening or night classes, and open-university courses are not eligible.',
  },
]

const STEPS = [
  {
    title: 'Open the application form',
    body: 'Click Apply on this page to open the form. No account and no login are needed — you can fill it in one sitting.',
  },
  {
    title: 'Fill in your details',
    body: 'Complete every section — your details, academics and family information. Details that match your documents exactly are what save you time later.',
  },
  {
    title: 'Give the parent or guardian consent',
    body: 'Because almost every applicant is under eighteen, a parent or guardian confirms their consent on the form. This is required by law before we can process the application.',
  },
  {
    title: 'Review and accept the declaration',
    body: 'Read the notice, check every detail, then accept the declaration confirming your information is true. Once submitted, the application cannot be changed.',
  },
  {
    title: 'Submit and save your acknowledgment',
    body: 'Submit the form. You get an Application ID on screen and a printable acknowledgment you can download or print and keep.',
  },
  {
    title: 'Sit the examination if shortlisted',
    body: 'Shortlisted candidates take the free online SSF Scholarship Examination, then — if provisionally selected — submit documents for verification.',
  },
]

function Rule() {
  return <span className="block w-10 h-0.5 mt-2 bg-marigold" />
}

const TERMS = [
  'Selection is on merit, through the SSF Scholarship Examination — a free online aptitude test taken from your own device. A single merit list covers class 11 and class 12 together.',
  `${PROGRAMME.scholarships} scholarships are offered. They go to the ${PROGRAMME.scholarships} highest-ranked candidates, in either class. The Foundation may award fewer if enough candidates of the required merit are not available.`,
  'Where candidates tie on marks, the one with lower family income is preferred; if still tied, a financial assessment decides. Where a male and a female candidate of the same family tie, the female is preferred.',
  'As a rule only one scholarship is awarded to a family — relaxed to two where the later applicant is female, or both applicants are female.',
  'A class 12 scholarship is for one year and does not renew. A class 11 scholarship may be renewed for class 12 subject to promotion at the first attempt, at least 60% in class 11, at least 75% attendance, the income condition, and funds being available. Renewal is not guaranteed; the Foundation decides and notifies every scholar by 31 March.',
  "Payment is by bank transfer (NEFT) into the scholar's own account only — never in cash and never to a third party. A cancelled cheque in the scholar's name is required on selection.",
  'You must submit an income certificate from a competent revenue authority — Tahsildar, Deputy Commissioner, Revenue Circle Officer or equivalent — stating both parents’ gross annual income from all sources.',
  'Clearing a failed subject in a later year, or passing on grace marks, makes a candidate ineligible, save in genuine unavoidable cases supported by a recommendation from the institution.',
  'A scholarship obtained by a false statement or certificate is cancelled and the amount recovered. Any breach of these terms may lead to suspension or cancellation, after the scholar has been given a hearing.',
  'Selected candidates are informed by email and by SMS. In any dispute, the decision of the Executive Committee is final, subject to the grievance procedure.',
]

const FAQS: { q: string; a: string; open?: boolean }[] = [
  {
    q: 'How are scholars selected?',
    a: 'In three stages. Applications are first screened for eligibility and shortlisted on the marks in your qualifying examination. Shortlisted candidates then sit the free online SSF Scholarship Examination, which tests aptitude and reasoning. A single merit list is prepared from the examination, and the top 100 candidates are selected after document verification.',
    open: true,
  },
  {
    q: 'Do I need a PAN to apply?',
    a: 'No. We do not ask applicants for a PAN. A student has no reason to hold one, and we have no reason to collect it.',
  },
  {
    q: 'Does applying — or the examination — cost anything?',
    a: 'No. There is no fee to apply, no fee to sit the examination, and no fee to receive a scholarship. If anyone asks you to pay in our name, it is a fraud — please do not pay, and tell us who approached you.',
  },
  {
    q: 'How will I receive the scholarship if selected?',
    a: 'By bank transfer (NEFT) directly into your own bank account. Categories B and C are paid in a single payment; Category A is paid in two instalments. Never in cash, never through a college, never through a third party.',
  },
  {
    q: 'Is the scholarship renewed for the next year?',
    a: 'A class 12 scholarship is for one year. A class 11 scholarship may be renewed for class 12 if you are promoted at the first attempt, score at least 60%, keep at least 75% attendance and still meet the income condition — and subject to the Foundation having funds. Renewal is not guaranteed, and we tell every scholar the position by 31 March.',
  },
  {
    q: 'My family income is just above ₹8 lakh. Can I still apply?',
    a: 'The income limit is applied strictly, so an application above it cannot be considered. Do write to us anyway — there are other scholarships and fee-concession schemes you may qualify for, and pointing you towards them is something we are glad to do.',
  },
  {
    q: 'When will the results be announced?',
    a: 'The provisional merit list is published on this website, and the final list after verification. Selected candidates are also informed by email and SMS.',
  },
]

export default function ScholarshipPage() {
  return (
    <>
      <PageHeader
        crumb="Merit Scholarship"
        label="Merit scholarship · Applications open"
        title={PROGRAMME.name}
        intro="Financial support for meritorious students from families of limited means, awarded purely on merit through a free online examination, so that money is never the reason a capable student stops studying."
      />

      {/* ---------- About ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
          <div>
            <Label>About the programme</Label>
            <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep leading-tight">
              A scholarship decided by merit, through one fair examination
            </h2>
            <p className="mt-5 text-base text-muted leading-relaxed">
              The {PROGRAMME.name}, offered by Shiksha Sarathi Foundation, supports the education of
              meritorious students from economically weaker backgrounds. Selection is on merit alone,
              through a free online examination that tests aptitude rather than syllabus — so class 11
              and class 12, and the Science, Commerce and Arts streams, are assessed on the same
              terms.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed">
              {PROGRAMME.scholarships} scholarships are offered for {PROGRAMME.cycle}. For this cycle
              the programme is open to students studying in Karnataka. We would rather run one state
              thoroughly than accept applications we could not process properly.
            </p>
          </div>

          <aside className="border-[1.5px] border-ink bg-cream p-5 sm:p-6 self-start">
            <dl>
              {[
                ['Application fee', '₹0', 'No charge at any stage'],
                ['Award', '₹2,000 – ₹15,000', `${PROGRAMME.scholarships} scholarships, by merit`],
                ['Who may apply', 'Class 11 & 12', 'Science, Commerce & Arts'],
                ['Income limit', 'Under ₹8 lakh', 'Total annual family income'],
                ['Minimum marks', '60%', 'In your last completed year'],
                ['Examination', PROGRAMME.examDate, 'Free online aptitude test'],
              ].map(([k, v, note], i) => (
                <div key={k} className={`py-3 ${i === 0 ? 'pt-0' : ''} border-b border-line last:border-b-0 last:pb-0`}>
                  <dt className="text-[0.7rem] uppercase tracking-[0.13em] text-muted">{k}</dt>
                  <dd className="font-serif text-[1.35rem] text-ink-deep leading-tight">
                    {v}
                    <small className="block mt-0.5 font-sans text-[0.8rem] text-muted leading-snug">
                      {note}
                    </small>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-5">
              <Button href="/apply" variant="ink" className="w-full">
                Apply Now →
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------- What you receive ---------- */}
      <section className="bg-sand py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14">
          <Label>What you receive</Label>
          <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">The award</h2>
          <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
            The amount depends on your position on the merit list. All {PROGRAMME.scholarships}{' '}
            scholarships are paid directly into the scholar’s own bank account.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {AMOUNTS.map((a) => (
              <div key={a.band} className="border-[1.5px] border-ink bg-cream px-5 py-5">
                <div className="text-[0.7rem] uppercase tracking-[0.13em] text-muted">{a.band}</div>
                <div className="mt-1 font-serif text-[1.6rem] text-marigold leading-tight">
                  {a.amount}
                </div>
                <div className="mt-1 text-sm text-muted">
                  {a.scholars} scholars · {a.note}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted leading-relaxed">
            Categories B and C are paid in a single payment on 15 January 2027. Category A is paid in
            two instalments, on 15 January 2027 and 1 May 2027. On selection you provide bank account
            details, the IFSC code and a cancelled cheque in your own name.
          </p>
        </div>
      </section>

      {/* ---------- Eligibility ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <Label>Eligibility</Label>
        <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">Who can apply</h2>
        <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
          All of the conditions below must be met. If you are unsure whether you qualify, apply anyway
          — we would rather assess a borderline case than have you rule yourself out.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {ELIGIBILITY.map((e) => (
            <div key={e.title} className="bg-cream border border-line border-l-4 border-l-marigold px-5 py-4">
              <h3 className="font-serif text-[1.05rem] text-ink-deep">{e.title}</h3>
              <p className="mt-1.5 text-sm text-muted leading-relaxed">{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Selection ---------- */}
      <section className="bg-sand py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14">
          <Label>Selection</Label>
          <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
            How scholars are selected
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
            Three stages, each of which you must clear to reach the next. Selection is on examination
            merit alone.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {SELECTION.map((s) => (
              <div key={s.title} className="bg-cream border border-line px-5 py-5">
                <h3 className="font-serif text-[1.05rem] text-ink-deep">{s.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-serif text-[1.15rem] text-ink-deep">The examination</h3>
          <p className="mt-2 max-w-2xl text-[15px] text-muted leading-relaxed">
            100 marks, 120 minutes, no negative marking. A free mock test is held first so you can
            check your device and connection.
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-[14px] bg-cream">
              <thead>
                <tr className="bg-ink text-cream text-left">
                  <th className="px-3 py-2.5 font-medium">Section</th>
                  <th className="px-3 py-2.5 font-medium">What it covers</th>
                  <th className="px-3 py-2.5 font-medium text-right">Questions</th>
                  <th className="px-3 py-2.5 font-medium text-right">Marks</th>
                </tr>
              </thead>
              <tbody>
                {EXAM_PATTERN.map((r) => (
                  <tr key={r.section} className="border-b border-line">
                    <td className="px-3 py-2.5 text-ink-deep">{r.section}</td>
                    <td className="px-3 py-2.5 text-muted">{r.detail}</td>
                    <td className="px-3 py-2.5 text-ink-deep text-right">{r.questions}</td>
                    <td className="px-3 py-2.5 text-ink-deep text-right">{r.marks}</td>
                  </tr>
                ))}
                <tr className="font-medium">
                  <td className="px-3 py-2.5 text-ink-deep" colSpan={2}>
                    Total
                  </td>
                  <td className="px-3 py-2.5 text-ink-deep text-right">100</td>
                  <td className="px-3 py-2.5 text-ink-deep text-right">100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------- How to apply ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <Label>How it works</Label>
        <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
          How to apply
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
          A few simple steps, all online. No account or login needed.
        </p>

        <div className="mt-8 border-t border-line">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="grid grid-cols-[auto_1fr] md:grid-cols-[72px_1fr_1.35fr] gap-x-5 md:gap-x-6 gap-y-1.5 items-start py-5 md:py-6 border-b border-line"
            >
              <div className="font-serif text-2xl md:text-[2.2rem] leading-none text-marigold">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-serif text-[1.05rem] md:text-lg text-ink-deep self-center">
                {s.title}
              </h3>
              <p className="col-start-2 md:col-start-3 md:row-start-1 text-[15px] text-muted leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button href="/apply" variant="ink">
            Apply Now →
          </Button>
        </div>
      </section>

      {/* ---------- Documents ---------- */}
      <section className="bg-sand py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14">
          <Label>Documents</Label>
          <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
            Documents you will need
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
            You do not upload anything with the form. These are needed at the application stage or on
            selection, as shown — several take days to obtain from a local office, so it is worth
            gathering them early.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-[14px] bg-cream">
              <thead>
                <tr className="bg-ink text-cream text-left">
                  <th className="px-3 py-2.5 font-medium">Document</th>
                  <th className="px-3 py-2.5 font-medium">At application</th>
                  <th className="px-3 py-2.5 font-medium">On selection</th>
                </tr>
              </thead>
              <tbody>
                {SCHEME_DOCUMENTS.map((d) => (
                  <tr key={d.doc} className="border-b border-line align-top">
                    <td className="px-3 py-2.5 text-ink-deep">{d.doc}</td>
                    <td className="px-3 py-2.5 text-muted">{d.atApplication ? 'Yes' : '—'}</td>
                    <td className="px-3 py-2.5 text-muted">{d.onSelection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------- Timeline ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <Label>Important dates</Label>
        <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
          Timeline for {PROGRAMME.cycle}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
          The examination and the mock test are held on Sundays so you are not required to miss class.
          Dates may change by notice on this website; registered candidates are told by email and SMS.
        </p>

        <div className="mt-8 border-t border-line">
          {TIMELINE.map((t) => (
            <div
              key={t.stage}
              className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-6 gap-y-0.5 py-3.5 border-b border-line"
            >
              <span className="text-[15px] text-ink-deep">{t.stage}</span>
              <span className="text-[15px] text-marigold-dark font-medium sm:text-right">{t.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Terms ---------- */}
      <section className="bg-sand py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14">
          <Label>Terms and conditions</Label>
          <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
            The rules of the scholarship
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
            These are the main conditions under which the scholarship is awarded and kept. The full
            SSF Scholarship Scheme 2026–27 document governs the programme and is available from the
            Foundation on request.
          </p>

          <ol className="mt-8 border-t border-line">
            {TERMS.map((t, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-5 items-start py-4 border-b border-line"
              >
                <span className="font-serif text-lg text-marigold leading-tight">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] text-muted leading-relaxed">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Implementation partner ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <Label>Implementation partner</Label>
        <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
          Who runs the application process
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
          The application process for this programme — checking eligibility, guiding students through
          the form, running the online examination and supporting them through to the award — is run
          for the Foundation by{' '}
          <a
            href={IMPLEMENTATION_PARTNER.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest2 underline underline-offset-2"
          >
            {IMPLEMENTATION_PARTNER.name}
          </a>
          . The Foundation funds and awards the scholarships; the process is theirs to run, so every
          applicant is handled the same way.
        </p>
      </section>

      {/* ---------- FAQs ---------- */}
      <section className="bg-sand py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Label>Questions</Label>
          <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
            Scholarship FAQs
          </h2>
          <Rule />
          <div className="mt-6">
            {FAQS.map((f) => (
              <details key={f.q} className="eif-faq border-b border-line" open={f.open}>
                <summary className="flex items-center justify-between gap-4 cursor-pointer py-4 min-h-[52px] font-serif text-[1.05rem] text-ink-deep">
                  {f.q}
                </summary>
                <p className="pb-4 text-[15px] text-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>

          <p className="mt-8 text-[15px] text-muted leading-relaxed">
            Still unsure about something? Write to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest2 underline break-all">
              {CONTACT_EMAIL}
            </a>{' '}
            or call{' '}
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-forest2 underline">
              {CONTACT_PHONE}
            </a>{' '}
            and a person will answer you.
          </p>
        </div>
      </section>

      {/* ---------- Share ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-14">
        <ShareRow />
      </section>

      {/* ---------- CTA ---------- */}
      <div className="bg-marigold text-[#241703] py-14 px-6 text-center">
        <h2 className="font-serif font-normal text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
          Ready to apply?
        </h2>
        <p className="mt-3 mx-auto max-w-xl text-[15px] text-[#46320B] leading-relaxed">
          Applying costs nothing and takes about twenty minutes once your details are ready.
        </p>
        <div className="mt-6">
          <Button href="/apply" variant="ink">
            Apply Now →
          </Button>
        </div>
      </div>
    </>
  )
}
