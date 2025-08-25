import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Star, Utensils, Users, Award, Truck } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Local Restaurant Demo | Braxcraft Web Design',
  description: 'See how a local restaurant website could look with our services. Features online menu, reservations, and delivery options.',
}

const menuItems = [
  {
    category: 'Appetizers',
    items: [
      { name: 'Bruschetta', price: '$8.99', description: 'Fresh tomatoes, basil, and mozzarella on toasted bread' },
      { name: 'Calamari', price: '$12.99', description: 'Crispy fried squid with marinara sauce' },
      { name: 'Spinach Artichoke Dip', price: '$10.99', description: 'Creamy dip served with tortilla chips' }
    ]
  },
  {
    category: 'Main Courses',
    items: [
      { name: 'Grilled Salmon', price: '$24.99', description: 'Atlantic salmon with seasonal vegetables and rice' },
      { name: 'Beef Tenderloin', price: '$28.99', description: '8oz tenderloin with garlic mashed potatoes' },
      { name: 'Chicken Marsala', price: '$22.99', description: 'Pan-seared chicken in marsala wine sauce' }
    ]
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Tiramisu', price: '$8.99', description: 'Classic Italian dessert with coffee and mascarpone' },
      { name: 'Chocolate Lava Cake', price: '$9.99', description: 'Warm chocolate cake with molten center' }
    ]
  }
]

const hours = [
  { day: 'Monday - Thursday', hours: '11:00 AM - 9:00 PM' },
  { day: 'Friday - Saturday', hours: '11:00 AM - 10:00 PM' },
  { day: 'Sunday', hours: '12:00 PM - 8:00 PM' }
]

export default function RestaurantDemoPage() {
  return (
    <div className="min-h-screen bg-[#faf5e4]">
      {/* Header */}
      <header className="bg-[#004445] text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-3xl font-bold">Bella Vista Ristorante</h1>
              <p className="text-[#f8b400]">Authentic Italian Cuisine</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <Phone className="w-5 h-5 mx-auto mb-1" />
                <span className="text-sm">(717) 555-0123</span>
              </div>
              <div className="text-center">
                <MapPin className="w-5 h-5 mx-auto mb-1" />
                <span className="text-sm">123 Main St, Shippensburg</span>
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
              Experience Authentic Italian Dining
            </h2>
            <p className="text-xl text-[#2c786c] mb-8">
              From traditional pasta dishes to wood-fired pizzas, every meal is crafted with passion and the finest ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#menu" className="btn-primary text-lg px-8 py-4">
                View Menu
              </Link>
              <Link href="#reservations" className="btn-secondary text-lg px-8 py-4">
                Make Reservation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#f8b400] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#004445]">Fresh Ingredients</h3>
              <p className="text-[#2c786c]">Locally sourced produce and authentic Italian imports</p>
            </div>
            <div className="text-center">
              <div className="bg-[#2c786c] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#004445]">Family Atmosphere</h3>
              <p className="text-[#2c786c]">Warm, welcoming environment for all occasions</p>
            </div>
            <div className="text-center">
              <div className="bg-[#f8b400] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#004445]">Delivery Available</h3>
              <p className="text-[#2c786c]">Local delivery within 10 miles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-[#faf5e4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004445] mb-4">Our Menu</h2>
            <p className="text-lg text-[#2c786c]">Discover our authentic Italian dishes</p>
          </div>
          
          <div className="space-y-12">
            {menuItems.map((category) => (
              <div key={category.category}>
                <h3 className="text-2xl font-semibold text-[#004445] mb-6 text-center">{category.category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="bg-white rounded-lg p-6 shadow-md">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-[#004445]">{item.name}</h4>
                        <span className="text-[#f8b400] font-bold">{item.price}</span>
                      </div>
                      <p className="text-[#2c786c] text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#004445] mb-6">Hours</h2>
              <div className="space-y-3">
                {hours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-[#2c786c]">{schedule.day}</span>
                    <span className="text-[#004445]">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#004445] mb-6">Location</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#f8b400]" />
                  <span className="text-[#2c786c]">123 Main Street, Shippensburg, PA 17257</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#f8b400]" />
                  <span className="text-[#2c786c]">(717) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#f8b400]" />
                  <span className="text-[#2c786c]">info@bellavista.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#004445] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want a website like this for your restaurant?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a professional restaurant website with online menu, reservations, and delivery options. 
            Starting at $15/month with full setup included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Free Consultation
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
          This is a demo website showcasing our restaurant website design capabilities. 
          <Link href="/contact" className="underline ml-2">Get your own website today!</Link>
        </p>
      </div>
    </div>
  )
}
