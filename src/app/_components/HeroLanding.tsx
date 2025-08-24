export default function HeroLanding(){
  return (
    <section className="hero-bleed">
      <img
        src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop"
        alt="Open for Biz - Local business signage"
        className="w-full h-[72vh] object-cover relative z-0"
        style={{ position: 'relative', zIndex: 0 }}
      />
      <div className="overlay" />
      <div className="inner">
        <div className="container">
          <div className="eyebrow mb-3 text-white/90">Websites for Local Businesses</div>
          <h1 className="h1 text-5xl md:text-6xl mb-4 text-white">Modern, warm, and easy to manage</h1>
          <p className="lead mb-8 text-white/90 max-w-2xl mx-auto">
            We design & maintain clean websites that feel handcrafted — with Google Maps and updates handled for you.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a href="/services" className="btn-primary">See Packages</a>
            <a href="/work" className="btn-secondary">View Work</a>
          </div>
        </div>
      </div>
    </section>
  )
}
