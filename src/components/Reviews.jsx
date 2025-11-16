const reviews = [
  {
    name: 'Amanda',
    text: 'The kindest staff and the cleanest clinic I\'ve ever visited. My smile has never looked better!'
  },
  {
    name: 'Jorge',
    text: 'Had an emergency and they saw me the same day. Professional and gentle. Highly recommend.'
  },
  {
    name: 'Priya',
    text: 'I was nervous about whitening but they explained everything and the results are amazing.'
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">What patients say</h2>
          <p className="mt-3 text-slate-600">Real stories from people who trust us with their smiles.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-slate-50 rounded-xl p-6 ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-teal-500 text-white grid place-items-center font-semibold">{r.name[0]}</div>
                <div>
                  <p className="font-medium text-slate-900">{r.name}</p>
                  <p className="text-sm text-slate-500">Verified patient</p>
                </div>
              </div>
              <p className="mt-4 text-slate-700 leading-6">“{r.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
