'use client'

import { useMemo } from 'react'
import { Product, getProductsByCategory } from '../_data/products'
import ProductCard from './ProductCard'

interface ProductGridProps {
  selectedCategory: string
}

export default function ProductGrid({ selectedCategory }: ProductGridProps) {
  const filteredProducts = useMemo(() => {
    return getProductsByCategory(selectedCategory)
  }, [selectedCategory])

  return (
    <div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}
