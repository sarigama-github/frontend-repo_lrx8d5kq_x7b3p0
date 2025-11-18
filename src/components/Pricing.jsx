export default function Pricing(){
  const rows = [
    { item: 'Shirt', washing: '₹20', ironing: '₹15', combo: '₹30' },
    { item: 'Pant/Trousers', washing: '₹25', ironing: '₹20', combo: '₹40' },
    { item: 'Bedsheet', washing: '₹40', ironing: '₹25', combo: '₹60' },
    { item: 'Curtains (per panel)', washing: '₹50', ironing: '₹30', combo: '₹70' },
  ]

  const fabrics = [
    { name: 'Cotton', range: 'Standard', note: 'Best value', img: 'https://images.unsplash.com/photo-1610173826001-3a2a5f8f3703?q=80&w=600&auto=format&fit=crop' },
    { name: 'Silk', range: '+₹10–₹25', note: 'Delicate care', img: 'https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=600&auto=format&fit=crop' },
    { name: 'Wool', range: '+₹10–₹20', note: 'Low heat, gentle', img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=600&auto=format&fit=crop' },
    { name: 'Denim', range: '+₹5–₹10', note: 'Heavy fabric', img: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=600&auto=format&fit=crop' },
  ]

  return (
    <section className="py-14 bg-sky-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Pricing</h2>
        <p className="text-slate-600 text-center mt-2">Simple and transparent — fabric type may affect final price</p>

        <div className="mt-8 overflow-x-auto bg-white rounded-xl shadow border border-slate-100">
          <table className="min-w-full divide-y divide-slate-100">
            <thead className="bg-sky-50/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Item</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Washing</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Ironing</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Combo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r) => (
                <tr key={r.item} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-800">{r.item}</td>
                  <td className="px-6 py-4 text-slate-700">{r.washing}</td>
                  <td className="px-6 py-4 text-slate-700">{r.ironing}</td>
                  <td className="px-6 py-4 text-slate-700">{r.combo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-sm text-slate-500 text-center">Note: Prices are for standard cotton. Delicate or heavy fabrics may vary slightly due to special care and time required.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fabrics.map(f => (
            <div key={f.name} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{f.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-sky-100 text-sky-700 border border-sky-200">{f.range}</span>
                </div>
                <p className="text-slate-600 mt-1">{f.note}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
