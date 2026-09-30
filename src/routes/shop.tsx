import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Leaf,
  PackageOpen,
  Shirt,
  Sparkles,
  Sprout,
  Tractor,
  Wrench,
} from 'lucide-react'

export const Route = createFileRoute('/shop')({
  component: ShopPage,
})

const SHOPIFY_STORE = 'https://3b6g3h-05.myshopify.com'
const LAWNBRAIN_URL = 'https://lawnbrain.base44.app/#/home?source=lawnladco-shop'

const collections = [
  {
    icon: Shirt,
    eyebrow: 'First drop',
    title: 'Merch',
    description: 'Caps, sun hoodies, buffs, shirts and Lawn Lad Co. gear as each item becomes production-ready.',
    href: `${SHOPIFY_STORE}/collections/merch`,
    status: 'Coming first',
  },
  {
    icon: Sprout,
    eyebrow: 'Lawn system',
    title: 'Lawn Care',
    description: 'The future home of FEED, GREEN, ROOT, HYDRATE, REVIVE and other approved Lawn Lad lawn-care products.',
    href: `${SHOPIFY_STORE}/collections/lawn-care`,
    status: 'In development',
  },
  {
    icon: Wrench,
    eyebrow: 'Reset & recover',
    title: 'Renovation',
    description: 'Products, tools and recovery essentials for renovation projects and seasonal lawn resets.',
    href: `${SHOPIFY_STORE}/collections/renovation`,
    status: 'In development',
  },
  {
    icon: PackageOpen,
    eyebrow: 'One job. One box.',
    title: 'Kits & Bundles',
    description: 'Curated packs built around a specific lawn goal, from recovery to seasonal preparation.',
    href: `${SHOPIFY_STORE}/collections/kits-bundles`,
    status: 'Planned',
  },
  {
    icon: Brain,
    eyebrow: 'Smart picks',
    title: 'LawnBrain Picks',
    description: 'A future bridge from LawnBrain recommendations straight to the products or kits that match the plan.',
    href: `${SHOPIFY_STORE}/collections/lawnbrain-picks`,
    status: 'Connected next',
  },
  {
    icon: Tractor,
    eyebrow: 'Electric future',
    title: 'Green Fleet & Partners',
    description: 'Selected Green Fleet accessories, collaborations and future partner products.',
    href: `${SHOPIFY_STORE}/collections/green-fleet-partners`,
    status: 'Future range',
  },
]

function ShopPage() {
  return (
    <main className="shop-shell">
      <header className="shop-header">
        <a href="/" className="shop-brand" aria-label="Back to Lawn Lad Co. home">
          <span className="shop-brand__blade" />
          <span>Lawn Lad</span>
          <small>Co.</small>
        </a>
        <a href="/" className="shop-back">
          <ArrowLeft size={16} /> Back to Lawn Lad Co.
        </a>
      </header>

      <section className="shop-hero">
        <div className="shop-hero__glow" aria-hidden="true" />
        <div className="shop-hero__content">
          <span className="shop-kicker"><Leaf size={15} /> Lawn Lad Co. shop</span>
          <h1>Good lawns.<br /><em>Good gear.</em></h1>
          <p>
            The shop is being built around the same idea as LawnBrain: less guesswork, clearer choices and products with a job to do.
          </p>
          <div className="shop-hero__actions">
            <a href="#collections" className="button button--gold">Explore collections <ArrowRight size={17} /></a>
            <a href={LAWNBRAIN_URL} className="button button--ghost">Open LawnBrain <Brain size={17} /></a>
          </div>
        </div>
      </section>

      <section className="shop-status">
        <Sparkles size={18} />
        <div>
          <strong>Store build underway.</strong>
          <span>Collections are live in Shopify. Products will appear here as stock, pricing, pack sizes and product details are approved.</span>
        </div>
      </section>

      <section className="shop-collections" id="collections">
        <div className="shop-section-heading">
          <span>Shop by collection</span>
          <h2>Built as one <em>Lawn Lad system.</em></h2>
          <p>Merch can launch first. Lawn-care products stay in development until the real product, label and pricing are ready.</p>
        </div>

        <div className="shop-collection-grid">
          {collections.map((collection) => {
            const Icon = collection.icon
            return (
              <article className="shop-collection-card" key={collection.title}>
                <div className="shop-collection-card__top">
                  <div className="shop-collection-card__icon"><Icon /></div>
                  <span>{collection.status}</span>
                </div>
                <small>{collection.eyebrow}</small>
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
                <a href={collection.href} target="_blank" rel="noopener noreferrer">
                  View collection <ArrowRight size={15} />
                </a>
              </article>
            )
          })}
        </div>
      </section>

      <section className="shop-bridge">
        <div>
          <span className="shop-kicker"><Brain size={15} /> Where this is heading</span>
          <h2>Scan the lawn.<br /><em>Build the cart.</em></h2>
          <p>
            LawnBrain will eventually connect a lawn assessment to the most relevant Lawn Lad products and kits, creating a practical path from diagnosis to action.
          </p>
        </div>
        <a href={LAWNBRAIN_URL} className="button button--gold">Scan with LawnBrain <ArrowRight size={17} /></a>
      </section>
    </main>
  )
}
