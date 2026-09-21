import Logo from './Logo'
import { SERVICES } from '../data/services'
import { CONTACT_EMAIL, CONTACT_PHONE } from '../config'

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
              merit scholarships, education and career counselling, competitive exam guidance and
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
          </div>

          <div>
            <h4 className="font-serif text-[1.02rem] text-white mb-2">What we do</h4>
            <a href="#/scholarship" className={LINK}>
              Merit Scholarship
            </a>
            {SERVICES.map((s) => (
              <a key={s.key} href={`#/${s.key}`} className={LINK}>
                {s.name}
              </a>
            ))}
          </div>

          <div>
            <h4 className="font-serif text-[1.02rem] text-white mb-2">Get involved</h4>
            <a href="#/apply" className={LINK}>
              Apply for a scholarship
            </a>
            <a href="#/request" className={LINK}>
              Request a session
            </a>
            <a href="#/partner" className={LINK}>
              Partner institutions
            </a>
            <a href="#/sponsor" className={LINK}>
              Donate
            </a>
            <a href="#/about" className={LINK}>
              About us
            </a>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-[#23453F] text-[0.8rem] text-[#6E827D] leading-relaxed">
          © 2026 Shikshasarathi Foundation · Bangalore, Karnataka, India. Scholarship amounts, scholar
          numbers and dates shown are indicative until formally announced. Payment details shown are
          placeholders pending the Foundation’s registration and bank account. Counselling, exam
          guidance and skill courses are arranged with partner organisations, which set their own
          fees; the Foundation receives no commission or referral fee from any of them.
        </div>
      </div>
    </footer>
  )
}
