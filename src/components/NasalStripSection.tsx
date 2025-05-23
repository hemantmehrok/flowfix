import React from 'react';
import { ArrowRight } from 'lucide-react';

const NasalStripSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: 'url("https://i.postimg.cc/YSvLCXB2/temp-Imagedy9-OXf.avif")',
        }}
      >
        {/* Enhanced Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">
          {/* Image */}
          <div className="w-full md:w-auto flex-shrink-0 group transform hover:scale-105 transition-transform duration-700 ease-out">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-royal-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img
                src="https://i.postimg.cc/YqRd1Vcp/C9-E1-BE79-1-F56-4-F3-C-B31-F-91-AE77-DDA935.png"
                alt="Nasal Strip"
                className="w-full md:w-[300px] relative z-10"
              />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Better Breathing – 
              <span className="block mt-2">Nasal Strips</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Never thought you had trouble breathing through your nose?
              Our nasal strips gently lift and widen your nasal passages, delivering instant relief and better oxygen intake for peak performance and sleep.
            </p>
            <a 
              href="https://formspree.io/f/mbloepjw"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-white to-white/80 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-8 py-4 bg-white rounded-lg leading-none flex items-center">
                <span className="text-matte-black font-semibold text-lg">SHOP NOW</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NasalStripSection;