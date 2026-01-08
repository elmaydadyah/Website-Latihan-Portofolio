
import React from 'react';
import { motion } from 'framer-motion';
import { AWARDS } from '../constants';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-24 md:py-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm font-semibold text-white/40 uppercase tracking-widest"
        >
          (3)
        </motion.span>
        <motion.h2
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-[8rem] font-light leading-none uppercase tracking-tighter"
        >
          Awards
        </motion.h2>
      </div>

      <div className="space-y-0">
        {AWARDS.map((award, idx) => (
          <motion.div
            key={award.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="grid md:grid-cols-12 py-10 border-t border-[#292929] items-start"
          >
            <div className="md:col-span-3">
              <span className="text-2xl font-medium">{award.organization}</span>
            </div>
            <div className="md:col-span-7 mt-4 md:mt-0 space-y-1">
              {award.details.map((detail, dIdx) => (
                <p key={dIdx} className="text-lg text-white/60 font-light">{detail}</p>
              ))}
            </div>
            <div className="md:col-span-2 mt-4 md:mt-0 text-right">
              <span className="text-sm font-mono text-white/30">({award.year})</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
