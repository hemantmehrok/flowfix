import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="bg-matte-black py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-royal-blue-900/20 to-transparent"></div>
        <div className="absolute -top-40 right-0 w-96 h-96 bg-royal-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-royal-blue-700/10 rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter Signup */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Stay Updated with FlowFix
          </h3>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for exclusive offers, breathing tips, and product updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow py-3 px-4 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-royal-blue-500"
            />
            <button className="bg-royal-blue-600 hover:bg-royal-blue-500 text-white py-3 px-6 rounded-md transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;