'use client'
import { Star } from 'lucide-react'

type Review = {
  author: string
  rating: number
  timeAgo: string
  text: string
}

// Casual, slightly imperfect "maps-like" reviews
const REVIEWS: Review[] = [
  { author: 'Jake R.', rating: 5, timeAgo: '2 weeks ago', text: 'They made me a website for my landscaping biz, didnt think I needed one but now folks call from google maps all the time. cost me less than dinner out each month lol.' },
  { author: 'Linda S.', rating: 5, timeAgo: '1 month ago', text: 'Finally got my electric company showing up when you search shippensburg electrician. didnt know how to do any of that. these guys did it for cheap.' },
  { author: 'Tom W.', rating: 5, timeAgo: '3 months ago', text: 'Im not good with computers but now when people search tires near me my shop is there. website looks nice too.' },
  { author: 'Sarah P.', rating: 5, timeAgo: '2 months ago', text: 'Had only facebook before, now i got a menu on a website. ppl keep saying they saw us on google maps and come in. worth the 15$' },
  { author: 'Dale M.', rating: 4, timeAgo: '4 months ago', text: 'cheap but good. my diner shows up online finally. didnt have to mess with nothing they just did it.' },
  { author: 'Rita F.', rating: 5, timeAgo: '6 days ago', text: 'they put my coffee shop online in like a day. its simple but thats all i need. ppl find me now.' },
]

export default function GoogleStyleReviews() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#004445]">What Locals Are Saying</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-surface rounded-lg p-6 border border-[#2c786c]">
              <div className="flex items-center mb-2">
                <div className="w-9 h-9 rounded-full bg-[#f8b400]/20 flex items-center justify-center mr-3">
                  <span className="text-[#f8b400] font-semibold">{r.author.charAt(0)}</span>
                </div>
                <div className="font-semibold mr-2 text-[#004445]">{r.author}</div>
                <div className="flex text-[#f8b400] mr-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < r.rating ? 'fill-current' : 'text-[#2c786c]'}`} />
                  ))}
                </div>
                <span className="text-xs text-[#2c786c]">{r.timeAgo}</span>
              </div>
              <p className="text-[#2c786c]">{`"${r.text}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
