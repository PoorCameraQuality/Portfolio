'use client'
import { Star } from 'lucide-react'

type Review = { author: string; rating: number; timeAgo: string; text: string }

const REVIEWS: Review[] = [
  { author: 'Jake R.',  rating: 5, timeAgo: '2 weeks ago',   text: 'They made me a website for my landscaping biz, didnt think I needed one but now folks call from google maps all the time. cost me less than dinner out each month lol.' },
  { author: 'Linda S.', rating: 5, timeAgo: '1 month ago',   text: 'Finally got my electric company showing up when you search shippensburg electrician. didnt know how to do any of that. these guys did it for cheap.' },
  { author: 'Tom W.',   rating: 5, timeAgo: '3 months ago',  text: 'Im not good with computers but now when people search tires near me my shop is there. website looks nice too.' },
  { author: 'Sarah P.', rating: 5, timeAgo: '2 months ago',  text: 'Had only facebook before, now i got a menu on a website. ppl keep saying they saw us on google maps and come in. worth the 15$' },
  { author: 'Dale M.',  rating: 4, timeAgo: '4 months ago',  text: 'cheap but good. my diner shows up online finally. didnt have to mess with nothing they just did it.' },
  { author: 'Rita F.',  rating: 5, timeAgo: '6 days ago',    text: 'they put my coffee shop online in like a day. its simple but thats all i need. ppl find me now.' },
]

export default function GoogleStyleReviews() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2>What Locals Are Saying</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">Real casual vibes like Google reviews (demo content).</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((r, i) => (
            <article key={i} className="gm-review">
              <header className="flex items-center gap-3 mb-2">
                <div className="gm-avatar" aria-hidden>{r.author[0]}</div>
                <div className="font-semibold">{r.author}</div>
                <div className="gm-stars" aria-label={`${r.rating} star rating`}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < r.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-xs text-muted ml-auto">{r.timeAgo}</span>
              </header>
              <p className="text-muted">"{r.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
