import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { getProductBySlug } from '../../_data/products'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      {/* Product Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.title,
            "image": product.image,
            "description": product.description,
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": product.price,
              "availability": "https://schema.org/InStock"
            },
            "category": product.category
          })
        }}
      />

      <div className="section">
        <div className="container">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/feed-store" 
              className="inline-flex items-center text-muted hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Store
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="category-pill">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold">{product.title}</h1>
              
              <div className="price text-3xl">
                ${product.price.toFixed(2)}
              </div>

              {product.description && (
                <p className="text-lg text-muted">
                  {product.description}
                </p>
              )}

              {product.features && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-muted">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-6">
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noopener nofollow"
                  className="btn-primary inline-flex items-center"
                >
                  Buy at Retailer
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
