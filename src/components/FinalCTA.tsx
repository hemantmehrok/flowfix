import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-matte-black py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-royal-blue-600/10 rounded-full blur-3xl animate-breathe"></div>
          <div className="absolute inset-[25%] bg-royal-blue-500/10 rounded-full blur-3xl animate-breathe delay-300"></div>
          <div className="absolute inset-[50%] bg-royal-blue-400/10 rounded-full blur-3xl animate-breathe delay-700"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
            You Deserve to
            <span className="block bg-gradient-to-r from-royal-blue-400 to-white bg-clip-text text-transparent">
              Breathe Freely
            </span>
          </h2>

          <div className="flex justify-center mt-12">
            <a 
              href="https://flowfixofficial.myshopify.com/products/flowfix-magnetic-nasal-dilator-sleep-breathe-better-instantly"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-royal-blue-500 to-royal-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative px-12 py-4 bg-royal-blue-600 rounded-lg leading-none flex items-center">
                <span className="text-white font-semibold text-lg">Get FlowFix Now</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          <p className="text-gray-400 mt-8">
            Experience the difference with our 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;