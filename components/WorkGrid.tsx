
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

export const WorkGrid: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 text-right">
        <motion.h2 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-[8rem] font-light leading-none uppercase tracking-tighter"
        >
          Work
        </motion.h2>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm font-semibold text-white/40 uppercase tracking-widest"
        >
          (2)
        </motion.span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: (idx % 2) * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#111]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0"
                />
              </motion.div>
              
              <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest">{project.title}</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">{project.code}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase tracking-widest">{project.date}</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">{project.client}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-baseline border-b border-white/10 pb-2">
              <h4 className="text-2xl font-light uppercase tracking-tight">{project.title}</h4>
              <span className="text-xs font-mono text-white/40">{project.code} / {project.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
