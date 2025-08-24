export default function TestimonialStrip(){
  const items = [
    { q:'"Site looks clean and customers find us on Google now."', a:'Linda S., Electrician' },
    { q:'"Exactly what I wanted — simple and warm."', a:'Rita F., Coffee Shop' },
    { q:'"They just handle it… easy."', a:'Jake R., Landscaping' },
  ]
  return (
    <section className="soft-section">
      <div className="container py-14 grid md:grid-cols-3 gap-8 text-center">
        {items.map(i=>(
          <div key={i.a} className="px-2">
            <p className="text-xl font-medium mb-3">{i.q}</p>
            <p className="text-[var(--muted)]">{i.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
