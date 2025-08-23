import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Nav from './_components/Nav'
import Footer from './_components/Footer'
import '../../../styles/feed.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Feed Store | Farm & Feed Essentials',
  description: 'Everyday supplies for poultry, livestock, pets, fencing, tools, and garden—curated for local needs.',
}

export default function FeedStoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="theme-feed">
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
