export default function Mosaic(){
  const tiles = [
    { title:"Feed Store Demo", img:"https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop", href:"/feed-store" },
    { title:"Photography Demo", img:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop", href:"/photography-business" },
    { title:"One-Pager Demo", img:"https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1200&auto=format&fit=crop", href:"/one-pager-demo" },
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-8">
          <div className="eyebrow mb-2">Selected Work</div>
          <h2 className="h2 text-4xl">Calm, handcrafted site styles</h2>
        </div>
        <div className="mosaic">
          {tiles.map((t,i)=>(
            <a key={t.title} href={t.href} className={`card overflow-hidden ${i===0?'span-12 md:span-6':'span-12 md:span-6'}`}>
              <img src={t.img} alt="" className="w-full h-[280px] object-cover"/>
              <div className="p-5 flex items-center justify-between">
                <div className="font-semibold">{t.title}</div>
                <span className="badge">View</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
