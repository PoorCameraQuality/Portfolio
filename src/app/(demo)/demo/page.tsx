import { getAllOnepagers } from './_data/onepagers'
import Image from 'next/image'
import Link from 'next/link'

export default function DemoIndexPage() {
  const onepagers = getAllOnepagers()

  return (
    <main className="pt-32">
      <section className="section bg-bg">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="h1 text-text-primary mb-6">
              Demo One-Pagers
            </h1>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              Free single-page demos for local businesses. See how your business could look online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onepagers.map((onepager) => (
              <div key={onepager.slug} className="card group hover:scale-105 transition-transform duration-300">
                <Image
                  src={onepager.heroImage}
                  alt={onepager.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="h3 text-text-primary">{onepager.title}</h3>
                    <span className="px-3 py-1 bg-surface-secondary rounded-full text-xs text-text-primary/80 font-medium">
                      {onepager.category}
                    </span>
                  </div>
                  <p className="text-text-primary/80 mb-3">{onepager.tagline}</p>
                  {onepager.city && (
                    <p className="text-text-muted text-sm mb-4">📍 {onepager.city}</p>
                  )}
                  <Link href={`/demo/${onepager.slug}`} className="link inline-flex items-center group">
                    View Demo
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="card max-w-2xl mx-auto">
              <h3 className="h3 text-text-primary mb-4">Want Your Own Demo?</h3>
              <p className="text-text-primary/80 mb-6">
                These are free demo one-pagers. For a custom domain, up to 5 pages, 
                full SEO and ongoing support, upgrade to the Starter Website Package 
                ($50 setup + $15/month).
              </p>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
