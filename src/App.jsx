import React, { useState, useEffect } from 'react';

// Core Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import FeatureCard from './components/FeatureCard';
import SupportedCurrencies from './components/SupportedCurrencies';
import NewsFeed from './components/NewsFeed';
import Footer from './components/Footer';

// Icons for the Feature Cards
import { 
  HiLightningBolt, 
  HiShieldCheck, 
  HiCubeTransparent, 
  HiUserGroup 
} from 'react-icons/hi';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Sync the 'dark' class with the HTML element for Tailwind dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen text-slate-900 dark:text-white transition-colors duration-500 font-['Plus_Jakarta_Sans'] selection:bg-brand-purple selection:text-white">
      
      {/* BACKGROUND MESH GRADIENT (Fixed in place) */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-[#0a0516]">
        {/* Animated Purple Orb */}
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-brand-purple/10 dark:bg-brand-purple/20 blur-[120px] animate-pulse" />
        {/* Animated Blue Orb */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-blue/10 dark:bg-brand-blue/10 blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* TOP MARQUEE TICKER */}
        <Ticker />

        {/* NAVIGATION BAR */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="max-w-7xl mx-auto px-6">
          
          {/* HERO SECTION (Text + Animation) */}
          <Hero />

          {/* CURRENCY LOGOS SECTION */}
          <SupportedCurrencies />

          {/* MAIN GRID: Features on Left, News on Right */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-32 pb-32">
            
            {/* Left Content: Feature Cards Grid */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-extrabold tracking-tight mb-3">
                  Ecosystem <span className="text-brand-purple">Features</span>
                </h2>
                <p className="opacity-50 text-base max-w-lg">
                  Everything you need to master your digital assets in one clean interface.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureCard 
                  title="Instant Claims" 
                  desc="Direct blockchain throughput for lightning-fast rewards. No middleman, no delays."
                  Icon={HiLightningBolt}
                  color="purple"
                />
                <FeatureCard 
                  title="Security First" 
                  desc="Military-grade encryption and multi-signature wallets keep your $FORZ safe."
                  Icon={HiShieldCheck}
                  color="blue"
                />
                <FeatureCard 
                  title="Smart Nodes" 
                  desc="Earn rewards simply by holding. Stake your assets to secure the Forzchain network."
                  Icon={HiCubeTransparent}
                  color="cyan"
                />
                <FeatureCard 
                  title="Referral Engine" 
                  desc="Build your own network. Earn up to 15% lifetime commission on all invited user claims."
                  Icon={HiUserGroup}
                  color="indigo"
                />
              </div>
            </div>

            {/* Right Content: News Feed Sidebar */}
            <aside className="space-y-10">
              <div className="lg:mt-0 mt-10">
                <h2 className="text-3xl font-extrabold tracking-tight mb-3">Live Feed</h2>
                <p className="opacity-50 text-sm">Real-time market insights and social data.</p>
              </div>
              
              <NewsFeed />
              
              {/* Promotional Call-to-Action Card */}
              <div className="glass-card p-10 rounded-[2.5rem] bg-gradient-to-br from-brand-purple/20 to-transparent border-brand-purple/20 text-center">
                <h4 className="font-bold text-xl mb-3">Join Forzchain</h4>
                <p className="text-xs opacity-60 mb-8 leading-relaxed">
                  Subscribe to our newsletter for exclusive early-access to new faucet rewards.
                </p>
                <button className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold text-xs hover:scale-105 transition-all shadow-xl">
                  Sign Up Now
                </button>
              </div>
            </aside>

          </section>
        </main>

        {/* GLOBAL FOOTER */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
