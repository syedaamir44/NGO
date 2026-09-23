import { ArrowRight } from 'lucide-react'
import { Label, Section, H2 } from './ui'
import { SERVICES } from '../data/services'

const CARDS = [
  {
    index: '01',
    name: 'Merit Scholarship',
    href: '/scholarship',
    teaser:
      'Direct financial support for meritorious students from low-income families, paid when college fees actually fall due.',
    highlight: true,
  } as const,
  ...SERVICES.map((s) => ({
    index: s.index,
    name: s.name,
    href: `/${s.key}`,
    teaser: s.teaser,
    highlight: false,
  })),
]

export default function ServicesOverview() {
  return (
    <Section id="services" className="bg-sand">
      <Label>What we do</Label>
      <H2 className="text-ink-deep">Five kinds of support, from school to the first job</H2>
      <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
        The first removes a financial barrier. The other four remove an information barrier — and in
        our experience the second kind stops just as many students as the first. We fund the
        scholarship ourselves and arrange the rest with partner organisations, including help with
        their cost where a student needs it.
      </p>

      <div className="mt-10 border-t border-line">
        {CARDS.map((c) => (
          <a
            key={c.href}
            href={c.href}
            className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[72px_1fr_1.25fr_auto] gap-x-4 md:gap-x-6 gap-y-1.5 items-start py-6 md:py-7 border-b border-line hover:bg-cream/70 transition-colors duration-200 px-1 -mx-1"
          >
            <div className="col-start-1 row-start-1 font-serif text-2xl md:text-[2.2rem] leading-none text-marigold">
              {c.index}
            </div>

            <h3 className="col-start-2 row-start-1 md:col-start-2 font-serif text-lg md:text-xl text-ink-deep self-center">
              {c.name}
              {c.highlight && (
                <span className="ml-2.5 align-middle inline-block text-[0.6rem] font-sans font-bold uppercase tracking-[0.12em] text-[#7A5A12] bg-marigold-l px-2 py-0.5 rounded-sm">
                  Applications open
                </span>
              )}
            </h3>

            <p className="col-start-2 col-span-2 row-start-2 md:col-start-3 md:col-span-1 md:row-start-1 text-[15px] text-muted leading-relaxed">
              {c.teaser}
            </p>

            <ArrowRight className="hidden md:block md:col-start-4 md:row-start-1 self-center w-4 h-4 text-ink/40 group-hover:text-ink group-hover:translate-x-0.5 transition-all duration-200" />
          </a>
        ))}
      </div>
    </Section>
  )
}
