
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { name: 'Our Story', href: '#about' },
  { name: 'Origins', href: '#origins' },
  { name: 'Our Menu', href: '#menu' },
  { name: 'Journal', href: '#gallery' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative z-50 bg-khadi">
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <a href="#home" className="font-display text-3xl font-semibold tracking-tight text-espresso">
          the urban brew<span className="text-terracotta">.</span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <a key={link.name} href={link.href}
              className="text-sm text-espresso/70 hover:text-terracotta transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact"
          className="hidden md:flex items-center gap-2 bg-espresso text-khadi px-6 py-3 rounded-full text-sm hover:bg-terracotta transition-colors">
          Find a Café <ArrowUpRight size={16} />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-espresso"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden px-6 pb-7 flex flex-col gap-6 bg-khadi">
          {links.map((link) => (
            <a key={link.name} href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-espresso">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)}
            className="text-terracotta font-semibold">
            Find a Café ↗
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
