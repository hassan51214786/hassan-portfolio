import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="pt-32 pb-24 max-w-4xl mx-auto px-6">
      <div className="font-mono text-sm text-indigo-400 mb-6 tracking-wider">
        // CREATIVE_DEVELOPER
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
        Crafting digital <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">
          experiences.
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
        I specialize in bridging the gap between design and engineering. 
        I build high-performance WebGL experiences, complex React architectures, 
        and interfaces that demand to be interacted with.
      </p>
      
      <div className="flex gap-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95 backdrop-blur-sm">
          <Github size={18} /> GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95 backdrop-blur-sm">
          <Linkedin size={18} /> LinkedIn
        </a>
        <a href="mailto:hello@example.com" className="flex items-center justify-center w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white rounded-full transition-all hover:scale-105 active:scale-95 backdrop-blur-sm">
          <Mail size={18} />
        </a>
      </div>
    </header>
  );
};

export default Header;
