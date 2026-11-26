import { SectionHeading } from '@/components/ornament'
import { GoldParticles } from '@/components/gold-particles'
import { cn } from '@/lib/utils'

type Person = {
  name: string
  role: string
  children?: Person[]
}

const tree: Person = {
  name: 'Nguyễn Đình Khiêm',
  role: 'Thủy Tổ · Đời I',
  children: [
    {
      name: 'Đình Trung',
      role: 'Trưởng chi · Đời II',
      children: [
        { name: 'Đình Cẩn', role: 'Đời III' },
        { name: 'Đình Lễ', role: 'Đời III' },
      ],
    },
    {
      name: 'Đình Hậu',
      role: 'Chi Nhì · Đời II',
      children: [
        { name: 'Đình Nghĩa', role: 'Đời III' },
        { name: 'Thị Hiền', role: 'Đời III' },
      ],
    },
    {
      name: 'Đình Phúc',
      role: 'Chi Ba · Đời II',
      children: [{ name: 'Đình Tín', role: 'Đời III' }],
    },
  ],
}

function PersonNode({ person, root }: { person: Person; root?: boolean }) {
  return (
    <div
      className={cn(
        'relative rounded-lg border bg-card/90 px-4 py-3 text-center backdrop-blur',
        root
          ? 'border-gold/70 shadow-[0_0_50px_-6px_rgba(212,175,55,0.65)]'
          : 'border-gold/25 shadow-[0_0_24px_-10px_rgba(212,175,55,0.5)]',
      )}
    >
      <p className={cn('whitespace-nowrap font-serif text-cream', root ? 'text-xl' : 'text-base')}>{person.name}</p>
      <p className="mt-0.5 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-gold/80">{person.role}</p>
    </div>
  )
}

function Branch({ person, root }: { person: Person; root?: boolean }) {
  return (
    <li>
      <PersonNode person={person} root={root} />
      {person.children?.length ? (
        <ul>
          {person.children.map((c) => (
            <Branch key={c.name} person={c} />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

export function FamilyTreePreview() {
  return (
    <section
      id="cay-gia-pha"
      aria-labelledby="cay-gia-pha-title"
      className="relative isolate scroll-mt-20 overflow-hidden px-5 py-24 sm:py-32"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(90,21,32,0.55)_0%,transparent_65%)]" />
      <GoldParticles count={18} className="-z-10 opacity-60" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="cay-gia-pha-title"
          eyebrow="Phả hệ"
          title="Cây gia phả dòng họ"
          description="Từ một gốc chung, ba chi lớn tỏa ra như cành đa xum xuê. Bản xem trước dưới đây giới thiệu ba đời đầu tiên của họ Nguyễn Đình."
        />

        <div className="glow-border relative mt-16 rounded-2xl bg-background/60 p-2 backdrop-blur-sm">
          <div
            className="overflow-x-auto px-4 py-10 [scrollbar-color:rgba(212,175,55,0.4)_transparent] sm:px-8"
            tabIndex={0}
            role="region"
            aria-label="Sơ đồ cây gia phả ba đời đầu, có thể cuộn ngang"
          >
            <div className="lineage-tree mx-auto w-max">
              <ul>
                <Branch person={tree} root />
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-gold/15 px-6 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-muted-foreground">
              <span className="font-serif text-lg text-gold-soft">+ 1.279</span> hậu duệ qua 11 đời tiếp theo
            </p>
            <a
              href="#"
              className="inline-flex min-h-11 items-center rounded-full border border-gold/50 px-6 text-sm text-gold-soft transition-all hover:bg-gold/10 hover:shadow-[0_0_24px_-6px_rgba(212,175,55,0.8)]"
            >
              Xem toàn bộ phả hệ
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground sm:hidden">Vuốt ngang để xem toàn bộ sơ đồ</p>
      </div>
    </section>
  )
}
