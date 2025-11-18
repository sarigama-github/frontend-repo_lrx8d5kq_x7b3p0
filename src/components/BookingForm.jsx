import { useState } from 'react'

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    service: 'Washing + Ironing',
    pickup_date: '',
    notes: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const payload = { ...form, pickup_date: form.pickup_date || null }
      const res = await fetch(`${baseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to create booking')
      setStatus({ ok: true, msg: 'Pickup booked successfully! We will contact you shortly.' })
      setForm({ name: '', phone: '', address: '', service: 'Washing + Ironing', pickup_date: '', notes: '' })
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow border border-slate-100 p-6">
          <h2 className="text-2xl font-bold text-slate-900">Book Pickup</h2>
          <p className="text-slate-600 mt-1">Fill the form and we will arrange a pickup from your location.</p>
          {status && (
            <div className={`mt-3 text-sm p-3 rounded ${status.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {status.msg}
            </div>
          )}
          <form onSubmit={submit} className="mt-4 grid grid-cols-1 gap-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Full name" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone / WhatsApp" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            </div>
            <input name="address" value={form.address} onChange={handleChange} required placeholder="Pickup address" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <select name="service" value={form.service} onChange={handleChange} className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400">
                <option>Washing</option>
                <option>Ironing</option>
                <option>Washing + Ironing</option>
                <option>Pickup & Delivery</option>
              </select>
              <input type="date" name="pickup_date" value={form.pickup_date} onChange={handleChange} className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            </div>
            <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Notes (optional)" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" rows={3} />
            <button disabled={loading} className="mt-1 inline-flex items-center justify-center rounded-lg bg-sky-600 text-white px-4 py-2 font-semibold hover:bg-sky-700 disabled:opacity-50">
              {loading ? 'Booking...' : 'Confirm Pickup'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
