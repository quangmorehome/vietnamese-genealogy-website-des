import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AncestorsSection } from '@/components/ancestors-section'
import { FamilyTreePreview } from '@/components/family-tree-preview'
import { HeritageTimeline } from '@/components/heritage-timeline'
import { AncestralHall } from '@/components/ancestral-hall'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AncestorsSection />
        <FamilyTreePreview />
        <HeritageTimeline />
        <AncestralHall />
      </main>
      <SiteFooter />
    </>
  )
}
