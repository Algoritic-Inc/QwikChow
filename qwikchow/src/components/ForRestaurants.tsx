 // components/ForRestaurants.tsx
import React from 'react';

const ForRestaurants: React.FC = () => {
  return (
    <section id="for-restaurants" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the QwikChow Network</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg">
          Are you a restaurant near campus? Partner with us to tap into the student market, 
          increase your order volume, and simplify your operations.
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition">
          Partner With Us
        </button>
      </div>
    </section>
  );
};

export default ForRestaurants;