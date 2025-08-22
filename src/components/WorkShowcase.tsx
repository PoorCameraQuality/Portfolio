'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'

const featuredWork = [
  {
    id: 'shippensburg-brews',
    title: 'Shippensburg Brews',
    description: 'Coffee shop website with menu, photo gallery, and online ordering. Mobile-first design that drives foot traffic.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['Coffee Shop', 'Menu', 'Gallery'],
    category: 'Food & Beverage',
    link: '/work/shippensburg-brews',
  },
  {
    id: 'cumberland-auto',
    title: 'Cumberland Auto Repair',
    description: 'Online booking form, services list, and customer testimonials. Increased appointment bookings by 40%.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    tags: ['Auto Repair', 'Booking', 'Services'],
    category: 'Automotive',
    link: '/work/cumberland-auto',
  },
  {
    id: 'main-street-barber',
    title: 'Main Street Barber',
    description: 'Clean single-page site with hours, contact info, and photo gallery. Simple design that gets customers in the door.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    tags: ['Barber Shop', 'Hours', 'Contact'],
    category: 'Personal Care',
    link: '/work/main-street-barber',
  },
  {
    id: 'petal-stem-florals',
    title: 'Petal & Stem Florals',
    description: 'Simple shop gallery and contact form. Beautiful showcase of floral arrangements with easy ordering.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop',
    tags: ['Florist', 'Gallery', 'Contact'],
    category: 'Retail',
    link: '/work/petal-stem-florals',
  },
  {
    id: 'iron-core-fitness',
    title: 'Iron Core Fitness',
    description: 'Class schedule with sign-up buttons and membership info. Streamlined booking process for fitness classes.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    tags: ['Fitness', 'Classes', 'Booking'],
    category: 'Health & Fitness',
    link: '/work/iron-core-fitness',
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
            Sample Local Sites
          </h2>
          <p className="lead text-text-primary/80 max-w-2xl mx-auto">
            Here are some examples of websites I've built for local businesses. 
            Each one is designed to help businesses get found online and attract customers.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
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
              <Link href={project.link} className="block">
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
                    <ExternalLink className="w-5 h-5 text-text-primary" />
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
                </div>
              </Link>
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
            View All Examples
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
