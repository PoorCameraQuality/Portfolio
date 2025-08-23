'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, Store, Home, Info, Phone, AlertTriangle, Sparkles } from 'lucide-react'

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)

  return (
    <nav className="bg-surface border-b border-[#2c786c] sticky top-0 z-50">
      {/* Example Site Banner - Rebranded */}
      <div className="bg-gradient-to-r from-[#f8b400] to-[#f8b400]/80 text-white text-center py-3 text-sm font-semibold relative overflow-hidden">
        <div className="flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4 animate-pulse" />
          <span>Example Site by CheapLocalWebsites.com — $15/mo, we do everything.</span>
          <AlertTriangle className="w-4 h-4 animate-pulse" />
        </div>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Example Site Indicator */}
          <Link href="/feed-store" className="flex items-center group">
            <div className="relative">
              <div className="flex items-center text-2xl font-bold text-[#f8b400]">
                <Store className="w-8 h-8 mr-2" />
                Feed Store
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#f8b400] rounded-full animate-pulse" />
            </div>
            <span className="ml-2 text-xs text-[#2c786c] bg-[#2c786c]/20 px-2 py-1 rounded-full">DEMO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/feed-store" className="text-[#004445] hover:text-[#f8b400] transition-colors">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="flex items-center text-[#004445] hover:text-[#f8b400] transition-colors"
              >
                Categories
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {categoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-surface border border-[#2c786c] rounded-md shadow-lg py-2 z-50">
                  <Link href="/feed-store?category=chicken" className="block px-4 py-2 text-sm text-[#004445] hover:bg-[#faf5e4]">
                    Chicken Feed
                  </Link>
                  <Link href="/feed-store?category=cattle" className="block px-4 py-2 text-sm text-[#004445] hover:bg-[#faf5e4]">
                    Cattle Feed
                  </Link>
                  <Link href="/feed-store?category=pig" className="block px-4 py-2 text-sm text-[#004445] hover:bg-[#faf5e4]">
                    Pig Feed
                  </Link>
                  <Link href="/feed-store?category=horse" className="block px-4 py-2 text-sm text-[#004445] hover:bg-[#faf5e4]">
                    Horse Feed
                  </Link>
                </div>
              )}
            </div>
            <Link href="/feed-store/about" className="text-[#004445] hover:text-[#f8b400] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-[#004445] hover:text-[#f8b400] transition-colors">
              Contact
            </Link>
            {/* CTA to your main brand */}
            <a 
              href="https://cheaplocalwebsites.com" 
              target="_blank" 
              rel="noopener"
              className="flex items-center gap-2 text-white bg-[#f8b400] hover:bg-[#f8b400]/90 transition-colors font-medium px-4 py-2 rounded-full"
              aria-label="Get a $15 website at CheapLocalWebsites.com"
            >
              <Sparkles className="w-4 h-4" />
              Get Your $15 Website
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#004445] hover:text-[#f8b400] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/feed-store"
                className="block px-3 py-2 text-base font-medium text-[#004445] hover:text-[#f8b400] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/feed-store/about"
                className="block px-3 py-2 text-base font-medium text-[#004445] hover:text-[#f8b400] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-[#004445] hover:text-[#f8b400] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            <div className="pt-2 border-t border-[#2c786c]">
              <a 
                href="https://cheaplocalwebsites.com"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 text-white bg-[#f8b400] hover:bg-[#f8b400]/90 transition-colors font-medium px-4 py-2 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Sparkles className="w-4 h-4" />
                Get Your $15 Website
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
