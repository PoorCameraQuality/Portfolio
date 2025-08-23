import Image from 'next/image'
import type { Onepager } from '../_data/onepagers'

interface HeroProps {
  onepager: Onepager
}

export default function Hero({ onepager }: HeroProps) {
  return (
    <section className="hero pattern-bg">
      <div className="container">
        <div className="hero-content">
          <div>
            <h1>{onepager.title}</h1>
            <p className="text-xl text-muted mb-8">{onepager.tagline}</p>
            
            {onepager.ctaLabel && onepager.ctaHref && (
              <div className="flex gap-4 flex-wrap">
                <a href={onepager.ctaHref} className="btn-primary">
                  {onepager.ctaLabel}
                </a>
                {onepager.phone && (
                  <a href={`tel:${onepager.phone}`} className="btn-secondary">
                    Call Now
                  </a>
                )}
              </div>
            )}
            
            {!onepager.ctaLabel && onepager.phone && (
              <a href={`tel:${onepager.phone}`} className="btn-primary">
                Call Now
              </a>
            )}

            <div className="mt-6">
              <a
                href="https://cheaplocalwebsites.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Get a $15 Website Like This
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <Image
              src={onepager.heroImage}
              alt={onepager.title}
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
