import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SERVICES } from '../data/services'
import type { PageName } from '../lib/useHashRoute'

const SERVICE_LINKS = SERVICES.map((s) => ({ label: s.name, href: `/${s.key}` }))

const SCHOLARSHIP_LINKS = [
  { label: 'Merit Scholarship', href: '/scholarship' },
  { label: 'Apply for the scholarship', href: '/apply' },
]

const LINK = 'text-sm text-ink/70 hover:text-ink transition-colors duration-200'

function Dropdown({
  label,
  links,
  isOpen,
  onToggle,
  onNavigate,
}: {
  label: string
  links: { label: string; href: string }[]
  isOpen: boolean
  onToggle: () => void
  onNavigate: () => void
}) {
  return (
    <div className="relative" data-nav-menu>
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center gap-1 text-sm text-ink/70 hover:text-ink transition-colors duration-200"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-3 w-64 bg-cream border border-line shadow-sm py-1">
          {links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              onClick={onNavigate}
              className="block px-4 py-2.5 text-sm text-ink/75 hover:text-ink hover:bg-sand transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar({ page }: { page: PageName }) {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState<'services' | 'program' | null>(null)
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
        setMenu(null)
      }
    }
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('[data-nav-menu]')) setMenu(null)
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
        <a href="/" className="flex items-center shrink-0" onClick={() => setOpen(false)} aria-label="Shikshasarathi Foundation — home">
          <img src="/logo.png" alt="Shikshasarathi Foundation" className="h-9 sm:h-10 w-auto" width={461} height={100} />
        </a>

        {/* Centre links */}
        <div className="hidden md:flex items-center gap-7">
          <Dropdown
            label="What we do"
            links={SERVICE_LINKS}
            isOpen={menu === 'services'}
            onToggle={() => setMenu((m) => (m === 'services' ? null : 'services'))}
            onNavigate={() => setMenu(null)}
          />
          <a href="/about" className={LINK}>
            About us
          </a>
          <a href="/partner" className={LINK}>
            For institutions
          </a>
          <Dropdown
            label="Scholarship Program"
            links={SCHOLARSHIP_LINKS}
            isOpen={menu === 'program'}
            onToggle={() => setMenu((m) => (m === 'program' ? null : 'program'))}
            onNavigate={() => setMenu(null)}
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="md:hidden flex flex-col justify-center gap-[5px] w-11 h-11 px-2.5"
            aria-expanded={open}
            aria-controls="eif-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-0.5 w-full bg-ink rounded transition-transform duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-0.5 w-full bg-ink rounded transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-ink rounded transition-transform duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
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
            Scholarship Program
          </span>
          {SCHOLARSHIP_LINKS.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center min-h-[50px] text-[#DED4C0] hover:text-white border-b border-[#23453F] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}

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
            { label: 'About us', href: '/about' },
            { label: 'For institutions', href: '/partner' },
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
        </div>
      )}
    </nav>
  )
}
