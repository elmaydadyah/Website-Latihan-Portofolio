
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
        className="bg-white px-5 py-10 flex flex-col items-center justify-between min-h-[60vh] text-black"
      >
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start text-[14px] font-normal text-black" style={{ fontFamily: 'Switzer, sans-serif' }}>
          <div className="space-y-0">
            <p className="font-normal text-black">Elmayda Dyah Irama</p>
            <p className="font-normal text-black">Informatics Engineering Student</p>
          </div>
          <div className="mt-4 md:mt-0 space-y-0">
            <p className="font-normal text-black">Born & Raised</p>
            <p className="font-normal text-black">Bogor, Indonesia</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-normal text-black">©2026</p>
          </div>
        </div>

        <div className="w-full overflow-hidden flex justify-center">
          <h1 className="text-[18vw] md:text-[21vw] font-light text-black select-none pointer-events-none leading-none tracking-tight" style={{ fontFamily: 'Switzer, sans-serif' }}>
            Elmayda
          </h1>
        </div>
      </motion.div>
    </footer>
  );
};
