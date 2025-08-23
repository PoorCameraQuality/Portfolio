import Image from 'next/image'
import Link from 'next/link'
import { Product } from '../_data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card group">
      <Link href={`/feed-store/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <Image
            src={product.image}
            alt={`${product.title} product image`}
            width={400}
            height={400}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-[#004445] group-hover:text-[#f8b400] transition-colors">
          <Link href={`/feed-store/product/${product.slug}`}>
            {product.title}
          </Link>
        </h3>
        <p className="text-[#2c786c] text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#f8b400]">${product.price}</span>
          <button className="btn-primary text-sm px-4 py-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
