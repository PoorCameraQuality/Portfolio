import Hero from './_components/Hero'
import CategoryFilter from './_components/CategoryFilter'
import ProductGrid from './_components/ProductGrid'
import { products, categories } from './_data/products'

export default function FeedStorePage() {
  return (
    <>
      <Hero />
      
      <section className="section" id="shop">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Find everything you need for your farm, pets, and garden
            </p>
          </div>
          
          <CategoryFilter categories={categories} />
          <ProductGrid products={products} />
        </div>
      </section>

      {/* Category descriptions for SEO */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Poultry</h3>
              <p className="text-muted">Feeds and grit to keep your flock healthy and productive.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Livestock</h3>
              <p className="text-muted">Daily nutrition and barn supplies built for hard work.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Pet</h3>
              <p className="text-muted">Kibble, treats, and basics for the animals that feel like family.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Fencing</h3>
              <p className="text-muted">Practical fencing and hardware to keep things where they belong.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Tools</h3>
              <p className="text-muted">Reliable tools and gloves for chores and upkeep.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Garden</h3>
              <p className="text-muted">Soil, seed, and simple gear for this season's projects.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
