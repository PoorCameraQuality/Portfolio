import { Star, Truck, Shield, Package, Heart, ShoppingCart, MapPin, Phone } from 'lucide-react'
import Breadcrumb from '../../_components/Breadcrumb'

export default function ChickenFeedPremiumPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: 'Shop', href: '/feed-store#shop' },
        { label: 'Poultry', href: '/feed-store#shop' },
        { label: 'Chicken Feed Premium' }
      ]} />
      
      {/* Product Details */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-surface rounded-lg p-8 flex items-center justify-center">
              <div className="text-6xl">🐔</div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-4">Premium Chicken Feed</h1>
              <p className="text-lg text-muted mb-6">
                High-quality, nutritionally balanced feed formulated specifically for laying hens. 
                Promotes healthy egg production and overall bird health.
              </p>
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-muted">(24 reviews)</span>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                <span className="price text-3xl">$24.99</span>
                <span className="text-muted ml-2">per 50lb bag</span>
              </div>
              
              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Formulated for laying hens</span>
                </div>
                <div className="flex items-center">
                  <Package className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">50-pound bag</span>
                </div>
                <div className="flex items-center">
                  <Truck className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Free local delivery</span>
                </div>
              </div>
              
              {/* Quantity & Add to Cart */}
              <div className="space-y-4 mb-8">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium mb-2">Quantity</label>
                  <select
                    id="quantity"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="1">1 bag</option>
                    <option value="2">2 bags</option>
                    <option value="3">3 bags</option>
                    <option value="4">4 bags</option>
                    <option value="5">5 bags</option>
                  </select>
                </div>
                
                <button className="w-full btn-primary py-4 text-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                
                <button className="w-full btn-secondary py-4 text-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Add to Wishlist
                </button>
              </div>
              
              {/* Quick Info */}
              <div className="bg-accent/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-accent">Quick Info</h3>
                <div className="text-sm text-muted space-y-1">
                  <p>• In stock and ready for pickup/delivery</p>
                  <p>• Bulk discounts available for 10+ bags</p>
                  <p>• Store pickup available today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="section bg-surface">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Product Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">Nutritional Information</h3>
                <div className="space-y-3 text-muted">
                  <div className="flex justify-between">
                    <span>Crude Protein</span>
                    <span>18%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Crude Fat</span>
                    <span>3.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Crude Fiber</span>
                    <span>4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Calcium</span>
                    <span>3.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phosphorus</span>
                    <span>0.6%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">Ingredients</h3>
                <div className="text-muted space-y-2">
                  <p>Ground corn, soybean meal, wheat middlings, calcium carbonate, 
                  dicalcium phosphate, salt, DL-methionine, L-lysine, choline chloride, 
                  vitamin E supplement, niacin, calcium pantothenate, vitamin A supplement, 
                  vitamin D3 supplement, menadione sodium bisulfite complex, folic acid, 
                  thiamine mononitrate, pyridoxine hydrochloride, riboflavin, vitamin B12 supplement, 
                  biotin, ethoxyquin (preservative).</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-accent">Feeding Instructions</h3>
              <div className="text-muted space-y-3">
                <p>• Feed free-choice to laying hens 18 weeks and older</p>
                <p>• Provide fresh water at all times</p>
                <p>• Store in a cool, dry place</p>
                <p>• Feed approximately 1/4 to 1/3 pound per bird per day</p>
                <p>• Adjust feeding based on egg production and bird condition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Customer Reviews</h2>
            
            <div className="space-y-6">
              <div className="bg-surface rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold mr-3">Sarah M.</span>
                  <span className="text-sm text-muted">2 weeks ago</span>
                </div>
                <p className="text-muted mb-3">
                  "My hens love this feed! Egg production increased noticeably within the first week. 
                  The quality is excellent and the price is reasonable for premium feed."
                </p>
                <div className="text-sm text-muted">Verified Purchase</div>
              </div>
              
              <div className="bg-surface rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold mr-3">Mike T.</span>
                  <span className="text-sm text-muted">1 month ago</span>
                </div>
                <p className="text-muted mb-3">
                  "Been using this feed for 6 months now. My chickens are healthy and producing 
                  consistently. Great value for the quality."
                </p>
                <div className="text-sm text-muted">Verified Purchase</div>
              </div>
              
              <div className="bg-surface rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                    <Star className="w-5 h-5 text-gray-300" />
                  </div>
                  <span className="font-semibold mr-3">Lisa C.</span>
                  <span className="text-sm text-muted">3 months ago</span>
                </div>
                <p className="text-muted mb-3">
                  "Good quality feed, but a bit pricey. However, the results speak for themselves - 
                  my hens are healthy and productive."
                </p>
                <div className="text-sm text-muted">Verified Purchase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-4">🥚</div>
              <h3 className="font-semibold mb-2">Layer Pellets</h3>
              <p className="text-sm text-muted mb-3">Premium layer feed in pellet form</p>
              <div className="price mb-3">$22.99</div>
              <button className="btn-primary w-full">View Details</button>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="font-semibold mb-2">Scratch Grains</h3>
              <p className="text-sm text-muted mb-3">Natural scratch grains for chickens</p>
              <div className="price mb-3">$18.99</div>
              <button className="btn-primary w-full">View Details</button>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">🦴</div>
              <h3 className="font-semibold mb-2">Oyster Shell</h3>
              <p className="text-sm text-muted mb-3">Calcium supplement for strong eggshells</p>
              <div className="price mb-3">$12.99</div>
              <button className="btn-primary w-full">View Details</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About This Product?</h2>
          <p className="text-lg text-muted mb-6 max-w-2xl mx-auto">
            Our team of farming experts is here to help. Call us or stop by the store for personalized advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2 text-accent" />
              <span className="text-muted">(717) 555-0123</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2 text-accent" />
              <span className="text-muted">123 Farm Road, Central PA</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
