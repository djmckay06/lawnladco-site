import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Leaf,
  Menu,
  Package,
  Shirt,
  Sparkles,
  Sprout,
  Tractor,
  X,
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/shop')({
  head: () => ({
    meta: [
      { title: 'Shop | Lawn Lad Co.' },
      {
        name: 'description',
        content:
          'Explore the Lawn Lad Co. shop: lawn care, renovation, merch, kits, LawnBrain picks and Green Fleet partner products.',
      },
    ],
  }),
  component: ShopPage,
})

const collections = [
  { icon: Sprout, title: 'Lawn Care', text: 'Purpose-built lawn nutrition, hydration, soil and treatment products as the Lawn Lad range is finalised.', status: 'Range in development' },
  { icon: Tractor, title: 'Renovation', text: 'Products, tools and recovery gear for lawn renovations, seasonal resets and post-renovation care.', status: 'Coming soon' },
  { icon: Shirt, title: 'Merch', text: 'Lawn Lad Co. caps, sun hoodies, buffs, shirts and branded gear built for work in the Queensland sun.', status: 'First drop in prep' },
  { icon: Package, title: 'Kits & Bundles', text: 'Simple packs that bring complementary products together around one clear lawn goal.', status: 'Coming soon' },
  { icon: Brain, title: 'LawnBrain Picks', text: 'The future recommendation shelf, connecting LawnBrain assessments with the products your lawn actually needs.', status: 'Integration planned' },
  { icon: Leaf, title: 'Green Fleet & Partners', text: 'Selected collaborations, Green Fleet accessories and future products from aligned project partners.', status: 'Partnerships in progress' },
]

function ShopPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#122117]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c2919] text-white shadow-lg">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <a href="/" className="flex items-center gap-3" aria-label="Lawn Lad Co. home">
            <img src="/images/lawn-lad-co-logo.webp" alt="Lawn Lad Co." className="h-14 w-auto" width="120" height="104" />
          </a>

          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.12em] lg:flex">
            <a className="transition hover:text-[#efcc73]" href="/">Home</a>
            <a className="text-[#efcc73]" href="/shop">Shop</a>
            <a className="transition hover:text-[#efcc73]" href="/#services">Services</a>
            <a className="transition hover:text-[#efcc73]" href="/green-fleet">Green Fleet</a>
            <a className="transition hover:text-[#efcc73]" href="/#contact">Contact</a>
          </nav>

          <a href="https://lawnbrain.base44.app/#/home?source=lawnladco" className="hidden min-h-11 items-center gap-2 bg-[#d6ac47] px-5 text-xs font-extrabold uppercase tracking-[.08em] text-[#0c2919] transition hover:bg-[#efcc73] lg:inline-flex">
            <Brain size={16} /> Open LawnBrain
          </a>

          <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 lg:hidden" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#0c2919] px-5 py-4 text-sm font-semibold lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              <a className="rounded-lg px-3 py-3 hover:bg-white/5" href="/">Home</a>
              <a className="rounded-lg bg-white/5 px-3 py-3 text-[#efcc73]" href="/shop">Shop</a>
              <a className="rounded-lg px-3 py-3 hover:bg-white/5" href="/#services">Services</a>
              <a className="rounded-lg px-3 py-3 hover:bg-white/5" href="/green-fleet">Green Fleet</a>
              <a className="rounded-lg px-3 py-3 hover:bg-white/5" href="/#contact">Contact</a>
            </div>
          </nav>
        )}
      </header>

      <section className="relative overflow-hidden bg-[#0c2919] text-white">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-[#d6ac47]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <a href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/65 transition hover:text-[#efcc73]"><ArrowLeft size={17} /> Back to Lawn Lad Co.</a>
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d6ac47]/40 bg-[#d6ac47]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#efcc73]"><Sparkles size={15} /> Lawn Lad Co. Shop</div>
              <h1 className="max-w-4xl font-[Manrope] text-5xl font-extrabold leading-[.94] tracking-[-.055em] sm:text-6xl lg:text-7xl">Buy less guesswork.<span className="block text-[#d6ac47]">Use what your lawn needs.</span></h1>
            </div>
            <div className="lg:pb-2">
              <p className="max-w-xl text-lg leading-8 text-white/72">The Lawn Lad shop is being built around one simple idea: clear products, clear jobs and a direct connection to LawnBrain recommendations.</p>
              <p className="mt-5 text-sm leading-7 text-white/55">Merchandise can launch first. Lawn-care products will only be offered once formulations, pack sizes, pricing, labels and directions are finalised.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f3f0e8]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
          <div><span className="block text-xs font-extrabold uppercase tracking-[.14em] text-[#2e6740]">Shopify connected</span><strong className="mt-1 block text-lg">The commerce engine is in. The first product drop is next.</strong></div>
          <a href="https://lawnbrain.base44.app/#/home?source=lawnladco" className="inline-flex min-h-11 items-center gap-2 border border-[#173f27]/20 px-5 text-xs font-extrabold uppercase tracking-[.08em] text-[#173f27] transition hover:border-[#173f27] hover:bg-[#173f27] hover:text-white"><Brain size={16} /> Get a LawnBrain recommendation</a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-[.16em] text-[#2e6740]">Browse the future range</span>
          <h2 className="mt-4 font-[Manrope] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Six shelves. One Lawn Lad system.</h2>
          <p className="mt-5 text-lg leading-8 text-[#6b746d]">Each collection already exists in Shopify. As products become genuinely ready to sell, they can drop into these shelves without rebuilding the website.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((collection) => {
            const Icon = collection.icon
            return (
              <article key={collection.title} className="group flex min-h-[310px] flex-col rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(12,41,25,.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(12,41,25,.10)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#173f27] text-[#efcc73]"><Icon size={24} /></div>
                  <span className="rounded-full bg-[#f3f0e8] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.11em] text-[#546159]">{collection.status}</span>
                </div>
                <h3 className="mt-8 font-[Manrope] text-2xl font-extrabold tracking-[-.035em]">{collection.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-[#6b746d]">{collection.text}</p>
                <div className="mt-7 flex items-center gap-2 text-sm font-extrabold uppercase tracking-[.08em] text-[#2e6740]">Building now <ArrowRight size={16} className="transition group-hover:translate-x-1" /></div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-[#173f27] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[.16em] text-[#efcc73]">The smart bit comes next</span>
            <h2 className="mt-4 max-w-3xl font-[Manrope] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Scan the lawn. Understand the problem. Buy the right thing.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">LawnBrain-to-Shopify recommendations are the next layer, so the shop becomes part of the lawn-care journey rather than a random catalogue.</p>
          </div>
          <a href="https://lawnbrain.base44.app/#/home?source=lawnladco" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#d6ac47] px-6 text-sm font-extrabold uppercase tracking-[.08em] text-[#0c2919] transition hover:bg-[#efcc73]">Open LawnBrain <ArrowRight size={18} /></a>
        </div>
      </section>

      <footer className="bg-[#0c2919] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div className="flex items-center gap-4">
            <img src="/images/lawn-lad-co-logo.webp" alt="Lawn Lad Co." className="h-16 w-auto" width="120" height="104" />
            <div><strong className="block font-[Manrope] text-lg">Lawn Lad Co.</strong><span className="text-sm text-white/55">Good lawns. Done properly.</span></div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-semibold text-white/70">
            <a className="hover:text-[#efcc73]" href="/">Home</a>
            <a className="hover:text-[#efcc73]" href="/green-fleet">Green Fleet</a>
            <a className="hover:text-[#efcc73]" href="/#contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
