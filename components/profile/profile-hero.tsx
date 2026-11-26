import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { GoldParticles } from '@/components/gold-particles'
import { Ornament } from '@/components/ornament'
import type { MemberProfile } from '@/lib/members'

export function ProfileHero({ member }: { member: MemberProfile }) {
  return (
    <section aria-labelledby="member-name" className="relative overflow-hidden px-5 pb-20 pt-24 sm:pb-28 sm:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(142,36,51,0.35),transparent_70%)]"
      />
      <GoldParticles count={28} />

      <div className="relative mx-auto max-w-6xl">
        <nav aria-label="Đường dẫn" className="mb-10 sm:mb-14">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="inline-flex min-h-11 items-center gap-1 pr-1 transition-colors hover:text-gold-soft">
                <ChevronLeft className="size-4" aria-hidden="true" />
                Gia phả
              </Link>
            </li>
            <li aria-hidden="true" className="text-gold/40">/</li>
            <li className="px-1">{member.generation}</li>
            <li aria-hidden="true" className="text-gold/40">/</li>
            <li aria-current="page" className="px-1 text-cream/90">{member.name}</li>
          </ol>
        </nav>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="relative w-full max-w-[300px] shrink-0 sm:max-w-[360px]">
            <div
              aria-hidden="true"
              className="halo absolute left-1/2 top-1/2 size-[130%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_62%)]"
            />
            <div
              aria-hidden="true"
              className="spin-slow absolute -inset-5 rounded-t-full border border-dashed border-gold/20"
            />
            <div className="relative rounded-t-full bg-gradient-to-b from-gold via-gold/40 to-gold/10 p-px shadow-[0_0_80px_-10px_rgba(212,175,55,0.55)]">
              <div className="rounded-t-full bg-background p-2.5">
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
                  <Image
                    src={member.portrait || '/placeholder.svg'}
                    alt={member.portraitAlt}
                    fill
                    priority
                    sizes="(min-width: 640px) 360px, 300px"
                    className="object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div aria-hidden="true" className="absolute inset-2 rounded-t-full border border-gold/30" />
                </div>
              </div>
            </div>
            <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold/50 bg-background px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-gold-soft shadow-[0_0_24px_-6px_rgba(212,175,55,0.7)]">
              {member.generation} · {member.branch}
            </p>
          </div>

          <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold/80">{member.honorific}</p>
            <h1
              id="member-name"
              className="mt-4 text-balance font-serif text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl"
            >
              <span className="text-gold-gradient">{member.name}</span>
            </h1>

            <p className="mt-5 flex items-center gap-4 font-serif text-3xl text-cream/90 sm:text-4xl">
              <span>{member.born}</span>
              <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />
              <span className="sr-only">đến</span>
              <span>{member.died}</span>
            </p>

            <Ornament className="mt-7 lg:justify-start" />

            <ul className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start" aria-label="Danh hiệu và vai trò">
              {member.titles.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-burgundy bg-burgundy/40 px-4 py-2 text-sm text-cream/90"
                >
                  {t}
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-md text-pretty font-serif text-2xl italic leading-snug text-gold-soft/90">
              {'“'}{member.epitaph}{'”'}
            </p>

            <dl className="mt-10 grid w-full max-w-xl gap-px overflow-hidden rounded-xl border border-gold/15 bg-gold/15 sm:grid-cols-3">
              {member.facts.map((f) => (
                <div key={f.label} className="bg-card/95 px-5 py-4 text-center lg:text-left">
                  <dt className="text-[11px] uppercase tracking-[0.25em] text-gold/70">{f.label}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-cream/90">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
