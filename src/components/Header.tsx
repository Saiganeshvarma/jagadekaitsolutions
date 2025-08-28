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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Jagadeka
              </div>
              <div className="text-xs text-gray-500 font-medium -mt-1 hidden xs:block">Smart Solutions</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 hover:scale-105 text-sm xl:text-base">
              Services
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 hover:scale-105 text-sm xl:text-base">
              Products
            </button>
            <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 hover:scale-105 text-sm xl:text-base">
              Industries
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 hover:scale-105 text-sm xl:text-base">
              About
            </button>
            <button onClick={() => scrollToSection('support')} className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 hover:scale-105 text-sm xl:text-base">
              Support
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-200 hover:scale-105 text-sm xl:text-base">
              Contact
            </button>
          </nav>

          {/* Desktop Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a href="tel:+919876543210" className="flex items-center text-orange-600 hover:text-orange-700 transition-colors group">
              <Phone className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium hidden xl:inline">+91 98765 43210</span>
              <span className="text-sm font-medium xl:hidden">+91 98765 43210</span>
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm xl:text-base"
            >
              Request Solution
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors p-2 rounded-lg hover:bg-orange-50"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-orange-100 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-4 space-y-1">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200 text-base font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200 text-base font-medium">
                Products
              </button>
              <button onClick={() => scrollToSection('industries')} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200 text-base font-medium">
                Industries
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200 text-base font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('support')} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200 text-base font-medium">
                Support
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200 text-base font-medium">
                Contact
              </button>
              
              {/* Mobile Contact & CTA Section */}
              <div className="px-4 py-4 space-y-3 border-t border-orange-100 mt-3 bg-orange-50/50 rounded-xl">
                <a href="tel:+919876543210" className="flex items-center text-orange-600 hover:text-orange-700 transition-colors p-2 rounded-lg hover:bg-orange-100">
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="text-base font-medium">+91 98765 43210</span>
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg text-base"
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