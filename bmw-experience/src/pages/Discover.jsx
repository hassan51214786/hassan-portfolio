import React from 'react';
import { motion } from 'framer-motion';

const Discover = () => {
  return (
    <motion.main 
      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-[#050505] pt-32 px-12 md:px-24"
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mb-20 text-center">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white uppercase">
          DISCOVER THE ULTIMATE
        </h1>
        <p className="text-xl text-gray-400 mt-6 font-light max-w-2xl mx-auto">
          Dive into the philosophy, engineering, and passion behind every BMW.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
        {/* Large Feature */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="md:col-span-8 relative h-[70vh] group cursor-pointer overflow-hidden rounded-md"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105" style={{ backgroundImage: "url('/bmw-images/i4.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
          <div className="absolute bottom-12 left-12">
            <p className="text-blue-500 font-bold tracking-widest text-sm mb-2 uppercase">Innovation</p>
            <h2 className="text-5xl font-bold text-white">THE COCKPIT OF TOMORROW</h2>
          </div>
        </motion.div>

        {/* Small Feature */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} delay={0.2}
          className="md:col-span-4 relative h-[70vh] group cursor-pointer overflow-hidden rounded-md bg-gray-900"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105" style={{ backgroundImage: "url('/bmw-images/m4.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
          <div className="absolute bottom-12 left-8">
            <p className="text-red-500 font-bold tracking-widest text-sm mb-2 uppercase">Design</p>
            <h2 className="text-4xl font-bold text-white">M-SPORT DNA</h2>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Discover;
