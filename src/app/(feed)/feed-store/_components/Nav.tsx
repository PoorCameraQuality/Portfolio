'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, Store, Home, Info, Phone } from 'lucide-react'

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
      {/* Example Site Banner */}
      <div className="bg-accent text-white text-center py-2 text-sm font-medium">
        🚧 EXAMPLE SITE - Feed Store Demo for Portfolio 🚧
      </div>
      
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/feed-store" className="flex items-center text-2xl font-bold text-accent">
            <Store className="w-8 h-8 mr-2" />
            Feed Store
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
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
