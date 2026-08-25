import React from 'react';
import { motion } from 'framer-motion';
import { BatteryCharging, Zap, Leaf } from 'lucide-react';

const Electro = () => {
  return (
    <motion.main 
      initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-black overflow-hidden relative"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/bmw-images/i4.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

      <div className="relative z-10 h-screen flex flex-col justify-center px-12 md:px-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-blue-500"></div>
            <p className="text-blue-400 font-bold tracking-[0.3em] uppercase text-sm">BMW i</p>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-6">
            ELECTRO<br/>MOBILITY
          </h1>
          <p className="text-2xl text-gray-300 font-light leading-relaxed mb-12">
            Zero emissions. Infinite exhilaration. Welcome to the new era of the Ultimate Driving Machine.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: BatteryCharging, title: 'Range', desc: 'Up to 300+ miles on a single charge.' },
              { icon: Zap, title: 'Charging', desc: '0 to 80% in under 40 minutes.' },
              { icon: Leaf, title: 'Sustainability', desc: 'Manufactured with 100% green energy.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (i * 0.2) }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors"
              >
                <feature.icon className="text-blue-500 mb-4" size={32} />
                <h3 className="text-white font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <button onClick={() => window.location.href='/models'} className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-12 py-5 rounded-sm tracking-widest transition-colors shadow-[0_0_30px_rgba(37,99,235,0.5)]">
            EXPLORE THE i RANGE
          </button>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Electro;
