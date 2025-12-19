
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { handleSmoothScroll } from '../utils/scroll';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob z-[-1]"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 z-[-1]"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 z-[-1]"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-left"
        >
          <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            Full Stack Developer
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Future</span> of Web.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
            I'm <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. I bridge the gap between complex engineering and elegant user experiences.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a 
              href="#experience" 
              onClick={(e) => handleSmoothScroll(e, '#experience')}
              className="group px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-2xl"
            >
              View Work <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="flex gap-4">
              <a href={PERSONAL_INFO.github} target="_blank" className="p-4 bg-gray-900/50 border border-gray-800 rounded-2xl text-gray-400 hover:text-white hover:border-blue-500 transition-all">
                <Github size={24} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" className="p-4 bg-gray-900/50 border border-gray-800 rounded-2xl text-gray-400 hover:text-white hover:border-blue-500 transition-all">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl aspect-square glass flex items-center justify-center">
            <img src="https://picsum.photos/800/800?grayscale" alt="Profile" className="object-cover opacity-60 mix-blend-luminosity hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass p-4 rounded-xl border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <Terminal size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Currently Building</p>
                  <p className="text-sm font-bold">Internal AI Ecosystem @ Otsuka</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
