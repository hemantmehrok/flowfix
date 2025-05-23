import React from 'react';
import { Award, FlaskRound as Flask, Users, Leaf } from 'lucide-react';

const ScienceBacking: React.FC = () => {
  return (
    <section className="bg-matte-black py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-royal-blue-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Built on <span className="text-royal-blue-400">Science</span>,<br />
            Backed by <span className="text-royal-blue-400">Results</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Doctor Approved */}
          <div className="group text-center">
            <div className="w-20 h-20 mx-auto bg-royal-blue-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-blue-800/50 transition-all duration-300">
              <Award size={40} className="text-white group-hover:text-royal-blue-400 transition-colors" />
              <div className="absolute inset-0 bg-royal-blue-400/20 blur-xl rounded-2xl group-hover:bg-royal-blue-400/30 transition-all duration-300"></div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Doctor Approved</h3>
            <p className="text-gray-400">Endorsed by leading medical professionals</p>
          </div>

          {/* Lab-Tested */}
          <div className="group text-center">
            <div className="w-20 h-20 mx-auto bg-royal-blue-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-blue-800/50 transition-all duration-300">
              <Flask size={40} className="text-white group-hover:text-royal-blue-400 transition-colors" />
              <div className="absolute inset-0 bg-royal-blue-400/20 blur-xl rounded-2xl group-hover:bg-royal-blue-400/30 transition-all duration-300"></div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Lab-Tested</h3>
            <p className="text-gray-400">Clinically proven effectiveness</p>
          </div>

          {/* Athlete-Trusted */}
          <div className="group text-center">
            <div className="w-20 h-20 mx-auto bg-royal-blue-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-blue-800/50 transition-all duration-300">
              <Users size={40} className="text-white group-hover:text-royal-blue-400 transition-colors" />
              <div className="absolute inset-0 bg-royal-blue-400/20 blur-xl rounded-2xl group-hover:bg-royal-blue-400/30 transition-all duration-300"></div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Athlete-Trusted</h3>
            <p className="text-gray-400">Used by professional athletes</p>
          </div>

          {/* Drug-Free */}
          <div className="group text-center">
            <div className="w-20 h-20 mx-auto bg-royal-blue-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-royal-blue-800/50 transition-all duration-300">
              <Leaf size={40} className="text-white group-hover:text-royal-blue-400 transition-colors" />
              <div className="absolute inset-0 bg-royal-blue-400/20 blur-xl rounded-2xl group-hover:bg-royal-blue-400/30 transition-all duration-300"></div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Drug-Free</h3>
            <p className="text-gray-400">100% natural breathing support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceBacking;