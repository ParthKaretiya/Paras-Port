import React from 'react';
import { Award, Scale, CheckCircle2, Landmark } from 'lucide-react';

export default function StatsBar({ stats }) {
  const icons = [Award, Scale, CheckCircle2, Landmark];

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 -mt-2 sm:-mt-6 relative z-20">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-card border border-slate-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={stat.label}
                className="flex items-center sm:items-start gap-2.5 sm:gap-4 p-2 sm:p-0 rounded-xl bg-slate-50/50 sm:bg-transparent"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#edf4f9] text-[#426a92] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Icon size={18} className="sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm sm:text-xl lg:text-2xl font-extrabold text-[#09294f] tracking-tight truncate">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-[#305073] mt-0.5 truncate">
                    {stat.label}
                  </div>
                  <div className="text-[9px] sm:text-[11px] text-slate-400 mt-0.5 truncate hidden sm:block">
                    {stat.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
