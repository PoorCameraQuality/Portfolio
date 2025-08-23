import Image from 'next/image'

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Wedding Ceremony',
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Family Portrait',
      category: 'Portrait',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Corporate Event',
      category: 'Event',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Senior Session',
      category: 'Portrait',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Product Photography',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Creative Concept',
      category: 'Creative',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
    }
  ]

  return (
    <section className="section bg-surface" id="portfolio">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Browse through my latest work and see how I capture life's beautiful moments 
            through the lens of creativity and passion.
          </p>
        </div>
        
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="portfolio-overlay">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  )
}
