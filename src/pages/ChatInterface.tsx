import React from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, MoreVertical, Phone } from 'lucide-react';
import { PatternCanvas } from '../components/PatternCanvas';
import { useNavBar } from '../context/NavBarContext';

export function ChatInterface() {
  const { reactiveBar, navVisible } = useNavBar();
  const topPadding = reactiveBar ? (navVisible ? 'pt-20' : 'pt-0') : 'pt-20';
  return (
    <div className={`min-h-screen w-full ${topPadding} bg-[#0A0A0A] flex h-screen overflow-hidden transition-[padding-top] duration-300 ease-out`}>
      {/* Left Panel - Context & Pattern */}
      <div className="hidden lg:flex w-1/3 border-r border-white/10 flex-col relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <PatternCanvas
            type="smooth"
            animated
            intensity={0.4}
            color="#8B5CF6" />

        </div>

        <div className="relative z-10 p-8 flex-1 flex flex-col">
          <div className="mb-8">
            <h2 className="text-3xl font-['Instrument_Serif'] mb-2">Alex M.</h2>
            <p className="text-zinc-400 text-sm">Online • Last active 2m ago</p>
          </div>

          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4">
              <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                Current State
              </h3>
              <p className="text-teal-400 font-medium">Receptive</p>
              <p className="text-sm text-zinc-400 mt-1">
                Pattern indicates stabilization after recent spike.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4">
              <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                Suggested Approach
              </h3>
              <p className="text-sm text-zinc-300">
                Validate feelings of isolation. Avoid direct confrontation about
                sleep schedule.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Chat */}
      <div className="flex-1 flex flex-col bg-[#0A0A0A]">
        {/* Chat Header */}
        <header className="h-16 border-b border-white/10 flex items-center justify-between px-6">
          <div className="lg:hidden">
            <h3 className="font-medium">Alex M.</h3>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors">
              <Phone size={20} />
            </button>
            <button className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex justify-center">
            <span className="text-xs text-zinc-600 bg-white/5 px-3 py-1 rounded-full">
              Today, 2:42 AM
            </span>
          </div>

          <div className="flex gap-4 max-w-xl">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex-shrink-0" />
            <div className="space-y-1">
              <div className="bg-zinc-800/50 rounded-2xl rounded-tl-none px-4 py-3 text-zinc-200">
                I don't know why I'm even awake right now. It just feels like
                everything is too loud.
              </div>
            </div>
          </div>

          <div className="flex gap-4 max-w-xl flex-row-reverse ml-auto">
            <div className="w-8 h-8 rounded-full bg-teal-900/50 flex-shrink-0 flex items-center justify-center text-xs text-teal-200 border border-teal-500/30">
              SW
            </div>
            <div className="space-y-1">
              <div className="bg-teal-900/20 border border-teal-500/20 rounded-2xl rounded-tr-none px-4 py-3 text-teal-100">
                It sounds like you're feeling really overwhelmed, Alex. "Loud"
                is a heavy way to feel when it's quiet outside.
              </div>
            </div>
          </div>

          <div className="flex gap-4 max-w-xl">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex-shrink-0" />
            <div className="space-y-1">
              <div className="bg-zinc-800/50 rounded-2xl rounded-tl-none px-4 py-3 text-zinc-200">
                Yeah. Like static.
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex gap-0.5">
                  <span
                    className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce"
                    style={{
                      animationDelay: '0ms'
                    }} />

                  <span
                    className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce"
                    style={{
                      animationDelay: '150ms'
                    }} />

                  <span
                    className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce"
                    style={{
                      animationDelay: '300ms'
                    }} />

                </div>
                <span className="text-xs text-zinc-600">Alex is typing...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-white/10">
          <div className="relative">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full bg-zinc-900 border border-white/10 rounded-full pl-6 pr-14 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all" />

            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <button className="p-2 text-zinc-400 hover:text-white transition-colors">
                <Paperclip size={20} />
              </button>
              <button className="p-2 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>);

}