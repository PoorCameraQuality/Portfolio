import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch to discuss your next project or just say hello.',
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@braxcraft.com',
    link: 'mailto:hello@braxcraft.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Shippensburg, PA',
    link: null,
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: 'Within 24 hours',
    link: null,
  },
]

export default function ContactPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="section bg-bg">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h1 className="h1 text-text-primary mb-6">
              Let's Get Your Business Online
            </h1>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              Book a free consultation to talk about your business needs. I'll walk you through the best options, 
              give you transparent pricing, and get you set up quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <div className="card">
                <h2 className="h2 text-text-primary mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="h2 text-text-primary mb-6">
                  Get In Touch
                </h2>
                <p className="text-text-primary/80 text-body mb-8">
                  Whether you want me to handle everything or just give your team the tools to run the site, 
                  I'll make the process easy. Let's discuss how we can work together to create something amazing.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="text-text-primary font-semibold mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-text-primary/80 hover:text-brand transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-text-primary/80">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-surface/50 rounded-2xl p-6">
                <h3 className="h3 text-text-primary mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-text-primary/80">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
                    <span>Quick response within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
                    <span>Free consultation — no obligation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
                    <span>Transparent pricing and timelines</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
                    <span>Local support you can count on</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
