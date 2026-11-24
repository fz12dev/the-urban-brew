
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Origins from './sections/Origins'
import Menu from './sections/Menu'
import SpecialOffers from './sections/SpecialOffers'
import RoastSelector from './sections/RoastSelector'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Origins />
        <Menu />
        <SpecialOffers />
        <RoastSelector />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
