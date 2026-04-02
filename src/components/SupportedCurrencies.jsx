import { 
  SiBitcoin, 
  SiEthereum, 
  SiLitecoin, 
  SiDogecoin, 
  SiSolana, 
  SiBinance, 
  SiTether, 
  SiCardano 
} from 'react-icons/si';

const currencies = [
  { name: "Bitcoin", icon: SiBitcoin, color: "text-orange-500" },
  { name: "Ethereum", icon: SiEthereum, color: "text-blue-400" },
  { name: "Litecoin", icon: SiLitecoin, color: "text-slate-300" },
  { name: "Solana", icon: SiSolana, color: "text-purple-400" },
  { name: "Dogecoin", icon: SiDogecoin, color: "text-yellow-500" },
  { name: "BNB", icon: SiBinance, color: "text-yellow-600" },
  { name: "USDT", icon: SiTether, color: "text-green-500" },
  { name: "Cardano", icon: SiCardano, color: "text-blue-600" },
];

const SupportedCurrencies = () => {
  return (
    <section className="mt-24 text-center">
      <h2 className="text-sm uppercase tracking-[0.3em] font-bold opacity-40 mb-10">
        Supported Ecosystems
      </h2>
      
      {/* Glassy Grid Container */}
      <div className="glass-card p-10 rounded-[3rem] border-white/5 bg-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {currencies.map((coin, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
            >
              <div className="p-4 rounded-full bg-black/10 dark:bg-white/5 border border-white/5 group-hover:border-white/20 shadow-inner">
                <coin.icon className={`text-3xl ${coin.color} transition-all duration-300`} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                {coin.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="mt-16 h-[1px] w-1/2 mx-auto bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
    </section>
  );
};

export default SupportedCurrencies;
