import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import BookingModal from './components/BookingModal'
import BeforeAfterSlider from './components/BeforeAfterSlider'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar onBookClick={() => setOpen(true)} />
      <main>
        <Hero onBookClick={() => setOpen(true)} />
        <Services />
        <Pricing />
        <WhyUs />
        <BeforeAfterSlider />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* WhatsApp floating */}
      <a href="https://wa.me/919000000000" target="_blank" className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600">
        <span className="text-xl">🟢</span>
      </a>

      <BookingModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default App
