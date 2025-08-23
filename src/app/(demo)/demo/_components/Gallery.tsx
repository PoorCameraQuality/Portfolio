import Image from 'next/image'
import { DemoOnePager } from '@/lib/demo/types'

interface GalleryProps {
  onepager: DemoOnePager
}

export default function Gallery({ onepager }: GalleryProps) {
  if (!onepager.gallery || onepager.gallery.length === 0) {
    return null
  }

  return (
    <section className="section bg-[var(--d-bg)]">
      <div className="container">
        <div className="text-center mb-12">
          <h2>Gallery</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Take a look at our work and space
          </p>
        </div>

        <div className="gallery">
          {onepager.gallery.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
