import type { ReactNode } from 'react'

/** Marigold micro-label with its 40 × 2px rule. */
export function Label({ children, tone = 'marigold' }: { children: ReactNode; tone?: 'marigold' | 'light' }) {
  const color = tone === 'light' ? 'text-marigold-l' : 'text-marigold'
  const rule = tone === 'light' ? 'bg-marigold-l' : 'bg-marigold'
  return (
    <span className="block">
      <span className={`block text-[11px] uppercase tracking-[0.2em] font-medium ${color}`}>
        {children}
      </span>
      <span className={`block w-10 h-0.5 mt-2 ${rule}`} />
    </span>
  )
}

/** Standard section shell: max width, gutters, vertical rhythm. */
export function Section({
  id,
  className = '',
  inner = 'max-w-5xl',
  children,
}: {
  id?: string
  className?: string
  inner?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={`py-14 sm:py-20 md:py-24 ${className}`}>
      <div className={`${inner} mx-auto px-6 sm:px-10 md:px-14`}>{children}</div>
    </section>
  )
}

export function H2({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`mt-4 font-serif font-normal text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight ${className}`}
    >
      {children}
    </h2>
  )
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'ink' | 'marigold' | 'outline'
  className?: string
}

export function Button({ href, children, variant = 'ink', className = '' }: ButtonProps) {
  const styles = {
    ink: 'bg-ink text-cream hover:bg-ink-deep',
    marigold: 'bg-marigold text-[#241703] hover:bg-marigold-dark hover:text-white',
    outline: 'border border-ink text-ink hover:bg-ink hover:text-cream',
  }[variant]

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-medium rounded-lg transition-colors duration-200 ${styles} ${className}`}
    >
      {children}
    </a>
  )
}
