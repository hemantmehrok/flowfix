import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Moon, Activity, Check } from 'lucide-react';

const Benefits: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-matte-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-royal-blue-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
              One Strip.
              <span className="block text-royal-blue-400">Two Outcomes.</span>
            </h1>
            
            {/* Glowing Divider */}
            <div className="relative w-24 h-1 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-500 to-royal-blue-400"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-500 to-royal-blue-400 blur"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Whether you need deeper sleep or stronger performance — FlowFix delivers.
              <span className="block mt-2">No pills. No pressure. Just breath.</span>
            </p>

            <button className="relative group inline-flex items-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-royal-blue-500 to-royal-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative px-8 py-4 bg-royal-blue-600 rounded-lg leading-none flex items-center">
                <span className="text-white font-semibold text-lg">Discover More</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-matte-black to-transparent"></div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 relative" ref={gridRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Sleep Benefits */}
            <div className={`bg-gradient-to-br from-gray-900/50 to-royal-blue-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="w-20 h-20 bg-royal-blue-900/50 rounded-xl flex items-center justify-center mb-8">
                <Moon size={40} className="text-royal-blue-400 filter drop-shadow-[0_0_8px_rgba(92,141,255,0.5)]" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">For Better Sleep</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check size={20} className="text-royal-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Reduces snoring naturally</p>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-royal-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Deeper, more restful sleep</p>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-royal-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Less dry mouth and blocked nose</p>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-royal-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">No side effects, no discomfort</p>
                </li>
              </ul>
            </div>

            {/* Performance Benefits */}
            <div className={`bg-gradient-to-br from-gray-900/50 to-royal-blue-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="w-20 h-20 bg-royal-blue-900/50 rounded-xl flex items-center justify-center mb-8">
                <Activity size={40} className="text-royal-blue-400 filter drop-shadow-[0_0_8px_rgba(92,141,255,0.5)]" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">For Peak Performance</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check size={20} className="text-royal-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Opens airways for better oxygen intake</p>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-royal-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Improves focus and stamina</p>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-royal-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Helps with endurance and fast recovery</p>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-royal-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Favored by runners, lifters & pros</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <div className="absolute inset-0 bg-royal-blue-600/10 rounded-full blur-3xl animate-breathe"></div>
            <div className="absolute inset-[25%] bg-royal-blue-500/10 rounded-full blur-3xl animate-breathe delay-300"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-8">
              Ready to transform your breathing?
            </h2>
            <button className="relative group inline-flex items-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-royal-blue-500 to-royal-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative px-8 py-4 bg-royal-blue-600 rounded-lg leading-none flex items-center">
                <span className="text-white font-semibold text-lg">Get FlowFix Now</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;