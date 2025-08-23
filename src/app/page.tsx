'use client'

import { useSmoothFastScroll } from '@/hooks/useFastScroll'

export default function HomePage() {
  // Enable fast scrolling for sections below portfolio
  useSmoothFastScroll()

  return (
    <main className="main-page-section" style={{ backgroundColor: '#d3d6db' }}>
      {/* Hero */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-4" style={{ color: '#303841' }}>Affordable Local Business Websites</h1>
            <p className="text-lg mb-8" style={{ color: '#3a4750' }}>
              Professional sites + Google Maps setup & monthly maintenance — all for <strong>$15/mo</strong>.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="/services" className="px-6 py-3 rounded-full font-bold text-white transition-all duration-200 inline-flex items-center gap-2 hover:bg-[#a02838]" style={{ backgroundColor: '#be3144' }}>See Pricing</a>
              <a href="/work" className="px-6 py-3 rounded-full font-semibold transition-all duration-200 inline-flex items-center gap-2 border hover:bg-[rgba(58,71,80,0.1)]" style={{ backgroundColor: 'transparent', color: '#303841', borderColor: '#3a4750' }}>View Portfolio</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (keep polished here to make the portfolio pop) */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <span className="px-4 py-2 rounded-full text-sm border inline-flex items-center" style={{ backgroundColor: '#f8f9fa', color: '#3a4750', borderColor: '#3a4750' }}>What Clients Say</span>
            <h2 className="text-3xl font-bold mt-3" style={{ color: '#303841' }}>Testimonials</h2>
          </div>
          {/* Existing Testimonials component retained */}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#303841' }}>Ready to get your business online?</h3>
          <p className="mb-6 max-w-2xl mx-auto" style={{ color: '#3a4750' }}>
            Get a clean, fast site + Google Maps, and ongoing updates — for <strong>$15/mo</strong>.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a className="px-6 py-3 rounded-full font-bold text-white transition-all duration-200 inline-flex items-center gap-2 hover:bg-[#a02838]" href="/services" style={{ backgroundColor: '#be3144' }}>Get Your $15 Website</a>
            <a className="px-6 py-3 rounded-full font-semibold transition-all duration-200 inline-flex items-center gap-2 border hover:bg-[rgba(58,71,80,0.1)]" href="/contact" style={{ backgroundColor: 'transparent', color: '#303841', borderColor: '#3a4750' }}>Talk to Me</a>
          </div>
        </div>
      </section>
    </main>
  )
}
