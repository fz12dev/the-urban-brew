
import { ArrowUpRight, Camera } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-espresso text-khadi px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 pb-16">
          <div>
            <a href="#home" className="font-display text-4xl font-semibold">
              the urban brew<span className="text-terracotta">.</span>
            </a>
            <p className="text-khadi/50 text-sm leading-7 max-w-sm mt-5">
              Thoughtfully sourced Indian coffee and warm hospitality.
              A little pause in the middle of the everyday.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-xs tracking-widest text-brass mb-6">EXPLORE</p>
              <div className="flex flex-col gap-4 text-sm text-khadi/65">
                <a href="#about" className="hover:text-white">Our Story</a>
                <a href="#origins" className="hover:text-white">Origins</a>
                <a href="#menu" className="hover:text-white">Our Menu</a>
                <a href="#gallery" className="hover:text-white">Gallery</a>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs tracking-widest text-brass mb-6">SAY HELLO</p>
              <div className="flex flex-col gap-4 text-sm text-khadi/65">
                <a href="#contact" className="hover:text-white">Contact Us</a>
                <a href="#contact" className="hover:text-white">Visit Us</a>
                <a href="#home" className="inline-flex items-center gap-2 hover:text-white">
                  Back to top <ArrowUpRight size={14}/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-khadi/15 pt-7 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-khadi/40">
            © {new Date().getFullYear()} The Urban Brew. Portfolio demo brand.
          </p>
          <p className="font-mono text-[9px] tracking-widest text-khadi/40">
            SLOW CRAFT. URBAN PULSE.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer