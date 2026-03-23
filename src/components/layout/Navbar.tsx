import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Facebook, Mail } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/src/lib/constants';
import { cn } from '@/src/lib/utils';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-iron-black/90 backdrop-blur-md border-b border-weathered-iron">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="https://kc-welding.com/wp-content/uploads/2024/08/Black-Red-Minimalist-Welding-Man-Logo-T2.png" 
              alt="KC Welding Logo" 
              className="h-10 w-auto mr-3 transition-transform group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl leading-none text-white">KC WELDING</span>
              <span className="hidden sm:block text-[10px] tracking-[0.2em] text-brand-green-light uppercase">Industrial Authority</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'font-display text-sm uppercase tracking-widest transition-colors hover:text-brand-green-light',
                  location.pathname === link.path ? 'text-brand-green-light' : 'text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center bg-brand-green text-white px-4 py-2 rounded-sm font-display text-sm hover:bg-brand-green-dark transition-all green-glow"
            >
              <Phone className="w-4 h-4 mr-2" />
              {COMPANY_INFO.phone}
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:text-brand-green-light transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-0 z-40 bg-iron-black md:hidden flex flex-col"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-weathered-iron shrink-0">
              <span className="font-display text-xl text-white">KC WELDING</span>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-brand-green-light p-2">
                <X size={28} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col flex-1 overflow-y-auto px-6 py-8 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block font-display text-4xl uppercase tracking-tight py-3 border-b border-weathered-iron/40 transition-colors',
                      location.pathname === link.path
                        ? 'text-brand-green-light'
                        : 'text-white hover:text-brand-green-light'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="px-6 py-8 border-t border-weathered-iron shrink-0 space-y-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center w-full bg-brand-green text-white py-4 font-display text-lg tracking-widest hover:bg-brand-green-dark transition-colors green-glow"
              >
                <Phone className="w-5 h-5 mr-3" />
                {COMPANY_INFO.phone}
              </a>
              <div className="flex justify-center space-x-8">
                <a href={COMPANY_INFO.facebook} target="_blank" rel="noreferrer" className="text-weathered-iron hover:text-brand-green-light transition-colors">
                  <Facebook size={22} />
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-weathered-iron hover:text-brand-green-light transition-colors">
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
