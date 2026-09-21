import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Logo from './Logo'
import { SERVICES } from '../data/services'
import type { PageName } from '../lib/useHashRoute'

const SERVICE_LINKS = [
  { label: 'Merit Scholarship', href: '#/scholarship' },
  ...SERVICES.map((s) => ({ label: s.name, href: `#/${s.key}` })),
]

export default function Navbar({ page }: { page: PageName }) {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setMenu(false)
      }
    }
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('[data-services-menu]')) setMenu(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const solid = page !== 'home' || scrolled || open

  return (
    <nav
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-200',
        solid ? 'bg-cream/90 backdrop-blur-sm border-b border-line' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="px-6 sm:px-10 md:px-14 py-4 sm:py-5 flex items-center justify-between gap-4">
        <a href="#/home" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <Logo className="w-6 h-6 text-marigold" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base tracking-tight text-ink">Shikshasarathi</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-ink/50 mt-0.5">
              Foundation
            </span>
          </span>
        </a>

        {/* Centre links */}
        <div className="hidden md:flex items-center gap-7">
          <div className="relative" data-services-menu>
            <button
              type="button"
              onClick={() => setMenu((v) => !v)}
              className="flex items-center gap-1 text-sm text-ink/70 hover:text-ink transition-colors duration-200"
              aria-expanded={menu}
            >
              What we do
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${menu ? 'rotate-180' : ''}`}
              />
            </button>
            {menu && (
              <div className="absolute left-0 top-full mt-3 w-64 bg-cream border border-line shadow-sm py-1">
                {SERVICE_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenu(false)}
                    className="block px-4 py-2.5 text-sm text-ink/75 hover:text-ink hover:bg-sand transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href="#/about"
            className="text-sm text-ink/70 hover:text-ink transition-colors duration-200"
          >
            About us
          </a>
          <a
            href="#/partner"
            className="text-sm text-ink/70 hover:text-ink transition-colors duration-200"
          >
            For institutions
          </a>
          <a
            href="#/sponsor"
            className="text-sm text-ink/70 hover:text-ink transition-colors duration-200"
          >
            Donate
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#/apply"
            className="hidden sm:inline-flex px-5 py-2.5 bg-ink text-cream text-sm font-medium rounded-lg hover:bg-ink-deep transition-colors duration-200"
          >
            Apply Now
          </a>
          <button
            type="button"
            className="md:hidden flex flex-col justify-center gap-[5px] w-11 h-11 px-2.5"
            aria-expanded={open}
            aria-controls="eif-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-full bg-ink rounded transition-transform duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-full bg-ink rounded transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-full bg-ink rounded transition-transform duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          id="eif-menu"
          className="md:hidden bg-ink-deep border-t border-[#2A5049] px-6 pb-4 flex flex-col max-h-[calc(100vh-72px)] overflow-y-auto"
        >
          <span className="pt-4 pb-1 text-[10px] uppercase tracking-[0.2em] text-marigold-l/70">
            What we do
          </span>
          {SERVICE_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center min-h-[50px] text-[#DED4C0] hover:text-white border-b border-[#23453F] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          {[
            { label: 'About us', href: '#/about' },
            { label: 'For institutions', href: '#/partner' },
            { label: 'Donate', href: '#/sponsor' },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center min-h-[50px] text-[#DED4C0] hover:text-white border-b border-[#23453F] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#/apply"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center min-h-[52px] bg-marigold text-[#241703] font-semibold rounded-lg"
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  )
}
