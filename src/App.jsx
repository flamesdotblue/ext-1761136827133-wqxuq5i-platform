import React from 'react';
import Navbar from './components/Navbar';
import HeroSplineCover from './components/HeroSplineCover';
import FeatureGrid from './components/FeatureGrid';
import CodeAssistPanel from './components/CodeAssistPanel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <HeroSplineCover />
        <FeatureGrid />
        <CodeAssistPanel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
