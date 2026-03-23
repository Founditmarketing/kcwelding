import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, MapPin, Clock, Hammer } from 'lucide-react';
import { COMPANY_INFO, SERVICES, GALLERY_IMAGES } from '@/src/lib/constants';
import { Button } from '@/src/components/ui/Button';
import { Card } from '@/src/components/ui/Card';
import { SectionHeading } from '@/src/components/ui/SectionHeading';

export const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Radial gradient: transparent at flame hotspot (right), dark at edges */}
          <div className="absolute inset-0 z-10" style={{
            background: 'radial-gradient(ellipse 55% 65% at 62% 50%, transparent 0%, rgba(9,9,11,0.55) 45%, rgba(9,9,11,0.97) 100%)'
          }} />
          {/* Extra dark sweep on the left so text pops */}
          <div className="absolute inset-0 z-10" style={{
            background: 'linear-gradient(to right, rgba(9,9,11,0.92) 0%, rgba(9,9,11,0.75) 30%, transparent 55%)'
          }} />
          {/* Green tint overlay */}
          <div className="absolute inset-0 bg-brand-green/15 mix-blend-multiply z-[5]" />
          <img 
            src="/flame-closeup.png" 
            alt="Welding Arc Close-Up" 
            className="w-full h-full object-cover"
            style={{ filter: 'hue-rotate(-120deg) saturate(2) brightness(0.85)' }}
          />
        </div>

        <div className="px-8 sm:px-12 lg:px-16 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-brand-green-light font-display tracking-[0.3em] uppercase mb-4 block">
              AWS-Certified Industrial Welding — When Failure Is Not An Option
            </span>
            <h1 className="text-6xl md:text-8xl mb-6 leading-[0.9]">
              FORGED IN FIRE. <br />
              <span className="text-brand-green-light">BUILT TO LAST.</span>
            </h1>
            <p className="text-xl text-light-steel mb-10 font-body">
              We provide X-ray quality welds for heavy equipment, industrial infrastructure, and high-liability commercial projects. Quality over quick fixes — every job done right the first time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => window.location.href = `tel:${COMPANY_INFO.phone}`}>
                Get A Quote
              </Button>
              <Link to="/gallery">
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Quick Contact Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-deep-iron/80 backdrop-blur-md border-t border-weathered-iron py-6 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center md:justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="text-brand-green-light" />
              <span className="font-display text-xl text-white tracking-widest">{COMPANY_INFO.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-brand-green-light" />
              <span className="font-display text-xl text-white tracking-widest">MOBILE SERVICE AREA</span>
            </div>
            <div className="hidden lg:flex items-center space-x-3">
              <Clock className="text-brand-green-light" />
              <span className="font-display text-xl text-white tracking-widest">EST. {COMPANY_INFO.established}</span>
            </div>
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
              <p className="text-lg text-brand-green-light italic border-l-4 border-brand-green pl-4 mb-10 leading-relaxed">
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
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-green/40 z-0" />
              <img 
                src="https://kc-welding.com/wp-content/uploads/2025/12/Resized_dsc_0009.jpeg" 
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
                  <div className="w-16 h-16 mb-6 bg-brand-green flex items-center justify-center rounded-sm green-glow shrink-0">
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
                  <Link to={`/services/${service.id}`} className="text-brand-green-light flex items-center group">
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
              { icon: Shield, title: "AWS Certified", text: "Our owner holds AWS Certification with a 10-year track record of X-ray-tested welds and zero failures in the field." },
              { icon: MapPin, title: "Mobile Dispatch", text: "We come to you. Emergency dispatch available for critical breakdowns — no hauling equipment across town." },
              { icon: Hammer, title: "Industrial Grade", text: "We don't do residential hobbyist work. Every job is high-stakes, high-liability, and built to hold — no matter what." },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-deep-iron border border-weathered-iron flex items-center justify-center mx-auto mb-6 transition-all group-hover:border-brand-green group-hover:green-glow">
                  <item.icon className="w-10 h-10 text-brand-green-light" />
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
      <section className="py-24 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl mb-8 text-white">MINIMIZE YOUR DOWNTIME NOW.</h2>
          <p className="text-2xl text-white/90 mb-12 font-display uppercase tracking-widest">
            Whether you need industrial fabrication or emergency dispatch — our AWS Certified team is ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button size="lg" className="bg-white text-brand-green hover:bg-white/90 green-glow">
                Call {COMPANY_INFO.phone}
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-brand-green">
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
