export default function CTA(){
  const whatsapp = '919769239144'
  return (
    <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Need a quick pickup today?</h3>
          <p className="text-white/90 mt-1">Chat with us on WhatsApp or book a pickup in under a minute.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={`https://wa.me/${whatsapp}`} target="_blank" className="inline-flex items-center rounded-full bg-white text-sky-700 px-5 py-3 font-semibold shadow hover:bg-slate-50">Chat on WhatsApp</a>
          <a href="#services" className="inline-flex items-center rounded-full bg-sky-800 text-white px-5 py-3 font-semibold shadow hover:bg-sky-900">View Services</a>
        </div>
      </div>
    </section>
  )
}
