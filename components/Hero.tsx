
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <section ref={containerRef} id="hero" className="relative pt-24 pb-10 md:pt-32 md:pb-12 px-5 flex flex-col items-center min-h-[150vh]">
      <div className="w-full sticky top-32 z-0">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          <h1
            className="framer-fit-text font-light text-white leading-[0.9]"
            style={{ fontFamily: 'Switzer, sans-serif' }}
          >
            Elmayda Dyah Irama
          </h1>
        </motion.div>

        <div className="mt-32 flex flex-col md:flex-row justify-between items-start w-full text-[14px] font-medium tracking-tight text-white/90">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>Elmayda Dyah Irama</p>
            <p>Informatics Engineering Student</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-4 md:mt-0 hidden sm:block"
          >
            <p>Born & Raised</p>
            <p>Bogor, Indonesia</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4 md:mt-0"
          >
            <p>©2026</p>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ scale, y }}
        className="relative z-10 mt-[20vh] w-full max-w-sm md:max-w-md aspect-[3/4] overflow-hidden rounded-xl border border-white/10 shadow-2xl"
      >
        <img
          src="/images/hero-profile.jpg"
          alt="Elmayda Dyah Irama"
          className="w-full h-full object-cover transition-all duration-700"
        />
      </motion.div>
    </section>
  );
};
