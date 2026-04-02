import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center mt-20 md:mt-24 px-4">
      {/* Container with a very subtle 3D elastic hover effect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01 }} 
        transition={{ type: "spring", stiffness: 300, damping: 12, opacity: { duration: 0.7 } }}
        className="max-w-4xl"
      >
        {/* Kinetic Typography Headline - Reverted to Clean Sizes */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-white">
          THE FUTURE IS <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple via-brand-blue to-brand-accent">
            FORZCHAIN
          </span>
        </h1>

        {/* Reverted Description Text */}
        <p className="mt-6 text-base md:text-lg opacity-60 max-w-xl mx-auto leading-relaxed dark:text-slate-300">
          The ultimate crypto faucet and social hub. Secure your assets and earn 
          rewards in a beautiful, decentralized world.
        </p>

        {/* Reverted Buttons - Rounded Squares for Premium Feel */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button 
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-12 py-4.5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-all text-sm uppercase tracking-widest shadow-xl"
          >
            Get Started
          </motion.button>
          
          <motion.button 
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-12 py-4.5 glass-card font-black rounded-2xl hover:bg-white/20 transition-all text-sm uppercase tracking-widest border-white/10"
          >
            Whitepaper
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
