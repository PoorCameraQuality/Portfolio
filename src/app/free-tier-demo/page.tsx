'use client'

import { motion } from 'framer-motion'
import { Check, MapPin, Clock, Phone, Mail, Globe, Smartphone, Star, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const features = [
  '1-page scrolling site',
  'Business basics (logo, name, hours)',
  'Contact info + Google Maps',
  'Mobile-ready design',
  'Basic SEO setup',
  'Subdomain hosting',
  'Footer credit',
]

const businessInfo = {
  name: 'Sample Business',
  tagline: 'Your Local Service Provider',
  description: 'This is a demonstration of what your free tier website would look like. It includes all the essential elements to get your business online quickly and professionally.',
  hours: 'Mon-Fri: 9AM-6PM | Sat: 10AM-4PM | Sun: Closed',
  phone: '(555) 123-4567',
  email: 'info@samplebusiness.com',
  address: '123 Main Street, Anytown, ST 12345',
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function FreeTierDemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-bg via-bg-secondary to-bg-tertiary">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card bg-surface/30 backdrop-blur-md border border-surface-light/10 shadow-large">
              <div className="inline-flex items-center px-4 py-2 bg-brand/20 text-brand rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Free Tier Demo
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-text-primary mb-6 leading-tight">
                {businessInfo.name}
              </h1>
              <p className="text-xl lg:text-2xl text-text-primary/80 mb-8 leading-relaxed">
                {businessInfo.tagline}
              </p>
              <p className="text-lg text-text-primary/70 max-w-3xl mx-auto leading-relaxed">
                {businessInfo.description}
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Background decorative elements with subtle darkening */}
        <div className="absolute inset-0 overflow-hidden bg-bg/20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Business Info Section */}
      <section className="py-20 bg-surface/50 relative">
        <div className="absolute inset-0 bg-bg/10"></div>
        <div className="container relative z-10">
          <div className="card bg-surface/40 backdrop-blur-md border border-surface-light/10 shadow-large">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-8">
                  About Our Business
                </h2>
                <p className="text-lg text-text-primary/80 mb-8 leading-relaxed">
                  This demo showcases a professional business website that includes all the essential elements 
                  your customers need to find and contact you. It's mobile-friendly, SEO-optimized, and 
                  designed to convert visitors into customers.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand rounded-full"></div>
                    <span className="text-text-primary/80">Professional appearance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand rounded-full"></div>
                    <span className="text-text-primary/80">Mobile-first design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand rounded-full"></div>
                    <span className="text-text-primary/80">Easy to navigate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand rounded-full"></div>
                    <span className="text-text-primary/80">Contact information prominent</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="card bg-surface/90 backdrop-blur-sm border border-surface-light/20 shadow-medium">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">Business Hours</h3>
                      <p className="text-text-primary/80">{businessInfo.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="card bg-surface/90 backdrop-blur-sm border border-surface-light/20 shadow-medium">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">Phone</h3>
                      <p className="text-text-primary/80">{businessInfo.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="card bg-surface/90 backdrop-blur-sm border border-surface-light/20 shadow-medium">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">Email</h3>
                      <p className="text-text-primary/80">{businessInfo.email}</p>
                    </div>
                  </div>
                </div>

                <div className="card bg-surface/90 backdrop-blur-sm border border-surface-light/20 shadow-medium">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">Address</h3>
                      <p className="text-text-primary/80">{businessInfo.address}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bg relative">
        <div className="absolute inset-0 bg-bg-secondary/20"></div>
        <div className="container relative z-10">
          <div className="card bg-surface/30 backdrop-blur-md border border-surface-light/10 shadow-large">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-6">
                What's Included in Your Free Site
              </h2>
              <p className="text-lg text-text-primary/80 max-w-2xl mx-auto">
                Every free tier website includes these essential features to get your business online quickly.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card bg-surface/90 backdrop-blur-sm border border-surface-light/20 shadow-medium hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-accent rounded-xl flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{feature}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Notice */}
      <section className="py-20 bg-surface/50 relative">
        <div className="absolute inset-0 bg-bg/15"></div>
        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card bg-surface/90 backdrop-blur-md border-2 border-brand/30 shadow-large">
              <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-brand" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-text-primary mb-4">
                This is a Demo Site
              </h2>
              <p className="text-lg text-text-primary/80 mb-8 leading-relaxed">
                This page demonstrates exactly what your free tier website would look like. 
                It's fully responsive, SEO-optimized, and includes all the essential business information 
                your customers need to find and contact you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card bg-surface/60 backdrop-blur-sm border border-surface-light/20 text-left">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">What You Get:</h3>
                  <ul className="space-y-2 text-text-primary/80">
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-brand" />
                      <span>Professional design</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-brand" />
                      <span>Mobile-friendly layout</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-brand" />
                      <span>Contact information</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-brand" />
                      <span>Business hours</span>
                    </li>
                  </ul>
                </div>
                
                <div className="card bg-surface/60 backdrop-blur-sm border border-surface-light/20 text-left">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">Technical Features:</h3>
                  <ul className="space-y-2 text-text-primary/80">
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-brand" />
                      <span>SEO optimized</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-brand" />
                      <span>Fast loading</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-brand" />
                      <span>Google Maps integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-brand" />
                      <span>Subdomain hosting</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Get Your Free Site
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  View All Packages
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg relative">
        <div className="absolute inset-0 bg-bg-tertiary/10"></div>
        <div className="container relative z-10">
          <div className="card bg-surface/40 backdrop-blur-md border border-surface-light/10 shadow-large">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-6">
                Ready to Get Your Business Online?
              </h2>
              <p className="text-lg text-text-primary/80 mb-8 leading-relaxed">
                Your free tier website is just a consultation away. Get started today and have your 
                professional business website up and running in no time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  Start Your Free Site
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="btn-ghost text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  View Pricing
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
