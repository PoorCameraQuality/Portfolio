'use client'

import { ChevronDown, Store, Truck, Package, Shield } from 'lucide-react'

export default function Hero() {
  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section grain-bg relative overflow-hidden min-h-[60vh] lg:min-h-[70vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c1121f' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>
      
      {/* Example Site Banner */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          🚧 EXAMPLE SITE - Portfolio Demo 🚧
        </div>
      </div>
      
      <div className="container text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-accent rounded-full flex items-center justify-center">
              <Store className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
            Farm & Feed Essentials
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted mb-6 lg:mb-8 max-w-3xl mx-auto">
            Everyday supplies for poultry, livestock, pets, and the homestead—curated for local needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 lg:mb-8">
            <button 
              onClick={scrollToShop}
              className="btn-primary text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
            >
              Shop Essentials
            </button>
            <a 
              href="/feed-store/about"
              className="btn-secondary text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
            >
              Learn About Us
            </a>
          </div>
        </div>
        
        {/* Feature Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-3xl mx-auto mb-8 lg:mb-12">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
              <Truck className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted">Local Delivery</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
              <Package className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted">Quality Products</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
              <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted">Expert Advice</span>
          </div>
        </div>
        
        <div className="mt-6 lg:mt-8">
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
