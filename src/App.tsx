import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavBarProvider } from './context/NavBarContext';
import { Navigation } from './components/Navigation';
import { HeroSection } from './pages/HeroSection';
import { Dashboard } from './pages/Dashboard';
import { DetailView } from './pages/DetailView';
import { EscalationFlow } from './pages/EscalationFlow';
import { ChatInterface } from './pages/ChatInterface';
type View = 'hero' | 'dashboard' | 'detail' | 'escalation' | 'chat';
export function App() {
  const [currentView, setCurrentView] = useState<View>('hero');
  const [selectedYouthId, setSelectedYouthId] = useState<string | null>(null);

  const renderView = () => {
    switch (currentView) {
      case 'hero':
        return <HeroSection onStart={() => setCurrentView('dashboard')} />;
      case 'dashboard':
        return (
          <Dashboard
            onSelectProfile={(id) => {
              setSelectedYouthId(id);
              setCurrentView('detail');
            }}
          />
        );
      case 'detail':
        return (
          <DetailView
            selectedYouthId={selectedYouthId ?? '1'}
            onBack={() => setCurrentView('dashboard')}
            onEscalate={() => setCurrentView('escalation')}
          />
        );


      case 'escalation':
        return (
          <EscalationFlow
            youthId={selectedYouthId ?? '1'}
            onComplete={() => setCurrentView('chat')}
            onCancel={() => setCurrentView('detail')}
          />
        );


      case 'chat':
        return <ChatInterface selectedYouthId={selectedYouthId ?? '1'} />;
      default:
        return <HeroSection onStart={() => setCurrentView('dashboard')} />;
    }
  };
  return (
    <NavBarProvider>
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
    </div>
    </NavBarProvider>);

}