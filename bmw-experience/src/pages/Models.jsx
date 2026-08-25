import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CARS = [
  { id: 'i4', name: 'THE i4', desc: '100% Electric', img: '/bmw-images/i4.jpg', colSpan: 'md:col-span-2' },
  { id: 'm4', name: 'THE M4', desc: 'High Performance', img: '/bmw-images/m4.jpg', colSpan: 'md:col-span-1' },
  { id: 'x5m', name: 'THE X5 M', desc: 'Sports Activity Vehicle', img: '/bmw-images/8series.jpg', colSpan: 'md:col-span-1' },
  { id: '8s', name: 'THE 8', desc: 'Luxury Coupe', img: '/bmw-images/i8.jpg', colSpan: 'md:col-span-2' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Models = () => {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
      className="w-full min-h-screen pt-32 pb-24 px-8 md:px-16 bg-[#050505]"
    >
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
        <h1 className="text-7xl font-light mb-2 tracking-tighter">ALL MODELS</h1>
        <p className="text-gray-400 text-lg mb-16 font-light">Select your ultimate driving machine.</p>
      </motion.div>

      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="show" 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {CARS.map((car) => (
          <motion.div 
            key={car.id} 
            variants={itemVariants}
            whileHover={{ y: -10, scale: 0.98, transition: { duration: 0.4 } }}
            className={`group relative h-[60vh] rounded-sm overflow-hidden cursor-pointer ${car.colSpan}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              style={{ backgroundImage: `url('${car.img}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div>
                <p className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-2">{car.desc}</p>
                <h2 className="text-5xl font-bold text-white tracking-tighter">{car.name}</h2>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-300">
                <ArrowRight size={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
};

export default Models;
