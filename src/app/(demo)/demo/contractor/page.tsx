import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Star, Hammer, Users, Award, Truck, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Local Contractor Demo | Braxcraft Web Design',
  description: 'See how a local contractor website could look with our services. Features project portfolio, quote requests, and service areas.',
}

const services = [
  {
    title: 'Kitchen Remodeling',
    description: 'Complete kitchen renovations with custom cabinets and countertops',
    price: 'Starting at $15,000',
    features: ['Custom Design', 'Quality Materials', 'Timely Completion', 'Warranty Included']
  },
  {
    title: 'Bathroom Remodeling',
    description: 'Modern bathroom designs with luxury fixtures and finishes',
    price: 'Starting at $8,000',
    features: ['Custom Tile Work', 'Plumbing Updates', 'Electrical Work', 'Accessibility Options']
  },
  {
    title: 'Deck & Patio Construction',
    description: 'Outdoor living spaces built to last',
    price: 'Starting at $5,000',
    features: ['Pressure-Treated Lumber', 'Custom Design', 'Built-in Features', 'Maintenance Tips']
  }
]

const projects = [
  {
    title: 'Modern Kitchen Renovation',
    location: 'Shippensburg, PA',
    description: 'Complete kitchen overhaul with quartz countertops and custom cabinetry',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7a3136?w=600&h=400&fit=crop'
  },
  {
    title: 'Luxury Master Bathroom',
    location: 'Chambersburg, PA',
    description: 'Spa-inspired bathroom with walk-in shower and double vanity',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7a3136?w=600&h=400&fit=crop'
  },
  {
    title: 'Outdoor Living Space',
    location: 'Carlisle, PA',
    description: 'Multi-level deck with built-in seating and outdoor kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7a3136?w=600&h=400&fit=crop'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Shippensburg, PA',
    rating: 5,
    text: 'Professional work and excellent communication throughout our kitchen remodel. Highly recommend!'
  },
  {
    name: 'Mike Thompson',
    location: 'Chambersburg, PA',
    rating: 5,
    text: 'Quality workmanship and fair pricing. Our new deck is exactly what we wanted.'
  },
  {
    name: 'Lisa Chen',
    location: 'Carlisle, PA',
    rating: 5,
    text: 'Attention to detail and clean work site. Will definitely use them again for future projects.'
  }
]

export default function ContractorDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#004445] text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-3xl font-bold">Thompson Construction Co.</h1>
              <p className="text-[#f8b400]">Quality Home Improvements Since 1995</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <Phone className="w-5 h-5 mx-auto mb-1" />
                <span className="text-sm">(717) 555-0456</span>
              </div>
              <div className="text-center">
                <MapPin className="w-5 h-5 mx-auto mb-1" />
                <span className="text-sm">Serving Central PA</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#f8b400]/20 to-[#2c786c]/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004445] mb-6">
              Transform Your Home with Expert Craftsmanship
            </h2>
            <p className="text-xl text-[#2c786c] mb-8">
              From kitchen remodels to outdoor living spaces, we bring your vision to life with quality materials and professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="btn-primary text-lg px-8 py-4">
                View Services
              </Link>
              <Link href="#quote" className="btn-secondary text-lg px-8 py-4">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004445] mb-4">Our Services</h2>
            <p className="text-lg text-[#2c786c]">Comprehensive home improvement solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[#004445]">{service.title}</h3>
                <p className="text-[#2c786c] mb-4">{service.description}</p>
                <div className="text-[#f8b400] font-bold text-lg mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-[#2c786c]">
                      <CheckCircle className="w-4 h-4 mr-2 text-[#f8b400]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004445] mb-4">Recent Projects</h2>
            <p className="text-lg text-[#2c786c]">See our work in action</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#004445]">{project.title}</h3>
                  <p className="text-[#f8b400] text-sm mb-2">{project.location}</p>
                  <p className="text-[#2c786c] text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004445] mb-4">What Our Clients Say</h2>
            <p className="text-lg text-[#2c786c]">Satisfied customers across Central Pennsylvania</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#f8b400] fill-current" />
                  ))}
                </div>
                <p className="text-[#2c786c] mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-[#004445]">{testimonial.name}</div>
                  <div className="text-sm text-[#f8b400]">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004445] mb-4">Service Areas</h2>
            <p className="text-lg text-[#2c786c]">Proudly serving Central Pennsylvania</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Shippensburg', 'Chambersburg', 'Carlisle', 'Gettysburg', 'York', 'Lancaster', 'Harrisburg', 'Reading'].map((city) => (
              <div key={city} className="bg-white rounded-lg p-4 text-center shadow-md">
                <MapPin className="w-6 h-6 mx-auto mb-2 text-[#f8b400]" />
                <span className="font-medium text-[#004445]">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request */}
      <section id="quote" className="py-16 bg-[#004445] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your home improvement project. 
            We'll visit your home and provide a detailed estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Request Free Quote
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-8 py-4">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Notice */}
      <div className="bg-[#f8b400] text-white text-center py-4">
        <p className="text-sm">
          This is a demo website showcasing our contractor website design capabilities. 
          <Link href="/contact" className="underline ml-2">Get your own website today!</Link>
        </p>
      </div>
    </div>
  )
}
