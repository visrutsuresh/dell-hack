import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  MessageSquare,
  Share2,
  AlertTriangle,
} from 'lucide-react';
import { PatternCanvas } from '../components/PatternCanvas';
import { ANALYSIS_DATA, type YouthAnalysis } from '../data/analysisData';
import { useNavBar } from '../context/NavBarContext';

interface DetailViewProps {
  selectedYouthId: string;
  onBack: () => void;
  onEscalate: () => void;
}

function getRiskBadgeClass(status: string) {
  switch (status) {
    case 'critical':
      return 'bg-red-500/20 text-red-400 border-red-500/20';
    case 'warning':
      return 'bg-amber-500/20 text-amber-400 border-amber-500/20';
    default:
      return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20';
  }
}

function downloadReport(analysis: YouthAnalysis, youthId: string) {
  const report = {
    exportedAt: new Date().toISOString(),
    profileId: analysis.profileId,
    name: analysis.name,
    status: analysis.status,
    risk: analysis.risk,
    peakActivity: `${analysis.peakActivity}${analysis.peakActivitySuffix}`,
    frequencySpike: analysis.frequencySpike,
    isolationIndex: analysis.isolationIndex,
    circadianWindow: analysis.circadianWindow,
    echoHomogeneity: analysis.echoHomogeneity,
    keywords: analysis.keywords.map((k) => k.text),
  };
  const blob = new Blob([JSON.stringify(report, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `risk-report-${analysis.profileId.replace('#', '')}-${youthId}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function DetailView({ selectedYouthId, onBack, onEscalate }: DetailViewProps) {
  const analysis = ANALYSIS_DATA[selectedYouthId] ?? ANALYSIS_DATA['1'];
  const { reactiveBar, navVisible } = useNavBar();
  const topPadding = reactiveBar ? (navVisible ? 'pt-24' : 'pt-0') : 'pt-24';

  return (
    <div className={`min-h-screen w-full ${topPadding} px-6 pb-12 bg-[#0A0A0A] transition-[padding-top] duration-300 ease-out`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Monitor</span>
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={() => downloadReport(analysis, selectedYouthId)}
              className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Export Report
            </button>
            <button
              onClick={onEscalate}
              className="px-6 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full hover:bg-red-500/20 transition-colors flex items-center gap-2"
            >
              <AlertTriangle size={16} />
              Initiate Escalation
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Pattern Signature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-zinc-900/30 border border-white/10 rounded-3xl p-8 relative overflow-hidden min-h-[500px] flex flex-col"
          >
            <div className="relative z-10 mb-8">
              <h1 className="text-4xl font-['Instrument_Serif'] mb-2">
                {analysis.name}
              </h1>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-zinc-400">ID: {analysis.profileId}</span>
                <span
                  className={`px-2 py-0.5 rounded-full border ${getRiskBadgeClass(analysis.status)}`}
                >
                  {analysis.status === 'critical'
                    ? 'Critical'
                    : analysis.status === 'warning'
                      ? 'Warning'
                      : 'Stable'}{' '}
                  Risk ({analysis.risk}%)
                </span>
              </div>
            </div>

            <div className="flex-1 relative w-full h-full flex items-center justify-center">
              <PatternCanvas
                type={analysis.patternType}
                intensity={analysis.risk / 100}
                color={analysis.patternColor}
                animated
                className="absolute inset-0 w-full h-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 border-r border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">
                    {analysis.peakActivity}
                    <span className="text-sm font-normal text-zinc-500">
                      {' '}
                      {analysis.peakActivitySuffix}
                    </span>
                  </div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">
                    Peak Activity
                  </div>
                </div>
                <div className="p-4 border-r border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">
                    {analysis.frequencySpike}
                    <span className="text-sm font-normal text-zinc-500">%</span>
                  </div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">
                    Frequency Spike
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-white mb-1">
                    {analysis.isolationIndex}
                  </div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">
                    Isolation Index
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Component Signals */}
          <div className="space-y-6">
            {/* Circadian Disruption */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-teal-400" size={20} />
                <h3 className="font-medium">Circadian Disruption</h3>
              </div>
              <div className="h-32 flex items-center justify-center relative">
                <div className="w-24 h-24 rounded-full border border-white/10 relative">
                  <div className="absolute inset-0 rounded-full border-t-2 border-teal-500 rotate-45 opacity-50" />
                  <div className="absolute inset-0 rounded-full border-r-2 border-violet-500 -rotate-12 opacity-70" />
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                  <div
                    className={`absolute top-2 right-4 w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)] ${
                      analysis.status === 'critical'
                        ? 'bg-red-500'
                        : analysis.status === 'warning'
                          ? 'bg-amber-500'
                          : 'bg-emerald-500'
                    }`}
                  />
                  <div
                    className={`absolute top-4 right-2 w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)] ${
                      analysis.status === 'critical'
                        ? 'bg-red-500'
                        : analysis.status === 'warning'
                          ? 'bg-amber-500'
                          : 'bg-emerald-500'
                    }`}
                  />
                </div>
                <div className="ml-6 text-sm text-zinc-400">
                  <p>
                    Activity shifted to{' '}
                    <span className="text-white">{analysis.circadianWindow}</span>{' '}
                    window.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Semantic Drift */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-violet-400" size={20} />
                <h3 className="font-medium">Semantic Drift</h3>
              </div>
              <div className="h-32 relative overflow-hidden">
                <div className="flex flex-wrap gap-2 justify-center items-center h-full content-center">
                  {analysis.keywords.map((kw) => (
                    <span key={kw.text} className={kw.className}>
                      {kw.text}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Echo Density */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="text-indigo-400" size={20} />
                <h3 className="font-medium">Echo Density</h3>
              </div>
              <div className="h-32 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="w-24 h-24 border border-white/5 rounded-full absolute animate-ping duration-[3s]" />
                  <div className="w-16 h-16 border border-white/10 rounded-full absolute" />
                  <div className="w-10 h-10 border border-white/20 rounded-full absolute" />
                  <div className="w-2 h-2 bg-indigo-500 rounded-full relative z-10" />
                </div>
                <div className="ml-6 text-sm">
                  <p className="text-zinc-400">Interaction loop tightening.</p>
                  <p className="text-indigo-400">
                    {analysis.echoHomogeneity} Homogeneity
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
