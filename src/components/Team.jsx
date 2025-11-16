const team = [
  {
    name: 'Dr. Elena Park, DDS',
    role: 'Principal Dentist',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1740&auto=format&fit=crop'
  },
  {
    name: 'Dr. Marcus Lee, DMD',
    role: 'Cosmetic & Restorative',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1740&auto=format&fit=crop'
  },
  {
    name: 'Sarah Johnson, RDH',
    role: 'Hygienist',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1740&auto=format&fit=crop'
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Meet our team</h2>
          <p className="mt-3 text-slate-600">Experienced, compassionate professionals dedicated to your comfort and care.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="bg-white rounded-xl overflow-hidden ring-1 ring-slate-200">
              <img src={m.img} alt={m.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                <p className="text-slate-600">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
