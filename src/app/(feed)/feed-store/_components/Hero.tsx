'use client'

import { ChevronDown, Store, Truck, Package, Shield } from 'lucide-react'

export default function Hero() {
  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Example Site Banner - Rebranded */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          Example Site by CheapLocalWebsites.com
        </div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Store className="w-12 h-12 text-green-600 mr-3" />
            <span className="text-xl text-green-600 font-semibold">Premium Quality Feed</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
            Farm & Feed Essentials (Demo)
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted mb-8 lg:mb-10 max-w-3xl mx-auto">
            Your trusted source for premium animal feed, farm supplies, and expert advice. 
            Quality products delivered to your farm with care and reliability.
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
          
          <div className="text-sm text-muted">
            Want a site like this for your shop? <a href="https://cheaplocalwebsites.com" target="_blank" rel="noopener" className="text-accent underline">Get yours for $15/mo</a>.
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 lg:mt-20">
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Truck className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-muted">Same-day delivery available for local orders</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Package className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
            <p className="text-muted">Premium products from trusted manufacturers</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
            <p className="text-muted">Professional advice for all your farming needs</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToShop}
            className="flex items-center justify-center mx-auto text-muted hover:text-accent transition-colors"
          >
            <span className="mr-2">Explore Our Products</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
