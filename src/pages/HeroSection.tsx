import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PatternCanvas } from '../components/PatternCanvas';
interface HeroSectionProps {
  onStart: () => void;
}
export function HeroSection({ onStart }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Art */}
      <div className="absolute inset-0 z-0 opacity-30">
        <PatternCanvas
          type="smooth"
          animated
          intensity={0.8}
          color="#4c1d95"
          className="absolute top-0 left-0 w-full h-full opacity-50 blur-xl" />

        <PatternCanvas
          type="mixed"
          animated
          intensity={0.6}
          color="#0d9488"
          className="absolute top-1/4 left-0 w-full h-full opacity-40 blur-lg" />

      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}>

          <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-400 mb-8 backdrop-blur-sm">
            AI-Powered Youth Mental Health Monitoring
          </span>

          <h1 className="text-7xl md:text-9xl font-['Instrument_Serif'] leading-[0.9] mb-8 italic">
            Pattern, <br />
            <span className="text-zinc-500 not-italic">Not Post.</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            We don't read their messages. We listen to the shape of their
            silence.
            <br />
            <span className="text-white">
              Detecting behavioral anomalies in metadata before crisis strikes.
            </span>
          </p>

          <motion.button
            onClick={onStart}
            whileHover={{
              scale: 1.02
            }}
            whileTap={{
              scale: 0.98
            }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-lg font-medium overflow-hidden">

            <span className="relative z-10">Launch Monitor</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-violet-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Footer Tagline */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1,
          duration: 1
        }}
        className="absolute bottom-12 left-0 right-0 text-center">

        <p className="text-sm text-zinc-600 uppercase tracking-widest">
          We listen to when patterns stop changing
        </p>
      </motion.div>
    </div>);

}