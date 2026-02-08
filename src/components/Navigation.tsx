import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  MessageSquare,
  LayoutDashboard,
  ShieldAlert } from
'lucide-react';
import { useNavBar } from '../context/NavBarContext';
type View = 'hero' | 'dashboard' | 'detail' | 'escalation' | 'chat';
interface NavigationProps {
  currentView: View;
  onChangeView: (view: View) => void;
}
export function Navigation({ currentView, onChangeView }: NavigationProps) {
  const { reactiveBar, navVisible } = useNavBar();
  const navItems = [
  {
    id: 'hero',
    label: 'Overview',
    icon: Activity
  },
  {
    id: 'dashboard',
    label: 'Monitor',
    icon: LayoutDashboard
  },
  {
    id: 'detail',
    label: 'Analysis',
    icon: Activity
  },
  {
    id: 'escalation',
    label: 'Risk',
    icon: ShieldAlert
  },
  {
    id: 'chat',
    label: 'Connect',
    icon: MessageSquare
  }];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md"
      initial={false}
      animate={{ y: reactiveBar && !navVisible ? '-100%' : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => onChangeView('hero')}
          className="text-2xl font-['Instrument_Serif'] italic tracking-wide hover:opacity-80 transition-opacity">

          EchoBreak
        </button>

        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
            currentView === item.id ||
            item.id === 'detail' && currentView === 'detail';
            return (
              <button
                key={item.id}
                onClick={() => onChangeView(item.id as View)}
                className="relative group flex items-center gap-2 py-2">

                <span
                  className={`text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>

                  {item.label}
                </span>
                {isActive &&
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-teal-500 to-violet-500"
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}
                  transition={{
                    duration: 0.3
                  }} />

                }
              </button>);

          })}
        </div>

        <div className="flex items-center gap-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-teal-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
            <span className="text-xs font-medium text-white">SW</span>
          </div>
        </div>
      </div>
    </motion.nav>);

}