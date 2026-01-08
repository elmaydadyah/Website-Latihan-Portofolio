
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="flex flex-col md:flex-row items-end md:items-start mb-20">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-[8rem] font-light leading-none uppercase tracking-tighter"
        >
          Experience.
        </motion.h2>
      </div>

      <div className="space-y-0">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group grid md:grid-cols-12 items-start py-10 border-t border-[#292929] hover:bg-white/5 transition-colors cursor-default"
          >
            <div className="md:col-span-4">
              <span className="text-xl md:text-2xl font-medium block">{exp.role}</span>
            </div>
            <div className="md:col-span-2 mt-2 md:mt-0">
              <span className="text-sm font-semibold uppercase tracking-widest text-white/50">({exp.company})</span>
            </div>
            <div className="md:col-span-6 mt-4 md:mt-0">
              <p className="text-white/60 font-light leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
