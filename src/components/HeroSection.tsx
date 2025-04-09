'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section 
      dir="rtl" 
      className={`relative min-h-[80vh] w-full overflow-hidden ${className}`}
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1589363460779-cbd6980a8361?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="רקע חנות בגדים"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full min-h-[80vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="glassmorphism-card mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 p-8 md:p-12"
          >
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              חנות בגדים מוביל בישראל
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto max-w-2xl text-xl text-white/90 md:text-2xl"
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                className="neumorphic-button mt-8 px-8 py-4 text-lg font-medium text-white transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 active:scale-95"
                onClick={() => console.log('CTA clicked')}
              >
                קבע תור עכשיו
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;