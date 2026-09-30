import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Crown,
  Leaf,
  Mail,
  ShieldCheck,
  Shirt,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/shop')({
  component: ShopPage,
})

const LOOKBOOK =
  'https://cdn.shopify.com/s/files/1/0824/4989/1513/files/lawn-lad-lawns-lifestyle-inaugural-lookbook.png?v=1790749063'

const pieces = [
  {
    name: 'Oversized Heavyweight Tee — Logoed',
    detail: 'Statement back graphic · premium oversized fit · black / forest / white',
    accent: 'Logoed',
  },
  {
    name: 'Oversized Heavyweight Tee — Stealth',
    detail: '3D embroidered grass mark + LAWN LAD CO. · gold on black/forest · dark green on white',
    accent: 'Stealth',
  },
  {
    name: 'Premium Heavyweight Hoodie — Lifestyle',
    detail: 'Relaxed heavyweight fit · restrained gold branding · black / forest',
    accent: 'Lifestyle',
  },
  {
    name: 'Blackout Snapback — Technical 5 Panel',
    detail: 'Raised gold grass embroidery · gold side slogan · striped under-brim',
    accent: 'Headwear',
  },
  {
    name: 'Utility Overshirt — Crew',
    detail: 'Rugged premium layer · understated Lawn Lad detailing · olive',
    accent: 'Utility',
  },
]

function ShopPage() {
  return (
    <main className="shop-shell shop-launch">
      <header className="shop-header">
        <a href="/" className="shop-brand" aria-label="Back to Lawn Lad Co. home">
          <span className="shop-brand__blade" />
          <span>Lawn Lad</span>
          <small>Co.</small>
        </a>
        <div className="shop-header__right">
          <span className="shop-header__status"><i /> Inaugural collection live</span>
          <a href="/" className="shop-back"><ArrowLeft size={16} /> Back to Lawn Lad Co.</a>
        </div>
      </header>

      <section className="launch-hero">
        <div className="launch-hero__copy">
          <span className="shop-kicker"><Crown size={15} /> First-ever Lawn Lad streetwear collection</span>
          <h1>Lawns.<br /><em>Lifestyle.</em></h1>
          <p>
            Premium streetwear inspired by wide open lawns, early mornings and a lifestyle built outdoors.
            Heavyweight cuts, technical details and the Lawn Lad visual language, without looking like work merch.
          </p>
          <div className="launch-hero__actions">
            <a href="#collection" className="button button--gold">See the collection <ArrowRight size={17} /></a>
            <a
              href="mailto:info@lawnladco.com.au?subject=Lawns%20%26%20Lifestyle%20Early%20Access"
              className="button button--ghost"
            >
              Early access <Mail size={17} />
            </a>
          </div>
          <div className="shop-hero__proof">
            <span><Check size={14} /> Premium street fit</span>
            <span><Check size={14} /> Limited inaugural collection</span>
            <span><Check size={14} /> Designed in the Lawn Lad system</span>
          </div>
        </div>
        <div className="launch-hero__mark" aria-hidden="true">
          <span>LAWNS</span>
          <strong>&</strong>
          <span>LIFESTYLE</span>
        </div>
      </section>

      <section className="shop-status">
        <Sparkles size={18} />
        <div>
          <strong>Collection preview is live.</strong>
          <span>Checkout opens once final samples, retail pricing, size runs and stock quantities are locked.</span>
        </div>
      </section>

      <section className="launch-lookbook" id="collection">
        <div className="launch-section-heading">
          <span>Inaugural collection</span>
          <h2>The first <em>Lawns & Lifestyle</em> line.</h2>
          <p>Approved creative direction, now moving from concept into production sampling and supplier costing.</p>
        </div>
        <figure className="launch-lookbook__frame">
          <img src={LOOKBOOK} alt="Lawn Lad Co. Lawns & Lifestyle inaugural streetwear lookbook" />
        </figure>
      </section>

      <section className="launch-lineup">
        <div className="launch-section-heading launch-section-heading--light">
          <span>Five-piece launch capsule</span>
          <h2>Streetwear first.<br /><em>Lawn Lad always.</em></h2>
        </div>
        <div className="launch-lineup__grid">
          {pieces.map((piece, index) => (
            <article className="launch-piece" key={piece.name}>
              <span className="launch-piece__number">0{index + 1}</span>
              <div className="launch-piece__icon"><Shirt /></div>
              <small>{piece.accent}</small>
              <h3>{piece.name}</h3>
              <p>{piece.detail}</p>
              <span className="launch-piece__status">Production sampling next</span>
            </article>
          ))}
        </div>
      </section>

      <section className="launch-signature">
        <div>
          <span className="shop-kicker"><Leaf size={15} /> The brand language</span>
          <h2>Good lawns.<br /><em>Done properly.</em></h2>
          <p>
            Gold grass embroidery, lawn-striping graphics, dark forest, washed black and cream.
            The design system is built to work on garments, headwear, packaging and future Lawn Lad releases.
          </p>
          <div className="launch-signature__points">
            <span><ShieldCheck size={15} /> Premium materials</span>
            <span><ShieldCheck size={15} /> Clean embroidery</span>
            <span><ShieldCheck size={15} /> Limited first edition</span>
          </div>
        </div>
        <a
          href="mailto:info@lawnladco.com.au?subject=Lawns%20%26%20Lifestyle%20Early%20Access"
          className="button button--gold"
        >
          Join early access <ArrowRight size={17} />
        </a>
      </section>
    </main>
  )
}
