/**
 * Image Configuration for BraxCraft Web Design
 * 
 * This file contains all the image selectors for different sections of the website.
 * Images are sourced from Unsplash and optimized for web use.
 */

export const imageConfig = {
  // Feed Store Demo Page
  feedStore: {
    hero: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
    ]
  },

  // Photography Mini-site
  photography: {
    hero: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop"
    ]
  },

  // Main Web Design Website
  mainWebsite: {
    hero: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop"
    ]
  }
}

// Individual exports for specific use cases
export const { feedStore: feedStoreImages } = imageConfig
export const { photography: photographyImages } = imageConfig
export const { mainWebsite: mainWebsiteImages } = imageConfig

// Type definitions for image configurations
export interface ImageSection {
  hero: string
  gallery: string[]
}

export interface ImageConfig {
  feedStore: ImageSection
  photography: ImageSection
  mainWebsite: ImageSection
}
