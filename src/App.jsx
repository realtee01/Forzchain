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
      
      {/* --- THE GLOW LAYER START --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-[#0a0516]">
        
        {/* Animated Purple Orb (Top Left) */}
        <div className="absolute top-[-15%] left-[-10%] w-[80%] h-[80%] rounded-full 
                        bg-brand-purple/20 blur-[120px] animate-float" />
                        
        {/* Animated Blue Orb (Bottom Right) */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full 
                        bg-brand-blue/20 blur-[120px] animate-float-delayed" />
                        
        {/* Static Subtle Accent (Center) */}
        <div className="absolute top-[20%] left-[30%] w-[50%] h-[50%] rounded-full 
                        bg-brand-accent/5 blur-[100px] animate-pulse" />
      </div>
      {/* --- THE GLOW LAYER END --- */}

      <div className="relative z-10">
        <Ticker />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="max-w-7xl mx-auto px-6">
          <Hero />
          <SupportedCurrencies />

          <section id="features" className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-32 pb-32">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-black tracking-tight mb-3">
                  Ecosystem <span className="text-brand-purple">Features</span>
                </h2>
                <p className="opacity-50 text-base max-w-lg">
                  Everything you need to master your digital assets in one clean interface.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureCard 
                  title="Instant Claims" 
                  desc="Direct blockchain throughput for lightning-fast rewards."
                  Icon={HiLightningBolt} color="purple"
                />
                <FeatureCard 
                  title="Security First" 
                  desc="Military-grade encryption and multi-signature wallets."
                  Icon={HiShieldCheck} color="blue"
                />
                <FeatureCard 
                  title="Smart Nodes" 
                  desc="Earn rewards simply by holding $FORZ tokens."
                  Icon={HiCubeTransparent} color="cyan"
                />
                <FeatureCard 
                  title="Referral Engine" 
                  desc="Earn 15% lifetime commission on all invited user claims."
                  Icon={HiUserGroup} color="indigo"
                />
              </div>
            </div>

            <aside id="social" className="space-y-10">
              <NewsFeed />
              <div className="glass-card p-10 rounded-[2.5rem] bg-gradient-to-br from-brand-purple/20 to-transparent border-brand-purple/20">
                <h4 className="font-bold text-xl mb-3">Join Forzchain</h4>
                <button className="w-full py-4 bg-white dark:bg-white text-black rounded-2xl font-bold text-xs hover:scale-105 transition-all">
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
