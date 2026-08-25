import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, SlidersHorizontal, Loader2 } from 'lucide-react';

const FindBuy = () => {
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    setSearching(true);
    setTimeout(() => {
      alert("Found 14 available models near you. Redirecting to inventory...");
      setSearching(false);
      window.location.href = '/models';
    }, 2000);
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="w-full min-h-screen relative overflow-hidden bg-black"
    >
      {/* Massive Background Image with Parallax-like scale */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{ backgroundImage: "url('/bmw-images/8series.jpg')" }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>

      <div className="relative z-10 w-full h-screen flex flex-col justify-center items-center px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-6 text-white drop-shadow-2xl">FIND & BUY</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Discover the ultimate driving machine near you. Search certified inventory, customize your exact build, or reserve online.
          </p>
        </motion.div>

        {/* Luxury Glassmorphism Search Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-5xl bg-white/5 backdrop-blur-2xl border border-white/20 p-2 md:p-4 rounded-xl flex flex-col md:flex-row gap-4 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div className="flex-1 relative">
            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input 
              type="text" 
              placeholder="Zip Code or City" 
              className="w-full h-16 bg-white/5 border border-white/10 rounded-lg pl-16 pr-6 text-xl text-white outline-none focus:bg-white/10 transition-colors"
            />
          </div>
          <div className="flex-1 relative">
            <SlidersHorizontal className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <select className="w-full h-16 bg-white/5 border border-white/10 rounded-lg pl-16 pr-6 text-xl text-white outline-none focus:bg-white/10 transition-colors appearance-none cursor-pointer">
              <option className="bg-gray-900">All Models</option>
              <option className="bg-gray-900">M Series (High Performance)</option>
              <option className="bg-gray-900">i Series (Electric)</option>
              <option className="bg-gray-900">X Series (SAV)</option>
            </select>
          </div>
          <button 
            onClick={handleSearch}
            disabled={searching}
            className="h-16 bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-widest px-12 rounded-lg flex items-center justify-center gap-3 transition-colors shadow-lg shadow-blue-900/50 disabled:opacity-50"
          >
            {searching ? <Loader2 size={24} className="animate-spin" /> : <Search size={24} />}
            {searching ? "SEARCHING" : "SEARCH"}
          </button>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default FindBuy;
