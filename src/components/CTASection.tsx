'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section bg-brand relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(253,240,213,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(18,32,40,0.3),transparent_50%)]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-surface/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MessageCircle className="w-4 h-4 text-text-primary" />
            <span className="text-text-primary text-sm font-medium">
              Ready to Get Online?
            </span>
          </motion.div>

          <motion.h2
            className="h2 text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Your Business Deserves to{' '}
            <br />
            <span className="text-surface-light">Be Online</span>
          </motion.h2>

          <motion.p
            className="lead text-text-primary/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Whether you run a shop, service, or local event, I'll create a website that helps you stand out. 
            For just $50 upfront and $15/month, you'll have a professional site, hosting, and ongoing support.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link href="/contact" className="btn-primary bg-surface text-text-primary hover:bg-surface-light group">
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="btn-ghost text-text-primary border-text-primary/30 hover:bg-surface/20">
              View Packages
            </Link>
            <Link href="/free-tier-demo" className="btn-ghost text-text-primary border-text-primary/30 hover:bg-surface/20">
              See Free Demo
            </Link>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="mt-12 pt-8 border-t border-surface-light/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-text-primary/80 text-sm mb-2">Email</div>
                <a
                  href="mailto:hello@braxcraft.com"
                  className="text-text-primary hover:text-surface-light transition-colors"
                >
                  hello@braxcraft.com
                </a>
              </div>
              <div>
                <div className="text-text-primary/80 text-sm mb-2">Location</div>
                <div className="text-text-primary">
                  Shippensburg, PA
                </div>
              </div>
              <div>
                <div className="text-text-primary/80 text-sm mb-2">Response Time</div>
                <div className="text-text-primary">
                  Within 24 hours
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
