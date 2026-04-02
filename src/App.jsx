import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import FeatureCard from './components/FeatureCard';
import SupportedCurrencies from './components/SupportedCurrencies';
import NewsFeed from './components/NewsFeed';
import Footer from './components/Footer';
import { HiLightningBolt, HiShieldCheck, HiCubeTransparent, HiUserGroup } from 'react-icons/hi';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0516] text-slate-900 dark:text-white transition-colors duration-500 font-sans overflow-x-hidden">
      
      {/* --- THE MOVING OBJECT BACKGROUND LAYER --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        
        {/* Animated Purple Object (Top Left) */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full 
                        bg-brand-purple/20 blur-[100px] animate-float-3d" />
        
        {/* Animated Blue Object (Bottom Right) */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full 
                        bg-brand-blue/20 blur-[100px] animate-float-3d-slow" />
        
        {/* THE "FLOATING HERO" OBJECT (Replacement for Lottie) */}
        <div className="absolute top-[25%] right-[10%] w-64 h-64 hidden lg:flex items-center justify-center">
          <div className="relative w-full h-full bg-gradient-to-br from-brand-purple/30 to-brand-accent/10 rounded-3xl backdrop-blur-md border border-white/20 animate-float-3d shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5" />
            <HiCubeTransparent className="text-9xl text-white/40 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Ticker />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="max-w-7xl mx-auto px-6 pt-10">
          <Hero />
          
          <section id="features" className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-32 pb-32">
            <div className="lg:col-span-2 space-y-12">
              <SupportedCurrencies />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureCard title="Instant Claims" desc="Direct blockchain throughput for rewards." Icon={HiLightningBolt} color="purple" />
                <FeatureCard title="Security First" desc="Military-grade encryption protocols." Icon={HiShieldCheck} color="blue" />
                <FeatureCard title="Passive Rewards" desc="Hold $FORZ tokens to earn." Icon={HiCubeTransparent} color="cyan" />
                <FeatureCard title="Referral Engine" desc="Earn 15% lifetime commission." Icon={HiUserGroup} color="indigo" />
              </div>
            </div>
            <aside className="space-y-10">
              <NewsFeed />
            </aside>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
