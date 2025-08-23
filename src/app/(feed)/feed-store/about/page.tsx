import { MapPin, Phone, Mail, Clock, Users, Award, Truck, Heart, Leaf, Shield, CheckCircle } from 'lucide-react'
import Breadcrumb from '../_components/Breadcrumb'

export default function FeedStoreAboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'About Us' }]} />
      
      {/* Hero Section */}
      <section className="section grain-bg relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004445' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>
        
        <div className="container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#004445]">About Our Feed Store</h1>
          <p className="text-lg md:text-xl text-[#2c786c] max-w-3xl mx-auto">
            Serving Central Pennsylvania's farming community since 1985
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#004445]">Our Story</h2>
              <p className="text-lg text-[#2c786c] mb-6">
                What started as a small family operation has grown into Central Pennsylvania's most trusted 
                source for farm and feed supplies. Founded by the Thompson family in 1985, we've been 
                helping local farmers succeed for over three decades.
              </p>
              <p className="text-lg text-[#2c786c] mb-6">
                Our journey began when Grandpa Thompson realized that local farmers needed a reliable source 
                for quality feed and supplies. What started with just a few products has grown into a 
                comprehensive selection that serves every aspect of modern farming.
              </p>
              <p className="text-lg text-[#2c786c]">
                Today, we're proud to serve over 500 local farms and continue the tradition of quality, 
                service, and community that Grandpa Thompson started all those years ago.
              </p>
            </div>
            <div className="bg-surface rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f8b400]/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-[#f8b400]">1985</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#004445]">Store Founded</h3>
                    <p className="text-sm text-[#2c786c]">Started as a small family operation</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f8b400]/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-[#f8b400]">1995</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#004445]">Expanded Selection</h3>
                    <p className="text-sm text-[#2c786c]">Added garden and pet supplies</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f8b400]/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-[#f8b400]">2005</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#004445]">Delivery Service</h3>
                    <p className="text-sm text-[#2c786c]">Launched local delivery program</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f8b400]/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-[#f8b400]">2020</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#004445]">Online Store</h3>
                    <p className="text-sm text-[#2c786c]">Added e-commerce capabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#004445]">Our Values</h2>
            <p className="text-lg text-[#2c786c] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f8b400]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#f8b400]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#2c786c]">Community First</h3>
              <p className="text-[#2c786c]">We're not just a store - we're part of the farming community. We support local events, sponsor 4-H programs, and give back to the community that supports us.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f8b400]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-[#f8b400]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#2c786c]">Sustainable Practices</h3>
              <p className="text-[#2c786c]">We're committed to environmental responsibility, offering eco-friendly products and working with suppliers who share our values.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f8b400]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#f8b400]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#2c786c]">Quality Guaranteed</h3>
              <p className="text-[#2c786c]">Every product we carry meets our high standards. If you're not satisfied, we'll make it right - no questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#004445]">Meet Our Team</h2>
            <p className="text-lg text-[#2c786c] max-w-2xl mx-auto">
              The knowledgeable people behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#f8b400]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#f8b400]">J</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#004445]">John Thompson</h3>
              <p className="text-[#f8b400] font-medium mb-2">Owner & Founder</p>
              <p className="text-[#2c786c] text-sm">John has been farming for over 40 years and knows what local farmers need. He's the heart of our operation.</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#f8b400]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#f8b400]">S</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#004445]">Sarah Thompson</h3>
              <p className="text-[#f8b400] font-medium mb-2">Store Manager</p>
              <p className="text-[#2c786c] text-sm">Sarah runs the day-to-day operations and ensures every customer gets the attention they deserve.</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#f8b400]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#f8b400]">M</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#004445]">Mike Rodriguez</h3>
              <p className="text-[#f8b400] font-medium mb-2">Livestock Specialist</p>
              <p className="text-[#2c786c] text-sm">Mike's expertise in animal nutrition helps farmers make the best choices for their livestock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#004445]">Visit Us Today</h2>
            <p className="text-lg text-[#2c786c] max-w-2xl mx-auto">
              Stop by and see why we're Central Pennsylvania's favorite feed store
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#f8b400]">Store Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#f8b400] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-[#004445]">Address</h4>
                    <p className="text-[#2c786c]">123 Farm Road<br />Central PA 17000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#f8b400] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-[#004445]">Phone</h4>
                    <p className="text-[#2c786c]">(717) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#f8b400] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-[#004445]">Email</h4>
                    <p className="text-[#2c786c]">info@feedstore.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-[#f8b400] mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-[#004445]">Store Hours</h4>
                    <div className="text-[#2c786c]">
                      <p>Monday - Friday: 7AM - 6PM</p>
                      <p>Saturday: 8AM - 4PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-surface rounded-lg p-8 border border-[#2c786c]">
              <h3 className="text-2xl font-semibold mb-6 text-[#f8b400]">Special Services</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#f8b400] mr-3" />
                  <span className="text-[#2c786c]">Bulk order discounts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#f8b400] mr-3" />
                  <span className="text-[#2c786c]">Local delivery service</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#f8b400] mr-3" />
                  <span className="text-[#2c786c]">Expert farming advice</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#f8b400] mr-3" />
                  <span className="text-[#2c786c]">Product demonstrations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#f8b400] mr-3" />
                  <span className="text-[#2c786c]">Loyalty rewards program</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
