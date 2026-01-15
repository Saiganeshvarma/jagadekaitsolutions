import React from 'react';
import { Target, Award, Clock, Users, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Delivering reliable IT infrastructure that empowers businesses to focus on their core operations.',
      gradient: 'from-orange-400 to-orange-600'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'ISO certified processes ensuring consistent, high-quality deployments across all projects.',
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      icon: Clock,
      title: 'Responsive Support',
      description: '24/7 support with defined SLAs and proactive monitoring to prevent issues before they impact you.',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      icon: Users,
      title: 'Multi-Vendor Expertise',
      description: 'Technology-agnostic approach ensuring you get the best solution for your specific requirements.',
      gradient: 'from-gray-500 to-gray-700'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Story
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              About Jagadeka Smart Solutions
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Founded with a vision to simplify IT infrastructure for businesses, Jagadeka Smart Solutions has evolved into a trusted partner for organizations across Telangana and Andhra Pradesh.
              </p>
              <p>
                Our journey began with a simple belief: that reliable technology should enable business growth, not hinder it. Today, we're proud to be an ISO-certified organization delivering end-to-end IT infrastructure solutions that our clients depend on daily.
              </p>
              <p>
                From our headquarters in Hyderabad to our branch in Guntur, our team of certified engineers brings deep expertise across multiple technology vendors, ensuring you receive unbiased recommendations and optimal solutions.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-2xl">
              <div className="flex items-center space-x-3 mb-3">
                <Award className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-green-900">ISO Certification Renewed</h3>
              </div>
              <p className="text-green-700">
                We're committed to maintaining the highest standards in quality management and service delivery, with our ISO certification recently renewed for continued excellence.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-2xl shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">ISO</div>
                  <div className="text-xs font-medium opacity-90">Certified</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        <div>
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-orange-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50"
                >
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-orange-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl"></div>
          </div>

          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h3>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the difference of working with a truly committed IT infrastructure partner who puts your success first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 group"
              >
                Existing Customer Support
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;