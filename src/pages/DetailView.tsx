import React, { Component } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  Activity,
  MessageSquare,
  Share2,
  AlertTriangle } from
'lucide-react';
import { PatternCanvas } from '../components/PatternCanvas';
interface DetailViewProps {
  onBack: () => void;
  onEscalate: () => void;
}
export function DetailView({ onBack, onEscalate }: DetailViewProps) {
  return (
    <div className="min-h-screen w-full pt-24 px-6 pb-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="flex items-center justify-between mb-8">

          <button
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">

            <ArrowLeft size={20} />
            <span>Back to Monitor</span>
          </button>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors">
              Export Report
            </button>
            <button
              onClick={onEscalate}
              className="px-6 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full hover:bg-red-500/20 transition-colors flex items-center gap-2">

              <AlertTriangle size={16} />
              Initiate Escalation
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Pattern Signature */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            className="lg:col-span-2 bg-zinc-900/30 border border-white/10 rounded-3xl p-8 relative overflow-hidden min-h-[500px] flex flex-col">

            <div className="relative z-10 mb-8">
              <h1 className="text-4xl font-['Instrument_Serif'] mb-2">
                Alex M.
              </h1>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-zinc-400">ID: #8492-AC</span>
                <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/20">
                  Critical Risk (92%)
                </span>
              </div>
            </div>

            <div className="flex-1 relative w-full h-full flex items-center justify-center">
              <PatternCanvas
                type="jagged"
                intensity={0.9}
                color="#F87171"
                animated
                className="absolute inset-0 w-full h-full" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 border-r border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">
                    2:42
                    <span className="text-sm font-normal text-zinc-500">
                      am
                    </span>
                  </div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">
                    Peak Activity
                  </div>
                </div>
                <div className="p-4 border-r border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">
                    +412
                    <span className="text-sm font-normal text-zinc-500">%</span>
                  </div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">
                    Frequency Spike
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-white mb-1">High</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">
                    Isolation Index
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Component Signals */}
          <div className="space-y-6">
            {/* Timing / Clock */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: 0.2
              }}
              className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6">

              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-teal-400" size={20} />
                <h3 className="font-medium">Circadian Disruption</h3>
              </div>
              <div className="h-32 flex items-center justify-center relative">
                {/* Abstract Clock Viz */}
                <div className="w-24 h-24 rounded-full border border-white/10 relative">
                  <div className="absolute inset-0 rounded-full border-t-2 border-teal-500 rotate-45 opacity-50" />
                  <div className="absolute inset-0 rounded-full border-r-2 border-violet-500 -rotate-12 opacity-70" />
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                  {/* Activity dots */}
                  <div className="absolute top-2 right-4 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  <div className="absolute top-4 right-2 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                </div>
                <div className="ml-6 text-sm text-zinc-400">
                  <p>
                    Activity shifted to{' '}
                    <span className="text-white">3am - 5am</span> window.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Keyword Constellation */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: 0.3
              }}
              className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6">

              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-violet-400" size={20} />
                <h3 className="font-medium">Semantic Drift</h3>
              </div>
              <div className="h-32 relative overflow-hidden">
                <div className="flex flex-wrap gap-2 justify-center items-center h-full content-center">
                  <span className="text-xs text-zinc-600">school</span>
                  <span className="text-sm text-zinc-500">tired</span>
                  <span className="text-base text-zinc-300">alone</span>
                  <span className="text-lg text-white font-medium">
                    pointless
                  </span>
                  <span className="text-xs text-zinc-600">tomorrow</span>
                  <span className="text-sm text-zinc-400">sleep</span>
                  <span className="text-xs text-zinc-700">friends</span>
                </div>
              </div>
            </motion.div>

            {/* Echo Chamber */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: 0.4
              }}
              className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6">

              <div className="flex items-center gap-3 mb-4">
                <Share2 className="text-indigo-400" size={20} />
                <h3 className="font-medium">Echo Density</h3>
              </div>
              <div className="h-32 flex items-center justify-center">
                {/* Concentric Rings Viz */}
                <div className="relative flex items-center justify-center">
                  <div className="w-24 h-24 border border-white/5 rounded-full absolute animate-ping duration-[3s]" />
                  <div className="w-16 h-16 border border-white/10 rounded-full absolute" />
                  <div className="w-10 h-10 border border-white/20 rounded-full absolute" />
                  <div className="w-2 h-2 bg-indigo-500 rounded-full relative z-10" />
                </div>
                <div className="ml-6 text-sm">
                  <p className="text-zinc-400">Interaction loop tightening.</p>
                  <p className="text-indigo-400">94% Homogeneity</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>);

}