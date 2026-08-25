import React, { useState } from 'react';

const colors = [
  { name: 'Alpine White', hex: '#FFFFFF' },
  { name: 'Black Sapphire', hex: '#111111' },
  { name: 'Isle of Man Green', hex: '#1c3024' },
  { name: 'Portimao Blue', hex: '#203c73' },
  { name: 'Toronto Red', hex: '#8a1616' }
];

const OverlayUI = ({ carColor, setCarColor, wheelType, setWheelType }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollTo = (index) => {
    // 5 sections total, each 100vh
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleTestDrive = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setFormSubmitted(false);
    }, 2000);
  };

  return (
    <>
      {/* Persistent Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-2xl font-bold tracking-tighter text-white">
          M-SERIES
        </div>
        <div className="flex gap-8 text-sm font-medium tracking-wide">
          <button onClick={() => scrollTo(0)} className="hover:text-white text-gray-400 transition-colors">EXPERIENCE</button>
          <button onClick={() => scrollTo(1)} className="hover:text-white text-gray-400 transition-colors">WALKAROUND</button>
          <button onClick={() => scrollTo(4)} className="hover:text-white text-gray-400 transition-colors">CUSTOMIZE</button>
        </div>
      </nav>

      {/* Sections */}
      {/* Section 1: Hero */}
      <section className="h-screen w-full flex flex-col justify-center px-[10vw]">
        <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter drop-shadow-2xl">
          THE ULTIMATE
        </h1>
        <p className="text-xl text-gray-200 mt-4 max-w-md drop-shadow-lg">
          Scroll down to dive into the engineering mastery.
        </p>
      </section>

      {/* Section 2: Walkaround */}
      <section className="h-screen w-full flex flex-col justify-center items-end px-[10vw] text-right">
        <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">AERODYNAMICS</h2>
        <p className="text-lg text-gray-200 mt-4 max-w-sm drop-shadow-lg">
          Sculpted by the wind. Every curve is designed to cut drag and increase downforce for unparalleled track performance.
        </p>
      </section>

      {/* Section 3: Hood Open / Engine */}
      <section className="h-screen w-full flex flex-col justify-center px-[10vw]">
        <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">M-POWER CORE</h2>
        <div className="grid grid-cols-3 gap-8 mt-8 max-w-md bg-black/40 backdrop-blur-md p-6 border border-white/10 rounded-sm">
          <div>
            <div className="text-sm text-gray-400 mb-1">HORSEPOWER</div>
            <div className="text-3xl font-bold text-white">503</div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-1">TORQUE</div>
            <div className="text-3xl font-bold text-white">479 <span className="text-sm">lb-ft</span></div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-1">0-60 MPH</div>
            <div className="text-3xl font-bold text-white">3.8<span className="text-sm">s</span></div>
          </div>
        </div>
      </section>

      {/* Section 4: Interior */}
      <section className="h-screen w-full flex flex-col justify-center items-end px-[10vw] text-right pointer-events-none">
        <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">THE COCKPIT</h2>
        <p className="text-lg text-gray-200 mt-4 max-w-sm drop-shadow-lg bg-black/40 p-4 backdrop-blur-md border border-white/10 rounded-sm">
          Driver-focused interior wrapped in Merino leather. Welcome to the machine.
        </p>
      </section>

      {/* Section 5: Customize */}
      <section className="h-screen w-full flex flex-col justify-center px-[10vw]">
        <div className="bg-black/60 backdrop-blur-xl p-8 border border-white/20 rounded-md w-[400px]">
          <h2 className="text-3xl font-bold mb-8 text-white">CONFIGURE</h2>
          
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider mb-4 uppercase">Exterior Paint</h3>
            <div className="flex gap-4">
              {colors.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setCarColor(c.hex)}
                  className={`w-10 h-10 rounded-full border-2 transition-all hover:scale-110 active:scale-95 ${carColor === c.hex ? 'border-white scale-110' : 'border-transparent'}`}
                  style={{ backgroundColor: c.hex }}
                  aria-label={`Select ${c.name}`}
                />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider mb-4 uppercase">Wheels</h3>
            <div className="flex gap-4">
              <button
                onClick={() => setWheelType('sport')}
                className={`px-4 py-2 border transition-all ${wheelType === 'sport' ? 'border-white text-white' : 'border-white/20 text-gray-400'}`}
              >
                M Sport Rims
              </button>
              <button
                onClick={() => setWheelType('classic')}
                className={`px-4 py-2 border transition-all ${wheelType === 'classic' ? 'border-white text-white' : 'border-white/20 text-gray-400'}`}
              >
                Classic Multi-Spoke
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA / Specs */}
      <section className="h-screen w-full flex flex-col justify-center items-center text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-12">READY TO DRIVE?</h2>
        <button 
          onClick={() => setModalOpen(true)}
          className="px-12 py-5 bg-white text-black font-bold tracking-widest hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300 rounded-sm shadow-2xl"
        >
          BOOK A TEST DRIVE
        </button>
      </section>

      {/* Test Drive Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-[#111] border border-white/20 p-8 w-full max-w-md rounded-md">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="text-3xl font-bold text-white mb-4">CONFIRMED</div>
                <div className="text-gray-400">Our concierge will contact you shortly.</div>
              </div>
            ) : (
              <form onSubmit={handleTestDrive}>
                <h3 className="text-2xl font-bold text-white mb-6">Schedule Drive</h3>
                <input type="text" placeholder="Full Name" required className="w-full bg-white/5 border border-white/10 p-3 text-white mb-4 outline-none focus:border-white/50 transition-colors" />
                <input type="email" placeholder="Email Address" required className="w-full bg-white/5 border border-white/10 p-3 text-white mb-4 outline-none focus:border-white/50 transition-colors" />
                <input type="date" required className="w-full bg-white/5 border border-white/10 p-3 text-white mb-8 outline-none focus:border-white/50 transition-colors" style={{ colorScheme: 'dark' }} />
                
                <div className="flex gap-4">
                  <button type="button" onClick={() => setModalOpen(false)} className="flex-1 py-3 border border-white/20 text-white hover:bg-white/10 transition-colors">CANCEL</button>
                  <button type="submit" className="flex-1 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors">SUBMIT</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default OverlayUI;
