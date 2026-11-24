
import { ArrowUpRight, Coffee } from 'lucide-react'
import { motion } from 'framer-motion'

const offers = [
  { number: '01', title: 'The Morning Ritual', detail: 'Coffee + a freshly baked treat', price: '₹249', note: 'START YOUR DAY SLOWLY' },
  { number: '02', title: 'The Coffee Duo', detail: 'Two handcrafted coffees to share', price: '₹299', note: 'BETTER TOGETHER' },
]

function SpecialOffers() {
  return (
    <section className="bg-khadi px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs tracking-widest text-terracotta mb-5">A LITTLE SOMETHING EXTRA</p>
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-5 mb-12">
          <h2 className="font-display text-5xl md:text-7xl">Good things come <span className="italic text-terracotta">together.</span></h2>
          <p className="text-sm text-espresso/60 max-w-xs leading-7">Thoughtful pairings for your everyday coffee moments.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {offers.map((offer, i) => (
            <motion.div key={offer.number} whileHover={{ y: -5 }}
              className="bg-[#EAE3D8] p-8 md:p-12">
              <div className="flex justify-between">
                <span className="font-mono text-xs text-terracotta">{offer.number} / 02</span>
                <Coffee className="text-terracotta" />
              </div>
              <p className="font-mono text-[10px] tracking-widest text-cardamom mt-12">{offer.note}</p>
              <h3 className="font-display text-4xl mt-3">{offer.title}</h3>
              <p className="text-espresso/60 mt-3">{offer.detail}</p>
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-espresso/15">
                <span className="font-display text-3xl">{offer.price}</span>
                <a href="#contact" className="flex items-center gap-2 text-sm text-terracotta">Enquire <ArrowUpRight size={16}/></a>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="font-mono text-[9px] text-espresso/40 mt-5">SAMPLE OFFERS & PRICES · FICTIONAL PORTFOLIO BRAND</p>
      </div>
    </section>
  )
}

export default SpecialOffers
