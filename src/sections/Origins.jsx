
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const origins = [
  {
    number: '01',
    name: 'Chikmagalur',
    region: 'KARNATAKA, INDIA',
    notes: 'Soft cocoa, roasted nuts & gentle sweetness.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&q=85',
  },
  {
    number: '02',
    name: 'Coorg',
    region: 'KARNATAKA, INDIA',
    notes: 'Warm spice, dark chocolate & earthy depth.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85',
  },
  {
    number: '03',
    name: 'Araku Valley',
    region: 'ANDHRA PRADESH, INDIA',
    notes: 'Bright fruit, caramel & a delicate finish.',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=900&q=85',
  },
]

function Origins() {
  return (
    <section id="origins" className="bg-[#EAE3D8] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-cardamom mb-5">
              ROOTED IN INDIAN SOIL
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-espresso">
              From the <span className="italic text-terracotta">origin.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-espresso/65 leading-7">
            Every region tells a different story. Explore the landscapes
            and flavor inspirations behind Indian specialty coffee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {origins.map((origin, index) => (
            <motion.article
              key={origin.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group"
            >
              <div className="relative overflow-hidden h-[340px]">
                <img
                  src={origin.image}
                  alt={`Coffee inspiration from ${origin.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-5 left-5 bg-khadi text-espresso font-mono text-xs px-3 py-2">
                  {origin.number} / 03
                </span>
              </div>

              <div className="pt-6 border-b border-espresso/20 pb-5">
                <p className="font-mono text-[10px] tracking-widest text-terracotta">
                  {origin.region}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <h3 className="font-display text-3xl text-espresso">{origin.name}</h3>
                  <ArrowUpRight className="text-terracotta" />
                </div>
                <p className="text-sm text-espresso/65 mt-3">{origin.notes}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="font-mono text-[10px] text-espresso/45 mt-8 tracking-wide">
          SAMPLE ORIGIN STORIES · FICTIONAL PORTFOLIO BRAND · NOT VERIFIED SOURCING CLAIMS
        </p>
      </div>
    </section>
  )
}

export default Origins
