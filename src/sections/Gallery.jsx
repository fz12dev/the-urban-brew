
import { ArrowUpRight } from 'lucide-react'

const photos = [
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85', alt: 'Coffee being prepared', label: 'THE DAILY POUR' },
  { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=85', alt: 'Fresh coffee brewing', label: 'SLOW MOMENTS' },
  { src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=85', alt: 'Cafe interior', label: 'OUR KIND OF SPACE' },
  { src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=900&q=85', alt: 'Coffee house atmosphere', label: 'MADE FOR PAUSES' },
]

function Gallery() {
  return (
    <section id="gallery" className="bg-khadi px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs tracking-widest text-terracotta mb-5">A GLIMPSE INTO OUR WORLD</p>
        <div className="flex justify-between items-end mb-12 gap-5">
          <h2 className="font-display text-5xl md:text-7xl">The little <span className="italic text-terracotta">moments.</span></h2>
          <span className="hidden md:flex items-center gap-2 text-sm text-espresso/60">OUR VISUAL JOURNAL <ArrowUpRight size={16}/></span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {photos.map((photo, i) => (
            <div key={photo.label} className={`group overflow-hidden ${i % 2 === 1 ? 'md:mt-12' : ''}`}>
              <div className="overflow-hidden aspect-[3/4]">
                <img src={photo.src} alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              </div>
              <p className="font-mono text-[9px] md:text-[10px] tracking-widest text-espresso/60 mt-4">{photo.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery