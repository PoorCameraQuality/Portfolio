export type DemoOnePager = {
  slug: string;                 // e.g. "happy-paws-grooming"
  title: string;                // "Happy Paws Grooming"
  tagline: string;              // "Gentle care for every coat"
  category: "pet"|"barber"|"auto"|"cafe"|"florist"|"gym"|"generic";
  city?: string;                // "Shippensburg, PA"
  heroImage: string;            // Unsplash URL (safe placeholder)
  features: { icon?: string; title: string; desc: string; }[];
  gallery?: { src: string; alt: string; }[];
  phone?: string; 
  email?: string; 
  address?: string; 
  mapsUrl?: string;
  ctaLabel?: string; 
  ctaHref?: string; // e.g., mailto: or tel:
};
