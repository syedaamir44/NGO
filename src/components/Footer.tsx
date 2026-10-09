import Logo from './Logo'
import { SERVICES } from '../data/services'
import { CONTACT_EMAIL, CONTACT_PHONE, IMPLEMENTATION_PARTNER, INSTAGRAM_URL } from '../config'

const LINK = 'block py-1.5 text-[#9FB0AB] hover:text-marigold transition-colors duration-200'

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-[#9FB0AB] text-[15px]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr] md:gap-11">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="w-6 h-6 text-marigold" />
              <h4 className="font-serif text-[1.02rem] text-white">Shikshasarathi Foundation</h4>
            </div>
            <p className="mt-3 leading-relaxed">
              A non-profit organisation supporting students from economically weaker backgrounds with
              merit scholarships, education and career mentorship, competitive exam guidance and
              add-on skill courses.
            </p>
            <p className="mt-4 leading-relaxed">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-marigold break-all">
                {CONTACT_EMAIL}
              </a>
              <br />
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-marigold">
                {CONTACT_PHONE}
              </a>
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full border border-[#2A5049] text-[#DED4C0] hover:text-white hover:border-marigold transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] shrink-0" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="text-sm font-medium">Follow us on Instagram</span>
            </a>
          </div>

          <div>
            <h4 className="font-serif text-[1.02rem] text-white mb-2">What we do</h4>
            <a href="/scholarship" className={LINK}>
              Merit Scholarship
            </a>
            {SERVICES.map((s) => (
              <a key={s.key} href={`/${s.key}`} className={LINK}>
                {s.name}
              </a>
            ))}
          </div>

          <div>
            <h4 className="font-serif text-[1.02rem] text-white mb-2">Get involved</h4>
            <a href="/apply" className={LINK}>
              Apply for a scholarship
            </a>
            <a href="/request" className={LINK}>
              Request a session
            </a>
            <a href="/partner" className={LINK}>
              Partner institutions
            </a>
            <a href="/about" className={LINK}>
              About us
            </a>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-[#23453F] text-[0.8rem] text-[#6E827D] leading-relaxed">
          <p>
            Scholarship applications are processed for the Foundation by its implementation partner{' '}
            <a
              href={IMPLEMENTATION_PARTNER.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9FB0AB] hover:text-marigold underline underline-offset-2"
            >
              {IMPLEMENTATION_PARTNER.name}
            </a>
            .
          </p>
          <p className="mt-3">
            © 2026 Shikshasarathi Foundation · Bangalore, Karnataka, India. Scholarship amounts,
            scholar numbers and dates shown are indicative until formally announced. Payment details
            shown are placeholders pending the Foundation’s registration and bank account.
            Mentorship, exam guidance and skill courses are arranged with partner organisations,
            which set their own fees; the Foundation receives no commission or referral fee from any
            of them.
          </p>
        </div>
      </div>
    </footer>
  )
}
