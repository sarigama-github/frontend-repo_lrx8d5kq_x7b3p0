export default function Process(){
  const steps = [
    {
      title: 'Doorstep Pickup',
      desc: 'We collect your laundry from Goregaon (E) at a time that suits you.',
      img: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Hygienic Washing',
      desc: 'Fabric-friendly detergents and separate loads for colors and whites.',
      img: 'https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Neat Ironing',
      desc: 'Crisp finishing with temperature set to fabric type to avoid shine or burns.',
      img: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'On‑time Delivery',
      desc: 'Packed fresh and delivered back to your doorstep — ready to wear.',
      img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a6f?q=80&w=1600&auto=format&fit=crop'
    }
  ]

  return (
    <section className="py-16 bg-sky-50/50" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">How It Works</h2>
        <p className="text-slate-600 text-center mt-2">Pickup, Washing, Ironing, Delivery — handled end‑to‑end</p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
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
