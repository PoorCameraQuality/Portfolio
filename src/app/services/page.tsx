import { Metadata } from 'next'
import { Check, Plus, Star, Zap, Shield, Globe, Smartphone, Search } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description: 'Transparent pricing for local business websites. Starter package from $50 upfront + $15/month hosting.',
}

const starterPackage = [
  'Custom design with Next.js (fast, modern tech)',
  'Search Engine Optimization built in',
  'Google Maps, Yelp, Yellow Pages overhaul for visibility',
  'Up to 5 static pages (Home, About, Services, Contact, etc.)',
  'Domain & hosting setup handled for you',
  'Ongoing updates and support',
]

const addOns = [
  {
    title: 'E-commerce Setup',
    description: 'Payment processing, shopping cart, and product management',
    icon: ShoppingCart,
  },
  {
    title: 'Booking Systems',
    description: 'Online scheduling and appointment booking for your services',
    icon: Calendar,
  },
  {
    title: 'Content Management',
    description: 'Easy-to-use CMS so you can update content yourself',
    icon: Edit,
  },
  {
    title: 'Custom Photography',
    description: 'On-site photo shoots to showcase your business (small fee)',
    icon: Camera,
  },
  {
    title: 'Staff Training',
    description: 'Training session so your team can manage the site',
    icon: Users,
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="section bg-bg">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h1 className="h1 text-text-primary mb-6">
              Services & Pricing
            </h1>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Every website includes full source code, 
              so you own it completely — no lock-in.
            </p>
          </div>

          {/* Main Package */}
          <div className="max-w-4xl mx-auto">
            <div className="card text-center relative overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-6 right-6 bg-brand text-text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>

              <div className="mb-8">
                <h2 className="h2 text-text-primary mb-4">
                  Starter Website Package
                </h2>
                <div className="flex items-baseline justify-center space-x-2 mb-6">
                  <span className="text-5xl font-display font-bold text-brand">$50</span>
                  <span className="text-text-primary/60">upfront</span>
                  <span className="text-2xl font-display font-bold text-text-primary">+</span>
                  <span className="text-3xl font-display font-bold text-brand">$15</span>
                  <span className="text-text-primary/60">/month hosting</span>
                </div>
                <p className="text-text-primary/80 max-w-lg mx-auto">
                  Perfect for small businesses who need a professional online presence. 
                  Get found on Google, look great on mobile, and attract more customers.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                {starterPackage.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-text-primary/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="h2 text-text-primary mb-6">
              Optional Add-Ons
            </h2>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              Need more functionality? These add-ons can be included based on your specific needs. 
              Each one is quoted individually to keep costs transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <addon.icon className="w-8 h-8 text-text-primary" />
                </div>
                
                <h3 className="h3 text-text-primary mb-4">
                  {addon.title}
                </h3>
                
                <p className="text-text-primary/80 text-body mb-6">
                  {addon.description}
                </p>

                <div className="text-sm text-text-primary/60">
                  <span className="font-medium">Priced individually</span> based on complexity
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="section bg-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="h2 text-text-primary mb-6">
                Pricing Transparency
              </h2>
              <p className="lead text-text-primary/80">
                No surprises, no hidden fees, no lock-in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-text-primary" />
                </div>
                <h3 className="h3 text-text-primary mb-4">
                  No Lock-In
                </h3>
                <p className="text-text-primary/80">
                  Every site includes full source code. You own it completely and can take it anywhere.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-text-primary" />
                </div>
                <h3 className="h3 text-text-primary mb-4">
                  Custom Quotes
                </h3>
                <p className="text-text-primary/80">
                  More complex designs and advanced features are quoted individually to keep costs fair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h2 text-text-primary mb-6">
              Ready to Get Your Business Online?
            </h2>
            <p className="lead text-text-primary/80 mb-8">
              Book a free consultation to discuss your needs. I'll walk you through the best options, 
              give you transparent pricing, and get you set up quickly.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

// Icon components
function ShoppingCart(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
    </svg>
  )
}

function Calendar(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
    </svg>
  )
}

function Edit(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  )
}

function Camera(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}

function Users(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}
