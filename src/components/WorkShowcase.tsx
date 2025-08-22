'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Code, Package, Zap, Users } from 'lucide-react'

const featuredWork = [
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
    id: 'local-business-websites',
    title: 'Local Business Websites',
    description: 'Custom websites for small businesses in Shippensburg and Central PA. Mobile-first design with local SEO optimization and affordable monthly hosting.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['Small Business', 'Local SEO', 'Mobile-First'],
    category: 'Web Development',
    link: '/work/local-business',
    external: false,
    features: ['Google Visibility', 'Mobile Optimization', 'Local SEO', 'Affordable Hosting'],
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Modern Next.js portfolio built with Tailwind CSS and Framer Motion. Demonstrates clean design, responsive layout, and modern web development practices.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Tailwind CSS', 'Portfolio'],
    category: 'Web Development',
    link: '/work/portfolio',
    external: false,
    features: ['Next.js 14', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function WorkShowcase() {
  return (
    <section className="section bg-bg">
      <div className="container">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="h2 text-text-primary mb-6">
            Featured Projects
          </h2>
          <p className="lead text-text-primary/80 max-w-2xl mx-auto">
            Here are some examples of my work, from developer tools to business websites. 
            Each project solves real problems and delivers measurable results.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredWork.map((project) => (
            <motion.div
              key={project.id}
              className="group"
              variants={itemVariants}
            >
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/work"
            className="btn-secondary group inline-flex items-center"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
