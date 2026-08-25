import React, { useState } from 'react';

const colors = [
  { name: 'Alpine White', hex: '#FFFFFF' },
  { name: 'Black Sapphire', hex: '#111111' },
  { name: 'Isle of Man Green', hex: '#1c3024' },
  { name: 'Portimao Blue', hex: '#203c73' }
];

const Customizer = () => {
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [isBuilding, setIsBuilding] = useState(false);

  return (
    <div className="pt-24 px-8 min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 flex items-center justify-center relative min-h-[50vh]">
        {/* Fake 3D Car Viewport */}
        <div 
          className="w-[80%] aspect-video rounded-xl shadow-2xl transition-colors duration-1000 flex items-center justify-center border border-white/5"
          style={{ backgroundColor: activeColor.hex }}
        >
          <div className="text-white/30 font-mono tracking-widest mix-blend-difference">
            [ 3D RENDER VIEWPORT ]
          </div>
        </div>
      </div>

      <div className="w-full md:w-[400px] p-8 border-l border-white/10 bg-black/50 backdrop-blur-md flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-2">Configure</h2>
        <p className="text-gray-400 mb-8 font-mono text-sm">M3 COMPETITION</p>

        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-300 tracking-wider mb-4 uppercase">Exterior Paint</h3>
          <p className="mb-4 font-mono text-sm text-gray-400">{activeColor.name}</p>
          <div className="flex gap-4">
            {colors.map((c) => (
              <button
                key={c.hex}
                onClick={() => setActiveColor(c)}
                className={`w-12 h-12 rounded-full border-2 transition-all hover:scale-110 active:scale-95 ${activeColor.hex === c.hex ? 'border-white scale-110' : 'border-transparent'}`}
                style={{ backgroundColor: c.hex }}
                aria-label={`Select ${c.name}`}
              />
            ))}
          </div>
        </div>

        <button 
          onClick={() => {
            setIsBuilding(true);
            setTimeout(() => setIsBuilding(false), 2000);
          }}
          disabled={isBuilding}
          className="w-full py-4 bg-white text-black font-bold tracking-widest hover:bg-gray-200 active:scale-95 transition-all disabled:opacity-50"
        >
          {isBuilding ? 'BUILDING...' : 'COMPLETE BUILD'}
        </button>
      </div>
    </div>
  );
};

export default Customizer;
