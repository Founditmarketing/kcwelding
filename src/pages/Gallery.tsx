import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';
import { GALLERY_IMAGES } from '@/src/lib/constants';
import { SectionHeading } from '@/src/components/ui/SectionHeading';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-20">
      <section className="relative py-32 bg-iron-black overflow-hidden">
        <div className="absolute inset-0">
          {/* Green-flame filter: wide welding scene */}
          <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply z-[5]" />
          <div className="absolute inset-0 bg-iron-black/60 z-[6]" />
          <img 
            src="/flame-wide.png" 
            alt="Gallery Hero — Welding Scene" 
            className="w-full h-full object-cover"
            style={{ filter: 'hue-rotate(-120deg) saturate(1.8) brightness(0.75)' }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl mb-4">OUR WORK</h1>
            <p className="text-xl text-brand-green-light font-display tracking-[0.3em] uppercase">
              Real-Time Project Photos — Biggest & Baddest Jobs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-deep-iron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY_IMAGES.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="relative group cursor-pointer overflow-hidden border border-weathered-iron"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Project ${index}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Maximize2 className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-iron-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-green-light transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-full object-contain border-2 border-weathered-iron forge-glow"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
