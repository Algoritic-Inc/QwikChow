// components/Navbar.tsx
import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaUserPlus, FaLeaf } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (section: string) => {
    setActiveLink(section);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-lg py-3 px-4 sm:px-6 sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold flex items-center">
              <span className="text-[#22C55E]">Qwik</span>
              <span className="text-[#2D3436]">Chow</span>
              <FaLeaf className="text-[#22C55E] ml-1 text-lg" />
            </span>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-12">
            {[
              { id: 'how-it-works', label: 'How It Works' },
              { id: 'features', label: 'Features' },
              { id: 'for-restaurants', label: 'For Restaurants' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors duration-300 font-medium relative group ${
                  activeLink === item.id ? 'text-[#22C55E]' : 'text-[#67726F] hover:text-[#22C55E]'
                }`}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#22C55E] transition-all duration-300 ${
                  activeLink === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center text-[#67726F] hover:text-[#22C55E] transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-[#22C55E]/5">
              <FaUser className="mr-2" /> Sign In
            </button>
            <div className="hidden md:block h-6 w-px bg-gray-200"></div>
            <button className="hidden md:flex items-center bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md">
              <FaUserPlus className="mr-2" /> Sign Up
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-[#67726F] focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex flex-col space-y-1">
            {[
              { id: 'how-it-works', label: 'How It Works' },
              { id: 'features', label: 'Features' },
              { id: 'for-restaurants', label: 'For Restaurants' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-4 rounded-xl transition-all duration-300 font-medium ${
                  activeLink === item.id
                    ? 'bg-[#22C55E]/10 text-[#22C55E]'
                    : 'text-[#67726F] hover:bg-gray-50 hover:text-[#22C55E]'
                }`}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="mt-8 flex flex-col space-y-3">
            <button className="w-full flex items-center justify-center text-[#67726F] border border-gray-200 px-5 py-3.5 rounded-xl font-medium hover:border-[#22C55E] hover:text-[#22C55E] transition-all duration-300">
              <FaUser className="mr-3" />
              Sign In
            </button>
            <button className="w-full flex items-center justify-center bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white px-5 py-3.5 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
              <FaUserPlus className="mr-3" />
              Sign Up
            </button>
          </div>
          
          <div className="mt-auto mb-8 text-center">
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