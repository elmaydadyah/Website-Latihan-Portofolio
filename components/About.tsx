
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skills = [
  {
    title: 'HTML & CSS',
    desc: 'Able to build well-structured and responsive web layouts using semantic HTML and modern CSS techniques. Familiar with layout systems, basic animations, and styling principles to create clean and user-friendly interfaces.',
    num: '(01)'
  },
  {
    title: 'PHP Basics',
    desc: 'Has foundational knowledge of PHP for server-side web development, including handling forms, processing data, and connecting applications to databases for simple dynamic functionality.',
    num: '(02)'
  },
  {
    title: 'JavaScript',
    desc: 'Capable of using JavaScript to add interactivity and dynamic behavior to web pages. Experienced in handling events, manipulating the DOM, and implementing basic logic to enhance user experience.',
    num: '(03)'
  },
  {
    title: 'C++',
    desc: 'Possesses a solid understanding of C++ fundamentals, including variables, control structures, functions, and basic data structures. Commonly used for problem-solving, algorithm implementation, and academic programming tasks.',
    num: '(04)'
  },
  {
    title: 'Figma',
    desc: 'Skilled in using Figma to design user interfaces and wireframes, focusing on layout consistency, usability, and visual clarity. Comfortable translating design concepts into practical UI components for development.',
    num: '(05)'
  },
  {
    title: 'MySQL',
    desc: 'Ability to design, query, and manage relational databases, ensuring efficient data storage and retrieval.',
    num: '(06)'
  },
  {
    title: 'Microsoft Office',
    desc: 'Proficient in using productivity tools like Word, Excel, and PowerPoint for professional documentation and data analysis.',
    num: '(07)'
  }
];

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section id="about" className="pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="w-full mb-24">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full"
        >
          {/* Subtle Signature Bullet */}
          <div className="w-[5px] h-[5px] rounded-full bg-white mb-8 ml-1" />

          {/* Headline - Switzer 58px with Indentation */}
          <h3
            className="w-full text-[32px] md:text-[48px] lg:text-[58px] font-medium leading-[1.0] tracking-[-0.05em] text-white text-left"
            style={{
              fontFamily: 'Switzer, "Switzer Placeholder", sans-serif',
              textIndent: '15vw',
            }}
          >
            I am an Informatics Engineering student with a strong interest in information technology development and logical problem-solving. Actively engaged in the learning process, I am accustomed to working collaboratively and continuously strive to develop my skills to be well-prepared for contributing in a professional environment.
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
                <h4 className="text-[18px] font-normal md:w-64 shrink-0 text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>
                  {skill.title}
                </h4>
                <p className="md:max-w-[380px] text-[18px] text-white font-normal leading-[1.4] tracking-tight" style={{ fontFamily: 'Switzer, sans-serif' }}>
                  {skill.desc}
                </p>
                <span className="text-[18px] font-normal text-white hidden md:block mt-1 ml-auto" style={{ fontFamily: 'Switzer, sans-serif' }}>
                  {skill.num}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div ref={containerRef} className="mt-20 md:mt-32 w-full overflow-hidden">
        <motion.div
          style={{ scale, opacity }}
          className="w-full aspect-[4/5] md:aspect-auto md:h-[80vh] overflow-hidden rounded-lg border border-white/5"
        >
          <img
            src="/images/about-profile.png"
            alt="Elmayda Dyah Irama"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </div>
    </section>
  );
};
