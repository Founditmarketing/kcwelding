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

      {/* Services Grid */}
      <section className="py-24 bg-deep-iron diamond-plate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="OUR SERVICES" 
            subtitle="Expertise" 
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="w-16 h-16 mb-6 bg-amber flex items-center justify-center rounded-sm amber-glow-sm shrink-0">
                    <img 
                      src={service.icon} 
                      alt={service.title} 
                      className="w-10 h-10 invert brightness-200"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-weathered-iron mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link to={`/services/${service.id}`} className="text-amber-light flex items-center group">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/services">
              <Button size="lg">View All 11 Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-iron-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="THE KC WELDING DIFFERENCE" 
            subtitle="Why Choose Us" 
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "AWS Certified", text: "Backed by rigorous certification and a zero-failure track record. When stakes are high, we deliver." },
              { icon: MapPin, title: "Mobile Dispatch", text: "We come to you. Emergency dispatch available for critical breakdowns anywhere in the region." },
              { icon: Hammer, title: "Full Capability", text: "MIG, TIG, STICK, FLUX-CORE — every technique, every metal, every time." },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-charcoal-800 border border-steel-500 flex items-center justify-center mx-auto mb-6 transition-all group-hover:border-amber group-hover:amber-glow-sm">
                  <item.icon className="w-10 h-10 text-amber-light" />
                </div>
                <h4 className="text-xl mb-4">{item.title}</h4>
                <p className="text-weathered-iron">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-deep-iron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <SectionHeading 
              title="OUR WORK" 
              subtitle="Gallery" 
              className="mb-0"
            />
            <Link to="/gallery" className="hidden md:block">
              <Button variant="outline">View Full Gallery</Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.slice(0, 8).map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="aspect-square overflow-hidden border border-weathered-iron"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/gallery">
              <Button variant="outline">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-charcoal-800 border-t border-steel-600/40 relative overflow-hidden">
        {/* Dot texture */}
        <div className="absolute inset-0 diamond-plate opacity-60" />
        {/* Amber top border accent */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-amber-light font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-4">Ready to Get Started?</span>
          <h2 className="text-4xl md:text-6xl mb-6 text-white">Let's Get to Work.</h2>
          <p className="text-lg text-steel-300 mb-12 max-w-2xl mx-auto font-body leading-relaxed">
            Whether you need large-scale infrastructure repair or a simple gate weld — we take every job seriously and price every one fairly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              id="cta-phone-bottom"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber hover:bg-amber-light text-charcoal-950 font-sans font-bold text-base tracking-widest uppercase rounded-sm transition-all amber-glow"
            >
              <Phone className="w-5 h-5 shrink-0" />
              Call {COMPANY_INFO.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-steel-400/60 hover:border-amber/60 text-steel-100 hover:text-white font-sans font-semibold text-base tracking-widest uppercase rounded-sm transition-all hover:bg-white/5"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
