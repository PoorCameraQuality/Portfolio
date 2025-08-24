import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: "Contact | CheapLocalWebsites.com",
  description: "Let's get your business online for $15/mo.",
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@cheaplocalwebsites.com',
    link: 'mailto:hello@cheaplocalwebsites.com',
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
      <section className="section">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h1 className="h1 mb-6">
              Let's get your business online for $15/mo
            </h1>
            <p className="lead max-w-2xl mx-auto">
              Tell me about your business — I'll handle the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <div className="card p-6 lg:p-8">
                <h2 className="h2 mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="h2 mb-6">
                  Get In Touch
                </h2>
                <p className="text-body mb-8 text-muted">
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
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--cream)' }}>
                      <info.icon className="w-6 h-6" style={{ color: 'var(--sage)' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="transition-colors hover:text-[var(--sage)] text-muted"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="card p-6" style={{ backgroundColor: 'var(--cream)' }}>
                <h3 className="h3 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--sage)' }} />
                    <span>Quick replies (within 24 hours)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--sage)' }} />
                    <span>Free consultation — no obligation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--sage)' }} />
                    <span>Flat monthly cost, no hidden fees</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--sage)' }} />
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
