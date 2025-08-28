import React, { useState } from 'react';
import { Server, Network, Shield, Wifi, Settings, ArrowRight, X, Sparkles } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Server,
      title: 'Server & Data Center',
      description: 'Physical and virtual server deployment, configuration, and management for scalable enterprise infrastructure.',
      details: {
        problem: 'Organizations need reliable, scalable server infrastructure that can handle growing data demands.',
        approach: 'We design and deploy enterprise-grade server solutions with redundancy and optimization.',
        deliverables: ['Server hardware selection', 'Virtual machine setup', 'Storage configuration', 'Backup solutions'],
        outcomes: 'Reduced downtime, improved performance, and future-ready scalability.'
      },
      gradient: 'from-orange-400 via-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      icon: Network,
      title: 'Network Services',
      description: 'Comprehensive switching, routing, structured cabling, and wireless network infrastructure.',
      details: {
        problem: 'Complex networking requirements demand expert design and flawless implementation.',
        approach: 'Multi-vendor expertise ensures optimal network architecture tailored to your needs.',
        deliverables: ['Network design', 'Structured cabling', 'Switch/router configuration', 'Performance optimization'],
        outcomes: 'Seamless connectivity, improved bandwidth utilization, and network reliability.'
      },
      gradient: 'from-gray-400 via-gray-500 to-gray-600',
      bgGradient: 'from-gray-50 to-gray-100'
    },
    {
      icon: Shield,
      title: 'Security & Surveillance',
      description: 'Advanced firewalls, access control systems, CCTV, and biometric security solutions.',
      details: {
        problem: 'Modern threats require comprehensive security layers protecting both digital and physical assets.',
        approach: 'Integrated security systems combining network protection with physical surveillance.',
        deliverables: ['Firewall deployment', 'Access control systems', 'CCTV installation', 'Biometric integration'],
        outcomes: 'Enhanced security posture, compliance readiness, and peace of mind.'
      },
      gradient: 'from-orange-500 via-orange-600 to-orange-700',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      icon: Wifi,
      title: 'Wi-Fi & Campus Networks',
      description: 'Enterprise-grade wireless solutions for offices, schools, and multi-site campus deployments.',
      details: {
        problem: 'Users expect seamless wireless connectivity across large campuses with no dead zones.',
        approach: 'Strategic access point placement and advanced wireless controllers for optimal coverage.',
        deliverables: ['Site survey', 'Access point installation', 'Controller configuration', 'Coverage optimization'],
        outcomes: 'Reliable campus-wide connectivity, improved user experience, and scalable wireless infrastructure.'
      },
      gradient: 'from-gray-500 via-gray-600 to-gray-700',
      bgGradient: 'from-gray-50 to-gray-100'
    },
    {
      icon: Settings,
      title: 'Ongoing AMC / Managed IT',
      description: 'Proactive monitoring, SLA-backed support, and comprehensive maintenance through our ticketing system.',
      details: {
        problem: 'IT infrastructure requires continuous monitoring and rapid issue resolution to prevent disruptions.',
        approach: 'Proactive managed services with defined SLAs and responsive support through Freshdesk.',
        deliverables: ['24/7 monitoring', 'Preventive maintenance', 'Issue resolution', 'Performance reporting'],
        outcomes: 'Minimized downtime, predictable IT costs, and focus on core business operations.'
      },
      gradient: 'from-orange-600 via-orange-700 to-orange-800',
      bgGradient: 'from-orange-50 to-orange-100'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">What We Do</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            From design to deployment, we architect secure IT infrastructure that scales with your growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-white/50`}
                onClick={() => setSelectedService(index)}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-gray-500/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                
                <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors text-sm sm:text-base">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-orange-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gray-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Service Detail Modal */}
        {selectedService !== null && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl sm:max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${services[selectedService].gradient} flex items-center justify-center shadow-lg`}>
                      {React.createElement(services[selectedService].icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white" })}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{services[selectedService].title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-xl self-start sm:self-auto"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <h4 className="text-base sm:text-lg font-semibold text-red-900 mb-2 sm:mb-3">The Challenge</h4>
                      <p className="text-red-700 text-sm sm:text-base">{services[selectedService].details.problem}</p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <h4 className="text-base sm:text-lg font-semibold text-blue-900 mb-2 sm:mb-3">Our Approach</h4>
                      <p className="text-blue-700 text-sm sm:text-base">{services[selectedService].details.approach}</p>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <h4 className="text-base sm:text-lg font-semibold text-orange-900 mb-3 sm:mb-4">What You Get</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {services[selectedService].details.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center text-orange-700 text-sm sm:text-base">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 sm:mr-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <h4 className="text-base sm:text-lg font-semibold text-green-900 mb-2 sm:mb-3">Results</h4>
                      <p className="text-green-700 mb-4 sm:mb-6 text-sm sm:text-base">{services[selectedService].details.outcomes}</p>
                    </div>

                    <button 
                      onClick={() => {
                        setSelectedService(null);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                    >
                      Get a Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;