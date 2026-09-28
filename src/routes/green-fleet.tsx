import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowLeft,
  ArrowRight,
  BatteryCharging,
  BarChart3,
  CheckCircle2,
  Leaf,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sun,
  Tractor,
  X,
  Zap,
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/green-fleet')({
  head: () => ({
    meta: [
      { title: 'Green Fleet Project | Lawn Lad Co.' },
      {
        name: 'description',
        content:
          'Follow Lawn Lad Co.’s Green Fleet Project: a youth-led transition toward battery-electric lawn care, solar-assisted mobile charging and measurable operating data.',
      },
    ],
  }),
  component: GreenFleetPage,
})

const projectItems = [
  {
    icon: Tractor,
    title: '80V mowing',
    text: 'The proposed anchor machine is the RYOBI 80V HP 54” ZT Ride-On Mower, selected to bring serious battery-electric capability into day-to-day lawn-care work.',
  },
  {
    icon: Sun,
    title: 'Solar-assisted charging',
    text: 'A purpose-built enclosed trailer is planned with roof-mounted solar generation and professionally designed charging infrastructure.',
  },
  {
    icon: BatteryCharging,
    title: 'Mobile energy storage',
    text: 'Stationary battery storage would buffer solar generation and support charging of the mower and handheld battery fleet between jobs.',
  },
  {
    icon: BarChart3,
    title: 'Measured, not guessed',
    text: 'The project will track machine hours, jobs completed, charging energy, solar contribution and operating outcomes so progress can be backed by real data.',
  },
]

const partnerBenefits = [
  'Real-world regional product use in an operating lawn-care business',
  'Documented mower hours, charging energy and project progress',
  'Partner recognition on the Green Fleet project, trailer and agreed content',
  'A youth-enterprise story connecting practical work, technology and sustainability',
]

function GreenFleetPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#122117]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c2919] text-white shadow-lg">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <a href="/" className="flex items-center gap-3" aria-label="Lawn Lad Co. home">
            <img
              src="/images/lawn-lad-co-logo.webp"
              alt="Lawn Lad Co."
              className="h-14 w-auto"
              width="120"
              height="104"
            />
          </a>

          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.12em] lg:flex">
            <a className="transition hover:text-[#efcc73]" href="/">Home</a>
            <a className="text-[#efcc73]" href="/green-fleet">Green Fleet</a>
            <a className="transition hover:text-[#efcc73]" href="/#services">Services</a>
            <a className="transition hover:text-[#efcc73]" href="/#contact">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="mailto:lawnladco@gmail.com" className="inline-flex items-center gap-2 text-sm font-semibold">
              <Mail size={16} className="text-[#d6ac47]" />
              lawnladco@gmail.com
            </a>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 lg:hidden"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#0c2919] px-5 py-4 text-sm font-semibold lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              <a className="rounded-lg px-3 py-3 hover:bg-white/5" href="/">Home</a>
              <a className="rounded-lg bg-white/5 px-3 py-3 text-[#efcc73]" href="/green-fleet">Green Fleet</a>
              <a className="rounded-lg px-3 py-3 hover:bg-white/5" href="/#services">Services</a>
              <a className="rounded-lg px-3 py-3 hover:bg-white/5" href="/#contact">Contact</a>
            </div>
          </nav>
        )}
      </header>

      <section className="relative overflow-hidden bg-[#0c2919] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#d6ac47]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#d6ac47]/40 bg-[#d6ac47]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#efcc73]">
              <Zap size={15} />
              Lawn Lad Co. Green Fleet Project
            </div>
            <h1 className="max-w-4xl font-[Manrope] text-5xl font-extrabold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
              Building a smarter way to
              <span className="block text-[#d6ac47]">power lawn care.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              A youth-led regional Queensland project exploring battery-electric mowing, solar-assisted mobile charging and measurable real-world performance.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#project"
                className="inline-flex min-h-12 items-center gap-2 bg-[#d6ac47] px-6 text-sm font-extrabold uppercase tracking-[.08em] text-[#0c2919] transition hover:bg-[#efcc73]"
              >
                Explore the project <ArrowRight size={18} />
              </a>
              <a
                href="mailto:lawnladco@gmail.com?subject=Green%20Fleet%20Partnership"
                className="inline-flex min-h-12 items-center gap-2 border border-white/25 px-6 text-sm font-extrabold uppercase tracking-[.08em] transition hover:border-[#d6ac47] hover:text-[#efcc73]"
              >
                Partner with us
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[30px] border border-white/15 bg-white/[.06] p-6 shadow-2xl backdrop-blur-sm sm:p-9">
              <div className="grid grid-cols-[auto_1fr] items-center gap-5 border-b border-white/10 pb-7">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#d6ac47] text-[#0c2919]">
                  <Tractor size={34} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[.15em] text-[#efcc73]">Proposed anchor machine</span>
                  <h2 className="mt-2 font-[Manrope] text-2xl font-bold leading-tight">RYOBI 80V HP 54” ZT Ride-On Mower</h2>
                </div>
              </div>
              <div className="grid gap-4 pt-7 sm:grid-cols-2">
                <div className="rounded-2xl bg-black/15 p-5">
                  <Sun className="text-[#d6ac47]" />
                  <strong className="mt-4 block text-lg">Solar-assisted</strong>
                  <span className="mt-1 block text-sm leading-6 text-white/65">Mobile charging trailer concept</span>
                </div>
                <div className="rounded-2xl bg-black/15 p-5">
                  <BarChart3 className="text-[#d6ac47]" />
                  <strong className="mt-4 block text-lg">Data-led</strong>
                  <span className="mt-1 block text-sm leading-6 text-white/65">Track energy, hours and outcomes</span>
                </div>
              </div>
              <p className="mt-6 text-xs leading-5 text-white/50">
                Project concept. Final equipment, trailer and electrical specifications will be confirmed with qualified suppliers and installers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f3f0e8]">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 py-5 sm:grid-cols-3 sm:px-8 lg:px-12">
          <div className="border-black/10 py-3 sm:border-r sm:px-6">
            <span className="block text-xs font-bold uppercase tracking-[.14em] text-[#6b746d]">Founder</span>
            <strong className="mt-1 block text-lg">Baylin McKay, 15</strong>
          </div>
          <div className="border-black/10 py-3 sm:border-r sm:px-6">
            <span className="block text-xs font-bold uppercase tracking-[.14em] text-[#6b746d]">Region</span>
            <strong className="mt-1 block text-lg">Bundaberg, Queensland</strong>
          </div>
          <div className="py-3 sm:px-6">
            <span className="block text-xs font-bold uppercase tracking-[.14em] text-[#6b746d]">Direction</span>
            <strong className="mt-1 block text-lg">Toward an electric fleet</strong>
          </div>
        </div>
      </section>

      <section id="project" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[.16em] text-[#2e6740]">The project</span>
            <h2 className="mt-4 font-[Manrope] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">
              From mower obsession to a working green fleet.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f6962]">
              Baylin’s interest in lawn care started at four. At eight, he used Christmas savings to buy his first mower. Lawn Lad Co. is the next chapter: turning that long-running interest into a genuine service business with a plan to reduce reliance on petrol-powered equipment over time.
            </p>
            <p className="mt-5 leading-7 text-[#5f6962]">
              The Green Fleet Project is intended to combine commercial battery equipment with a professionally designed mobile energy system. The aim is practical, visible and measurable: use the equipment in real jobs, record the data and learn what works.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projectItems.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="rounded-3xl border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(12,41,25,.07)]">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#173f27] text-[#efcc73]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 font-[Manrope] text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#6b746d]">{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#173f27] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[.16em] text-[#efcc73]">Why measure it?</span>
              <h2 className="mt-4 font-[Manrope] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">
                Better claims need better numbers.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                We do not want to call something “green” because it has a battery sticker on it. The project is designed to establish a baseline, record operating data and make future sustainability claims from evidence.
              </p>
            </div>
            <div className="grid gap-3">
              {[
                'Machine operating hours and jobs completed',
                'Charging electricity and solar contribution',
                'Battery performance across real working conditions',
                'Petrol equipment displaced where comparable',
                'Operating and maintenance observations over time',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.055] p-4">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#d6ac47]" />
                  <span className="leading-6 text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="rounded-[34px] border border-black/10 bg-[#f3f0e8] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#d6ac47] text-[#0c2919]">
                <ShieldCheck size={28} />
              </div>
              <span className="mt-6 block text-xs font-extrabold uppercase tracking-[.16em] text-[#2e6740]">Founding partners</span>
              <h2 className="mt-3 font-[Manrope] text-4xl font-extrabold tracking-[-.045em]">Help build the first fleet.</h2>
              <p className="mt-5 max-w-xl leading-7 text-[#6b746d]">
                Lawn Lad Co. is seeking equipment, renewable-energy and fabrication partners who see value in a genuine regional test bed for battery-powered lawn care.
              </p>
            </div>

            <div>
              <div className="grid gap-3">
                {partnerBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-2xl bg-white p-4">
                    <Leaf size={19} className="mt-0.5 shrink-0 text-[#2e6740]" />
                    <span className="leading-6">{benefit}</span>
                  </div>
                ))}
              </div>
              <a
                href="mailto:lawnladco@gmail.com?subject=Green%20Fleet%20Partnership"
                className="mt-6 inline-flex min-h-12 items-center gap-2 bg-[#0c2919] px-6 text-sm font-extrabold uppercase tracking-[.08em] !text-[#d6ac47] transition hover:bg-[#173f27] hover:!text-[#efcc73]"
              >
                Become a Green Fleet partner <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0c2919] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d6ac47]">Lawn Lad Co.</span>
            <h2 className="mt-2 font-[Manrope] text-3xl font-extrabold">Good lawns. Done properly.</h2>
            <p className="mt-3 max-w-2xl text-white/60">Follow the Green Fleet project as it moves from concept to working equipment, measured data and real regional jobs.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:lawnladco@gmail.com" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-semibold hover:border-[#d6ac47]">
              <Mail size={18} /> Email us
            </a>
            <a href="tel:0431913822" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-semibold hover:border-[#d6ac47]">
              <Phone size={18} /> 0431 913 822
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#081e12] px-5 py-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} Lawn Lad Co. · Bundaberg Region, Queensland · lawnladco.com.au
      </footer>
    </main>
  )
}
