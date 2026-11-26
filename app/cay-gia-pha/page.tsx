import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Ornament } from '@/components/ornament'
import { GoldParticles } from '@/components/gold-particles'
import { TreeExplorer } from '@/components/tree/tree-explorer'

export const metadata: Metadata = {
  title: 'Cây Gia Phả — Họ Nguyễn Đình',
  description: 'Sơ đồ phả hệ bốn thế hệ họ Nguyễn Đình làng Phú Khê: tra cứu thành viên, lọc theo đời và xem hồ sơ từng người.',
}

export default function FamilyTreePage() {
  return (
    <>
      <SiteHeader />
      <main className="relative pb-24">
        <header className="relative overflow-hidden px-5 pt-32 pb-12 text-center sm:pt-40 sm:pb-16">
          <span aria-hidden="true" className="pointer-events-none absolute top-0 left-1/2 h-80 w-[48rem] max-w-full -translate-x-1/2 rounded-full bg-burgundy/50 blur-3xl" />
          <GoldParticles count={24} />
          <div className="relative">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold/80">Phả hệ dòng họ</p>
            <h1 className="mt-4 text-balance font-serif text-5xl font-medium leading-tight text-gold-gradient sm:text-6xl">
              Cây Gia Phả
            </h1>
            <Ornament className="mt-6" />
            <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Mỗi cái tên là một chiếc lá, mỗi thế hệ là một tầng cành — cùng chung một cội rễ từ đất Phú Khê.
            </p>
          </div>
        </header>
        <TreeExplorer />
      </main>
      <SiteFooter />
    </>
  )
}
