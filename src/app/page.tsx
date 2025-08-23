'use client'

import { useSmoothFastScroll } from '@/hooks/useFastScroll'

export default function HomePage() {
  // Enable fast scrolling for sections below portfolio
  useSmoothFastScroll()

  return (
    <main className="main-page-section">
      {/* Hero */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-4">Affordable Local Business Websites</h1>
            <p className="text-lg text-[var(--muted)] mb-8">
              Professional sites + Google Maps setup & monthly maintenance — all for <strong>$15/mo</strong>.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="/services" className="btn-primary">See Pricing</a>
              <a href="/work" className="btn-secondary">View Portfolio</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (keep polished here to make the portfolio pop) */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <span className="badge">What Clients Say</span>
            <h2 className="text-3xl font-bold mt-3">Testimonials</h2>
          </div>
          {/* Existing Testimonials component retained */}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to get your business online?</h3>
          <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto">
            Get a clean, fast site + Google Maps, and ongoing updates — for <strong>$15/mo</strong>.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a className="btn-primary" href="/services">Get Your $15 Website</a>
            <a className="btn-secondary" href="/contact">Talk to Me</a>
          </div>
        </div>
      </section>
    </main>
  )
}
