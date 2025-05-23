import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-matte-black to-royal-blue-900/30 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-royal-blue-600/10 rounded-full blur-3xl animate-breathe"></div>
          <div className="absolute inset-[25%] bg-royal-blue-500/10 rounded-full blur-3xl animate-breathe delay-300"></div>
          <div className="absolute inset-[50%] bg-royal-blue-400/10 rounded-full blur-3xl animate-breathe delay-700"></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-screen">
        {/* Text Content */}
        <div className={`max-w-3xl text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-none mb-6">
            <span className="block">FlowFix™ —</span>
            <span className="block bg-gradient-to-r from-white to-royal-blue-400 bg-clip-text text-transparent">
              Breathe Like Never Before
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl mx-auto leading-relaxed">
            Magnetic nasal strips that help you sleep deeper and perform harder.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://formspree.io/f/mbloepjw"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 px-8 py-4 rounded-lg leading-none flex items-center overflow-hidden">
                {/* Shine effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="text-white font-semibold text-lg relative z-10">Shop Now</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              </div>
            </a>
            <Link 
              to="/learn-more"
              className="border border-white/30 hover:border-white/80 text-white px-8 py-4 rounded-lg transition-all"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-royal-blue-700 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="ml-3">
                <p className="font-bold text-white">Clinically Tested</p>
                <p className="text-sm text-gray-300">Medical-grade quality</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-royal-blue-700 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/>
                  <path d="M12 8V12L14 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="ml-3">
                <p className="font-bold text-white">Long-Lasting</p>
                <p className="text-sm text-gray-300">8+ hours comfort</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-matte-black to-transparent"></div>
    </section>
  );
};

export default Hero;