import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah & Michael',
      event: 'Wedding',
      rating: 5,
      text: 'Amazing work! Our wedding photos are absolutely stunning. Every moment was captured perfectly and the editing is incredible. Highly recommend!'
    },
    {
      name: 'Jennifer Davis',
      event: 'Family Portrait',
      rating: 5,
      text: 'Professional, patient, and incredibly talented. Our family photos turned out better than I could have imagined. Will definitely book again!'
    },
    {
      name: 'Robert Chen',
      event: 'Corporate Event',
      rating: 5,
      text: 'Excellent service for our company event. The photos perfectly captured the professional atmosphere and all the key moments. Great turnaround time too.'
    },
    {
      name: 'Emily Rodriguez',
      event: 'Senior Session',
      rating: 5,
      text: 'My senior photos are absolutely perfect! The photographer made me feel so comfortable and the results are stunning. Love every single photo!'
    }
  ]

  return (
    <section className="section bg-surface">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about their 
            photography experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="flex mr-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted">{testimonial.event}</span>
              </div>
              
              <p className="text-muted mb-4 italic">"{testimonial.text}"</p>
              
              <div className="text-sm font-medium text-accent">
                — {testimonial.name}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  )
}
