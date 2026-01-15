import React, { useState } from 'react';
import { Network, Shield, Wifi, Settings, ArrowRight, X, Sparkles, Camera, Monitor, Database, Mic2, HardDrive } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Camera,
      title: 'CCTV & Surveillance',
      description: 'High-definition IP cameras, NVRs, and biometric access control for schools, colleges, and offices.',
      details: {
        problem: 'Security threats and unauthorized access require 24/7 monitoring and evidence-grade recording.',
        approach: 'Strategic placement of HD cameras with remote viewing and AI-based analytics.',
        deliverables: ['IP/Analog Cameras', 'NVR/DVR Setup', 'Biometric Access', 'Remote Monitoring App'],
        outcomes: 'Enhanced campus security, theft prevention, and real-time personnel monitoring.'
      },
      gradient: 'from-orange-400 via-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      icon: Monitor,
      title: 'Smart Classroom Solutions',
      description: 'Interactive flat panels, digital boards, and projector systems for modern educational institutions.',
      details: {
        problem: 'Traditional teaching methods lack engagement; schools need digital tools for interactive learning.',
        approach: 'Deploying touch-enabled smart boards and digital content delivery systems.',
        deliverables: ['Interactive Flat Panels', 'Digital Smart Boards', 'Projectors & Screens', 'Audio Integration'],
        outcomes: 'Immersive learning experience, digital content readiness, and modern campus appeal.'
      },
      gradient: 'from-blue-400 via-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: Network,
      title: 'Structured Cabling',
      description: 'Certified Cat6/Fiber optic cabling and server rack organization for reliable enterprise connectivity.',
      details: {
        problem: 'Messy, unorganized cabling leads to network loops, downtime, and difficult maintenance.',
        approach: 'ISO-standard structured cabling with proper labeling, termination, and rack management.',
        deliverables: ['Cat6/Fiber Cabling', 'Server Rack Clean-up', 'Patch Panel Termination', 'Fluke Testing'],
        outcomes: 'Organized reliable network, easy troubleshooting, and high-speed data transfer.'
      },
      gradient: 'from-gray-400 via-gray-500 to-gray-600',
      bgGradient: 'from-gray-50 to-gray-100'
    },
    {
      icon: Database,
      title: 'Computer Lab Setup',
      description: 'End-to-end setup of computer labs including desktops, thin clients, networking, and furniture.',
      details: {
        problem: 'Setting up a new lab requires coordinating hardware, power, furniture, and networking.',
        approach: 'Turnkey lab solutions handling everything from electricals to software installation.',
        deliverables: ['Desktop/Thin Clients', 'Lab Networking', 'Power Backup (UPS)', 'Furniture Layout'],
        outcomes: 'Ready-to-use modern computer labs optimized for exams and practical sessions.'
      },
      gradient: 'from-orange-500 via-orange-600 to-orange-700',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      icon: Wifi,
      title: 'Campus Wi-Fi & Networking',
      description: 'Seamless wireless coverage for large campuses, hostels, and corporate buildings.',
      details: {
        problem: 'Dead zones and slow internet in large campuses affect productivity and learning.',
        approach: 'Heat-map based AP placement with controller-based roaming for seamless connectivity.',
        deliverables: ['Enterprise Access Points', 'Wireless Controller', 'Point-to-Point Links', 'Load Balancing'],
        outcomes: '100% Wi-Fi coverage, seamless roaming, and high-speed internet access everywhere.'
      },
      gradient: 'from-blue-500 via-blue-600 to-blue-700',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: Shield,
      title: 'Network Security & Firewall',
      description: 'Advanced firewalls (Sophos/Fortinet) to protect data from cyber threats and ransomware.',
      details: {
        problem: 'Cyberattacks and ransomware threaten sensitive school and corporate data.',
        approach: 'Deploying Next-Gen Firewalls (NGFW) with intrusion prevention and web filtering.',
        deliverables: ['Firewall Installation', 'VPN Configuration', 'Web Filtering', 'Ransomware Protection'],
        outcomes: 'Secured network perimeter, safe browsing for students, and data protection.'
      },
      gradient: 'from-red-500 via-red-600 to-red-700',
      bgGradient: 'from-red-50 to-red-100'
    },
    {
      icon: Mic2,
      title: 'Public Address (PA) Systems',
      description: 'Crystal clear audio systems for auditoriums, assembly halls, and emergency announcements.',
      details: {
        problem: 'Poor audio quality in large halls and lack of centralized announcement systems.',
        approach: 'Acoustically designed speaker layout with zone-based paging amplifiers.',
        deliverables: ['Ceiling/Wall Speakers', 'Amplifiers & Mixers', 'Zone Paging Mic', 'Auditorium Sound'],
        outcomes: 'Clear communication, effective emergency alerts, and professional event audio.'
      },
      gradient: 'from-gray-500 via-gray-600 to-gray-700',
      bgGradient: 'from-gray-50 to-gray-100'
    },
    {
      icon: HardDrive,
      title: 'Server & Storage Solutions',
      description: 'On-premise servers and NAS storage for centralized data management and backups.',
      details: {
        problem: 'Scattered data and risk of data loss due to hardware failure.',
        approach: 'Centralized server/storage implementation with automated backup policies.',
        deliverables: ['Windows/Linux Servers', 'NAS/SAN Storage', 'Active Directory', 'Automated Backups'],
        outcomes: 'Centralized data control, user management, and disaster recovery readiness.'
      },
      gradient: 'from-orange-600 via-orange-700 to-orange-800',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      icon: Settings,
      title: 'Annual Maintenance (AMC)',
      description: 'Comprehensive IT support contracts to ensure your infrastructure runs 24/7 without downtime.',
      details: {
        problem: 'Unexpected breakdown of hardware causes work stoppage and expensive repairs.',
        approach: 'Preventive maintenance schedule with SLA-based on-site support.',
        deliverables: ['On-site Support', 'Preventive Maintenance', 'Remote Level 1 Support', 'Spare Part Replacement'],
        outcomes: 'Maximized uptime, distinct IT budget, and extended hardware lifespan.'
      },
      gradient: 'from-green-500 via-green-600 to-green-700',
      bgGradient: 'from-green-50 to-green-100'
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