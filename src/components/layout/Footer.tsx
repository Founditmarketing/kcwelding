import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/src/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-iron-black border-t border-weathered-iron pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img 
                src="https://kc-welding.com/wp-content/uploads/2024/08/Black-Red-Minimalist-Welding-Man-Logo-T2.png" 
                alt="KC Welding Logo" 
                className="h-12 w-auto mr-3"
                referrerPolicy="no-referrer"
              />
              <span className="font-display text-2xl text-white">KC WELDING</span>
            </Link>
            <p className="text-weathered-iron text-sm leading-relaxed">
              AWS-certified mobile welding and fabrication. When failure is not an option — every weld built to last, done right the first time.
            </p>
            <div className="flex space-x-4">
              <a href={COMPANY_INFO.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-sm bg-deep-iron border border-weathered-iron flex items-center justify-center hover:border-brand-green hover:text-brand-green-light transition-all">
                <Facebook size={20} />
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="w-10 h-10 rounded-sm bg-deep-iron border border-weathered-iron flex items-center justify-center hover:border-brand-green hover:text-brand-green-light transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-6 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-weathered-iron hover:text-brand-green-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-weathered-iron hover:text-brand-green-light transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-weathered-iron hover:text-brand-green-light transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-weathered-iron hover:text-brand-green-light transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-weathered-iron hover:text-brand-green-light transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-white mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-4">
              {SERVICES.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="text-weathered-iron hover:text-brand-green-light transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li><Link to="/services" className="text-brand-green-light hover:underline">View All Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-white mb-6 uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-brand-green-light mr-3 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-weathered-iron hover:text-white">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-brand-green-light mr-3 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-weathered-iron hover:text-white break-all">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-green-light mr-3 shrink-0" />
                <span className="text-weathered-iron">{COMPANY_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-weathered-iron/30 flex flex-col md:flex-row justify-between items-center text-xs text-weathered-iron uppercase tracking-widest">
          <p>© {new Date().getFullYear()} KC Welding. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Forged in Central Louisiana</p>
        </div>
      </div>
    </footer>
  );
};
