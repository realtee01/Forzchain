import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; // For the moving person/laptop
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
    <div className="min-h-screen text-slate-900 dark:text-white transition-colors duration-500 font-sans">
      
      {/* --- THE MOVING OBJECT BACKGROUND --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0516]">
        
        {/* Object 1: Large Purple Sphere */}
        <div className="glass-sphere animate-float-3d top-[-10%] left-[-5%] w-[60%] h-[60%] from-purple-500" />
        
        {/* Object 2: Medium Blue Sphere */}
        <div className="glass-sphere animate-float-3d-slow bottom-[-10%] right-[-5%] w-[50%] h-[50%] from-blue-500" />
        
        {/* Object 3: Cyan Drifter */}
        <div className="glass-sphere animate-float-3d top-[40%] right-[10%] w-[25%] h-[25%] from-cyan-400 opacity-20" />

        {/* --- MOVING HERO OBJECT (Crypto Person) --- */}
        <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] opacity-40 pointer-events-none hidden lg:block">
           <DotLottieReact
             src="https://lottie.host/4db68bbd-31f6-4cd8-84eb-189571e2dccc/5u2xmKkpCI.lottie"
             loop
             autoplay
           />
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
