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
  // Poultry
  {
    slug: "purina-layena-40lb",
    title: "Purina Layena Crumbles, 40 lb",
    price: 23.99,
    category: "Poultry",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/purina-layena-layer-crumbles-40-lb",
    description: "Complete layer feed with essential nutrients for egg production",
    features: ["40 lb bag", "Complete nutrition", "Egg production support", "Fresh ingredients"]
  },
  {
    slug: "poultry-grit-5lb",
    title: "Poultry Grit, 5 lb",
    price: 8.99,
    category: "Poultry",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/poultry-grit-5-lb",
    description: "Essential grit for proper digestion in poultry",
    features: ["5 lb bag", "Digestive health", "Natural minerals", "All poultry types"]
  },
  {
    slug: "chicken-feeder-5lb",
    title: "Automatic Chicken Feeder, 5 lb",
    price: 34.99,
    category: "Poultry",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/automatic-chicken-feeder-5-lb",
    description: "Automatic feeder keeps feed fresh and reduces waste",
    features: ["5 lb capacity", "Automatic dispensing", "Weather resistant", "Easy to fill"]
  },

  // Livestock
  {
    slug: "cattle-mineral-50lb",
    title: "Cattle Mineral Mix, 50 lb",
    price: 45.99,
    category: "Livestock",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/cattle-mineral-mix-50-lb",
    description: "Complete mineral supplement for cattle health and production",
    features: ["50 lb bag", "Complete minerals", "Cattle specific", "Production support"]
  },
  {
    slug: "horse-feed-50lb",
    title: "Premium Horse Feed, 50 lb",
    price: 28.99,
    category: "Livestock",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/premium-horse-feed-50-lb",
    description: "High-quality feed formulated for active horses",
    features: ["50 lb bag", "Premium ingredients", "Active horse formula", "Digestive health"]
  },
  {
    slug: "sheep-feed-40lb",
    title: "Sheep & Goat Feed, 40 lb",
    price: 22.99,
    category: "Livestock",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/sheep-goat-feed-40-lb",
    description: "Balanced nutrition for sheep and goats",
    features: ["40 lb bag", "Balanced nutrition", "Sheep & goat specific", "Natural ingredients"]
  },

  // Pet
  {
    slug: "dog-food-40lb",
    title: "Premium Dog Food, 40 lb",
    price: 39.99,
    category: "Pet",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/premium-dog-food-40-lb",
    description: "High-quality dog food with real meat as first ingredient",
    features: ["40 lb bag", "Real meat first", "No artificial colors", "Complete nutrition"]
  },
  {
    slug: "cat-food-20lb",
    title: "Natural Cat Food, 20 lb",
    price: 24.99,
    category: "Pet",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/natural-cat-food-20-lb",
    description: "Natural cat food with essential nutrients and vitamins",
    features: ["20 lb bag", "Natural ingredients", "Essential nutrients", "Cat approved"]
  },
  {
    slug: "pet-treats-variety",
    title: "Pet Treats Variety Pack",
    price: 12.99,
    category: "Pet",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/pet-treats-variety-pack",
    description: "Assorted treats for dogs and cats",
    features: ["Variety pack", "Training treats", "Natural ingredients", "Multiple flavors"]
  },

  // Fencing
  {
    slug: "chicken-wire-50ft",
    title: "Chicken Wire, 50 ft x 4 ft",
    price: 29.99,
    category: "Fencing",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/chicken-wire-50-ft-x-4-ft",
    description: "Galvanized chicken wire for poultry enclosures",
    features: ["50 ft x 4 ft", "Galvanized", "1 inch mesh", "Poultry safe"]
  },
  {
    slug: "fence-post-6ft",
    title: "T-Post, 6 ft (Pack of 10)",
    price: 89.99,
    category: "Fencing",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/t-post-6-ft-pack-of-10",
    description: "Heavy-duty T-posts for secure fencing",
    features: ["6 ft height", "Pack of 10", "Heavy duty", "Easy installation"]
  },
  {
    slug: "gate-hinges-set",
    title: "Gate Hinges Set (Pair)",
    price: 15.99,
    category: "Fencing",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/gate-hinges-set-pair",
    description: "Heavy-duty hinges for farm gates",
    features: ["Pair of hinges", "Heavy duty", "Easy installation", "Rust resistant"]
  },

  // Tools
  {
    slug: "work-gloves-large",
    title: "Heavy Duty Work Gloves, Large",
    price: 12.99,
    category: "Tools",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/heavy-duty-work-gloves-large",
    description: "Durable work gloves for farm and garden tasks",
    features: ["Large size", "Heavy duty", "Grip enhanced", "Durable material"]
  },
  {
    slug: "shovel-round-point",
    title: "Round Point Shovel",
    price: 24.99,
    category: "Tools",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/round-point-shovel",
    description: "Versatile shovel for digging and moving materials",
    features: ["Round point", "Steel blade", "Wooden handle", "Heavy duty"]
  },
  {
    slug: "pruning-shears",
    title: "Bypass Pruning Shears",
    price: 18.99,
    category: "Tools",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/bypass-pruning-shears",
    description: "Sharp pruning shears for clean cuts",
    features: ["Bypass design", "Sharp blades", "Comfortable grip", "Clean cuts"]
  },

  // Garden
  {
    slug: "potting-soil-40qt",
    title: "Potting Soil, 40 qt",
    price: 14.99,
    category: "Garden",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/potting-soil-40-qt",
    description: "Premium potting soil for container gardening",
    features: ["40 qt bag", "Premium blend", "Container ready", "Nutrient rich"]
  },
  {
    slug: "garden-seeds-variety",
    title: "Garden Seeds Variety Pack",
    price: 9.99,
    category: "Garden",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/garden-seeds-variety-pack",
    description: "Assorted vegetable and herb seeds for your garden",
    features: ["Variety pack", "Vegetables & herbs", "Non-GMO", "High germination"]
  },
  {
    slug: "watering-can-2gal",
    title: "Watering Can, 2 Gallon",
    price: 19.99,
    category: "Garden",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    externalUrl: "https://www.tractorsupply.com/tsc/product/watering-can-2-gallon",
    description: "Classic watering can for garden and house plants",
    features: ["2 gallon capacity", "Classic design", "Easy to carry", "Gentle flow"]
  }
]

export const categories = [
  "All",
  "Poultry",
  "Livestock", 
  "Pet",
  "Fencing",
  "Tools",
  "Garden"
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
