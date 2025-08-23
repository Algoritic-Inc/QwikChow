import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaUniversity, FaGlobeAfrica } from 'react-icons/fa';

const UniversityShowcase: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<'nigeria' | 'benin'>('nigeria');

  // University data
  const universities = {
    nigeria: [
      {
        name: "University of Lagos",
        location: "Lagos, Nigeria",
        students: "45,000+",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        launchDate: "Q1 2024",
        description: "One of Nigeria's premier universities with a vibrant student community."
      },
      {
        name: "University of Benin",
        location: "Benin City, Nigeria",
        students: "40,000+",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        launchDate: "Q1 2024",
        description: "A leading institution known for its academic excellence and diverse student body."
      },
      {
        name: "Covenant University",
        location: "Ota, Nigeria",
        students: "10,000+",
        image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        launchDate: "Q2 2024",
        description: "A private university with state-of-the-art facilities and a growing student population."
      },
      {
        name: "University of Ibadan",
        location: "Ibadan, Nigeria",
        students: "35,000+",
        image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        launchDate: "Q2 2024",
        description: "Nigeria's oldest degree-awarding institution with a rich academic heritage."
      }
    ],
    benin: [
      {
        name: "University of Abomey-Calavi",
        location: "Cotonou, Benin Republic",
        students: "25,000+",
        image: "https://images.unsplash.com/photo-1524178232400-38d816f003ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        launchDate: "Q3 2024",
        description: "The largest university in Benin Republic, known for its diverse academic programs."
      },
      {
        name: "University of Parakou",
        location: "Parakou, Benin Republic",
        students: "15,000+",
        image: "https://images.unsplash.com/photo-1498242731510-8ddc18b7d2e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        launchDate: "Q3 2024",
        description: "A growing institution serving the northern region of Benin Republic."
      },
      {
        name: "African School of Economics",
        location: "Abomey-Calavi, Benin Republic",
        students: "2,000+",
        image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        launchDate: "Q4 2024",
        description: "A prestigious institution focused on economics and social sciences."
      },
      {
        name: "Institut Régional de Santé Publique",
        location: "Ouidah, Benin Republic",
        students: "1,500+",
        image: "https://images.unsplash.com/photo-1582573618381-c9a77c31f6b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        launchDate: "Q4 2024",
        description: "Specialized institution for public health studies and research."
      }
    ]
  };

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
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center mb-4 bg-[#22C55E]/10 px-4 py-2 rounded-full">
            <FaUniversity className="text-[#22C55E] mr-2" />
            <span className="text-[#22C55E] font-medium">Launch Partners</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Initial Campus Network
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We're starting our journey at these prestigious universities, bringing revolutionary 
            food delivery experiences to thousands of students.
          </p>

          {/* Country Switch */}
          <div className="flex items-center justify-center mb-2">
            <span className={`mr-3 font-medium ${selectedCountry === 'nigeria' ? 'text-[#22C55E]' : 'text-gray-500'}`}>
              Nigeria
            </span>
            
            <button 
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2"
              onClick={() => setSelectedCountry(selectedCountry === 'nigeria' ? 'benin' : 'nigeria')}
            >
              <span className="sr-only">Switch between Nigeria and Benin Republic universities</span>
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  selectedCountry === 'nigeria' ? 'translate-x-1' : 'translate-x-6'
                }`}
              />
            </button>
            
            <span className={`ml-3 font-medium ${selectedCountry === 'benin' ? 'text-[#22C55E]' : 'text-gray-500'}`}>
              Benin Republic
            </span>
          </div>
          
          <div className="flex items-center justify-center text-sm text-gray-500">
            <FaGlobeAfrica className="mr-2 text-[#22C55E]" />
            <span>Showing universities in {selectedCountry === 'nigeria' ? 'Nigeria' : 'Benin Republic'}</span>
          </div>
        </motion.div>

        {/* Universities Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCountry}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {universities[selectedCountry].map((university, index) => (
              <motion.div
                key={`${selectedCountry}-${index}`}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                {/* University Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={university.image} 
                    alt={university.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[#22C55E] text-white text-xs font-medium px-3 py-1 rounded-full">
                    {university.launchDate}
                  </div>
                </div>

                {/* University Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{university.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaMapMarkerAlt className="text-[#22C55E] mr-2" />
                      <span>{university.location}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-[#22C55E] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>{university.students} students</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendarAlt className="text-[#22C55E] mr-2" />
                      <span>Launching {university.launchDate}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] h-2 rounded-full" 
                          style={{ width: `${Math.random() * 30 + 70}%` }}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-[#22C55E]">
                        {Math.floor(Math.random() * 30 + 70)}% Ready
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#22C55E]/10 to-[#16A34A]/10 p-8 rounded-2xl border border-[#22C55E]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bring QwikChow to Your Campus</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Is your university not on the list? Help us bring QwikChow to your campus and 
              revolutionize how students experience food delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-medium px-6 py-3 rounded-xl transition-colors duration-300">
                Nominate Your University
              </button>
              <button className="border border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-white font-medium px-6 py-3 rounded-xl transition-colors duration-300">
                View Expansion Plan
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversityShowcase;