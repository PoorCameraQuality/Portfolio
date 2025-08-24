type Props = { image: string; eyebrow: string; title: string; body: string; flip?: boolean; ctaLabel?: string; ctaHref?: string }
export default function AltSection({ image, eyebrow, title, body, flip, ctaLabel, ctaHref }: Props){
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        {!flip && <img src={image} alt="" className="w-full h-[360px] object-cover rounded-xl" style={{ border: '1px solid var(--border)' }} />}
        <div>
          <div className="eyebrow mb-2">{eyebrow}</div>
          <h2 className="h2 text-4xl mb-3">{title}</h2>
          <p className="lead mb-6">{body}</p>
          {ctaLabel && ctaHref && <a href={ctaHref} className="btn-primary">{ctaLabel}</a>}
        </div>
        {flip && <img src={image} alt="" className="w-full h-[360px] object-cover rounded-xl" style={{ border: '1px solid var(--border)' }} />}
      </div>
    </section>
  )
}
