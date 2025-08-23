import { Camera, Heart, Users, Calendar, Gift, Sparkles } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Capture your special day with elegant, timeless wedding photography. From engagement sessions to the big day.',
      features: ['Full day coverage', 'Engagement session', 'Wedding album', 'Online gallery', 'Print rights']
    },
    {
      icon: Users,
      title: 'Portrait Sessions',
      description: 'Professional portraits for individuals, families, and seniors. Perfect for special occasions and memories.',
      features: ['1-2 hour session', 'Multiple locations', 'Professional editing', 'Digital files', 'Print recommendations']
    },
    {
      icon: Calendar,
      title: 'Event Photography',
      description: 'Corporate events, parties, and special occasions. Professional coverage for your important moments.',
      features: ['Event coverage', 'Professional editing', 'Quick turnaround', 'Online gallery', 'Print options']
    },
    {
      icon: Gift,
      title: 'Special Occasions',
      description: 'Birthdays, anniversaries, graduations, and other milestone celebrations. Make memories last forever.',
      features: ['Custom packages', 'Flexible scheduling', 'Professional editing', 'Digital delivery', 'Print options']
    },
    {
      icon: Camera,
      title: 'Commercial Photography',
      description: 'Product photography, real estate, and business branding. Professional images for your business needs.',
      features: ['Product shots', 'Real estate', 'Business portraits', 'Brand photography', 'Quick delivery']
    },
    {
      icon: Sparkles,
      title: 'Creative Projects',
      description: 'Artistic and creative photography projects. Let\'s bring your vision to life with unique imagery.',
      features: ['Concept development', 'Creative direction', 'Artistic editing', 'Unique style', 'Collaboration']
    }
  ]

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Photography Services</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            From weddings to portraits, I offer a full range of professional photography services 
            to capture your most important moments.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              
              <p className="text-muted mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
