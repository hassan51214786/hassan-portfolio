import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Info, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.main 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* SECTION 1: Hero (Matching Image 3) */}
      <section className="relative w-full min-h-screen flex flex-col justify-between pt-24 md:pt-32 pb-12 px-6 md:px-12 bg-cover bg-center" style={{ backgroundImage: "url('/bmw-images/m4.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 md:to-transparent"></div>
        
        <div className="relative z-10 max-w-2xl mt-12 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-2 text-white shadow-sm leading-tight">THE M4 COMPETITION</h1>
          <div className="flex items-center gap-3 mb-8">
            {/* Fake M Logo */}
            <div className="flex h-4 md:h-5">
              <div className="w-1.5 md:w-2 h-full bg-blue-400 -skew-x-12"></div>
              <div className="w-1.5 md:w-2 h-full bg-blue-800 -skew-x-12 ml-0.5"></div>
              <div className="w-1.5 md:w-2 h-full bg-red-600 -skew-x-12 ml-0.5"></div>
            </div>
            <p className="text-xs md:text-xl font-bold tracking-widest text-white drop-shadow-md uppercase">The ultimate driving machine.</p>
          </div>
          
          <div className="flex flex-col gap-4 w-full md:w-64">
            <button onClick={() => navigate('/buy')} className="bg-[#1c69d4] hover:bg-blue-600 text-white text-sm md:text-base font-bold py-4 px-6 transition-colors shadow-lg">
              Build and price
            </button>
            <button onClick={() => navigate('/owners')} className="bg-[#444444] hover:bg-gray-600 text-white text-sm md:text-base font-bold py-4 px-6 transition-colors shadow-lg">
              Reserve a test drive
            </button>
          </div>
        </div>

        {/* Bottom Specs Bar */}
        <div className="relative z-10 flex flex-row flex-wrap md:flex-nowrap gap-6 md:gap-16 text-white border-l-2 border-white/20 pl-4 md:pl-6 backdrop-blur-sm bg-black/10 p-4 w-full md:w-max mt-8 md:mt-0">
          <div className="w-[45%] md:w-auto">
            <div className="text-xl md:text-2xl font-light flex items-center gap-2">£82,905 <Info size={16} className="text-gray-400 hidden md:block" /></div>
            <div className="text-[10px] md:text-[11px] uppercase tracking-wider text-gray-300 font-bold mt-1">Price</div>
          </div>
          <div className="w-[45%] md:w-auto">
            <div className="text-xl md:text-2xl font-light">510 hp</div>
            <div className="text-[10px] md:text-[11px] uppercase tracking-wider text-gray-300 font-bold mt-1">Performance</div>
          </div>
          <div className="w-full md:w-auto">
            <div className="text-xl md:text-2xl font-light">TwinPower Turbo</div>
            <div className="text-[10px] md:text-[11px] uppercase tracking-wider text-gray-300 font-bold mt-1">Engine</div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Dark Presentation (Matching Image 1) */}
      <section className="relative w-full min-h-[90vh] bg-[#0c1015] flex flex-col items-center pt-16 md:pt-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[30vh] md:h-[50vh] bg-gradient-to-b from-black/80 to-transparent z-10"></div>
        
        <div className="relative z-20 w-full max-w-7xl px-6 md:px-12 pt-8 md:pt-12">
          <p className="text-[#3b82f6] text-xs md:text-sm font-semibold tracking-wider mb-2">The All-New BMW Models</p>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4 md:mb-6">The All-New BMW</h2>
          <p className="text-gray-400 max-w-md text-xs md:text-sm leading-relaxed mb-8 md:mb-12">
            Experience the pinnacle of driving dynamics. The perfect synthesis of performance, aesthetics, and intelligence, engineered for those who demand more from every journey.
          </p>
        </div>

        {/* Massive Car Image overflowing layout */}
        <div className="relative z-20 w-[90%] max-w-6xl mx-auto -mt-4 md:-mt-10 mb-12 md:mb-20 drop-shadow-2xl">
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
          <div className="mt-8 md:mt-20 font-bold text-lg md:text-xl tracking-widest uppercase">About</div>
        </div>
        
        {/* Background faded text */}
        <div className="absolute bottom-1/4 md:bottom-0 left-1/2 -translate-x-1/2 text-[40vw] md:text-[30vw] font-black text-white/[0.02] leading-none pointer-events-none select-none">
          BMW
        </div>
      </section>

      {/* SECTION 3: Feature Split (Matching Image 2) */}
      <section className="w-full min-h-screen bg-black flex flex-col md:flex-row">
        {/* Left Side: Taillight Detail */}
        <div className="w-full h-[40vh] md:w-1/2 md:h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/bmw-images/i4.jpg')" }}>
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
        </div>
        
        {/* Right Side: Details & CTA */}
        <div className="w-full min-h-[60vh] md:w-1/2 md:h-screen bg-[#050505] relative flex flex-col justify-center px-6 md:px-16 py-12 md:py-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] md:text-[15vw] font-black text-white/[0.03] leading-none pointer-events-none select-none whitespace-nowrap">
            M W 8
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-4">
              <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white">BMW</h2>
              <button onClick={() => navigate('/models')} className="bg-[#1c69d4] hover:bg-blue-600 text-white text-xs md:text-sm font-bold tracking-wider py-4 px-6 md:px-8 rounded-sm transition-colors w-full md:w-auto">
                CHOOSE YOUR CAR
              </button>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-12 md:mb-24">- Always in your element</p>
            
            {/* Thumbnails */}
            <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border border-white/10 hover:border-blue-500 transition-colors cursor-pointer relative group">
                <img src="/bmw-images/i8.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Steering Wheel" />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border border-white/10 hover:border-blue-500 transition-colors cursor-pointer relative group">
                <img src="/bmw-images/m4.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Details" />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border border-white/10 hover:border-blue-500 transition-colors cursor-pointer relative group">
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
