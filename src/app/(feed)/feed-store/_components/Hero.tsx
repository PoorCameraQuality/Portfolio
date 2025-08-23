'use client'

import { ChevronDown, Store, Truck, Package, Shield } from 'lucide-react'

export default function Hero() {
  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section grain-bg relative overflow-hidden">
      {/* Example Site Banner */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          🚧 EXAMPLE SITE - Portfolio Demo 🚧
        </div>
      </div>
      
      <div className="container text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
              <Store className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Farm & Feed Essentials
          </h1>
          
          <p className="text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto">
            Everyday supplies for poultry, livestock, pets, and the homestead—curated for local needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={scrollToShop}
              className="btn-primary text-lg px-8 py-4"
            >
              Shop Essentials
            </button>
            <a 
              href="/feed-store/about"
              className="btn-secondary text-lg px-8 py-4"
            >
              Learn About Us
            </a>
          </div>
        </div>
        
        {/* Feature Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
              <Truck className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted">Local Delivery</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
              <Package className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted">Quality Products</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted">Expert Advice</span>
          </div>
        </div>
        
        <div className="mt-8">
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
