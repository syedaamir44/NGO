import HeroBackdrop from './HeroBackdrop'
import { Button } from './ui'

/**
 * The top of the home page.
 *
 * A compact banner rather than a full-screen hero: the headline, a one-line
 * statement of what the Foundation does, and the two actions that matter sit
 * in a well-proportioned band, and the five services begin directly beneath
 * it — so a visitor sees what we do and what to do next without scrolling.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <HeroBackdrop />

      {/* Soft sunrise glow — pure CSS, warms the cream band with no image request. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute bottom-0 left-1/2 h-[72%] w-[130%] -translate-x-1/2"
          style={{
            background:
              'radial-gradient(58% 100% at 50% 100%, rgba(200,129,26,0.15), rgba(200,129,26,0.05) 46%, transparent 72%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 md:px-14 pt-32 sm:pt-36 md:pt-44 pb-14 sm:pb-20 md:pb-24 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter text-ink font-normal">
          Talent is everywhere.
          <br />
          <em className="italic text-marigold">Opportunity is not.</em>
        </h1>

        <p className="mx-auto mt-6 sm:mt-7 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
          Merit scholarships and free counselling for students who have the talent but not the
          means — arranged with partner organisations across Karnataka.
        </p>

        <div className="mt-8 sm:mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Button href="#/apply" variant="ink">
            Apply for the scholarship →
          </Button>
          <Button href="#/request" variant="outline">
            Request counselling
          </Button>
        </div>
      </div>
    </section>
  )
}
