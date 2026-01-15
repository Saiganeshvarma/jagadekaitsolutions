import React from 'react';
import { Facebook, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import logo from '../jagadeka_logo.jpg';

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
                <img src={logo} alt="Jagadeka Smart Solutions" className="h-8 w-auto rounded-lg" />
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
              <a
                href="https://wa.me/919618300669?text= Can i get more info"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
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
              <a
                href="https://maps.app.goo.gl/2fCqE86NEMNCe7QSA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm group-hover:text-orange-400 transition-colors">
                    <strong className="text-white group-hover:text-orange-400 transition-colors">Reach Us:</strong> <br />
                    135-14-718, Ground Floor Dwaraka Nagar, 12th Ln, Dwaraka Nagar, Guntur, Andhra Pradesh 522034
                  </p>
                </div>
              </a>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+919618300669" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  +91 96183 00669
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