
import React from 'react';
import { motion } from 'framer-motion';
import { ACADEMIC_DATA } from '../constants';

export const AcademicSection: React.FC = () => {
    return (
        <section id="academic" className="pt-10 pb-10 md:pt-12 md:pb-12">
            <div className="flex flex-col md:flex-row items-end md:items-start mb-20">
                <motion.h2
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-[210px] font-light leading-none tracking-tighter"
                    style={{ fontFamily: 'Switzer, sans-serif' }}
                >
                    Academic
                </motion.h2>
            </div>

            <div className="space-y-0">
                {ACADEMIC_DATA.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="grid md:grid-cols-12 py-10 border-t border-[#292929] items-start hover:bg-white/5 transition-colors"
                    >
                        <div className="md:col-span-3">
                            <span className="text-[18px] font-normal block text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>{item.organization}</span>
                        </div>
                        <div className="md:col-span-7 mt-4 md:mt-0 space-y-1">
                            {item.details.map((detail, dIdx) => (
                                <p key={dIdx} className="text-[18px] text-white font-normal leading-relaxed" style={{ fontFamily: 'Switzer, sans-serif' }}>{detail}</p>
                            ))}
                        </div>
                        <div className="md:col-span-2 mt-4 md:mt-0 flex md:justify-end">
                            <span className="text-[18px] font-normal tracking-wide text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>({item.year})</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
