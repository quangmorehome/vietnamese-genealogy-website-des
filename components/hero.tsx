import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { GoldParticles } from '@/components/gold-particles'
import { Ornament } from '@/components/ornament'

const stats = [
  { value: '14', label: 'Đời nối tiếp' },
  { value: '1.286', label: 'Thành viên' },
  { value: '1527', label: 'Năm lập họ' },
]

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-svh items-center overflow-hidden pt-20">
      <Image
        src="/images/nha-tho-ho.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(12,13,19,0.35)_0%,rgba(12,13,19,0.85)_60%,#0c0d13_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-background to-transparent" />

      <div
        aria-hidden="true"
        className="halo absolute left-1/2 top-[46%] -z-10 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28)_0%,rgba(142,36,51,0.12)_45%,transparent_70%)] blur-2xl sm:size-[760px]"
      />
      <div
        aria-hidden="true"
        className="spin-slow absolute left-1/2 top-[46%] -z-10 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold/15 sm:size-[560px]"
        style={{ translate: '-50% -50%' }}
      />

      <GoldParticles />

      <div className="mx-auto w-full max-w-4xl px-5 py-20 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold/85 sm:text-sm">
          Uống nước nhớ nguồn
        </p>

        <h1 id="hero-title" className="mt-6 font-serif font-medium leading-none">
          <span className="text-gold-gradient block text-7xl drop-shadow-[0_0_30px_rgba(212,175,55,0.35)] sm:text-8xl md:text-9xl">
            Gia Phả
          </span>
          <span className="mt-4 block text-3xl italic text-cream sm:text-4xl md:text-5xl">
            Họ Nguyễn Đình
          </span>
        </h1>

        <Ornament className="mt-8" />

        <p className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-cream/75 sm:text-lg">
          Gần năm thế kỷ từ làng Phú Khê bên dòng sông Đáy — nơi lưu giữ tên tuổi, công đức và câu chuyện
          của mười bốn đời tổ tiên, để con cháu muôn đời biết mình từ đâu đến.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#cay-gia-pha"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-b from-gold-soft to-gold px-8 text-sm font-semibold tracking-wide text-primary-foreground shadow-[0_0_40px_-8px_rgba(212,175,55,0.9)] transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Khám phá cây gia phả
          </a>
          <a
            href="#lich-su"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-cream/25 px-8 text-sm tracking-wide text-cream transition-colors hover:border-gold/60 hover:text-gold-soft sm:w-auto"
          >
            Lịch sử dòng họ
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-4 border-t border-gold/15 pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-3xl text-gold-soft sm:text-4xl">{s.value}</dd>
              <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#to-tien"
        aria-label="Cuộn xuống phần tổ tiên"
        className="absolute bottom-6 left-1/2 grid size-11 -translate-x-1/2 place-items-center rounded-full text-gold/70 transition-colors hover:text-gold"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </a>
    </section>
  )
}
