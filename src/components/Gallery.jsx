export default function Gallery(){
  const images = [
    { src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop', alt: 'Freshly washed shirts' },
    { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop', alt: 'Laundry machines' },
    { src: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200&auto=format&fit=crop', alt: 'Professional ironing' },
    { src: 'https://images.unsplash.com/photo-1503341873906-91d1932a9758?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGcmVzaGx5JTIwd2FzaGVkJTIwc2hpcnRzfGVufDB8MHx8fDE3NjM0Nzk4MDh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Neatly folded clothes' },
  ]
  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Gallery</h2>
        <p className="text-slate-600 text-center mt-2">Real visuals of washing, ironing and delivery</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.src} className="group relative overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
              <img src={img.src} alt={img.alt} className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
