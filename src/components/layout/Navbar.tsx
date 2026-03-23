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
              className="h-12 w-auto mr-3 transition-transform group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-display text-2xl leading-none text-white">KC WELDING</span>
              <span className="text-[10px] tracking-[0.2em] text-brand-green-light uppercase">Industrial Authority</span>
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
              className="text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-iron-black md:hidden pt-24 px-6"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'font-display text-3xl uppercase tracking-tighter',
                    location.pathname === link.path ? 'text-brand-green-light' : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-weathered-iron">
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center text-white text-xl font-display mb-4"
                >
                  <Phone className="w-6 h-6 mr-3 text-brand-green-light" />
                  {COMPANY_INFO.phone}
                </a>
                <div className="flex space-x-6">
                  <a href={COMPANY_INFO.facebook} target="_blank" rel="noreferrer" className="text-white hover:text-brand-green-light">
                    <Facebook />
                  </a>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-brand-green-light">
                    <Mail />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
