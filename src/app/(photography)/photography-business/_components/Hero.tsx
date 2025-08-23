'use client'

import { Camera, ChevronDown, Award, Heart, Users } from 'lucide-react'

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section">
      {/* Example Site Banner */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          📸 EXAMPLE SITE - Portfolio Demo 📸
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-4">
              <Camera className="w-10 h-10 text-white" />
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={scrollToServices}
              className="btn-primary text-base px-6 py-3"
            >
              View Services
            </button>
            
            <a 
              href="/photography-business/about"
              className="btn-secondary text-base px-6 py-3"
            >
              About Me
            </a>
            
            <a 
              href="#contact" 
              className="btn-secondary text-base px-6 py-3"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        {/* Feature Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted">15+ Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted">Authentic Moments</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted">500+ Happy Clients</span>
          </div>
        </div>
        
        <div className="mt-8 text-center">
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
