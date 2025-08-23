'use client'

import { Camera, ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section">
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
              <Camera className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Capture Life's
            <span className="block text-accent">Precious Moments</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted mb-6 max-w-3xl mx-auto">
            Professional photography services for weddings, portraits, events, and more. 
            Creating timeless memories in Central Pennsylvania.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToServices}
              className="btn-primary text-base px-6 py-3"
            >
              View Services
            </button>
            
            <a 
              href="#contact" 
              className="btn-secondary text-base px-6 py-3"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={scrollToServices}
            className="inline-flex items-center text-muted hover:text-accent transition-colors"
          >
            <span className="text-sm font-medium">Explore My Work</span>
            <ChevronDown className="w-5 h-5 ml-2 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
