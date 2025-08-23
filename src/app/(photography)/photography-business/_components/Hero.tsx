'use client'

import { Camera, ChevronDown, Award, Heart, Users } from 'lucide-react'

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section relative overflow-hidden min-h-[60vh] lg:min-h-[70vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>
      
      {/* Example Site Banner */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          📸 EXAMPLE SITE - Portfolio Demo 📸
        </div>
      </div>
      
      <div className="container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-accent rounded-full mb-4">
              <Camera className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Capture Life's
            <span className="block text-accent">Precious Moments</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-muted mb-6 max-w-3xl mx-auto">
            Professional photography services for weddings, portraits, events, and more. 
            Creating timeless memories in Central Pennsylvania.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 lg:mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-3xl mx-auto mb-8 lg:mb-12">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
              <Award className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted">15+ Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
              <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted">Authentic Moments</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
              <Users className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
            </div>
            <span className="text-sm font-medium text-muted">500+ Happy Clients</span>
          </div>
        </div>
        
        <div className="mt-6 lg:mt-8 text-center">
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
