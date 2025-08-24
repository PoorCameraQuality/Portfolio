export default function ValueBand(){
  const items = [
    { title:"Thoughtful Design", desc:"Editorial typography, calm color, generous whitespace." },
    { title:"Built for Locals", desc:"Clear hours, maps, phone, and menus front-and-center." },
    { title:"Managed for You", desc:"Hosting, updates, and tweaks — without the headaches." },
  ]
  return (
    <section className="soft-section">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        {items.map((it)=>(
          <div key={it.title}>
            <div className="font-semibold text-[var(--forest)] mb-1">{it.title}</div>
            <p className="text-[var(--muted)]">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
