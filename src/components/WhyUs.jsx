export default function WhyUs() {
  const items = [
    { title: 'Doorstep Pickup', desc: 'Convenient pickup from your home at your preferred time.' },
    { title: 'Affordable Pricing', desc: 'Transparent, pocket-friendly pricing for every garment.' },
    { title: 'Hygienic Washing', desc: 'Clean machines, quality detergents, and neat finishing.' },
    { title: 'Fast Delivery', desc: 'Quick turnaround to keep your wardrobe ready.' },
    { title: 'Neat & Clean Ironing', desc: 'Crisp ironing for a sharp, polished look.' },
  ]
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Why Choose Us</h2>
        <p className="text-slate-600 text-center mt-2">Service that fits your lifestyle and budget</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition bg-sky-50/40">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold mb-3">{idx+1}</div>
              <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="text-slate-600 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
