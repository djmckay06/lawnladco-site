import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Check,
  Leaf,
  PackageOpen,
  Shirt,
  Sparkles,
  Sprout,
  Tractor,
  Wrench,
  Zap,
} from 'lucide-react'

export const Route = createFileRoute('/shop')({
  component: ShopPage,
})

const SHOPIFY_STORE = 'https://3b6g3h-05.myshopify.com'
const LAWNBRAIN_URL = 'https://lawnbrain.base44.app/#/home?source=lawnladco-shop'

const collections = [
  {
    icon: Shirt,
    eyebrow: 'Drop 01',
    title: 'Merch',
    description: 'Caps, sun hoodies, buffs, shirts and proper Lawn Lad kit as each piece becomes production-ready.',
    href: `${SHOPIFY_STORE}/collections/merch`,
    status: 'Launching first',
    featured: true,
  },
  {
    icon: Sprout,
    eyebrow: 'Lawn system',
    title: 'Lawn Care',
    description: 'The future home of FEED, GREEN, ROOT, HYDRATE, REVIVE and the wider Lawn Lad care system.',
    href: `${SHOPIFY_STORE}/collections/lawn-care`,
    status: 'In development',
  },
  {
    icon: Wrench,
    eyebrow: 'Reset + recover',
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
    eyebrow: 'Smart commerce',
    title: 'LawnBrain Picks',
    description: 'The bridge from LawnBrain recommendations straight to the products or kits that match the plan.',
    href: `${SHOPIFY_STORE}/collections/lawnbrain-picks`,
    status: 'Connecting next',
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

const productCodes = ['FEED', 'GREEN', 'ROOT', 'HYDRATE', 'REVIVE', 'PET PEE']

function ShopPage() {
  return (
    <main className="shop-shell">
      <header className="shop-header">
        <a href="/" className="shop-brand" aria-label="Back to Lawn Lad Co. home">
          <span className="shop-brand__blade" />
          <span>Lawn Lad</span>
          <small>Co.</small>
        </a>
        <div className="shop-header__right">
          <span className="shop-header__status"><i /> Store build live</span>
          <a href="/" className="shop-back">
            <ArrowLeft size={16} /> Back to Lawn Lad Co.
          </a>
        </div>
      </header>

      <section className="shop-hero">
        <div className="shop-hero__noise" aria-hidden="true" />
        <div className="shop-hero__glow" aria-hidden="true" />
        <div className="shop-hero__content">
          <span className="shop-kicker"><Leaf size={15} /> Lawn Lad Co. shop</span>
          <h1>Gear up.<br /><em>Level up.</em></h1>
          <p>
            Merch, lawn systems and smarter product recommendations, all built to plug into the Lawn Lad ecosystem.
            No random shelf-filler. Everything earns its spot.
          </p>
          <div className="shop-hero__actions">
            <a href="#collections" className="button button--gold">Explore the range <ArrowRight size={17} /></a>
            <a href={LAWNBRAIN_URL} className="button button--ghost">Open LawnBrain <Brain size={17} /></a>
          </div>
          <div className="shop-hero__proof">
            <span><Check size={14} /> Australian store</span>
            <span><Check size={14} /> Shopify powered</span>
            <span><Check size={14} /> LawnBrain ready</span>
          </div>
        </div>

        <div className="shop-hero__visual" aria-hidden="true">
          <div className="shop-orbit shop-orbit--one" />
          <div className="shop-orbit shop-orbit--two" />
          <div className="shop-pack shop-pack--main">
            <span>LAWN LAD</span>
            <strong>DROP 01</strong>
            <small>GOOD LAWNS.<br />DONE PROPERLY.</small>
          </div>
          <div className="shop-pack shop-pack--left">
            <span>LL</span>
            <strong>CAP</strong>
          </div>
          <div className="shop-pack shop-pack--right">
            <span>LL</span>
            <strong>GEAR</strong>
          </div>
          <div className="shop-hero__badge"><Zap size={18} /> FIRST DROP</div>
        </div>
      </section>

      <section className="shop-ticker" aria-label="Lawn Lad product system">
        <div>
          <span>MERCH</span><b>•</b><span>LAWN CARE</span><b>•</b><span>LAWNBRAIN PICKS</span><b>•</b>
          <span>KITS</span><b>•</b><span>GREEN FLEET</span><b>•</b><span>RENOVATION</span>
        </div>
      </section>

      <section className="shop-status">
        <Sparkles size={18} />
        <div>
          <strong>Building in public.</strong>
          <span>Collections are live. Products appear only when the real stock, pricing and product details are ready.</span>
        </div>
      </section>

      <section className="shop-drop">
        <div className="shop-drop__number">01</div>
        <div className="shop-drop__copy">
          <span className="shop-kicker">First to the gate</span>
          <h2>Lawn Lad <em>Merch Drop.</em></h2>
          <p>Blackout cap. Sun hoodie. Buff. Workwear. The first sellable layer of the Lawn Lad brand is being built here.</p>
        </div>
        <a href={`${SHOPIFY_STORE}/collections/merch`} target="_blank" rel="noopener noreferrer" className="shop-drop__cta">
          <span>View merch collection</span><ArrowRight size={20} />
        </a>
      </section>

      <section className="shop-collections" id="collections">
        <div className="shop-section-heading">
          <span>Shop by collection</span>
          <h2>One brand.<br /><em>One system.</em></h2>
          <p>What starts with merch grows into a connected lawn-care marketplace, with LawnBrain eventually guiding customers to what their lawn actually needs.</p>
        </div>

        <div className="shop-collection-grid">
          {collections.map((collection, index) => {
            const Icon = collection.icon
            return (
              <article className={`shop-collection-card ${collection.featured ? 'shop-collection-card--featured' : ''}`} key={collection.title}>
                <span className="shop-collection-card__index">0{index + 1}</span>
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

      <section className="shop-system">
        <div className="shop-system__intro">
          <span className="shop-kicker">The product language</span>
          <h2>Simple names.<br /><em>Clear jobs.</em></h2>
          <p>The Lawn Lad lawn-care range is designed to feel more like a toolkit than a chemistry shelf.</p>
        </div>
        <div className="shop-system__codes">
          {productCodes.map((code, index) => (
            <div key={code} className="shop-system__code">
              <span>0{index + 1}</span>
              <strong>{code}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="shop-bridge">
        <div>
          <span className="shop-kicker"><Brain size={15} /> The clever bit</span>
          <h2>Scan the lawn.<br /><em>Build the cart.</em></h2>
          <p>
            LawnBrain is the bridge between “what’s wrong with my lawn?” and “what do I actually need?”.
            The goal is a recommendation engine that turns assessment into a practical, shoppable plan.
          </p>
          <div className="shop-bridge__flow">
            <span>SCAN</span><ArrowRight size={14} /><span>DIAGNOSE</span><ArrowRight size={14} />
            <span>RECOMMEND</span><ArrowRight size={14} /><span>SHOP</span>
          </div>
        </div>
        <a href={LAWNBRAIN_URL} className="button button--gold">Scan with LawnBrain <ArrowRight size={17} /></a>
      </section>
    </main>
  )
}
