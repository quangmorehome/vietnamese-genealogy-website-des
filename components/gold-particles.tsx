import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453
  return x - Math.floor(x)
}

export function GoldParticles({
  count = 36,
  className,
}: {
  count?: number
  className?: string
}) {
  const particles = Array.from({ length: count }, (_, i) => {
    const size = Math.round((1 + seeded(i, 1) * 3) * 10) / 10
    return {
      left: `${(seeded(i, 2) * 100).toFixed(2)}%`,
      size,
      style: {
        '--dur': `${(12 + seeded(i, 3) * 16).toFixed(1)}s`,
        '--delay': `${(-seeded(i, 4) * 24).toFixed(1)}s`,
        '--drift': `${((seeded(i, 5) - 0.5) * 120).toFixed(0)}px`,
      } as CSSProperties,
    }
  })

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle absolute bottom-[-10px] rounded-full bg-gold-soft"
          style={{
            ...p.style,
            left: p.left,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 4}px ${p.size}px rgb(212 175 55 / 0.45)`,
          }}
        />
      ))}
    </div>
  )
}
