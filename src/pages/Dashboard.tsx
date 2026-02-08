import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PatternCanvas } from '../components/PatternCanvas';
import { MoreHorizontal } from 'lucide-react';

type RiskFilter = 'all' | 'critical' | 'warning';

interface DashboardProps {
  onSelectProfile: (id: string) => void;
}
const MOCK_YOUTH = [
{
  id: '1',
  name: 'Alex M.',
  status: 'critical',
  risk: 92,
  lastActive: '2m ago'
},
{
  id: '2',
  name: 'Sarah K.',
  status: 'warning',
  risk: 68,
  lastActive: '15m ago'
},
{
  id: '3',
  name: 'Jordan T.',
  status: 'stable',
  risk: 12,
  lastActive: '1h ago'
},
{
  id: '4',
  name: 'Casey L.',
  status: 'stable',
  risk: 24,
  lastActive: '3h ago'
},
{
  id: '5',
  name: 'Riley P.',
  status: 'warning',
  risk: 45,
  lastActive: '5m ago'
},
{
  id: '6',
  name: 'Jamie D.',
  status: 'stable',
  risk: 8,
  lastActive: '1d ago'
}];

export function Dashboard({ onSelectProfile }: DashboardProps) {
  const [riskFilter, setRiskFilter] = useState<RiskFilter>('all');

  const filteredYouth = useMemo(() => {
    let list = MOCK_YOUTH;
    if (riskFilter === 'critical') list = list.filter((y) => y.status === 'critical');
    else if (riskFilter === 'warning') list = list.filter((y) => y.status === 'warning');
    return [...list].sort((a, b) => b.risk - a.risk);
  }, [riskFilter]);

  return (
    <div className="min-h-screen w-full pt-28 px-6 pb-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-['Instrument_Serif'] mb-2">
              Active Monitoring
            </h2>
            <p className="text-zinc-400">
              Tracking 842 active patterns • 3 critical alerts
            </p>
          </div>
          <div className="flex gap-4">
            <select
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value as RiskFilter)}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-zinc-300 outline-none focus:border-white/30"
            >
              <option value="all">All Risk Levels</option>
              <option value="critical">Critical Only</option>
              <option value="warning">Warning</option>
            </select>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredYouth.map((youth, index) =>
          <motion.div
            key={youth.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: index * 0.1
            }}
            onClick={() => onSelectProfile(youth.id)}
            className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-colors cursor-pointer">

              {/* Card Header */}
              <div className="p-6 flex items-start justify-between relative z-10">
                <div>
                  <h3 className="text-xl font-medium text-white mb-1">
                    {youth.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-pulse" />
                    Active {youth.lastActive}
                  </div>
                </div>
                <div
                className={`
                  px-3 py-1 rounded-full text-xs font-medium border
                  ${youth.status === 'critical' ? 'bg-red-500/10 text-red-400 border-red-500/20' : youth.status === 'warning' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}
                `}>

                  {youth.risk}% Risk
                </div>
              </div>

              {/* Visualization Area */}
              <div className="h-48 w-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/90 z-10" />
                <PatternCanvas
                type={
                youth.status === 'critical' ?
                'jagged' :
                youth.status === 'warning' ?
                'mixed' :
                'smooth'
                }
                intensity={youth.risk / 100}
                color={
                youth.status === 'critical' ?
                '#EF4444' :
                youth.status === 'warning' ?
                '#F59E0B' :
                '#10B981'
                }
                animated={true}
                className="opacity-80 group-hover:opacity-100 transition-opacity" />

              </div>

              {/* Hover Action */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex justify-between items-center">
                <span className="text-sm text-white font-medium">
                  View Analysis
                </span>
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                  <MoreHorizontal size={16} />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>);

}