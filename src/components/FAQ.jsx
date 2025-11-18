export default function FAQ(){
  const faqs = [
    { q: 'How long does delivery take?', a: 'Most orders are delivered within 24-48 hours depending on volume.' },
    { q: 'How do you price items?', a: 'Pricing is per garment type. See the pricing table for common items.' },
    { q: 'Do you offer home pickup?', a: 'Yes, doorstep pickup and delivery are included.' },
    { q: 'How can I contact you?', a: 'Call or WhatsApp us. You can also use the contact form.' },
  ]
  return (
    <section className="py-14 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">FAQs</h2>
        <div className="mt-8 max-w-3xl mx-auto divide-y divide-slate-200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none flex items-center justify-between text-slate-800 font-medium">
                {f.q}
                <span className="ml-4 text-sky-600">+</span>
              </summary>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
