
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/ExperienceSection';
import { WorkGrid } from './components/WorkGrid';
import { AwardsSection } from './components/AwardsSection';
import { JournalGrid } from './components/JournalGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Artificial delay to mimic assets loading and trigger animations
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      <main className="px-5 max-w-[1440px] mx-auto overflow-hidden">
        <AnimatePresence>
          {isLoaded && (
            <>
              <Hero />
              <About />
              <ExperienceSection />
              <WorkGrid />
              <AwardsSection />
              <JournalGrid />
              <ContactSection />
            </>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
