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

function parse(hash: string): PageName {
  if (!hash.startsWith('#/')) return 'home'
  const name = hash.slice(2).split('?')[0] as PageName
  return (PAGES as readonly string[]).includes(name) ? name : 'home'
}

/**
 * Hash routing.
 *
 * `#/scholarship` etc. switch page. A bare `#story` anchor is left to the
 * browser, except when the target lives on a page that is not currently
 * shown — then we switch page first and scroll after paint.
 */
export function useHashRoute(): PageName {
  const [page, setPage] = useState<PageName>(() => parse(window.location.hash))

  useEffect(() => {
    const onChange = () => {
      const hash = window.location.hash || '#/home'

      if (hash.startsWith('#/')) {
        setPage(parse(hash))
        window.scrollTo(0, 0)
        return
      }

      const id = hash.slice(1)
      setPage((current) => {
        // An anchor that exists on this page is just a scroll.
        if (document.getElementById(id)) {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return current
        }
        // Otherwise it belongs to the home page.
        window.requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
        return 'home'
      })
    }

    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return page
}
