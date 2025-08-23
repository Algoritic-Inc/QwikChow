import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaEnvelope, FaUniversity } from 'react-icons/fa';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [campus, setCampus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log({ email, campus });
    setIsSubmitted(true);
    setEmail('');
    setCampus('');
    setIsSubmitting(false);
    
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#22C55E]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#16A34A]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center mb-6 bg-[#22C55E]/20 px-6 py-3 rounded-full">
            <FaBell className="text-[#22C55E] mr-3" />
            <span className="text-[#22C55E] font-medium text-sm">Early Access</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent">
              Campus Dining?
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the waitlist and be among the first to experience revolutionary food delivery 
            when we launch on your campus. Exclusive perks await early sign-ups!
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-[#22C55E]/10 to-[#16A34A]/10 border border-[#22C55E]/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">You're on the List!</h3>
              <p className="text-gray-300 mb-6">
                Thanks for joining the waitlist. We'll notify you as soon as we launch on your campus.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-[#22C55E] hover:text-[#16A34A] font-medium transition-colors duration-300"
              >
                Add another university
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <label htmlFor="email" className="block text-left text-gray-300 mb-3 font-medium text-sm">
                  <FaEnvelope className="inline mr-2 text-[#22C55E]" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#22C55E] focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="relative">
                <label htmlFor="campus" className="block text-left text-gray-300 mb-3 font-medium text-sm">
                  <FaUniversity className="inline mr-2 text-[#22C55E]" />
                  Campus Name
                </label>
                <input
                  type="text"
                  id="campus"
                  value={campus}
                  onChange={(e) => setCampus(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#22C55E] focus:border-transparent transition-all duration-300"
                  placeholder="Your University"
                  required
                />
              </div>
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Joining Waitlist...
                  </>
                ) : (
                  <>
                    <FaBell className="mr-3" />
                    Join Campus Waitlist
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#16A34A] to-[#22C55E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. No spam, just important updates about our launch.
            </p>
          </motion.form>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700/50"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">15K+</div>
            <div className="text-gray-400 text-sm">Students Joined</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-400 text-sm">Campuses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-400 text-sm">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;