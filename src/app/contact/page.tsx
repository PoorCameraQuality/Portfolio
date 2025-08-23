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
    <main className="pt-32" style={{ backgroundColor: '#d3d6db' }}>
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h1 className="h1 mb-6" style={{ color: '#303841' }}>
              Let's get your business online for $15/mo
            </h1>
            <p className="lead max-w-2xl mx-auto" style={{ color: '#3a4750' }}>
              Tell me about your business — I'll handle the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <div className="rounded-2xl shadow-medium p-6 lg:p-8" style={{ backgroundColor: 'white', border: '1px solid rgba(58, 71, 80, 0.2)' }}>
                <h2 className="h2 mb-6" style={{ color: '#303841' }}>
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="h2 mb-6" style={{ color: '#303841' }}>
                  Get In Touch
                </h2>
                <p className="text-body mb-8" style={{ color: '#3a4750' }}>
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
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#f8f9fa' }}>
                      <info.icon className="w-6 h-6" style={{ color: '#be3144' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: '#303841' }}>
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="transition-colors hover:text-[#be3144]"
                          style={{ color: '#3a4750' }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p style={{ color: '#3a4750' }}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="rounded-2xl p-6" style={{ backgroundColor: 'rgba(248, 249, 250, 0.5)' }}>
                <h3 className="h3 mb-4" style={{ color: '#303841' }}>
                  What to Expect
                </h3>
                <ul className="space-y-3" style={{ color: '#3a4750' }}>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#be3144' }} />
                    <span>Quick replies (within 24 hours)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#be3144' }} />
                    <span>Free consultation — no obligation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#be3144' }} />
                    <span>Flat monthly cost, no hidden fees</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#be3144' }} />
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
