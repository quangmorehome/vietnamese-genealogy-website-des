import Image from 'next/image'
import { SectionHeading } from '@/components/ornament'
import type { MemberProfile, Relative } from '@/lib/members'

function RelativeCard({ person }: { person: Relative }) {
  return (
    <article className="glow-border group flex h-full items-center gap-4 rounded-xl bg-gradient-to-br from-card to-background p-4 transition-all duration-500 hover:border-gold/50 hover:shadow-[0_0_50px_-14px_rgba(212,175,55,0.5)]">
      <div className="relative size-20 shrink-0 rounded-full bg-gradient-to-b from-gold to-gold/20 p-px shadow-[0_0_24px_-6px_rgba(212,175,55,0.6)]">
        <div className="relative size-full overflow-hidden rounded-full border-2 border-background">
          <Image
            src={person.image || '/placeholder.svg'}
            alt={person.alt}
            fill
            sizes="80px"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold/80">{person.relation}</p>
        <h4 className="mt-1 font-serif text-xl leading-tight text-cream sm:text-2xl">{person.name}</h4>
        <p className="mt-1 text-sm tracking-wider text-muted-foreground">{person.years}</p>
      </div>
    </article>
  )
}

export function ProfileRelationships({ member }: { member: MemberProfile }) {
  return (
    <section aria-labelledby="than-quyen-title" className="relative px-5 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(90,21,32,0.35),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          id="than-quyen-title"
          eyebrow="Thân quyến"
          title="Những người thương yêu"
          description="Trên dưới một nhà, trước sau một nếp — những sợi chỉ nối cụ với tiền nhân và hậu duệ."
        />

        <div className="mt-16 space-y-12">
          {member.relatives.map((g) => (
            <div key={g.group}>
              <h3 className="flex items-center gap-4 font-serif text-2xl text-gold-soft">
                {g.group}
                <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
              </h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {g.people.map((p) => (
                  <li key={p.name}>
                    <RelativeCard person={p} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
