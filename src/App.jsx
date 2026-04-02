import React, { useState, useEffect } from 'react';
// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import FeatureCard from './components/FeatureCard';
import SupportedCurrencies from './components/SupportedCurrencies';
import NewsFeed from './components/NewsFeed';
import Footer from './components/Footer';
// Icons
import { HiLightningBolt, HiShieldCheck, HiCubeTransparent, HiUserGroup } from 'react-icons/hi';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen text-slate-900 dark:text-white transition-colors duration-500 font-sans selection:bg-brand-purple">
      
      {/* --- THE SUBTLE MOTION GLOW LAYER --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0516]">
        
        {/* Animated Purple Orb (Top Left) - Drifting Clockwise */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full 
                        bg-brand-purple/15 blur-[100px] animate-float-slow" />
                        
        {/* Animated Blue Orb (Bottom Right) - Drifting Counter-Clockwise */}
        <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full 
                        bg-brand-blue/15 blur-[100px] animate-float-slow-delayed" />
                        
        {/* Static Central Soft Focus - Gives the "Glass" depth */}
        <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full 
                        bg-brand-accent/5 blur-[90px] animate-pulse" />
      </div>

      <div className="relative z-10">
        <Ticker />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="max-w-7xl mx-auto px-6 pt-10">
          <Hero />
          
          <section id="features" className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-32 pb-32">
            <div className="lg:col-span-2 space-y-12">
              <SupportedCurrencies /> {/* Placing Currencies with Features Grid */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureCard 
                  title="Instant Claims" desc="Direct blockchain throughput for lightning-fast rewards."
                  Icon={HiLightningBolt} color="purple"
                />
                <FeatureCard 
                  title="Security First" desc="Military-grade encryption protocols and multi-sig wallets."
                  Icon={HiShieldCheck} color="blue"
                />
                <FeatureCard 
                  title="Passive Rewards" desc="Earn rewards simply by holding $FORZ tokens."
                  Icon={HiCubeTransparent} color="cyan"
                />
                <FeatureCard 
                  title="Referral Engine" desc="Invite friends and earn 15% lifetime commission."
                  Icon={HiUserGroup} color="indigo"
                />
              </div>
            </div>

            <aside id="social" className="space-y-10">
              <NewsFeed />
              <div className="glass-card p-10 rounded-[2rem] bg-gradient-to-br from-brand-purple/15 to-transparent border-brand-purple/15">
                <h4 className="font-bold text-xl mb-3">Join Forzchain</h4>
                <button className="w-full py-4 bg-white text-black rounded-xl font-bold text-xs hover:scale-105 transition-all shadow-xl">
                  Sign Up Now
                </button>
              </div>
            </aside>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
