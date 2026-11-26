import { SectionHeading } from '@/components/ornament'
import type { MemberProfile } from '@/lib/members'

export function ProfileBiography({ member }: { member: MemberProfile }) {
  const [first, ...rest] = member.biography

  return (
    <section aria-labelledby="tieu-su-title" className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading id="tieu-su-title" eyebrow="Tiểu sử" title="Câu chuyện một đời người" />

        <div className="glow-border relative mt-14 rounded-2xl bg-gradient-to-b from-card to-background px-6 py-10 sm:px-14 sm:py-16">
          <span aria-hidden="true" className="absolute left-4 top-4 size-6 border-l border-t border-gold/50" />
          <span aria-hidden="true" className="absolute right-4 top-4 size-6 border-r border-t border-gold/50" />
          <span aria-hidden="true" className="absolute bottom-4 left-4 size-6 border-b border-l border-gold/50" />
          <span aria-hidden="true" className="absolute bottom-4 right-4 size-6 border-b border-r border-gold/50" />

          <div className="space-y-6 text-pretty text-[17px] leading-[1.9] text-cream/85">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-gold">
              {first}
            </p>
            {rest.slice(0, 1).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <figure className="my-12 border-y border-gold/20 py-10 text-center">
            <blockquote className="text-balance font-serif text-2xl italic leading-snug text-gold-soft sm:text-3xl">
              {'“'}{member.quote.text}{'”'}
            </blockquote>
            <figcaption className="mt-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {member.quote.source}
            </figcaption>
          </figure>

          <div className="space-y-6 text-pretty text-[17px] leading-[1.9] text-cream/85">
            {rest.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
