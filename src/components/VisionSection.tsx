import { motion } from 'framer-motion';
import { FaGlobeAfrica } from 'react-icons/fa';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  },
};

const cardRise = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.08
    } 
  },
};

const VisionSection = () => {
  const countries = [
    { flag: "🇬🇭", name: "Ghana", year: "2026" },
    { flag: "🇿🇦", name: "South Africa", year: "2026" },
    { flag: "🇰🇪", name: "Kenya", year: "2027" },
    { flag: "🇪🇬", name: "Egypt", year: "2027" },
    { flag: "🇷🇼", name: "Rwanda", year: "2028" },
    { flag: "🇪🇹", name: "Ethiopia", year: "2028" },
  ];

  return (
    <motion.section
      className="py-16 relative overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      style={{
        background: "linear-gradient(135deg, rgba(248,250,248,0.98) 0%, rgba(232,245,232,0.98) 100%), url('https://res.cloudinary.com/dzibfknxq/image/upload/v1755939588/__26_tictre.jpg') center/cover",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header */}
        <motion.div
          className="mb-12"
          variants={fadeInUp}
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            variants={fadeInUp}
          >
            <FaGlobeAfrica className="text-[#22C55E] text-4xl" />
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Our Pan-African Vision
          </motion.h2>
          
          <motion.div
            className="max-w-2xl mx-auto"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <p className="text-lg text-[#2D3436] bg-white/80 p-6 rounded-xl leading-relaxed border border-[#22C55E]/10">
              Starting with Nigeria and Benin Republic, QwikChow is set to transform campus food delivery 
              across Africa. Our journey expands to bring revolutionary food experiences to universities 
              throughout the continent.
            </p>
          </motion.div>
        </motion.div>

        {/* Countries Grid - Compact */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
          variants={cardRise}
        >
          {countries.map((country) => (
            <motion.div
              key={country.name}
              className="bg-white p-4 rounded-xl border border-[#e5e7eb] hover:border-[#22C55E]/30 transition-all duration-300 group cursor-pointer flex flex-col items-center gap-2"
              variants={cardRise}
              whileHover={{ 
                y: -4, 
                boxShadow: "0 10px 25px rgba(34, 197, 94, 0.1)",
              }}
            >
              <div className="text-4xl">
                {country.flag}
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-[#1a2e1a] group-hover:text-[#22C55E] transition-colors duration-300">
                  {country.name}
                </h3>
                <p className="text-sm text-[#67726F]">Launching {country.year}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default VisionSection;