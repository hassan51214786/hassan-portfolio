import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Info, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* SECTION 1: Hero (Matching Image 3) */}
      <section className="relative w-full h-screen flex flex-col justify-between pt-32 pb-12 px-12 bg-cover bg-center" style={{ backgroundImage: "url('/bmw-images/m4.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-6xl font-light tracking-tight mb-2 text-white shadow-sm">THE M4 COMPETITION</h1>
          <div className="flex items-center gap-3 mb-8">
            {/* Fake M Logo */}
            <div className="flex h-5">
              <div className="w-2 h-full bg-blue-400 -skew-x-12"></div>
              <div className="w-2 h-full bg-blue-800 -skew-x-12 ml-0.5"></div>
              <div className="w-2 h-full bg-red-600 -skew-x-12 ml-0.5"></div>
            </div>
            <p className="text-xl font-bold tracking-widest text-white drop-shadow-md uppercase">The ultimate driving machine.</p>
          </div>
          
          <div className="flex flex-col gap-4 w-64">
            <button onClick={() => window.location.href='/buy'} className="bg-[#1c69d4] hover:bg-blue-600 text-white font-bold py-4 px-6 transition-colors shadow-lg">
              Build and price
            </button>
            <button onClick={() => window.location.href='/owners'} className="bg-[#444444] hover:bg-gray-600 text-white font-bold py-4 px-6 transition-colors shadow-lg">
              Reserve a test drive
            </button>
          </div>
        </div>

        {/* Bottom Specs Bar */}
        <div className="relative z-10 flex gap-16 text-white border-l-2 border-white/20 pl-6 backdrop-blur-sm bg-black/10 p-4 w-max">
          <div>
            <div className="text-2xl font-light flex items-center gap-2">£82,905 <Info size={16} className="text-gray-400" /></div>
            <div className="text-[11px] uppercase tracking-wider text-gray-300 font-bold mt-1">Price</div>
          </div>
          <div>
            <div className="text-2xl font-light">510 hp (375 kW)</div>
            <div className="text-[11px] uppercase tracking-wider text-gray-300 font-bold mt-1">Performance</div>
          </div>
          <div>
            <div className="text-2xl font-light">TwinPower Turbo</div>
            <div className="text-[11px] uppercase tracking-wider text-gray-300 font-bold mt-1">Engine</div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Dark Presentation (Matching Image 1) */}
      <section className="relative w-full min-h-[90vh] bg-[#0c1015] flex flex-col items-center pt-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-black/80 to-transparent z-10"></div>
        
        <div className="relative z-20 w-full max-w-7xl px-12 pt-12">
          <p className="text-[#3b82f6] text-sm font-semibold tracking-wider mb-2">The All-New BMW Models</p>
          <h2 className="text-5xl font-light text-white mb-6">The All-New BMW</h2>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed mb-12">
            Experience the pinnacle of driving dynamics. The perfect synthesis of performance, aesthetics, and intelligence, engineered for those who demand more from every journey.
          </p>
        </div>

        {/* Massive Car Image overflowing layout */}
        <div className="relative z-20 w-[90%] max-w-6xl mx-auto -mt-10 mb-20 drop-shadow-2xl">
           <img src="/bmw-images/8series.jpg" alt="BMW Front" className="w-full h-auto object-cover rounded-sm" />
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-20 flex flex-col items-center mb-12">
          <div 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all cursor-pointer"
          >
            <ChevronDown size={20} />
          </div>
          <div className="mt-20 font-bold text-xl tracking-widest">About</div>
        </div>
        
        {/* Background faded text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[30vw] font-black text-white/[0.02] leading-none pointer-events-none select-none">
          BMW
        </div>
      </section>

      {/* SECTION 3: Feature Split (Matching Image 2) */}
      <section className="w-full h-screen bg-black flex">
        {/* Left Side: Taillight Detail */}
        <div className="w-1/2 h-full bg-cover bg-center relative" style={{ backgroundImage: "url('/bmw-images/i4.jpg')" }}>
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
        </div>
        
        {/* Right Side: Details & CTA */}
        <div className="w-1/2 h-full bg-[#050505] relative flex flex-col justify-center px-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.03] leading-none pointer-events-none select-none whitespace-nowrap">
            M W 8
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-8 mb-4">
              <h2 className="text-8xl font-black italic tracking-tighter text-white">BMW</h2>
              <button onClick={() => window.location.href='/models'} className="bg-[#1c69d4] hover:bg-blue-600 text-white text-sm font-bold tracking-wider py-4 px-8 rounded-sm transition-colors">
                CHOOSE YOUR CAR
              </button>
            </div>
            <p className="text-2xl text-gray-300 font-light tracking-wide mb-24">- Always in your element</p>
            
            {/* Thumbnails */}
            <div className="flex gap-6">
              <div className="w-32 h-32 rounded-lg overflow-hidden border border-white/10 hover:border-blue-500 transition-colors cursor-pointer relative group">
                <img src="/bmw-images/i8.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Steering Wheel" />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>
              <div className="w-32 h-32 rounded-lg overflow-hidden border border-white/10 hover:border-blue-500 transition-colors cursor-pointer relative group">
                <img src="/bmw-images/m4.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Details" />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>
              <div className="w-32 h-32 rounded-lg overflow-hidden border border-white/10 hover:border-blue-500 transition-colors cursor-pointer relative group">
                <img src="/bmw-images/8series.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Rims" />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
