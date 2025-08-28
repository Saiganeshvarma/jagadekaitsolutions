import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Sparkles } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Jagadeka
              </div>
              <div className="text-xs text-gray-500 font-medium -mt-1">Smart Solutions</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 hover:scale-105">
              Services
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 hover:scale-105">
              Products
            </button>
            <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 hover:scale-105">
              Industries
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 hover:scale-105">
              About
            </button>
            <button onClick={() => scrollToSection('support')} className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 hover:scale-105">
              Support
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 hover:scale-105">
              Contact
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+919876543210" className="flex items-center text-orange-600 hover:text-orange-700 transition-colors group">
              <Phone className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">+91 98765 43210</span>
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Request Solution
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200">
                Services
              </button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200">
                Products
              </button>
              <button onClick={() => scrollToSection('industries')} className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200">
                Industries
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200">
                About
              </button>
              <button onClick={() => scrollToSection('support')} className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200">
                Support
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200">
                Contact
              </button>
              <div className="px-3 py-2 space-y-3 border-t border-orange-100 mt-2">
                <a href="tel:+919876543210" className="flex items-center text-orange-600 hover:text-orange-700 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">+91 98765 43210</span>
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg"
                >
                  Request Solution
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