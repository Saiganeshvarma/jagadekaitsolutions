import React from 'react';
import { TrendingUp, Users, Clock, CheckCircle, Sparkles } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: 'Educational Campus Network',
      challenge: 'A multi-branch educational institution with 150 campuses required centralized CCTV, secure and scalable networking, classroom and lab connectivity, data storage, PA systems, and advanced network security',
      solution: 'Implemented centralized surveillance with 5,000+ CCTV cameras, secure campus networks, 2,000+ lab systems, integrated PA systems, and enterprise firewalls with centralized NAS storage.',
      result: 'Achieved unified monitoring across 150 branches, strengthened cybersecurity, improved data reliability, standardized IT infrastructure, and enhanced the overall user experience.',
      icon: Users,
      metric: '150+',
      metricLabel: 'Campuses Connected',
      gradient: 'from-orange-400 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      title: 'Corporate Data Center Migration',
      challenge: 'Growing software company needed to migrate from shared hosting to dedicated infrastructure.',
      solution: 'Designed and deployed redundant server architecture with automated backup and monitoring.',
      result: '40% performance improvement and 60% reduction in downtime incidents.',
      icon: TrendingUp,
      metric: '40%',
      metricLabel: 'Performance Boost',
      gradient: 'from-gray-400 to-gray-600',
      bgGradient: 'from-gray-50 to-gray-100'
    },
    {
      title: 'Hospital Security Upgrade',
      challenge: 'Regional hospital required comprehensive security system upgrade for patient and data protection.',
      solution: 'Integrated CCTV, access control, and network security with HIPAA-compliant configurations.',
      result: 'Enhanced security compliance and rapid incident response capabilities.',
      icon: CheckCircle,
      metric: '24/7',
      metricLabel: 'Security Monitoring',
      gradient: 'from-orange-500 to-orange-700',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      title: 'Manufacturing IoT Integration',
      challenge: 'Factory needed to connect 200+ IoT sensors for real-time production monitoring.',
      solution: 'Implemented industrial networking with edge computing and centralized dashboard.',
      result: '25% increase in operational efficiency and predictive maintenance capabilities.',
      icon: Clock,
      metric: '200+',
      metricLabel: 'IoT Devices',
      gradient: 'from-gray-500 to-gray-700',
      bgGradient: 'from-gray-50 to-gray-100'
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Proven Results</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real results from our IT infrastructure deployments across different industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => {
            const IconComponent = caseStudy.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${caseStudy.bgGradient} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50`}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${caseStudy.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`}></div>

                <div className="flex items-start justify-between mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${caseStudy.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{caseStudy.metric}</div>
                    <div className="text-sm text-gray-600 font-medium">{caseStudy.metricLabel}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-orange-600 transition-colors duration-300">
                  {caseStudy.title}
                </h3>

                <div className="space-y-6">
                  <div className="bg-white/60 rounded-2xl p-4 border border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Challenge
                    </h4>
                    <p className="text-red-700 text-sm leading-relaxed">{caseStudy.challenge}</p>
                  </div>

                  <div className="bg-white/60 rounded-2xl p-4 border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Solution
                    </h4>
                    <p className="text-blue-700 text-sm leading-relaxed">{caseStudy.solution}</p>
                  </div>

                  <div className="bg-white/60 rounded-2xl p-4 border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Result
                    </h4>
                    <p className="text-green-700 text-sm leading-relaxed font-medium">{caseStudy.result}</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-orange-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gray-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default CaseStudies;