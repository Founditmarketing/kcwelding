import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/src/lib/constants';

const NAV_LINKS = [
  { label: 'Home',      to: '/'        },
  { label: 'Services',  to: '/services' },
  { label: 'Portfolio', to: '/gallery'  },
  { label: 'About',     to: '/about'   },
  { label: 'Contact',   to: '/contact' },
];

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t border-steel-600/30 relative overflow-hidden">
      {/* Amber top accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber/60 to-transparent" />
      {/* Subtle dot texture */}
      <div className="absolute inset-0 diamond-plate opacity-20" />

      {/* ── Main footer grid ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* ── Brand column ─────────────────────────────────── */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center group" aria-label="KC Welding — Home">
              <img
                src="/KC Welding logo.jpeg"
                alt="KC Welding Logo"
                className="h-16 w-auto transition-opacity group-hover:opacity-80 drop-shadow-md rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col leading-none ml-2 z-10">
                <span className="font-display text-2xl tracking-widest text-white">KC WELDING</span>
                <span className="text-[10px] tracking-[0.25em] text-amber-light uppercase font-sans mt-0.5">&amp; Fabrication</span>
              </div>
            </Link>

            <p className="text-steel-400 font-body text-sm leading-relaxed max-w-xs">
              Professional mobile welding and fabrication serving Central Louisiana. Any size job — priced fairly, done right.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="KC Welding on Facebook"
                className="w-9 h-9 rounded-sm bg-charcoal-800 border border-steel-600/40 flex items-center justify-center text-steel-400 hover:text-amber-light hover:border-amber/40 transition-all"
              >
                <Facebook size={16} />
              </a>
              {/* Instagram placeholder */}
              <a
                href="#"
                aria-label="KC Welding on Instagram (coming soon)"
                className="w-9 h-9 rounded-sm bg-charcoal-800 border border-steel-600/40 flex items-center justify-center text-steel-400 hover:text-amber-light hover:border-amber/40 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                aria-label="Email KC Welding"
                className="w-9 h-9 rounded-sm bg-charcoal-800 border border-steel-600/40 flex items-center justify-center text-steel-400 hover:text-amber-light hover:border-amber/40 transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* ── Navigation ──────────────────────────────────── */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] uppercase text-white mb-5">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-steel-400 font-body text-sm hover:text-amber-light transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services (top 5) ────────────────────────────── */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] uppercase text-white mb-5">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.id}`}
                    className="text-steel-400 font-body text-sm hover:text-amber-light transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-amber font-body text-sm font-semibold hover:text-amber-light transition-colors"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Contact ─────────────────────────────────────── */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] uppercase text-white mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              {/* Phone — prominent */}
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center gap-3 group"
                  aria-label={`Call KC Welding at ${COMPANY_INFO.phone}`}
                >
                  <span className="w-8 h-8 rounded-sm bg-amber/15 border border-amber/30 flex items-center justify-center shrink-0 group-hover:bg-amber/25 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-amber" />
                  </span>
                  <span className="font-display text-lg text-white group-hover:text-amber-light transition-colors tracking-wide">
                    {COMPANY_INFO.phone}
                  </span>
                </a>
              </li>
              {/* Email */}
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3 text-steel-400 hover:text-amber-light transition-colors group"
                >
                  <Mail className="w-4 h-4 text-steel-500 group-hover:text-amber-light transition-colors shrink-0 mt-0.5" />
                  <span className="font-body text-sm break-all">{COMPANY_INFO.email}</span>
                </a>
              </li>
              {/* Location */}
              <li>
                <div className="flex items-start gap-3 text-steel-400">
                  <MapPin className="w-4 h-4 text-steel-500 shrink-0 mt-0.5" />
                  <span className="font-body text-sm">{COMPANY_INFO.location}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>{/* /grid */}

        {/* ── Bottom bar ──────────────────────────────────────── */}
        <div className="pt-8 border-t border-steel-600/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-steel-500 font-sans text-xs">
          <p>
            KC Welding, LLC &nbsp;&mdash;&nbsp; All Rights Reserved {year} &nbsp;|&nbsp; Licensed &amp; Insured
          </p>
          <p className="text-steel-600">
            Est. {COMPANY_INFO.established} &nbsp;·&nbsp; Central Louisiana
          </p>
        </div>

      </div>
    </footer>
  );
};
