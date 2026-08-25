import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, User, ShoppingCart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="w-full fixed top-0 z-50 px-12 py-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        {/* Left Navigation */}
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-white/90">
          <Link to="/models" className="hover:text-blue-400 transition-colors">Models</Link>
          <Link to="/buy" className="hover:text-blue-400 transition-colors">Find & Buy</Link>
          <Link to="/electro" className="hover:text-blue-400 transition-colors">Electromobility</Link>
          <Link to="/owners" className="hover:text-blue-400 transition-colors">Owners</Link>
          <Link to="/discover" className="hover:text-blue-400 transition-colors">Discover</Link>
        </div>

        {/* Right Icons & Logo */}
        <div className="flex items-center gap-6 text-white">
          <button onClick={() => setIsSearchOpen(true)} className="relative group hover:text-blue-400 transition-colors">
            <Search size={20} strokeWidth={2.5} />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Search</div>
          </button>
          <button onClick={() => navigate('/buy')} className="relative group hover:text-blue-400 transition-colors">
            <MapPin size={20} strokeWidth={2.5} />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Find Dealer</div>
          </button>
          <button onClick={() => navigate('/owners')} className="relative group hover:text-blue-400 transition-colors">
            <User size={20} strokeWidth={2.5} />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">My BMW</div>
          </button>
          <button onClick={() => alert('Your cart is currently empty.')} className="relative group hover:text-blue-400 transition-colors">
            <ShoppingCart size={20} strokeWidth={2.5} />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Cart</div>
          </button>
          
          <div className="h-8 w-px bg-white/30 mx-2"></div>
          
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-light tracking-widest text-gray-300">The <strong className="font-bold">Ultimate</strong> Driving Machine</span>
            
            {/* Real BMW Logo CSS Replica */}
            <Link to="/" className="w-10 h-10 rounded-full border-[3px] border-white flex items-center justify-center bg-gradient-to-br from-blue-500 to-black relative overflow-hidden group hover:scale-105 transition-transform">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500 group-hover:bg-blue-400 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500 group-hover:bg-blue-400 transition-colors"></div>
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white"></div>
              <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center text-[8px] font-bold tracking-widest z-10 text-white">BMW</div>
            </Link>
          </div>
        </div>
      </nav>

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
