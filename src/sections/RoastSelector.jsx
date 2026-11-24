
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, RefreshCw } from 'lucide-react'

const roasts = [
  { name: 'Araku Sunrise', profile: 'Bright & Fruity', milk: 'Black', method: 'Pour Over', description: 'A lively cup with fruit-forward notes and a delicate finish.' },
  { name: 'Coorg Comfort', profile: 'Nutty & Chocolatey', milk: 'With Milk', method: 'Cappuccino', description: 'A comforting, balanced cup with cocoa and roasted nut inspiration.' },
  { name: 'Estate Classic', profile: 'Nutty & Chocolatey', milk: 'Black', method: 'French Press', description: 'A smooth, full-bodied coffee for unhurried mornings.' },
  { name: 'Valley Bloom', profile: 'Bright & Fruity', milk: 'With Milk', method: 'Flat White', description: 'A gentle, expressive coffee balanced with silky milk.' },
]

function RoastSelector() {
  const [profile, setProfile] = useState('Bright & Fruity')
  const [milk, setMilk] = useState('Black')
  const [showResult, setShowResult] = useState(false)

  const recommendation = roasts.find(r => r.profile === profile && r.milk === milk)

  return (
    <section className="bg-cardamom text-khadi px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-mono text-xs tracking-widest text-[#D8CFC2] mb-5">A CUP THAT FEELS LIKE YOU</p>
        <h2 className="font-display text-5xl md:text-7xl">Find your <span className="italic text-brass">roast.</span></h2>
        <p className="text-khadi/65 mt-5">Tell us what you enjoy. We'll suggest a cup to match.</p>

        <div className="grid md:grid-cols-2 gap-12 text-left mt-16">
          <div>
            <p className="font-mono text-xs tracking-widest text-brass mb-6">01 — YOUR FLAVOUR</p>
            <div className="grid grid-cols-2 gap-3">
              {['Bright & Fruity', 'Nutty & Chocolatey'].map(option => (
                <button key={option} onClick={() => {setProfile(option); setShowResult(false)}}
                  className={`p-5 border text-sm transition-colors ${profile === option ? 'bg-khadi text-espresso border-khadi' : 'border-khadi/30 text-khadi hover:border-brass'}`}>
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest text-brass mb-6">02 — YOUR BREW STYLE</p>
            <div className="grid grid-cols-2 gap-3">
              {['Black', 'With Milk'].map(option => (
                <button key={option} onClick={() => {setMilk(option); setShowResult(false)}}
                  className={`p-5 border text-sm transition-colors ${milk === option ? 'bg-khadi text-espresso border-khadi' : 'border-khadi/30 text-khadi hover:border-brass'}`}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button onClick={() => setShowResult(true)}
          className="mt-12 bg-terracotta px-8 py-4 rounded-full inline-flex items-center gap-3 text-sm hover:bg-khadi hover:text-espresso transition-colors">
          Find my coffee <ArrowRight size={17}/>
        </button>

        {showResult && (
          <motion.div initial={{opacity: 0, y: 15}} animate={{opacity: 1, y: 0}}
            className="mt-10 bg-khadi text-espresso p-8 md:p-10 text-left max-w-xl mx-auto">
            <p className="font-mono text-xs tracking-widest text-terracotta">YOUR MATCH</p>
            <h3 className="font-display text-4xl mt-4">{recommendation.name}</h3>
            <p className="text-sm text-espresso/65 mt-3">{recommendation.description}</p>
            <p className="font-mono text-xs mt-6 text-cardamom">SUGGESTED METHOD · {recommendation.method.toUpperCase()}</p>
            <button onClick={() => {setProfile('Bright & Fruity'); setMilk('Black'); setShowResult(false)}}
              className="text-sm text-terracotta mt-6 inline-flex items-center gap-2">
              <RefreshCw size={14}/> Start again
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default RoastSelector
