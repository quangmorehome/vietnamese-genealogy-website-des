import { MapPin, CalendarDays } from 'lucide-react'
import { GoldParticles } from '@/components/gold-particles'
import { Ornament } from '@/components/ornament'

export function AncestralHall() {
  return (
    <section id="tu-duong" aria-labelledby="tu-duong-title" className="scroll-mt-20 px-5 py-24 sm:py-32">
      <div className="relative isolate mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-burgundy via-[#2a0c12] to-background px-6 py-16 text-center shadow-[0_0_80px_-20px_rgba(212,175,55,0.5)] sm:px-12 sm:py-20">
        <div aria-hidden="true" className="halo absolute left-1/2 top-0 -z-10 size-[480px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.25),transparent_65%)] blur-2xl" />
        <GoldParticles count={14} className="-z-10" />

        <blockquote>
          <p className="text-balance font-serif text-3xl italic leading-snug text-cream sm:text-4xl">
            {'“Cây có cội, nước có nguồn — chim có tổ, người có tông.”'}
          </p>
          <footer className="mt-4 text-sm tracking-[0.25em] text-gold/80">TỤC NGỮ VIỆT NAM</footer>
        </blockquote>

        <Ornament className="mt-10" />

        <h2 id="tu-duong-title" className="mt-10 font-serif text-3xl text-gold-soft sm:text-4xl">
          Ngày Giỗ Tổ Dòng Họ
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-cream/75">
          Kính mời con cháu gần xa về từ đường dâng hương tưởng nhớ Thủy Tổ, đoàn tụ gia tộc và ghi danh thế hệ mới vào gia phả.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm text-cream/85 sm:flex-row sm:gap-10">
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4 text-gold" aria-hidden="true" />
            Mùng 10 tháng Ba Âm lịch
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-gold" aria-hidden="true" />
            Từ đường Phú Khê, Hà Nam
          </span>
        </div>

        <a
          href="#"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-b from-gold-soft to-gold px-8 text-sm font-semibold tracking-wide text-primary-foreground shadow-[0_0_40px_-8px_rgba(212,175,55,0.9)] transition-transform hover:scale-[1.03]"
        >
          Đăng ký về dự lễ
        </a>
      </div>
    </section>
  )
}
