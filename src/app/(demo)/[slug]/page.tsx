import { notFound } from 'next/navigation'
import { getOnepagerBySlug } from '../demo/_data/onepagers'
import Hero from '../demo/_components/Hero'
import FeatureList from '../demo/_components/FeatureList'
import Gallery from '../demo/_components/Gallery'
import ContactStrip from '../demo/_components/ContactStrip'
import GoogleStyleReviews from '../demo/_components/GoogleStyleReviews'
import FooterLite from '../demo/_components/FooterLite'
import type { Metadata } from 'next'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const onepager = getOnepagerBySlug(params.slug)
  
  if (!onepager) {
    return {
      title: 'Demo Not Found | CheapLocalWebsites.com',
      description: 'This demo one-pager was not found. Explore more demos at CheapLocalWebsites.com',
    }
  }

  return {
    title: `${onepager.title} | Demo One-Pager by CheapLocalWebsites.com`,
    description: onepager.tagline || 'See how a local business site could look for just $15/mo.',
  }
}

export default function OnepagerPage({ params }: PageProps) {
  const onepager = getOnepagerBySlug(params.slug)
  
  if (!onepager) {
    notFound()
  }

  return (
    <>
      {/* 🚧 Demo site only */}
      <Hero onepager={onepager} />
      <FeatureList onepager={onepager} />
      <Gallery onepager={onepager} />
      <GoogleStyleReviews />
      <ContactStrip onepager={onepager} />
      <FooterLite />
      {/* Optional: JSON-LD schema for demo SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": onepager.title,
            "description": onepager.tagline || "Demo site by CheapLocalWebsites.com",
            "url": `https://cheaplocalwebsites.com/demo/${onepager.slug}`,
            "image": onepager.heroImage,
            "address": onepager.address || "Shippensburg, PA",
            "telephone": onepager.phone || ""
          }),
        }}
      />
    </>
  )
}
