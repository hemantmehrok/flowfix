import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScienceSection: React.FC = () => {
  const benefits = [
    'Reduce Snoring & Improve Sleep Quality',
    'Enhanced O2 Intake & Lung Function',
    'Improved Performance & Recovery',
    'Improved Dental Hygiene',
    'Reduced Dry Mouth & Stay Hydrated',
    'Jaw & Facial Alignment',
    'Supports Overall Digestion',
    'Supports Hormonal Health'
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://i.postimg.cc/vTBC9dP6/6763-A79-D-5-E4-B-4-ED6-BE51-3-C728528-ACF4.png")',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Edge Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-matte-black opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-transparent to-matte-black opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Anatomy Image - Left Side */}
            <div className="w-full lg:w-2/5">
              <div className="relative group transform hover:scale-105 transition-transform duration-700 ease-out sticky top-24">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-royal-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img
                  src="https://i.postimg.cc/XNkwBCFF/D8-CF2-C49-F533-46-D7-87-EB-E4-BA00080-C3-E.png"
                  alt="Nasal breathing anatomy"
                  className="w-full h-auto relative z-10 rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-radial from-transparent to-matte-black/20 rounded-3xl"></div>
              </div>
            </div>

            {/* Benefits List - Right Side */}
            <div className="w-full lg:w-3/5">
              <h3 className="text-3xl font-display font-bold text-white mb-8">
                BENEFITS
              </h3>
              
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 group transform hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-royal-blue-900/50 rounded-full flex items-center justify-center group-hover:bg-royal-blue-800/50 transition-colors">
                      <Check size={16} className="text-royal-blue-400" />
                    </div>
                    <p className="text-white text-lg">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-12">
                <Link 
                  to="/learn-more-benefits"
                  className="relative group inline-flex items-center"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-royal-blue-500 to-royal-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <div className="relative px-8 py-4 bg-royal-blue-600 rounded-lg leading-none flex items-center">
                    <span className="text-white font-semibold text-lg">Learn More</span>
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;