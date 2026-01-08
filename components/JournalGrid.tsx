
import React from 'react';
import { motion } from 'framer-motion';
import { JOURNAL_ENTRIES } from '../constants';

export const JournalGrid: React.FC = () => {
  return (
    <section id="journal" className="py-24 md:py-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 text-right">
        <motion.h2 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-[8rem] font-light leading-none uppercase tracking-tighter"
        >
          Journal
        </motion.h2>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm font-semibold text-white/40 uppercase tracking-widest"
        >
          (4)
        </motion.span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {JOURNAL_ENTRIES.map((entry, idx) => (
          <motion.div 
            key={entry.id}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden rounded bg-[#111]">
              <img 
                src={entry.image} 
                alt={entry.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h4 className="text-sm font-bold uppercase tracking-widest flex-1">{entry.title}</h4>
              <span className="text-xs font-mono text-white/40">{entry.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
