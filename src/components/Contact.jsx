import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())
    data.consent = true

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!res.ok) throw new Error('Failed to send')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Book an appointment</h2>
          <p className="mt-3 text-slate-600">Send us a message and well get back to you shortly.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 ring-1 ring-slate-200">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600" />
              </div>
              <div>
                <label className="block text-sm text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600" />
              </div>
              <div>
                <label className="block text-sm text-slate-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600" />
              </div>
              <div>
                <label className="block text-sm text-slate-700">Preferred date</label>
                <input name="preferred_date" type="date" className="mt-1 w-full rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-700">Subject</label>
                <input name="subject" required className="mt-1 w-full rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-700">Message</label>
                <textarea name="message" rows="4" required className="mt-1 w-full rounded-md border-slate-300 focus:border-teal-600 focus:ring-teal-600" />
              </div>
            </div>

            <button type="submit" className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-colors">
              Send message
            </button>

            {status === 'sending' && <p className="mt-3 text-slate-600">Sending...</p>}
            {status === 'success' && <p className="mt-3 text-teal-700">Thanks! Well be in touch soon.</p>}
            {status === 'error' && <p className="mt-3 text-red-600">Something went wrong. Please try again.</p>}
          </form>

          <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Visit us</h3>
            <p className="mt-2 text-slate-600">123 Bright Ave, Suite 200, San Francisco, CA</p>
            <div className="mt-6 aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-slate-200">
              <img src="https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1740&auto=format&fit=crop" alt="Clinic interior" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
