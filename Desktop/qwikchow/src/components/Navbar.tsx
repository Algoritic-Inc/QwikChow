// components/Navbar.tsx
import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaUserPlus } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md py-4 px-6 sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-[#22C55E]">QWik</span>
              <span className="text-[#2D3436]">Chow</span>
            </span>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10">
            <a href="#how-it-works" className="text-[#67726F] hover:text-[#22C55E] transition-colors duration-300 font-medium relative group">
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22C55E] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#features" className="text-[#67726F] hover:text-[#22C55E] transition-colors duration-300 font-medium relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22C55E] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#for-restaurants" className="text-[#67726F] hover:text-[#22C55E] transition-colors duration-300 font-medium relative group">
              For Restaurants
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22C55E] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <button className="hidden md:flex items-center text-[#67726F] hover:text-[#22C55E] transition-colors duration-300 font-medium">
              <FaUser className="mr-1.5" /> Sign In
            </button>
            <div className="hidden md:block h-5 w-px bg-gray-300"></div>
            <button className="hidden md:flex items-center bg-[#22C55E] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#16A34A] transition-all duration-300 shadow-sm hover:shadow-md">
              <FaUserPlus className="mr-1.5" /> Sign Up
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-[#67726F] focus:outline-none p-1 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-8">
          <div className="flex flex-col space-y-8">
            <a 
              href="#how-it-works" 
              className="text-xl font-medium text-[#67726F] hover:text-[#22C55E] transition-colors duration-300 py-3 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-xl font-medium text-[#67726F] hover:text-[#22C55E] transition-colors duration-300 py-3 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#for-restaurants" 
              className="text-xl font-medium text-[#67726F] hover:text-[#22C55E] transition-colors duration-300 py-3 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              For Restaurants
            </a>
          </div>
          
          <div className="mt-12 flex flex-col space-y-4">
            <button className="w-full flex items-center justify-center text-[#67726F] border border-gray-200 px-5 py-3.5 rounded-xl font-medium hover:border-[#22C55E] transition-all duration-300">
              <FaUser className="mr-2" />
              Sign In
            </button>
            <button className="w-full flex items-center justify-center bg-[#22C55E] text-white px-5 py-3.5 rounded-xl font-medium hover:bg-[#16A34A] transition-all duration-300">
              <FaUserPlus className="mr-2" />
              Sign Up
            </button>
          </div>
          
          <div className="mt-auto mb-10 text-center">
            <p className="text-[#67726F] text-sm">
              © 2023 QwikChow • Campus Food Delivery
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;