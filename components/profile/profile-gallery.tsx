import Image from 'next/image'
import { SectionHeading } from '@/components/ornament'
import { cn } from '@/lib/utils'
import type { MemberProfile } from '@/lib/members'

export function ProfileGallery({ member }: { member: MemberProfile }) {
  return (
    <section aria-labelledby="ky-uc-title" className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="ky-uc-title"
          eyebrow="Kỷ vật"
          title="Những tấm ảnh xưa"
          description="Thời gian làm phai màu giấy ảnh, nhưng không xóa được những khoảnh khắc đã thành ký ức của cả dòng họ."
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {member.gallery.map((photo, i) => (
            <li
              key={photo.src}
              className={cn(
                photo.orientation === 'portrait' && 'lg:row-span-2',
                i === member.gallery.length - 1 && 'sm:col-span-2',
              )}
            >
              <figure className="glow-border group flex h-full flex-col rounded-xl bg-card p-3 transition-all duration-500 hover:border-gold/50 hover:shadow-[0_0_60px_-14px_rgba(212,175,55,0.45)]">
                <div
                  className={cn(
                    'relative overflow-hidden rounded-lg',
                    photo.orientation === 'portrait' ? 'aspect-[3/4] lg:aspect-auto lg:flex-1' : 'aspect-[4/3]',
                    i === member.gallery.length - 1 && 'sm:aspect-[16/7]',
                  )}
                >
                  <Image
                    src={photo.src || '/placeholder.svg'}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover sepia-[0.25] transition-all duration-700 group-hover:scale-105 group-hover:sepia-0"
                  />
                  <div aria-hidden="true" className="absolute inset-2 rounded-md border border-gold/20" />
                </div>
                <figcaption className="flex items-baseline justify-between gap-4 px-2 pb-1 pt-4">
                  <span className="text-pretty font-serif text-lg leading-snug text-cream">{photo.caption}</span>
                  <span className="shrink-0 font-serif text-lg text-gold">{photo.year}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
