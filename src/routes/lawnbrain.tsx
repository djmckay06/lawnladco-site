import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CalendarDays,
  Camera,
  CheckCircle2,
  CloudSun,
  LineChart,
  ScanLine,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/lawnbrain')({
  head: () => ({
    meta: [
      { title: 'LawnBrain | Lawn Lad Co.' },
      {
        name: 'description',
        content:
          'Meet LawnBrain by Lawn Lad Co. Scan your lawn, understand what it needs and turn the result into a practical care plan.',
      },
    ],
  }),
  component: LawnBrainPage,
})

const APP_URL = 'https://lawnbrain.base44.app/#/home?source=lawnladco'
const SCAN_URL = 'https://lawnbrain.base44.app/#/register?source=lawnladco'

const features = [
  {
    icon: Camera,
    title: 'Scan what you see',
    text: 'Upload lawn photos or a short video so LawnBrain can help turn visible symptoms into a clearer starting point.',
  },
  {
    icon: Brain,
    title: 'Understand the lawn',
    text: 'Bring lawn condition, turf needs and property context together in one simple profile instead of scattered guesswork.',
  },
  {
    icon: CalendarDays,
    title: 'Build the plan',
    text: 'Turn the assessment into practical next steps, seasonal care and a repeatable lawn-maintenance rhythm.',
  },
  {
    icon: CloudSun,
    title: 'Factor in conditions',
    text: 'Use local weather and lawn context to make recommendations more relevant to what is happening outside.',
  },
]

function LawnBrainPage() {
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
            <a className="text-[#efcc73]" href="/lawnbrain">LawnBrain</a>
            <a className="transition hover:text-[#efcc73]" href="/lawn-league">Lawn League</a>
            <a className="transition hover:text-[#efcc73]" href="/green-fleet">Green Fleet</a>
            <a className="transition hover:text-[#efcc73]" href="/#contact">Contact</a>
          </nav>

          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 bg-[#d6ac47] px-5 text-xs font-extrabold uppercase tracking-[.1em] text-[#0c2919] transition hover:bg-[#efcc73] lg:inline-flex"
          >
            Launch LawnBrain <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#0c2919] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="absolute -right-24 top-16 h-[480px] w-[480px] rounded-full bg-[#d6ac47]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#d6ac47]/40 bg-[#d6ac47]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#efcc73]">
              <Sparkles size={15} />
              Lawn Lad intelligence
            </div>
            <h1 className="max-w-4xl font-[Manrope] text-6xl font-extrabold leading-[.88] tracking-[-.065em] sm:text-7xl lg:text-[92px]">
              Your lawn.
              <span className="block text-[#d6ac47]">Decoded.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              LawnBrain turns a lawn scan into a clearer picture of what is happening, what matters next and how to build a practical care plan around it.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={SCAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 bg-[#d6ac47] px-6 text-sm font-extrabold uppercase tracking-[.08em] text-[#0c2919] transition hover:bg-[#efcc73]"
              >
                Scan my lawn <ScanLine size={18} />
              </a>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 border border-white/25 px-6 text-sm font-extrabold uppercase tracking-[.08em] transition hover:border-[#d6ac47] hover:text-[#efcc73]"
              >
                Open LawnBrain <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-xs font-bold uppercase tracking-[.1em] text-white/50">
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-[#d6ac47]" /> One lawn profile</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-[#d6ac47]" /> Practical next steps</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-[#d6ac47]" /> Built for improvement</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[30px] border border-white/15 bg-white/[.06] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#efcc73]">Lawn profile</span>
                  <h2 className="mt-2 font-[Manrope] text-3xl font-extrabold tracking-[-.04em]">What needs attention?</h2>
                </div>
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#d6ac47] text-[#0c2919]">
                  <Brain size={29} />
                </div>
              </div>

              <div className="grid gap-3 pt-6 sm:grid-cols-2">
                {[
                  ['01', 'Scan', 'Photos + video'],
                  ['02', 'Assess', 'Condition + context'],
                  ['03', 'Plan', 'Next best actions'],
                  ['04', 'Improve', 'Track the change'],
                ].map(([number, title, detail]) => (
                  <div key={number} className="rounded-2xl border border-white/10 bg-black/15 p-5">
                    <span className="text-[10px] font-black tracking-[.16em] text-[#d6ac47]">{number}</span>
                    <strong className="mt-4 block text-lg">{title}</strong>
                    <small className="mt-1 block text-sm text-white/52">{detail}</small>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#d6ac47]/25 bg-[#d6ac47]/10 p-4 text-sm text-white/70">
                <LineChart size={19} className="shrink-0 text-[#efcc73]" />
                <span>The goal is simple: less guesswork, clearer lawn decisions.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f3f0e8]">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 py-5 sm:grid-cols-3 sm:px-8 lg:px-12">
          <div className="border-black/10 py-3 sm:border-r sm:px-6">
            <span className="block text-xs font-bold uppercase tracking-[.14em] text-[#6b746d]">Start</span>
            <strong className="mt-1 block text-lg">Scan the lawn</strong>
          </div>
          <div className="border-black/10 py-3 sm:border-r sm:px-6">
            <span className="block text-xs font-bold uppercase tracking-[.14em] text-[#6b746d]">Then</span>
            <strong className="mt-1 block text-lg">Build the plan</strong>
          </div>
          <div className="py-3 sm:px-6">
            <span className="block text-xs font-bold uppercase tracking-[.14em] text-[#6b746d]">Keep going</span>
            <strong className="mt-1 block text-lg">Measure improvement</strong>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[.16em] text-[#2e6740]">How it fits</span>
            <h2 className="mt-4 font-[Manrope] text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
              The brains behind the lawn.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f6962]">
              LawnBrain is the decision layer in the Lawn Lad ecosystem. It helps connect what you can see in the lawn with a sensible next action, then links that plan back to care, products and progress.
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
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[.16em] text-[#d6ac47]">One connected ecosystem</span>
              <h2 className="mt-4 max-w-4xl font-[Manrope] text-4xl font-extrabold tracking-[-.05em] sm:text-6xl">
                Scan. Plan. Treat. Improve. <span className="text-[#d6ac47]">Then climb.</span>
              </h2>
              <div className="mt-7 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[.12em] text-white/55">
                <span>LawnBrain</span><ArrowRight size={15} className="text-[#d6ac47]" />
                <span>Lawn Lad Products</span><ArrowRight size={15} className="text-[#d6ac47]" />
                <span>Lawn League</span>
              </div>
            </div>
            <a
              href="/lawn-league"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#d6ac47] px-6 text-sm font-extrabold uppercase tracking-[.08em] text-[#0c2919] transition hover:bg-[#efcc73]"
            >
              Meet Lawn League <ArrowRight size={18} />
            </a>
          </div>
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
