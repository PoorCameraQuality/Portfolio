import { Metadata } from 'next'
import { 
  Camera, 
  Heart, 
  Star, 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  Image as ImageIcon,
  Users,
  Award,
  CheckCircle,
  Calendar,
  Gift,
  Sparkles
} from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Capture Life Photography - Professional Photography Services',
  description: 'Capturing life\'s precious moments with professional photography services. Weddings, portraits, events, and more in Central Pennsylvania.',
}

const services = [
  {
    icon: Camera,
    title: 'Wedding Photography',
    description: 'Beautiful wedding day memories captured with artistic vision and attention to detail',
    price: 'Starting at $1,200'
  },
  {
    icon: Users,
    title: 'Portrait Sessions',
    description: 'Professional portraits for individuals, families, and corporate headshots',
    price: 'Starting at $150'
  },
  {
    icon: Calendar,
    title: 'Event Coverage',
    description: 'Corporate events, parties, and special occasions professionally documented',
    price: 'Starting at $300'
  },
  {
    icon: Gift,
    title: 'Newborn & Family',
    description: 'Precious moments with newborns and growing families preserved forever',
    price: 'Starting at $200'
  }
]

const portfolio = [
  {
    category: 'Weddings',
    title: 'Sarah & Mike\'s Wedding',
    description: 'A beautiful outdoor ceremony at the historic barn venue',
    image: '/api/placeholder/400/300'
  },
  {
    category: 'Portraits',
    title: 'Johnson Family',
    description: 'Fall family session in the local park',
    image: '/api/placeholder/400/300'
  },
  {
    category: 'Events',
    title: 'Tech Startup Launch',
    description: 'Corporate event photography for local startup',
    image: '/api/placeholder/400/300'
  },
  {
    category: 'Newborn',
    title: 'Baby Emma',
    description: 'Sweet newborn session in natural light',
    image: '/api/placeholder/400/300'
  },
  {
    category: 'Weddings',
    title: 'Emily & David\'s Reception',
    description: 'Elegant reception at the country club',
    image: '/api/placeholder/400/300'
  },
  {
    category: 'Portraits',
    title: 'Senior Photos',
    description: 'High school senior portrait session',
    image: '/api/placeholder/400/300'
  }
]

const testimonials = [
  {
    name: 'Jennifer & Tom Wilson',
    event: 'Wedding Photography',
    text: 'Sarah captured our wedding day perfectly! Her attention to detail and artistic eye gave us memories we\'ll treasure forever.',
    rating: 5
  },
  {
    name: 'The Martinez Family',
    event: 'Family Portraits',
    text: 'Our family photos turned out amazing! Sarah made us all feel comfortable and captured our personalities perfectly.',
    rating: 5
  },
  {
    name: 'Lisa Chen',
    event: 'Corporate Headshots',
    text: 'Professional, efficient, and the results exceeded my expectations. Highly recommend for business photography!',
    rating: 5
  }
]

const packages = [
  {
    name: 'Essential',
    price: '$150',
    duration: '1 Hour Session',
    features: [
      '10 edited digital images',
      'Online gallery',
      'Print release',
      '2 outfit changes',
      'Delivery in 1 week'
    ],
    popular: false
  },
  {
    name: 'Premium',
    price: '$300',
    duration: '2 Hour Session',
    features: [
      '25 edited digital images',
      'Online gallery',
      'Print release',
      'Unlimited outfit changes',
      'Delivery in 1 week',
      '5 printed 5x7 photos'
    ],
    popular: true
  },
  {
    name: 'Luxury',
    price: '$500',
    duration: 'Full Day Coverage',
    features: [
      '50+ edited digital images',
      'Online gallery',
      'Print release',
      'Unlimited outfit changes',
      'Delivery in 1 week',
      '10 printed 8x10 photos',
      'Custom photo book'
    ],
    popular: false
  }
]

const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '50+', label: 'Weddings Captured' },
  { number: '1000+', label: 'Photos Delivered' },
  { number: '5', label: 'Years Experience' }
]

export default function PhotographyMockup() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-bg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(193,18,31,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,48,73,0.1),transparent_50%)]" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-surface/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Camera className="w-4 h-4 text-brand" />
              <span className="text-text-primary/80 text-sm font-medium">
                Professional Photography
              </span>
            </div>
          </div>

          <h1 className="display text-text-primary mb-6 max-w-4xl mx-auto">
            Capturing Life\'s{' '}
            <span className="gradient-text">Precious Moments</span>
          </h1>

          <p className="lead text-text-primary/80 mb-12 max-w-3xl mx-auto">
            Professional photography services that tell your story with beauty and authenticity. 
            From weddings to portraits, let me capture the moments that matter most.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="btn-primary group">
              View Portfolio
              <ImageIcon className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </button>
            <button className="btn-secondary">
              Book Session
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
                Meet Your{' '}
                <span className="gradient-text">Photographer</span>
              </h2>
              
              <p className="text-text-primary/80 text-body mb-6">
                Hi, I\'m Sarah Mitchell, a passionate photographer with over 5 years of experience 
                capturing life\'s most precious moments. I believe every story deserves to be told 
                beautifully, and I\'m here to help you preserve your memories in stunning detail.
              </p>
              
              <p className="text-text-primary/80 text-body mb-6">
                My approach combines technical expertise with artistic vision, ensuring that every 
                photograph not only looks professional but also captures the genuine emotion and 
                personality of the moment. Whether it\'s your wedding day, family portraits, or 
                a special event, I\'m committed to delivering images you\'ll treasure forever.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, text: 'Award Winning' },
                  { icon: Heart, text: 'Passionate Artist' },
                  { icon: CheckCircle, text: 'Professional' },
                  { icon: Sparkles, text: 'Creative Vision' }
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
                  <Camera className="w-24 h-24 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">Photographer Portrait</p>
                  <p className="text-sm opacity-60">(Mockup placeholder)</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-surface rounded-2xl shadow-large flex items-center justify-center">
                <Heart className="w-12 h-12 text-brand" />
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
              Photography Services
            </h2>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              Professional photography for every special moment in your life.
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
                <p className="text-text-primary/80 text-body mb-4">
                  {service.description}
                </p>
                <div className="text-brand font-semibold">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="h2 text-text-primary mb-6">
              Featured Work
            </h2>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              A glimpse into the moments I\'ve been privileged to capture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="w-full h-64 bg-gradient-to-br from-brand/20 to-brand-accent/20 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <div className="text-center text-text-primary">
                    <ImageIcon className="w-16 h-16 mx-auto mb-2 opacity-60" />
                    <p className="text-sm opacity-60">Portfolio Image</p>
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className="text-brand text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="h3 text-text-primary mb-2">
                  {item.title}
                </h3>
                
                <p className="text-text-primary/80 text-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-bg">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="h2 text-text-primary mb-6">
              Session Packages
            </h2>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              Choose the perfect package for your photography needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`card text-center relative group hover:scale-105 transition-transform duration-300 ${
                  pkg.popular ? 'ring-2 ring-brand' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand text-text-primary px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="h3 text-text-primary mb-2">
                  {pkg.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-3xl font-display font-bold text-brand">
                    {pkg.price}
                  </span>
                  <div className="text-text-primary/60 text-sm">
                    {pkg.duration}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand flex-shrink-0" />
                      <span className="text-text-primary/80 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="h2 text-text-primary mb-6">
              What My Clients Say
            </h2>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              Don\'t just take my word for it - hear from the people I\'ve worked with.
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
                    {testimonial.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="h2 text-text-primary mb-6">
                Let\'s Create Something Beautiful
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Email</h3>
                    <p className="text-text-primary/80">
                      sarah@capturelifephoto.com
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
                      (717) 555-0124
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Studio</h3>
                    <p className="text-text-primary/80">
                      456 Creative Lane<br />
                      Central PA 17000
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
                      Mon-Fri: 10AM - 6PM<br />
                      Sat: 9AM - 4PM<br />
                      Sun: By appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-brand to-brand-accent rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center text-text-primary">
                  <MapPin className="w-24 h-24 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">Studio Location</p>
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
            Ready to Capture Your Story?
          </h2>
          <p className="lead text-text-primary/90 mb-8 max-w-2xl mx-auto">
            Let\'s work together to create beautiful, lasting memories that you\'ll treasure forever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="btn bg-surface text-text-primary hover:bg-surface-secondary hover:scale-105">
              Book Your Session
            </button>
            <button className="btn-secondary">
              View Full Portfolio
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
