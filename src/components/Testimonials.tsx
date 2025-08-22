'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    business: 'Shippensburg Brews',
    role: 'Owner',
    content: 'Getting our coffee shop online was a game-changer. We\'re now getting orders from customers who found us on Google, and the mobile site makes it easy for people to browse our menu while they\'re out.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop',
  },
  {
    id: 2,
    name: 'Mike Rodriguez',
    business: 'Cumberland Auto Repair',
    role: 'Manager',
    content: 'Our online booking form has increased appointments by 40%. Customers love being able to schedule service without calling, and the site looks professional. Great investment for our business.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    id: 3,
    name: 'Lisa Chen',
    business: 'Petal & Stem Florals',
    role: 'Owner',
    content: 'The website showcases our arrangements beautifully and makes it easy for customers to contact us. We\'ve seen a significant increase in wedding and event inquiries since going online.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
  {
    id: 4,
    name: 'Tom Williams',
    business: 'Main Street Barber',
    role: 'Owner',
    content: 'Simple, clean design that gets the job done. Customers can easily find our hours and contact info. The $15/month fee is reasonable, and the support is always quick and helpful.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
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

  const currentTestimonial = testimonials[currentIndex]

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
            Community Feedback
          </h2>
          <p className="lead text-text-primary/80 max-w-2xl mx-auto">
            Here's what local business owners are saying about their new websites and the results they're seeing.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial.id}
            className="text-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Rating */}
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand fill-current" />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-xl text-text-primary/90 mb-8 leading-relaxed">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-text-primary font-semibold">
                  {currentTestimonial.name}
                </div>
                <div className="text-text-primary/60 text-sm">
                  {currentTestimonial.role}, {currentTestimonial.business}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-surface-light/20 rounded-full flex items-center justify-center text-text-primary hover:bg-surface-light/40 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-brand'
                      : 'bg-surface-light/40 hover:bg-surface-light/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-surface-light/20 rounded-full flex items-center justify-center text-text-primary hover:bg-surface-light/40 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
