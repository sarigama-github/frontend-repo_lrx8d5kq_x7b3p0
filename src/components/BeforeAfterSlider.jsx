import { useState } from 'react'

export default function BeforeAfterSlider(){
  const [value, setValue] = useState(50)
  const before = 'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?w=1600&q=60'
  const after = 'https://images.unsplash.com/photo-1587019158091-1a10ae5c51ef?w=1600&q=60'

  return (
    <section className="py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Before & After</h2>
        <p className="text-slate-600 text-center mt-2">Slide to see the difference</p>
        <div className="mt-8 relative w-full overflow-hidden rounded-2xl shadow border border-slate-100">
          <div className="relative w-full h-72 sm:h-96">
            <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover select-none" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }}>
              <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover select-none" />
            </div>
            <div className="absolute inset-y-0" style={{ left: `${value}%` }}>
              <div className="-ml-0.5 w-1 h-full bg-white/80 backdrop-blur" />
            </div>
          </div>
          <input aria-label="before-after" type="range" min="0" max="100" value={value} onChange={(e)=>setValue(parseInt(e.target.value))} className="w-full appearance-none h-2 bg-sky-100 accent-sky-600" />
        </div>
      </div>
    </section>
  )
}
