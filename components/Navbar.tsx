
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Tokyo'
  });

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Awards', href: '#awards' },
    { label: 'Journal', href: '#journal' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 bg-[#050505] border-b border-[#292929]"
    >
      <div className="max-w-[1440px] mx-auto px-5 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight">KAITO</a>
        
        <div className="hidden md:flex items-center space-x-12">
          <div className="text-[12px] font-semibold text-white/60">
            Tokyo, Japan {formattedTime}
          </div>
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-[12px] font-semibold hover:text-blue-600 transition-colors uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <a 
          href="#contact" 
          className="bg-white text-black px-4 py-2 text-[12px] font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all"
        >
          Contact ↗
        </a>
      </div>
    </motion.nav>
  );
};
