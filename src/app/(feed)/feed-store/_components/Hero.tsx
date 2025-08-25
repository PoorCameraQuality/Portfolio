'use client'

import { ChevronDown, Store, Truck, Package, Shield } from 'lucide-react'

export default function Hero() {
  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-[#faf5e4] to-[#f8b400]/20 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004445' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Example Site Banner - Rebranded */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-[#f8b400] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          Demo Site by Braxcraft Web Design
        </div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Store className="w-12 h-12 text-[#2c786c] mr-3" />
            <span className="text-xl text-[#2c786c] font-semibold">Web Services Showcase</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 text-[#004445]">
            Local Business Website Services
          </h1>
          
          <p className="text-xl lg:text-2xl text-[#2c786c] mb-8 lg:mb-10 max-w-3xl mx-auto">
            See examples of our website services and pricing. From basic business sites to premium packages 
            with e-commerce and booking systems. Built for local businesses like yours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 lg:mb-8">
            <button 
              onClick={scrollToShop}
              className="btn-primary text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
            >
              View Services
            </button>
            <a 
              href="/contact"
              className="btn-secondary text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
            >
              Get Quote
            </a>
          </div>
          
          <div className="text-sm text-[#2c786c]">
            Want a website like this for your business? <a href="/contact" className="text-[#f8b400] underline">Get a free consultation</a>.
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 lg:mt-20">
          <div className="text-center">
            <div className="bg-[#f8b400] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[#004445]">Fast Setup</h3>
            <p className="text-[#2c786c]">Get your website online in days, not weeks</p>
          </div>
          
          <div className="text-center">
            <div className="bg-[#2c786c] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[#004445]">Local Focus</h3>
            <p className="text-[#2c786c]">Built specifically for local business needs</p>
          </div>
          
          <div className="text-center">
            <div className="bg-[#f8b400] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[#004445]">Ongoing Support</h3>
            <p className="text-[#2c786c]">We maintain and update your site for you</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToShop}
            className="flex items-center justify-center mx-auto text-[#2c786c] hover:text-[#f8b400] transition-colors"
          >
            <span className="mr-2">Explore Our Services</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
