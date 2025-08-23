import { notFound } from 'next/navigation'
import { getOnepagerBySlug } from '../_data/onepagers'
import Hero from '../_components/Hero'
import FeatureList from '../_components/FeatureList'
import Gallery from '../_components/Gallery'
import ContactStrip from '../_components/ContactStrip'
import FooterLite from '../_components/FooterLite'
import type { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const onepager = getOnepagerBySlug(params.slug)
  
  if (!onepager) {
    return {
      title: 'Demo Not Found',
      description: 'The requested demo one-pager could not be found.'
    }
  }

  return {
    title: `${onepager.title} | Demo One-Pager`,
    description: onepager.tagline,
  }
}

export default function OnepagerPage({ params }: PageProps) {
  const onepager = getOnepagerBySlug(params.slug)
  
  if (!onepager) {
    notFound()
  }

  return (
    <>
      <Hero onepager={onepager} />
      <FeatureList onepager={onepager} />
      <Gallery onepager={onepager} />
      <ContactStrip onepager={onepager} />
      <FooterLite />
    </>
  )
}
