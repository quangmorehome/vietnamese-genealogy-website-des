import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { childrenOf, lineageNote, spouseOf, toRoman, type TreePerson } from '@/lib/family-tree'
import { PersonAvatar } from '@/components/tree/person-avatar'

export function SelectedPersonPanel({ person }: { person: TreePerson }) {
  const spouse = !person.spouseOf ? spouseOf(person.id) : undefined
  const kids = childrenOf(person.id)

  return (
    <section
      aria-live="polite"
      aria-label="Thành viên đang chọn"
      className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-b from-burgundy/35 via-card to-card p-6 text-center shadow-[0_0_40px_-12px_rgba(212,175,55,0.5)]"
    >
      <span aria-hidden="true" className="pointer-events-none absolute -top-16 left-1/2 size-48 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
      <div className="relative flex flex-col items-center">
        <PersonAvatar person={person} size={112} selected />
        <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-gold/80">
          Đời thứ {toRoman(person.generation)}
          {person.role ? ` · ${person.role}` : ''}
        </p>
        <h2 className="mt-2 text-balance font-serif text-3xl leading-tight text-cream">{person.name}</h2>
        <p className="mt-1 font-serif text-lg text-gold-soft">{person.years}</p>

        <dl className="mt-5 flex w-full flex-col gap-3 border-t border-gold/15 pt-5 text-left text-sm">
          <div>
            <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Dòng dõi</dt>
            <dd className="mt-0.5 text-cream/85">{lineageNote(person)}</dd>
          </div>
          {spouse ? (
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Phối ngẫu</dt>
              <dd className="mt-0.5 text-cream/85">{spouse.name}</dd>
            </div>
          ) : null}
          {kids.length ? (
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Hậu duệ trực tiếp</dt>
              <dd className="mt-0.5 text-cream/85">{kids.map((k) => k.name).join(', ')}</dd>
            </div>
          ) : null}
        </dl>

        {person.slug ? (
          <Link
            href={`/thanh-vien/${person.slug}`}
            className="mt-6 inline-flex min-h-11 items-center gap-1 rounded-full bg-gradient-to-b from-gold-soft to-gold px-6 text-sm font-medium text-background shadow-[0_0_24px_-6px_rgba(212,175,55,0.9)] transition-transform hover:-translate-y-0.5"
          >
            Xem hồ sơ đầy đủ <ChevronRight className="size-4" aria-hidden="true" />
          </Link>
        ) : (
          <p className="mt-6 text-xs italic text-muted-foreground">Hồ sơ chi tiết đang được con cháu biên soạn.</p>
        )}
      </div>
    </section>
  )
}
