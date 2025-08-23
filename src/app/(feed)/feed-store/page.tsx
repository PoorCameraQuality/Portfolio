import Hero from './_components/Hero'
import CategoryFilter from './_components/CategoryFilter'
import ProductGrid from './_components/ProductGrid'
import { products, categories } from './_data/products'
import { MapPin, Phone, Mail, Clock, Star, Quote, Users, Award, Truck } from 'lucide-react'

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

      {/* Why Choose Us Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Feed Store?</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              We're more than just a store - we're your partners in farming success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Local Expertise</h3>
              <p className="text-muted">Our team has decades of combined farming experience in Central PA.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Fast Delivery</h3>
              <p className="text-muted">Same-day local delivery for urgent needs, next-day for regular orders.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Quality Guaranteed</h3>
              <p className="text-muted">We only stock products we trust for our own farms and animals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category descriptions for SEO */}
      <section className="section">
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

      {/* Testimonials Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Don't just take our word for it - hear from the farmers who trust us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-muted mb-4">
                "The quality of their feed has made a noticeable difference in our egg production. 
                Plus, their delivery service is a lifesaver during busy seasons."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-accent font-semibold text-sm">S</span>
                </div>
                <div>
                  <p className="font-semibold">Sarah Mitchell</p>
                  <p className="text-sm text-muted">Chicken Farmer</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-muted mb-4">
                "Been buying from them for 15 years. Their advice on livestock nutrition 
                has saved me thousands in vet bills over the years."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-accent font-semibold text-sm">M</span>
                </div>
                <div>
                  <p className="font-semibold">Mike Thompson</p>
                  <p className="text-sm text-muted">Cattle Rancher</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-muted mb-4">
                "Great selection of garden supplies and the staff really knows their stuff. 
                They've helped me troubleshoot everything from soil issues to pest problems."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-accent font-semibold text-sm">L</span>
                </div>
                <div>
                  <p className="font-semibold">Lisa Chen</p>
                  <p className="text-sm text-muted">Market Gardener</p>
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
