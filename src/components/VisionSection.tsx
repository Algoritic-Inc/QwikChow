
import { motion, easeInOut} from 'framer-motion';
import { FaPizzaSlice, FaHamburger, FaUtensils, FaGlobeAfrica, FaRocket } from 'react-icons/fa';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: easeInOut 
    } 
  },
};

const holoShimmer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    textShadow: [
      "0 0 5px rgba(34, 197, 94, 0.5)",
      "0 0 20px rgba(34, 197, 94, 0.8), 0 0 30px rgba(22, 163, 74, 0.6)",
      "0 0 5px rgba(34, 197, 94, 0.5)",
    ],
    transition: {
      duration: 3,
      ease: easeInOut,
      times: [0, 0.5, 1],
      repeat: Infinity,
    },
  },
};

const cardRise = {
  initial: { opacity: 0, scale: 0.9, y: 40 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: easeInOut,
      staggerChildren: 0.1
    } 
  },
};

const orbitTrail = (delay = 0) => ({
  initial: { x: 0, y: 0, rotate: 0, opacity: 0 },
  animate: {
    x: [0, 120, 0],
    y: [0, -80, 0],
    rotate: 360,
    opacity: [0, 1, 0],
    transition: { 
      duration: 15, 
      ease: easeInOut, 
      repeat: Infinity,
      delay
    },
  },
});

const wavePulse = {
  initial: { scaleY: 1 },
  animate: { 
    scaleY: [1, 1.6, 1],
    transition: { 
      duration: 1.5, 
      ease: easeInOut, 
      repeat: Infinity 
    } 
  },
};

// const hoverEffect = {
//   rest: { 
//     scale: 1, 
//     y: 0, 
//     boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" 
//   },
//   hover: {
//     scale: 1.05,
//     y: -5,
//     boxShadow: "0 15px 30px rgba(34, 197, 94, 0.25)",
//     transition: { duration: 0.3, ease: easeInOut },
//   },
// };

const gradientFlow = {
  initial: { backgroundPosition: "0% 0%" },
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
    transition: { duration: 15, repeat: Infinity },
  },
};

const VisionSection = () => {
  const countries = [
    { flag: "🇬🇭", name: "Ghana", year: "2026" },
    { flag: "🇰🇪", name: "Kenya", year: "2026" },
    { flag: "🇿🇦", name: "South Africa", year: "2027" },
    { flag: "🇪🇬", name: "Egypt", year: "2027" },
    { flag: "🇷🇼", name: "Rwanda", year: "2028" },
    { flag: "🇪🇹", name: "Ethiopia", year: "2028" },
  ];

  return (
    <motion.section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F0F9F0 0%, #E0F3E0 50%, #D1EDD1 100%)",
        backgroundSize: "200% 200%"
      }}
      variants={gradientFlow}
      initial="initial"
      animate="animate"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#22C55E]/20"
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              top: `${10 + i * 10}%`,
              left: `${5 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              ease: easeInOut,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <FaGlobeAfrica className="text-[#22C55E] text-4xl mr-3" />
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#16A34A]"
              variants={holoShimmer}
              initial="initial"
              animate="animate"
            >
              The QwikChow Pan-African Vision
            </motion.h2>
          </div>
          
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-[#22C55E]/10"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Starting with Nigeria and Benin Republic, QwikChow is set to transform campus food delivery 
            across Africa. Our journey expands to bring revolutionary food experiences to universities 
            throughout the continent.
          </motion.p>
        </motion.div>

        {/* Countries Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20"
          variants={cardRise}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-[#22C55E]/20 flex flex-col items-center gap-4 group cursor-pointer"
              variants={cardRise}
              whileHover="hover"
              initial="rest"
              animate="rest"
              custom={index}
            >
              <span className="text-4xl">{country.flag}</span>
              <div className="text-center">
                <motion.h3 
                  className="text-xl font-semibold text-[#22C55E] mb-2"
                  whileHover={{ color: "#16A34A" }}
                >
                  {country.name}
                </motion.h3>
                <p className="text-gray-600 font-medium">Launching {country.year}</p>
              </div>
              <motion.div
                className="w-12 h-12 bg-[#22C55E]/10 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.2, backgroundColor: "#22C55E" }}
              >
                <FaRocket className="text-[#22C55E] group-hover:text-white" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Orbiting Food Icons */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.div variants={orbitTrail(0)}>
            <FaPizzaSlice className="text-[#22C55E]/40 text-2xl" />
          </motion.div>
          <motion.div variants={orbitTrail(5)}>
            <FaHamburger className="text-[#16A34A]/40 text-2xl" />
          </motion.div>
          <motion.div variants={orbitTrail(10)}>
            <FaUtensils className="text-[#22C55E]/40 text-2xl" />
          </motion.div>
        </div>

        {/* Audio Waveform */}
        <motion.div 
          className="flex justify-center space-x-1 mt-12"
          initial="initial"
          animate="animate"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-4 bg-[#22C55E]/50 rounded-full"
              variants={wavePulse}
              custom={i * 0.2}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">Be part of the revolution</p>
          <motion.button
            className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Join the Movement
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VisionSection;