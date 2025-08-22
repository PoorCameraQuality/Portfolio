import { Metadata } from 'next'
import { 
  Truck, 
  Leaf, 
  Heart, 
  Star, 
  Phone, 
  MapPin, 
  Clock, 
  ShoppingCart,
  Package,
  Users,
  Award,
  CheckCircle
} from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Green Valley Feed & Supply - Local Feed Store',
  description: 'Your trusted local source for quality feed, supplies, and expert advice for all your farming and livestock needs.',
}

const products = [
  {
    name: 'Premium Horse Feed',
    category: 'Horse Care',
    price: '$24.99',
    image: '/api/placeholder/300/200',
    rating: 4.8,
    reviews: 127
  },
  {
    name: 'Organic Chicken Feed',
    category: 'Poultry',
    price: '$18.99',
    image: '/api/placeholder/300/200',
    rating: 4.9,
    reviews: 89
  },
  {
    name: 'Cattle Mineral Mix',
    category: 'Cattle',
    price: '$32.99',
    image: '/api/placeholder/300/200',
    rating: 4.7,
    reviews: 156
  },
  {
    name: 'Garden Seeds Collection',
    category: 'Garden',
    price: '$14.99',
    image: '/api/placeholder/300/200',
    rating: 4.6,
    reviews: 203
  }
]

const services = [
  {
    icon: Truck,
    title: 'Local Delivery',
    description: 'Free delivery within 25 miles for orders over $100'
  },
  {
    icon: Leaf,
    title: 'Organic Options',
    description: 'Wide selection of organic and non-GMO feed products'
  },
  {
    icon: Heart,
    title: 'Expert Advice',
    description: 'Get personalized recommendations from our experienced staff'
  },
  {
    icon: Package,
    title: 'Bulk Orders',
    description: 'Special pricing for farmers and large orders'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    farm: 'Maple Ridge Farm',
    text: 'Green Valley has been our go-to for quality feed for over 10 years. Their staff knows exactly what our animals need.',
    rating: 5
  },
  {
    name: 'Mike Thompson',
    farm: 'Thompson Ranch',
    text: 'Best prices in the county and they always have what we need in stock. Highly recommend!',
    rating: 5
  },
  {
    name: 'Lisa Chen',
    farm: 'Chen Family Farm',
    text: 'The organic feed selection is amazing and their delivery service saves us so much time.',
    rating: 5
  }
]

const stats = [
  { number: '25+', label: 'Years in Business' },
  { number: '500+', label: 'Happy Customers' },
  { number: '1000+', label: 'Products Available' },
  { number: '25', label: 'Mile Delivery Radius' }
]

export default function FeedStoreMockup() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-bg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,0,0,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,48,73,0.1),transparent_50%)]" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-surface/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Leaf className="w-4 h-4 text-brand" />
              <span className="text-text-primary/80 text-sm font-medium">
                Since 1998
              </span>
            </div>
          </div>

          <h1 className="display text-text-primary mb-6 max-w-4xl mx-auto">
            Quality Feed & Supplies for{' '}
            <span className="gradient-text">Local Farmers</span>
          </h1>

          <p className="lead text-text-primary/80 mb-12 max-w-3xl mx-auto">
            Your trusted local source for premium feed, farming supplies, and expert advice. 
            Serving Central Pennsylvania with quality products and personalized service for over 25 years.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="btn-primary group">
              Shop Now
              <ShoppingCart className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </button>
            <button className="btn-secondary">
              Call for Quote
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-display font-bold text-brand mb-2">
                  {stat.number}
                </div>
                <div className="text-text-primary/60 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="h2 text-text-primary mb-6">
                Your Local{' '}
                <span className="gradient-text">Farming Partner</span>
              </h2>
              
              <p className="text-text-primary/80 text-body mb-6">
                At Green Valley Feed & Supply, we understand that quality feed and supplies are essential 
                for your farm's success. That's why we've been sourcing the best products from trusted 
                manufacturers for over 25 years.
              </p>
              
              <p className="text-text-primary/80 text-body mb-6">
                Our experienced staff includes former farmers and agricultural experts who can provide 
                personalized recommendations for your specific needs. Whether you're raising horses, 
                cattle, poultry, or growing a garden, we have the products and knowledge to help you succeed.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, text: 'Quality Guaranteed' },
                  { icon: Users, text: 'Expert Staff' },
                  { icon: Truck, text: 'Local Delivery' },
                  { icon: Heart, text: 'Family Owned' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand/20 rounded-lg flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-brand" />
                    </div>
                    <span className="text-text-primary/80 text-sm font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-brand to-brand-accent rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center text-text-primary">
                  <Leaf className="w-24 h-24 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">Feed Store Image</p>
                  <p className="text-sm opacity-60">(Mockup placeholder)</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-surface rounded-2xl shadow-large flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-brand" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-bg">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="h2 text-text-primary mb-6">
              Why Choose Green Valley?
            </h2>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              We go beyond just selling products - we're your partners in farming success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand/30 transition-colors">
                  <service.icon className="w-8 h-8 text-brand" />
                </div>
                <h3 className="h3 text-text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-text-primary/80 text-body">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="h2 text-text-primary mb-6">
              Popular Products
            </h2>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              Quality feed and supplies for all your farming needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-brand/20 to-brand-accent/20 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center text-text-primary">
                    <Package className="w-16 h-16 mx-auto mb-2 opacity-60" />
                    <p className="text-sm opacity-60">Product Image</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="text-brand text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="h3 text-text-primary mb-3">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-text-primary/30'}`} 
                      />
                    ))}
                    <span className="text-text-primary/60 text-sm ml-2">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-brand font-bold text-lg">
                    {product.price}
                  </span>
                </div>
                
                <button className="w-full btn-primary">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-bg">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="h2 text-text-primary mb-6">
              What Our Customers Say
            </h2>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              Trusted by local farmers for over 25 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
                
                <p className="text-text-primary/80 text-body mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <div className="font-semibold text-text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-text-primary/60 text-sm">
                    {testimonial.farm}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="h2 text-text-primary mb-6">
                Visit Our Store
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Address</h3>
                    <p className="text-text-primary/80">
                      123 Farm Road<br />
                      Central PA 17000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Phone</h3>
                    <p className="text-text-primary/80">
                      (717) 555-0123
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Hours</h3>
                    <p className="text-text-primary/80">
                      Mon-Fri: 7AM - 6PM<br />
                      Sat: 8AM - 4PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-brand to-brand-accent rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center text-text-primary">
                  <MapPin className="w-24 h-24 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">Store Location</p>
                  <p className="text-sm opacity-60">(Map placeholder)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand">
        <div className="container text-center">
          <h2 className="h2 text-text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="lead text-text-primary/90 mb-8 max-w-2xl mx-auto">
            Visit our store today or call us for a quote. We're here to help your farm succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="btn bg-surface text-text-primary hover:bg-surface-secondary hover:scale-105">
              Visit Store
            </button>
            <button className="btn-secondary">
              Call Now
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
