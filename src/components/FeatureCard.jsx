import { motion } from 'framer-motion';

const FeatureCard = ({ title, desc, Icon, color }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card p-8 rounded-[2rem] flex flex-col items-start gap-4 group cursor-pointer"
    >
      {/* Glowing Icon Container */}
      <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.1)] group-hover:shadow-${color}-500/20 transition-all`}>
        <Icon className={`text-3xl text-${color}-400`} />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        <p className="text-sm opacity-50 leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="pt-4 w-full">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
