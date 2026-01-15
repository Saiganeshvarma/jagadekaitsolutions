import { GraduationCap, Building2, Heart, Factory, ShoppingBag, Sparkles, CheckCircle, Network } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Comprehensive educational technology solutions for modern learning environments with cutting-edge infrastructure.',
      benefits: [
        'Digital & Virtual Class Room Solutions',
        'Interactive Display Panels',
        'Digital Signage Display',
        'Public Addressing Systems',
        'CCTV Surveillance',
        'Campus WIFI',
        'Structured Cabling & Networking',
        'Biometric & Access Control',
        'IP Telephones'
      ],
      gradient: 'from-orange-400 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      icon: Building2,
      title: 'Corporate Offices',
      description: 'Professional office environments with seamless collaboration tools and enterprise security.',
      benefits: ['Conference room solutions', 'Secure file sharing', 'VPN access', 'Unified communications'],
      gradient: 'from-gray-400 to-gray-600',
      bgGradient: 'from-gray-50 to-gray-100'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'HIPAA-compliant networks, patient data security, and reliable medical device connectivity.',
      benefits: ['HIPAA compliance', 'Medical device integration', 'Patient data protection', 'Redundant systems'],
      gradient: 'from-orange-500 to-orange-700',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial-grade networks supporting IoT devices, automation systems, and real-time monitoring.',
      benefits: ['Industrial networking', 'IoT connectivity', 'Process automation', 'Real-time monitoring'],
      gradient: 'from-gray-500 to-gray-700',
      bgGradient: 'from-gray-50 to-gray-100'
    },
    {
      icon: ShoppingBag,
      title: 'Retail',
      description: 'Point-of-sale systems, inventory management, customer Wi-Fi, and security surveillance.',
      benefits: ['POS system integration', 'Inventory tracking', 'Customer analytics', 'Security systems'],
      gradient: 'from-orange-600 to-orange-800',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      icon: Network,
      title: 'Enterprise IT Solutions',
      description: 'Complete IT infrastructure and technology solutions for businesses of all sizes with comprehensive support.',
      benefits: [
        'Network Design and Implementation',
        'Cloud Computing and Migration',
        'Cybersecurity and Data Protection',
        'Firewalls',
        'VPN for Multi Branch and Remote Access',
        'Wireless Point to Point and Point to Multi-point',
        'Biometric Attendance Systems & Access Control',
        'Public Addressing Solutions',
        'CCTV Surveillance Supply & Installation',
        'Servers',
        'Internet Leased Lines',
        'E-Mail & Web Hosting',
        'Video & Audio Conferencing Solutions',
        'Telephones, IP PBX, and Call Center Solutions',
        'Structured Cabling & Networking'
      ],
      gradient: 'from-gray-600 to-gray-800',
      bgGradient: 'from-gray-50 to-gray-100'
    }
  ];

  return (
    <section id="industries" className="py-8 sm:py-12 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-4 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Industry Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Tailored IT infrastructure solutions for Schools, Colleges, Hospitals & Corporates across Hyderabad, Vijayawada & Guntur.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${industry.bgGradient} rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50`}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${industry.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`}></div>

                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {industry.title}
                </h3>

                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {industry.description}
                </p>

                <div className="space-y-2 sm:space-y-3">
                  {industry.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-700 group-hover:text-gray-800 transition-colors">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 mr-2 sm:mr-3 group-hover:text-orange-600 transition-colors flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Floating Elements */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-orange-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gray-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default Industries;