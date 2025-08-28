import React from 'react';
import { Server, Shield, Network, Wifi, Camera, HardDrive, Sparkles, ArrowRight } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: Server,
      title: 'Servers',
      description: 'Enterprise-grade rack and tower servers for all workload demands',
      brands: 'Dell, HPE, IBM, Lenovo, Supermicro',
      gradient: 'from-orange-400 via-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      borderGradient: 'from-orange-200 to-orange-300'
    },
    {
      icon: Shield,
      title: 'Firewalls',
      description: 'Next-generation firewalls with advanced threat protection',
      brands: 'Fortinet, Sophos, SonicWall, Palo Alto, Check Point',
      gradient: 'from-gray-400 via-gray-500 to-gray-600',
      bgGradient: 'from-gray-50 to-gray-100',
      borderGradient: 'from-gray-200 to-gray-300'
    },
    {
      icon: Network,
      title: 'Network Switches',
      description: 'Managed and unmanaged switches for all network scales',
      brands: 'Cisco, HPE, D-Link, Netgear, Ubiquiti',
      gradient: 'from-orange-500 via-orange-600 to-orange-700',
      bgGradient: 'from-orange-50 to-orange-100',
      borderGradient: 'from-orange-200 to-orange-300'
    },
    {
      icon: Wifi,
      title: 'Wi-Fi Access Points',
      description: 'High-performance wireless access points and controllers',
      brands: 'Cisco, Aruba, Ruckus, Ubiquiti, EnGenius',
      gradient: 'from-gray-500 via-gray-600 to-gray-700',
      bgGradient: 'from-gray-50 to-gray-100',
      borderGradient: 'from-gray-200 to-gray-300'
    },
    {
      icon: Camera,
      title: 'CCTV & Biometric',
      description: 'IP cameras, DVR/NVR systems, and biometric access control',
      brands: 'Hikvision, Dahua, Axis, Bosch, ZKTeco',
      gradient: 'from-orange-600 via-orange-700 to-orange-800',
      bgGradient: 'from-orange-50 to-orange-100',
      borderGradient: 'from-orange-200 to-orange-300'
    },
    {
      icon: HardDrive,
      title: 'Racks & Accessories',
      description: 'Server racks, cable management, and data center accessories',
      brands: 'APC, Legrand, Panduit, Schneider Electric, Rittal',
      gradient: 'from-gray-600 via-gray-700 to-gray-800',
      bgGradient: 'from-gray-50 to-gray-100',
      borderGradient: 'from-gray-200 to-gray-300'
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Product Portfolio
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Products We Deploy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Multi-vendor expertise ensuring you get the best solution for your specific requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${category.bgGradient} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-gradient-to-r ${category.borderGradient}`}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.borderGradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}></div>
                
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="border-t-2 border-gradient-to-r from-orange-200 to-gray-200 pt-6">
                  <p className="text-sm text-orange-600 font-semibold mb-2">Brands we integrate:</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{category.brands}</p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-6 h-6 text-orange-500" />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-orange-300 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 right-8 w-4 h-4 bg-gray-300 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-orange-50 via-white to-gray-50 border-2 border-orange-200 rounded-3xl p-12 max-w-4xl mx-auto shadow-xl">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Need a Custom Configuration?
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Our engineers can design and configure solutions tailored to your specific requirements, budget, and timeline.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 group"
            >
              Talk to an Engineer
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;