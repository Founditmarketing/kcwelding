import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Facebook, MapPin, Send, Clock } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/src/lib/constants';
import { SectionHeading } from '@/src/components/ui/SectionHeading';
import { Button } from '@/src/components/ui/Button';
import { Card } from '@/src/components/ui/Card';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an email
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-iron-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://kc-welding.com/wp-content/uploads/2024/08/KC-Welding-pt-2-4-scaled.jpeg" alt="Contact Hero" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl mb-4">MINIMIZE YOUR DOWNTIME</h1>
            <p className="text-xl text-brand-green-light font-display tracking-[0.3em] uppercase">
              Request a Consultation or Dispatch Emergency Repair
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-deep-iron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading title="GET IN TOUCH" subtitle="Contact Information" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <Card className="flex flex-col items-center text-center p-8">
                  <Phone className="w-8 h-8 text-brand-green-light mb-4" />
                  <h4 className="text-white font-display uppercase mb-2">Call Us</h4>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-weathered-iron hover:text-brand-green-light">{COMPANY_INFO.phone}</a>
                </Card>
                <Card className="flex flex-col items-center text-center p-8">
                  <Mail className="w-8 h-8 text-brand-green-light mb-4" />
                  <h4 className="text-white font-display uppercase mb-2">Email Us</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-weathered-iron hover:text-brand-green-light break-all">{COMPANY_INFO.email}</a>
                </Card>
                <Card className="flex flex-col items-center text-center p-8">
                  <MapPin className="w-8 h-8 text-brand-green-light mb-4" />
                  <h4 className="text-white font-display uppercase mb-2">Service Area</h4>
                  <span className="text-weathered-iron">{COMPANY_INFO.location}</span>
                </Card>
                <Card className="flex flex-col items-center text-center p-8">
                  <Facebook className="w-8 h-8 text-brand-green-light mb-4" />
                  <h4 className="text-white font-display uppercase mb-2">Follow Us</h4>
                  <a href={COMPANY_INFO.facebook} target="_blank" rel="noreferrer" className="text-weathered-iron hover:text-brand-green-light">@KCWelding</a>
                </Card>
              </div>

              <div className="bg-iron-black border border-weathered-iron p-8">
                <h4 className="text-white font-display uppercase mb-6 flex items-center">
                  <Clock className="w-5 h-5 text-brand-green-light mr-3" />
                  Mobile Service Hours
                </h4>
                <div className="space-y-3 text-weathered-iron">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-brand-green-light">Emergency Only</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-10">
                <h3 className="text-3xl mb-8">REQUEST A QUOTE</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-weathered-iron">Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-iron-black border border-weathered-iron p-3 text-white focus:border-brand-green outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-weathered-iron">Phone</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-iron-black border border-weathered-iron p-3 text-white focus:border-brand-green outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-weathered-iron">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-iron-black border border-weathered-iron p-3 text-white focus:border-brand-green outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-weathered-iron">Service Needed</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-iron-black border border-weathered-iron p-3 text-white focus:border-brand-green outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-weathered-iron">Message</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-iron-black border border-weathered-iron p-3 text-white focus:border-brand-green outline-none transition-colors resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] bg-weathered-iron/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-brand-green-light mx-auto mb-4" />
            <h3 className="text-2xl text-white font-display uppercase">Serving Central Louisiana</h3>
            <p className="text-weathered-iron">Mobile services delivered to your location</p>
          </div>
        </div>
        {/* In a real app, you'd embed a Google Map here */}
        <div className="absolute inset-0 bg-iron-black/40 pointer-events-none" />
      </section>
    </div>
  );
};
