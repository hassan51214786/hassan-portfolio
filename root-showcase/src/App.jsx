import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CircleDot, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => (
  <nav className="w-full max-w-5xl mx-auto flex justify-between items-center bg-[#131816] rounded-full px-6 py-4 mt-8 border border-white/5 sticky top-6 z-50 shadow-2xl backdrop-blur-md">
    <div className="text-white font-bold tracking-wider text-sm">HASSAN</div>
    <div className="hidden md:flex items-center gap-8 text-xs font-bold text-gray-400 tracking-wider">
      <a href="#home" className="hover:text-white transition-colors">HOME</a>
      <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
      <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
      <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
    </div>
    <motion.a 
      href="#contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#2c5f4b] hover:bg-[#347259] text-white text-xs font-bold px-6 py-3 rounded-full transition-colors flex items-center gap-2 cursor-pointer"
    >
      CONTACT
    </motion.a>
  </nav>
);

const HeroBento = () => (
  <section id="home" className="w-full max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 scroll-mt-32">
    {/* Left Large Card */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:col-span-2 bg-[#131816] rounded-3xl p-10 flex flex-col justify-between border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
    >
      <div className="flex justify-between items-start mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
          I AM A FRONTEND ENGINEER<br />
          A REACT SPECIALIST<br />
          <span className="text-gray-500">& A CREATIVE DEVELOPER</span>
        </h1>
        <motion.a 
          href="#contact"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:border-white transition-colors group-hover:bg-white/5">
            <ArrowUpRight size={20} className="text-white group-hover:text-white transition-colors" />
          </div>
          <span className="text-xs font-bold text-white tracking-widest hidden md:block">HIRE ME</span>
        </motion.a>
      </div>
      
      <div>
        <p className="text-gray-400 text-sm max-w-xl leading-relaxed mb-10 group-hover:text-gray-300 transition-colors">
          Leveraging years of engineering experience across B2B, SaaS, and creative tech. I deliver high-performance digital solutions that propel businesses toward growth, utilizing React, WebGL, and modern frontend architecture.
        </p>
        <div className="flex flex-wrap gap-4 text-[10px] font-bold text-gray-500 tracking-widest uppercase">
          <span>Website Design</span>
          <span>•</span>
          <span>Creative Coding</span>
          <span>•</span>
          <span>UI/UX Engineering</span>
          <span>•</span>
          <span>3D WebGL</span>
        </div>
      </div>
    </motion.div>

    {/* Right Image Card */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="md:col-span-1 bg-[#131816] rounded-3xl p-4 border border-white/5 relative group cursor-pointer"
      onClick={() => window.location.href = '#projects'}
    >
      <div className="w-full h-full rounded-2xl overflow-hidden relative min-h-[300px]">
        <img 
          src="https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=800&auto=format&fit=crop" 
          alt="Eye" 
          className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white tracking-wider">
          Gallery
        </div>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-4 left-4 flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <ArrowUpRight size={16} className="text-black" />
          </div>
          <span className="text-xs font-bold text-white tracking-widest">SEE MORE</span>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

const AboutBento = () => (
  <section id="about" className="w-full max-w-5xl mx-auto mt-6 bg-[#131816] rounded-3xl p-10 border border-white/5 scroll-mt-32 hover:border-white/10 transition-colors">
    <h2 className="text-sm font-bold text-gray-400 tracking-widest mb-8 uppercase">About Me</h2>
    <div className="flex flex-col md:flex-row gap-12">
      <div className="flex-1">
        <h3 className="text-3xl font-semibold text-white mb-6">Building the future of the web, one pixel at a time.</h3>
        <p className="text-gray-400 leading-relaxed mb-6">
          I am a passionate software engineer focused on building highly interactive, accessible, and performant web applications. My expertise lies in bridging the gap between intricate design and complex engineering logic.
        </p>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-6">
        <div className="bg-[#0a0f0d] p-6 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center">
          <h4 className="text-4xl font-black text-white mb-2">5+</h4>
          <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">Years Exp</p>
        </div>
        <div className="bg-[#0a0f0d] p-6 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center">
          <h4 className="text-4xl font-black text-white mb-2">40+</h4>
          <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">Projects</p>
        </div>
      </div>
    </div>
  </section>
);

const ProjectsBento = () => {
  const projects = [
    { name: 'BMW Experience', tags: 'WebGL / R3F / React', link: 'http://localhost:5180', img: '/images/bmw.jpg' },
    { name: 'SynthOS', tags: 'React Router / Dashboard', link: 'http://localhost:5173', img: '/images/synthos.jpg' },
    { name: 'Orb Simulation', tags: 'Canvas / Physics', link: 'http://localhost:5176', img: '/images/orb.jpg' },
    { name: 'A11y Primitives', tags: 'Vanilla JS / Accessibility', link: 'http://localhost:5175', img: '/images/a11y.jpg' },
  ];

  return (
    <section id="projects" className="w-full max-w-5xl mx-auto mt-6 bg-[#131816] rounded-3xl p-10 border border-white/5 scroll-mt-32">
      <h2 className="text-sm font-bold text-gray-400 tracking-widest mb-8 uppercase">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1 }}
            className="group block rounded-2xl bg-[#0a0f0d] p-4 border border-white/5 cursor-pointer hover:border-[#2c5f4b]/50 transition-colors"
            onClick={() => window.open(proj.link, '_blank')}
            whileHover={{ y: -5 }}
          >
            <div className="w-full h-56 rounded-xl overflow-hidden mb-6 relative bg-black">
              <img src={proj.img} alt={proj.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="flex justify-between items-end px-2 pb-2">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{proj.name}</h3>
                <p className="text-xs font-bold text-gray-500 tracking-widest uppercase">{proj.tags}</p>
              </div>
              <motion.div 
                whileHover={{ scale: 1.2, rotate: -45 }}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-[#2c5f4b] group-hover:border-[#2c5f4b] transition-colors"
              >
                <ArrowRight size={16} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ServicesBento = () => (
  <section id="services" className="w-full max-w-5xl mx-auto mt-6 bg-[#131816] rounded-3xl p-10 border border-white/5 scroll-mt-32 mb-24 hover:border-white/10 transition-colors">
    <h2 className="text-sm font-bold text-gray-400 tracking-widest mb-8 uppercase">Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {['Frontend Architecture', '3D WebGL / R3F', 'UI/UX Implementation'].map((svc, i) => (
        <motion.div 
          key={i}
          whileHover={{ scale: 1.02 }}
          className="bg-[#0a0f0d] p-8 rounded-2xl border border-white/5 cursor-pointer hover:border-white/20 transition-colors group"
        >
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#2c5f4b]/20 transition-colors">
            <CircleDot size={20} className="text-[#4ade80]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">{svc}</h3>
          <p className="text-sm text-gray-500">Delivering highly optimized, scalable, and visually stunning solutions tailored to modern web standards.</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="w-full max-w-5xl mx-auto py-16 text-center flex flex-col items-center border-t border-white/5 scroll-mt-32">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
    >
      LET'S COLLABORATE, ITERATE
    </motion.h2>
    <p className="text-gray-500 text-sm max-w-md mb-12">Open to new opportunities and exciting creative projects. Let's build something amazing together.</p>
    
    <div className="flex gap-6">
      <motion.a 
        href="https://linkedin.com" target="_blank"
        whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-[#131816] border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-colors"
      >
        <Linkedin size={24} />
      </motion.a>
      <motion.a 
        href="https://github.com" target="_blank"
        whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-[#131816] border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
      >
        <Github size={24} />
      </motion.a>
      <motion.a 
        href="mailto:contact@hassan.dev"
        whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-[#131816] border border-white/10 flex items-center justify-center text-white hover:bg-[#2c5f4b] hover:border-[#2c5f4b] transition-colors"
      >
        <Mail size={24} />
      </motion.a>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f0d] text-gray-200 font-sans px-6 py-6 overflow-x-hidden selection:bg-[#2c5f4b] selection:text-white scroll-smooth">
      
      {/* Top Tag */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="flex justify-center mt-4"
      >
        <div className="bg-[#131816] border border-white/5 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
          <CircleDot size={12} className="text-[#4ade80] animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Available for work</span>
        </div>
      </motion.div>

      <Navbar />
      <HeroBento />
      <AboutBento />
      <ProjectsBento />
      <ServicesBento />
      <Footer />
      
    </div>
  );
}

export default App;
