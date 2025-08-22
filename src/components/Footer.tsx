'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: '🐙' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: '💼' },
  { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: '🐦' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-light/20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
                  <div className="text-text-primary text-lg">🦌</div>
                </div>
                <h3 className="text-2xl font-display font-bold text-text-primary">
                  BraxCraft
                </h3>
              </div>
              <p className="text-text-primary/80 mb-4 max-w-md">
                Affordable websites, built for local businesses — no gimmicks, no lock-in.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand" />
                <a
                  href="mailto:hello@braxcraft.com"
                  className="text-text-primary/80 hover:text-brand transition-colors"
                >
                  hello@braxcraft.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-brand" />
                <span className="text-text-primary/80">
                  Shippensburg, PA
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand" />
                <a
                  href="tel:+15551234567"
                  className="text-text-primary/80 hover:text-brand transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-primary/80 hover:text-brand transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary/80 hover:text-brand transition-colors inline-flex items-center space-x-2"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-surface-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-text-primary/60 text-sm">
              © 2024 BraxCraft. All rights reserved.
            </p>
            <p className="text-text-primary/60 text-sm">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
