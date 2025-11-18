export default function Hero({ onBookClick }) {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
            Doorstep Laundry Service –
            <span className="text-sky-600"> Fresh, Clean, and Affordable.</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            We pick up from your doorstep, wash & iron with care, and deliver back fresh.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onBookClick} className="inline-flex items-center rounded-full bg-sky-600 text-white px-5 py-3 font-semibold shadow hover:bg-sky-700">Book Pickup</button>
            <a href="/contact" className="inline-flex items-center rounded-full bg-white text-sky-700 px-5 py-3 font-semibold border border-sky-200 hover:bg-sky-50">Contact Us</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-slate-500">
            <div className="flex -space-x-2">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=60" className="w-8 h-8 rounded-full border-2 border-white"/>
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=60" className="w-8 h-8 rounded-full border-2 border-white"/>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=60" className="w-8 h-8 rounded-full border-2 border-white"/>
            </div>
            <p>Trusted by hundreds of happy customers</p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-sky-100">
            <img src="https://images.unsplash.com/photo-1635274605638-d44babc08a4f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGVhbiUyMGxhdW5kcnl8ZW58MHwwfHx8MTc2MzQ3NzczNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Clean laundry" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 border border-slate-100">
            <p className="text-sm font-medium text-slate-700">Doorstep Pickup & Fast Delivery</p>
          </div>
        </div>
      </div>
    </section>
  )
}
