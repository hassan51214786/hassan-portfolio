import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Owners = () => {
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert(isLogin ? "Successfully logged into BMW Portal." : "Registration successful! Welcome to BMW.");
      setLoading(false);
    }, 1500);
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="w-full min-h-screen relative flex items-center justify-center bg-black overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: "url('/bmw-images/m4.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-lg bg-black/60 backdrop-blur-2xl border border-white/10 p-12 rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-gradient-to-br from-blue-500 to-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500"></div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white"></div>
            <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center text-[10px] font-bold tracking-widest z-10">BMW</div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div key="login" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
              <h1 className="text-3xl font-light text-center text-white mb-2">My BMW Portal</h1>
              <p className="text-gray-400 text-center text-sm mb-10">Sign in to manage your vehicles and services.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">BMW ID / Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/20 rounded-md p-4 text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Password</label>
                  <input required type="password" className="w-full bg-white/5 border border-white/20 rounded-md p-4 text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all" />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                    <input type="checkbox" className="accent-blue-500" /> Remember me
                  </label>
                  <a href="#" className="text-sm text-blue-400 hover:text-blue-300">Forgot password?</a>
                </div>
                
                <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-widest py-4 rounded-md mt-6 transition-colors shadow-lg disabled:opacity-50">
                  {loading ? "AUTHENTICATING..." : "LOGIN"}
                </button>
              </form>

              <div className="mt-8 text-center border-t border-white/10 pt-6">
                <p className="text-gray-400 text-sm">Don't have an account? <span onClick={() => setIsLogin(false)} className="text-white hover:underline font-bold cursor-pointer">Register now</span></p>
              </div>
            </motion.div>
          ) : (
            <motion.div key="register" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
              <h1 className="text-3xl font-light text-center text-white mb-2">Create BMW ID</h1>
              <p className="text-gray-400 text-center text-sm mb-10">Join the ultimate driving community.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/20 rounded-md p-4 text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Email Address</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/20 rounded-md p-4 text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Create Password</label>
                  <input required type="password" className="w-full bg-white/5 border border-white/20 rounded-md p-4 text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all" />
                </div>
                
                <button type="submit" disabled={loading} className="w-full bg-white text-black hover:bg-gray-200 font-bold tracking-widest py-4 rounded-md mt-6 transition-colors shadow-lg disabled:opacity-50">
                  {loading ? "CREATING..." : "REGISTER"}
                </button>
              </form>

              <div className="mt-8 text-center border-t border-white/10 pt-6">
                <p className="text-gray-400 text-sm">Already have an account? <span onClick={() => setIsLogin(true)} className="text-white hover:underline font-bold cursor-pointer">Login here</span></p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.main>
  );
};

export default Owners;
