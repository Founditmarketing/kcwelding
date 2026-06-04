import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Facebook, MapPin, Send, Clock, Zap, AlertTriangle } from 'lucide-react';
import { COMPANY_INFO } from '@/src/lib/constants';

/* ─── Field wrapper helpers ──────────────────────────────────── */
const labelCls = 'block text-xs font-sans font-semibold tracking-[0.2em] uppercase text-steel-400 mb-2';
const inputCls =
  'w-full bg-charcoal-950 border border-steel-600/60 rounded-sm px-4 py-3 text-white font-body text-sm placeholder:text-steel-600 focus:outline-none focus:border-amber/60 transition-colors duration-200';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name:        '',
    phone:       '',
    email:       '',
    projectType: '',
    message:     '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });
  };

  return (
    <div className="pt-20">

      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal-950" />
        <img
          src="/gallery/KC-Welding-pt-2-4-scaled.jpeg"
          alt="KC Welding — Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.35) saturate(0.55)' }}
          referrerPolicy="no-referrer"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, rgba(14,14,15,0.97) 0%, rgba(14,14,15,0.78) 40%, rgba(14,14,15,0.25) 100%)' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24" style={{ background: 'linear-gradient(to top, rgba(14,14,15,1) 0%, transparent 100%)' }} />
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber to-transparent" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="flex items-center gap-3 mb-4">
              <span className="accent-bar" />
              <span className="text-amber-light font-sans text-xs font-semibold tracking-[0.3em] uppercase">Reach Out</span>
            </span>
            <h1 className="text-5xl md:text-7xl mb-4">Get in Touch</h1>
            <p className="text-lg text-steel-300 font-body max-w-xl leading-relaxed">
              Ready to get started or have a question? We make it easy — just call, email, or send us a message below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Emergency callout strip ───────────────────────────── */}
      <div className="bg-amber/10 border-y border-amber/25">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-4 h-4 text-amber shrink-0" />
            <p className="text-steel-200 font-sans text-sm">
              <span className="font-semibold text-white">For urgent or emergency jobs,</span> please call us directly — it&apos;s always the fastest way to reach us.
            </p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center gap-2 text-amber-light font-sans font-bold text-sm tracking-wide hover:text-white transition-colors shrink-0"
          >
            <Phone className="w-4 h-4" /> {COMPANY_INFO.phone}
          </a>
        </div>
      </div>

      {/* ── Main Content: Contact Info + Form ────────────────── */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* ── Left: Contact Info ──────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <span className="inline-flex items-center gap-3 mb-4">
                  <span className="accent-bar" />
                  <span className="text-amber-light font-sans text-xs font-semibold tracking-[0.3em] uppercase">Contact Information</span>
                </span>
                <h2 className="text-4xl md:text-5xl mb-3">Let&apos;s Talk</h2>
                <p className="text-steel-300 font-body leading-relaxed">
                  We&apos;re a local operation — no call centers, no bots. When you reach out, you&apos;re talking directly to KC Welding.
                </p>
              </div>

              {/* Phone — biggest element on page */}
              <div className="bg-charcoal-800 border border-steel-600/40 rounded-sm p-7 relative overflow-hidden group hover:border-amber/35 transition-colors">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-amber/60" />
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-sm bg-amber/15 border border-amber/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <p className="text-steel-400 font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-1">Call or Text</p>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      id="contact-phone-link"
                      className="font-display text-4xl text-white hover:text-amber-light transition-colors tracking-wide"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <p className="text-steel-500 font-sans text-xs mt-2">
                      For the fastest response, call us directly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-charcoal-800 border border-steel-600/40 rounded-sm p-6 flex items-start gap-5 group hover:border-amber/30 transition-colors">
                <div className="w-11 h-11 rounded-sm bg-charcoal-700 border border-steel-500/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-steel-300 group-hover:text-amber-light transition-colors" />
                </div>
                <div>
                  <p className="text-steel-400 font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-1">Email</p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-steel-100 font-body hover:text-amber-light transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-charcoal-800 border border-steel-600/40 rounded-sm p-6">
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="w-5 h-5 text-amber shrink-0" />
                  <p className="font-display text-lg text-white tracking-wide">Mobile Service Hours</p>
                </div>
                <div className="space-y-3 font-body text-sm">
                  {[
                    { day: 'Monday – Friday', hours: '7:00 AM – 6:00 PM' },
                    { day: 'Saturday',        hours: '8:00 AM – 2:00 PM' },
                    { day: 'Sunday',          hours: 'Emergency Only',    emerg: true },
                  ].map(({ day, hours, emerg }) => (
                    <div key={day} className="flex justify-between items-center py-2 border-b border-steel-600/20 last:border-0">
                      <span className="text-steel-400">{day}</span>
                      <span className={emerg ? 'text-amber font-semibold' : 'text-steel-200'}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service area + social */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2.5 text-steel-400 font-sans text-sm">
                  <MapPin className="w-4 h-4 text-amber shrink-0" />
                  {COMPANY_INFO.location}
                </div>
                <a
                  href={COMPANY_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-steel-400 hover:text-amber-light font-sans text-sm transition-colors"
                >
                  <Facebook className="w-4 h-4 shrink-0" />
                  Facebook
                </a>
              </div>

              {/* LLC designation */}
              <p className="text-steel-600 font-sans text-xs border-t border-steel-600/20 pt-4">
                KC Welding, LLC — Licensed &amp; Insured &nbsp;·&nbsp; Est. {COMPANY_INFO.established} &nbsp;·&nbsp; Central Louisiana
              </p>
            </motion.div>

            {/* ── Right: Contact Form ─────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-charcoal-800 border border-steel-600/40 rounded-sm p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-dark via-amber to-amber-dark" />

                <div className="mb-8">
                  <span className="text-amber-light font-sans text-xs font-semibold tracking-[0.3em] uppercase">Request a Quote</span>
                  <h3 className="text-3xl mt-2">Tell Us About Your Project</h3>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-amber/15 border border-amber/30 flex items-center justify-center">
                      <Zap className="w-7 h-7 text-amber" />
                    </div>
                    <h4 className="font-display text-2xl text-white">Message Received!</h4>
                    <p className="text-steel-300 font-body text-sm max-w-xs leading-relaxed">
                      We&apos;ll be in touch shortly. For the fastest response, give us a call directly.
                    </p>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="mt-2 inline-flex items-center gap-2.5 px-6 py-3 bg-amber hover:bg-amber-light text-charcoal-950 font-sans font-bold text-sm tracking-widest uppercase rounded-sm transition-all amber-glow"
                    >
                      <Phone className="w-4 h-4" /> {COMPANY_INFO.phone}
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-steel-500 font-sans text-xs hover:text-steel-300 transition-colors mt-2"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className={labelCls}>Full Name</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className={labelCls}>Phone Number</label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="(xxx) xxx-xxxx"
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className={labelCls}>Email Address</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputCls}
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor="contact-project-type" className={labelCls}>Project Type</label>
                      <select
                        id="contact-project-type"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className={`${inputCls} cursor-pointer`}
                      >
                        <option value="" disabled>Select a project type…</option>
                        <option value="local-residential">Local / Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial-infrastructure">Industrial / Infrastructure</option>
                        <option value="emergency">Emergency — Call Preferred</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className={labelCls}>Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="Briefly describe your project or repair need…"
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputCls} resize-none`}
                      />
                    </div>

                    {/* Emergency nudge */}
                    <div className="flex items-start gap-2.5 bg-amber/5 border border-amber/20 rounded-sm px-4 py-3">
                      <Zap className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                      <p className="text-steel-400 font-sans text-xs leading-relaxed">
                        <span className="font-semibold text-steel-200">Emergency or time-sensitive?</span> Skip the form and call us directly at{' '}
                        <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-amber-light hover:text-amber font-semibold transition-colors">
                          {COMPANY_INFO.phone}
                        </a>
                        .
                      </p>
                    </div>

                    {/* Submit */}
                    <button
                      id="contact-form-submit"
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber hover:bg-amber-light text-charcoal-950 font-sans font-bold text-sm tracking-widest uppercase rounded-sm transition-all amber-glow"
                    >
                      <Send className="w-4 h-4 shrink-0" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};
