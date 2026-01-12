
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { PROJECTS } from '../constants';

export const WorkGrid: React.FC = () => {
  const navigate = useNavigate();
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section id="work" className="pt-10 pb-10 md:pt-12 md:pb-12" onMouseMove={handleMouseMove}>
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 text-right">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-[210px] font-light leading-none tracking-tighter"
          style={{ fontFamily: 'Switzer, sans-serif' }}
        >
          Projects
        </motion.h2>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm font-semibold text-white/40 uppercase tracking-widest"
        >
          ({PROJECTS.length})
        </motion.span>
      </div>

      <div className="grid grid-cols-1 gap-0">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: (idx % 2) * 0.2 }}
            className="group cursor-none w-full"
            onMouseEnter={() => setIsCursorVisible(true)}
            onMouseLeave={() => setIsCursorVisible(false)}
            onClick={() => navigate(`/project/${project.slug}`)}
          >
            <motion.div
              whileHover="hover"
              initial="initial"
              className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#111]"
              style={{ willChange: 'transform' }}
            >
              <motion.div
                variants={{
                  initial: { scale: 1, filter: 'grayscale(100%)' },
                  hover: { scale: 1.05, filter: 'grayscale(0%)' }
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Grain Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.2] mix-blend-soft-light"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '150px 150px',
                    willChange: 'opacity'
                  }}
                />
              </motion.div>

              {/* Overlay Content */}
              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1 }
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-between px-8 md:px-12 pointer-events-none z-10"
                style={{ willChange: 'opacity' }}
              >
                {/* Left: Title & Code */}
                <div className="flex flex-col text-left space-y-1">
                  <span className="text-[14px] font-bold uppercase tracking-widest text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>{project.title}</span>
                  <span className="text-[14px] font-normal uppercase tracking-widest text-white/60" style={{ fontFamily: 'Switzer, sans-serif' }}>{project.code}</span>
                </div>

                {/* Center: Date */}
                <div className="hidden md:flex flex-col text-center space-y-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50" style={{ fontFamily: 'Switzer, sans-serif' }}>DATE</span>
                  <span className="text-[14px] font-normal uppercase tracking-widest text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>{project.date}</span>
                </div>

                {/* Right: Client */}
                <div className="flex flex-col text-right">
                  <span className="text-[14px] font-bold uppercase tracking-widest text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>{project.client}</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 bg-[#B4E4FF] rounded-full flex items-center justify-center pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isCursorVisible ? 1 : 0,
          scale: isCursorVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        <span className="text-black text-[12px] font-bold uppercase tracking-widest" style={{ fontFamily: 'Switzer, sans-serif' }}>View</span>
      </motion.div>
    </section>
  );
};
