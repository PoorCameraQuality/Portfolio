import { Check } from 'lucide-react'

export default function Pricing() {
  const packages = [
    {
      name: 'Basic Session',
      price: 150,
      description: 'Perfect for simple portrait sessions and small events',
      features: [
        '1-2 hour session',
        '20 edited photos',
        'Online gallery',
        'Digital delivery',
        'Basic editing'
      ],
      featured: false
    },
    {
      name: 'Standard Package',
      price: 350,
      description: 'Most popular choice for portraits and special occasions',
      features: [
        '2-3 hour session',
        '50 edited photos',
        'Online gallery',
        'Digital delivery',
        'Professional editing',
        'Print recommendations',
        '1 location change'
      ],
      featured: true
    },
    {
      name: 'Premium Collection',
      price: 750,
      description: 'Comprehensive coverage for weddings and major events',
      features: [
        'Full day coverage',
        '100+ edited photos',
        'Online gallery',
        'Digital delivery',
        'Professional editing',
        'Print rights',
        'Multiple locations',
        'Wedding album design',
        'Engagement session included'
      ],
      featured: false
    }
  ]

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pricing & Packages</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Transparent pricing for all your photography needs. Choose the package that best fits 
            your vision and budget.
          </p>
        </div>
        
        <div className="pricing-grid">
          {packages.map((pkg, index) => (
            <div key={index} className={`price-card ${pkg.featured ? 'featured' : ''}`}>
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-muted mb-6">{pkg.description}</p>
              
              <div className="mb-8">
                <span className="price">${pkg.price}</span>
                <span className="text-muted">/session</span>
              </div>
              
              <ul className="space-y-3 mb-8 text-left">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`w-full inline-block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  pkg.featured 
                    ? 'bg-accent text-white hover:bg-accent/90' 
                    : 'bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-white'
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted mb-4">
            Don't see a package that fits your needs? Let's create a custom solution together.
          </p>
          <a href="#contact" className="btn-secondary">
            Custom Quote
          </a>
        </div>
      </div>
    </section>
  )
}
