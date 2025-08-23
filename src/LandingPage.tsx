// App.tsx - Main component that brings everything together
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Waitlist from './components/Waitlist';
import ForRestaurants from './components/VisionSection';
import Footer from './components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Waitlist />
      <ForRestaurants />
      <Footer />
    </div>
  );
};

export default LandingPage;