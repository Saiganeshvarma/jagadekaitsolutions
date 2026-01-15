import { ArrowRight, Download, Star, MapPin, Zap, Shield, Award } from 'lucide-react';

import heroFinal from '../hero-final.jpg';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 sm:py-16 lg:py-20 xl:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-4 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                End-to-End IT Solutions
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block text-gray-900">Next-Gen</span>
                <span className="block text-gray-900">IT Infrastructure</span>
                <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                  & Cybersecurity
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Cloud, Networking, Wi-Fi, Firewalls, CCTV—delivered with
                <span className="text-orange-600 font-semibold"> expert multi-vendor support.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-orange-500 text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center group">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Brochure
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <div className="flex items-center bg-gradient-to-r from-green-50 to-green-100 text-green-800 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-green-200 shadow-sm">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="font-semibold text-sm sm:text-base">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center bg-gradient-to-r from-orange-50 to-orange-100 text-orange-800 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-orange-200 shadow-sm">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2 fill-current" />
                <span className="font-semibold text-sm sm:text-base">5.0 Star Rated</span>
              </div>
              <div className="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="font-semibold text-sm sm:text-base">Hyderabad • Vijayawada • Guntur</span>
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="relative order-1 lg:order-2">
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl transition-transform duration-500">
              <img
                src={heroFinal}
                alt="Server Infrastructure"
                className="w-full h-48 sm:h-64 lg:h-80 object-contain rounded-xl sm:rounded-2xl"
              />

              {/* Floating Badge */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl transform rotate-6 sm:rotate-12 hover:rotate-6 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold">24/7</div>
                  <div className="text-xs sm:text-sm font-medium opacity-90">Global Support</div>
                </div>
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 transform -rotate-2 sm:-rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm sm:text-base">Trusted Partner</div>
                  <div className="text-xs sm:text-sm text-gray-600">Enterprise Solutions</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;