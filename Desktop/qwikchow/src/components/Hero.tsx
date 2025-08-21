// components/Hero.jsx
import { FaReceipt, FaClock, FaUser, FaGlobe, FaLaptop } from 'react-icons/fa';
import { IoRestaurant, IoFastFood, IoPhonePortrait } from 'react-icons/io5';
import { MdFoodBank, MdDevices } from 'react-icons/md';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1a2e1a] via-[#2a3e2a] to-[#1a2e1a] py-16 md:py-24 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-food-being-prepared-in-a-restaurant-kitchen-7619-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-1 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#22C55E] rounded-full mix-blend-soft-light opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#67726F] rounded-full mix-blend-soft-light opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#22C55E] rounded-full mix-blend-soft-light opacity-10 animate-blob"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="mb-6">
            <span className="text-[#22C55E] font-semibold bg-white/10 px-3 py-1 rounded-full text-sm flex items-center w-fit">
              <MdFoodBank className="mr-1" /> NO DOWNLOAD REQUIRED
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Campus Feeding <span className="text-[#22C55E]">Simplified.</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-md leading-relaxed">
            Access all your favorite campus eateries through our webapp. 
            No downloads needed - just open your browser and start ordering.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#22C55E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#16A34A] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
              <FaGlobe className="mr-3" /> Access WebApp
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm flex items-center">
              <IoRestaurant className="mr-2" /> Partner With Us
            </button>
          </div>
          <div className="mt-10 flex items-center">
            <div className="flex -space-x-3 mr-4">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#22C55E] flex items-center justify-center">
                <FaUser className="text-white text-xs" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#4ade80] flex items-center justify-center">
                <FaUser className="text-white text-xs" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#16A34A] flex items-center justify-center">
                <FaUser className="text-white text-xs" />
              </div>
            </div>
            <p className="text-gray-300 text-sm">Loved by 10,000+ students across campuses</p>
          </div>
        </div>
        
        {/* WebApp Feature Showcase */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-[#22C55E] flex items-center justify-center mr-4">
                  <MdDevices className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Multi-Device Access</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <FaLaptop className="text-[#22C55E] text-2xl mx-auto mb-2" />
                  <p className="text-white text-sm">Laptop</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <IoFastFood className="text-[#22C55E] text-2xl mx-auto mb-2" />
                  <p className="text-white text-sm">Tablet</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <IoPhonePortrait className="text-[#22C55E] text-2xl mx-auto mb-2" />
                  <p className="text-white text-sm">Phone</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <FaGlobe className="text-[#22C55E] text-2xl mx-auto mb-2" />
                  <p className="text-white text-sm">Any Browser</p>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4 mb-4 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-white">Live Order Tracking</span>
                  <span className="text-sm text-[#22C55E] font-semibold flex items-center">
                    <FaClock className="mr-1" /> Active
                  </span>
                </div>
                <div className="w-full bg-[#565E5C] rounded-full h-2 mb-2">
                  <div className="bg-[#22C55E] h-2 rounded-full w-2/3"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Ordered</span>
                  <span>Preparing</span>
                  <span>Delivered</span>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-bold mb-3 text-white flex items-center">
                  <FaReceipt className="mr-2 text-[#22C55E]" /> Instant Access
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-200">
                    <span>No installation needed</span>
                    <span className="text-[#22C55E]">✓</span>
                  </div>
                  <div className="flex justify-between text-gray-200">
                    <span>Works on all devices</span>
                    <span className="text-[#22C55E]">✓</span>
                  </div>
                  <div className="flex justify-between text-gray-200">
                    <span>Automatic updates</span>
                    <span className="text-[#22C55E]">✓</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#22C55E] rounded-full opacity-20"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#22C55E] rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;