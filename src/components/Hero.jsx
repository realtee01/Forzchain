import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center mt-20 md:mt-24 px-4 relative">
      {/* Container with a very subtle 3D elastic hover effect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01 }} 
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 12, 
          opacity: { duration: 0.7 } 
        }}
        className="max-w-4xl z-10"
      >
        {/* Kinetic Typography Headline - Responsive Colors */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-slate-900 dark:text-white transition-colors duration-300">
          THE FUTURE IS <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple via-brand-blue to-brand-accent">
            FORZCHAIN
          </span>
        </h1>

        {/* Description Text - Adjusted for Light/Dark contrast */}
        <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed transition-colors duration-300">
          The ultimate crypto faucet and social hub. Secure your assets and earn 
          rewards in a beautiful, decentralized world.
        </p>

        {/* Buttons - Redesigned for Maximum Visibility */}
        <div className="mt-12 flex flex-col sm:row gap-4 justify-center items-center">
          <motion.button 
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-12 py-4.5 bg-brand-purple text-white font-black rounded-2xl hover:scale-105 transition-all text-sm uppercase tracking-widest shadow-lg shadow-brand-purple/20"
          >
            Get Started
          </motion.button>
          
          <motion.button 
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-12 py-4.5 glass-card font-black rounded-2xl text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all text-sm uppercase tracking-widest border-slate-200 dark:border-white/10"
          >
            Whitepaper
          </motion.button>
        </div>
      </motion.div>

      {/* Hero Social Proof */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.8 }}
        className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 dark:opacity-30"
      >
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-900 dark:text-white">Distributed: 1.2M $FORZ</div>
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-900 dark:text-white">Active: 500K+ Users</div>
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-900 dark:text-white">Uptime: 99.9%</div>
      </motion.div>
    </div>
  );
};

export default Hero;
