
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectGalleryProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectGallery = ({ project, onClose }: ProjectGalleryProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-10"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-gray-950/90 backdrop-blur-xl"
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative glass w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border-white/10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-gray-900/50">
            <div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{project.description}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-950/30">
            <div className="grid gap-6">
              {project.images && project.images.length > 0 ? (
                project.images.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-2xl overflow-hidden border border-white/5 shadow-lg group"
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} screenshot ${idx + 1}`} 
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </motion.div>
                ))
              ) : (
                <div className="py-20 text-center text-gray-500">
                  <p>No preview images available for this project yet.</p>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/5 bg-gray-900/50 flex flex-wrap gap-2 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors"
              >
                Visit Site <ExternalLink size={16} />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
