'use client'

import { useMemo } from 'react'
import { Product, getProductsByCategory } from '../_data/products'
import ProductCard from './ProductCard'

interface ProductGridProps {
  category?: string
}

export default function ProductGrid({ category }: ProductGridProps) {
  const filteredProducts = useMemo(() => {
    if (!category || category === 'All') {
      return getProductsByCategory('All')
    }
    return getProductsByCategory(category)
  }, [category])

  return (
    <div aria-live="polite" aria-busy={filteredProducts.length === 0}>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#2c786c] text-lg">No products found in this category.</p>
          <p className="text-sm text-[#2c786c] mt-2">Tip: Try "All" or another category.</p>
        </div>
      )}
    </div>
  )
}
