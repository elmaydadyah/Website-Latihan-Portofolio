
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Academic', href: '#academic' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
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
        <a href="/" className="text-[22px] font-normal tracking-tight" style={{ fontFamily: 'Switzer, "Switzer Placeholder", sans-serif' }}>My Portofolio</a>

        <div className="hidden md:flex items-center space-x-12">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[14px] font-normal hover:text-blue-600 transition-colors"
                style={{ fontFamily: 'Switzer, "Switzer Placeholder", sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <a
          href="#contact"
          className="bg-white text-black px-4 py-2 text-[14px] font-normal hover:bg-blue-600 hover:text-white transition-all"
          style={{ fontFamily: 'Switzer, "Switzer Placeholder", sans-serif' }}
        >
          Contact ↗
        </a>
      </div>
    </motion.nav>
  );
};
