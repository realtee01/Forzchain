import { HiSun, HiMoon } from 'react-icons/hi';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="sticky top-4 z-50 mx-6 glass-card rounded-2xl px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-black tracking-tighter">
        FORZ<span className="text-brand-purple">CHAIN</span>
      </div>
      
      <div className="hidden md:flex gap-8 font-medium opacity-80">
        <a href="#" className="hover:text-brand-purple transition-colors">Earn</a>
        <a href="#" className="hover:text-brand-purple transition-colors">Games</a>
        <a href="#" className="hover:text-brand-purple transition-colors">Advertise</a>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:scale-110 transition-all"
        >
          {darkMode ? <HiSun className="text-yellow-400" /> : <HiMoon className="text-brand-blue" />}
        </button>
        <button className="bg-brand-purple px-5 py-2 rounded-xl font-bold text-white shadow-lg shadow-brand-purple/30">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
