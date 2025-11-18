import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handle = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send message')
      setStatus({ ok: true, msg: 'Thank you! We will reach out shortly.' })
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (e) {
      setStatus({ ok: false, msg: e.message })
    }
  }

  return (
    <section className="py-14 bg-sky-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
          <p className="text-slate-600 mt-2">Call/WhatsApp: <a href="tel:+919000000000" className="text-sky-700 font-semibold">+91 90000 00000</a> · <a href="https://wa.me/919000000000" className="text-sky-700 font-semibold" target="_blank">WhatsApp</a></p>
          <p className="text-slate-600 mt-1">Address: 123, Main Street, Your City</p>
          <div className="mt-6 rounded-xl overflow-hidden border border-slate-100">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609644377!2d72.74109834916568!3d19.08219783925295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzU2LjAiTiA3MsKwNDQnMzIuMCJF!5e0!3m2!1sen!2sin!4v1614032123456!5m2!1sen!2sin" width="100%" height="260" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow border border-slate-100 p-6">
          <h3 className="text-xl font-semibold text-slate-900">Send a Message</h3>
          {status && (
            <div className={`mt-3 text-sm p-3 rounded ${status.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {status.msg}
            </div>
          )}
          <form onSubmit={submit} className="mt-4 grid grid-cols-1 gap-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input name="name" value={form.name} onChange={handle} required placeholder="Full name" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <input name="email" value={form.email} onChange={handle} placeholder="Email (optional)" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            </div>
            <input name="phone" value={form.phone} onChange={handle} placeholder="Phone / WhatsApp" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <textarea name="message" value={form.message} onChange={handle} required placeholder="Your message" rows={5} className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <button className="inline-flex items-center rounded-lg bg-sky-600 text-white px-4 py-2 font-semibold hover:bg-sky-700">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
