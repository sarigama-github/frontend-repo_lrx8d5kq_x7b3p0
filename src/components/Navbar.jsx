import { useState } from 'react'

export default function Navbar({ onBookClick }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/80 backdrop-blur border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-sky-600 text-2xl font-extrabold">Kanojia</span>
            <span className="text-slate-800 text-2xl font-extrabold">Laundry</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-slate-700">
            <a href="/about" className="hover:text-sky-600">About</a>
            <a href="/services" className="hover:text-sky-600">Services</a>
            <a href="/pricing" className="hover:text-sky-600">Pricing</a>
            <a href="/contact" className="hover:text-sky-600">Contact</a>
            <button onClick={onBookClick} className="ml-4 inline-flex items-center rounded-full bg-sky-600 text-white px-4 py-2 font-semibold hover:bg-sky-700">Book Pickup</button>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen((o)=>!o)}>
            <span className="sr-only">Toggle menu</span>
            <div className="w-6 h-0.5 bg-slate-700 mb-1"></div>
            <div className="w-6 h-0.5 bg-slate-700 mb-1"></div>
            <div className="w-6 h-0.5 bg-slate-700"></div>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="/about" className="block hover:text-sky-600">About</a>
            <a href="/services" className="block hover:text-sky-600">Services</a>
            <a href="/pricing" className="block hover:text-sky-600">Pricing</a>
            <a href="/contact" className="block hover:text-sky-600">Contact</a>
            <button onClick={onBookClick} className="w-full inline-flex items-center justify-center rounded-full bg-sky-600 text-white px-4 py-2 font-semibold hover:bg-sky-700">Book Pickup</button>
          </div>
        )}
      </div>
    </header>
  )
}
