import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [],
    siteCount: '',
    userCount: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Server & Data Center',
    'Network Services',
    'Security & Surveillance',
    'Wi-Fi & Campus Networks',
    'Ongoing AMC / Managed IT'
  ];

  const handleServiceChange = (service: string) => {
    const currentServices = formData.services as string[];
    const updatedServices = currentServices.includes(service)
      ? currentServices.filter(s => s !== service)
      : [...currentServices, service];
    
    setFormData({ ...formData, services: updatedServices });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-16 shadow-2xl border-2 border-green-200">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We've received your request and will get back to you within 24 hours with a detailed proposal.
            </p>
            <p className="text-gray-600 mb-10 text-lg">
              In the meantime, feel free to call us at <strong className="text-orange-600">+91 98765 43210</strong> if you have any urgent questions.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Get Started
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Get a Custom Quote</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your IT infrastructure? Tell us about your requirements and we'll provide a detailed solution proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-2xl h-fit border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    Our Locations
                  </h4>
                  <div className="space-y-4 text-gray-600 ml-13">
                    <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200">
                      <p className="font-semibold text-gray-900">Hyderabad HQ</p>
                      <p className="text-sm">B-811, Aakriti Honey Dew</p>
                      <p className="text-sm">Tellapur, Telangana 500019</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                      <p className="font-semibold text-gray-900">Guntur Branch</p>
                      <p className="text-sm">135-14-718, 1st Floor, Dwaraka Nagar</p>
                      <p className="text-sm">12th Lane, Vidya Nagar area</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    Phone
                  </h4>
                  <p className="text-gray-600 ml-13 font-medium">+91 98765 43210</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    Email
                  </h4>
                  <p className="text-gray-600 ml-13 font-medium">info@jagadeka.com</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    Business Hours
                  </h4>
                  <div className="text-gray-600 text-sm ml-13 space-y-1">
                    <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 9:00 AM - 1:00 PM</p>
                    <p><span className="font-medium text-orange-600">Emergency Support:</span> 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Services Needed (Select all that apply) *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label key={service} className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:bg-orange-50 hover:border-orange-300 cursor-pointer transition-all duration-200">
                        <input
                          type="checkbox"
                          checked={(formData.services as string[]).includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-5 h-5 text-orange-600 border-2 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <span className="text-sm font-medium text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="siteCount" className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Sites/Locations
                    </label>
                    <select
                      id="siteCount"
                      name="siteCount"
                      value={formData.siteCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                    >
                      <option value="">Select...</option>
                      <option value="1">Single Location</option>
                      <option value="2-5">2-5 Locations</option>
                      <option value="6-10">6-10 Locations</option>
                      <option value="10+">10+ Locations</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="userCount" className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Users
                    </label>
                    <select
                      id="userCount"
                      name="userCount"
                      value={formData.userCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                    >
                      <option value="">Select...</option>
                      <option value="1-50">1-50 Users</option>
                      <option value="51-100">51-100 Users</option>
                      <option value="101-500">101-500 Users</option>
                      <option value="500+">500+ Users</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                    >
                      <option value="">Select...</option>
                      <option value="immediate">Immediate (within 1 month)</option>
                      <option value="quarter">This Quarter (1-3 months)</option>
                      <option value="half-year">Next 6 months</option>
                      <option value="planning">Still planning</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                    >
                      <option value="">Select...</option>
                      <option value="under-5L">Under ₹5 Lakhs</option>
                      <option value="5L-15L">₹5-15 Lakhs</option>
                      <option value="15L-50L">₹15-50 Lakhs</option>
                      <option value="50L+">₹50 Lakhs+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                    placeholder="Tell us more about your specific requirements, current challenges, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Get Your Custom Quote
                </button>

                <p className="text-sm text-gray-600 text-center bg-gray-50 rounded-xl p-4">
                  We'll respond within 24 hours with a detailed proposal tailored to your requirements.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;