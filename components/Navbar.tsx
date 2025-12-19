
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, PERSONAL_INFO } from '../constants';
import { handleSmoothScroll } from '../utils/scroll';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-300 pointer-events-auto ${isScrolled || isMobileMenuOpen ? 'glass py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[160]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter flex items-center gap-2"
          >
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">I</span>
              </div>
              <span className="hidden sm:inline">Ihzra Fahrullizian Yusuf</span>
            </a>
          </motion.div>
          
          <div className="hidden md:flex gap-8 items-center">
            <ul className="flex gap-8 text-sm font-medium text-gray-400">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="hover:text-blue-500 transition-colors cursor-pointer py-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/20 active:scale-95"
            >
              Hire Me
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-semibold shadow-lg shadow-blue-900/20 active:scale-95"
            >
              Hire
            </a>
            <button 
              onClick={toggleMobileMenu}
              className="p-2 text-gray-400 hover:text-white transition-colors relative z-[170]"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 glass border-t border-white/10 md:hidden overflow-hidden shadow-2xl z-[155]"
            >
              <ul className="flex flex-col p-6 gap-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href} 
                      onClick={(e) => {
                        handleSmoothScroll(e, item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block py-2 text-lg font-medium text-gray-300 hover:text-blue-500 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[140] md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};
