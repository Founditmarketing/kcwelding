import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Facebook, Mail, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '@/src/lib/constants';
import { cn } from '@/src/lib/utils';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Detect scroll to condense navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const navLinks = [
    { name: 'Home',      path: '/'        },
    { name: 'Services',  path: '/services' },
    { name: 'Portfolio', path: '/gallery'  },
    { name: 'About',     path: '/about'   },
    { name: 'Contact',   path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* ─── Sticky Navbar ─────────────────────────────────────────── */}
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300',
          scrolled
            ? 'bg-charcoal-900/97 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.6)] border-b border-steel-600/40'
            : 'bg-gradient-to-b from-charcoal-950/90 to-transparent backdrop-blur-sm border-b border-white/5'
        )}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className={cn(
            'flex justify-between items-center transition-all duration-300',
            scrolled ? 'h-16' : 'h-20'
          )}>

            {/* ── Logo ─────────────────────────────────────────────── */}
            <Link
              to="/"
              className="flex items-center gap-1 group shrink-0"
              aria-label="KC Welding — Home"
            >
              <div className="relative">
                <img
                  src="/gallery/Black-Red-Minimalist-Welding-Man-Logo-T2.png"
                  alt="KC Welding Logo"
                  className={cn(
                    'w-auto transition-all duration-300 drop-shadow-lg',
                    scrolled ? 'h-20 translate-y-1' : 'h-32 translate-y-3'
                  )}
                />
                {/* Amber glow dot behind logo */}
                <div className={cn(
                  "absolute inset-0 -z-10 rounded-full bg-amber/10 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  scrolled ? "translate-y-1" : "translate-y-3"
                )} />
              </div>
              <div className={cn(
                "flex flex-col leading-none transition-all duration-300 z-10",
                scrolled ? "-ml-3" : "-ml-8"
              )}>
                <span
                  className={cn(
                    'font-display tracking-widest transition-all duration-300 text-white',
                    scrolled ? 'text-xl' : 'text-2xl'
                  )}
                >
                  KC WELDING
                </span>
                <span className="hidden sm:block text-[10px] tracking-[0.25em] text-amber-light uppercase mt-0.5 font-sans">
                  &amp; Fabrication
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav Links ─────────────────────────────────── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative px-4 py-2 text-sm tracking-[0.15em] uppercase font-sans font-semibold transition-colors duration-200',
                    isActive(link.path)
                      ? 'text-amber-light'
                      : 'text-steel-200 hover:text-white'
                  )}
                >
                  {link.name}
                  {/* Active underline */}
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* ── Phone CTA ─────────────────────────────────────────── */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              id="nav-phone-cta"
              className={cn(
                'hidden md:flex items-center gap-2.5 px-5 py-2.5 rounded-sm font-sans font-bold text-sm tracking-widest uppercase',
                'bg-amber hover:bg-amber-light text-charcoal-950 transition-all duration-200 amber-glow-sm',
                'hover:shadow-[0_0_22px_rgba(212,137,26,0.55)]'
              )}
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span className="leading-none">{COMPANY_INFO.phone}</span>
            </a>

            {/* ── Mobile Hamburger ──────────────────────────────────── */}
            <button
              className="md:hidden relative z-[60] p-2 text-white hover:text-amber-light transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.span key="close"
                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}
                  >
                    <X size={26} />
                  </motion.span>
                ) : (
                  <motion.span key="open"
                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}
                  >
                    <Menu size={26} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

          </div>
        </div>
      </nav>

      {/* ─── Mobile Full-Screen Drawer ─────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[54] bg-charcoal-950/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[360px] z-[55] bg-charcoal-900 flex flex-col md:hidden border-l border-steel-600/40 shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-steel-600/30 shrink-0">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                  <img
                    src="/gallery/Black-Red-Minimalist-Welding-Man-Logo-T2.png"
                    alt="KC Welding"
                    className="h-12 w-auto"
                  />
                  <div className="flex flex-col leading-none">
                    <span className="font-display text-xl tracking-widest text-white">KC WELDING</span>
                    <span className="text-[9px] tracking-[0.2em] text-amber-light uppercase font-sans">&amp; Fabrication</span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-steel-300 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col flex-1 overflow-y-auto px-4 py-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex items-center justify-between py-4 px-2 border-b border-steel-600/20 transition-colors group',
                        isActive(link.path)
                          ? 'text-amber-light'
                          : 'text-steel-100 hover:text-white'
                      )}
                    >
                      <span className="font-display text-3xl tracking-wide">{link.name}</span>
                      <ChevronRight
                        className={cn(
                          'w-5 h-5 transition-all',
                          isActive(link.path) ? 'text-amber' : 'text-steel-500 group-hover:text-steel-300 group-hover:translate-x-1'
                        )}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="px-6 py-6 border-t border-steel-600/30 shrink-0 space-y-4 bg-charcoal-950/60">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  id="nav-mobile-phone-cta"
                  className="flex items-center justify-center gap-3 w-full bg-amber hover:bg-amber-light text-charcoal-950 py-4 font-sans font-bold text-base tracking-widest uppercase rounded-sm transition-all amber-glow"
                >
                  <Phone className="w-5 h-5" />
                  {COMPANY_INFO.phone}
                </a>
                <div className="flex justify-center gap-6">
                  <a
                    href={COMPANY_INFO.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="text-steel-400 hover:text-amber-light transition-colors"
                    aria-label="KC Welding on Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-steel-400 hover:text-amber-light transition-colors"
                    aria-label="Email KC Welding"
                  >
                    <Mail size={20} />
                  </a>
                </div>
                <p className="text-center text-steel-500 text-xs font-sans">
                  Licensed LLC &nbsp;·&nbsp; Est. {COMPANY_INFO.established}&nbsp;·&nbsp; Central Louisiana
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
