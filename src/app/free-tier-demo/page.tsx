'use client'

import { motion } from 'framer-motion'
import { Check, MapPin, Clock, Phone, Mail, Globe, Star, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const businessInfo = {
  name: 'Sample Business',
  tagline: 'Your Local Service Provider',
  description: 'This is exactly what your free tier website will look like - a simple, professional 1-page site that gets your business online quickly.',
  hours: 'Mon-Fri: 9AM-6PM | Sat: 10AM-4PM | Sun: Closed',
  phone: '(555) 123-4567',
  email: 'info@samplebusiness.com',
  address: '123 Main Street, Anytown, ST 12345',
}

const freeTierFeatures = [
  '1-page scrolling site',
  'Business basics (logo, name, hours)',
  'Contact info + Google Maps',
  'Mobile-ready design',
  'Basic SEO setup',
  'Subdomain hosting',
  'Footer credit',
]

export default function FreeTierDemoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Simple and Clean */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Free Tier Demo
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {businessInfo.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {businessInfo.tagline}
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                {businessInfo.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Info Section - Simple Cards */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About Our Business
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                This demo shows exactly what your free tier website will include - all the essential information your customers need to find and contact you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">{businessInfo.hours}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">{businessInfo.phone}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">{businessInfo.email}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">{businessInfo.address}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What's Included in Your Free Site
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every free tier website includes these essential features to get your business online quickly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {freeTierFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                >
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Notice - Simple and Clear */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                This is Your Free Tier Website
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                This page demonstrates exactly what your free tier website will look like. 
                It's simple, professional, and includes everything your customers need to find and contact you.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">What You Get:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-blue-600" />
                        <span>Professional design</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-blue-600" />
                        <span>Mobile-friendly layout</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-blue-600" />
                        <span>Contact information</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-blue-600" />
                        <span>Business hours</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-blue-600" />
                        <span>Google Maps integration</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-blue-600" />
                        <span>SEO optimized</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors"
                >
                  Get Your Free Site
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors"
                >
                  View All Packages
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Get Your Business Online?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Your free tier website is just a consultation away. Get started today and have your 
                professional business website up and running in no time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center transition-colors"
                >
                  Start Your Free Site
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center border border-gray-200 transition-colors"
                >
                  View Pricing
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Credit - As specified in free tier */}
      <footer className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="container">
          <div className="text-center text-gray-500">
            <p>Website by <Link href="/" className="text-blue-600 hover:text-blue-700">BraxCraft</Link> - Free Tier Demo</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
