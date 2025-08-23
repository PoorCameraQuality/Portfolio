'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, Camera, Home, Info, Phone, Image, DollarSign } from 'lucide-react'

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
      {/* Example Site Banner */}
      <div className="bg-accent text-white text-center py-2 text-sm font-medium">
        📸 EXAMPLE SITE - Photography Business Demo for Portfolio 📸
      </div>
      
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/photography-business" className="flex items-center text-2xl font-bold text-accent">
            <Camera className="w-8 h-8 mr-2" />
            Capture Life
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
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
