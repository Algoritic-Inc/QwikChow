// components/HowItWorks.tsx
import React from 'react';
import { FaSearch, FaMapMarkedAlt, FaArrowRight, FaUserPlus, FaTools } from 'react-icons/fa';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FaUserPlus className="text-3xl" />,
      title: 'Create Account',
      description: 'Sign up to access all dining options in one place.'
    },
    {
      icon: <FaSearch className="text-3xl" />,
      title: 'Browse & Order',
      description: 'Explore menus from dozens of restaurants around campus. Customize your meal and place your order.'
    },
    {
      icon: <FaMapMarkedAlt className="text-3xl" />,
      title: 'Track & Enjoy',
      description: 'Follow your order in real-time and get notified when it\'s ready for pickup.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How <span className="text-[#22C55E]">QwikChow</span> Will Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's how you'll enjoy campus dining once we launch
          </p>
          
          {/* Development Status Badge */}
          <div className="inline-flex items-center bg-[#22C55E]/10 text-[#22C55E] px-4 py-2 rounded-full mt-6">
            <FaTools className="mr-2" />
            <span className="font-medium">In Development - Coming Soon</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#22C55E]/20 via-[#22C55E]/40 to-[#22C55E]/20"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
              
                
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6 text-[#22C55E] ">
                  {step.icon}
                </div>
                
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#22C55E]  text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                <h3 className="text-2xl font-semibold text-[#22C55E]  mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow between steps for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-6">
                  <FaArrowRight className="text-gray-400 text-2xl transform rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;