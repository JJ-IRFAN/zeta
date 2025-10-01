import React from 'react';
import { Brain, Code, Database, Zap, Bot, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Traditional AI",
      description: "Classical machine learning algorithms and rule-based systems for foundational AI solutions.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Database,
      title: "Machine Learning",
      description: "Advanced ML models for predictive analytics, pattern recognition, and data-driven insights.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Generative AI",
      description: "Cutting-edge generative models for content creation, automation, and creative solutions.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Bot,
      title: "Agentic AI",
      description: "Autonomous AI agents that can reason, plan, and take actions to achieve complex goals.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Code,
      title: "AI Integration",
      description: "Seamless integration of AI capabilities into existing business processes and systems.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Cpu,
      title: "Data Science",
      description: "Comprehensive data analysis and modeling to extract actionable business insights.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our AI
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've evolved through the AI landscape to deliver comprehensive solutions 
            that drive real business transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 hover:border-transparent"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                {service.description}
              </p>

              <div className={`mt-6 w-0 h-1 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Evolution Timeline */}
        <div className="mt-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our AI Evolution Journey</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { year: "2020", tech: "Traditional AI", desc: "Founded with classical AI" },
              { year: "2021", tech: "Machine Learning", desc: "Advanced ML models" },
              { year: "2023", tech: "Generative AI", desc: "Creative AI solutions" },
              { year: "2024", tech: "Agentic AI", desc: "Autonomous AI agents" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {phase.year}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{phase.tech}</h4>
                <p className="text-gray-300">{phase.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-500 to-purple-500 mt-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;