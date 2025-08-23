import { MapPin, Phone, Mail } from 'lucide-react'
import type { Onepager } from '../_data/onepagers'

interface ContactStripProps {
  onepager: Onepager
}

export default function ContactStrip({ onepager }: ContactStripProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="contact-strip">
          <h2>Get In Touch</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Ready to get started? Here's how to reach us.
          </p>
          
          <div className="contact-buttons">
            {onepager.phone && (
              <a href={`tel:${onepager.phone}`} className="btn-primary">
                <Phone className="w-4 h-4 mr-2" />
                Call {onepager.phone}
              </a>
            )}
            
            {onepager.email && (
              <a href={`mailto:${onepager.email}`} className="btn-secondary">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
            )}
          </div>
          
          {onepager.address && (
            <div className="mt-6 text-center">
              <p className="text-muted">
                <MapPin className="w-4 h-4 inline mr-2" />
                {onepager.address}
              </p>
            </div>
          )}

          <div className="mt-8">
            <a
              href="https://cheaplocalwebsites.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Want a site like this? $15/mo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
