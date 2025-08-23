'use client'

import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section grain-bg relative overflow-hidden">
      <div className="container text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Farm & Feed Essentials
          </h1>
          
          <p className="text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto">
            Everyday supplies for poultry, livestock, pets, and the homestead—curated for local needs.
          </p>
          
          <button 
            onClick={scrollToShop}
            className="btn-primary text-lg px-8 py-4"
          >
            Shop Essentials
          </button>
        </div>
        
        <div className="mt-16">
          <button 
            onClick={scrollToShop}
            className="flex items-center justify-center mx-auto text-muted hover:text-accent transition-colors"
          >
            <span className="text-sm font-medium">Browse Products</span>
            <ChevronDown className="w-5 h-5 ml-2 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
