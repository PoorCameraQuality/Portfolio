import Hero from './_components/Hero'
import CategoryFilter from './_components/CategoryFilter'
import ProductGrid from './_components/ProductGrid'
import { products, categories } from './_data/products'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function FeedStorePage() {
  return (
    <>
      <Hero />
      
      <section className="section" id="shop">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Find everything you need for your farm, pets, and garden
            </p>
          </div>
          
          <CategoryFilter categories={categories} />
          <ProductGrid products={products} />
        </div>
      </section>

      {/* Category descriptions for SEO */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Poultry</h3>
              <p className="text-muted">Feeds and grit to keep your flock healthy and productive.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Livestock</h3>
              <p className="text-muted">Daily nutrition and barn supplies built for hard work.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Pet</h3>
              <p className="text-muted">Kibble, treats, and basics for the animals that feel like family.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Fencing</h3>
              <p className="text-muted">Practical fencing and hardware to keep things where they belong.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Tools</h3>
              <p className="text-muted">Reliable tools and gloves for chores and upkeep.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Garden</h3>
              <p className="text-muted">Soil, seed, and simple gear for this season's projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Have questions? Need advice? We're here to help with all your farming and pet care needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent">Visit Our Store</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-muted">123 Farm Road<br />Central PA 17000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted">(717) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted">info@feedstore.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Store Hours</h4>
                    <div className="text-muted">
                      <p>Monday - Friday: 7AM - 6PM</p>
                      <p>Saturday: 8AM - 4PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-surface rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Send Us a Message</h3>
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
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="advice">Farming Advice</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="delivery">Delivery Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Tell us how we can help..."
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
