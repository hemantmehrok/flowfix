import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 92;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className={`w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-matte-black/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-display font-bold bg-gradient-to-r from-white to-gold-300 bg-clip-text text-transparent">
            FlowFix
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-12">
            <div className="flex items-center justify-center gap-12">
              <a href="/" className="text-gray-200 hover:text-royal-blue-400 transition-colors whitespace-nowrap">Home</a>
              <a href="#benefits-section" onClick={handleNavClick} className="text-gray-200 hover:text-royal-blue-400 transition-colors whitespace-nowrap">Benefits</a>
              <a href="#how-it-works" onClick={handleNavClick} className="text-gray-200 hover:text-royal-blue-400 transition-colors whitespace-nowrap">How It Works</a>
              <a href="#testimonials" className="text-gray-200 hover:text-royal-blue-400 transition-colors whitespace-nowrap">Reviews</a>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="/product#order"
              className="bg-royal-blue-600 hover:bg-royal-blue-500 text-white px-8 py-2 rounded-lg transition-all whitespace-nowrap"
              target="_self"
            >
              Buy Now
            </a>
            <button className="relative text-white hover:text-gold-400 transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-gold-500 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-matte-black/95 backdrop-blur-sm mt-4 rounded-lg border border-gray-800">
            <div className="py-4 space-y-4">
              <a href="/" className="block px-4 py-2 text-gray-200 hover:text-royal-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#benefits-section" className="block px-4 py-2 text-gray-200 hover:text-royal-blue-400 transition-colors" onClick={handleNavClick}>Benefits</a>
              <a href="#how-it-works" className="block px-4 py-2 text-gray-200 hover:text-royal-blue-400 transition-colors" onClick={handleNavClick}>How It Works</a>
              <a href="#testimonials" className="block px-4 py-2 text-gray-200 hover:text-royal-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Reviews</a>
              <div className="px-4 pt-4 flex items-center justify-between border-t border-gray-800">
                <a 
                  href="/product#order"
                  className="bg-royal-blue-600 hover:bg-royal-blue-500 text-white px-6 py-2 rounded-lg transition-all"
                  target="_self"
                >
                  Buy Now
                </a>
                <button className="relative text-white hover:text-gold-400 transition-colors">
                  <ShoppingCart size={24} />
                  <span className="absolute -top-2 -right-2 bg-gold-500 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;