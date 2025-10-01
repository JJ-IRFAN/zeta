import React from 'react';
import { ArrowLeft, Award, Calendar, Code, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Meet the
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Visionary Behind Zeta
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the journey of innovation that started in 2020 and continues to reshape the AI landscape
          </p>
        </div>

        {/* Founder Profile */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Mohamed Ibrahim N</h2>
              <p className="text-xl text-blue-600 font-semibold mb-6">Founder & CEO</p>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  Mohamed Ibrahim founded Zeta Innovations in 2020 with a clear vision: to democratize 
                  AI technology and make it accessible to businesses of all scales. Under his leadership, 
                  Zeta Innovations has rapidly grown and adapted, moving beyond traditional AI solutions 
                  to embrace cutting-edge Generative and Agentic AI systems.
                </p>
                
                <p className="leading-relaxed">
                  Today, Zeta Innovations serves a global clientele, reaching six continents, and is 
                  actively transforming industries through data-driven innovation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-full max-w-md mx-auto h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/mohamed-ibrahim.jpg" 
                  alt="Mohamed Ibrahim N - Founder & CEO of Zeta Innovations"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Calendar, title: "Founded 2020", description: "5 years of innovation" },
            { icon: Globe, title: "Global Reach", description: "Serving 6 continents" },
            { icon: Code, title: "AI Evolution", description: "Traditional to Agentic AI" },
            { icon: Award, title: "Industry Leader", description: "Recognized excellence" }
          ].map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <achievement.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              To be the global leader in AI-driven transformation, empowering businesses 
              to harness the full potential of artificial intelligence through innovative, 
              scalable, and ethical solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where AI seamlessly integrates into every aspect of 
              business operations, driving unprecedented efficiency, creativity, and growth.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              To transform businesses by delivering high-impact AI solutions that combine 
              cutting-edge technology with deep industry expertise, ensuring tangible 
              results and sustainable competitive advantages.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to democratizing AI technology, making it accessible and 
              beneficial for organizations of all sizes across the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;