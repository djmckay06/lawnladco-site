import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Gauge,
  MapPinned,
  Medal,
  Target,
  TrendingUp,
  Trophy,
} from 'lucide-react'

export const Route = createFileRoute('/lawn-league')({
  head: () => ({
    meta: [
      { title: 'Lawn League | Lawn Lad Co.' },
      {
        name: 'description',
        content:
          'Meet Lawn League by Lawn Lad Co. Track your Lawn Rating, measure improvement and see how your lawn stacks up from suburb to Australia.',
      },
    ],
  }),
  component: LawnLeaguePage,
})

const APP_URL = 'https://lawnbrain.base44.app/#/league?source=lawnladco'

const features = [
  {
    icon: Gauge,
    title: 'Your Lawn Rating',
    text: 'Turn lawn progress into one clear score you can follow over time rather than relying on memory and vibes.',
  },
  {
    icon: TrendingUp,
    title: 'Track the climb',
    text: 'See improvement as the lawn changes, giving every renovation, treatment and maintenance cycle a visible purpose.',
  },
  {
    icon: MapPinned,
    title: 'Local to national',
    text: 'Compare how your lawn stacks up across your suburb and the wider Lawn League community.',
  },
  {
    icon: Trophy,
    title: 'Make it competitive',
    text: 'Add a little sporting energy to lawn care with rankings, milestones and something worth chasing after each update.',
  },
]

function LawnLeaguePage() {
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
            <a className="transition hover:text-[#efcc73]" href="/lawnbrain">LawnBrain</a>
            <a className="text-[#efcc73]" href="/lawn-league">Lawn League</a>
            <a className="transition hover:text-[#efcc73]" href="/green-fleet">Green Fleet</a>
            <a className="transition hover:text-[#efcc73]" href="/#contact">Contact</a>
          </nav>

          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 bg-[#d6ac47] px-5 text-xs font-extrabold uppercase tracking-[.1em] text-[#0c2919] transition hover:bg-[#efcc73] lg:inline-flex"
          >
            Enter Lawn League <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#0c2919] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="absolute -right-24 top-10 h-[520px] w-[520px] rounded-full bg-[#d6ac47]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.06fr_.94fr] lg:px-12 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#d6ac47]/40 bg-[#d6ac47]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#efcc73]">
              <Trophy size={15} />
              Lawn Lad competition layer
            </div>
            <h1 className="max-w-4xl font-[Manrope] text-6xl font-extrabold leading-[.88] tracking-[-.065em] sm:text-7xl lg:text-[92px]">
              Rate it.
              <span className="block text-[#d6ac47]">Climb it.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              Lawn League makes improvement visible. Track your Lawn Rating, follow the climb and see how your lawn stacks up beyond the front fence.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 bg-[#d6ac47] px-6 text-sm font-extrabold uppercase tracking-[.08em] text-[#0c2919] transition hover:bg-[#efcc73]"
              >
                Enter Lawn League <Trophy size={18} />
              </a>
              <a
                href="/lawnbrain"
                className="inline-flex min-h-12 items-center gap-2 border border-white/25 px-6 text-sm font-extrabold uppercase tracking-[.08em] transition hover:border-[#d6ac47] hover:text-[#efcc73]"
              >
                Start with LawnBrain <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-xs font-bold uppercase tracking-[.1em] text-white/50">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-[#d6ac47]" /> Rating</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-[#d6ac47]" /> Progress</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-[#d6ac47]" /> Rankings</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[30px] border border-white/15 bg-white/[.06] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#efcc73]">League preview</span>
                  <h2 className="mt-2 font-[Manrope] text-3xl font-extrabold tracking-[-.04em]">Lawn Rating</h2>
                </div>
                <div className="text-right">
                  <strong className="font-[Manrope] text-5xl font-extrabold leading-none text-[#d6ac47]">82</strong>
                  <span className="block text-[10px] font-bold uppercase tracking-[.12em] text-white/40">Demo score</span>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                {[
                  ['Health', '88%'],
                  ['Density', '84%'],
                  ['Colour', '79%'],
                  ['Presentation', '77%'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-[.1em]">
                      <span className="text-white/55">{label}</span>
                      <span className="text-[#efcc73]">{value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-[#d6ac47]" style={{ width: value }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/15 p-4 text-center">
                  <strong className="block text-xl text-[#efcc73]">+7</strong>
                  <small className="text-[9px] font-bold uppercase tracking-[.1em] text-white/40">This month</small>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/15 p-4 text-center">
                  <strong className="block text-xl text-[#efcc73]">#12</strong>
                  <small className="text-[9px] font-bold uppercase tracking-[.1em] text-white/40">Suburb</small>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/15 p-4 text-center">
                  <strong className="block text-xl text-[#efcc73]">3</strong>
                  <small className="text-[9px] font-bold uppercase tracking-[.1em] text-white/40">Milestones</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f3f0e8]">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 py-5 sm:grid-cols-3 sm:px-8 lg:px-12">
          <div className="border-black/10 py-3 sm:border-r sm:px-6">
            <span className="block text-xs font-bold uppercase tracking-[.14em] text-[#6b746d]">Measure</span>
            <strong className="mt-1 block text-lg">Your Lawn Rating</strong>
          </div>
          <div className="border-black/10 py-3 sm:border-r sm:px-6">
            <span className="block text-xs font-bold uppercase tracking-[.14em] text-[#6b746d]">Follow</span>
            <strong className="mt-1 block text-lg">Your improvement</strong>
          </div>
          <div className="py-3 sm:px-6">
            <span className="block text-xs font-bold uppercase tracking-[.14em] text-[#6b746d]">Compare</span>
            <strong className="mt-1 block text-lg">Beyond your backyard</strong>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[.16em] text-[#2e6740]">Why the league exists</span>
            <h2 className="mt-4 font-[Manrope] text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
              Give the work a scoreboard.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f6962]">
              Lawn care is a long game. Lawn League gives each scan, treatment and renovation a visible marker so improvement feels less abstract and a lot more rewarding.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <article key={feature.title} className="rounded-3xl border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(12,41,25,.07)]">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#173f27] text-[#efcc73]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 font-[Manrope] text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-[#667068]">{feature.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0b2718] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d6ac47]">From diagnosis to competition</span>
            <h2 className="mt-4 max-w-4xl font-[Manrope] text-4xl font-extrabold tracking-[-.05em] sm:text-6xl">
              LawnBrain finds the next move. <span className="text-[#d6ac47]">Lawn League tracks the climb.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              The two tools should feel like one system, not two separate apps. That is exactly why they now live inside the Lawn Lad website first.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-5">
              <Target className="text-[#d6ac47]" />
              <div><strong className="block">Set the benchmark</strong><span className="text-sm text-white/45">Know where the lawn starts.</span></div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-5">
              <BarChart3 className="text-[#d6ac47]" />
              <div><strong className="block">Watch the trend</strong><span className="text-sm text-white/45">See whether the work is moving the needle.</span></div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-5">
              <Medal className="text-[#d6ac47]" />
              <div><strong className="block">Chase the next rung</strong><span className="text-sm text-white/45">Make progress something worth pursuing.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f0e8] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[.16em] text-[#2e6740]">Ready to play?</span>
            <h2 className="mt-2 font-[Manrope] text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">Put your lawn on the board.</h2>
          </div>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#d6ac47] px-6 text-sm font-extrabold uppercase tracking-[.08em] text-[#0c2919] transition hover:bg-[#efcc73]"
          >
            Enter Lawn League <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="bg-[#071a10] px-5 py-7 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="inline-flex items-center gap-2 font-bold uppercase tracking-[.1em] text-white/70">
            <ArrowLeft size={14} /> Back to Lawn Lad Co.
          </a>
          <span>© 2026 Lawn Lad Co. · Good lawns. Done properly.</span>
        </div>
      </footer>
    </main>
  )
}
