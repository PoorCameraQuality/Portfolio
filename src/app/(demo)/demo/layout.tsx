import type { Metadata } from 'next'
import './theme.css'

export const metadata: Metadata = {
  title: 'Demo One-Pagers | Free Single-Page Demos',
  description: 'Free single-page demos for local businesses. See how your business could look online.',
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="theme-dogger bg-[var(--d-bg)] text-[var(--d-ink)]">
          <div className="top-bar">
            <div className="container">
              <a href="/demo">Demo One-Pagers</a>
              <a href="/services">← Back to Services</a>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
