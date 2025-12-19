
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, User, Sparkles } from 'lucide-react';
import { SKILLS } from '../constants';

export const SkillSection = () => {
  return (
    <section id="skills" className="py-32 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-blue-500">Arsenal</span></h2>
          <p className="text-gray-400 max-w-2xl">A comprehensive set of tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 glass p-8 rounded-3xl border-gray-800">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Code2 className="text-blue-500" /> Development Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {SKILLS.hard.map((skill) => (
                <motion.div 
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-sm font-medium hover:text-blue-400 hover:border-blue-500/50 transition-all cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl border-gray-800">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <User className="text-emerald-500" /> Interpersonal
              </h3>
              <ul className="space-y-4">
                {SKILLS.soft.map(s => (
                  <li key={s} className="flex items-center gap-3 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-8 rounded-3xl border-gray-800">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="text-yellow-500" /> Recognition
              </h3>
              <div className="p-4 rounded-2xl bg-yellow-500/5 border border-yellow-500/20 text-yellow-500/80 text-sm leading-relaxed">
                {SKILLS.achievements[0]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
