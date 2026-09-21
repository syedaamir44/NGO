/**
 * Shikshasarathi mark — an open book beneath a four-point spark.
 * Not a Lucide icon; drawn here so it inherits currentColor.
 */
export default function Logo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      role="img"
      aria-label="Shikshasarathi Foundation"
    >
      <path d="M 128 0 L 142 34 L 176 48 L 142 62 L 128 96 L 114 62 L 80 48 L 114 34 Z" />
      <path d="M 121 126 C 92 98, 46 94, 8 102 L 8 244 C 46 236, 92 240, 121 254 Z" />
      <path d="M 135 126 C 164 98, 210 94, 248 102 L 248 244 C 210 236, 164 240, 135 254 Z" />
    </svg>
  )
}
