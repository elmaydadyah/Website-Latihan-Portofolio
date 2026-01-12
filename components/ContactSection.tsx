
import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-[210px] font-light leading-none tracking-tighter"
          style={{ fontFamily: 'Switzer, sans-serif' }}
        >
          Contact
        </motion.h2>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm font-semibold text-white/40 uppercase tracking-widest"
        >
          (5)
        </motion.span>
      </div>

      <div>
        <div className="space-y-0 border-t border-[#292929]">
          {[
            { label: 'Phone', value: '(+62) 896-5510-4030', code: 'PH', link: 'tel:089655104030' },
            { label: 'Email', value: 'elmayda.dyah18@gmail.com', code: 'EM', link: 'elmayda.dyah18@gmail.com' },
            { label: 'Instagram', value: '@elmadyra', code: 'IG', link: 'https://www.instagram.com/elmadyra?igsh=M3VtZmxtaXBpeGQ=' }
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-[#292929] items-center group hover:bg-white/5 transition-colors"
            >
              <div className="md:col-span-3">
                <span className="text-[18px] font-normal text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>{item.label}</span>
              </div>

              <div className="md:col-span-7 mt-2 md:mt-0">
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-[18px] font-normal text-white hover:text-blue-600 transition-colors inline-block"
                    style={{ fontFamily: 'Switzer, sans-serif' }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-[18px] font-normal text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>{item.value}</span>
                )}
              </div>

              <div className="md:col-span-2 mt-2 md:mt-0 flex md:justify-end">
                <span className="text-[18px] font-normal text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>({item.code})</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-transparent border-[1.5px] border-[#292929] p-4 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                style={{ fontFamily: 'Switzer, sans-serif' }}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-transparent border-[1.5px] border-[#292929] p-4 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                style={{ fontFamily: 'Switzer, sans-serif' }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-[1.5px] border-[#292929] p-4 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                style={{ fontFamily: 'Switzer, sans-serif' }}
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full bg-transparent border-[1.5px] border-[#292929] p-4 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                style={{ fontFamily: 'Switzer, sans-serif' }}
              />
            </div>
            <textarea
              placeholder="Message"
              rows={8}
              className="w-full bg-transparent border-[1.5px] border-[#292929] p-4 text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors resize-none"
              style={{ fontFamily: 'Switzer, sans-serif' }}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-black font-bold uppercase tracking-widest py-5 hover:bg-gray-200 transition-colors"
              style={{ fontFamily: 'Switzer, sans-serif' }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
