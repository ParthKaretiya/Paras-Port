import React from 'react';
import { FileSearch, Compass, PenTool, Gavel } from 'lucide-react';

export default function WorkflowSection({ workflow, lang }) {
  const icons = [FileSearch, Compass, PenTool, Gavel];

  return (
    <section id="workflow" className="py-12 sm:py-24 bg-[#eef4f9] border-y border-[#dce7f0] overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-3 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#3f678f] px-3.5 py-1 rounded-full bg-white border border-[#d3e2ef]">
            {lang === 'gu' ? "અમારી કાર્યપદ્ધતિ" : "The Legal Process"}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#082a52] tracking-tight mt-3 mb-3 sm:mb-4">
            {lang === 'gu' ? (
              <>તમારા કેસનું <span className="font-serif italic font-normal text-[#0b418a]">પગલાવાર કાનૂની સંચાલન</span></>
            ) : (
              <>How We Manage <span className="font-serif italic font-normal text-[#0b418a]">Your Legal Matter</span></>
            )}
          </h2>
          <p className="text-sm sm:text-base text-[#4f6b88]">
            {lang === 'gu'
              ? "દસ્તાવેજોની ઊંડાણપૂર્વક ચકાસણીથી લઈને અદાલતમાં મજબૂત દલીલ સુધીની પારદર્શક અને ન્યાયી પદ્ધતિ."
              : "A disciplined, confidential four-stage framework ensuring thorough preparation and persuasive representation."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {workflow.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.step}
                className="bg-white rounded-3xl p-7 shadow-card border border-slate-100 flex flex-col justify-between relative group hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-serif font-bold text-[#48719a]/40 group-hover:text-[#48719a] transition">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#eff5fa] text-[#426a92] flex items-center justify-center group-hover:bg-[#48719a] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#09294f] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4e6782] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#385e87] font-semibold">
                  <span>{lang === 'gu' ? `તબક્કો ${item.step}` : `Phase ${item.step}`}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
