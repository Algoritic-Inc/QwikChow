import { Loader2 } from "lucide-react";
import React from "react";
import { motion, easeInOut } from "framer-motion";

const Dashboard: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: easeInOut }}
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-0"></div>

      {/* Particle Overlay */}
      <div className="absolute inset-0 z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--brand-yellow)]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0, 0.7, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              ease: easeInOut,
              repeat: Infinity,
              delay: Math.random() * 1.2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 space-y-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: easeInOut }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-yellow)] to-white"
          animate={{
            textShadow: [
              "0 0 10px rgba(255, 215, 0, 0.7)",
              "0 0 20px rgba(255, 215, 0, 1)",
              "0 0 10px rgba(255, 215, 0, 0.7)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 1] }}
        >
          Dashboard Coming Soon
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          We’re crafting an immersive dashboard experience. Stay tuned for
          cutting-edge features and seamless navigation!
        </motion.p>

        {/* Pulsating Loader with Trail */}
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: easeInOut }}
          >
            <Loader2 className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-[var(--brand-yellow)] animate-spin-slow" />
            <motion.div
              className="absolute inset-0 rounded-full bg-[var(--brand-yellow)]/20 blur-sm"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Orbiting Geometric Shapes */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5">
          <motion.div
            className="w-6 h-6 bg-[var(--brand-yellow)]/30 rounded-full"
            animate={{
              x: [0, 80, 0],
              y: [0, -50, 0],
              rotate: 360,
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: easeInOut }}
          />
          <motion.div
            className="w-4 h-4 bg-[var(--brand-green)]/30 rounded-full"
            animate={{
              x: [0, -60, 0],
              y: [0, 40, 0],
              rotate: -360,
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: easeInOut, delay: 2 }}
          />
        </div>
      </motion.div>

      {/* Inline CSS for Custom Animations */}
      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 4s linear infinite;
          }
        `}
      </style>
    </motion.div>
  );
};

export default Dashboard;