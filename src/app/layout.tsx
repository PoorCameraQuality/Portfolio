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
  title: {
    default: 'Braxcraft Portfolio | Creative Developer & Designer',
    template: '%s | Braxcraft Portfolio'
  },
  description: 'Professional portfolio showcasing creative development, design work, and innovative solutions. Explore my projects, skills, and creative process.',
  keywords: ['portfolio', 'developer', 'designer', 'creative', 'web development', 'UI/UX'],
  authors: [{ name: 'Braxcraft' }],
  creator: 'Braxcraft',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://braxcraft-portfolio.vercel.app',
    title: 'Braxcraft Portfolio | Creative Developer & Designer',
    description: 'Professional portfolio showcasing creative development, design work, and innovative solutions.',
    siteName: 'Braxcraft Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Braxcraft Portfolio | Creative Developer & Designer',
    description: 'Professional portfolio showcasing creative development, design work, and innovative solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
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
      </body>
    </html>
  )
}
