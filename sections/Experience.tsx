
import React from 'react';
import { EXPERIENCES } from '../constants';
import { ExperienceCard } from '../components/ExperienceCard';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Professional <span className="text-blue-500">Journey</span></h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            From government agencies to multinational corporations, I've had the privilege of building high-impact systems at scale.
          </p>
        </div>

        <div className="relative">
          {EXPERIENCES.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
