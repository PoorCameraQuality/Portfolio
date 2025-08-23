# Image Selectors for BraxCraft Web Design

This document describes the image selector system used across different sections of the BraxCraft website.

## Overview

The image selector system provides centralized configuration for hero images and gallery images across three main sections:
- Feed Store Demo Page
- Photography Mini-site  
- Main Web Design Website

## Configuration Files

### Main Configuration
- **`src/lib/imageConfig.ts`** - Centralized configuration with all image selectors
- **`src/app/(feed)/feed-store/_data/images.ts`** - Feed store specific images
- **`src/app/(photography)/photography-business/_data/images.ts`** - Photography specific images
- **`src/app/_data/images.ts`** - Main website images

## Image Structure

Each section follows this structure:
```typescript
{
  hero: "https://images.unsplash.com/photo-...hero-image.jpg",
  gallery: [
    "https://images.unsplash.com/photo-...gallery-1.jpg",
    "https://images.unsplash.com/photo-...gallery-2.jpg",
    "https://images.unsplash.com/photo-...gallery-3.jpg"
  ]
}
```

## Usage Examples

### Import and Use
```typescript
import { imageConfig } from '@/lib/imageConfig'

// Use specific section
const heroImage = imageConfig.feedStore.hero
const galleryImages = imageConfig.feedStore.gallery

// Or import individual sections
import { feedStoreImages } from '@/lib/imageConfig'
const heroImage = feedStoreImages.hero
```

### In Components
```typescript
import { feedStoreImages } from '@/lib/imageConfig'

export default function FeedStoreHero() {
  return (
    <div className="hero-section">
      <img src={feedStoreImages.hero} alt="Feed Store Hero" />
    </div>
  )
}
```

## Image Sources

All images are sourced from Unsplash and optimized for web use with appropriate dimensions:
- **Hero images**: 1200x600px for optimal hero section display
- **Gallery images**: 800x600px for consistent gallery layout

## Adding New Images

1. Find appropriate images on Unsplash
2. Add the image URL to the relevant configuration file
3. Use appropriate dimensions and fit parameters
4. Update this documentation if adding new sections

## Image Optimization

Images are automatically optimized by:
- Next.js Image component
- Unsplash's built-in optimization parameters
- Responsive sizing for different screen sizes

## Maintenance

- Keep image URLs up to date
- Ensure all images are accessible
- Monitor image loading performance
- Consider implementing lazy loading for galleries
