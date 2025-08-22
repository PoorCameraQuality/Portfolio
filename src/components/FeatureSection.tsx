'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Zap } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies. From responsive design to complex functionality, I bring your vision to life.',
    color: 'from-brand to-brand-accent',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that enhance user experience. I focus on creating designs that are both aesthetically pleasing and highly functional.',
    color: 'from-barn-red to-brand',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast websites that rank well and convert better. I optimize for speed, SEO, and user engagement across all devices.',
    color: 'from-brand-accent to-barn-red',
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

export default function FeatureSection() {
  return (
    <section className="section bg-surface">
      <div className="container">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="h2 text-text-primary mb-6">
            What I Do Best
          </h2>
          <p className="lead text-text-primary/80 max-w-2xl mx-auto">
            I specialize in creating exceptional digital experiences that combine 
            stunning design with powerful functionality.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="card group hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-text-primary" />
              </div>
              
              <h3 className="h3 text-text-primary mb-4">
                {feature.title}
              </h3>
              
              <p className="text-text-primary/80 text-body">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
