import React from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  ChevronRight,
  AlertTriangle,
  UserCheck,
  FileText } from
'lucide-react';
import { ANALYSIS_DATA } from '../data/analysisData';

interface EscalationFlowProps {
  youthId: string;
  onComplete: () => void;
  onCancel: () => void;
}
export function EscalationFlow({ youthId, onComplete, onCancel }: EscalationFlowProps) {
  const analysis = ANALYSIS_DATA[youthId] ?? ANALYSIS_DATA['1'];
  const steps = [
  {
    id: 1,
    title: 'Pattern Detection',
    desc: 'Anomaly flagged by AI model v4.2',
    icon: AlertTriangle,
    status: 'complete'
  },
  {
    id: 2,
    title: 'Risk Scoring',
    desc: `Calculated risk index: ${analysis.risk}/100`,
    icon: FileText,
    status: 'complete'
  },
  {
    id: 3,
    title: 'Human Review',
    desc: 'Social worker assessment required',
    icon: UserCheck,
    status: 'current'
  },
  {
    id: 4,
    title: 'Intervention',
    desc: 'Protocol A: Parent/Guardian Contact',
    icon: Check,
    status: 'pending'
  }];

  return (
    <div className="min-h-screen w-full pt-28 px-6 pb-12 bg-[#0A0A0A] flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-['Instrument_Serif'] mb-4">
            Escalation Protocol
          </h2>
          <p className="text-zinc-400">Case {analysis.profileId} • {analysis.name}</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-zinc-800" />

          <div className="space-y-12">
            {steps.map((step, index) =>
            <motion.div
              key={step.id}
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: index * 0.2
              }}
              className="relative flex gap-8 group">

                {/* Step Indicator */}
                <div
                className={`
                  relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4 transition-colors duration-500
                  ${step.status === 'complete' ? 'bg-teal-500 border-[#0A0A0A] text-black' : step.status === 'current' ? 'bg-[#0A0A0A] border-violet-500 text-violet-500' : 'bg-[#0A0A0A] border-zinc-800 text-zinc-600'}
                `}>

                  <step.icon size={24} />
                </div>

                {/* Content */}
                <div
                className={`flex-1 pt-2 ${step.status === 'pending' ? 'opacity-40' : 'opacity-100'}`}>

                  <h3 className="text-xl font-medium mb-1">{step.title}</h3>
                  <p className="text-zinc-400 mb-4">{step.desc}</p>

                  {step.status === 'current' &&
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0
                  }}
                  animate={{
                    opacity: 1,
                    height: 'auto'
                  }}
                  className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 mt-4">

                      <h4 className="text-sm font-medium text-zinc-300 mb-4 uppercase tracking-wider">
                        Assessment Notes
                      </h4>
                      <textarea
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500/50 min-h-[120px] mb-4"
                    placeholder="Enter your clinical observations regarding the pattern anomaly..." />

                      <div className="flex gap-4">
                        <button
                      onClick={onComplete}
                      className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors">

                          Confirm & Proceed
                        </button>
                        <button
                      onClick={onCancel}
                      className="px-6 py-2 text-zinc-400 hover:text-white transition-colors">

                          Dismiss as False Positive
                        </button>
                      </div>
                    </motion.div>
                }
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>);

}