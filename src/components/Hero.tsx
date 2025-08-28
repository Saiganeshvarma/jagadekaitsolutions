import React from 'react';
import { ArrowRight, Download, CheckCircle, Star, MapPin, Zap, Shield, Award } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-gray-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                End-to-End IT Solutions
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                IT Infrastructure &{' '}
                <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                  Security
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Servers, Networks, Wi-Fi, Firewalls & CCTV—delivered with 
                <span className="text-orange-600 font-semibold"> multi-vendor expertise</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center"
              >
                Request a Solution
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center group">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Company Profile
              </button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center bg-gradient-to-r from-green-50 to-green-100 text-green-800 px-4 py-3 rounded-2xl border border-green-200 shadow-sm">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-semibold">ISO Certified</span>
              </div>
              <div className="flex items-center bg-gradient-to-r from-orange-50 to-orange-100 text-orange-800 px-4 py-3 rounded-2xl border border-orange-200 shadow-sm">
                <Star className="w-5 h-5 mr-2 fill-current" />
                <span className="font-semibold">4.8★ Rated</span>
              </div>
              <div className="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 px-4 py-3 rounded-2xl border border-gray-200 shadow-sm">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-semibold">Hyderabad • Vijayawada • Guntur</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Server Infrastructure"
                className="w-full h-80 object-cover rounded-2xl"
              />
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm font-medium opacity-90">Support</div>
                </div>
              </div>
            </div>
            
            {/* Bottom Left Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Trusted Partner</div>
                  <div className="text-sm text-gray-600">Enterprise Solutions</div>
                </div>
              </div>
            </div>

            {/* Top Left Floating Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-20 animate-pulse"></div>
            
            {/* Bottom Right Floating Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;