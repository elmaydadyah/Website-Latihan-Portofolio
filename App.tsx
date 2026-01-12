
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/ExperienceSection';
import { WorkGrid } from './components/WorkGrid';
import { AcademicSection } from './components/AcademicSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectDetail } from './components/ProjectDetail';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="px-5 max-w-[1440px] mx-auto overflow-hidden">
        <AnimatePresence>
          {isLoaded && (
            <>
              <Hero />
              <About />
              <AcademicSection />
              <WorkGrid />
              <ExperienceSection />
              <ContactSection />
            </>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-blue-600 selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
