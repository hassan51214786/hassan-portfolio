import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, User, ShoppingCart, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full fixed top-0 z-50 px-6 md:px-12 py-4 md:py-6 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
        {/* Mobile Hamburger */}
        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-white hover:text-blue-400">
          <Menu size={24} />
        </button>

        {/* Left Navigation (Desktop) */}
        <div className="hidden lg:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-white/90">
          <Link to="/models" className="hover:text-blue-400 transition-colors">Models</Link>
          <Link to="/buy" className="hover:text-blue-400 transition-colors">Find & Buy</Link>
          <Link to="/electro" className="hover:text-blue-400 transition-colors">Electromobility</Link>
          <Link to="/owners" className="hover:text-blue-400 transition-colors">Owners</Link>
          <Link to="/discover" className="hover:text-blue-400 transition-colors">Discover</Link>
        </div>

        {/* Right Icons & Logo */}
        <div className="flex items-center gap-4 md:gap-6 text-white">
          <button onClick={() => setIsSearchOpen(true)} className="relative group hover:text-blue-400 transition-colors">
            <Search size={20} strokeWidth={2.5} />
          </button>
          <button onClick={() => navigate('/buy')} className="hidden md:block relative group hover:text-blue-400 transition-colors">
            <MapPin size={20} strokeWidth={2.5} />
          </button>
          <button onClick={() => navigate('/owners')} className="hidden md:block relative group hover:text-blue-400 transition-colors">
            <User size={20} strokeWidth={2.5} />
          </button>
          
          <div className="hidden md:block h-8 w-px bg-white/30 mx-2"></div>
          
          <div className="flex items-center gap-3">
            <span className="hidden md:block text-[10px] font-light tracking-widest text-gray-300">The <strong className="font-bold">Ultimate</strong> Driving Machine</span>
            
            {/* Real BMW Logo CSS Replica */}
            <Link to="/" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[3px] border-white flex items-center justify-center bg-gradient-to-br from-blue-500 to-black relative overflow-hidden group hover:scale-105 transition-transform">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500 group-hover:bg-blue-400 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500 group-hover:bg-blue-400 transition-colors"></div>
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white"></div>
              <div className="absolute inset-[2px] md:inset-[3px] bg-black rounded-full flex items-center justify-center text-[6px] md:text-[8px] font-bold tracking-widest z-10 text-white">BMW</div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '-100%' }} transition={{ type: 'tween' }}
            className="fixed inset-0 z-[110] bg-[#0c1015] flex flex-col pt-24 px-8"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 left-6 text-white hover:text-blue-500">
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-2xl font-light text-white">
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/models">Models</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/buy">Find & Buy</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/electro">Electromobility</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/owners">Owners</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/discover">Discover</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col pt-32 px-12 md:px-32"
          >
            <button onClick={() => setIsSearchOpen(false)} className="absolute top-10 right-12 text-white hover:text-blue-500 transition-colors">
              <X size={48} strokeWidth={1} />
            </button>
            <h2 className="text-4xl text-gray-400 font-light mb-8">What are you looking for?</h2>
            <div className="relative">
              <input 
                autoFocus
                type="text" 
                placeholder="Search models, services, news..." 
                className="w-full bg-transparent border-b-2 border-white/30 pb-6 text-6xl text-white outline-none focus:border-blue-500 transition-colors font-light placeholder:text-white/20"
              />
              <Search size={48} className="absolute right-0 top-2 text-white/30" />
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Popular Searches</h3>
                <ul className="text-gray-400 space-y-3 font-light">
                  <li className="hover:text-blue-400 cursor-pointer transition-colors">M4 Competition</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors">i4 Test Drive</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors">Build your own</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors">Financial Services</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
