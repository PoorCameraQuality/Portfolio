'use client'

import { useState, useMemo } from 'react'
import { Product, getProductsByCategory } from '../_data/products'
import ProductCard from './ProductCard'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const filteredProducts = useMemo(() => {
    return getProductsByCategory(selectedCategory)
  }, [selectedCategory])

  return (
    <div>
      <div className="filter-pills">
        {['All', 'Poultry', 'Livestock', 'Pet', 'Fencing', 'Tools', 'Garden'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`filter-pill ${
              selectedCategory === category ? 'active' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
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
