import React from 'react';
import { Brain, Database, Zap, Bot, Code, Cpu, Target, Shield, Lightbulb, TrendingUp, Users, Globe } from 'lucide-react';

const AISolutions = () => {
  const solutions = [
    {
      icon: Brain,
      title: "Traditional AI & Expert Systems",
      description: "Rule-based systems and classical AI algorithms for foundational business logic and decision-making processes.",
      features: ["Expert Systems", "Rule Engines", "Knowledge Bases", "Decision Trees"],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Database,
      title: "Machine Learning Solutions",
      description: "Advanced ML models for predictive analytics, pattern recognition, and intelligent data processing.",
      features: ["Predictive Analytics", "Classification Models", "Regression Analysis", "Clustering Algorithms"],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      icon: Zap,
      title: "Generative AI Applications",
      description: "Cutting-edge generative models for content creation, automation, and creative business solutions.",
      features: ["Content Generation", "Image Synthesis", "Text Processing", "Creative Automation"],
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100"
    },
    {
      icon: Bot,
      title: "Agentic AI Systems",
      description: "Autonomous AI agents that can reason, plan, and execute complex tasks with minimal human intervention.",
      features: ["Autonomous Agents", "Multi-Agent Systems", "Task Planning", "Goal-Oriented AI"],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100"
    },
    {
      icon: Code,
      title: "AI Integration & APIs",
      description: "Seamless integration of AI capabilities into existing systems with robust API development.",
      features: ["API Development", "System Integration", "Microservices", "Cloud Deployment"],
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    },
    {
      icon: Cpu,
      title: "Data Science & Analytics",
      description: "Comprehensive data analysis, modeling, and visualization to extract actionable business insights.",
      features: ["Data Mining", "Statistical Analysis", "Visualization", "Business Intelligence"],
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100"
    }
  ];

  const industries = [
    { icon: Target, name: "Healthcare", desc: "AI-powered diagnostics and patient care" },
    { icon: Shield, name: "Finance", desc: "Fraud detection and risk assessment" },
    { icon: Lightbulb, name: "Manufacturing", desc: "Predictive maintenance and optimization" },
    { icon: TrendingUp, name: "Retail", desc: "Personalization and demand forecasting" },
    { icon: Users, name: "Education", desc: "Adaptive learning and assessment" },
    { icon: Globe, name: "Logistics", desc: "Route optimization and supply chain" }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our AI
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From traditional AI to cutting-edge Agentic systems, we deliver comprehensive 
            solutions that drive real business transformation across industries
          </p>
          <div className="flex items-center justify-center space-x-2">
            <img 
              src="/IMG_6322.PNG" 
              alt="Zeta Innovations" 
              className="h-8 w-8"
            />
            <span className="text-lg font-semibold text-gray-700">Powered by Zeta Innovation</span>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`group bg-gradient-to-br ${solution.bgColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 hover:border-transparent`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700">
                {solution.description}
              </p>

              <div className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${solution.color} rounded-full`}></div>
                    <span className="text-sm text-gray-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className={`mt-6 w-0 h-1 bg-gradient-to-r ${solution.color} group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Transform</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h4>
                  <p className="text-gray-600">{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evolution Timeline */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our AI Evolution Journey</h3>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { year: "2020", tech: "Traditional AI", desc: "Founded with classical AI expertise", icon: Brain },
              { year: "2021", tech: "Machine Learning", desc: "Advanced ML model development", icon: Database },
              { year: "2023", tech: "Generative AI", desc: "Creative AI solution deployment", icon: Zap },
              { year: "2024", tech: "Agentic AI", desc: "Autonomous AI agent systems", icon: Bot }
            ].map((phase, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <phase.icon className="h-8 w-8 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{phase.year}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{phase.tech}</h4>
                  <p className="text-gray-300 text-sm">{phase.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can drive your business forward with cutting-edge technology and proven expertise.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <span>Get Started Today</span>
            <Bot className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;