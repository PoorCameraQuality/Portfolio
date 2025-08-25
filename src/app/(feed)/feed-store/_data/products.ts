export interface Product {
  slug: string
  title: string
  price: number
  category: string
  image: string
  externalUrl: string
  description?: string
  features?: string[]
}

export const products: Product[] = [
  // Local Services
  {
    slug: "website-design-basic",
    title: "Basic Business Website",
    price: 299,
    category: "Web Services",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=400&fit=crop",
    externalUrl: "/contact",
    description: "Professional website for small local businesses",
    features: ["5 custom pages", "Mobile responsive", "Contact forms", "Google Maps integration"]
  },
  {
    slug: "website-design-premium",
    title: "Premium Business Website",
    price: 599,
    category: "Web Services",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    externalUrl: "/contact",
    description: "Advanced website with e-commerce and booking capabilities",
    features: ["10+ custom pages", "Online ordering", "Appointment booking", "SEO optimization"]
  },
  {
    slug: "website-maintenance",
    title: "Monthly Website Maintenance",
    price: 49,
    category: "Web Services",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
    externalUrl: "/contact",
    description: "Keep your website updated and secure",
    features: ["Content updates", "Security monitoring", "Backup management", "Performance optimization"]
  },

  // Local Business Examples
  {
    slug: "local-restaurant",
    title: "Local Restaurant Website",
    price: 399,
    category: "Business Examples",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop",
    externalUrl: "/demo/restaurant",
    description: "Complete website for local restaurants and cafes",
    features: ["Online menu", "Reservation system", "Food delivery", "Customer reviews"]
  },
  {
    slug: "local-salon",
    title: "Local Salon Website",
    price: 399,
    category: "Business Examples",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
    externalUrl: "/demo/salon",
    description: "Professional website for beauty and wellness businesses",
    features: ["Service showcase", "Online booking", "Portfolio gallery", "Price lists"]
  },
  {
    slug: "local-contractor",
    title: "Local Contractor Website",
    price: 399,
    category: "Business Examples",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop",
    externalUrl: "/demo/contractor",
    description: "Website for construction and home service businesses",
    features: ["Project portfolio", "Quote requests", "Service areas", "Customer testimonials"]
  }
]

export const categories = [
  "All",
  "Web Services",
  "Business Examples"
]

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") {
    return products
  }
  return products.filter(product => product.category === category)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug)
}
