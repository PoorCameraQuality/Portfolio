'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, Camera, Home, Info, Phone, Image, DollarSign, AlertTriangle } from 'lucide-react'

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    { name: 'Wedding Photography', href: '#services' },
    { name: 'Portrait Sessions', href: '#services' },
    { name: 'Event Photography', href: '#services' },
    { name: 'Commercial Work', href: '#services' },
  ]

  return (
    <nav className="bg-surface border-b border-border sticky top-0 z-50">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-3 text-sm font-semibold relative overflow-hidden">
        <div className="flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4 animate-pulse" />
          <span>📸 Demo by CheapLocalWebsites.com — $15/mo websites 📸</span>
          <AlertTriangle className="w-4 h-4 animate-pulse" />
        </div>
        <div className="absolute inset-0 bg-black/10" />
      </div>
      
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Example Site Indicator */}
          <Link href="/photography-business" className="flex items-center group">
            <div className="relative">
              <div className="flex items-center text-2xl font-bold text-accent">
                <Camera className="w-8 h-8 mr-2" />
                Capture Life
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <span className="ml-2 text-xs text-muted bg-muted/20 px-2 py-1 rounded-full">
              DEMO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/photography-business" className="flex items-center text-ink hover:text-accent transition-colors">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center text-ink hover:text-accent transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-surface border border-border rounded-lg shadow-lg py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-ink hover:bg-accent hover:text-white transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="#portfolio" className="flex items-center text-ink hover:text-accent transition-colors">
              <Image className="w-4 h-4 mr-1" />
              Portfolio
            </Link>
            
            <Link href="#pricing" className="flex items-center text-ink hover:text-accent transition-colors">
              <DollarSign className="w-4 h-4 mr-1" />
              Pricing
            </Link>
            
            <Link href="/photography-business/about" className="flex items-center text-ink hover:text-accent transition-colors">
              <Info className="w-4 h-4 mr-1" />
              About
            </Link>
            
            <Link href="#contact" className="flex items-center text-ink hover:text-accent transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              Contact
            </Link>
            
            <a 
              href="https://cheaplocalwebsites.com"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              Get Your $15 Website
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ink hover:text-accent transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/photography-business" 
                className="flex items-center text-ink hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
              
              <div>
                <div className="text-ink font-medium mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-ink hover:text-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                href="#portfolio" 
                className="flex items-center text-ink hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image className="w-4 h-4 mr-2" />
                Portfolio
              </Link>
              
              <Link 
                href="#pricing" 
                className="flex items-center text-ink hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <DollarSign className="w-4 h-4 mr-2" />
                Pricing
              </Link>
              
              <Link 
                href="/photography-business/about" 
                className="flex items-center text-ink hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Info className="w-4 h-4 mr-2" />
                About
              </Link>
              
              <Link 
                href="#contact" 
                className="flex items-center text-ink hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Link>
              
              <div className="pt-2 border-t border-border">
                <a 
                  href="https://cheaplocalwebsites.com"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-2 bg-accent text-white px-4 py-2 rounded-full font-medium hover:bg-accent/90 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Your $15 Website
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
