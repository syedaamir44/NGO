import { PageHeader } from '../components/form'
import { Label, Button } from '../components/ui'
import { getService, SERVICES } from '../data/services'
import { CONTACT_EMAIL } from '../config'
import type { ServiceKey } from '../lib/useHashRoute'

export default function ServicePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const service = getService(serviceKey)
  if (!service) return null

  const others = SERVICES.filter((s) => s.key !== serviceKey)

  return (
    <>
      <PageHeader
        crumb={service.name}
        label={service.label}
        title={service.title}
        intro={service.intro}
      />

      {/* ---------- The problem ---------- */}
      {/* The marigold rule keeps this dark block from reading as a seam
          against the (also dark) page header above it. */}
      <section className="bg-ink-deep border-t-[3px] border-marigold py-14 sm:py-20 text-[#E8DFCD]">
        <div className="max-w-[660px] mx-auto px-6 sm:px-10">
          <Label tone="light">Why this exists</Label>
          {service.problem.map((p, i) => (
            <p
              key={i}
              className={`mt-5 font-serif leading-[1.72] ${
                i === 0 ? 'text-xl sm:text-[1.35rem] leading-[1.55] text-white' : 'text-lg text-[#DED5C2]'
              }`}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ---------- Who it’s for ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <Label>Who it is for</Label>
        <h2 className="mt-4 font-serif font-normal text-2xl text-ink-deep leading-tight">
          You should ask us if
        </h2>
        <ul className="mt-4 md:grid md:grid-cols-2 md:gap-x-11 md:border-t md:border-line">
          {service.who.map((w) => (
            <li
              key={w}
              className="relative pl-6 py-2.5 md:py-4 border-b border-line last:border-b-0 md:last:border-b text-[15px] text-muted leading-relaxed"
            >
              <span className="absolute left-0 top-2.5 md:top-4 font-bold text-marigold">—</span>
              {w}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button href="/request" variant="ink">
            Request a session →
          </Button>
        </div>
      </section>

      {/* ---------- What we cover ---------- */}
      <section className="bg-sand py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14">
          <Label>What we cover</Label>
          <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
            What we will actually go through with you
          </h2>

          <div className="mt-8 border-t border-line grid md:grid-cols-2 md:gap-x-11">
            {service.covers.map((c) => (
              <div key={c.title} className="py-5 border-b border-line">
                <h3 className="font-serif text-[1.08rem] text-ink-deep">{c.title}</h3>
                <p className="mt-1.5 text-[15px] text-muted leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <Label>How it works</Label>
        <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
          From asking to acting
        </h2>

        <div className="mt-8 border-t border-line">
          {service.steps.map((s, i) => (
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
      </section>

      {/* ---------- FAQs ---------- */}
      <section className="bg-sand py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Label>Questions</Label>
          <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
            About {service.name.toLowerCase()}
          </h2>
          <div className="mt-6">
            {service.faqs.map((f, i) => (
              <details key={f.q} className="eif-faq border-b border-line" open={i === 0}>
                <summary className="flex items-center justify-between gap-4 cursor-pointer py-4 min-h-[52px] font-serif text-[1.05rem] text-ink-deep">
                  {f.q}
                </summary>
                <p className="pb-4 text-[15px] text-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-[15px] text-muted leading-relaxed">
            Anything else, write to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest2 underline break-all">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ---------- Other services ---------- */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
        <Label>Also from the Foundation</Label>
        <h2 className="mt-4 font-serif font-normal text-2xl text-ink-deep">
          Students rarely need only one of these
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {others.map((o) => (
            <a
              key={o.key}
              href={`/${o.key}`}
              className="group bg-sand hover:bg-sand-hover transition-colors duration-200 px-5 py-4"
            >
              <span className="block text-marigold text-sm">{o.index}</span>
              <span className="block mt-1 font-serif text-[1.05rem] text-ink-deep">{o.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <div className="bg-marigold text-[#241703] py-14 px-6 text-center">
        <h2 className="font-serif font-normal text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
          Ask us before you decide, not after
        </h2>
        <p className="mt-3 mx-auto max-w-xl text-[15px] text-[#46320B] leading-relaxed">
          Sending the request costs nothing and commits you to nothing. We will tell you what is
          involved, and what it costs, before anything is arranged.
        </p>
        <div className="mt-6">
          <Button href="/request" variant="ink">
            Request a session →
          </Button>
        </div>
      </div>
    </>
  )
}
