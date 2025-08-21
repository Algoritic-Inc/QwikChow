// components/Hero.jsx
import { FaReceipt, FaClock, FaUser } from 'react-icons/fa';
import { IoRestaurant, IoPhonePortrait, IoFastFood } from 'react-icons/io5';
import { MdDeliveryDining, MdFoodBank } from 'react-icons/md';

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
              <MdFoodBank className="mr-1" /> EXCLUSIVE ACCESS
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Campus Feeding <span className="text-[#22C55E]">Simplified.</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-md leading-relaxed">
            Order from all your favorite campus eateries in one app. 
            Real-time tracking, exclusive deals, and contactless delivery right to your dorm.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#22C55E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#16A34A] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
              <IoFastFood className="mr-3" /> Get the App
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
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="bg-white p-2 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-b from-[#2D3433] to-[#3A4140] rounded-2xl overflow-hidden w-64 h-[500px] border-4 border-[#565E5C]">
                <div className="bg-[#22C55E] p-4 text-white text-center font-bold flex items-center justify-center">
                  <IoPhonePortrait className="mr-2" /> Order Tracking
                </div>
                <div className="p-4 bg-gradient-to-b from-[#3A4140] to-[#2D3433] h-full">
                  <div className="bg-white/10 rounded-xl p-4 mb-4 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-white">Burger Palace</span>
                      <span className="text-sm text-[#22C55E] font-semibold flex items-center">
                        <FaClock className="mr-1" /> Preparing
                      </span>
                    </div>
                    <div className="w-full bg-[#565E5C] rounded-full h-2 mb-2">
                      <div className="bg-[#22C55E] h-2 rounded-full w-2/3"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-300">
                      <span>Received</span>
                      <span>Cooking</span>
                      <span>Ready</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#22C55E] flex items-center justify-center mr-3">
                      <MdDeliveryDining className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Delivery in 12-18 min</p>
                      <p className="text-gray-300 text-xs">Rider is on the way</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-bold mb-3 text-white flex items-center">
                      <FaReceipt className="mr-2 text-[#22C55E]" /> Order Summary
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between text-gray-200">
                        <span>Double Cheeseburger</span>
                        <span className="text-[#22C55E]">$9.99</span>
                      </div>
                      <div className="flex justify-between text-gray-200">
                        <span>Sweet Potato Fries</span>
                        <span className="text-[#22C55E]">$4.49</span>
                      </div>
                      <div className="flex justify-between text-gray-200">
                        <span>Lemonade</span>
                        <span className="text-[#22C55E]">$3.29</span>
                      </div>
                      <div className="border-t border-[#565E5C] pt-3 mt-3 flex justify-between font-bold text-white">
                        <span>Total</span>
                        <span className="text-[#22C55E]">$17.77</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-0 right-0 px-4">
                    <button className="w-full bg-[#22C55E] text-white py-3 rounded-lg font-bold flex items-center justify-center">
                      View Order Details
                    </button>
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