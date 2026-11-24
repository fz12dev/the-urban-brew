
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="bg-khadi">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-12">
        <div className="grid md:grid-cols-[1.05fr_0.95fr] min-h-[620px]">

          <div className="flex flex-col justify-center py-16 md:py-20 md:pr-12">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs tracking-[0.2em] text-cardamom mb-8"
            >
              INDIAN SPECIALTY COFFEE · EST. FOR EVERYDAY
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-tight text-espresso"
            >
              Crafted in the estate.
              <span className="block italic text-terracotta mt-2">
                Poured for the city.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-espresso/70 text-base md:text-lg leading-8 max-w-md mt-8"
            >
              Thoughtfully sourced Indian coffee, familiar warmth, and a little
              more room to slow down. Your everyday pause starts here.
            </motion.p>

            <div className="flex flex-wrap items-center gap-6 mt-10">
              <a href="#menu"
                className="inline-flex items-center gap-3 bg-terracotta text-white px-7 py-4 rounded-full text-sm hover:bg-espresso transition-colors">
                Explore the Menu <ArrowUpRight size={17} />
              </a>

              <a href="#about"
                className="text-sm text-espresso border-b border-espresso/40 pb-1 hover:text-terracotta transition-colors">
                Discover our story
              </a>
            </div>

            <div className="mt-16 flex items-center gap-3 text-espresso/50">
              <ArrowDown size={16} />
              <span className="font-mono text-[10px] tracking-[0.18em]">
                SCROLL TO EXPLORE
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-[420px] md:min-h-full overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=85"
              alt="Freshly brewed specialty coffee"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-espresso/10" />

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em]">
                  THE ART OF SLOW COFFEE
                </p>
                <p className="font-display text-2xl mt-1">
                  A moment, well made.
                </p>
              </div>
              <span className="text-xs border border-white/60 rounded-full px-3 py-2">
                01 / 04
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
