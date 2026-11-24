
import { ArrowUpRight, MapPin, Clock, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '91XXXXXXXXXX' // Replace with real business number before launch

function Contact() {
  const message = encodeURIComponent(
    'Hello The Urban Brew! I would like to know more about your menu.'
  )

  return (
    <section id="contact" className="bg-khadi px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        <div>
          <p className="font-mono text-xs tracking-widest text-terracotta mb-6">
            YOUR NEXT COFFEE MOMENT
          </p>

          <h2 className="font-display text-6xl md:text-7xl leading-tight">
            Come for the coffee.
            <span className="block italic text-terracotta">Stay for the feeling.</span>
          </h2>

          <p className="text-espresso/60 leading-8 mt-7 max-w-md">
            Good coffee, thoughtful conversations and a little space to
            breathe. We'd love to hear from you.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-terracotta text-white px-7 py-4 rounded-full text-sm mt-9 hover:bg-espresso transition-colors"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="bg-[#EAE3D8] p-8 md:p-12 flex flex-col justify-center gap-10">
          <div className="flex gap-5">
            <MapPin className="text-terracotta shrink-0" size={23}/>
            <div>
              <p className="font-mono text-xs tracking-widest">FIND YOUR WAY</p>
              <p className="font-display text-2xl mt-2">Your neighbourhood coffee corner.</p>
              <p className="text-xs text-espresso/50 mt-2">Sample location · Demo brand</p>
            </div>
          </div>

          <div className="flex gap-5">
            <Clock className="text-terracotta shrink-0" size={23}/>
            <div>
              <p className="font-mono text-xs tracking-widest">A GOOD TIME FOR COFFEE</p>
              <p className="font-display text-2xl mt-2">Every day, at your own pace.</p>
              <p className="text-xs text-espresso/50 mt-2">Sample opening hours · To be confirmed</p>
            </div>
          </div>

          <div className="border-t border-espresso/15 pt-7">
            <p className="font-mono text-[10px] tracking-widest text-cardamom">
              CRAFTED IN THE ESTATE. POURED FOR THE CITY.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact