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
        <label htmlFor="name" className="block text-text-primary font-medium mb-2">
          Name *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className={`w-full px-4 py-3 bg-surface-light/20 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand transition-all duration-200 ${
            errors.name
              ? 'border-red-500 focus:ring-red-500'
              : 'border-surface-light/30 focus:border-brand'
          }`}
          placeholder="Your full name"
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-2 flex items-center space-x-1"
          >
            <AlertCircle className="w-4 h-4" />
            <span>{errors.name.message}</span>
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-text-primary font-medium mb-2">
          Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className={`w-full px-4 py-3 bg-surface-light/20 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand transition-all duration-200 ${
            errors.email
              ? 'border-red-500 focus:ring-red-500'
              : 'border-surface-light/30 focus:border-brand'
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-2 flex items-center space-x-1"
          >
            <AlertCircle className="w-4 h-4" />
            <span>{errors.email.message}</span>
          </motion.p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-text-primary font-medium mb-2">
          Subject *
        </label>
        <input
          {...register('subject')}
          type="text"
          id="subject"
          className={`w-full px-4 py-3 bg-surface-light/20 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand transition-all duration-200 ${
            errors.subject
              ? 'border-red-500 focus:ring-red-500'
              : 'border-surface-light/30 focus:border-brand'
          }`}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-2 flex items-center space-x-1"
          >
            <AlertCircle className="w-4 h-4" />
            <span>{errors.subject.message}</span>
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-text-primary font-medium mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className={`w-full px-4 py-3 bg-surface-light/20 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand transition-all duration-200 resize-none ${
            errors.message
              ? 'border-red-500 focus:ring-red-500'
              : 'border-surface-light/30 focus:border-brand'
          }`}
          placeholder="Tell me about your project..."
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-2 flex items-center space-x-1"
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
        className="btn-primary w-full group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-text-primary/30 border-t-text-primary rounded-full animate-spin" />
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
          className={`p-4 rounded-xl flex items-center space-x-3 ${
            submitStatus === 'success'
              ? 'bg-green-500/20 border border-green-500/30 text-green-400'
              : 'bg-red-500/20 border border-red-500/30 text-red-400'
          }`}
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
