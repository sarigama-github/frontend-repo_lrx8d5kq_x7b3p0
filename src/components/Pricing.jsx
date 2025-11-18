export default function Pricing(){
  const rows = [
    { item: 'Shirt', washing: '₹20', ironing: '₹15', combo: '₹30' },
    { item: 'Pant/Trousers', washing: '₹25', ironing: '₹20', combo: '₹40' },
    { item: 'Bedsheet', washing: '₹40', ironing: '₹25', combo: '₹60' },
    { item: 'Curtains (per panel)', washing: '₹50', ironing: '₹30', combo: '₹70' },
  ]
  return (
    <section className="py-14 bg-sky-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Pricing</h2>
        <p className="text-slate-600 text-center mt-2">Simple and transparent</p>
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
      </div>
    </section>
  )
}
