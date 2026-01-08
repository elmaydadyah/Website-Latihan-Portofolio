
import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-32">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-white px-5 py-24 flex flex-col items-center justify-between min-h-screen text-black"
      >
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between text-[14px] font-semibold uppercase tracking-widest">
          <div className="space-y-1">
            <p>Kaito Ayaka</p>
            <p className="text-black/40">Creative Director</p>
          </div>
          <div className="mt-8 md:mt-0 space-y-1">
            <p>Born & Raised</p>
            <p className="text-black/40">Tokyo, JP</p>
          </div>
          <div className="mt-8 md:mt-0">
            <p>©2025</p>
          </div>
        </div>

        <div className="w-full overflow-hidden flex justify-center">
          <h1 className="framer-fit-text font-light text-black uppercase select-none pointer-events-none">
            Kaito
          </h1>
        </div>
      </motion.div>

      <div className="bg-[#050505] py-8">
        <div className="max-w-[1440px] mx-auto px-5 flex flex-col sm:flex-row justify-between items-center text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
          <p>Kaito Ayaka</p>
          <div className="my-4 sm:my-0 flex gap-8">
            <a href="#" className="hover:text-white transition-colors">@kaitoayaka</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
