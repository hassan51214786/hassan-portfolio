import React, { useEffect } from 'react';
import { BrowserRouter, useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Models from './pages/Models';
import FindBuy from './pages/FindBuy';
import Electro from './pages/Electro';
import Owners from './pages/Owners';
import Discover from './pages/Discover';
import Navbar from './components/Navbar';

// Auto-scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/buy" element={<FindBuy />} />
        <Route path="/electro" element={<Electro />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="w-full min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
