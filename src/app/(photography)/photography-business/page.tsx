import Hero from './_components/Hero'
import Services from './_components/Services'
import Portfolio from './_components/Portfolio'
import Pricing from './_components/Pricing'
import Testimonials from './_components/Testimonials'
import Stats from './_components/Stats'
import { MapPin, Phone, Mail, Instagram, Clock, HelpCircle, CheckCircle, Camera, Heart, Award } from 'lucide-react'

export default function PhotographyBusinessPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "CheapLocalWebsites.com Photography Demo",
            "url": "https://cheaplocalwebsites.com/photography-business",
            "description": "Demo photography site — see how a local photography business could look online for $15/month.",
            "areaServed": "Central Pennsylvania",
            "serviceType": ["Wedding Photography", "Portrait Photography", "Event Photography"]
          })
        }}
      />
      
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      
      {/* Process Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="h2 text-text-primary mb-4">How I Work</h2>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              A simple, stress-free process to capture your perfect moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand">1</span>
              </div>
              <h3 className="h3 text-text-primary mb-3">Consultation</h3>
              <p className="text-text-primary/80">We discuss your vision, location preferences, and any special requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand">2</span>
              </div>
              <h3 className="h3 text-text-primary mb-3">Planning</h3>
              <p className="text-text-primary/80">I'll scout locations, plan timing, and prepare for the perfect lighting conditions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand">3</span>
              </div>
              <h3 className="h3 text-text-primary mb-3">Shoot</h3>
              <p className="text-text-primary/80">Relax and enjoy the session while I capture authentic, beautiful moments.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand">4</span>
              </div>
              <h3 className="h3 text-text-primary mb-3">Delivery</h3>
              <p className="text-text-primary/80">Receive your professionally edited photos within 2-3 weeks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="h2 text-text-primary mb-4">Frequently Asked Questions</h2>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              Common questions about my photography services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-surface-light rounded-lg p-6 border border-surface-light/30">
              <div className="flex items-start">
                <HelpCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">How far in advance should I book?</h3>
                  <p className="text-text-primary/80">For weddings, I recommend booking 6-12 months in advance. For portraits and events, 2-4 weeks notice is usually sufficient. I do occasionally have last-minute availability.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-light rounded-lg p-6 border border-surface-light/30">
              <div className="flex items-start">
                <HelpCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">What's included in your packages?</h3>
                  <p className="text-text-primary/80">All packages include the photo session, professional editing, and digital delivery. Print packages include additional items like prints, albums, and wall art. I'm happy to customize packages to fit your needs.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-light rounded-lg p-6 border border-surface-light/30">
              <div className="flex items-start">
                <HelpCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">Do you travel for sessions?</h3>
                  <p className="text-text-primary/80">Yes! I'm based in Central Pennsylvania but travel throughout the region. Travel fees apply for locations more than 30 miles from my base. For destination weddings, I love to travel and can provide custom quotes.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-light rounded-lg p-6 border border-surface-light/30">
              <div className="flex items-start">
                <HelpCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">How long does editing take?</h3>
                  <p className="text-text-primary/80">Portrait sessions are typically ready in 1-2 weeks. Weddings and events take 2-3 weeks due to the larger number of photos. I'll provide a few preview images within 48 hours of your session.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-light rounded-lg p-6 border border-surface-light/30">
              <div className="flex items-start">
                <HelpCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">Can I get the raw photos?</h3>
                  <p className="text-text-primary/80">I don't provide raw photos as they don't represent my final work. However, I'm happy to discuss any specific editing preferences you have, and I always provide both color and black & white versions of your favorites.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Create Something Beautiful</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Ready to capture your special moments? Get in touch to discuss your photography needs 
              and start planning your perfect session.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted">Central Pennsylvania<br />Serving the entire region</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted">(717) 555-0124</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted">hello@capturelifephoto.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="w-6 h-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Instagram</h4>
                    <p className="text-muted">@capturelifephoto</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Availability</h4>
                    <div className="text-muted">
                      <p>Weekdays: 9AM - 6PM</p>
                      <p>Weekends: Available</p>
                      <p>By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                <h4 className="font-semibold mb-2 text-accent">Quick Response</h4>
                <p className="text-sm text-muted">
                  I typically respond to inquiries within 24 hours. For urgent requests, 
                  feel free to call directly.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-surface rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Send Me a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interest</label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="event">Event Photography</option>
                    <option value="commercial">Commercial Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2">Preferred Date (Optional)</label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Tell Me About Your Project</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Describe what you're looking for, any specific ideas, or questions you have..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary py-3"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
