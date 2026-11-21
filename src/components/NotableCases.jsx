import React from 'react';
import { Gavel, CheckCircle, Scale, Shield, ArrowUpRight } from 'lucide-react';

export default function NotableCases({ notableCases, onOpenConsultation }) {
  return (
    <section id="cases" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8f1f8] text-[#365e8a] text-xs font-semibold mb-3">
            <Scale size={14} />
            <span>Litigation Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082a52] tracking-tight">
            Notable <span className="font-serif italic font-normal text-[#0b418a]">Case Milestones</span> & Precedents
          </h2>
          <p className="text-sm sm:text-base text-[#4e6782] max-w-2xl mt-3">
            An illustrative selection of significant matters successfully represented before High Courts, Tribunals, and Appellate Benches.
          </p>
        </div>

        <button
          onClick={() => onOpenConsultation('Case Evaluation')}
          className="px-6 py-3 rounded-full bg-[#48719a] hover:bg-[#385c82] text-white text-xs sm:text-sm font-semibold shadow-md transition-all self-start md:self-auto flex items-center gap-2"
        >
          <span>Get Your Case Evaluated</span>
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Case Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {notableCases.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 shadow-card border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#eef4f9] rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#385e87] px-3 py-1 rounded-full bg-[#eef4f9] border border-[#d6e3ee]">
                  {item.court}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  {item.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#09294f] mb-3 group-hover:text-[#0b418a] transition">
                {item.title}
              </h3>

              <p className="text-sm text-[#4e6782] leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                <CheckCircle size={16} className="text-emerald-600 flex-shrink-0" />
                <span>Result: {item.outcome}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legal Ethics Note */}
      <div className="mt-8 text-center text-xs text-slate-400 italic">
        * Case summaries are presented solely for factual and informational guidance in accordance with the Bar Council rules. Past results do not guarantee identical outcomes.
      </div>

    </section>
  );
}
