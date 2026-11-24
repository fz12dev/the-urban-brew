
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="bg-khadi py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000&q=85"
            alt="Warm and welcoming coffee space"
            className="w-full h-[480px] object-cover"
          />
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-cardamom text-white p-7">
            <p className="font-mono text-xs tracking-widest">OUR PHILOSOPHY</p>
            <p className="font-display text-2xl mt-2">Slow down.<br />Sip better.</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs tracking-[0.2em] text-terracotta mb-6">
            A LITTLE ABOUT US
          </p>

          <h2 className="font-display text-5xl md:text-6xl leading-tight text-espresso">
            Coffee is more than a <span className="italic text-terracotta">ritual.</span>
          </h2>

          <p className="text-espresso/65 leading-8 mt-7">
            We believe the best moments rarely need a reason. A familiar
            corner, a thoughtful cup, a conversation that runs a little
            longer. That's the feeling we're brewing.
          </p>

          <p className="text-espresso/65 leading-8 mt-4">
            Inspired by India's rich coffee-growing regions, The Urban Brew
            celebrates thoughtful sourcing and the simple joy of slowing down.
          </p>

          <a href="#origins" className="inline-flex items-center gap-2 mt-8 text-terracotta font-semibold text-sm">
            Discover our origins <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default About
