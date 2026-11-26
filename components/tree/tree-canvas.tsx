import { cn } from '@/lib/utils'
import { childrenOf, spouseOf, type TreePerson } from '@/lib/family-tree'
import { PersonAvatar } from '@/components/tree/person-avatar'

type NodeProps = {
  selectedId: string
  isDimmed: (p: TreePerson) => boolean
  onSelect: (id: string) => void
}

function PersonNode({ person, selectedId, isDimmed, onSelect }: NodeProps & { person: TreePerson }) {
  const selected = person.id === selectedId
  return (
    <button
      type="button"
      onClick={() => onSelect(person.id)}
      aria-pressed={selected}
      className={cn(
        'group flex w-28 flex-col items-center gap-3 rounded-2xl px-2 py-3 text-center outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-gold/70',
        isDimmed(person) && !selected ? 'opacity-30' : 'opacity-100',
        selected && 'scale-105',
      )}
    >
      <PersonAvatar person={person} size={selected ? 84 : 72} selected={selected} className="group-hover:shadow-[0_0_26px_0_rgba(212,175,55,0.5)]" />
      <span className="flex flex-col gap-1">
        <span className={cn('font-serif text-base leading-tight', selected ? 'text-gold-soft' : 'text-cream')}>
          {person.name}
        </span>
        <span className="text-[11px] tracking-wider text-muted-foreground">{person.years}</span>
      </span>
    </button>
  )
}

function Branch({ person, ...rest }: NodeProps & { person: TreePerson }) {
  const spouse = spouseOf(person.id)
  const kids = childrenOf(person.id)
  return (
    <li>
      <div className="relative flex items-start justify-center rounded-3xl">
        <PersonNode person={person} {...rest} />
        {spouse ? (
          <>
            <span aria-hidden="true" className="mt-[42px] flex items-center">
              <span className="h-px w-3 bg-gold/50" />
              <span className="size-1.5 rotate-45 bg-gold shadow-[0_0_8px_rgba(212,175,55,0.9)]" />
              <span className="h-px w-3 bg-gold/50" />
            </span>
            <PersonNode person={spouse} {...rest} />
          </>
        ) : null}
      </div>
      {kids.length ? (
        <ul>
          {kids.map((k) => (
            <Branch key={k.id} person={k} {...rest} />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

export function TreeCanvas({ root, ...rest }: NodeProps & { root: TreePerson }) {
  return (
    <div className="gt-tree mx-auto w-max px-6 py-10">
      <ul>
        <Branch person={root} {...rest} />
      </ul>
    </div>
  )
}
