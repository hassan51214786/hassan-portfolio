import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, skills, links }) => {
  return (
    <article className="group relative border border-white/10 rounded-2xl p-8 md:p-10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl font-bold text-white tracking-tight">{title}</h3>
          <div className="flex gap-4">
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="View Source">
                <Github size={24} />
              </a>
            )}
            {links.demo && (
              <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Live Demo">
                <ExternalLink size={24} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-400 mb-8 leading-relaxed text-lg max-w-3xl">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-4 py-1.5 bg-black/40 border border-white/5 text-gray-300 text-sm font-mono rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
