import React from 'react';
import { GraduationCap, Building2, Heart, Factory, ShoppingBag, Sparkles, CheckCircle } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Campus-wide Wi-Fi, student management systems, and digital classrooms with reliable connectivity.',
      benefits: ['Campus-wide connectivity', 'Student portal systems', 'Classroom technology', 'Secure networks'],
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
    }
  ];

  return (
    <section id="industries" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Industry Expertise
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tailored IT infrastructure solutions for diverse business sectors with industry-specific expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${industry.bgGradient} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50`}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${industry.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`}></div>
                
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="space-y-3">
                  {industry.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-3 group-hover:text-orange-600 transition-colors" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-orange-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gray-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-3xl p-12 text-white max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl"></div>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">
                Don't See Your Industry?
              </h3>
              <p className="text-gray-100 mb-8 leading-relaxed text-lg max-w-3xl mx-auto">
                We've successfully deployed IT infrastructure across many other sectors. Let's discuss how we can address your specific industry requirements.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Discuss Your Requirements
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;