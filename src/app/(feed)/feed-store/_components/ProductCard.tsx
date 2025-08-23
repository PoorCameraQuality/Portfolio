import Image from 'next/image'
import Link from 'next/link'
import { Product } from '../_data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="space-y-3">
        <span className="category-pill text-xs">
          {product.category}
        </span>
        
        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
          {product.title}
        </h3>
        
        <div className="price">
          ${product.price.toFixed(2)}
        </div>
        
        <Link 
          href={`/feed-store/product/${product.slug}`}
          className="btn-secondary w-full justify-center"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
