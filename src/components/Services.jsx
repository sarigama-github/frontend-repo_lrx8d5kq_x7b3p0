export default function Services(){
  const services = [
    { title: 'Washing', img: 'https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?w=1200&q=70', desc: 'Gentle, hygienic washing for all fabrics.' },
    { title: 'Ironing', img: 'https://images.unsplash.com/photo-1545169390-b0a4fd3e1a4f?w=1200&q=70', desc: 'Crisp, neat, and clean ironing for a polished look.' },
    { title: 'Washing + Ironing Combo', img: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=1200&q=70', desc: 'Best value: washed and ironed to perfection.' },
    { title: 'Pickup & Delivery', img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a6f?w=1200&q=70', desc: 'Doorstep pickup and fast delivery at your convenience.' },
  ]
  return (
    <section className="py-14 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Services</h2>
        <p className="text-slate-600 text-center mt-2">Everything your wardrobe needs</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow hover:shadow-lg transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} className="w-full h-full object-cover" alt={s.title} />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="text-slate-600 mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
