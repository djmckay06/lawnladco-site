import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Brain,
  CalendarCheck,
  Check,
  CircleDollarSign,
  Clock3,
  Facebook,
  Heart,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Menu,
  PackageOpen,
  Phone,
  Scissors,
  ShieldCheck,
  Shovel,
  Sparkles,
  Sprout,
  Star,
  Tractor,
  Trophy,
  Droplets,
  X,
  Zap,
} from 'lucide-react'
import { useState, type ChangeEvent, type FormEvent, type SVGProps } from 'react'

function TikTokIcon({ size = 24, className = '', ...props }: SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-tiktok ${className}`}
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})

const LAWNBRAIN_URL = 'https://lawnbrain.base44.app/home?source=lawnladco'
const LAWNLEAGUE_URL = 'https://lawnbrain.base44.app/league?source=lawnladco'
const LAWN_SCAN_URL = 'https://lawnbrain.base44.app/register?source=lawnladco'

const services = [
  {
    number: '01',
    icon: Scissors,
    title: 'Lawn maintenance',
    description:
      'Clean, consistent mowing with crisp edges, careful trimming and a spotless finish every visit.',
    features: ['Precision mowing', 'Edging & trimming', 'Complete blow-down'],
  },
  {
    number: '02',
    icon: Sprout,
    title: 'Lawn care',
    description:
      'Targeted nutrition and protection programs built around your turf, soil and the Wide Bay climate.',
    features: ['Seasonal fertilising', 'Weed management', 'Pest & grub control'],
  },
  {
    number: '03',
    icon: Shovel,
    title: 'Lawn renovations',
    description:
      'A complete reset for tired, compacted or patchy lawns—planned, prepared and finished properly.',
    features: ['Scarifying & aeration', 'Topdressing', 'Turf preparation & laying'],
  },
]

const packages = [
  {
    name: 'Essential',
    eyebrow: 'Regular maintenance',
    price: '65',
    description: 'The reliable foundation for a tidy, well-kept property.',
    features: [
      'Regular mowing',
      'Edge trimming',
      'Whipper snipping',
      'Hard-surface blow-down',
      'Basic clean-up',
    ],
  },
  {
    name: 'Plus',
    eyebrow: 'Maintenance + care',
    price: '95',
    description: 'Ongoing maintenance with the treatments your lawn needs to thrive.',
    featured: true,
    features: [
      'Everything in Essential',
      'Removal of clippings',
      'Seasonal fertilising',
      'Weed management',
      'Lawn health check',
      'Priority booking',
    ],
  },
  {
    name: 'Premium',
    eyebrow: 'Complete lawn program',
    price: '115',
    description: 'Proactive, year-round care for a lawn that stays one step ahead.',
    features: [
      'Everything in Plus',
      'Insect & grub control',
      'Soil improvement',
      'Seasonal treatments',
      'Annual lawn review',
    ],
  },
]

const equipment = [
  { icon: Tractor, name: 'Scarifier', price: '200', note: 'Remove thatch & open the canopy' },
  { icon: Sprout, name: 'Aerator', price: '200', note: 'Relieve compaction & improve roots' },
  { icon: Shovel, name: 'Topdresser', price: '350', note: 'Spread soil evenly & efficiently' },
]

const ecosystem = [
  {
    icon: Brain,
    eyebrow: 'LawnBrain',
    title: 'Know what your lawn needs.',
    description:
      'Upload photos or a short video, get an AI-assisted lawn assessment and turn it into a practical care plan.',
    href: LAWNBRAIN_URL,
    action: 'Open LawnBrain',
  },
  {
    icon: Trophy,
    eyebrow: 'Lawn League',
    title: 'Rate it. Improve it. Climb.',
    description:
      'Track your Lawn Rating, measure improvement and see how your lawn stacks up from suburb to Australia.',
    href: LAWNLEAGUE_URL,
    action: 'Join Lawn League',
  },
  {
    icon: PackageOpen,
    eyebrow: 'Lawn Lad Products',
    title: 'A simpler product system.',
    description:
      'Explore the Lawn Lad range being built around the same needs LawnBrain identifies in your lawn.',
    href: '#products',
    action: 'Explore the range',
  },
]

const productFamilies = [
  { name: 'FEED', role: 'Core lawn nutrition', group: 'Core range', icon: Sprout },
  { name: 'GREEN', role: 'Colour and iron support', group: 'Core range', icon: Sparkles },
  { name: 'ROOT', role: 'Soil and root conditioning', group: 'Core range', icon: Leaf },
  { name: 'HYDRATE', role: 'Wetting and water movement', group: 'Core range', icon: Droplets },
  { name: 'REVIVE', role: 'Recovery and soil tonic', group: 'Core range', icon: Heart },
  { name: 'PET PEE', role: 'Urine spot recovery and soil support', group: 'Core range', icon: ShieldCheck },
  { name: 'WEED', role: 'Targeted weed control', group: 'Specialist range', icon: Leaf },
  { name: 'BARRIER', role: 'Pre-emergent protection', group: 'Specialist range', icon: ShieldCheck },
  { name: 'GRUB', role: 'Insect treatment', group: 'Specialist range', icon: Sprout },
  { name: 'SHIELD', role: 'Preventative pest protection', group: 'Specialist range', icon: ShieldCheck },
  { name: 'DEFEND', role: 'Disease treatment', group: 'Specialist range', icon: ShieldCheck },
]

const initialFields = {
  name: '',
  phone: '',
  email: '',
  service: 'Plus package',
  suburb: '',
  message: '',
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [fields, setFields] = useState(initialFields)
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus('submitting')

    try {
      const body = new URLSearchParams({
        'form-name': 'quote-request',
        subject: 'New Lawn Lad quote request',
        ...fields,
      })
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (!response.ok) throw new Error('Unable to submit form')

      setFields(initialFields)
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="Lawn Lad Co. home">
          <span className="brand-mark__blade" />
          <span className="brand-mark__name">Lawn Lad</span>
          <span className="brand-mark__company">Co.</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href={LAWNBRAIN_URL}>LawnBrain</a>
          <a href={LAWNLEAGUE_URL}>Lawn League</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-right">
          <div className="header-social" aria-label="Social and contact links">
            <a
              href="https://www.instagram.com/lawnladco2026"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (@lawnladco2026)"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61593666958921"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@thelawnkid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok (@thelawnkid)"
            >
              <TikTokIcon size={16} />
            </a>
            <a
              href="tel:0431913822"
              aria-label="Call Lawn Lad Co. on 0431 913 822"
              title="Call 0431 913 822"
            >
              <Phone size={16} />
            </a>
          </div>
          <a className="header-scan" href={LAWN_SCAN_URL}>
            <Brain size={16} />
            <span>Scan my lawn</span>
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#about" onClick={closeMenu}>Why us</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#packages" onClick={closeMenu}>Packages</a>
            <a href={LAWNBRAIN_URL} onClick={closeMenu}>LawnBrain</a>
            <a href={LAWNLEAGUE_URL} onClick={closeMenu}>Lawn League</a>
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#hire" onClick={closeMenu}>Equipment hire</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="mobile-nav__call" href="tel:0431913822" onClick={closeMenu}>
              <Phone size={18} />
              <span>Call 0431 913 822</span>
            </a>
            <div className="mobile-nav__social" aria-label="Social media">
              <a
                href="https://www.instagram.com/lawnladco2026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (@lawnladco2026)"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61593666958921"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@thelawnkid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok (@thelawnkid)"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
            <a href={LAWN_SCAN_URL} className="button button--gold" onClick={closeMenu}>Scan my lawn</a>
            <a href="#contact" className="button button--ghost" onClick={closeMenu}>Get a free quote</a>
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero__media" aria-hidden="true" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__grid" aria-hidden="true" />

        <div className="hero__content">
          <div className="eyebrow reveal reveal--1">
            <span className="eyebrow__dot" />
            Innes Park · Coral Cove · Bargara · Headlands
          </div>
          <h1 className="reveal reveal--2">
            Good lawns.
            <span>Done properly.</span>
          </h1>
          <p className="hero__lead reveal reveal--3">
            Reliable lawn maintenance, considered turf care and complete renovations for homes across the Wide Bay.
          </p>
          <div className="hero__actions reveal reveal--4">
            <a href={LAWN_SCAN_URL} className="button button--gold">
              Scan my lawn <Brain size={18} />
            </a>
            <a href="#contact" className="button button--ghost">
              Get a free quote <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero__proof reveal reveal--4">
          <div className="hero__rating">
            <div className="stars" aria-label="Five star service">
              {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" />)}
            </div>
            <strong>Local care. Professional finish.</strong>
          </div>
          <div className="hero__proof-line" />
          <span>Family owned & fully insured</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="Service promises">
        <div><BadgeCheck /><span><strong>Quality</strong> guaranteed</span></div>
        <div><CalendarCheck /><span><strong>Reliable</strong> scheduling</span></div>
        <div><MapPin /><span><strong>Genuinely</strong> local</span></div>
        <div><ShieldCheck /><span><strong>Fully</strong> insured</span></div>
      </section>

      <section className="ecosystem-section" id="ecosystem">
        <div className="section-heading section-heading--centered ecosystem-heading">
          <span className="section-kicker">The Lawn Lad ecosystem</span>
          <h2>More than mowing.<br /><em>Meet your lawn toolkit.</em></h2>
          <p>Start with a scan, build a plan, improve the lawn and track the climb. Lawn Lad Co. connects the digital tools, products and hands-on help in one place.</p>
        </div>

        <div className="ecosystem-grid">
          {ecosystem.map((item) => {
            const Icon = item.icon
            return (
              <article className="ecosystem-card" key={item.eyebrow}>
                <div className="ecosystem-card__icon"><Icon /></div>
                <span>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.href}>{item.action} <ArrowRight size={16} /></a>
              </article>
            )
          })}
        </div>

        <div className="ecosystem-flow" aria-label="Lawn Lad ecosystem flow">
          <span>Discover</span><ArrowRight size={15} />
          <span>Scan</span><ArrowRight size={15} />
          <span>Plan</span><ArrowRight size={15} />
          <span>Treat</span><ArrowRight size={15} />
          <span>Improve</span><ArrowRight size={15} />
          <span>Rank</span><ArrowRight size={15} />
          <span>Repeat</span>
        </div>
      </section>

      <section className="why-us-section" id="about">
        <div className="why-us-container">
          <div className="why-us-grid">
            <div className="why-us-media">
              <div className="why-us-image-frame">
                <img
                  src="/images/IMG_3914.jpeg"
                  alt="Baylin McKay, Founder of Lawn Lad Co., with professional cylinder mower"
                  className="why-us-image"
                  loading="lazy"
                />
                <div className="why-us-badge">
                  <span className="why-us-badge__icon"><Award size={18} /></span>
                  <div>
                    <strong>Baylin McKay</strong>
                    <small>Founder | Lawn Lad Co.</small>
                  </div>
                </div>
              </div>
              <div className="why-us-highlights">
                <div className="why-us-pill">
                  <Zap size={14} />
                  <span>Pushing for all-electric future</span>
                </div>
                <div className="why-us-pill">
                  <Trophy size={14} />
                  <span>QLD Representative Athlete</span>
                </div>
                <div className="why-us-pill">
                  <Heart size={14} />
                  <span>Community &amp; connection first</span>
                </div>
              </div>
            </div>

            <div className="why-us-content">
              <div className="why-us-header">
                <span className="section-kicker">Why Us | Founder Story</span>
                <h2>From a 4-year-old with a mower obsession to a <em>15-year-old building something of his own.</em></h2>
              </div>

              <div className="why-us-story">
                <p className="why-us-lead">
                  My love for lawn care started when I was just four years old. While most kids were interested in toys, I was fascinated by lawns, mowers and the satisfaction of seeing a messy yard transformed into something people could be proud of.
                </p>

                <p>
                  By the time I was eight, I had saved enough Christmas money to buy my first mower. I started by mowing lawns for family and relatives, learning the basics, building confidence and, most importantly, discovering that something I genuinely loved could become something bigger.
                </p>

                <p>
                  Over the past few years, I’ve continued to invest in better equipment and develop my skills, with a long-term goal of transitioning Lawn Lad Co. towards an all-electric operation. For me, that means finding smarter ways to reduce fuel use, noise and emissions while still delivering professional results. It’s about building a lawn care business that looks after more than just the lawn.
                </p>

                <p>
                  What started as <strong>“the lawn kid”</strong> on TikTok has grown into something much bigger: <strong>Lawn Lad Co.</strong> At just 15, I’m taking the next step and turning something I love into a real business, while creating a pathway that I hope can inspire other young people to do the same.
                </p>

                <p>
                  I’m currently a student at St Luke’s Anglican School and compete in multiple sports at Queensland representative level. Sport has taught me the value of discipline, commitment, teamwork and showing up when things get tough. I’m bringing those same values into Lawn Lad Co.
                </p>

                <div className="why-us-callout">
                  <p className="why-us-callout__intro">
                    <strong>But this business isn’t only about mowing lawns.</strong> It’s about people, community and connection.
                  </p>
                  <p>
                    I want to help create beautiful lawns that complement beautiful homes, while getting to know the people who live in our community. Every lawn is an opportunity to meet someone new, provide a service I’m proud of and leave a property looking better than when I arrived.
                  </p>
                </div>

                <div className="why-us-creed">
                  <span className="why-us-creed__label">Lawn Lad Co. is built on a simple idea:</span>
                  <blockquote>
                    “Love what you do. Work hard. Look after your community. Leave every lawn better than you found it.”
                  </blockquote>
                  <p className="why-us-creed__footer">I’m only 15, but I’m just getting started.</p>
                </div>

                <div className="why-us-signature">
                  <div>
                    <strong>Baylin McKay</strong>
                    <span>Founder | Lawn Lad Co.</span>
                  </div>
                  <a href="#contact" className="button button--gold">
                    Work with Baylin <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-kicker">What we do</span>
            <h2>Everything your lawn needs.<br /><em>Nothing it doesn’t.</em></h2>
          </div>
          <p>From fortnightly visits to full seasonal resets, every job starts with the same standard: do it once, do it right.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article className="service-card" key={service.title}>
                <span className="service-card__number">{service.number}</span>
                <div className="service-card__icon"><Icon /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}><Check size={15} />{feature}</li>
                  ))}
                </ul>
                <a href="#contact">Request a quote <ArrowRight size={16} /></a>
              </article>
            )
          })}
        </div>
      </section>

      <section className="renovation-band" id="renovations">
        <div className="renovation-band__image" role="img" aria-label="Freshly mown striped green lawn" />
        <div className="renovation-band__content">
          <span className="section-kicker section-kicker--light">Built for the Queensland climate</span>
          <h2>Tired lawn?<br /><em>Let’s bring it back.</em></h2>
          <p>Heat, compaction, thatch and poor soil can leave even a well-watered lawn struggling. Our renovation process addresses the cause—not just the colour.</p>
          <div className="process-list">
            <span><b>01</b> Assess</span>
            <span><b>02</b> Prepare</span>
            <span><b>03</b> Renovate</span>
            <span><b>04</b> Recover</span>
          </div>
          <a href="#contact" className="text-link">Plan my lawn renovation <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="section packages-section" id="packages">
        <div className="section-heading section-heading--centered">
          <span className="section-kicker">Simple ongoing care</span>
          <h2>Choose your <em>lawn standard.</em></h2>
          <p>Clear inclusions, dependable visits and no guesswork.</p>
        </div>

        <div className="package-grid">
          {packages.map((plan) => (
            <article className={`package-card ${plan.featured ? 'package-card--featured' : ''}`} key={plan.name}>
              {plan.featured && <div className="package-card__flag">Most popular</div>}
              <span className="package-card__eyebrow">{plan.eyebrow}</span>
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="price"><sup>from $</sup><strong>{plan.price}</strong><span>/ visit</span></div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><span><Check size={13} /></span>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className={`button ${plan.featured ? 'button--dark' : 'button--outline'}`}>
                Choose {plan.name} <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
        <p className="pricing-note">Pricing varies with lawn size, access and condition. We confirm your price before work begins.</p>
      </section>

      <section className="products-section" id="products">
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-kicker">Lawn Lad product system</span>
            <h2>Use what your lawn <em>actually needs.</em></h2>
          </div>
          <p>The Lawn Lad range is being developed to work alongside LawnBrain recommendations, with clear roles rather than a shelf full of guesswork.</p>
        </div>

        <div className="product-grid">
          {productFamilies.map((product) => {
            const Icon = product.icon
            return (
              <article className="product-card" key={product.name}>
                <div className="product-card__top">
                  <div className="product-card__icon"><Icon /></div>
                  <span>{product.group}</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.role}</p>
              </article>
            )
          })}
        </div>

        <div className="product-note">
          <div>
            <strong>Product range in development.</strong>
            <p>Final formulations, pack sizes, pricing, availability, labels and directions will be published before products are offered for sale.</p>
          </div>
          <a href={LAWN_SCAN_URL} className="button button--dark">Get a LawnBrain recommendation <Brain size={17} /></a>
        </div>
      </section>

      <section className="equipment-section" id="hire">
        <div className="section-heading section-heading--split section-heading--light">
          <div>
            <span className="section-kicker section-kicker--light">For the weekend lawn warrior</span>
            <h2>Professional gear.<br /><em>Your project.</em></h2>
          </div>
          <p>Commercial renovation machinery available for daily hire. Clean, maintained and ready to work.</p>
        </div>

        <div className="equipment-showcase">
          <div className="equipment-showcase__main">
            <div className="equipment-grid">
              {equipment.map((item) => {
                const Icon = item.icon
                return (
                  <article className="equipment-card" key={item.name}>
                    <Icon />
                    <span>Daily hire</span>
                    <h3>{item.name}</h3>
                    <p>{item.note}</p>
                    <div><strong>${item.price}</strong><small>/ day</small></div>
                  </article>
                )
              })}
            </div>
            <div className="equipment-footer">
              <span><Clock3 size={17} /> Pick-up and return times arranged at booking</span>
              <a href="#contact" className="button button--gold">Check availability <ArrowRight size={17} /></a>
            </div>
          </div>

          <aside className="equipment-reel-card" aria-label="TikTok lawn renovation video reel">
            <div className="equipment-reel-card__header">
              <div className="equipment-reel-card__badge">
                <TikTokIcon size={15} />
                <span>@thelawnkid</span>
              </div>
              <span className="equipment-reel-card__status">
                <span className="equipment-reel-card__pulse" />
                In action
              </span>
            </div>

            <div className="equipment-reel-card__player-wrap">
              <iframe
                src="https://www.tiktok.com/player/v1/7457363623799688456?autoplay=1&loop=1&music_info=0&description=0&rel=0"
                title="TikTok Reel - Lawn renovation and scarify by @thelawnkid"
                className="equipment-reel-card__iframe"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; clipboard-write"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="equipment-reel-card__info">
              <div className="equipment-reel-card__text">
                <strong>Scarifier &amp; Renovation Demo</strong>
                <p>Watch commercial renovation equipment removing thatch and prepping the lawn turf.</p>
              </div>
              <a
                href="https://www.tiktok.com/@thelawnkid/video/7457363623799688456"
                target="_blank"
                rel="noopener noreferrer"
                className="equipment-reel-card__link"
                aria-label="View original reel on TikTok (@thelawnkid)"
              >
                <span>Watch on TikTok</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="quote-section" id="contact">
        <div className="quote-section__intro">
          <span className="section-kicker">Let’s talk lawns</span>
          <h2>A better lawn starts with a <em>quick hello.</em></h2>
          <p>Tell us what you need and where you’re located. We’ll get back to you with the next best step.</p>

          <div className="contact-list">
            <a href="tel:0431913822"><span><Phone /></span><div><small>Call or text</small><strong>0431 913 822</strong></div></a>
            <a href="mailto:info@lawnladco.com.au"><span><Mail /></span><div><small>Email</small><strong>info@lawnladco.com.au</strong></div></a>
            <div><span><MapPin /></span><div><small>Service area</small><strong>Innes Park to Headlands</strong></div></div>
          </div>

          <div className="availability"><span /> Currently taking new bookings</div>
        </div>

        <div className="quote-card">
          {formStatus === 'success' ? (
            <div className="form-success" role="status">
              <div><Sparkles /></div>
              <span>Request received</span>
              <h3>Thanks—we’ll be in touch shortly.</h3>
              <p>Your lawn is officially on our radar. We’ll call or email you to confirm the details.</p>
              <button type="button" className="text-link" onClick={() => setFormStatus('idle')}>Send another request <ArrowRight size={16} /></button>
            </div>
          ) : (
            <form name="quote-request" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="quote-request" />
              <input type="hidden" name="subject" value="New Lawn Lad quote request" />
              <div className="form-heading">
                <div><CircleDollarSign /></div>
                <span>Free, no-obligation quote</span>
              </div>

              <div className="field-row">
                <label>Name<input name="name" value={fields.name} onChange={handleChange} placeholder="Your name" required /></label>
                <label>Phone<input name="phone" type="tel" value={fields.phone} onChange={handleChange} placeholder="04xx xxx xxx" required /></label>
              </div>
              <label>Email<input name="email" type="email" value={fields.email} onChange={handleChange} placeholder="you@example.com" required /></label>
              <div className="field-row">
                <label>Service
                  <select name="service" value={fields.service} onChange={handleChange}>
                    <option>Essential package</option>
                    <option>Plus package</option>
                    <option>Premium package</option>
                    <option>Lawn renovation</option>
                    <option>Equipment hire</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label>Suburb<input name="suburb" value={fields.suburb} onChange={handleChange} placeholder="e.g. Innes Park" required /></label>
              </div>
              <label>Anything else?<textarea name="message" value={fields.message} onChange={handleChange} placeholder="Lawn size, condition, access or preferred timing…" rows={4} /></label>

              {formStatus === 'error' && <p className="form-error" role="alert">Something went wrong. Please try again or call 0431 913 822.</p>}

              <button className="button button--gold form-submit" type="submit" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'Sending request…' : 'Request my free quote'}
                {formStatus !== 'submitting' && <ArrowRight size={18} />}
              </button>
              <p className="form-fineprint"><ShieldCheck size={14} /> Your details stay private. No spam, ever.</p>
            </form>
          )}
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <a href="#top" className="brand-mark brand-mark--footer">
            <span className="brand-mark__blade" />
            <span className="brand-mark__name">Lawn Lad</span>
            <span className="brand-mark__company">Co.</span>
          </a>
          <p>Healthy lawns. Beautiful results.<br />Done properly.</p>
        </div>
        <div className="footer-links">
          <span>Navigate</span>
          <a href="#about">Why us</a>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href={LAWNBRAIN_URL}>LawnBrain</a>
          <a href={LAWNLEAGUE_URL}>Lawn League</a>
          <a href="#products">Products</a>
          <a href="#hire">Equipment hire</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-links">
          <span>Service areas</span>
          <p>Innes Park · Coral Cove<br />Elliott Heads · Bargara<br />Headlands & surrounds</p>
        </div>
        <div className="footer-social">
          <span>Follow along</span>
          <div>
            <a
              href="https://www.instagram.com/lawnladco2026"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (@lawnladco2026)"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61593666958921"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href="https://www.tiktok.com/@thelawnkid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok (@thelawnkid)"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Lawn Lad Co.</span>
          <span>Local · Family owned · Fully insured</span>
        </div>
      </footer>
    </main>
  )
}
