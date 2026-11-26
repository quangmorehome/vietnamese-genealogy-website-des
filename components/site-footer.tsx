import { Ornament } from '@/components/ornament'

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/15 px-5 pb-10 pt-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-serif text-3xl text-cream">
          Họ <span className="text-gold-gradient">Nguyễn Đình</span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Làng Phú Khê · Thanh Liêm · Hà Nam</p>
        <Ornament className="mt-8" />
        <nav aria-label="Liên kết chân trang" className="mt-8">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-cream/70">
            {[
              ['#to-tien', 'Tổ tiên'],
              ['#cay-gia-pha', 'Cây gia phả'],
              ['#lich-su', 'Lịch sử'],
              ['#tu-duong', 'Từ đường'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="inline-flex min-h-11 items-center hover:text-gold-soft">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-8 text-xs text-muted-foreground">
          © 2026 Hội đồng gia tộc họ Nguyễn Đình. Kính cẩn lưu giữ cho muôn đời con cháu.
        </p>
      </div>
    </footer>
  )
}
