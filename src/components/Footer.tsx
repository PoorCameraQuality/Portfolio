import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:hello@braxcraft.com',
      icon: Mail,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-bg-secondary">
      <div className="container">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
                  <span className="text-text-primary font-display font-bold text-lg">B</span>
                </div>
                <span className="text-text-primary font-display font-semibold text-xl">
                  Braxcraft
                </span>
              </Link>
              <p className="text-text-primary/80 text-body max-w-md mb-6">
                Creative developer and designer crafting digital experiences that inspire, 
                engage, and deliver results. Let's build something amazing together.
              </p>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center text-text-primary/80 hover:text-text-primary hover:bg-brand transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-text-primary font-display font-semibold text-lg mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-text-primary/80 hover:text-text-primary transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-text-primary font-display font-semibold text-lg mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <p className="text-text-primary/80 text-body">
                  Ready to start your next project?
                </p>
                <Link
                  href="/contact"
                  className="btn-primary inline-block"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-surface-light/20">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <p className="text-text-primary/60 text-sm">
                © {new Date().getFullYear()} Braxcraft. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-text-primary/60">
                <Link href="/privacy" className="hover:text-text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
