'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'Working with Braxcraft was an absolute pleasure. They delivered our e-commerce platform on time and exceeded our expectations. The user experience is incredible!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, DesignLab',
    content: 'The brand identity package they created perfectly captures our vision. Professional, creative, and delivered with excellent communication throughout the process.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthCo',
    content: 'Our website redesign has significantly improved our conversion rates. The team understood our business goals and created a solution that drives results.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
            What Clients Say
          </h2>
          <p className="lead text-text-primary/80 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say 
            about working together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="mb-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-brand fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl text-text-primary/90 mb-6 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div>
                    <div className="font-display font-semibold text-text-primary text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-text-primary/60">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-surface-light/20 hover:bg-surface-light/40 transition-colors duration-200 flex items-center justify-center text-text-primary hover:text-text-primary/80"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-brand scale-125'
                        : 'bg-surface-light/40 hover:bg-surface-light/60'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-surface-light/20 hover:bg-surface-light/40 transition-colors duration-200 flex items-center justify-center text-text-primary hover:text-text-primary/80"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
