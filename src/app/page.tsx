'use client'

import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'
import WorkShowcase from '@/components/WorkShowcase'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import { useSmoothFastScroll } from '@/hooks/useFastScroll'

export default function HomePage() {
  // Enable fast scrolling for sections below portfolio
  useSmoothFastScroll()

  return (
    <main className="main-page-section">
      <Hero />
      <FeatureSection />
      <WorkShowcase />
      <div className="fast-scroll-section">
        <Testimonials />
      </div>
      <div className="fast-scroll-section">
        <CTASection />
      </div>
    </main>
  )
}
