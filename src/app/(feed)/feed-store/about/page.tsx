import { MapPin, Phone, Mail, Clock, Truck, Package, Shield, Users, Award, Heart } from 'lucide-react'
import Breadcrumb from '../_components/Breadcrumb'

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'About Us' }]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-accent-2 py-20">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Feed Store</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Serving Central Pennsylvania's farming community with quality products, 
            expert advice, and reliable service since 1985.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-accent">Our Story</h2>
              <div className="space-y-4 text-muted">
                <p>
                  What started as a small family operation in 1985 has grown into Central Pennsylvania's 
                  most trusted source for farm and feed essentials. Founded by the Thompson family, 
                  our store began with a simple mission: provide local farmers with the quality products 
                  they need to succeed.
                </p>
                <p>
                  Over the years, we've expanded our inventory to serve not just traditional farmers, 
                  but also hobby farmers, pet owners, and gardeners. Our commitment to quality and 
                  customer service has never wavered.
                </p>
                <p>
                  Today, we're proud to serve thousands of customers across the region, offering 
                  everything from premium animal feeds to essential farming tools and supplies.
                </p>
              </div>
            </div>
            <div className="bg-surface rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🏡</div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Family Owned & Operated</h3>
              <p className="text-muted">Three generations of farming expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Community First</h3>
              <p className="text-muted">
                We're more than a store - we're part of the community. Supporting local farmers 
                and helping our neighbors succeed is what drives us.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Quality Assured</h3>
              <p className="text-muted">
                Every product we carry meets our high standards. We test, research, and 
                carefully select each item to ensure it serves our customers well.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Expert Service</h3>
              <p className="text-muted">
                Our team brings decades of combined farming experience. We're here to answer 
                questions and provide guidance, not just sell products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              The knowledgeable professionals behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-surface rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white font-bold">
                JT
              </div>
              <h3 className="text-xl font-semibold mb-2 text-accent">John Thompson</h3>
              <p className="text-muted mb-2">Founder & Owner</p>
              <p className="text-sm text-muted">
                40+ years of farming experience. Knows every product and every customer by name.
              </p>
            </div>
            
            <div className="bg-surface rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white font-bold">
                ST
              </div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Sarah Thompson</h3>
              <p className="text-muted mb-2">Operations Manager</p>
              <p className="text-sm text-muted">
                Ensures smooth operations and maintains our high standards of customer service.
              </p>
            </div>
            
            <div className="bg-surface rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white font-bold">
                MT
              </div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Mike Thompson</h3>
              <p className="text-muted mb-2">Product Specialist</p>
              <p className="text-sm text-muted">
                Expert in animal nutrition and farming equipment. Always ready to help with advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-accent text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">38+</div>
              <p className="text-white/80">Years in Business</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <p className="text-white/80">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2,500+</div>
              <p className="text-white/80">Products Available</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="text-white/80">Emergency Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Visit our store or browse our online catalog. Our team is ready to help you 
            find exactly what you need for your farm, pets, or garden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/feed-store#shop" 
              className="btn-primary"
            >
              Shop Now
            </a>
            <a 
              href="/feed-store#contact" 
              className="btn-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Example Site Notice */}
      <section className="bg-yellow-50 border-t border-yellow-200 py-8">
        <div className="container text-center">
          <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              🚧 This is an EXAMPLE SITE for Portfolio Demonstration 🚧
            </h3>
            <p className="text-yellow-700 text-sm">
              This feed store website is a demo created to showcase web development skills. 
              All content, images, and contact information are fictional and for demonstration purposes only.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
