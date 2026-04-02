import React, { useState, useEffect } from 'react';
// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import FeatureCard from './components/FeatureCard';
import SupportedCurrencies from './components/SupportedCurrencies';
import NewsFeed from './components/NewsFeed';
// Icons for Features
import { HiLightningBolt, HiShieldCheck, HiCubeTransparent, HiUserGroup } from 'react-icons/hi';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle dark mode class on the HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen text-slate-900 dark:text-white transition-colors duration-500 font-sans selection:bg-brand-purple selection:text-white">
      
      {/* 1. Animated Background Mesh */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-[#0a0516]">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-brand-purple/10 dark:bg-brand-purple/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-blue/10 dark:bg-brand-blue/10 blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* 2. Top Live Price Ticker */}
        <Ticker />

        {/* 3. Navigation */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="max-w-7xl mx-auto px-6">
          {/* 4. Hero Section */}
          <Hero />

          {/* 5. Supported Currencies Bar */}
          <SupportedCurrencies />

          {/* 6. Main Content Grid (Features + News) */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-32 pb-32">
            
            {/* Left Side: Feature Grid (2 Columns) */}
            <div className="lg:col-span-2">
              <div className="mb-10">
                <h2 className="text-3xl font-black tracking-tight mb-2">Core Features</h2>
                <p className="opacity-50 text-sm">Everything you need to manage your crypto journey.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FeatureCard 
                  title="Instant Claims" 
                  desc="Get your rewards delivered to your wallet in milliseconds. No waiting, no hassle."
                  Icon={HiLightningBolt}
                  color="purple"
                />
                <FeatureCard 
                  title="Ironclad Security" 
                  desc="Your assets are protected by industry-leading multi-sig encryption protocols."
                  Icon={HiShieldCheck}
                  color="blue"
                />
                <FeatureCard 
                  title="Staking Nodes" 
                  desc="Stake your $FORZ tokens to earn passive income while securing the network."
                  Icon={HiCubeTransparent}
                  color="cyan"
                />
                <FeatureCard 
                  title="Referral Engine" 
                  desc="Built-in social layer: Earn 15% lifetime commission for every friend you invite."
                  Icon={HiUserGroup}
                  color="indigo"
                />
              </div>
            </div>

            {/* Right Side: News & Social Feed */}
            <aside className="space-y-8">
              <div className="mb-10 lg:mb-0">
                <h2 className="text-3xl font-black tracking-tight mb-2">Market News</h2>
                <p className="opacity-50 text-sm">Stay ahead with real-time updates.</p>
              </div>
              <NewsFeed />
              
              {/* Optional: Newsletter / CTA Card */}
              <div className="glass-card p-8 rounded-[2.5rem] bg-gradient-to-br from-brand-purple/20 to-transparent border-brand-purple/20">
                <h4 className="font-bold text-lg mb-2">Join the Community</h4>
                <p className="text-xs opacity-60 mb-6">Receive weekly insights and exclusive $FORZ airdrops.</p>
                <button className="w-full py-3 bg-white dark:bg-white text-black rounded-xl font-bold text-xs hover:scale-105 transition-all">
                  Subscribe Now
                </button>
              </div>
            </aside>

          </section>
        </main>

        {/* 7. Footer Placeholder */}
        <footer className="py-10 text-center border-t border-white/5 opacity-30 text-xs tracking-widest">
          © 2026 FORZCHAIN ECOSYSTEM. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </div>
  );
}

export default App;
