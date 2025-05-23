import React, { useState } from 'react';
import { Star, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    'https://i.postimg.cc/m212xYJK/temp-Imageoc-FKDy.avif',
    'https://i.postimg.cc/v8zSQCFV/temp-Image-I9i-Qog.avif',
    'https://i.postimg.cc/H884LxNc/temp-Imageak-Uit-Q.avif',
    'https://i.postimg.cc/Mpy6HWWD/temp-Image-Lx-Hp-QZ.avif'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-gradient-to-b from-matte-black to-royal-blue-900/30 py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-royal-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-royal-blue-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-sm mx-auto">
          <Link 
            to="/product"
            className="block bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-royal-blue-500/50 shadow-xl"
          >
            {/* Image Carousel */}
            <div className="relative">
              <div className="relative h-80 overflow-hidden">
                {images.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`FlowFix™ Magnetic Nasal Strip - View ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                      currentImage === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentImage(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentImage === index 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-royal-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                  BEST SELLER
                </span>
                <span className="bg-gold-500 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                  SALE
                </span>
              </div>
            </div>
            
            <div className="p-6">
              {/* Rating */}
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              
              {/* Title and Tagline */}
              <h3 className="text-xl font-bold text-white mb-1">FlowFix™ Magnetic Nasal Strip</h3>
              <p className="text-sm text-gray-400 mb-4">30-Day Supply – Premium Snore Reduction & Breathing Aid</p>
              
              {/* Price */}
              <div className="mb-4">
                <span className="text-sm text-gray-400 line-through mr-2">₹1,499</span>
                <span className="text-2xl font-bold text-white">₹1,199</span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-6">
                Includes 4 magnetic nose clips, 30 adhesive tabs, and a magnetic tool for application. Designed for enhanced airflow, better sleep, and athletic performance.
              </p>
              
              {/* Buy Now Button */}
              <a
                href="https://rzp.io/rzp/spOthHZh"
                className="w-full bg-royal-blue-600 hover:bg-royal-blue-500 text-white py-3 rounded-lg transition-all flex items-center justify-center gap-2 group"
                target="_blank"
              >
                <span className="font-semibold">Buy Now</span>
              </a>

              {/* Trial Info */}
              <p className="text-sm text-gray-400 text-center mt-3">30-Day Risk-Free Trial</p>
              <p className="text-sm text-gray-400 text-center">Free Shipping Across India</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;