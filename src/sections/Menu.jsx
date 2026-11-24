
import { ArrowUpRight } from 'lucide-react'
import menuData from '../data/menuData'

function Menu() {
  return (
    <section id="menu" className="bg-espresso text-khadi py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs tracking-[0.2em] text-brass mb-5">
            GOOD THINGS, BREWED SLOWLY
          </p>
          <h2 className="font-display text-5xl md:text-7xl">
            A menu worth <span className="italic text-brass">pausing for.</span>
          </h2>
          <p className="text-khadi/60 leading-7 mt-6">
            Thoughtful cups and little indulgences for every kind of day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16">
          {menuData.map((item) => (
            <article key={item.id} className="py-7 border-b border-khadi/20">
              <div className="flex justify-between gap-5">
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-brass mb-3">
                    {item.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl">
                    {item.name}
                  </h3>
                  <p className="text-sm text-khadi/55 mt-3 leading-6 max-w-sm">
                    {item.description}
                  </p>
                  {item.tag && (
                    <span className="inline-block mt-4 text-[9px] font-mono tracking-widest text-brass border border-brass/40 px-3 py-2">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="font-mono text-sm whitespace-nowrap pt-1">
                  ₹{item.price}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#contact" className="inline-flex items-center gap-3 bg-terracotta text-white px-7 py-4 rounded-full text-sm hover:bg-khadi hover:text-espresso transition-colors">
            Enquire About Our Menu <ArrowUpRight size={17} />
          </a>
        </div>

        <p className="font-mono text-[9px] text-khadi/40 text-center mt-8 tracking-widest">
          SAMPLE MENU & PRICES · FICTIONAL PORTFOLIO BRAND
        </p>

      </div>
    </section>
  )
}

export default Menu
