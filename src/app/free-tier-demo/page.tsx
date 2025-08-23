'use client'

import { motion } from 'framer-motion'
import { Check, MapPin, Clock, Phone, Mail, Globe, Star, ArrowRight, ExternalLink, Building2 } from 'lucide-react'
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
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section - Card showing the actual website */}
      <section className="pt-24 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Free Tier Demo
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                This is Your Free Website
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Below is exactly what your free tier website will look like - wrapped in clear cards to show what's included.
              </p>
            </motion.div>

            {/* Main Website Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
            >
              {/* Website Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-3xl font-bold">{businessInfo.name}</h2>
                    <p className="text-blue-100 text-lg">{businessInfo.tagline}</p>
                  </div>
                </div>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  {businessInfo.description}
                </p>
              </div>

              {/* Website Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Business Info Cards */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Business Hours</h3>
                          <p className="text-gray-600 text-sm">{businessInfo.hours}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Phone</h3>
                          <p className="text-gray-600 text-sm">{businessInfo.phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Email</h3>
                          <p className="text-gray-600 text-sm">{businessInfo.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Address</h3>
                          <p className="text-gray-600 text-sm">{businessInfo.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What's Included Card */}
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">What's Included in Your Free Site</h3>
                    <div className="space-y-3">
                      {freeTierFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-blue-800 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Get Started?</h3>
                    <p className="text-gray-600 mb-4">This is exactly what your free website will look like!</p>
                    <Link
                      href="/contact"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors"
                    >
                      Get Your Free Site
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Breakdown - Clear cards showing each feature */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Every Feature Clearly Included
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your free tier website includes these exact features, no surprises or hidden costs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freeTierFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                  <p className="text-gray-600 text-sm">
                    {feature === '1-page scrolling site' && 'A single, scrollable page with all your business information'}
                    {feature === 'Business basics (logo, name, hours)' && 'Professional logo, business name, and operating hours prominently displayed'}
                    {feature === 'Contact info + Google Maps' && 'Phone, email, address with integrated Google Maps for easy navigation'}
                    {feature === 'Mobile-ready design' && 'Fully responsive design that looks great on phones, tablets, and computers'}
                    {feature === 'Basic SEO setup' && 'Search engine optimization to help customers find you online'}
                    {feature === 'Subdomain hosting' && 'Professional hosting included with your business name in the URL'}
                    {feature === 'Footer credit' && 'Small BraxCraft credit in footer to show who built your site'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Notice - Clear explanation */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  This is Your Free Tier Website
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  The card above shows exactly what your free tier website will look like. 
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 bg-white">
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
