'use client'

import React from 'react'
import Hero from './_components/Hero'
import CategoryFilter from './_components/CategoryFilter'
import ProductGrid from './_components/ProductGrid'
import GoogleStyleReviews from './_components/GoogleStyleReviews'
import { products, categories } from './_data/products'
import { MapPin, Phone, Mail, Clock, Star, Quote, Users, Award, Truck } from 'lucide-react'

export default function FeedStoreHomePage() {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section id="shop" className="section bg-surface">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#004445]">Our Website Services</h2>
            <p className="text-lg text-[#2c786c]">Professional websites built for local businesses</p>
          </div>
          {/* Expect categories from products data; "All" will be injected by CategoryFilter */}
          <CategoryFilter 
            categories={['Web Services', 'Business Examples']} 
            onCategoryChange={(c) => {
              const event = new CustomEvent('feedstore:category', { detail: c })
              window.dispatchEvent(event)
            }} 
          />
          <div className="mt-8">
            {/* Listen for the simple custom event to swap category without lifting state too far */}
            <ProductsWithEvent />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <GoogleStyleReviews />

      {/* CTA: Get Your Website */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#004445]">Ready for your own website?</h2>
          <p className="text-lg text-[#2c786c] mb-6 max-w-2xl mx-auto">
            Get a professional website with Google Maps, hosting & monthly updates starting at <strong className="text-[#f8b400]">$15/mo</strong>. No hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get Free Consultation
            </a>
            <a href="/services" className="btn-secondary">
              View All Services
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// Lightweight event bridge so CategoryFilter can change ProductGrid
// without lifting state to a page-wide client wrapper.
function ProductsWithEvent() {
  const [selected, setSelected] = React.useState('All')
  React.useEffect(() => {
    const fn = (e: any) => setSelected(e.detail || 'All')
    window.addEventListener('feedstore:category', fn)
    return () => window.removeEventListener('feedstore:category', fn)
  }, [])
  return <ProductGrid category={selected} />
}
