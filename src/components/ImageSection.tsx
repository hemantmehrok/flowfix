import React, { useEffect, useState } from 'react';

const ImageSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[120vh] w-full overflow-hidden">
      <div className={`w-full h-full transition-all duration-1500 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
      }`}>
        {/* Image Container with Shine Effect */}
        <div className="relative w-full h-full group">
          <img
            src="https://i.postimg.cc/PxTSmMsc/temp-Image2bf-WZi.avif"
            alt="FlowFix lifestyle"
            className="w-full h-full object-cover scale-105 transition-transform duration-700 group-hover:scale-100"
          />
          
          {/* Shine Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full"></div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-royal-blue-600/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;