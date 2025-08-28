import React from 'react';
import { HeadphonesIcon, Clock, CheckCircle, ExternalLink, Sparkles, Shield, Zap } from 'lucide-react';

const Support = () => {
  const supportTiers = [
    {
      title: 'Standard Support',
      responseTime: '4 hours',
      availability: 'Business Hours',
      features: ['Email support', 'Ticket tracking', 'Knowledge base access', 'Monthly reports'],
      gradient: 'from-gray-400 to-gray-600',
      bgGradient: 'from-gray-50 to-gray-100'
    },
    {
      title: 'Priority Support',
      responseTime: '2 hours',
      availability: 'Extended Hours',
      features: ['Phone support', 'Faster resolution', 'Dedicated account manager', 'Quarterly reviews'],
      gradient: 'from-orange-400 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      popular: true
    },
    {
      title: 'Critical Support',
      responseTime: '1 hour',
      availability: '24/7',
      features: ['Immediate response', 'On-site support', 'Proactive monitoring', 'Custom SLA terms'],
      gradient: 'from-orange-600 to-orange-800',
      bgGradient: 'from-orange-50 to-orange-100'
    }
  ];

  return (
    <section id="support" className="py-24 bg-gradient-to-br from-orange-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            24/7 Support
          </div>
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-xl">
            <HeadphonesIcon className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Support & Maintenance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support services to keep your IT infrastructure running smoothly with defined SLAs and proactive monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Support Promise</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-orange-100">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Proactive Monitoring</h4>
                  <p className="text-gray-600">24/7 monitoring of critical systems with automated alerts and preventive maintenance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Defined SLAs</h4>
                  <p className="text-gray-600">Clear service level agreements with guaranteed response times and resolution targets.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-orange-100">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Expert Team</h4>
                  <p className="text-gray-600">Certified engineers with deep expertise across multiple technology platforms.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Transparent Reporting</h4>
                  <p className="text-gray-600">Regular performance reports and maintenance summaries for complete visibility.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border-2 border-orange-200 shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Quick Access
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center mt-4">Need Immediate Help?</h3>
            <div className="space-y-6">
              <a
                href="https://jagadeka.freshdesk.com/support/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <HeadphonesIcon className="w-5 h-5 mr-2" />
                Raise a Ticket
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-center text-sm text-gray-600 bg-gray-50 rounded-2xl p-4">
                <p className="font-medium mb-2">Access our Freshdesk portal for 24/7 ticket management</p>
                <div className="flex items-center justify-center space-x-4 text-xs">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>24/7 Portal Access</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full" />
                  <div className="text-orange-600 font-medium">
                    Average Response: 2 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-16">Support Tiers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${tier.bgGradient} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${tier.popular ? 'border-orange-300 scale-105' : 'border-white/50'}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${tier.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <HeadphonesIcon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{tier.title}</h4>
                  <div className="text-4xl font-bold text-orange-600 mb-2">{tier.responseTime}</div>
                  <div className="text-sm text-gray-600 mb-4">Response Time</div>
                  <div className="text-sm text-gray-600 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {tier.availability}
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-orange-200 rounded-full opacity-20"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-gray-200 rounded-full opacity-20"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white border-2 border-orange-200 rounded-3xl p-12 max-w-4xl mx-auto shadow-xl">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <HeadphonesIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Questions About Support?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our support team is ready to discuss the right support tier for your organization and answer any questions about our service offerings.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Contact Support Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;