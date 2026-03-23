import React from 'react';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '@/src/lib/constants';
import { SectionHeading } from '@/src/components/ui/SectionHeading';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';

export const Services: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Service Detail View
  if (id) {
    const service = SERVICES.find(s => s.id === id);
    if (!service) return <div>Service not found</div>;

    return (
      <div className="pt-20">
        <section className="relative py-32 bg-iron-black overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-5xl md:text-7xl mb-4">{service.title}</h1>
              <p className="text-xl text-brand-green-light font-display tracking-[0.2em] uppercase">{service.tagline}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-deep-iron">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <SectionHeading title="OVERVIEW" subtitle="Service Details" />
                <p className="text-xl text-weathered-iron mb-10 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4">
                  {service.points.map((point, i) => (
                    <div key={i} className="flex items-center space-x-4 text-white text-lg">
                      <CheckCircle2 className="text-brand-green-light shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <a href={`tel:${COMPANY_INFO.phone}`}>
                    <Button size="lg">Request Quote for {service.title}</Button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover border border-weathered-iron forge-glow" referrerPolicy="no-referrer" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green flex items-center justify-center p-4 text-center">
                  <span className="font-display text-white text-sm">QUALITY BUILT</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Services Hub View
  return (
    <div className="pt-20">
      <section className="relative py-32 bg-iron-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://kc-welding.com/wp-content/uploads/2024/08/KC-Welding-pt-2-2-scaled.jpeg" alt="Services Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl mb-4">OUR SERVICES</h1>
            <p className="text-xl text-brand-green-light font-display tracking-[0.3em] uppercase">
              Professional Mobile Welding. Every Service Delivered Right.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-deep-iron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-xl text-weathered-iron leading-relaxed">
              Industrial and commercial welding where quality is non-negotiable. We serve fleet managers, equipment operators, construction firms, and agricultural businesses throughout Central Louisiana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/services/${service.id}`}>
                  <Card className="h-full group">
                    <div className="flex items-center justify-between mb-6">
                      <img src={service.icon} alt={service.title} className="w-12 h-12 invert opacity-70 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                      <ArrowRight className="text-weathered-iron group-hover:text-brand-green-light transition-colors" />
                    </div>
                    <h3 className="text-2xl mb-4 group-hover:text-brand-green-light transition-colors">{service.title}</h3>
                    <p className="text-weathered-iron text-sm line-clamp-3">
                      {service.description}
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
