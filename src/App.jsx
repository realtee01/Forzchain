import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import NewsFeed from './components/NewsFeed';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen text-slate-900 dark:text-white transition-colors duration-500">
      <div className="mesh-bg">
        <div className="orb top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-purple" />
        <div className="orb bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-blue" />
      </div>

      <div className="relative z-10">
        <Ticker />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="max-w-7xl mx-auto px-6 pt-10">
          <Hero />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 pb-20">
             <div className="lg:col-span-2 space-y-10">
                {/* FeatureCard components will go here */}
             </div>
             <NewsFeed />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
