import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { HeroSection } from './pages/HeroSection';
import { Dashboard } from './pages/Dashboard';
import { DetailView } from './pages/DetailView';
import { EscalationFlow } from './pages/EscalationFlow';
import { ChatInterface } from './pages/ChatInterface';
type View = 'hero' | 'dashboard' | 'detail' | 'escalation' | 'chat';
export function App() {
  const [currentView, setCurrentView] = useState<View>('hero');
  const renderView = () => {
    switch (currentView) {
      case 'hero':
        return <HeroSection onStart={() => setCurrentView('dashboard')} />;
      case 'dashboard':
        return <Dashboard onSelectProfile={() => setCurrentView('detail')} />;
      case 'detail':
        return (
          <DetailView
            onBack={() => setCurrentView('dashboard')}
            onEscalate={() => setCurrentView('escalation')} />);


      case 'escalation':
        return (
          <EscalationFlow
            onComplete={() => setCurrentView('chat')}
            onCancel={() => setCurrentView('detail')} />);


      case 'chat':
        return <ChatInterface />;
      default:
        return <HeroSection onStart={() => setCurrentView('dashboard')} />;
    }
  };
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-teal-500/30 selection:text-teal-200">
      <Navigation currentView={currentView} onChangeView={setCurrentView} />

      <AnimatePresence mode="wait">
        <motion.main
          key={currentView}
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -10
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="w-full">

          {renderView()}
        </motion.main>
      </AnimatePresence>
    </div>);

}