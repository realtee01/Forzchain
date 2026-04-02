import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center mt-12 md:mt-20 px-4">
      {/* 1. The Main Motion Container with Spring Physics */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 15,
          opacity: { duration: 0.8 } 
        }}
        className="max-w-4xl"
      >
        {/* Subtle Badge */}
        <span className="px-4 py-1.5 rounded-full border border-brand-purple/20 bg-brand-purple/5 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-purple mb-8 inline-block">
          The Next Generation Faucet
        </span>

        {/* Kinetic Typography Headline */}
        <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter text-slate-900 dark:text-white">
          THE FUTURE IS <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple via-brand-blue to-brand-accent animate-gradient-x">
            FORZCHAIN
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg md:text-xl opacity-60 max-w-2xl mx-auto leading-relaxed dark:text-slate-300">
          Master your digital assets with the most secure and rewarding 
          crypto ecosystem. Fast, decentralized, and built for you.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-5 bg-brand-purple text-white font-black rounded-[2rem] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all text-sm uppercase tracking-widest"
          >
            Get Started
          </motion.button>
          
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-5 glass-card font-black rounded-[2rem] hover:bg-white/20 dark:hover:bg-white/5 transition-all text-sm uppercase tracking-widest border-white/10"
          >
            Whitepaper
          </motion.button>
        </div>
      </motion.div>

      {/* 2. Visual Social Proof / Ticker-lite */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-50"
      >
        <div className="text-xs font-bold tracking-widest uppercase">Over 1.2M $FORZ Distributed</div>
        <div className="text-xs font-bold tracking-widest uppercase">500k+ Active Users</div>
        <div className="text-xs font-bold tracking-widest uppercase">99.9% Uptime</div>
      </motion.div>
    </div>
  );
};

export default Hero;
