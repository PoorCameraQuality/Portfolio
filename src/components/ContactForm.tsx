'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your message has been sent successfully.')
        reset()
      } else {
        const errorData = await response.json()
        setSubmitStatus('error')
        setSubmitMessage(errorData.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block font-medium mb-2" style={{ color: '#303841' }}>
          Name *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
          style={{ 
            backgroundColor: 'rgba(248, 249, 250, 0.2)',
            borderColor: errors.name ? '#dc2626' : 'rgba(58, 71, 80, 0.3)'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = errors.name ? '#dc2626' : '#be3144'}
          onBlur={(e) => e.currentTarget.style.borderColor = errors.name ? '#dc2626' : 'rgba(58, 71, 80, 0.3)'}
          placeholder="Your full name"
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm mt-2 flex items-center space-x-1"
            style={{ color: '#dc2626' }}
          >
            <AlertCircle className="w-4 h-4" />
            <span>{errors.name.message}</span>
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block font-medium mb-2" style={{ color: '#303841' }}>
          Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
          style={{ 
            backgroundColor: 'rgba(248, 249, 250, 0.2)',
            borderColor: errors.email ? '#dc2626' : 'rgba(58, 71, 80, 0.3)'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = errors.email ? '#dc2626' : '#be3144'}
          onBlur={(e) => e.currentTarget.style.borderColor = errors.email ? '#dc2626' : 'rgba(58, 71, 80, 0.3)'}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm mt-2 flex items-center space-x-1"
            style={{ color: '#dc2626' }}
          >
            <AlertCircle className="w-4 h-4" />
            <span>{errors.email.message}</span>
          </motion.p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block font-medium mb-2" style={{ color: '#303841' }}>
          Subject *
        </label>
        <input
          {...register('subject')}
          type="text"
          id="subject"
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
          style={{ 
            backgroundColor: 'rgba(248, 249, 250, 0.2)',
            borderColor: errors.subject ? '#dc2626' : 'rgba(58, 71, 80, 0.3)'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = errors.subject ? '#dc2626' : '#be3144'}
          onBlur={(e) => e.currentTarget.style.borderColor = errors.subject ? '#dc2626' : 'rgba(58, 71, 80, 0.3)'}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm mt-2 flex items-center space-x-1"
            style={{ color: '#dc2626' }}
          >
            <AlertCircle className="w-4 h-4" />
            <span>{errors.subject.message}</span>
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block font-medium mb-2" style={{ color: '#303841' }}>
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 resize-none"
          style={{ 
            backgroundColor: 'rgba(248, 249, 250, 0.2)',
            borderColor: errors.message ? '#dc2626' : 'rgba(58, 71, 80, 0.3)'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = errors.message ? '#dc2626' : '#be3144'}
          onBlur={(e) => e.currentTarget.style.borderColor = errors.message ? '#dc2626' : 'rgba(58, 71, 80, 0.3)'}
          placeholder="Tell me about your project..."
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm mt-2 flex items-center space-x-1"
            style={{ color: '#dc2626' }}
          >
            <AlertCircle className="w-4 h-4" />
            <span>{errors.message.message}</span>
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full group disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-bold text-white transition-all duration-200 inline-flex items-center gap-2 justify-center hover:bg-[#a02838]"
        style={{ backgroundColor: '#be3144' }}
      >
        {isSubmitting ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Sending...</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <span>Send Message</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl flex items-center space-x-3"
          style={{
            backgroundColor: submitStatus === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
            border: submitStatus === 'success' ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)',
            color: submitStatus === 'success' ? '#16a34a' : '#dc2626'
          }}
        >
          {submitStatus === 'success' ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span>{submitMessage}</span>
        </motion.div>
      )}
    </form>
  )
}
