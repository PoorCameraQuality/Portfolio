import { Metadata } from 'next'
import { Check, Plus, Star, Zap, Shield, Globe, Smartphone, Search, ArrowRight, Calendar, Edit, Share2, Camera, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description: 'Transparent pricing for local business websites. Starter package from $50 upfront + $15/month hosting.',
}

const starterPackage = [
  'Up to 5 custom pages',
  'Google Maps + SEO setup',
  'Directory listings (Yelp, Yellow Pages, Bing)',
  'Hosting & domain setup included',
  'Includes source code (you own your site)',
  'Mobile-first responsive design',
]

const addOns = [
  {
    title: 'Booking System',
    description: 'Online scheduling and appointment booking for your services',
    price: '$100',
    icon: Calendar,
  },
  {
    title: 'CMS Integration',
    description: 'Easy-to-use content management system so you can update content yourself',
    price: '$75',
    icon: Edit,
  },
  {
    title: 'Social Media Integration',
    description: 'Connect your website with your social media accounts',
    price: '$50',
    icon: Share2,
  },
  {
    title: 'On-site Photos & B-roll',
    description: 'Professional photography to showcase your business (small fee)',
    price: '$150',
    icon: Camera,
  },
  {
    title: 'Staff Training Session',
    description: 'Training session so your team can manage the site',
    price: '$75',
    icon: Users,
  },
]

const packages = [
  {
    name: 'Free Tier',
    price: 'Free',
    monthly: '$0',
    description: 'Simple online presence to start',
    features: [
      '1-page scrolling site',
      'Business basics (logo, name, hours)',
      'Contact info + Google Maps',
      'Mobile-ready design',
      'Basic SEO setup',
      'Subdomain hosting',
      'Footer credit',
    ],
    popular: false,
    cta: 'Get Free Site',
  },
  {
    name: 'Starter Website',
    price: '$50',
    monthly: '$15',
    description: 'Perfect for small businesses who need a professional online presence',
    features: [
      'Up to 5 custom pages',
      'Google Maps + SEO setup',
      'Directory listings',
      'Hosting & domain included',
      'Source code ownership',
      'Mobile-first design',
    ],
    popular: false,
    cta: 'Get Started Today',
  },
  {
    name: 'Professional Package',
    price: '$250',
    monthly: '$25',
    description: 'For businesses needing advanced features and functionality',
    features: [
      'Everything in Starter',
      'Booking/e-commerce systems',
      'Advanced CMS included',
      'Custom photography',
      'Staff training',
      'Priority support',
    ],
    popular: true,
    cta: 'Get Professional',
  },
  {
    name: 'Premium Package',
    price: 'Custom',
    monthly: 'Custom',
    description: 'Full-service solution with ongoing marketing support',
    features: [
      'Everything in Professional',
      'Ongoing SEO campaigns',
      'Paid ad setup/management',
      'Social media automation',
      'Priority support',
      'Custom development',
    ],
    popular: false,
    cta: 'Get Custom Quote',
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
              Simple Pricing, Real Results
            </h1>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Every website includes full source code, 
              so you own it completely — no lock-in.
            </p>
          </div>

          {/* Pricing Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`card relative ${pkg.popular ? 'ring-2 ring-brand' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand text-text-primary px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="h3 text-text-primary mb-4">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center space-x-2 mb-2">
                    <span className="text-4xl font-display font-bold text-brand">{pkg.price}</span>
                    {pkg.price !== 'Free' && pkg.price !== 'Custom' ? (
                      <>
                        <span className="text-text-primary/60">setup</span>
                        <span className="text-2xl font-display font-bold text-text-primary">+</span>
                        <span className="text-2xl font-display font-bold text-brand">{pkg.monthly}</span>
                        <span className="text-text-primary/60">/month</span>
                      </>
                    ) : null}
                  </div>
                  <p className="text-text-primary/80 text-sm">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-text-primary/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={pkg.name === 'Premium Package' ? '/contact' : '/contact'}
                  className={`w-full text-center py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-brand text-text-primary hover:bg-brand-accent'
                      : 'bg-surface text-text-primary hover:bg-surface-secondary border border-surface-light/20'
                  }`}
                >
                  {pkg.cta}
                </Link>
                
                {/* Add demo link for free tier */}
                {pkg.name === 'Free Tier' && (
                  <div className="mt-4 text-center">
                    <Link
                      href="/free-tier-demo"
                      className="text-brand hover:text-brand-light transition-colors text-sm font-medium inline-flex items-center"
                    >
                      See Demo Site
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="h2 text-text-primary mb-6">
              Add-On Options
            </h2>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              Need more functionality? These add-ons can be included based on your specific needs. 
              All prices are one-time fees with no recurring charges.
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
                
                <p className="text-text-primary/80 text-body mb-4">
                  {addon.description}
                </p>

                <div className="text-2xl font-display font-bold text-brand mb-4">
                  {addon.price}
                </div>

                <div className="text-sm text-text-primary/60">
                  <span className="font-medium">One-time fee</span> - no recurring charges
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-primary/60 text-sm">
              <strong>Note:</strong> Complex features like e-commerce, payment systems, or advanced databases are quoted individually.
            </p>
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

      {/* Demo Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="h2 text-text-primary mb-6">
              See What's Possible
            </h2>
            <p className="lead text-text-primary/80">
              Check out our free demo one-pagers to see how your business could look online. 
              No commitment, just inspiration.
            </p>
          </div>
          
          <div className="text-center">
            <Link href="/demo" className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-2">
              View Demo One-Pagers
              <ArrowRight className="w-5 h-5" />
            </Link>
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
