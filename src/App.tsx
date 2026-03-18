/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Hammer,
  Truck,
  ShieldCheck,
  Zap,
  Clock,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Award,
  HardHat,
  Wrench,
  Factory,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHome = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleGallery = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={handleHome}>
            <div className="bg-white rounded-full p-1 flex items-center justify-center shadow-xl border-2 border-zinc-950/5 transition-all duration-300">
              <img
                src="/Black-Red-Minimalist-Welding-Man-Logo-T2.png"
                alt="KC Welding Logo"
                className={`object-contain transition-all duration-300 ${scrolled ? 'h-16 w-16' : 'h-36 w-36'}`}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 pb-2">
            <a href="#services" className="text-sm font-medium text-zinc-300 hover:text-brand-green transition-colors uppercase tracking-widest">Services</a>
            <a href="#authority" className="text-sm font-medium text-zinc-300 hover:text-brand-green transition-colors uppercase tracking-widest">Authority</a>
            <a href="#gallery" onClick={handleGallery} className="text-sm font-medium text-zinc-300 hover:text-brand-green transition-colors uppercase tracking-widest">Gallery</a>
            <a href="#contact" className="bg-brand-green hover:bg-brand-green-dark text-white px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-widest transition-all">
              Dispatch Emergency Repair
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-300">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#services" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-zinc-300 py-2">Services</a>
              <a href="#authority" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-zinc-300 py-2">Authority</a>
              <a href="#gallery" onClick={handleGallery} className="block text-lg font-medium text-zinc-300 py-2">Gallery</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block bg-brand-green text-white px-6 py-3 rounded-sm text-center font-bold uppercase tracking-widest">
                Dispatch Emergency Repair
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-zinc-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2070"
          alt="Industrial Welding Sparks"
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 border border-brand-green/20 px-3 py-1 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            <span className="text-brand-green text-xs font-bold uppercase tracking-[0.2em]">AWS Certified & Mobile Ready</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 uppercase tracking-tighter">
            Precision Industrial Welding & <span className="text-brand-green">High-Tensile</span> Fabrication
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-10 font-light leading-relaxed">
            When failure is not an option. We provide X-ray quality welds for heavy equipment, industrial infrastructure, and high-liability commercial projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-sm text-lg font-bold uppercase tracking-widest transition-all flex items-center justify-center group">
              Request a Project Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="border border-zinc-700 hover:border-zinc-500 text-white px-8 py-4 rounded-sm text-lg font-bold uppercase tracking-widest transition-all">
              View Industrial Portfolio
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-zinc-900/50 backdrop-blur-sm border-t border-zinc-800 py-8 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-4 gap-8">
          <div className="flex flex-col">
            <span className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Certification</span>
            <span className="text-white font-bold text-lg">AWS CERTIFIED</span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Track Record</span>
            <span className="text-white font-bold text-lg">10+ YEARS / ZERO FAILURES</span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Quality Standard</span>
            <span className="text-white font-bold text-lg">X-RAY QUALITY WELDS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Response Time</span>
            <span className="text-white font-bold text-lg">24/7 EMERGENCY DISPATCH</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const DeterrenceSection = () => {
  return (
    <section className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Industrial & Commercial <span className="text-brand-green">Exclusivity</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              KC Welding specializes in high-stakes, high-liability projects where structural integrity is non-negotiable. We do not handle residential hobbyist projects, small repairs, or decorative work. Our facility and mobile units are dedicated strictly to the needs of fleet managers, engineers, and industrial operators.
            </p>
            <ul className="space-y-4">
              {[
                "Full Liability Coverage for Industrial Sites",
                "AWS Certified Structural Welding",
                "High-Tensile Steel & Alloy Expertise",
                "Rigorous Stress-Testing Protocols"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-zinc-200 font-medium">
                  <ShieldCheck className="text-brand-green mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-zinc-950 p-8 border border-zinc-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 blur-3xl group-hover:bg-brand-green/20 transition-all"></div>
            <HardHat className="text-brand-green mb-6" size={48} />
            <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-4">Targeted Operations</h3>
            <p className="text-zinc-500 mb-6">We are the primary choice for:</p>
            <div className="grid grid-cols-2 gap-4">
              {["Railroad Companies", "Fleet Managers", "Agricultural Ops", "Construction Firms", "Mining Facilities", "Energy Infrastructure"].map((target, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 p-3 text-sm text-zinc-300 font-bold uppercase tracking-wider">
                  {target}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Heavy Equipment & Fleet Repair",
      description: "Comprehensive structural repair for excavators, semi-trucks, cranes, and railroad cars. We specialize in crack repair on high-stress points and chassis reinforcement.",
      icon: <Truck size={40} />,
      keywords: ["Excavators", "Cranes", "Railroad Cars", "Chassis Repair"]
    },
    {
      title: "Industrial Fabrication",
      description: "High-liability builds including custom 25ft drone-spraying towers, stress-tested structures, and specialized industrial components built to engineering specs.",
      icon: <Factory size={40} />,
      keywords: ["Drone Towers", "Stress-Tested Builds", "Custom Components"]
    },
    {
      title: "Mobile Emergency Welding",
      description: "AWS Certified onsite repairs designed to minimize industrial downtime. Our fully equipped mobile units bring shop-quality precision directly to your field or site.",
      icon: <Zap size={40} />,
      keywords: ["24/7 Dispatch", "Onsite AWS Certified", "Downtime Reduction"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Core Service Pillars</h2>
          <div className="h-1 w-24 bg-brand-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-zinc-900 border border-zinc-800 p-10 flex flex-col h-full"
            >
              <div className="text-brand-green mb-8">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">{service.title}</h3>
              <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((kw, j) => (
                  <span key={j} className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 border border-zinc-800 px-2 py-1">
                    {kw}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Authority = () => {
  return (
    <section id="authority" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white h-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-center items-center text-center">
                <Award className="text-brand-green mb-4" size={40} />
                <span className="text-white font-black text-3xl mb-1">100%</span>
                <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">X-Ray Pass Rate</span>
              </div>
              <div className="aspect-square bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-center items-center text-center">
                <ShieldCheck className="text-brand-green mb-4" size={40} />
                <span className="text-white font-black text-3xl mb-1">ZERO</span>
                <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Field Failures</span>
              </div>
              <div className="aspect-square bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-center items-center text-center">
                <Wrench className="text-brand-green mb-4" size={40} />
                <span className="text-white font-black text-3xl mb-1">AWS</span>
                <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Certified Welder</span>
              </div>
              <div className="aspect-square bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-center items-center text-center">
                <Clock className="text-brand-green mb-4" size={40} />
                <span className="text-white font-black text-3xl mb-1">24/7</span>
                <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Emergency Dispatch</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">
              The <span className="text-brand-green">Authority</span> in High-Stakes Welding
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                With over a decade of experience in the industrial sector, KC Welding has built a reputation for perfection. We don't just weld; we engineer solutions that withstand extreme stress and environmental conditions.
              </p>
              <p className="border-l-4 border-brand-green pl-6 italic text-zinc-300">
                "We are frequently hired to fix other shops' mistakes. In our world, a failed weld isn't just an inconvenience—it's a massive liability. We ensure it's done right the first time."
              </p>
              <p>
                Our owner is an AWS Certified Welder with a 10-year track record of X-ray-tested welds with zero failures. From high-tensile crack repair to complex industrial fabrication, we bring a level of precision that hobbyist shops simply cannot match.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ALL_IMAGES = [
  { url: "/gallery-construction.png", title: "Structural Framing Project" },
  { url: "/gallery-stove.png", title: "Custom Wood-Burning Furnace" },
  { url: "/gallery-hopper.png", title: "Industrial Hopper Fabrication" },
  { url: "/gallery-bracket.png", title: "Custom Bracket & Pipe Work" },
  { url: "/gallery-welder.png", title: "Precision Welding in Action" },
  { url: "/gallery-pipe-fitting.jpg", title: "Precision Pipe Fitting" },
  { url: "/gallery-railing.png", title: "Custom Steel Railing" },
  { url: "/gallery-frame-repair.png", title: "Heavy Frame Repair" },
  { url: "/gallery-gate.png", title: "Heavy-Duty Gate Fabrication" },
  { url: "/gallery-storage-unit.jpg", title: "Custom Storage Unit Build" },
  { url: "/gallery-flange.jpg", title: "Flange & Pipe Assembly" },
  { url: "/gallery-slats.png", title: "Steel Slat Panel Fabrication" },
  { url: "/gallery-layout.png", title: "Precision Metal Layout" },
  { url: "/gallery-trailer.png", title: "Trailer Frame Build" },
  { url: "/gallery-underframe.png", title: "Heavy Equipment Underframe" },
];

const Gallery = ({ onViewAll }: { onViewAll: () => void }) => {
  const preview = ALL_IMAGES.slice(0, 5);

  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Project Gallery</h2>
            <p className="text-zinc-500 uppercase tracking-widest text-sm font-bold">Real-time "Biggest and Baddest" Job Photos</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 text-xs text-zinc-400 max-w-xs">
            <p>Our gallery is updated weekly, showcasing the scale and complexity of our recent industrial projects.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {preview.map((img, i) => (
            <div key={i} className="group relative overflow-hidden aspect-[4/3] bg-zinc-900 border border-zinc-800">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold uppercase tracking-widest text-sm">{img.title}</span>
              </div>
            </div>
          ))}

          {/* 6th tile — View Full Gallery */}
          <button
            onClick={onViewAll}
            className="group relative overflow-hidden aspect-[4/3] bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center gap-4 hover:border-brand-green transition-all duration-300"
          >
            <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/10 transition-all duration-300" />
            <ArrowRight className="text-brand-green group-hover:translate-x-1 transition-transform duration-300" size={36} />
            <span className="text-white font-black uppercase tracking-widest text-sm relative z-10">View Full Gallery</span>
          </button>
        </div>
      </div>
    </section>
  );
};

const GalleryPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-zinc-950 pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-brand-green transition-colors text-sm font-bold uppercase tracking-widest mb-8 group"
          >
            <ChevronRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={16} />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Full Project Gallery</h1>
          <div className="h-1 w-24 bg-brand-green mb-4" />
          <p className="text-zinc-500 uppercase tracking-widest text-sm font-bold">{ALL_IMAGES.length} Real-World KC Welding Projects</p>
        </div>

        {/* Full grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ALL_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden aspect-[4/3] bg-zinc-900 border border-zinc-800"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold uppercase tracking-widest text-sm">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 border border-zinc-700 hover:border-brand-green text-zinc-300 hover:text-brand-green px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest transition-all group"
          >
            <ChevronRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={16} />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
              Minimize Your <br /> <span className="text-zinc-950">Downtime</span> Now.
            </h2>
            <p className="text-xl mb-12 font-medium text-zinc-100">
              Whether you need a high-liability fabrication consultation or emergency onsite repair, our AWS Certified team is ready to dispatch.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-zinc-950 p-3 mr-6">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold opacity-70 mb-1">Emergency Dispatch</span>
                  <span className="text-2xl font-black tracking-tight">(555) 123-4567</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-zinc-950 p-3 mr-6">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold opacity-70 mb-1">Project Consultation</span>
                  <span className="text-2xl font-black tracking-tight">projects@kcwelding.com</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-zinc-950 p-3 mr-6">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold opacity-70 mb-1">Service Area</span>
                  <span className="text-2xl font-black tracking-tight">Regional Industrial Hubs</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 p-10 border border-zinc-900 shadow-2xl">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">Request Consultation</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Company Name</label>
                  <input type="text" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-brand-green outline-none transition-colors" placeholder="e.g. Heavy Fleet Co." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Contact Person</label>
                  <input type="text" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-brand-green outline-none transition-colors" placeholder="Full Name" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Project Type</label>
                <select className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-brand-green outline-none transition-colors appearance-none">
                  <option>Heavy Equipment Repair</option>
                  <option>Industrial Fabrication</option>
                  <option>Emergency Mobile Welding</option>
                  <option>Infrastructure Maintenance</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Project Details</label>
                <textarea rows={4} className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-brand-green outline-none transition-colors" placeholder="Describe the scope of work..."></textarea>
              </div>
              <button className="w-full bg-brand-green hover:bg-brand-green-dark text-white py-5 font-black uppercase tracking-[0.2em] transition-all">
                Submit Project Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <img
              src="/Black-Red-Minimalist-Welding-Man-Logo-T2.png"
              alt="KC Welding Logo"
              className="h-10 w-auto mr-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
            />
            <div>
              <span className="text-2xl font-black tracking-tighter text-white">
                KC<span className="text-brand-green">WELDING</span>
              </span>
              <p className="text-zinc-600 text-xs uppercase tracking-widest font-bold">Industrial Fabrication & Repair Authority</p>
            </div>
          </div>



          <div className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} KC Welding. All Rights Reserved. AWS Certified.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [page, setPage] = useState<'home' | 'gallery'>('home');

  const goGallery = () => { setPage('gallery'); window.scrollTo({ top: 0 }); };
  const goHome = () => { setPage('home'); window.scrollTo({ top: 0 }); };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-brand-green selection:text-white">
      <Navbar onNavigate={(p) => p === 'gallery' ? goGallery() : goHome()} />
      {page === 'gallery' ? (
        <>
          <GalleryPage onBack={goHome} />
          <Footer />
        </>
      ) : (
        <>
          <main>
            <Hero />
            <DeterrenceSection />
            <Services />
            <Authority />
            <Gallery onViewAll={goGallery} />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
