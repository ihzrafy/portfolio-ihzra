
import React from 'react';
import { Mail, Linkedin, Github, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block p-4 rounded-3xl bg-blue-600/10 border border-blue-600/20 mb-8">
          <Mail className="text-blue-500" size={40} />
        </div>
        <h2 className="text-5xl font-extrabold mb-8 tracking-tight">Let's build something <span className="text-blue-500">amazing</span>.</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
          I'm always open to new opportunities, collaborations, or just a friendly chat about technology.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="px-10 py-5 bg-blue-600 text-white rounded-3xl font-bold hover:bg-blue-500 transition-all flex items-center gap-3 shadow-xl shadow-blue-900/40 active:scale-95">
            Send an Email <ChevronRight size={20} />
          </a>
          <div className="flex gap-4">
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="p-5 bg-gray-900 border border-gray-800 rounded-3xl text-gray-400 hover:text-white hover:border-blue-500 transition-all active:scale-95">
              <Linkedin size={28} />
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" className="p-5 bg-gray-900 border border-gray-800 rounded-3xl text-gray-400 hover:text-white hover:border-blue-500 transition-all active:scale-95">
              <Github size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
