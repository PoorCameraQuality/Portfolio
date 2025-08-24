import { Metadata } from 'next'
import { Check, Plus, Star, Zap, Shield, Globe, Smartphone, Search, ArrowRight, Calendar, Edit, Share2, Camera, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Services & Pricing | CheapLocalWebsites.com",
  description: "Starter package: $50 setup + $15/mo. Add-ons for ecommerce, bookings, and more.",
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
    name: 'Enterprise Package',
    price: 'Custom',
    monthly: 'Custom',
    description: 'Enterprise-level solutions requiring custom development and ongoing support',
    features: [
      'Everything in Professional',
      'Custom enterprise features',
      'Advanced integrations',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom development roadmap',
    ],
    popular: false,
    cta: 'Get Enterprise Quote',
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h1 className="h1 mb-6">
              Simple Pricing, Real Results
            </h1>
            <p className="lead max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Every website includes full source code, 
              so you own it completely — no lock-in.
            </p>
          </div>

          {/* Pricing Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`card p-6 lg:p-8 relative ${pkg.popular ? 'ring-2' : ''}`}
                style={{ 
                  borderColor: pkg.popular ? 'var(--sage)' : undefined
                }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: 'var(--sage)', color: 'white' }}>
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="h3 mb-4">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center space-x-2 mb-2">
                    <span className="text-4xl font-display font-bold" style={{ color: 'var(--sage)' }}>{pkg.price}</span>
                    {pkg.price !== 'Free' && pkg.price !== 'Custom' ? (
                      <>
                        <span className="text-muted">setup</span>
                        <span className="text-2xl font-display font-bold">+</span>
                        <span className="text-2xl font-display font-bold" style={{ color: 'var(--sage)' }}>{pkg.monthly}</span>
                        <span className="text-muted">/month</span>
                      </>
                    ) : null}
                  </div>
                  <p className="text-sm text-muted">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--sage)' }} />
                      <span className="text-sm text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={pkg.name === 'Enterprise Package' ? '/contact' : '/contact'}
                  className={`w-full text-center py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                    pkg.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {pkg.cta}
                </Link>
                
                {/* Add demo link for free tier */}
                {pkg.name === 'Free Tier' && (
                  <div className="mt-4 text-center">
                    <Link
                      href="/free-tier-demo"
                      className="text-sm font-medium inline-flex items-center transition-colors hover:text-[var(--forest)]"
                      style={{ color: 'var(--sage)' }}
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
      <section className="section soft-section">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="h2 mb-6">
              Add-On Options
            </h2>
            <p className="lead max-w-2xl mx-auto">
              Need more functionality? These add-ons can be included based on your specific needs. 
              All prices are one-time fees with no recurring charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="card p-6 lg:p-8 group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, var(--sage), var(--forest))' }}>
                  <addon.icon className="w-8 h-8" style={{ color: 'white' }} />
                </div>
                
                <h3 className="h3 mb-4">
                  {addon.title}
                </h3>
                
                <p className="text-body mb-4 text-muted">
                  {addon.description}
                </p>

                <div className="text-2xl font-display font-bold mb-4" style={{ color: 'var(--sage)' }}>
                  {addon.price}
                </div>

                <div className="text-sm text-muted">
                  <span className="font-medium">One-time fee</span> - no recurring charges
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted">
              <strong>Note:</strong> Enterprise-level features like complex e-commerce, payment systems, advanced databases, and custom integrations require individual quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="h2 mb-6">
                Pricing Transparency
              </h2>
              <p className="lead">
                No surprises, no hidden fees, no lock-in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 lg:p-8 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, var(--sage), var(--forest))' }}>
                  <Shield className="w-8 h-8" style={{ color: 'white' }} />
                </div>
                <h3 className="h3 mb-4">
                  No Lock-In
                </h3>
                <p className="text-muted">
                  Every site includes full source code. You own it completely and can take it anywhere.
                </p>
              </div>

              <div className="card p-6 lg:p-8 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, var(--sage), var(--forest))' }}>
                  <Zap className="w-8 h-8" style={{ color: 'white' }} />
                </div>
                <h3 className="h3 mb-4">
                  Enterprise Solutions
                </h3>
                <p className="text-muted">
                  Enterprise-level features and custom development are quoted individually based on your specific requirements.
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
            <h2 className="h2 mb-6">
              See What's Possible
            </h2>
            <p className="lead">
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
      <section className="section soft-section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h2 mb-6">
              Ready to Get Your Business Online?
            </h2>
            <p className="lead mb-8">
              Book a free consultation to discuss your needs. I'll walk you through the best options, 
              give you transparent pricing, and get you set up quickly.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Schema: ProfessionalService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "CheapLocalWebsites.com",
            "areaServed": "Shippensburg, PA and surrounding towns",
            "serviceType": ["Website design", "Website maintenance", "Google Maps optimization"],
            "priceRange": "$15/month",
          })
        }}
      />
    </main>
  )
}
