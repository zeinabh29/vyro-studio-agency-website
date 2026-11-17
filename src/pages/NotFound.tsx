import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#101116] text-[#F5F4F0] flex items-center justify-center px-6 py-32">
      <div className="text-center max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 rounded-3xl bg-[#191A21] border border-white/10 flex items-center justify-center text-[#A6FF4D] mx-auto mb-8 shadow-2xl"
        >
          <Compass className="w-10 h-10 animate-spin duration-[10000ms]" />
        </motion.div>

        <span className="font-mono text-sm uppercase tracking-[0.25em] text-[#A6FF4D] block mb-3">
          ERROR 404 // VOID DETECTED
        </span>

        <h1 className="font-syne text-5xl sm:text-7xl font-extrabold uppercase tracking-tight text-[#F5F4F0] mb-6">
          Coordinate not found.
        </h1>

        <p className="text-base text-[#A6A6B0] leading-relaxed mb-8">
          The requested route does not exist in the VYRO Studio spatial archive. It may have moved or been decommissioned.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button to="/" showArrow>
            Return to Headquarters
          </Button>
          <Button to="/work" variant="secondary">
            View All Works
          </Button>
        </div>
      </div>
    </div>
  );
};
