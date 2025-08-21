// components/HowItWorks.tsx
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: '🔍',
      title: 'Browse & Order',
      description: 'Explore menus from dozens of restaurants around campus. Customize your meal and place your order in seconds.'
    },
    {
      icon: '🗺️',
      title: 'Track in Real-Time',
      description: 'See your order status live—from received to cooking to ready for pickup. No more guessing.'
    },
    {
      icon: '🔔',
      title: 'Get Notified & Enjoy',
      description: 'We\'ll ping you the moment your food is ready. Just walk in, skip the line, grab your QwikChow, and enjoy!'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How QwikChow Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;