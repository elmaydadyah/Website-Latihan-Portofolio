
import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm font-semibold text-white/40 uppercase tracking-widest"
        >
          (5)
        </motion.span>
        <motion.h2
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-[8rem] font-light leading-none uppercase tracking-tighter"
        >
          Contact
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-0">
          {[
            { label: 'Address', value: 'National Museum, 13-9 Uenokoen, Tokyo, JP', code: 'AD' },
            { label: 'Phone', value: '+1.647.772.5033', code: 'PH', link: 'tel:+16477725033' },
            { label: 'Email', value: 'kaitoayaka@gmail.com', code: 'EM', link: 'mailto:kaitoayaka@gmail.com' },
            { label: 'Instagram', value: '@kaitoayakaIG', code: 'IG', link: 'https://instagram.com' }
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group grid grid-cols-4 py-8 border-t border-[#292929] items-center"
            >
              <span className="text-sm font-semibold text-white/40 uppercase tracking-widest">{item.label}</span>
              <div className="col-span-2">
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-xl md:text-2xl font-light hover:text-blue-600 transition-colors inline-block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-xl md:text-2xl font-light">{item.value}</span>
                )}
              </div>
              <span className="text-right text-xs font-mono text-white/20">({item.code})</span>
            </motion.div>
          ))}
          <div className="border-t border-[#292929]"></div>
        </div>

        <motion.form
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="First Name"
            className="col-span-1 bg-transparent border border-[#545454] p-6 text-white outline-none focus:border-white transition-colors"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="col-span-1 bg-transparent border border-[#545454] p-6 text-white outline-none focus:border-white transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="col-span-2 bg-transparent border border-[#545454] p-6 text-white outline-none focus:border-white transition-colors"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="col-span-2 bg-transparent border border-[#545454] p-6 text-white outline-none focus:border-white transition-colors resize-none"
          ></textarea>
          <button
            type="submit"
            className="col-span-2 bg-white text-black font-bold uppercase tracking-widest py-6 hover:bg-blue-600 hover:text-white transition-all"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
};
