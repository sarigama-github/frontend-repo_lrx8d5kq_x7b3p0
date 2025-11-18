export default function Testimonials(){
  const items = [
    { name: 'Anita Sharma', role: 'Goregaon (E)', rating: 5, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300', text: 'Reliable and affordable. Pickup and delivery are super convenient!' },
    { name: 'Rahul Verma', role: 'Film City Rd', rating: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300', text: 'Clothes came back spotless and perfectly ironed. Highly recommend!' },
    { name: 'Pooja Singh', role: 'Pathanwadi', rating: 4, avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300', text: 'Great service, quick turnaround. My go-to laundry now.' },
    { name: 'Imran Khan', role: 'Near Oberoi Mall', rating: 5, avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300', text: 'Neat ironing and careful with delicate fabrics. On-time delivery!' },
    { name: 'Seema Patil', role: 'Aarey Rd', rating: 5, avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=300', text: 'WhatsApp ordering is so easy. Prices are fair and transparent.' },
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">What Customers Say</h2>
        <p className="text-slate-600 text-center mt-2">Rated highly by families and working professionals across Goregaon (E)</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-100 p-6 bg-sky-50/40 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1" aria-label={`${t.rating} star rating`}>
                {Array.from({length: t.rating}).map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
                {Array.from({length: 5 - t.rating}).map((_, i) => (
                  <span key={i} className="text-slate-300">★</span>
                ))}
              </div>
              <p className="text-slate-700 mt-3">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
