import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import SiteNav from './_components/SiteNav'
import SiteFooter from './_components/SiteFooter'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Braxcraft Web Design — Local Business Websites with Heart",
  description: "We build beautiful, affordable websites for local businesses with a focus on community, sustainability, and authentic connection.",
  openGraph: {
    title: "Braxcraft Web Design — Local Business Websites with Heart",
    description: "We build beautiful, affordable websites for local businesses with a focus on community, sustainability, and authentic connection.",
    url: "https://braxcraftwebdesign.com",
    siteName: "Braxcraft Web Design",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Braxcraft Web Design — Local Business Websites with Heart",
    description: "Beautiful, affordable websites for local businesses with a focus on community and sustainability."
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <SiteNav />
        {children}
        <SiteFooter />
        <Analytics />
        {/* Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Braxcraft Web Design",
              "url": "https://braxcraftwebdesign.com",
              "description": "We build beautiful, affordable websites for local businesses with a focus on community, sustainability, and authentic connection.",
              "areaServed": "Shippensburg, Pennsylvania and surrounding areas"
            }),
          }}
        />
      </body>
    </html>
  )
}
