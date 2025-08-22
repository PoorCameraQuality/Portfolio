'use client'

import { motion } from 'framer-motion'
import { Search, Smartphone, DollarSign, Clock } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Google Visibility',
    description: 'Optimized to appear on Google Maps & search results. Get found when customers search for your services.',
    color: 'from-brand to-brand-accent',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Ready',
    description: 'Looks great on phones, tablets, and desktops. Most customers browse on mobile - your site will too.',
    color: 'from-barn-red to-brand',
  },
  {
    icon: DollarSign,
    title: 'Flat Monthly Fee',
    description: '$15/month covers hosting, updates, and support. No hidden fees or surprise charges.',
    color: 'from-brand-accent to-barn-red',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most sites ready in under two weeks. Get online quickly and start attracting customers.',
    color: 'from-prussian-blue to-air-superiority-blue',
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
            What You Get With Every Site
          </h2>
          <p className="lead text-text-primary/80 max-w-2xl mx-auto">
            Every website I build includes these essential features that help local businesses succeed online.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
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
