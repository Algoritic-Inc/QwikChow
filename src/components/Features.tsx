// components/Features.tsx
import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaUtensils, 
  FaTimesCircle, 
  FaTools,
  FaUsers, 
  FaClipboardList, 
  FaChartLine,
  FaUserGraduate,
  FaStore
} from 'react-icons/fa';

const Features: React.FC = () => {
  const studentFeatures = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Live Order Tracking',
      description: 'Ditch the anxiety. Know exactly where your food is in the process.'
    },
    {
      icon: <FaUtensils className="text-2xl" />,
      title: 'Campus-Wide Variety',
      description: 'One app for every craving—from dining halls to local gems.'
    },
    {
      icon: <FaTimesCircle className="text-2xl" />,
      title: 'Cancel Mistaken Orders',
      description: 'Quickly cancel accidental orders within 1 minute at no charge.'
    }
  ];

  const restaurantFeatures = [
    {
      icon: <FaUsers className="text-2xl" />,
      title: 'Reach More Students',
      description: 'Get discovered by hundreds of hungry students on campus.'
    },
    {
      icon: <FaClipboardList className="text-2xl" />,
      title: 'Streamlined Order Management',
      description: 'A simple dashboard to receive and manage orders without the phone chaos.'
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: 'Data-Driven Insights',
      description: 'Learn what\'s popular and when your busy times are.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           {/* Development Status Badge */}
           <div className="inline-flex items-center bg-[#22C55E]/10 text-[#22C55E] px-4 py-2 rounded-full mb-6">
            <FaTools className="mr-2" />
            <span className="font-medium">In Active Development</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Coming Soon: <span className="text-[#22C55E]">QwikChow</span> Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building something amazing for campus dining. Here's what to expect.
          </p>
        </div>
        
        {/* For Students Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="w-12 h-12 bg-[#22C55E]/10 rounded-full flex items-center justify-center mr-4">
              <FaUserGraduate className="text-2xl text-[#22C55E]" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-900">For Students</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mb-6 text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h4>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For Restaurants Section */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="w-12 h-12 bg-[#22C55E]/10 rounded-full flex items-center justify-center mr-4">
              <FaStore className="text-2xl text-[#22C55E]" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-900">For Restaurants</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurantFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mb-6 text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h4>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Features;