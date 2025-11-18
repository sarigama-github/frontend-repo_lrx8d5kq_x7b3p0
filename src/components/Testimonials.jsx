export default function Testimonials(){
  const items = [
    { name: 'Anita Sharma', text: 'Reliable and affordable. Pickup and delivery are super convenient!' },
    { name: 'Rahul Verma', text: 'Clothes came back spotless and perfectly ironed. Highly recommend!' },
    { name: 'Pooja Singh', text: 'Great service, quick turnaround. My go-to laundry now.' },
  ]
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">What Customers Say</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-xl border border-slate-100 p-6 bg-sky-50/40 shadow-sm">
              <p className="text-slate-700">“{t.text}”</p>
              <p className="mt-3 font-semibold text-slate-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
