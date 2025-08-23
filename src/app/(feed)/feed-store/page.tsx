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
      
      {/* Shop Section */}
      <section id="shop" className="section bg-surface">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Shop Essentials</h2>
            <p className="text-lg text-muted">Popular categories curated for local needs</p>
          </div>
          {/* Expect categories from products data; "All" will be injected by CategoryFilter */}
          <CategoryFilter 
            categories={['Poultry', 'Livestock', 'Pet', 'Fencing', 'Tools', 'Garden']} 
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

      {/* CTA: Get Listed / Contact */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Want a site like this for your shop?</h2>
          <p className="text-lg text-muted mb-6 max-w-2xl mx-auto">
            We set up your site, Google Maps, hosting & monthly updates for <strong>$15/mo</strong>. No hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://cheaplocalwebsites.com" target="_blank" rel="noopener" className="btn-primary">
              Get Your $15 Website
            </a>
            <a href="/#contact" className="btn-secondary">
              Talk to Us
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
