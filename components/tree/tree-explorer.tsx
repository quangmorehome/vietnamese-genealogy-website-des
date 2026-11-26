'use client'

import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { byId, generations, people, rootPerson, type TreePerson } from '@/lib/family-tree'
import { GoldParticles } from '@/components/gold-particles'
import { TreeCanvas } from '@/components/tree/tree-canvas'
import { LineageList } from '@/components/tree/lineage-list'
import { SelectedPersonPanel } from '@/components/tree/selected-person-panel'

const normalize = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase()

export function TreeExplorer() {
  const [query, setQuery] = useState('')
  const [generation, setGeneration] = useState<number | 'all'>('all')
  const [selectedId, setSelectedId] = useState('thuan')

  const matches = useMemo(() => {
    const q = normalize(query.trim())
    return (p: TreePerson) =>
      (generation === 'all' || p.generation === generation) && (!q || normalize(p.name).includes(q))
  }, [query, generation])

  const visible = people.filter(matches)
  const selected = byId(selectedId) ?? rootPerson
  const filtering = query.trim() !== '' || generation !== 'all'

  const filters = (
    <div className="flex flex-col gap-5">
      <div className="relative">
        <label htmlFor="tree-search" className="sr-only">
          Tìm thành viên
        </label>
        <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-gold/70" />
        <input
          id="tree-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm theo tên..."
          className="h-12 w-full rounded-full border border-gold/25 bg-background/60 pr-11 pl-11 text-base text-cream placeholder:text-muted-foreground outline-none transition-shadow focus:border-gold/60 focus:shadow-[0_0_24px_-6px_rgba(212,175,55,0.7)] [&::-webkit-search-cancel-button]:hidden"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Xóa tìm kiếm"
            className="absolute top-1/2 right-1 grid size-10 -translate-y-1/2 place-items-center rounded-full text-cream/70 hover:text-gold-soft"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        ) : null}
      </div>

      <div role="group" aria-label="Lọc theo thế hệ">
        <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-gold/80">Thế hệ</p>
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:px-0">
          {[{ value: 'all' as const, label: 'Tất cả' }, ...generations].map((g) => {
            const active = generation === g.value
            return (
              <button
                key={g.value}
                type="button"
                aria-pressed={active}
                onClick={() => setGeneration(g.value)}
                className={cn(
                  'min-h-11 shrink-0 rounded-full border px-4 text-sm transition-all',
                  active
                    ? 'border-gold bg-gold/15 text-gold-soft shadow-[0_0_18px_-4px_rgba(212,175,55,0.8)]'
                    : 'border-gold/20 text-cream/75 hover:border-gold/50',
                )}
              >
                {g.label}
              </button>
            )
          })}
        </div>
      </div>

      <p className="text-sm text-muted-foreground" aria-live="polite">
        {filtering ? `${visible.length} / ${people.length} thành viên phù hợp` : `${people.length} thành viên · 4 thế hệ`}
      </p>
    </div>
  )

  return (
    <div className="mx-auto grid max-w-[90rem] gap-8 px-5 lg:grid-cols-[320px_1fr] lg:gap-10 lg:px-8">
      <aside className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-3xl border border-gold/15 bg-card/50 p-5 backdrop-blur-sm">{filters}</div>
        <div className="hidden lg:block">
          <SelectedPersonPanel person={selected} />
        </div>
      </aside>

      <div className="lg:hidden">
        <LineageList visible={visible} selectedId={selectedId} onSelect={setSelectedId} />
      </div>

      <section
        aria-label="Sơ đồ cây gia phả"
        className="relative hidden overflow-hidden rounded-[2rem] border border-gold/20 bg-[radial-gradient(ellipse_at_50%_0%,rgba(90,21,32,0.55),transparent_60%),radial-gradient(ellipse_at_50%_100%,rgba(212,175,55,0.08),transparent_60%)] shadow-[inset_0_0_80px_-20px_rgba(212,175,55,0.25)] lg:block"
      >
        <GoldParticles count={40} />
        <span aria-hidden="true" className="pointer-events-none absolute top-16 left-1/2 size-80 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative overflow-x-auto">
          <TreeCanvas root={rootPerson} selectedId={selectedId} isDimmed={(p) => filtering && !matches(p)} onSelect={setSelectedId} />
        </div>
      </section>
    </div>
  )
}
