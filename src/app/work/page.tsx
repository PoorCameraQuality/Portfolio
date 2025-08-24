import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Code, Package, Zap, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio Work | BraxCraft Web Design',
  description: 'Explore my portfolio of web design projects, from developer tools to business websites. See examples of my work and capabilities.',
}

const allWork = [
  {
    id: 'unity-synclock',
    title: 'Unity SyncLock',
    description: 'A Unity development tool that eliminates dependency headaches by keeping teams in sync with one simple lockfile system. Built for game developers, hackathons, and teams.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    tags: ['Unity Tool', 'Dependency Management', 'Game Development'],
    category: 'Developer Tools',
    link: 'https://unitysynclockwebsite.vercel.app/',
    external: true,
    features: ['Dependency Lockfile', 'UPM + Asset Store', 'Cache Import', 'Game Jam Friendly'],
    year: '2024',
    client: 'Unity Developers',
  },
  {
    id: 'feed-store',
    title: 'Feed Store Website',
    description: 'Professional website mockup for a local feed store business. Demonstrates e-commerce capabilities, product showcases, and local business optimization.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    tags: ['E-commerce', 'Local Business', 'Product Showcase'],
    category: 'Business Websites',
    link: '/feed-store',
    external: false,
    features: ['Product Catalog', 'Local Delivery', 'Customer Reviews', 'Mobile-First Design'],
    year: '2024',
    client: 'Local Feed Store',
  },
  {
    id: 'photography-business',
    title: 'Photography Business',
    description: 'Creative business website mockup showcasing portfolio work, service packages, and client testimonials. Perfect for creative service businesses.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    tags: ['Portfolio', 'Creative Services', 'Service Packages'],
    category: 'Business Websites',
    link: '/photography-business',
    external: false,
    features: ['Portfolio Gallery', 'Service Pricing', 'Client Testimonials', 'Booking System'],
    year: '2024',
    client: 'Creative Agency',
  },
]

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies like Next.js, React, and TypeScript.',
    features: ['Custom Development', 'Performance Optimization', 'SEO Integration', 'Mobile-First Design']
  },
  {
    icon: Package,
    title: 'Business Solutions',
    description: 'Complete business website solutions including e-commerce, portfolios, and service showcases.',
    features: ['E-commerce Setup', 'Content Management', 'Analytics Integration', 'Business Optimization']
  },
  {
    icon: Zap,
    title: 'Developer Tools',
    description: 'Specialized tools and utilities for developers, built with modern best practices.',
    features: ['Tool Development', 'API Integration', 'Performance Tools', 'Developer Experience']
  }
]

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'Understanding your needs, goals, and target audience to create a strategic plan.'
  },
  {
    step: '02',
    title: 'Design & Development',
    description: 'Creating beautiful, functional designs and implementing them with clean, maintainable code.'
  },
  {
    step: '03',
    title: 'Testing & Launch',
    description: 'Rigorous testing across devices and browsers, followed by smooth deployment and launch.'
  }
]

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '15+', label: 'Projects Completed' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
]

export default function WorkPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section pt-24 pb-24 soft-section">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="eyebrow mb-8">
              <Star className="w-4 h-4 mr-2 inline" />
              Creative Web Developer & Designer
            </div>
            <h1 className="h1 mb-8">
              Creative
              <br />
              <span style={{ color: 'var(--soil)' }}>Digital</span>
              <br />
              Solutions
            </h1>
            <p className="lead max-w-2xl mx-auto">
              Transforming ideas into exceptional digital experiences. From developer tools to business websites, 
              I create solutions that drive results and exceed expectations.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#projects"
                className="btn-primary"
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section soft-section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--soil)' }}>{stat.number}</div>
                <div className="text-sm uppercase tracking-wider text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="h2 mb-6">
              What I Do
            </h2>
            <p className="lead max-w-2xl mx-auto">
              Comprehensive web development and design services tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-6 lg:p-8 group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[var(--leaf)]" style={{ backgroundColor: 'var(--cream)' }}>
                  <service.icon className="w-8 h-8" style={{ color: 'var(--sage)' }} />
                </div>
                <h3 className="h3 mb-4">{service.title}</h3>
                <p className="mb-6 text-muted">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: 'var(--sage)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section soft-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="h2 mb-6">
              My Process
            </h2>
            <p className="lead max-w-2xl mx-auto">
              A proven methodology that ensures quality, efficiency, and exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6" style={{ backgroundColor: 'var(--sage)', color: 'white' }}>
                  {step.step}
                </div>
                <h3 className="h3 mb-4">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="h2 mb-6">
              Featured Work
            </h2>
            <p className="lead max-w-2xl mx-auto">
              A selection of my recent projects showcasing different skills and business solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {allWork.map((project) => (
              <div key={project.id} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(246, 243, 238, 0.8), transparent, transparent)' }} />
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'var(--cream)' }}>
                    {project.external ? (
                      <ExternalLink className="w-6 h-6" style={{ color: 'var(--ink)' }} />
                    ) : (
                      <ArrowRight className="w-6 h-6" style={{ color: 'var(--ink)' }} />
                    )}
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: 'var(--ink)' }}>
                    {project.year}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold" style={{ color: 'var(--sage)' }}>
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-muted">
                      {project.client}
                    </span>
                  </div>
                  
                  <h3 className="h3 transition-colors duration-200 hover:text-[var(--sage)]">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted">
                    {project.description}
                  </p>

                  {/* Project Features */}
                  <div className="space-y-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-muted">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--sage)' }} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: 'var(--cream)', color: 'var(--muted)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {project.external ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center group transition-colors duration-200 underline-offset-4 hover:underline"
                      style={{ color: 'var(--sage)' }}
                    >
                      View Live Site
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={project.link}
                      className="inline-flex items-center group transition-colors duration-200 underline-offset-4 hover:underline"
                      style={{ color: 'var(--sage)' }}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Cards Section */}
      <section className="section soft-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="h2 mb-6">
              Live Demo Sites
            </h2>
            <p className="lead max-w-2xl mx-auto">
              Explore these working examples of different website types and business solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="/feed-store" className="card p-8 hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold mb-2">Feed Store Demo</h3>
              <p className="text-muted">Example ecommerce site for local farm/feed store.</p>
            </a>
            <a href="/photography-business" className="card p-8 hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold mb-2">Photography Business Demo</h3>
              <p className="text-muted">Example service-site for local photographer.</p>
            </a>
            <a href="/one-pager-demo" className="card p-8 hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold mb-2">One-Pager Demo</h3>
              <p className="text-muted">Basic single-page site ($10 setup + $5/mo) with logo, contact, Google Maps.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-white hero-bleed">
        <div className="overlay" />
        <div className="inner">
          <div className="container text-center">
            <h2 className="h1 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="lead max-w-2xl mx-auto mb-8 text-white/90">
              Let's discuss how I can help bring your vision to life with a custom web solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/"
                className="btn-secondary"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
