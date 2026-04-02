import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center mt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-8xl font-black leading-none">
          THE FUTURE IS <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple via-brand-blue to-brand-accent">
            FORZCHAIN
          </span>
        </h1>
        <p className="mt-8 text-lg opacity-60 max-w-xl mx-auto leading-relaxed">
          The ultimate crypto faucet and social hub. Secure your assets and earn 
          rewards in a beautiful, decentralized world.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-10 py-4 bg-white dark:bg-white text-black font-black rounded-2xl hover:scale-105 transition-all">
            Get Started
          </button>
          <button className="px-10 py-4 glass-card font-black rounded-2xl hover:bg-white/20">
            Whitepaper
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
