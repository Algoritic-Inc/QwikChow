// components/Waitlist.tsx
import React, { useState } from 'react';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [campus, setCampus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ email, campus });
    alert('Thanks for joining the waitlist! We\'ll notify you when we launch.');
    setEmail('');
    setCampus('');
  };

  return (
    <section className="py-16 bg-orange-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Hungry Yet?</h2>
        <p className="text-orange-100 mb-8 text-lg">
          Be the first to know when we launch on your campus. Sign up for exclusive early access.
        </p>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-left text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="campus" className="block text-left text-gray-700 mb-2">Campus Name</label>
              <input
                type="text"
                id="campus"
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your University"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Notify Me on Launch
          </button>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;