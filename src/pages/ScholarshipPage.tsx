import { PageHeader } from '../components/form'
import { Label, Button } from '../components/ui'
import { PROGRAMME, CONTACT_EMAIL } from '../config'

const ELIGIBILITY = [
  {
    title: 'You are in class 12',
    body: 'The scholarship supports the step from school into college. Only students currently studying in class 12 may apply.',
  },
  {
    title: 'Family income below ₹8 lakh a year',
    body: 'Total annual household income from all sources must be under ₹8,00,000. This is verified from the income proof you submit.',
  },
  {
    title: 'At least 60% in class 11',
    body: 'Your class 11 result must show a minimum of 60% (or the equivalent grade or CGPA).',
  },
  {
    title: 'Studying in or domiciled in Karnataka',
    body: 'For the 2026 cycle, applicants must either study at an institution in Karnataka or hold Karnataka domicile.',
  },
]

const STEPS = [
  {
    title: 'Click Apply Now',
    body: 'Start your registration and application from the Apply Now button on this page.',
  },
  {
    title: 'Log in to start the application',
    body: 'Log in with your registered account to reach the form — or create an account first if you are new.',
  },
  {
    title: 'Access the application form',
    body: `Once logged in, you land on the ${PROGRAMME.name} application form page.`,
  },
  {
    title: 'Start the application',
    body: 'Choose your scholarship category and click Start Application to begin.',
  },
  {
    title: 'Fill in the form',
    body: 'Complete every section accurately. Details that do not match your documents are the most common reason an application is held up.',
  },
  {
    title: 'Upload your documents',
    body: 'Upload clear, readable copies of the supporting documents required for your category.',
  },
  {
    title: 'Accept terms and review',
    body: 'Accept the terms and conditions, then check every detail in the preview.',
  },
  {
    title: 'Submit',
    body: 'Verify everything is correct and submit. Once submitted, the application cannot be changed.',
  },
]

const DOCUMENTS = [
  {
    title: 'Academic records',
    body: 'Marksheets from the previous and latest year — class 10, class 12 or semester marksheets, as applicable.',
  },
  {
    title: 'Identity proof',
    body: 'A government-issued photo ID such as Aadhaar, plus a recent passport-size photograph.',
  },
  {
    title: 'Financial documents',
    body: 'Family income proof — income certificate, Form 16A or salary slips — and a bank passbook.',
  },
  {
    title: 'Admission proof',
    body: 'Bonafide certificate or admission proof from your institution, and the latest fee receipt or fee structure.',
  },
  {
    title: 'Personal documents',
    body: 'Caste certificate for reserved categories, and a home or family photograph of the applicant.',
  },
  {
    title: 'Additional documents',
    body: 'Category-specific documents where applicable — entrance scorecards, offer letters or a disability certificate.',
  },
]

const FAQS: { q: string; a: string; open?: boolean }[] = [
  {
    q: 'What is the selection process for this scholarship programme?',
    a: 'Applications are first shortlisted based on academic performance and financial background. Shortlisted candidates then go through telephonic interviews, followed by document verification for final selection.',
    open: true,
  },
  {
    q: 'How will I receive the scholarship funds if selected?',
    a: 'The scholarship amount is transferred directly into the bank account of the selected scholar.',
  },
  {
    q: `How do I apply for the ${PROGRAMME.name}?`,
    a: 'Create an account on the portal, complete your profile, choose your scholarship category, fill in the online application form, upload the required documents, and submit — all online.',
  },
  {
    q: 'What can I submit instead of a fee receipt if I study at a government school?',
    a: 'Provide a letter from your school confirming that you are enrolled and that no fees are charged.',
  },
  {
    q: 'Are diploma students eligible to apply?',
    a: 'No. This scholarship is only for students currently studying in class 12.',
  },
  {
    q: 'When will the results be announced?',
    a: 'Results will be announced on this website and will also be sent to your registered email ID.',
  },
  {
    q: 'Does applying cost anything?',
    a: 'No. There is no application fee, no processing fee and no charge at any stage of the scholarship. If anyone asks you to pay in order to apply, to process your application or to release an award, it is a fraud — please do not pay, and please tell us who approached you.',
  },
  {
    q: 'My family income is just above ₹8 lakh. Can I still apply?',
    a: 'The income limit is applied strictly, so an application above it will not be shortlisted. Do send us a request anyway — there are other scholarships and fee-concession schemes you may qualify for, and pointing you towards them is something we are glad to do.',
  },
]

function Rule() {
  return <span className="block w-10 h-0.5 mt-2 bg-marigold" />
}

export default function ScholarshipPage() {
  return (
    <>
      <PageHeader
        crumb="Merit Scholarship"
        label="Merit scholarship · Applications open"
        title={PROGRAMME.name}
        intro="Financial support for meritorious students from economically weaker backgrounds, so that money is never the reason a capable student stops studying."
      />

      {/* ---------- About ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
          <div>
            <Label>About the programme</Label>
            <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep leading-tight">
              A scholarship decided by merit and need, and nothing else
            </h2>
            <p className="mt-5 text-base text-muted leading-relaxed">
              The {PROGRAMME.name} programme, offered by Shikshasarathi Foundation, supports the
              education of meritorious students from economically weaker backgrounds. Applications
              are assessed rigorously on academic performance and financial need, and shortlisted
              students are interviewed before their documents are verified.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed">
              It exists for one purpose: to ensure that financial difficulty never decides who gets
              access to quality education.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed">
              For the {PROGRAMME.cycle} cycle the programme is open to students studying in or
              domiciled in Karnataka. We would rather run one state thoroughly — verifying
              documents, interviewing every shortlisted candidate and following up with families —
              than accept applications across the country that we could not process properly. The
              programme is built to grow beyond Karnataka, and that is where it is headed.
            </p>
          </div>

          <aside className="border-[1.5px] border-ink bg-cream p-5 sm:p-6 self-start">
            <dl>
              {[
                ['Application fee', '₹0', 'No charge at any stage'],
                ['Who may apply', 'Class 12 only', 'All streams'],
                ['Income limit', 'Under ₹8 lakh', 'Total annual family income'],
                ['Minimum marks', '60%', 'In class 11'],
                ['Region', 'Karnataka', 'Studying in or domiciled'],
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
              <Button href="#/apply" variant="ink" className="w-full">
                Apply Now →
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------- Eligibility ---------- */}
      <section className="bg-sand py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14">
          <Label>Eligibility</Label>
          <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
            Who can apply
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
            All four conditions must be met. If you are unsure whether you qualify, apply anyway — we
            would rather assess a borderline case than have you rule yourself out.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ELIGIBILITY.map((e) => (
              <div
                key={e.title}
                className="bg-cream border border-line border-l-4 border-l-marigold px-5 py-4"
              >
                <h3 className="font-serif text-[1.05rem] text-ink-deep">{e.title}</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <Label>How it works</Label>
        <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
          The application process
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
          Eight steps, all online. Follow them in order to apply for the {PROGRAMME.name}.
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
          <Button href="#/apply" variant="ink">
            Apply Now →
          </Button>
        </div>
      </section>

      {/* ---------- Documents ---------- */}
      <section className="bg-sand py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14">
          <Label>Documents required</Label>
          <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
            Keep these ready before you start
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
            The exact documents depend on your scholarship category. Gathering them first makes the
            application quick — several of these take days to obtain from a local office, so it is
            worth starting early.
          </p>

          <div className="mt-8 border-t border-line grid md:grid-cols-2 md:gap-x-11">
            {DOCUMENTS.map((d) => (
              <div key={d.title} className="py-5 border-b border-line">
                <h3 className="font-serif text-[1.05rem] text-ink-deep">{d.title}</h3>
                <p className="mt-1.5 text-[15px] text-muted leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Important dates ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <Label>Important dates</Label>
        <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
          Key milestones
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
          The application window for the {PROGRAMME.name}, covering the {PROGRAMME.cycle}{' '}
          academic year.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            {
              k: 'Application start',
              v: PROGRAMME.opens,
              note: 'Registrations open on the portal',
            },
            {
              k: 'Application deadline',
              v: PROGRAMME.closes,
              note: 'Last day to submit your application',
            },
          ].map((d) => (
            <div key={d.k} className="border-[1.5px] border-ink bg-cream px-5 py-5">
              <div className="text-[0.7rem] uppercase tracking-[0.13em] text-muted">{d.k}</div>
              <div className="mt-1 font-serif text-3xl text-marigold">{d.v}</div>
              <div className="mt-1 text-sm text-muted">{d.note}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-[#FDF3DC] border-[1.5px] border-l-[5px] border-[#E0B95E] px-4 py-3.5 text-sm text-[#5C4409] leading-relaxed">
          <strong className="block mb-1">⚙ Dates to be confirmed</strong>
          The dates above are placeholders. Set the real ones in{' '}
          <code className="bg-[#F5E4BC] px-1.5 py-0.5 rounded-[2px]">src/config.ts</code> under{' '}
          <code className="bg-[#F5E4BC] px-1.5 py-0.5 rounded-[2px]">PROGRAMME</code> before
          publishing this page.
        </div>
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
            and a person will answer you.
          </p>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <div className="bg-marigold text-[#241703] py-14 px-6 text-center">
        <h2 className="font-serif font-normal text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
          Ready to apply?
        </h2>
        <p className="mt-3 mx-auto max-w-xl text-[15px] text-[#46320B] leading-relaxed">
          Applying costs nothing and takes about twenty minutes once your documents are ready.
        </p>
        <div className="mt-6">
          <Button href="#/apply" variant="ink">
            Apply Now →
          </Button>
        </div>
      </div>
    </>
  )
}
