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
        backgroundColor: scrolled ? 'rgba(211, 214, 219, 0.95)' : 'transparent',
        boxShadow: scrolled ? '0 12px 28px rgba(58, 71, 80, 0.15)' : 'none'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#be3144' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-display font-bold text-sm">B</span>
            </motion.div>
            <span className="font-display font-semibold text-lg" style={{ color: '#303841' }}>
              Braxcraft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors duration-200 font-medium hover:text-[#be3144]"
                style={{ color: '#3a4750' }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full font-bold text-white transition-all duration-200 inline-flex items-center gap-2 hover:bg-[#a02838]"
              style={{ backgroundColor: '#be3144' }}
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 transition-colors"
            style={{ color: '#303841' }}
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
              style={{ backgroundColor: 'rgba(211, 214, 219, 0.95)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              className="absolute right-0 top-0 h-full w-80 shadow-large"
              style={{ backgroundColor: '#f8f9fa' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'rgba(58, 71, 80, 0.2)' }}>
                  <span className="font-display font-semibold text-lg" style={{ color: '#303841' }}>
                    Menu
                  </span>
                  <button
                    type="button"
                    className="p-2 transition-colors"
                    style={{ color: '#303841' }}
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
                        className="transition-colors duration-200 font-medium text-lg hover:text-[#be3144]"
                        style={{ color: '#3a4750' }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-6 border-t" style={{ borderColor: 'rgba(58, 71, 80, 0.2)' }}>
                  <Link
                    href="/contact"
                    className="w-full justify-center px-6 py-3 rounded-full font-bold text-white transition-all duration-200 inline-flex items-center gap-2 hover:bg-[#a02838]"
                    style={{ backgroundColor: '#be3144' }}
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
