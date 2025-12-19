
import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Experience, Project } from '../types';
import { ExternalLink, Layout } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

interface ExperienceCardProps {
  exp: Experience;
  onProjectClick: (project: Project) => void;
}

export const ExperienceCard = ({ exp, onProjectClick }: ExperienceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:grid md:grid-cols-12 gap-8 mb-16">
        <div className="hidden md:flex md:col-span-3 flex-col items-end text-right pt-2">
          <p className="text-blue-400 font-bold mb-1">{exp.period}</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest">{exp.location}</p>
        </div>
        
        <div className="absolute left-0 md:static md:col-span-1 flex justify-center relative">
          <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-950 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          <div className="absolute h-full w-px bg-gray-800 top-4"></div>
        </div>

        <div className="md:col-span-8 group">
          <div className="glass p-8 rounded-3xl border-gray-800 group-hover:border-blue-500/30 transition-all shadow-lg hover:shadow-blue-500/5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                {exp.logo && (
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center overflow-hidden shrink-0">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain opacity-80" onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }} />
                    <span className="text-xs font-bold text-gray-500">Logo</span>
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-gray-400 font-medium">{exp.company}</p>
                </div>
              </div>
              <p className="md:hidden text-blue-400 font-bold text-sm">{exp.period}</p>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              {exp.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {exp.projects.map((proj, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -4 }}
                  onClick={() => onProjectClick(proj)}
                  className="p-4 rounded-2xl bg-gray-900/40 border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer group/item relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 opacity-0 group-hover/item:opacity-100 transition-opacity">
                    <Layout size={16} className="text-blue-500" />
                  </div>
                  
                  <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    {proj.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3 pr-4">{proj.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-gray-400 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-wider opacity-0 group-hover/item:opacity-100 transition-opacity">
                    View Project Details
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
