import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProfileHero } from '@/components/profile/profile-hero'
import { ProfileBiography } from '@/components/profile/profile-biography'
import { ProfileRelationships } from '@/components/profile/profile-relationships'
import { ProfileGallery } from '@/components/profile/profile-gallery'
import { getMember, members } from '@/lib/members'

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const member = getMember(slug)
  if (!member) return {}
  return {
    title: `${member.name} (${member.born} – ${member.died}) — Gia Phả Họ Nguyễn Đình`,
    description: `${member.honorific} ${member.name}, ${member.generation}. ${member.epitaph}`,
  }
}

export default async function MemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = getMember(slug)
  if (!member) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <ProfileHero member={member} />
        <ProfileBiography member={member} />
        <ProfileRelationships member={member} />
        <ProfileGallery member={member} />
      </main>
      <SiteFooter />
    </>
  )
}
