import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "CheapLocalWebsites.com — $15/mo Local Business Websites",
  description: "We build and maintain affordable websites for local businesses — plus Google Maps — for just $15/mo.",
  openGraph: {
    title: "CheapLocalWebsites.com — $15/mo Local Business Websites",
    description: "We build and maintain affordable websites for local businesses — plus Google Maps — for just $15/mo.",
    url: "https://cheaplocalwebsites.com",
    siteName: "CheapLocalWebsites.com",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CheapLocalWebsites.com — $15/mo Websites",
    description: "Affordable small-business websites + Google Maps maintenance."
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        {/* Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CheapLocalWebsites.com",
              "url": "https://cheaplocalwebsites.com",
              "description": "Affordable websites for local businesses, plus Google Maps setup & maintenance.",
              "areaServed": "Shippensburg, Pennsylvania and surrounding areas"
            }),
          }}
        />
      </body>
    </html>
  )
}
