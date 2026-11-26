'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/#to-tien', label: 'Tổ tiên' },
  { href: '/cay-gia-pha', label: 'Cây gia phả' },
  { href: '/#lich-su', label: 'Lịch sử dòng họ' },
  { href: '/#tu-duong', label: 'Từ đường' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled || open
          ? 'border-b border-gold/15 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav aria-label="Điều hướng chính" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20">
        <a href="/" className="flex min-h-11 items-center gap-3" aria-label="Gia Phả Họ Nguyễn Đình — Trang chủ">
          <span className="grid size-9 place-items-center rounded-full border border-gold/50 font-serif text-lg text-gold shadow-[0_0_18px_-4px_rgba(212,175,55,0.7)]">
            N
          </span>
          <span className="font-serif text-xl tracking-wide text-cream">Nguyễn Đình</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-cream/75 transition-colors hover:text-gold-soft"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/cay-gia-pha"
          className="hidden min-h-11 items-center rounded-full border border-gold/50 px-5 text-sm text-gold-soft transition-all hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_24px_-6px_rgba(212,175,55,0.8)] md:inline-flex"
        >
          Tra cứu gia phả
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full text-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-gold/10 px-5 pb-6 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-gold/10 font-serif text-xl text-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/cay-gia-pha"
            onClick={() => setOpen(false)}
            className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-gold text-sm font-medium text-primary-foreground"
          >
            Tra cứu gia phả
          </a>
        </div>
      ) : null}
    </header>
  )
}
