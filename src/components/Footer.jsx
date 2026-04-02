import { FaTwitter, FaDiscord, FaTelegramPlane, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/5 bg-black/20 backdrop-blur-md pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-black tracking-tighter mb-4">
            FORZ<span className="text-brand-purple">CHAIN</span>
          </div>
          <p className="text-sm opacity-50 leading-relaxed">
            The most powerful decentralized ecosystem for claiming and growing your digital assets.
          </p>
          <div className="flex gap-4 mt-6">
            <FaTwitter className="text-xl opacity-50 hover:opacity-100 hover:text-blue-400 cursor-pointer transition-all" />
            <FaDiscord className="text-xl opacity-50 hover:opacity-100 hover:text-indigo-500 cursor-pointer transition-all" />
            <FaTelegramPlane className="text-xl opacity-50 hover:opacity-100 hover:text-sky-400 cursor-pointer transition-all" />
            <FaGithub className="text-xl opacity-50 hover:opacity-100 hover:text-white cursor-pointer transition-all" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-brand-purple">Platform</h4>
          <ul className="space-y-4 text-sm opacity-60">
            <li className="hover:text-white cursor-pointer">Faucet Hub</li>
            <li className="hover:text-white cursor-pointer">P2P Games</li>
            <li className="hover:text-white cursor-pointer">Staking</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-brand-blue">Company</h4>
          <ul className="space-y-4 text-sm opacity-60">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Legal</li>
          </ul>
        </div>

        {/* Status Column */}
        <div className="glass-card p-6 rounded-2xl border-white/5">
          <h4 className="font-bold mb-2 text-sm">Network Status</h4>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-green-500">Operational</span>
          </div>
          <p className="text-[10px] opacity-40 uppercase tracking-tighter">
            Avg. Transaction Speed: <span className="text-white font-bold">0.4s</span>
          </p>
        </div>
      </div>

      <div className="mt-16 text-center text-[10px] opacity-30 tracking-[0.2em] uppercase">
        © 2026 Tobiloba. Built with passion for the future of finance.
      </div>
    </footer>
  );
};

export default Footer;
