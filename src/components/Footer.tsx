import React from 'react';
import { Facebook, Mail, Phone, MapPin, ExternalLink, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                    Jagadeka
                  </div>
                  <div className="text-xs text-gray-400 font-medium -mt-1">Smart Solutions</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                End-to-end IT infrastructure and security solutions delivered with multi-vendor expertise across Telangana and Andhra Pradesh.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/JagadekaSmartSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-orange-400">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-left group flex items-center"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-left group flex items-center"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('industries')}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-left group flex items-center"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-left group flex items-center"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-orange-400">Our Services</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center">
                <div className="w-1 h-1 bg-orange-500 rounded-full mr-3"></div>
                Server & Data Center
              </li>
              <li className="flex items-center">
                <div className="w-1 h-1 bg-orange-500 rounded-full mr-3"></div>
                Network Services
              </li>
              <li className="flex items-center">
                <div className="w-1 h-1 bg-orange-500 rounded-full mr-3"></div>
                Security & Surveillance
              </li>
              <li className="flex items-center">
                <div className="w-1 h-1 bg-orange-500 rounded-full mr-3"></div>
                Wi-Fi & Campus Networks
              </li>
              <li className="flex items-center">
                <div className="w-1 h-1 bg-orange-500 rounded-full mr-3"></div>
                Managed IT Services
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-orange-400">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Hyderabad HQ:</strong><br />
                    B-811, Aakriti Honey Dew,<br />
                    Tellapur, Telangana 500019
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+919876543210" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:info@jagadeka.com" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  info@jagadeka.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Support & Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href="https://jagadeka.freshdesk.com/support/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-orange-400 hover:text-orange-300 transition-colors group"
              >
                <span className="font-medium">Support Portal</span>
                <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  ISO Certified
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  4.8★ Customer Rating
                </span>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Jagadeka Smart Solutions Pvt. Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;