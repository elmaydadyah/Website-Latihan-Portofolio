
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center">
      <div className="w-full relative">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="framer-fit-text font-light text-white uppercase italic md:not-italic">
            Kaito Ayaka
          </h1>
        </motion.div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-start w-full text-[14px] font-semibold uppercase tracking-widest text-white/70">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>Kaito Ayaka</p>
            <p>Creative Director</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-4 md:mt-0 hidden sm:block"
          >
            <p>Born & Raised</p>
            <p>Tokyo, JP</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4 md:mt-0"
          >
            <p>©2025</p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="mt-20 w-full max-w-sm aspect-[3/4] overflow-hidden rounded-md border border-white/10"
      >
        <img
          src="https://framerusercontent.com/images/cQylW9E4DloDyHvH6mZ97FCDkE.jpeg"
          alt="Kaito Ayaka"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </motion.div>
    </section>
  );
};
