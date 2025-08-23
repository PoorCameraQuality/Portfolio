import { getAllOnepagers } from './_data/onepagers'
import Image from 'next/image'
import Link from 'next/link'

export default function DemoIndexPage() {
  const onepagers = getAllOnepagers()

  return (
    <div className="pattern-bg">
      <div className="container">
        <div className="section">
          <div className="text-center mb-16">
            <h1>Demo One-Pagers</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Free single-page demos for local businesses. See how your business could look online.
            </p>
          </div>

          <div className="demo-grid">
            {onepagers.map((onepager) => (
              <div key={onepager.slug} className="demo-card">
                <Image
                  src={onepager.heroImage}
                  alt={onepager.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="demo-card-content">
                  <div className="flex items-center justify-between mb-3">
                    <h3>{onepager.title}</h3>
                    <span className="category-chip">{onepager.category}</span>
                  </div>
                  <p className="text-muted mb-3">{onepager.tagline}</p>
                  {onepager.city && (
                    <p className="city">📍 {onepager.city}</p>
                  )}
                  <Link href={`/demo/${onepager.slug}`} className="view-demo">
                    View Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="card max-w-2xl mx-auto">
              <h3>Want Your Own Demo?</h3>
              <p>
                These are free demo one-pagers. For a custom domain, up to 5 pages, 
                full SEO and ongoing support, upgrade to the Starter Website Package 
                ($50 setup + $15/month).
              </p>
              <div className="mt-6">
                <a href="/contact" className="btn-primary">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
