import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-matte-black text-gray-300 relative overflow-hidden">
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-blue-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <div className="mb-5">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-white to-gold-300 bg-clip-text text-transparent">
                FlowFix
              </span>
            </div>
            <p className="mb-6 text-gray-400">
              Premium magnetic nasal strips for optimal breathing, better sleep, and enhanced athletic performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-royal-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} className="hover:filter hover:drop-shadow-[0_0_8px_rgba(92,141,255,0.5)]" />
              </a>
              <a href="#" className="text-gray-400 hover:text-royal-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} className="hover:filter hover:drop-shadow-[0_0_8px_rgba(92,141,255,0.5)]" />
              </a>
              <a href="#" className="text-gray-400 hover:text-royal-blue-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} className="hover:filter hover:drop-shadow-[0_0_8px_rgba(92,141,255,0.5)]" />
              </a>
              <a href="#" className="text-gray-400 hover:text-royal-blue-400 transition-colors" aria-label="YouTube">
                <Youtube size={20} className="hover:filter hover:drop-shadow-[0_0_8px_rgba(92,141,255,0.5)]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#benefits" className="hover:text-royal-blue-400 transition-colors">Why FlowFix</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-royal-blue-400 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-royal-blue-400 transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-royal-blue-400 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-royal-blue-400 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-royal-blue-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-royal-blue-400 transition-colors">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-royal-blue-400 transition-colors">Return Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={20} className="text-royal-blue-400 mr-3" />
                <a href="mailto:contact@flowfixofficial.com" className="hover:text-royal-blue-400 transition-colors">contact@flowfixofficial.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-royal-blue-400 mr-3" />
                <a href="tel:+919877172569" className="hover:text-royal-blue-400 transition-colors">+91 98771-72569</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FlowFix. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-royal-blue-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-royal-blue-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-royal-blue-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;