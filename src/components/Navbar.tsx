'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'Free Tier Demo', href: '/free-tier-demo' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'backdrop-blur-md shadow-medium' 
          : 'bg-transparent'
      )}
      style={{
        backgroundColor: scrolled ? 'rgba(246, 243, 238, 0.95)' : 'transparent',
        boxShadow: scrolled ? '0 6px 18px rgba(20,20,20,.08)' : 'none'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="flex items-center justify-center h-20 lg:h-24">
          {/* Logo - Centered */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: 'var(--sage)' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-lg">B</span>
            </motion.div>
            <span className="font-bold text-xl" style={{ color: 'var(--ink)' }}>
              Braxcraft
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-8 ml-16">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors duration-200 font-medium hover:text-[var(--sage)]"
                style={{ color: 'var(--muted)' }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Right side */}
          <div className="hidden lg:block absolute right-6">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full font-bold text-white transition-all duration-200 inline-flex items-center gap-2 hover:bg-[var(--forest)]"
              style={{ backgroundColor: 'var(--sage)' }}
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden absolute right-6 p-2 transition-colors"
            style={{ color: 'var(--ink)' }}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 backdrop-blur-md"
              style={{ backgroundColor: 'rgba(246, 243, 238, 0.95)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              className="absolute right-0 top-0 h-full w-80 shadow-large"
              style={{ backgroundColor: 'var(--paper)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--border)' }}>
                  <span className="font-bold text-lg" style={{ color: 'var(--ink)' }}>
                    Menu
                  </span>
                  <button
                    type="button"
                    className="p-2 transition-colors"
                    style={{ color: 'var(--ink)' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 p-6">
                  <div className="flex flex-col space-y-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="transition-colors duration-200 font-medium text-lg hover:text-[var(--sage)]"
                        style={{ color: 'var(--muted)' }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-6 border-t" style={{ borderColor: 'var(--border)' }}>
                  <Link
                    href="/contact"
                    className="w-full justify-center px-6 py-3 rounded-full font-bold text-white transition-all duration-200 inline-flex items-center gap-2 hover:bg-[var(--forest)]"
                    style={{ backgroundColor: 'var(--sage)' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
