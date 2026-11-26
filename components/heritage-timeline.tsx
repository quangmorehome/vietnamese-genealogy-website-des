import { SectionHeading } from '@/components/ornament'
import { cn } from '@/lib/utils'

const events = [
  {
    year: '1527',
    title: 'Khai cơ lập nghiệp',
    text: 'Cụ Thủy Tổ Nguyễn Đình Khiêm rời quê cũ, về khai hoang vùng bãi bồi sông Đáy, lập nên xóm Phú Khê.',
  },
  {
    year: '1688',
    title: 'Dựng từ đường',
    text: 'Con cháu đời thứ V góp công dựng ngôi nhà thờ họ năm gian bằng gỗ lim, còn giữ đến ngày nay.',
  },
  {
    year: '1802',
    title: 'Biên soạn gia phả chữ Hán',
    text: 'Cụ Nguyễn Đình Uyên đỗ Hương cống, chép lại thế thứ dòng họ thành cuốn gia phả đầu tiên.',
  },
  {
    year: '1946',
    title: 'Gìn giữ qua binh lửa',
    text: 'Cụ bà Lê Thị Hạnh bọc cuốn gia phả trong vải dầu, chôn dưới gốc cau suốt chín năm kháng chiến.',
  },
  {
    year: '2024',
    title: 'Số hóa gia phả',
    text: 'Hội đồng gia tộc dịch sang quốc ngữ và số hóa toàn bộ phả hệ, kết nối con cháu khắp năm châu.',
  },
]

export function HeritageTimeline() {
  return (
    <section id="lich-su" aria-labelledby="lich-su-title" className="relative scroll-mt-20 px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          id="lich-su-title"
          eyebrow="Hành trình năm thế kỷ"
          title="Lịch sử dòng họ"
          description="Những dấu mốc làm nên truyền thống hiếu học, cần cù và trung hậu của họ Nguyễn Đình."
        />

        <ol className="relative mt-16">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent md:left-1/2"
          />
          {events.map((e, i) => {
            const right = i % 2 === 1
            return (
              <li key={e.year} className="relative pb-12 pl-12 last:pb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-2 size-3 -translate-x-1/2 rotate-45 bg-gold shadow-[0_0_16px_4px_rgba(212,175,55,0.55)] md:left-1/2"
                />
                <div className={cn(right ? 'md:col-start-2' : 'md:text-right')}>
                  <p className="font-serif text-5xl leading-none text-gold-gradient">{e.year}</p>
                  <h3 className="mt-3 font-serif text-2xl text-cream">{e.title}</h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{e.text}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
