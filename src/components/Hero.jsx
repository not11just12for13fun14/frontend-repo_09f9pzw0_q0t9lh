import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-teal-50" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Gentle, modern dentistry for confident smiles
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-5 text-lg text-slate-600 max-w-xl">
            From routine checkups to cosmetic treatments, our team provides personalized care in a calm, comfortable environment.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-wrap gap-4">
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors">Our services</a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors">Book an appointment</a>
          </motion.div>

          <div className="mt-8 flex items-center gap-6 text-slate-600">
            <div>
              <p className="text-2xl font-semibold text-slate-900">1,200+</p>
              <p>Happy patients</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-900">4.9/5</p>
              <p>Average rating</p>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 bg-white">
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1740&auto=format&fit=crop" alt="Modern dental clinic" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg ring-1 ring-slate-900/5 p-4 w-56">
            <p className="text-sm font-medium text-slate-900">Same-day appointments</p>
            <p className="text-xs text-slate-600">Emergency care available</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
