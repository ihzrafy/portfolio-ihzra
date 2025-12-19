
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../constants';

export const EducationSection = () => {
  return (
    <section id="education" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Educational Background</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {EDUCATION.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-gray-800 flex flex-col md:flex-row gap-8 items-start md:items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center shrink-0">
                <GraduationCap className="text-blue-500" size={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                  <span className="px-4 py-1.5 rounded-full bg-gray-900 border border-gray-800 text-xs font-bold text-gray-400">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-400 mb-1">{edu.degree}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{edu.location}</p>
                {edu.grade && (
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs font-mono bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded">GPA: {edu.grade}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
