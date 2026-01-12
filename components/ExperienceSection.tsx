
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="flex flex-col md:flex-row items-end md:items-start mb-20">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-[210px] font-light leading-none tracking-tighter"
          style={{ fontFamily: 'Switzer, sans-serif' }}
        >
          Experience
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
            className="group grid md:grid-cols-12 items-start py-8 border-t border-[#292929] hover:bg-white/5 transition-colors cursor-default"
          >
            <div className="md:col-span-3">
              <span className="text-[18px] font-normal block" style={{ fontFamily: 'Switzer, sans-serif' }}>{exp.role}</span>
            </div>
            <div className="md:col-span-2 mt-2 md:mt-0 flex md:justify-center">
              <span className="text-[18px] font-normal tracking-wide text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>({exp.company})</span>
            </div>
            <div className="md:col-span-5 mt-4 md:mt-0">
              <p className="text-[18px] text-white font-light leading-relaxed" style={{ fontFamily: 'Switzer, sans-serif' }}>{exp.description}</p>
            </div>
            <div className="md:col-span-2 mt-2 md:mt-0 flex md:justify-end">
              <span className="text-[18px] font-normal tracking-wide text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>({exp.year})</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
