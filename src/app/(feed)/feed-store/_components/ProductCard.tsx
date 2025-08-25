import Image from 'next/image'
import Link from 'next/link'
import { Product } from '../_data/products'
import { getImageForProduct } from '../_data/imageMap'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const resolvedImage =
    product.image && product.image.trim().length > 0
      ? product.image
      : getImageForProduct(product.slug, (product as any).category, product.title)

  return (
    <div className="card group">
      <Link href={`/feed-store/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <Image
            src={resolvedImage}
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
          <Link 
            href={product.externalUrl} 
            className="btn-primary text-sm px-4 py-2"
          >
            {product.category === 'Web Services' ? 'Get Quote' : 'View Demo'}
          </Link>
        </div>
      </div>
    </div>
  )
}
