import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Code, Package, Zap, Users } from 'lucide-react'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

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
  },
  {
    id: 'feed-store',
    title: 'Feed Store Website',
    description: 'Professional website mockup for a local feed store business. Demonstrates e-commerce capabilities, product showcases, and local business optimization.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['E-commerce', 'Local Business', 'Product Showcase'],
    category: 'Business Websites',
    link: '/feed-store',
    external: false,
    features: ['Product Catalog', 'Local Delivery', 'Customer Reviews', 'Mobile-First Design'],
  },
  {
    id: 'photography-business',
    title: 'Photography Business',
    description: 'Creative business website mockup showcasing portfolio work, service packages, and client testimonials. Perfect for creative service businesses.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    tags: ['Portfolio', 'Creative Services', 'Service Packages'],
    category: 'Business Websites',
    link: '/photography-business',
    external: false,
    features: ['Portfolio Gallery', 'Service Pricing', 'Client Testimonials', 'Booking System'],
  },
]

export default function WorkPage() {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-bg text-text-primary">
        <div className="min-h-screen">
          {/* Header */}
          <header className="pt-32 pb-16 bg-gradient-to-b from-surface/50 to-bg">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="h1 mb-6">
                  My Portfolio Work
                </h1>
                <p className="lead text-text-primary/80">
                  Here are examples of my work, from developer tools to business website mockups. 
                  Each project demonstrates different capabilities and business solutions.
                </p>
              </div>
            </div>
          </header>

          {/* Work Grid */}
          <main className="py-16">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {allWork.map((project) => (
                  <div key={project.id} className="group">
                    <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-brand rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                        {project.external ? (
                          <ExternalLink className="w-5 h-5 text-text-primary" />
                        ) : (
                          <ArrowRight className="w-5 h-5 text-text-primary" />
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-brand font-medium">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="h3 text-text-primary group-hover:text-brand transition-colors duration-200">
                        {project.title}
                      </h3>
                      
                      <p className="text-text-primary/80 text-body">
                        {project.description}
                      </p>

                      {/* Project Features */}
                      <div className="space-y-2">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-text-primary/70">
                            <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-surface rounded-full text-xs text-text-primary/80"
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
                          className="inline-flex items-center text-brand hover:text-brand-light transition-colors text-sm font-medium"
                        >
                          View Live Site
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      ) : (
                        <Link
                          href={project.link}
                          className="inline-flex items-center text-brand hover:text-brand-light transition-colors text-sm font-medium"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Back to Home */}
              <div className="text-center mt-16">
                <Link
                  href="/"
                  className="btn-secondary group inline-flex items-center"
                >
                  Back to Home
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
