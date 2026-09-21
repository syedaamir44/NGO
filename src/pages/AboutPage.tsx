import { PageHeader } from '../components/form'
import { Label, Button } from '../components/ui'
import { CONTACT_EMAIL, CONTACT_PHONE, PROGRAMME } from '../config'

const WHAT_WE_DO = [
  {
    title: 'Merit Scholarship',
    body: `Direct financial support for meritorious students from low-income families, paid when college fees actually fall due. Our current programme is the ${PROGRAMME.name}, open to students in class 12. The Foundation funds and awards these scholarships itself.`,
    href: '#/scholarship',
  },
  {
    title: 'Education counselling',
    body: 'Which stream after class 10, which course after class 12, which colleges are genuinely within reach, what each option costs, and what has to be done by when.',
    href: '#/education-counselling',
  },
  {
    title: 'Career counselling',
    body: 'What a job actually involves day to day, what it pays at the start, what qualifications it truly requires, and what to do when the first plan does not work.',
    href: '#/career-counselling',
  },
  {
    title: 'Competitive exam guidance',
    body: 'Which examination suits a particular student — CET, NEET, JEE, banking, SSC, railways, state services — and how to prepare sensibly, including how much of the preparation costs nothing at all.',
    href: '#/exam-guidance',
  },
  {
    title: 'Add-on skill courses',
    body: 'Short courses alongside your bachelor’s degree that lead to real work, which government and subsidised programmes are worth knowing about, and how to tell a genuine institute from one selling a worthless certificate.',
    href: '#/skill-courses',
  },
]

const PRINCIPLES = [
  {
    title: 'Merit and need, through a published process',
    body: 'Scholarships are awarded on academic performance and financial need, assessed the same way for every applicant, with the criteria published in advance.',
  },
  {
    title: 'The scholarship costs nothing to apply for',
    body: 'There is no application fee, no processing fee and no charge at any stage. No agent, consultant or coaching centre is authorised to collect money in our name.',
  },
  {
    title: 'Independent guidance',
    body: 'The Foundation accepts no commission and no referral fee from any counsellor, college, coaching centre or training institute. That independence is deliberate. It is what allows us to recommend a provider honestly — and, just as often, to tell a student that they do not need the service at all.',
  },
  {
    title: 'Cost should not decide who gets help',
    body: 'Where a student needs a service and the family cannot meet its cost, we arrange support. Each case is decided individually, on family income and on how much difference the service is likely to make.',
  },
  {
    title: 'Money reaches the student',
    body: 'Scholarships are transferred by bank transfer or cheque into the selected student’s own account. Never in cash, never through a college, never through a third party.',
  },
  {
    title: 'We follow up',
    body: 'A conversation that is never acted upon changes nothing. We check whether the application actually went in, whether the course delivered what was promised, and whether the plan is holding up months later. This is the least glamorous part of our work and the part that decides whether any of it mattered.',
  },
  {
    title: 'We publish what we do',
    body: 'Selection criteria, the number of students supported and our annual accounts are published each year, so that students and donors can both check them.',
  },
]

const GET_INVOLVED = [
  {
    title: 'Students',
    body: 'Apply for the scholarship if the fees are what stands in your way, or send us a request if you simply do not know what to do next. Both cost nothing to ask.',
    cta: 'Apply for the scholarship →',
    href: '#/apply',
  },
  {
    title: 'Schools, colleges and NGOs',
    body: 'Partner with us. It costs your organisation nothing, and you are the people who see these students first.',
    cta: 'Become a partner →',
    href: '#/partner',
  },
  {
    title: 'Donors and CSR partners',
    body: 'A contribution funds a scholarship for a student who cannot pay the fees, and sponsors guidance for students who cannot meet a partner’s charges. We publish our accounts every year.',
    cta: 'Support a student →',
    href: '#/sponsor',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About us"
        label="Non-profit · Karnataka"
        title="About Shikshasarathi Foundation"
        intro="A non-profit organisation working with students from economically weaker backgrounds, at the point where school ends and everything after it is decided."
      />

      {/* ---------- Who we are ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
          <div>
            <Label>Who we are</Label>
            <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep leading-tight">
              We work at the point where everything after school is decided
            </h2>
            <p className="mt-5 text-base text-muted leading-relaxed">
              Shikshasarathi Foundation is a non-profit organisation registered as a Section 8 company
              under the Companies Act, 2013.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed">
              We work with students from economically weaker backgrounds at a single, decisive point
              in their lives — the years when school is ending and everything that follows is being
              settled. What course, what college, what examination, what work. For a great many
              capable students, those questions get answered by circumstance rather than by choice.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed">
              We exist to change how those questions are answered, and we do it in two ways. We fund
              merit scholarships for students who cannot meet the cost of continuing their education
              after class 12. And we arrange the guidance that tells a student what to study, where
              it leads, which entrance examination is worth sitting, and which course is worth paying
              for.
            </p>
          </div>

          <aside className="border-[1.5px] border-ink bg-cream p-5 sm:p-6 self-start">
            <h3 className="font-serif text-lg text-ink-deep">At a glance</h3>
            <dl className="mt-4">
              {[
                ['Legal status', 'Section 8 non-profit company', 'Companies Act, 2013'],
                ['Based in', 'Bangalore, Karnataka', 'Scholarship open across Karnataka'],
                ['What we fund', 'Merit scholarships', 'Awarded on merit and need'],
                ['What we arrange', 'Four guidance services', 'With expert partners'],
                ['Cost to apply', '₹0', 'The scholarship is free to apply for'],
              ].map(([k, v, note], i) => (
                <div
                  key={k}
                  className={`py-3 ${i === 0 ? 'pt-0' : ''} border-b border-line last:border-b-0 last:pb-0`}
                >
                  <dt className="text-[0.7rem] uppercase tracking-[0.13em] text-muted">{k}</dt>
                  <dd className="font-serif text-[1.2rem] text-ink-deep leading-tight">
                    {v}
                    <small className="block mt-0.5 font-sans text-[0.8rem] text-muted leading-snug">
                      {note}
                    </small>
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* ---------- What we believe ---------- */}
      <section className="bg-ink-deep py-14 sm:py-20 text-[#E8DFCD]">
        <div className="max-w-[660px] mx-auto px-6 sm:px-10">
          <Label tone="light">What we believe</Label>

          <p className="mt-6 font-serif text-2xl sm:text-[1.5rem] leading-[1.5] text-white">
            Ability is distributed evenly across a population. Opportunity is not.
          </p>

          <p className="mt-5 font-serif text-lg leading-[1.72] text-[#DED5C2]">
            When a capable student stops short of what they were able to do, it is almost never
            because the ability was absent. It is usually one of two things. Either the money could
            not be found in the one month it was needed, or nobody told them, in time, what was
            actually possible.
          </p>

          <p className="mt-5 font-serif text-lg leading-[1.72] text-[#DED5C2]">
            The first barrier is visible. A family knows exactly what an admission fee costs them,
            and everyone can see when it cannot be paid.
          </p>

          <p className="mt-5 font-serif text-lg leading-[1.72] text-[#DED5C2]">
            The second is invisible, and in our experience it stops just as many students. A
            scholarship deadline passes unnoticed. A fee-concession seat goes unclaimed because no
            one in the household had heard of it. A student picks a course on a neighbour’s advice
            and discovers three years later that it leads nowhere they wanted to go. Another pays a
            year’s savings to an institute for a certificate no employer recognises.
          </p>

          <p className="my-7 border-l-[3px] border-marigold pl-5 font-serif text-xl sm:text-[1.32rem] leading-[1.5] text-marigold">
            Nobody refused these students anything. They were simply never told.
          </p>

          <p className="font-serif text-lg leading-[1.72] text-[#DED5C2]">
            That is a solvable problem, and solving it is a large part of what we do.
          </p>
        </div>
      </section>

      {/* ---------- What we do ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <Label>What we do</Label>
        <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
          One scholarship we fund, and four services we arrange
        </h2>

        <div className="mt-8 border-t border-line">
          {WHAT_WE_DO.map((w, i) => (
            <a
              key={w.title}
              href={w.href}
              className="group grid grid-cols-[auto_1fr] md:grid-cols-[72px_1fr_1.35fr] gap-x-5 md:gap-x-6 gap-y-1.5 items-start py-5 md:py-6 border-b border-line hover:bg-sand/50 transition-colors duration-200 px-1 -mx-1"
            >
              <div className="col-start-1 row-start-1 font-serif text-2xl md:text-[2.2rem] leading-none text-marigold">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="col-start-2 row-start-1 font-serif text-[1.05rem] md:text-lg text-ink-deep self-center">
                {w.title}
              </h3>
              <p className="col-start-2 row-start-2 md:col-start-3 md:row-start-1 text-[15px] text-muted leading-relaxed">
                {w.body}
              </p>
            </a>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-[15px] text-muted leading-relaxed">
          The four guidance services are arranged with expert partner counsellors, mentors and
          institutes who specialise in each area. They set their own fees, we tell a student the cost
          before anything is booked, and where a family cannot meet it we arrange a concession, a
          discount or full sponsorship.
        </p>
      </section>

      {/* ---------- How we work ---------- */}
      <section className="bg-sand py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14">
          <Label>How we work</Label>
          <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
            The commitments we hold ourselves to
          </h2>

          <div className="mt-8 border-t border-line grid md:grid-cols-2 md:gap-x-11">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="py-5 border-b border-line">
                <h3 className="font-serif text-[1.08rem] text-ink-deep">{p.title}</h3>
                <p className="mt-1.5 text-[15px] text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Who we work with ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <Label>Who we work with</Label>
        <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
          Open to any student who needs it
        </h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-11">
          <p className="text-base text-muted leading-relaxed">
            Our services are open to any student who needs them, without distinction of religion,
            caste, gender, language or background. Selection for scholarships is decided on merit and
            financial need, and on nothing else.
          </p>
          <p className="text-base text-muted leading-relaxed">
            We also work with schools, colleges, NGOs and community organisations who see these
            students long before we do, and who can tell us which ones need reaching.
          </p>
        </div>

        <div className="mt-8 border-[1.5px] border-ink bg-cream px-6 py-5">
          <h3 className="font-serif text-[1.08rem] text-ink-deep">
            Why the scholarship starts in Karnataka
          </h3>
          <p className="mt-2 text-[15px] text-muted leading-relaxed">
            For the 2026 cycle, the scholarship programme is open to students studying in or
            domiciled in Karnataka. That is a deliberate limit rather than a lack of ambition. We
            would rather run one state thoroughly — verifying documents, interviewing every
            shortlisted candidate, and staying in touch with families afterwards — than accept
            applications from across the country that we could not process properly. The programme is
            built to grow beyond Karnataka, and that is where it is headed.
          </p>
        </div>
      </section>

      {/* ---------- Vision ---------- */}
      <section className="bg-ink py-14 sm:py-20 text-[#E7DECC]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <span className="block text-[11px] uppercase tracking-[0.2em] text-marigold-l font-medium">
            Our vision
          </span>
          <span className="block w-10 h-0.5 mt-2 mx-auto bg-marigold-l" />
          <p className="mt-6 font-serif text-2xl sm:text-3xl md:text-[2.15rem] leading-[1.35] text-white">
            A country where a student’s education is decided by their ability and their effort —
            never by what their family is able to earn, and never by what nobody happened to tell
            them in time.
          </p>
        </div>
      </section>

      {/* ---------- Get involved ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <Label>Get involved</Label>
        <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
          Three ways in
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-9">
          {GET_INVOLVED.map((g) => (
            <div key={g.title} className="flex flex-col">
              <h3 className="inline-block self-start font-serif text-lg text-ink-deep border-b-2 border-marigold pb-2.5">
                {g.title}
              </h3>
              <p className="mt-3 text-[15px] text-muted leading-relaxed">{g.body}</p>
              <div className="mt-auto pt-6">
                <Button href={g.href} variant="ink">
                  {g.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 pt-6 border-t border-line text-[15px] text-muted leading-relaxed">
          <strong className="text-ink">Contact:</strong>{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest2 underline break-all">
            {CONTACT_EMAIL}
          </a>{' '}
          ·{' '}
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-forest2 underline">
            {CONTACT_PHONE}
          </a>
        </p>
      </section>
    </>
  )
}
