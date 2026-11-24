
import { Quote } from 'lucide-react'

const reviews = [
  { text: 'A lovely little pause in the middle of a busy day. The coffee and atmosphere feel thoughtfully put together.', name: 'Aarav M.', role: 'SAMPLE CUSTOMER' },
  { text: 'The kind of place where you sit down for one coffee and end up staying a little longer.', name: 'Mira S.', role: 'SAMPLE CUSTOMER' },
  { text: 'Warm, welcoming and refreshingly unhurried. A beautiful concept for coffee lovers.', name: 'Rohan K.', role: 'SAMPLE CUSTOMER' },
]

function Testimonials() {
  return (
    <section className="bg-[#EAE3D8] px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-mono text-xs tracking-widest text-terracotta mb-5">WORDS & WARMTH</p>
          <h2 className="font-display text-5xl md:text-6xl">A feeling worth <span className="italic text-terracotta">sharing.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map(review => (
            <article key={review.name} className="bg-khadi p-8 md:p-10">
              <Quote className="text-terracotta mb-7" size={28}/>
              <p className="font-display text-2xl leading-relaxed">{review.text}</p>
              <div className="mt-9 pt-5 border-t border-espresso/15">
                <p className="font-semibold text-sm">{review.name}</p>
                <p className="font-mono text-[9px] tracking-widest text-terracotta mt-2">{review.role}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="font-mono text-[9px] text-espresso/45 mt-6 text-center">FICTIONAL SAMPLE TESTIMONIALS · NOT REAL CUSTOMER REVIEWS</p>
      </div>
    </section>
  )
}

export default Testimonials