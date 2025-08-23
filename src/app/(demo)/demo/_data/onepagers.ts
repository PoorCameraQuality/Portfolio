export interface Onepager {
  slug: string
  title: string
  tagline: string
  category: string
  city: string
  heroImage: string
  features: string[]
  gallery: string[]
  phone?: string
  email?: string
  address?: string
  ctaLabel?: string
  ctaHref?: string
}

export const onepagers: Onepager[] = [
  {
    slug: 'elegant-salon',
    title: 'Elegant Salon & Spa',
    tagline: 'Professional beauty services in a relaxing atmosphere',
    category: 'Beauty & Wellness',
    city: 'Harrisburg, PA',
    heroImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
    features: [
      'Hair styling & coloring',
      'Manicures & pedicures',
      'Facial treatments',
      'Massage therapy',
      'Bridal party packages',
      'Gift certificates available'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
    ],
    phone: '(717) 555-0123',
    email: 'info@elegantsalon.com',
    address: '123 Main Street, Harrisburg, PA 17101',
    ctaLabel: 'Book Appointment',
    ctaHref: '#contact'
  },
  {
    slug: 'cozy-cafe',
    title: 'Cozy Corner Café',
    tagline: 'Fresh coffee, homemade pastries, and warm hospitality',
    category: 'Food & Beverage',
    city: 'Lancaster, PA',
    heroImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop',
    features: [
      'Artisan coffee & espresso',
      'Fresh-baked pastries daily',
      'Local ingredient sourcing',
      'Free WiFi for customers',
      'Outdoor seating available',
      'Catering services'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop'
    ],
    phone: '(717) 555-0456',
    email: 'hello@cozycorner.com',
    address: '456 Oak Avenue, Lancaster, PA 17601',
    ctaLabel: 'View Menu',
    ctaHref: '#gallery'
  },
  {
    slug: 'green-thumb-landscaping',
    title: 'Green Thumb Landscaping',
    tagline: 'Transforming outdoor spaces with creativity and care',
    category: 'Home & Garden',
    city: 'York, PA',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    features: [
      'Landscape design & installation',
      'Lawn maintenance services',
      'Tree trimming & removal',
      'Garden design & planting',
      'Hardscaping & patios',
      'Seasonal cleanups'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop'
    ],
    phone: '(717) 555-0789',
    email: 'info@greenthumb.com',
    address: '789 Garden Lane, York, PA 17401',
    ctaLabel: 'Get Free Estimate',
    ctaHref: '#contact'
  },
  {
    slug: 'reliable-electric',
    title: 'Reliable Electric Services',
    tagline: 'Professional electrical work you can trust',
    category: 'Home Services',
    city: 'Reading, PA',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
    features: [
      'Residential electrical work',
      'Commercial installations',
      'Emergency repairs 24/7',
      'Electrical inspections',
      'LED lighting upgrades',
      'Generator installations'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop'
    ],
    phone: '(717) 555-0321',
    email: 'service@reliableelectric.com',
    address: '321 Power Street, Reading, PA 19601',
    ctaLabel: 'Schedule Service',
    ctaHref: '#contact'
  },
  {
    slug: 'pet-paradise',
    title: 'Pet Paradise Grooming',
    tagline: 'Pampering your pets with love and expertise',
    category: 'Pet Services',
    city: 'Allentown, PA',
    heroImage: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&h=600&fit=crop',
    features: [
      'Professional pet grooming',
      'Breed-specific styling',
      'Nail trimming & ear cleaning',
      'Flea & tick treatments',
      'Pet photography sessions',
      'Grooming supplies shop'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=400&fit=crop'
    ],
    phone: '(717) 555-0654',
    email: 'grooming@petparadise.com',
    address: '654 Paw Print Way, Allentown, PA 18101',
    ctaLabel: 'Book Grooming',
    ctaHref: '#contact'
  }
]

export function getAllOnepagers(): Onepager[] {
  return onepagers
}

export function getOnepagerBySlug(slug: string): Onepager | undefined {
  return onepagers.find(onepager => onepager.slug === slug)
}
