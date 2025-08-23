import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMotorcycle, FaClock, FaMoneyBillWave, FaMapMarkerAlt, FaUserFriends, FaShieldAlt } from 'react-icons/fa';

const CareerSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('benefits');

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="rider-careers" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dzibfknxq/image/upload/v1755988341/render_jzwwwm.png')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#22C55E]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#16A34A]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center mb-4 bg-[#22C55E] px-4 py-2 rounded-full">
            <FaMotorcycle className="text-white mr-2" />
            <span className="text-white font-medium">Join Our Rider Team</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Become a <span className="text-[#22C55E]">QwikChow Rider</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            Earn flexible income while delivering delicious meals to students across campuses. 
            Be the hero who brings food to hungry students!
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 flex">
            {[
              { id: 'benefits', label: 'Benefits' },
              { id: 'requirements', label: 'Requirements' },
              { id: 'apply', label: 'How to Apply' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#22C55E] text-white shadow-md'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          {activeTab === 'benefits' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FaMoneyBillWave,
                  title: "Great Earnings",
                  description: "Competitive pay with bonuses and tips. Earn up to ₦5,000-₦8,000 daily."
                },
                {
                  icon: FaClock,
                  title: "Flexible Hours",
                  description: "Choose your own schedule. Work around your classes or other commitments."
                },
                {
                  icon: FaUserFriends,
                  title: "Be Your Own Boss",
                  description: "Work independently with the freedom to choose when and where you work."
                },
                {
                  icon: FaMapMarkerAlt,
                  title: "Campus Coverage",
                  description: "Work within your campus environment. No long commutes required."
                },
                {
                  icon: FaMotorcycle,
                  title: "Rider Support",
                  description: "24/7 support team and rider community to help you succeed."
                },
                {
                  icon: FaShieldAlt,
                  title: "Safety Guidelines",
                  description: "We provide comprehensive safety guidelines and best practices for riders."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 bg-[#22C55E] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-200">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'requirements' && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Rider Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <div className="w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">1</span>
                    </div>
                    Basic Requirements
                  </h4>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 mr-3"></div>
                      <span>Valid rider's license</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 mr-3"></div>
                      <span>18 years or older</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 mr-3"></div>
                      <span>Smartphone with internet access</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 mr-3"></div>
                      <span>Good knowledge of campus areas</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <div className="w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">2</span>
                    </div>
                    Vehicle & Equipment Requirements
                  </h4>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 mr-3"></div>
                      <span>Motorcycle or scooter in good condition</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 mr-3"></div>
                      <span>Valid vehicle insurance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 mr-3"></div>
                      <span>Proper safety gear (helmet, reflective vest)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 mr-3"></div>
                      <span>Food delivery storage box or insulated bag</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-[#22C55E]/20 rounded-xl border border-[#22C55E]/30">
                <h4 className="text-lg font-semibold text-white mb-3">Note on Equipment:</h4>
                <p className="text-gray-200">
                  Riders are responsible for providing their own safety gear and delivery equipment. 
                  We recommend using a sturdy insulated bag to keep food at the right temperature during delivery.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'apply' && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Join Our Rider Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "Apply Online",
                    description: "Fill out our simple application form with your basic information."
                  },
                  {
                    step: "2",
                    title: "Document Verification",
                    description: "Submit your documents for verification (license, insurance, etc.)."
                  },
                  {
                    step: "3",
                    title: "Start Delivering",
                    description: "Complete orientation and start accepting delivery requests!"
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-[#22C55E] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                    <p className="text-gray-200">{step.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white/10 rounded-xl border border-white/20">
                <h4 className="text-lg font-semibold text-white mb-4">Ready to Apply?</h4>
                <p className="text-gray-200 mb-4">Join hundreds of students already earning with QwikChow!</p>
                <button className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-medium px-8 py-3 rounded-xl transition-colors duration-300">
                  Apply to Become a Rider
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Rider Testimonials */}
        {/* <motion.div 
          className="mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Hear From Our Riders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Chinedu O.",
                campus: "University of Lagos",
                earnings: "₦35,000/week",
                testimonial: "QwikChow has been a game-changer for me. I can work between classes and earn enough to cover my expenses without stressing about money."
              },
              {
                name: "Amina S.",
                campus: "University of Benin",
                earnings: "₦28,000/week",
                testimonial: "The flexibility is perfect for students. I choose my hours and the app makes everything so easy. Plus, the riders community is super supportive!"
              }
            ].map((rider, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center mr-4">
                    <FaMotorcycle className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{rider.name}</h4>
                    <p className="text-gray-300 text-sm">{rider.campus} • {rider.earnings}</p>
                  </div>
                </div>
                <p className="text-gray-200 italic">"{rider.testimonial}"</p>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default CareerSection;