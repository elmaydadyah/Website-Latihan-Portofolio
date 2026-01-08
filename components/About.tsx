
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Strategy',
    desc: 'Developing comprehensive brand strategies that form the core identity for her clients. Her work involves deep market research and consumer psychology to define a brand’s unique vision.',
    num: '(01)'
  },
  {
    title: 'Web Design',
    desc: 'Creates visually engaging and intuitive websites that combine aesthetic appeal with flawless user experience. She is proficient in crafting layouts, selecting typography, and managing visual assets to ensure perfection.',
    num: '(02)'
  },
  {
    title: 'Branding',
    desc: 'Specializes in the visual representation of a brand, developing cohesive and memorable design systems. Her brand design work includes logos, color palettes, and typographic systems.',
    num: '(03)'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="w-full mb-24">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full"
        >
          {/* Subtle Signature Bullet */}
          <div className="w-[5px] h-[5px] rounded-full bg-white mb-10 ml-1" />

          {/* Headline - Switzer 58px with Indentation */}
          <h3
            className="w-full text-[32px] md:text-[48px] lg:text-[58px] font-medium leading-[1.0] tracking-[-0.05em] text-white text-left"
            style={{
              fontFamily: 'Switzer, "Switzer Placeholder", sans-serif',
              textIndent: '15vw',
            }}
          >
            Based in Tokyo, creative director Kaito Ayaka is renowned for her sophisticated and inspired design work. With a keen eye for craftsmanship, she elevates brand identities by blending contemporary style with subtle, thoughtful details.
          </h3>
        </motion.div>
      </div>

      <div className="mt-40 border-t border-[#292929]">
        <div className="grid md:grid-cols-12 py-12">
          <div className="md:col-span-3 mb-8 md:mb-0">
            <span className="text-[12px] font-semibold text-white uppercase tracking-widest" style={{ fontFamily: 'Switzer, sans-serif' }}>(Skills)</span>
          </div>
          <div className="md:col-span-9 space-y-20">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16"
              >
                <h4 className="text-[20px] md:text-[24px] font-bold md:w-64 shrink-0 text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>
                  {skill.title}
                </h4>
                <p className="flex-1 text-[18px] md:text-[21px] text-white font-normal leading-[1.4] tracking-tight" style={{ fontFamily: 'Switzer, sans-serif' }}>
                  {skill.desc}
                </p>
                <span className="text-[14px] font-mono text-white hidden md:block mt-1">
                  {skill.num}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 md:mt-32 w-full aspect-[16/9] md:h-[80vh] overflow-hidden rounded-lg border border-white/5"
      >
        <img
          src="https://framerusercontent.com/images/eAoMmnrAjemizJd2fWoQsJ29Q.jpeg"
          alt="Creative space"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};
