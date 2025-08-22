import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'
import WorkShowcase from '@/components/WorkShowcase'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureSection />
      <WorkShowcase />
      <Testimonials />
      <CTASection />
    </main>
  )
}
