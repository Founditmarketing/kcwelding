import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, MapPin, Clock, Hammer, CheckCircle2, Zap } from 'lucide-react';
import { COMPANY_INFO, SERVICES, GALLERY_IMAGES } from '@/src/lib/constants';
import { Button } from '@/src/components/ui/Button';
import { Card } from '@/src/components/ui/Card';
import { SectionHeading } from '@/src/components/ui/SectionHeading';

/* ─── Ticker items ──────────────────────────────────────────── */
const TICKER_ITEMS = [
  'Licensed LLC',
  'Structural Steel',
  'Pipeline Welding',
  'Plant Maintenance',
  'Emergency On-Site Service',
  'Fences & Gates',
  'Signs & Fabrication',
  'Building Repairs',
  'Any Size Job',
  'Fair Pricing — Every Time',
  'Central Louisiana',
  'MIG · TIG · STICK · FLUX-CORE',
];

export const Home: React.FC = () => {
  return (
    <div className="relative">

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-label="KC Welding — Hero"
      >

        {/* ── Background Layer ──────────────────────────────────── */}
        <div className="absolute inset-0 z-0">
          {/* Base dark fill — visible before image loads */}
          <div className="absolute inset-0 bg-charcoal-950" />

          {/* Hero image (client will swap this) */}
          <img
            src="/flame-closeup.png"
            alt="Welding arc — industrial work in action"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.45) saturate(0.7)' }}
          />

          {/* Left text-protection gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(14,14,15,0.97) 0%, rgba(14,14,15,0.82) 38%, rgba(14,14,15,0.35) 65%, rgba(14,14,15,0.10) 100%)',
            }}
          />
          {/* Top vignette */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(14,14,15,0.6) 0%, transparent 25%)' }}
          />
          {/* Bottom fade into ticker */}
          <div
            className="absolute inset-x-0 bottom-0 h-40"
            style={{ background: 'linear-gradient(to top, rgba(14,14,15,1) 0%, transparent 100%)' }}
          />
          {/* Mobile full overlay */}
          <div className="absolute inset-0 md:hidden" style={{ background: 'rgba(14,14,15,0.78)' }} />

          {/* Amber warm tint — barely visible, adds warmth */}
          <div
            className="absolute inset-0 mix-blend-soft-light"
            style={{ background: 'radial-gradient(ellipse 60% 60% at 72% 50%, rgba(212,137,26,0.08) 0%, transparent 70%)' }}
          />
        </div>

        {/* ── Content ───────────────────────────────────────────── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-44">

          {/* Kicker label */}
          <motion.div
            className="fade-up-1 mb-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="accent-bar" />
            <span className="text-amber-light font-sans text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase">
              Licensed LLC &nbsp;·&nbsp; Central Louisiana &nbsp;·&nbsp; Est. {COMPANY_INFO.established}
            </span>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            className="text-[clamp(3rem,8vw,7rem)] leading-[0.88] tracking-tight mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Your Community's Premier{' '}
            <span className="text-shimmer whitespace-nowrap">Welding &amp;</span>
            <br className="hidden sm:block" />{' '}
            Infrastructure{' '}
            <span className="text-shimmer">Specialists.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-steel-200 text-lg sm:text-xl font-body leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            From neighborhood fences to major structural repairs &mdash; every job
            handled with expert precision and priced fairly.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
          >
            {/* Primary — Call */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              id="hero-cta-call"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber hover:bg-amber-light text-charcoal-950 font-sans font-bold text-base tracking-widest uppercase rounded-sm transition-all duration-200 amber-glow btn-pulse"
            >
              <Phone className="w-5 h-5 shrink-0" />
              Call {COMPANY_INFO.phone}
            </a>

            {/* Secondary — Portfolio */}
            <Link
              to="/gallery"
              id="hero-cta-portfolio"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-steel-400/60 hover:border-amber/70 text-steel-100 hover:text-white font-sans font-semibold text-base tracking-widest uppercase rounded-sm transition-all duration-200 hover:bg-white/5 group"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>

          {/* Fast-response nudge */}
          <motion.div
            className="flex items-center gap-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Zap className="w-4 h-4 text-amber shrink-0" />
            <p className="text-steel-300 text-sm font-sans">
              <span className="font-semibold text-steel-100">For the fastest response,</span> call us directly.
            </p>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.62 }}
          >
            {[
              'Any Size Job Welcome',
              'Fair Transparent Pricing',
              'Licensed & Insured LLC',
              'On-Site Mobile Service',
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm px-3 py-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-amber shrink-0" />
                <span className="text-steel-200 text-xs font-sans font-medium tracking-wide">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Scrolling Credential Ticker ───────────────────────── */}
        <div className="absolute bottom-0 left-0 w-full z-20 border-t border-steel-600/30 bg-charcoal-950/90 backdrop-blur-md overflow-hidden py-4">
          <div className="flex whitespace-nowrap ticker-inner gap-0">
            {/* Doubled list for seamless loop */}
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-6 text-steel-300 text-xs sm:text-sm font-sans tracking-[0.18em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* About Preview */}
      <section className="py-24 bg-iron-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                title="KC WELDING" 
                subtitle="About Us" 
              />
              <p className="text-lg text-weathered-iron mb-6 leading-relaxed">
                KC Welding is a professional industrial welding and fabrication company built on one principle: failure is not an option. We serve fleet managers, engineers, construction firms, agricultural operators, and industrial facilities who demand perfection on every weld.
              </p>
              <p className="text-lg text-amber-light italic border-l-4 border-amber pl-4 mb-10 leading-relaxed">
                "We are frequently hired to fix other shops' mistakes. In our world, a failed weld isn't just an inconvenience—it's a massive liability. We ensure it's done right the first time."
              </p>
              <Link to="/about">
                <Button variant="outline">Learn More About Us</Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber/30 z-0" />
              <img 
                src="/gallery/Resized_dsc_0009.jpeg" 
                alt="Welder at work" 
                className="relative z-10 w-full h-[500px] object-cover forge-glow"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DUAL-TRACK SERVICES SECTION
      ════════════════════════════════════════════════════════════ */}
      <section id="services" className="py-24 bg-charcoal-900 relative overflow-hidden">
        {/* Subtle dot texture */}
        <div className="absolute inset-0 diamond-plate opacity-50" />
        {/* Amber top rule */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-3 mb-4">
              <span className="accent-bar" />
              <span className="text-amber-light font-sans text-xs font-semibold tracking-[0.3em] uppercase">What We Do</span>
              <span className="accent-bar" />
            </span>
            <h2 className="text-5xl md:text-6xl mb-4">Built for Every Job</h2>
            <p className="text-steel-300 font-body text-lg max-w-2xl mx-auto leading-relaxed">
              Every project — large or small — is priced fairly and handled with the same level of professionalism.
            </p>
          </motion.div>

          {/* Two-track grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

            {/* ── Track 1: Local & Community ─────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative bg-charcoal-800 border border-steel-600/50 rounded-sm overflow-hidden group"
            >
              {/* Track top accent bar */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-amber/70" />

              <div className="p-8 lg:p-10">
                {/* Track label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-sm bg-amber/15 border border-amber/30 flex items-center justify-center shrink-0">
                    <Hammer className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <p className="text-amber-light font-sans text-[10px] font-semibold tracking-[0.3em] uppercase">Track 1</p>
                    <h3 className="text-2xl leading-tight">Local &amp; Community Work</h3>
                  </div>
                </div>

                <p className="text-steel-300 font-body text-sm leading-relaxed mb-8">
                  We're your neighbors — and we take pride in keeping this community strong. No job is too small, and every fence, gate, or repair gets the same expert attention as any big project.
                </p>

                {/* Service items */}
                <ul className="space-y-3">
                  {[
                    'Custom fences &amp; gates',
                    'Signage fabrication &amp; installation',
                    'Building repairs',
                    'Small commercial projects',
                    'Custom metal fabrication',
                    'Trailer &amp; equipment repairs',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full border border-amber/50 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                      </span>
                      <span className="text-steel-200 font-body text-sm leading-snug" dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 mt-8 text-amber-light font-sans text-sm font-semibold tracking-wide hover:text-white transition-colors group/link"
                >
                  See All Services <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* ── Track 2: Infrastructure & Industrial ──────────── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="relative bg-charcoal-950 border border-steel-500/60 rounded-sm overflow-hidden group"
            >
              {/* Track top accent bar — slightly brighter to signal premium tier */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-dark via-amber-light to-amber-dark" />

              <div className="p-8 lg:p-10">
                {/* Track label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-sm bg-amber/10 border border-amber/40 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-amber-light" />
                  </div>
                  <div>
                    <p className="text-amber-light font-sans text-[10px] font-semibold tracking-[0.3em] uppercase">Track 2</p>
                    <h3 className="text-2xl leading-tight">Infrastructure &amp; Industrial</h3>
                  </div>
                </div>

                <p className="text-steel-300 font-body text-sm leading-relaxed mb-8">
                  When failure is not an option, call KC Welding. We're the team engineers and operations managers trust for high-stakes structural, pipeline, and plant work — on-schedule, on-spec, every time.
                </p>

                {/* Service items */}
                <ul className="space-y-3">
                  {[
                    'Structural steel repair',
                    'Pipeline welding',
                    'Plant maintenance welding',
                    'Emergency on-site welding',
                    'Field rig welding',
                    'Heavy equipment repair',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full border border-amber/40 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-light" />
                      </span>
                      <span className="text-steel-100 font-body text-sm leading-snug font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-8 text-amber-light font-sans text-sm font-semibold tracking-wide hover:text-white transition-colors group/link"
                >
                  Request Emergency Service <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>

          </div>{/* /two-track grid */}

          {/* Spanning unifier line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="inline-block text-steel-400 font-body text-sm italic border border-steel-600/40 rounded-sm px-6 py-3 bg-charcoal-800/50">
              "Every project — large or small — is priced fairly and handled with the same level of professionalism."
            </p>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TRUST SIGNALS SECTION
      ════════════════════════════════════════════════════════════ */}
      <section id="trust" className="bg-charcoal-800 relative overflow-hidden">

        {/* ── Experience Stats Bar ─────────────────────────────── */}
        <div className="border-y border-steel-600/40 bg-charcoal-950/60">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-steel-600/30">
              {[
                { stat: '5+',                   label: 'Years in the Field'         },
                { stat: 'Residential → Industrial', label: 'Full Spectrum of Work'  },
                { stat: 'Licensed LLC',          label: 'Fully Licensed &amp; Insured' },
              ].map(({ stat, label }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="py-10 px-8 text-center"
                >
                  <p className="font-display text-4xl md:text-5xl text-amber-light mb-1">{stat}</p>
                  <p className="text-steel-400 font-sans text-sm tracking-wide" dangerouslySetInnerHTML={{ __html: label }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">

          {/* ── Certifications Block ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-3 mb-3">
                <span className="accent-bar" />
                <span className="text-amber-light font-sans text-xs font-semibold tracking-[0.3em] uppercase">Credentials</span>
                <span className="accent-bar" />
              </span>
              <h2 className="text-4xl md:text-5xl">Certified &amp; Compliant</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'AWS Certified',        sub: 'American Welding Society'  },
                { label: 'State Licensed',        sub: 'Louisiana Contractor Lic.' },
                { label: 'Licensed LLC',          sub: 'Registered Business Entity' },
                { label: 'Fully Insured',         sub: 'General Liability Coverage' },
              ].map(({ label, sub }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center gap-3 bg-charcoal-900 border border-steel-600/40 rounded-sm p-6 text-center group hover:border-amber/40 transition-colors"
                >
                  {/* Cert logo placeholder */}
                  <div className="w-16 h-16 rounded-sm bg-steel-600/20 border border-steel-500/30 flex items-center justify-center group-hover:border-amber/30 transition-colors">
                    <Shield className="w-7 h-7 text-steel-400 group-hover:text-amber-light transition-colors" />
                  </div>
                  <div>
                    <p className="font-display text-base text-white tracking-wide">{label}</p>
                    <p className="text-steel-400 font-sans text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-steel-500 font-sans text-xs mt-4">
              Certification logos will be placed here — contact us to verify credentials.
            </p>
          </motion.div>

          {/* ── Testimonials ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-3 mb-3">
                <span className="accent-bar" />
                <span className="text-amber-light font-sans text-xs font-semibold tracking-[0.3em] uppercase">What Clients Say</span>
                <span className="accent-bar" />
              </span>
              <h2 className="text-4xl md:text-5xl">Trusted Across the Board</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "I needed a section of my backyard fence repaired after a storm took it down. KC Welding came out the next day, gave me a fair price, and had it looking better than new by the afternoon. These guys are honest and fast — will absolutely use them again.",
                  name:  'James R.',
                  role:  'Residential Homeowner',
                  tag:   'Local Community',
                },
                {
                  quote: "We run a small fabrication shop and had a piece of equipment go down right before a big order. KC Welding got it repaired same-day. No runaround, no inflated emergency pricing. Just good work, done right. They've earned a regular customer.",
                  name:  'Maria T.',
                  role:  'Small Business Owner',
                  tag:   'Small Commercial',
                },
                {
                  quote: "We had a structural steel failure at one of our processing facilities that needed immediate attention. KC Welding was on-site within hours. Their crew performed under pressure and the weld quality passed inspection with zero issues. That's the standard we needed.",
                  name:  'D. Fontenot',
                  role:  'Plant Operations Manager',
                  tag:   'Industrial / Infrastructure',
                },
              ].map(({ quote, name, role, tag }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col bg-charcoal-900 border border-steel-600/40 rounded-sm p-7 relative group hover:border-amber/30 transition-colors"
                >
                  {/* Tag pill */}
                  <span className="inline-block self-start text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-amber bg-amber/10 border border-amber/25 rounded-sm px-2.5 py-1 mb-5">
                    {tag}
                  </span>
                  {/* Quote mark */}
                  <span className="absolute top-5 right-6 font-display text-6xl text-steel-600/40 leading-none select-none">"</span>
                  <p className="text-steel-300 font-body text-sm leading-relaxed flex-grow mb-6 italic">
                    "{quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-steel-600/30">
                    <div className="w-9 h-9 rounded-full bg-steel-500/30 border border-steel-500/40 flex items-center justify-center shrink-0">
                      <span className="font-display text-sm text-steel-300">{name[0]}</span>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-sm text-white">{name}</p>
                      <p className="font-sans text-xs text-steel-400">{role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Fast-Response Callout Banner ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-sm overflow-hidden border border-amber/30 bg-charcoal-950"
          >
            {/* Amber top bar */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber to-transparent" />
            {/* Dot texture */}
            <div className="absolute inset-0 diamond-plate opacity-40" />
            {/* Amber radial warm tint */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(212,137,26,0.07) 0%, transparent 70%)' }} />

            <div className="relative z-10 px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-3">
                  <Zap className="w-5 h-5 text-amber shrink-0" />
                  <span className="text-amber-light font-sans text-xs font-semibold tracking-[0.3em] uppercase">Fastest Response</span>
                </div>
                <h3 className="text-3xl md:text-4xl text-white mb-2">For the fastest response,<br className="hidden sm:block" /> call us directly.</h3>
                <p className="text-steel-400 font-body text-sm max-w-md">
                  We answer when you call. No automated systems, no waiting — just KC Welding, ready to help.
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-end gap-4 shrink-0">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  id="trust-phone-cta"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-amber hover:bg-amber-light text-charcoal-950 font-sans font-bold text-xl tracking-wider rounded-sm transition-all amber-glow btn-pulse"
                >
                  <Phone className="w-6 h-6 shrink-0" />
                  {COMPANY_INFO.phone}
                </a>
                <p className="text-steel-500 font-sans text-xs">
                  KC Welding, LLC — Licensed &amp; Insured
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PORTFOLIO SECTION
      ════════════════════════════════════════════════════════════ */}
      <section id="portfolio" className="py-24 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber/50 to-transparent" />
        <div className="absolute inset-0 diamond-plate opacity-30" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6"
          >
            <div>
              <span className="inline-flex items-center gap-3 mb-4">
                <span className="accent-bar" />
                <span className="text-amber-light font-sans text-xs font-semibold tracking-[0.3em] uppercase">Our Work</span>
              </span>
              <h2 className="text-5xl md:text-6xl">Recent Projects</h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-amber-light font-sans text-sm font-semibold tracking-wide hover:text-white transition-colors shrink-0 group"
            >
              View Full Gallery <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">

            {/* Standard project cards */}
            {[
              {
                img: GALLERY_IMAGES[0],
                type: 'Custom Gate',
                track: 'Local & Community',
                desc: 'Fabricated and installed a custom ornamental steel driveway gate for a residential property.',
              },
              {
                img: GALLERY_IMAGES[2],
                type: 'Pipeline Repair',
                track: 'Infrastructure',
                desc: 'Emergency field repair on a ruptured industrial pipeline — on-site, same day, passed inspection.',
              },
              {
                img: GALLERY_IMAGES[4],
                type: 'Structural Steel',
                track: 'Infrastructure',
                desc: 'Repaired and reinforced a cracked structural beam at an active processing facility.',
              },
              {
                img: GALLERY_IMAGES[6],
                type: 'Custom Sign Frame',
                track: 'Local & Community',
                desc: 'Welded and powder-coated a heavy-duty steel sign frame for a local retail business.',
              },
              {
                img: GALLERY_IMAGES[8],
                type: 'Equipment Repair',
                track: 'Infrastructure',
                desc: 'Field rig welding on a down excavator — got the machine operational within hours.',
              },
              {
                img: GALLERY_IMAGES[10],
                type: 'Fence Installation',
                track: 'Local & Community',
                desc: 'Full perimeter fencing installed for a residential ranch property — post setting, rails, and finish welding.',
              },
            ].map(({ img, type, track, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-charcoal-800 border border-steel-600/40 rounded-sm overflow-hidden hover:border-amber/35 transition-colors"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-charcoal-700">
                  <img
                    src={img}
                    alt={type}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Track badge */}
                  <span className={`absolute top-3 left-3 text-[10px] font-sans font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm ${
                    track === 'Infrastructure'
                      ? 'bg-charcoal-950/90 text-amber-light border border-amber/30'
                      : 'bg-charcoal-950/90 text-steel-200 border border-steel-500/40'
                  }`}>
                    {track}
                  </span>
                </div>
                {/* Copy */}
                <div className="p-5">
                  <p className="font-display text-lg text-white tracking-wide mb-1">{type}</p>
                  <p className="text-steel-400 font-body text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Before & After Cards — full width, 2-up */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">

            {[
              {
                type: 'Farm Equipment Repair',
                track: 'Local & Community',
                desc: 'Cracked loader arm bracket — welded, ground, and reinforced. Back in the field the same week.',
                beforeImg: GALLERY_IMAGES[14],
                afterImg:  GALLERY_IMAGES[15],
              },
              {
                type: 'Building Steel Connection',
                track: 'Infrastructure',
                desc: 'Failed column connection at a warehouse — repaired and brought back to spec with zero downtime to operations.',
                beforeImg: GALLERY_IMAGES[20],
                afterImg:  GALLERY_IMAGES[21],
              },
            ].map(({ type, track, desc, beforeImg, afterImg }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-charcoal-800 border border-steel-600/40 rounded-sm overflow-hidden hover:border-amber/35 transition-colors"
              >
                {/* Before / After image split */}
                <div className="grid grid-cols-2 h-52">
                  <div className="relative overflow-hidden bg-charcoal-700">
                    <img
                      src={beforeImg}
                      alt={`${type} — Before`}
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-2 left-2 text-[9px] font-sans font-bold tracking-[0.2em] uppercase bg-charcoal-950/85 text-steel-300 border border-steel-600/40 px-2 py-0.5 rounded-sm">
                      Before
                    </span>
                  </div>
                  <div className="relative overflow-hidden bg-charcoal-700 border-l border-steel-600/30">
                    <img
                      src={afterImg}
                      alt={`${type} — After`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-2 right-2 text-[9px] font-sans font-bold tracking-[0.2em] uppercase bg-amber/90 text-charcoal-950 px-2 py-0.5 rounded-sm">
                      After
                    </span>
                  </div>
                </div>
                {/* Copy */}
                <div className="p-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[9px] font-sans font-semibold tracking-[0.2em] uppercase px-2 py-0.5 rounded-sm ${
                        track === 'Infrastructure'
                          ? 'bg-amber/10 text-amber border border-amber/25'
                          : 'bg-steel-600/20 text-steel-300 border border-steel-500/30'
                      }`}>{track}</span>
                      <span className="text-steel-500 font-sans text-[9px] uppercase tracking-widest">Before &amp; After</span>
                    </div>
                    <p className="font-display text-lg text-white tracking-wide mb-1">{type}</p>
                    <p className="text-steel-400 font-body text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Portfolio CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-steel-300 font-body text-lg mb-6">
              Have a project in mind? <span className="text-white font-semibold">Let's talk.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                id="portfolio-cta-call"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber hover:bg-amber-light text-charcoal-950 font-sans font-bold text-base tracking-widest uppercase rounded-sm transition-all amber-glow btn-pulse"
              >
                <Phone className="w-5 h-5 shrink-0" />
                Call {COMPANY_INFO.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-steel-400/60 hover:border-amber/60 text-steel-100 hover:text-white font-sans font-semibold text-base tracking-widest uppercase rounded-sm transition-all hover:bg-white/5 group"
              >
                Request a Quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
