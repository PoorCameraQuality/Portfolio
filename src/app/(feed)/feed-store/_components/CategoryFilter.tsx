'use client'

import { useState } from 'react'

interface CategoryFilterProps {
  categories: string[]
  onCategoryChange?: (category: string) => void
}

export default function CategoryFilter({ categories, onCategoryChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
    onCategoryChange?.(category)
  }

  return (
    <div className="filter-pills">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`filter-pill ${
            activeCategory === category ? 'active' : ''
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
