import Image from 'next/image'
import { cn } from '@/lib/utils'
import { initials, type TreePerson } from '@/lib/family-tree'

export function PersonAvatar({
  person,
  size,
  selected,
  className,
}: {
  person: TreePerson
  size: number
  selected?: boolean
  className?: string
}) {
  return (
    <span
      className={cn(
        'relative grid shrink-0 place-items-center rounded-full p-[2px] transition-all duration-500',
        selected
          ? 'bg-gradient-to-b from-gold-soft via-gold to-gold/40 shadow-[0_0_28px_4px_rgba(212,175,55,0.55)]'
          : 'bg-gradient-to-b from-gold/70 via-gold/30 to-gold/10 shadow-[0_0_14px_-2px_rgba(212,175,55,0.35)]',
        className,
      )}
      style={{ width: size, height: size }}
    >
      <span className="relative block size-full overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_35%,#3a1a20,#120d12)]">
        {person.image ? (
          <Image
            src={person.image}
            alt={`Chân dung ${person.name}`}
            fill
            sizes={`${size}px`}
            className="object-cover object-top sepia-[0.25]"
          />
        ) : (
          <span
            aria-hidden="true"
            className="grid size-full place-items-center font-serif text-gold-soft"
            style={{ fontSize: size * 0.4 }}
          >
            {initials(person.name)}
          </span>
        )}
      </span>
    </span>
  )
}
