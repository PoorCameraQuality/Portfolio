'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, Store, Home, Info, Phone, AlertTriangle } from 'lucide-react'

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)

  const categories = [
    { name: 'Poultry', href: '/feed-store#shop' },
    { name: 'Livestock', href: '/feed-store#shop' },
    { name: 'Pet', href: '/feed-store#shop' },
    { name: 'Fencing', href: '/feed-store#shop' },
    { name: 'Tools', href: '/feed-store#shop' },
    { name: 'Garden', href: '/feed-store#shop' },
  ]

  return (
    <nav className="bg-surface border-b border-border sticky top-0 z-50">
      {/* Enhanced Example Site Banner */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-center py-3 text-sm font-bold relative overflow-hidden">
        <div className="flex items-center justify-center space-x-2">
          <AlertTriangle className="w-4 h-4 animate-pulse" />
          <span>🚧 EXAMPLE SITE - Feed Store Demo for Portfolio 🚧</span>
          <AlertTriangle className="w-4 h-4 animate-pulse" />
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Example Site Indicator */}
          <Link href="/feed-store" className="flex items-center group">
            <div className="relative">
              <div className="flex items-center text-2xl font-bold text-accent">
                <Store className="w-8 h-8 mr-2" />
                Feed Store
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            </div>
            <span className="ml-2 text-xs text-muted bg-muted/20 px-2 py-1 rounded-full">
              DEMO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/feed-store" className="flex items-center text-ink hover:text-accent transition-colors">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="flex items-center text-ink hover:text-accent transition-colors"
              >
                Categories
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {categoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-surface border border-border rounded-lg shadow-lg py-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-2 text-ink hover:bg-accent hover:text-white transition-colors"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/feed-store/about" className="flex items-center text-ink hover:text-accent transition-colors">
              <Info className="w-4 h-4 mr-1" />
              About
            </Link>
            
            <Link href="/feed-store#contact" className="flex items-center text-ink hover:text-accent transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              Contact
            </Link>
            
            {/* Portfolio Link */}
            <Link 
              href="/" 
              className="flex items-center text-yellow-600 hover:text-yellow-500 transition-colors font-medium"
            >
              ← Back to Portfolio
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
                href="/feed-store" 
                className="flex items-center text-ink hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
              
              <div>
                <div className="text-ink font-medium mb-2">Categories</div>
                <div className="pl-4 space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block text-ink hover:text-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                href="/feed-store/about" 
                className="flex items-center text-ink hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Info className="w-4 h-4 mr-2" />
                About
              </Link>
              
              <Link 
                href="/feed-store#contact" 
                className="flex items-center text-ink hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Link>
              
              <div className="pt-2 border-t border-border">
                <Link 
                  href="/" 
                  className="flex items-center text-yellow-600 hover:text-yellow-500 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ← Back to Portfolio
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
