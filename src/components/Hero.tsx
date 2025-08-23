'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 50)
    return () => clearInterval(interval)
  }, [])

  const skills = [
    {
      icon: '💻',
      title: 'Modern Web Tech',
      description: 'Built with Next.js, React, and Tailwind CSS for fast, responsive websites'
    },
    {
      icon: '🎨',
      title: 'Professional Design',
      description: 'Clean, modern designs that reflect your brand and convert visitors'
    },
    {
      icon: '📱',
      title: 'Mobile-First',
      description: 'Every site works perfectly on phones, tablets, and desktops'
    },
    {
      icon: '🔍',
      title: 'SEO Optimized',
      description: 'Built to rank well in Google and attract local customers'
    },
    {
      icon: '⚡',
      title: 'Fast Performance',
      description: 'Lightning-fast loading times for better user experience'
    },
    {
      icon: '🛡️',
      title: 'Secure & Reliable',
      description: 'Professional hosting with security and uptime guarantees'
    },
    {
      icon: '🚀',
      title: 'Custom Solutions',
      description: 'Tailored features and functionality for your specific business needs'
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      description: 'Track performance and understand your customers better'
    },
    {
      icon: '🔄',
      title: 'Easy Updates',
      description: 'Simple content management system for ongoing maintenance'
    },
    {
      icon: '💼',
      title: 'Business Focused',
      description: 'Designed to generate leads and grow your local business'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(193,18,31,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(18,32,40,0.1),transparent_50%)]" />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-brand/10 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-barn-red/10 rounded-full blur-3xl"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-surface/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-brand" />
            <span className="text-text-primary/80 text-sm font-medium">
              Local Business Websites
            </span>
          </motion.div>
        </motion.div>

        <motion.h1
          className="display text-text-primary mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Affordable Websites for{' '}
          <span className="gradient-text">Local Businesses</span>
        </motion.h1>

        <motion.p
          className="lead text-text-primary/80 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          For just $50 upfront and $15/month hosting, I'll build your business a professional website 
          that looks great, shows up on Google, and helps you attract more customers.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link href="/work" className="btn-primary group">
            View Example Sites
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Book a Free Consultation
          </Link>
        </motion.div>

        {/* Auto-scrolling Skills Showcase */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-text-primary/80 mb-2">
              What I Bring to Your Business
            </h3>
            <p className="text-text-primary/60 text-sm">
              Professional web development skills tailored for local businesses
            </p>
          </div>
          
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 pb-4 overflow-hidden"
              style={{ scrollBehavior: 'smooth' }}
            >
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-80 bg-surface/50 backdrop-blur-sm rounded-2xl p-6 border border-surface-light/20 hover:border-brand/30 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-text-primary/70 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
              {/* Duplicate first few items for seamless loop */}
              {skills.slice(0, 3).map((skill, index) => (
                <div 
                  key={`duplicate-${index}`} 
                  className="flex-shrink-0 w-80 bg-surface/50 backdrop-blur-sm rounded-2xl p-6 border border-surface-light/20 hover:border-brand/30 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-text-primary/70 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Gradient fade indicators */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Mini-features */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {[
            { number: 'Show up on', label: 'Google' },
            { number: 'Mobile-First', label: 'Design' },
            { number: 'Flat Monthly', label: 'Fee' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-display font-bold text-brand mb-2">
                {stat.number}
              </div>
              <div className="text-text-primary/60 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-text-primary/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-text-primary/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
