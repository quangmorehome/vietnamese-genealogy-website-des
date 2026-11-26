import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/components/ornament'

const ancestors: { name: string; title: string; years: string; image: string; alt: string; note: string; href?: string }[] = [
  {
    name: 'Nguyễn Đình Khiêm',
    title: 'Thủy Tổ · Đời thứ I',
    years: '1498 – 1571',
    image: '/images/to-1.png',
    alt: 'Chân dung cụ Nguyễn Đình Khiêm trong áo dài đen và khăn đóng',
    note: 'Người khai cơ lập nghiệp tại Phú Khê, dựng ngôi từ đường đầu tiên của dòng họ.',
  },
  {
    name: 'Trần Thị Nhu',
    title: 'Thủy Tổ Tỷ · Đời thứ I',
    years: '1503 – 1580',
    image: '/images/to-2.png',
    alt: 'Chân dung cụ bà Trần Thị Nhu với khăn vấn truyền thống',
    note: 'Đức hiền nhân hậu, truyền lại nghề dệt lụa nuôi sống bao thế hệ con cháu.',
  },
  {
    name: 'Nguyễn Đình Thuận',
    title: 'Đời thứ XII',
    years: '1902 – 1978',
    image: '/images/to-3.png',
    href: '/thanh-vien/nguyen-dinh-thuan',
    alt: 'Ảnh cụ Nguyễn Đình Thuận đeo kính tròn, mặc áo sơ mi trắng',
    note: 'Nhà giáo mở trường làng, dạy chữ cho ba thế hệ trẻ em Phú Khê.',
  },
  {
    name: 'Lê Thị Hạnh',
    title: 'Đời thứ XII',
    years: '1911 – 1996',
    image: '/images/to-4.png',
    alt: 'Ảnh cụ bà Lê Thị Hạnh thời trẻ trong tà áo dài sáng màu',
    note: 'Người giữ gìn cuốn gia phả chữ Hán qua những năm tháng chiến tranh.',
  },
]

export function AncestorsSection() {
  return (
    <section id="to-tien" aria-labelledby="to-tien-title" className="relative scroll-mt-20 px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="to-tien-title"
          eyebrow="Cội nguồn"
          title="Tưởng nhớ tiền nhân"
          description="Mỗi gương mặt là một ngọn đèn soi đường. Chúng ta kính cẩn ghi lại công đức các bậc tổ tiên đã vun đắp nên nếp nhà hôm nay."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ancestors.map((a) => (
            <li key={a.name}>
              <article className="glow-border group relative h-full overflow-hidden rounded-xl bg-gradient-to-b from-card to-background p-3 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_0_60px_-12px_rgba(212,175,55,0.45)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src={a.image || '/placeholder.svg'}
                    alt={a.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div aria-hidden="true" className="absolute inset-2 rounded-md border border-gold/25" />
                  <span className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold/40 bg-background/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gold-soft backdrop-blur">
                    {a.title}
                  </span>
                </div>
                <div className="px-3 pb-4 pt-5 text-center">
                  <h3 className="font-serif text-2xl text-cream">
                    {a.href ? (
                      <Link href={a.href} className="after:absolute after:inset-0 hover:text-gold-soft">
                        {a.name}
                      </Link>
                    ) : (
                      a.name
                    )}
                  </h3>
                  <p className="mt-1 text-sm tracking-widest text-gold/80">{a.years}</p>
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">{a.note}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
