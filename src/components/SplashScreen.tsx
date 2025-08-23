import React from "react";
import { motion } from "framer-motion";

export const SplashScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#0f1f0f] via-[#1a2e1a] to-[#0f1f0f] overflow-hidden">
      {/* Background Video with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
          poster="https://res.cloudinary.com/dzibfknxq/image/upload/v1755846215/Patrimoine_culinaire_africain_re%CC%81invente%CC%81_par_la_nouvelle_ge%CC%81ne%CC%81ration_de_chefs_invoxg.jpg"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-food-being-prepared-in-a-restaurant-kitchen-7619-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-grid-white/[0.05] bg-[length:50px_50px]" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#22C55E] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Modern gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-full mix-blend-soft-light opacity-15 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-br from-[#67726F] to-[#2D3436] rounded-full mix-blend-soft-light opacity-10 blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Large Logo without background */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.7, 
            delay: 0.2,
            ease: [0.175, 0.885, 0.32, 1.275]
          }}
        >
          <img
            src="https://res.cloudinary.com/dzibfknxq/image/upload/v1755919271/WhatsApp_Image_2025-08-23_at_4.20.22_AM-removebg-preview_ozhnuw.png"
            alt="QwikChow Logo"
            className="h-40 w-80 md:h-52 md:w-96 object-contain drop-shadow-xl"
          />
        </motion.div>
        
        {/* Tagline with modern typography */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10"
        >
          <p className="text-gray-100 text-xl md:text-2xl font-light tracking-wider max-w-md mx-auto mb-2">
            Africa's Campus Food Revolution
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#22C55E] to-transparent mx-auto"></div>
        </motion.div>
        
        {/* Modern loading indicator */}
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="relative w-56 h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-full"
              initial={{ width: "0%", x: "-50%" }}
              animate={{ 
                width: "100%",
                x: "0%",
                transition: { 
                  duration: 2.2, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: [0.645, 0.045, 0.355, 1]
                }
              }}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#22C55E] blur-sm opacity-30"></div>
          </div>
        </motion.div>
        
        {/* Subtle animated dots */}
        <motion.div 
          className="flex justify-center space-x-1 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
        
        {/* Modern tagline */}
        <motion.p 
          className="text-gray-300 text-sm font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Loading your culinary experience
        </motion.p>
      </motion.div>

      {/* Bottom gradient bar */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#22C55E] via-[#16A34A] to-[#22C55E]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </div>
  );
};

export default SplashScreen;