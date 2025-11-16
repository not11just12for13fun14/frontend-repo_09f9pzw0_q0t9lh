import { Sparkles, Tooth, Smile, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: Tooth,
    title: 'General Dentistry',
    desc: 'Checkups, cleanings, fillings, and preventative care for the whole family.'
  },
  {
    icon: Smile,
    title: 'Cosmetic Treatments',
    desc: 'Whitening, veneers, and bonding to enhance the appearance of your smile.'
  },
  {
    icon: Sparkles,
    title: 'Invisalign & Orthodontics',
    desc: 'Clear aligners and orthodontic care for a straighter, healthier smile.'
  },
  {
    icon: ShieldCheck,
    title: 'Implants & Restorations',
    desc: 'Implants, crowns, bridges, and other restorative treatments.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Comprehensive care, tailored to you</h2>
          <p className="mt-3 text-slate-600">We combine advanced technology with gentle techniques to deliver exceptional results.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl p-6 ring-1 ring-slate-200 hover:shadow-md transition-shadow bg-white">
              <div className="h-12 w-12 rounded-lg bg-teal-50 text-teal-600 grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
