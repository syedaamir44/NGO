import { useEffect, useState } from 'react'

export const PAGES = [
  'home',
  'about',
  'scholarship',
  'education-counselling',
  'career-counselling',
  'exam-guidance',
  'skill-courses',
  'apply',
  'request',
  'partner',
  'sponsor',
] as const

export type PageName = (typeof PAGES)[number]

/** The four non-scholarship services share one page component. */
export const SERVICE_PAGES = [
  'education-counselling',
  'career-counselling',
  'exam-guidance',
  'skill-courses',
] as const

export type ServiceKey = (typeof SERVICE_PAGES)[number]

/** The canonical origin, used for canonical + Open Graph URLs. */
export const SITE_URL = 'https://www.shikshasarathifoundation.org'

/** page → clean path. Home is the root. */
export function pageToPath(page: PageName): string {
  return page === 'home' ? '/' : `/${page}`
}

/** pathname → page. Anything unknown falls back to home. */
export function pathToPage(pathname: string): PageName {
  const seg = pathname.replace(/^\/+|\/+$/g, '').split('/')[0]
  if (!seg) return 'home'
  return (PAGES as readonly string[]).includes(seg) ? (seg as PageName) : 'home'
}

/** Per-page <head> content. Titles ~60 chars, descriptions ~150. */
export const META: Record<PageName, { title: string; description: string }> = {
  home: {
    title: 'Shikshasarathi Foundation — Merit Scholarships & Student Counselling',
    description:
      'A non-profit offering merit scholarships and free education, career and competitive-exam counselling for students from low-income families across Karnataka.',
  },
  about: {
    title: 'About Us — Shikshasarathi Foundation',
    description:
      'Who we are, why we started, and how we fund scholarships and arrange counselling for students who have the talent but not the means.',
  },
  scholarship: {
    title: 'All India Merit Scholarship 2026 — Shikshasarathi Foundation',
    description:
      'Eligibility, selection, documents and dates for the All India Merit Scholarship 2026, with direct financial support paid when college fees fall due.',
  },
  'education-counselling': {
    title: 'Education Counselling — Shikshasarathi Foundation',
    description:
      'Free guidance on which stream, which course and which college to choose, and what each choice actually leads to.',
  },
  'career-counselling': {
    title: 'Career Counselling — Shikshasarathi Foundation',
    description:
      'Free counselling on what a job really involves, what it pays and what it demands — before a student spends years preparing for it.',
  },
  'exam-guidance': {
    title: 'Competitive Exam Guidance — Shikshasarathi Foundation',
    description:
      'Guidance on CET, NEET, JEE, banking, SSC, railways and state-service exams — which one suits a student and how to prepare without wasting money.',
  },
  'skill-courses': {
    title: 'Skill Enhancement Courses — Shikshasarathi Foundation',
    description:
      'Counselling on short, practical skill courses that lead to real work, alongside a degree or instead of waiting for one.',
  },
  apply: {
    title: 'Apply for the Scholarship — Shikshasarathi Foundation',
    description:
      'Apply for the All India Merit Scholarship 2026. Applying is free — the form takes details that match your documents.',
  },
  request: {
    title: 'Request Counselling — Shikshasarathi Foundation',
    description:
      'Request a free education, career or competitive-exam counselling session with the Foundation and its partner organisations.',
  },
  partner: {
    title: 'Partner With Us — Shikshasarathi Foundation',
    description:
      'For schools, colleges and NGOs: nominate students, host a session, and help us reach students before the decision is made.',
  },
  sponsor: {
    title: 'Donate — Shikshasarathi Foundation',
    description:
      'Support a scholar or a counselling session. A contribution funds a student who would otherwise drop out.',
  },
}

function upsertMeta(selector: string, attrs: Record<string, string>) {
  if (typeof document === 'undefined') return
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
    document.head.appendChild(el)
  }
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
}

/** Apply the per-page title, description, canonical and Open Graph tags. */
export function applyMeta(page: PageName) {
  if (typeof document === 'undefined') return
  const m = META[page]
  const url = SITE_URL + pageToPath(page)
  document.title = m.title
  upsertMeta('meta[name="description"]', { name: 'description', content: m.description })
  upsertMeta('link[rel="canonical"]', { rel: 'canonical', href: url })
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: m.title })
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: m.description })
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: m.title })
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: m.description })
}

function currentPath(): string {
  if (typeof window !== 'undefined') return window.location.pathname
  // During static prerender the entry server sets this.
  return (globalThis as { __SSG_PATH__?: string }).__SSG_PATH__ || '/'
}

/** Programmatic navigation used by the click interceptor. */
export function navigate(path: string) {
  if (typeof window === 'undefined') return
  if (window.location.pathname === path) return
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

/**
 * History (path-based) routing.
 *
 * Clean URLs — `/education-counselling`, not `/#/education-counselling` — so
 * every page is a real, crawlable URL. Internal <a> clicks are intercepted for
 * instant client-side navigation; modifier-clicks and new-tab clicks fall
 * through to the browser as normal.
 */
export function useHashRoute(): PageName {
  const [page, setPage] = useState<PageName>(() => pathToPage(currentPath()))

  useEffect(() => {
    const sync = () => {
      const next = pathToPage(window.location.pathname)
      setPage(next)
      applyMeta(next)
      window.scrollTo(0, 0)
    }

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return
      const a = (e.target as HTMLElement).closest('a')
      if (!a) return
      const href = a.getAttribute('href') || ''
      const target = a.getAttribute('target')
      if (target && target !== '_self') return
      // Only same-origin, in-app links (start with a single slash).
      if (!href.startsWith('/') || href.startsWith('//')) return
      e.preventDefault()
      navigate(href)
    }

    // Keep the head in sync for the first paint too.
    applyMeta(pathToPage(window.location.pathname))
    window.addEventListener('popstate', sync)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('popstate', sync)
      document.removeEventListener('click', onClick)
    }
  }, [])

  return page
}
