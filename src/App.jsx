import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-full bg-gradient-to-br from-teal-400 to-sky-500 grid place-items-center text-white font-bold">D</span>
            <span className="text-white font-semibold text-lg">BrightSmile Dental</span>
          </div>
          <p className="mt-3 text-sm text-slate-400 max-w-sm">Gentle, modern dentistry in the heart of the city. Were here to keep you smiling.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Hours</h4>
          <ul className="mt-3 text-sm space-y-1 text-slate-400">
            <li>Mon–Fri: 8:00 AM – 6:00 PM</li>
            <li>Sat: 9:00 AM – 2:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <ul className="mt-3 text-sm space-y-1 text-slate-400">
            <li>123 Bright Ave, Suite 200</li>
            <li>San Francisco, CA</li>
            <li>(415) 555-0123</li>
            <li>hello@brightsmile.dental</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} BrightSmile Dental. All rights reserved.</div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
