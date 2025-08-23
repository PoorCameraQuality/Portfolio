// Simple image resolver for Feed Store demo.
// Uses Unsplash Source (no API key, randomized but on-topic).

// Handy helper to build a 400x400 image from a set of keywords
const u = (...keywords: string[]) =>
  `https://source.unsplash.com/featured/400x400/?${encodeURIComponent(keywords.join(','))}`;

// Map known slugs -> curated queries
export const IMAGE_BY_SLUG: Record<string, string> = {
  'purina-layena-crumbles-40lb': u('chicken feed', 'laying hens', 'pellets'),
  'poultry-grit-5lb':            u('poultry grit', 'chicken grit', 'granules'),
  'automatic-chicken-feeder-5lb':u('chicken feeder', 'poultry feeder'),
  'cattle-mineral-mix-50lb':     u('cattle', 'mineral feed', 'ranch'),
  'premium-horse-feed-50lb':     u('horse feed', 'horse grain'),
  'sheep-goat-feed-40lb':        u('goat feed', 'sheep feed'),
  'premium-dog-food-40lb':       u('dog food kibble', 'dog bowl'),
  'natural-cat-food-20lb':       u('cat food', 'cat bowl'),
  'pet-treats-variety-pack':     u('pet treats', 'dog treats'),
  'chicken-wire-50ftx4ft':       u('chicken wire', 'wire fence'),
  't-post-6ft-pack10':           u('t-post', 'fence post'),
  'gate-hinges-pair':            u('gate hinge', 'barn hardware'),
};

// Category-level fallbacks if a slug isn't in the map
export const IMAGE_BY_CATEGORY: Record<string, string> = {
  Poultry:  u('chicken', 'hen', 'coop'),
  Livestock:u('cattle', 'farm', 'ranch'),
  Pet:      u('pet', 'dog', 'cat'),
  Fencing:  u('farm fence', 'wire fence'),
  Tools:    u('farm tools', 'hand tools'),
  Garden:   u('garden tools', 'backyard'),
};

export function getImageForProduct(
  slug?: string,
  category?: string,
  title?: string
): string {
  if (slug && IMAGE_BY_SLUG[slug]) return IMAGE_BY_SLUG[slug];
  if (category && IMAGE_BY_CATEGORY[category]) return IMAGE_BY_CATEGORY[category];
  // Final fallback: try title keywords or generic farm image
  if (title) {
    const words = title.toLowerCase().split(/\s+/).slice(0, 3).join(',');
    return `https://source.unsplash.com/featured/400x400/?${encodeURIComponent(words || 'farm')}`;
  }
  return u('farm supply', 'feed store');
}
