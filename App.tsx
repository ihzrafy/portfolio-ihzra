
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MapPin } from 'lucide-react';

// Refactored Components
import { Navbar } from './components/Navbar';
import { AIAssistant } from './components/AIAssistant';

// Refactored Sections
import { Hero } from './sections/Hero';
import { ExperienceSection } from './sections/Experience';
import { SkillSection } from './sections/Skills';
import { EducationSection } from './sections/Education';
import { ContactSection } from './sections/Contact';

// Utils
import { handleSmoothScroll } from './utils/scroll';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-blue-500 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[300] pointer-events-none" style={{ scaleX }} />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <ExperienceSection />
        <SkillSection />
        <EducationSection />
        <ContactSection />
      </main>

      <footer className="py-12 border-t border-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">I</div>
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Ihzra Fahrullizian Yusuf. Built with Passion.</p>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="hover:text-blue-500 transition-colors">Privacy</a>
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="hover:text-blue-500 transition-colors">Terms</a>
            <p className="flex items-center gap-1.5">
              <MapPin size={14} className="text-blue-500" /> Bogor, ID
            </p>
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
}
