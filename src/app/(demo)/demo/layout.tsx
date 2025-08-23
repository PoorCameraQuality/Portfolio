import type { Metadata } from 'next'
import './theme.css'

export const metadata: Metadata = {
  title: 'Demo One-Pagers | CheapLocalWebsites.com',
  description: 'Free single-page demo sites for local businesses. See how your shop could look online for just $15/mo.',
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CheapLocalWebsites.com",
              "url": "https://cheaplocalwebsites.com",
              "sameAs": ["https://cheaplocalwebsites.com"],
              "description": "$15/month websites for local businesses, including Google Maps setup and maintenance.",
              "serviceType": "Website Design & Development",
              "areaServed": "United States",
              "priceRange": "$15"
            })
          }}
        />
      </head>
      <body>
        <div className="theme-dogger bg-[var(--d-bg)] text-[var(--d-ink)]">
          <div className="top-bar">
            <div className="container">
              <a href="/demo" aria-label="Demo One-Pagers">Demo One-Pagers</a>
              <div className="flex items-center gap-4">
                <a href="/services">← Back to Services</a>
                <a
                  href="https://cheaplocalwebsites.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get Your $15 Website
                </a>
              </div>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
