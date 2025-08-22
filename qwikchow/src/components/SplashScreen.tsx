import React from "react";
import { FaLeaf } from "react-icons/fa";

export const SplashScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#1a2e1a] via-[#2a3e2a] to-[#1a2e1a] overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://res.cloudinary.com/dzibfknxq/image/upload/v1755846215/Patrimoine_culinaire_africain_re%CC%81invente%CC%81_par_la_nouvelle_ge%CC%81ne%CC%81ration_de_chefs_invoxg.jpg"
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

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center mb-6">
          <FaLeaf className="text-[#22C55E] text-4xl mr-3" />
          <h1 className="text-white font-bold text-5xl md:text-7xl lg:text-8xl tracking-wide">
            <span className="text-[#22C55E]">Qwik</span>Chow
          </h1>
        </div>
        
        <p className="text-gray-200 text-lg md:text-xl max-w-md mx-auto mb-8">
          Africa's Campus Food Revolution
        </p>
        
        {/* Loading Animation */}
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-[#22C55E] rounded-full animate-loading-bar"></div>
          </div>
        </div>
        
        {/* Subtle Tagline */}
        <p className="text-gray-300 text-sm mt-6 opacity-80">
          Loading your culinary experience...
        </p>
      </div>

      {/* Add the animation styles */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes loading-bar {
          0% {
            width: 0%;
          }
          50% {
            width: 60%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;