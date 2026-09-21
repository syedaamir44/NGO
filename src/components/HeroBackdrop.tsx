import { HERO_IMAGE_URL } from '../config'

/**
 * The hero background.
 *
 * Blank by default — the hero sits on plain cream. Set HERO_IMAGE_URL in
 * src/config.ts to put a photograph behind the headline instead; it renders
 * full-bleed behind a cream scrim that keeps the headline readable.
 */
export default function HeroBackdrop() {
  if (!HERO_IMAGE_URL) return null

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <img
        src={HERO_IMAGE_URL}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Scrim — keeps the forest-green headline legible over any photo. */}
      <div className="absolute inset-0 bg-cream/75" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-cream to-transparent" />
    </div>
  )
}
