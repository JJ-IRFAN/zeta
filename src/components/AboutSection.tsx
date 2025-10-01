import React from 'react';
import { Globe, TrendingUp, Users, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Transforming Businesses
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Through AI Innovation
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Since 2020, Zeta Innovations has been at the forefront of AI-driven software development, 
              evolving from traditional artificial intelligence to cutting-edge Agentic AI solutions.
            </p>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We harness the power of data science to deliver tangible results for businesses worldwide, 
              maintaining our position as industry leaders through continuous innovation and excellence.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Globe, label: "Global Solutions", desc: "Worldwide impact" },
                { icon: TrendingUp, label: "Proven Results", desc: "Tangible outcomes" },
                { icon: Users, label: "Expert Team", desc: "Industry leaders" },
                { icon: Award, label: "Innovation", desc: "Cutting-edge tech" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.label}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">AI Models Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
                  <div className="text-gray-600">Businesses Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
                <h4 className="text-xl font-semibold mb-2">Industry Leadership</h4>
                <p className="text-blue-100">
                  Recognized as a pioneer in AI evolution, from traditional algorithms to autonomous agents
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;