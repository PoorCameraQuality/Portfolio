import { DemoOnePager } from '@/lib/demo/types'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

interface ContactStripProps {
  onepager: DemoOnePager
}

export default function ContactStrip({ onepager }: ContactStripProps) {
  const hasContactInfo = onepager.phone || onepager.email || onepager.address

  if (!hasContactInfo) {
    return null
  }

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
              <a href={`tel:${onepager.phone}`} className="contact-btn">
                <Phone className="w-5 h-5" />
                Call {onepager.phone}
              </a>
            )}
            
            {onepager.email && (
              <a href={`mailto:${onepager.email}`} className="contact-btn">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            )}
            
            {onepager.address && onepager.mapsUrl && (
              <a href={onepager.mapsUrl} className="contact-btn secondary" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5" />
                Get Directions
                <ExternalLink className="w-4 h-4" />
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
        </div>
      </div>
    </section>
  )
}
