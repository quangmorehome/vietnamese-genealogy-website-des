import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { childrenOf, generations, lineageNote, spouseOf, toRoman, type TreePerson } from '@/lib/family-tree'
import { PersonAvatar } from '@/components/tree/person-avatar'

export function LineageList({
  visible,
  selectedId,
  onSelect,
}: {
  visible: TreePerson[]
  selectedId: string
  onSelect: (id: string) => void
}) {
  const groups = generations
    .map((g) => ({ ...g, members: visible.filter((p) => p.generation === g.value) }))
    .filter((g) => g.members.length)

  if (!groups.length) {
    return (
      <p className="rounded-2xl border border-gold/15 bg-card/60 px-6 py-10 text-center text-muted-foreground">
        Không tìm thấy thành viên phù hợp.
      </p>
    )
  }

  return (
    <ol className="relative flex flex-col gap-10">
      <span aria-hidden="true" className="absolute top-3 bottom-3 left-[27px] w-px bg-gradient-to-b from-gold/60 via-gold/25 to-transparent shadow-[0_0_6px_rgba(212,175,55,0.5)]" />
      {groups.map((g) => (
        <li key={g.value} className="relative">
          <div className="flex items-center gap-4">
            <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full border border-gold/50 bg-background font-serif text-lg text-gold shadow-[0_0_20px_-4px_rgba(212,175,55,0.7)]">
              {toRoman(g.value)}
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold/80">Thế hệ</p>
              <h3 className="font-serif text-2xl text-cream">Đời thứ {toRoman(g.value)}</h3>
            </div>
          </div>

          <ul className="mt-5 flex flex-col gap-3 pl-[70px]">
            {g.members.map((p) => {
              const selected = p.id === selectedId
              const spouse = !p.spouseOf ? spouseOf(p.id) : undefined
              const kids = childrenOf(p.id).length
              return (
                <li key={p.id}>
                  <div
                    className={cn(
                      'overflow-hidden rounded-2xl border transition-all duration-500',
                      selected
                        ? 'border-gold/60 bg-gradient-to-br from-burgundy/40 to-card shadow-[0_0_32px_-6px_rgba(212,175,55,0.55)]'
                        : 'border-gold/15 bg-card/60',
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => onSelect(p.id)}
                      aria-expanded={selected}
                      className="flex min-h-11 w-full items-center gap-4 p-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold/70"
                    >
                      <PersonAvatar person={p} size={56} selected={selected} />
                      <span className="flex min-w-0 flex-col gap-0.5">
                        {p.role ? (
                          <span className="text-[10px] uppercase tracking-[0.25em] text-gold/80">{p.role}</span>
                        ) : null}
                        <span className={cn('truncate font-serif text-lg leading-tight', selected ? 'text-gold-soft' : 'text-cream')}>
                          {p.name}
                        </span>
                        <span className="text-xs text-muted-foreground">{p.years}</span>
                      </span>
                    </button>

                    {selected ? (
                      <div className="border-t border-gold/15 px-4 py-4 text-sm leading-relaxed text-cream/80">
                        <p>{lineageNote(p)}</p>
                        {spouse ? <p className="mt-1">Phối ngẫu: {spouse.name}</p> : null}
                        {kids ? <p className="mt-1">{kids} người con trong sơ đồ</p> : null}
                        {p.slug ? (
                          <Link
                            href={`/thanh-vien/${p.slug}`}
                            className="mt-4 inline-flex min-h-11 items-center gap-1 rounded-full border border-gold/50 px-5 text-gold-soft transition-colors hover:bg-gold/10"
                          >
                            Xem hồ sơ <ChevronRight className="size-4" aria-hidden="true" />
                          </Link>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </li>
              )
            })}
          </ul>
        </li>
      ))}
    </ol>
  )
}
