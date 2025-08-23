'use client'

import { motion } from 'framer-motion'
import { Check, MapPin, Clock, Phone, Mail, Globe, Star, ArrowRight, ExternalLink, Building2 } from 'lucide-react'
import Link from 'next/link'
import GoogleStyleReviews from "../(demo)/demo/_components/GoogleStyleReviews"; /* reuse the demo component */

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
    <main className="min-h-screen" style={{ backgroundColor: '#f8f398' }}>
      <div className="text-center py-3 border-b" style={{ backgroundColor: '#e46161', color: 'white' }}>
        🚧 Demo site built by <a href="https://cheaplocalwebsites.com" target="_blank" rel="noopener" className="underline">CheapLocalWebsites.com</a> — example only.
      </div>
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
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: '#cbf078', color: '#2d5016' }}>
                <Star className="w-4 h-4 mr-2" />
                Free Tier Demo
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: '#2d5016' }}>
                This is Your Free Website
              </h1>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: '#4a5d3a' }}>
                Below is exactly what your free tier website will look like - wrapped in clear cards to show what's included.
              </p>
            </motion.div>

            {/* Main Website Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl shadow-xl border overflow-hidden"
              style={{ backgroundColor: 'white', borderColor: '#f1b963' }}
            >
              {/* Website Header */}
              <div className="text-white p-8 text-center" style={{ backgroundColor: '#cbf078' }}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-3xl font-bold" style={{ color: '#2d5016' }}>{businessInfo.name}</h2>
                    <p className="text-lg" style={{ color: '#4a5d3a' }}>{businessInfo.tagline}</p>
                  </div>
                </div>
                <p className="max-w-2xl mx-auto" style={{ color: '#4a5d3a' }}>
                  {businessInfo.description}
                </p>
              </div>

              {/* Website Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Business Info Cards */}
                  <div className="space-y-4">
                    <div className="rounded-lg p-4 border" style={{ backgroundColor: '#f8f398', borderColor: '#f1b963' }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#cbf078' }}>
                          <Clock className="w-5 h-5" style={{ color: '#2d5016' }} />
                        </div>
                        <div>
                          <h3 className="font-semibold" style={{ color: '#2d5016' }}>Business Hours</h3>
                          <p className="text-sm" style={{ color: '#4a5d3a' }}>{businessInfo.hours}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg p-4 border" style={{ backgroundColor: '#f8f398', borderColor: '#f1b963' }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#cbf078' }}>
                          <Phone className="w-5 h-5" style={{ color: '#2d5016' }} />
                        </div>
                        <div>
                          <h3 className="font-semibold" style={{ color: '#2d5016' }}>Phone</h3>
                          <p className="text-sm" style={{ color: '#4a5d3a' }}>{businessInfo.phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg p-4 border" style={{ backgroundColor: '#f8f398', borderColor: '#f1b963' }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#cbf078' }}>
                          <Mail className="w-5 h-5" style={{ color: '#2d5016' }} />
                        </div>
                        <div>
                          <h3 className="font-semibold" style={{ color: '#2d5016' }}>Email</h3>
                          <p className="text-sm" style={{ color: '#4a5d3a' }}>{businessInfo.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg p-4 border" style={{ backgroundColor: '#f8f398', borderColor: '#f1b963' }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#cbf078' }}>
                          <MapPin className="w-5 h-5" style={{ color: '#2d5016' }} />
                        </div>
                        <div>
                          <h3 className="font-semibold" style={{ color: '#2d5016' }}>Address</h3>
                          <p className="text-sm" style={{ color: '#4a5d3a' }}>{businessInfo.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What's Included Card */}
                  <div className="rounded-lg p-6 border" style={{ backgroundColor: '#f8f398', borderColor: '#f1b963' }}>
                    <h3 className="text-lg font-semibold mb-4" style={{ color: '#2d5016' }}>What's Included in Your Free Site</h3>
                    <div className="space-y-3">
                      {freeTierFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#e46161' }} />
                          <span className="text-sm" style={{ color: '#4a5d3a' }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <div className="rounded-lg p-6 border" style={{ backgroundColor: '#f8f398', borderColor: '#f1b963' }}>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#2d5016' }}>Ready to Get Started?</h3>
                    <p className="mb-4" style={{ color: '#4a5d3a' }}>This is exactly what your free website will look like!</p>
                    <Link
                      href="/contact"
                      className="px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors text-white hover:bg-[#d14f4f]"
                      style={{ backgroundColor: '#e46161' }}
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

      <GoogleStyleReviews />

      {/* Features Breakdown - Clear cards showing each feature */}
      <section className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#2d5016' }}>
                Every Feature Clearly Included
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4a5d3a' }}>
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
                  className="border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#cbf078]"
                  style={{ backgroundColor: 'white', borderColor: '#f1b963' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#cbf078' }}>
                    <Check className="w-6 h-6" style={{ color: '#2d5016' }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#2d5016' }}>{feature}</h3>
                  <p className="text-sm" style={{ color: '#4a5d3a' }}>
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
      <section className="py-16" style={{ backgroundColor: '#f8f398' }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="rounded-2xl p-8 shadow-lg border" style={{ backgroundColor: 'white', borderColor: '#f1b963' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#cbf078' }}>
                  <Globe className="w-8 h-8" style={{ color: '#2d5016' }} />
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#2d5016' }}>
                  This is Your Free Tier Website
                </h2>
                <p className="text-lg mb-8" style={{ color: '#4a5d3a' }}>
                  The card above shows exactly what your free tier website will look like. 
                  It's simple, professional, and includes everything your customers need to find and contact you.
                </p>
                
                <div className="border rounded-lg p-6 mb-8" style={{ backgroundColor: '#f8f398', borderColor: '#f1b963' }}>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#2d5016' }}>What You Get:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div>
                      <ul className="space-y-2" style={{ color: '#4a5d3a' }}>
                        <li className="flex items-center space-x-2">
                          <Check className="w-4 h-4" style={{ color: '#e46161' }} />
                          <span>Professional design</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="w-4 h-4" style={{ color: '#e46161' }} />
                          <span>Mobile-friendly layout</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="w-4 h-4" style={{ color: '#e46161' }} />
                          <span>Contact information</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2" style={{ color: '#4a5d3a' }}>
                        <li className="flex items-center space-x-2">
                          <Check className="w-4 h-4" style={{ color: '#e46161' }} />
                          <span>Business hours</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="w-4 h-4" style={{ color: '#e46161' }} />
                          <span>Google Maps integration</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="w-4 h-4" style={{ color: '#e46161' }} />
                          <span>SEO optimized</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors hover:bg-[#d14f4f]"
                    style={{ backgroundColor: '#e46161' }}
                  >
                    Get Your Free Site
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href="/services"
                    className="px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors hover:bg-[#e8a84a]"
                    style={{ backgroundColor: '#f1b963', color: '#8b4513' }}
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
      <section className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#2d5016' }}>
                Ready to Get Your Business Online?
              </h2>
              <p className="text-lg mb-8" style={{ color: '#4a5d3a' }}>
                Your free tier website is just a consultation away. Get started today and have your 
                professional business website up and running in no time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="text-white px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center transition-colors hover:bg-[#d14f4f]"
                  style={{ backgroundColor: '#e46161' }}
                >
                  Start Your Free Site
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center border transition-colors hover:bg-[#f8f398]"
                  style={{ backgroundColor: 'white', color: '#4a5d3a', borderColor: '#f1b963' }}
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
      <footer className="py-8 border-t" style={{ backgroundColor: '#f8f398', borderColor: '#f1b963' }}>
        <div className="container">
          <div className="text-center" style={{ color: '#4a5d3a' }}>
            <p>
              Website demo by <a href="https://cheaplocalwebsites.com" target="_blank" rel="noopener" className="underline">CheapLocalWebsites.com</a>.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
