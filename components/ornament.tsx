import { cn } from '@/lib/utils'

export function Ornament({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('flex items-center justify-center gap-3 text-gold', className)}>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/70 sm:w-20" />
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]">
        <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" fill="currentColor" />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/70 sm:w-20" />
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string
  title: string
  description?: string
  id?: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold/80">{eyebrow}</p>
      <h2 id={id} className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-cream sm:text-5xl">
        {title}
      </h2>
      <Ornament className="mt-6" />
      {description ? (
        <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
