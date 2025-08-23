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
    <footer style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid rgba(58, 71, 80, 0.2)' }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#be3144' }}>
                  <div className="text-white text-lg">🦌</div>
                </div>
                <h3 className="text-2xl font-display font-bold" style={{ color: '#303841' }}>
                  BraxCraft
                </h3>
              </div>
              <p className="mb-4 max-w-md" style={{ color: '#3a4750' }}>
                Affordable websites, built for local businesses — no gimmicks, no lock-in.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" style={{ color: '#be3144' }} />
                <a
                  href="mailto:hello@braxcraft.com"
                  className="transition-colors hover:text-[#be3144]"
                  style={{ color: '#3a4750' }}
                >
                  hello@braxcraft.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" style={{ color: '#be3144' }} />
                <span style={{ color: '#3a4750' }}>
                  Shippensburg, PA
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" style={{ color: '#be3144' }} />
                <a
                  href="tel:+15551234567"
                  className="transition-colors hover:text-[#be3144]"
                  style={{ color: '#3a4750' }}
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#303841' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#be3144]"
                    style={{ color: '#3a4750' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#303841' }}>
              Connect
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors inline-flex items-center space-x-2 hover:text-[#be3144]"
                    style={{ color: '#3a4750' }}
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
        <div className="border-t mt-12 pt-8" style={{ borderColor: 'rgba(58, 71, 80, 0.2)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm" style={{ color: 'rgba(48, 56, 65, 0.6)' }}>
              © 2024 BraxCraft. All rights reserved.
            </p>
            <p className="text-sm" style={{ color: 'rgba(48, 56, 65, 0.6)' }}>
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
