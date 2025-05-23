import React from 'react';
import Layout from '../layouts/Layout';

const HowItWorks: React.FC = () => {
  return (
    <Layout>
      <div 
        className="min-h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/FK1Zjg31/temp-Imagey-Eo-Tz-M.avif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-16">
              How It Works
            </h1>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold text-white mb-3">
                  Peel & Place
                </h2>
                <p className="text-gray-200">
                  Gently position FlowFix on the bridge of your nose.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold text-white mb-3">
                  Magnetic Expansion
                </h2>
                <p className="text-gray-200">
                  Built-in magnets gently open nasal passages.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold text-white mb-3">
                  Effortless Breathing
                </h2>
                <p className="text-gray-200">
                  Enjoy smoother airflow, deeper sleep, and better performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;