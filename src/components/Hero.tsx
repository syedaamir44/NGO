import HeroBackdrop from './HeroBackdrop'

/**
 * The top of the home page.
 *
 * A compact banner rather than a full-screen hero: the headline sits in a
 * well-proportioned band, and the five services begin directly beneath it,
 * so a visitor sees what the Foundation does without scrolling.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <HeroBackdrop />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 md:px-14 pt-32 sm:pt-36 md:pt-44 pb-14 sm:pb-20 md:pb-24 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter text-ink font-normal">
          Talent is everywhere.
          <br />
          <em className="italic text-marigold">Opportunity is not.</em>
        </h1>
      </div>
    </section>
  )
}
