// components/Features.tsx
import React from 'react';

const Features: React.FC = () => {
  const studentFeatures = [
    {
      title: 'Live Order Tracking',
      description: 'Ditch the anxiety. Know exactly where your food is in the process.'
    },
    {
      title: 'Campus-Wide Variety',
      description: 'One app for every craving—from dining halls to local gems.'
    },
    {
      title: 'Reorder in a Tap',
      description: 'Your favorite meal is just one click away.'
    }
  ];

  const restaurantFeatures = [
    {
      title: 'Reach More Students',
      description: 'Get discovered by hundreds of hungry students on campus.'
    },
    {
      title: 'Streamlined Order Management',
      description: 'A simple dashboard to receive and manage orders without the phone chaos.'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Learn what\'s popular and when your busy times are.'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why You'll Love QwikChow</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">For Students</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">For Restaurants</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {restaurantFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;