import React from 'react';
import { motion } from 'motion/react';
import { Shield, MapPin, Hammer, Users, Heart, Star } from 'lucide-react';
import { COMPANY_INFO } from '@/src/lib/constants';
import { SectionHeading } from '@/src/components/ui/SectionHeading';
import { Card } from '@/src/components/ui/Card';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-iron-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://kc-welding.com/wp-content/uploads/2025/12/Resized_dsc_0009.jpeg" 
            alt="About Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl mb-4">ABOUT US</h1>
            <p className="text-xl text-brand-green-light font-display tracking-[0.3em] uppercase">
              AWS Certified. Industrial Grade. Failure Is Not An Option.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-deep-iron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading title="OUR STORY" subtitle="Heritage" />
              <div className="space-y-6 text-lg text-weathered-iron leading-relaxed">
                <p>
                  KC Welding is a professional industrial welding and fabrication company built on one principle: failure is not an option. We serve fleet managers, engineers, construction firms, agricultural operators, and industrial facilities who demand perfection on every weld.
                </p>
                <p>
                  Our owner is an AWS Certified Welder with a 10-year track record of X-ray-tested welds with zero failures in the field. From mobile emergency dispatch to complex industrial fabrication, we bring precision, accountability, and craftsmanship that sets us apart.
                </p>
                <blockquote className="border-l-4 border-brand-green pl-4 text-brand-green-light italic">
                  "We are frequently hired to fix other shops' mistakes. In our world, a failed weld isn't just an inconvenience — it's a massive liability. We ensure it's done right the first time."
                </blockquote>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="https://kc-welding.com/wp-content/uploads/2024/08/KC-Welding-3-scaled.jpeg" alt="Work 1" className="w-full h-64 object-cover border border-weathered-iron" referrerPolicy="no-referrer" />
              <img src="https://kc-welding.com/wp-content/uploads/2024/08/KC-Welding-5-scaled.jpeg" alt="Work 2" className="w-full h-64 object-cover border border-weathered-iron mt-8" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-24 bg-iron-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionHeading title="WHY WE'RE DIFFERENT" subtitle="The KC Difference" centered />
            <p className="text-lg text-weathered-iron">
              We don't cut corners. We don't do residential hobbyist work. We build and repair structures that have to hold — no matter what. Every job backed by AWS Certification and a zero-failure track record.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Who We Serve", text: "Fleet managers, engineers, construction firms, agricultural operators, and industrial facilities." },
              { icon: MapPin, title: "Mobile Dispatch", text: "We come to you. Emergency dispatch available for critical breakdowns anywhere in the region." },
              { icon: Hammer, title: "Zero Failures", text: "A 10-year track record of X-ray-tested welds with zero failures in the field." },
              { icon: Shield, title: "AWS Certified", text: "Every weld is backed by AWS Certification — the gold standard in the welding industry." },
              { icon: Heart, title: "Industrial Only", text: "We specialize in high-stakes, high-liability projects. No hobbyist or residential work." },
              { icon: Star, title: "Full Capability", text: "MIG, TIG, STICK, FLUX-CORE — every technique, every metal, every time." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <item.icon className="w-10 h-10 text-brand-green-light mb-6" />
                  <h4 className="text-xl mb-4">{item.title}</h4>
                  <p className="text-weathered-iron">{item.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-deep-iron border-y border-weathered-iron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading title="OUR COMMITMENT TO YOU" subtitle="Promise" centered />
          <p className="text-2xl text-white max-w-4xl mx-auto leading-relaxed font-body italic">
            "KC Welding doesn't just weld — we engineer solutions that withstand extreme stress and environmental conditions. We are the authority on high-stakes welding because we hold ourselves to a standard that leaves no room for error."
          </p>
        </div>
      </section>
    </div>
  );
};
