import React, { useState } from 'react';
import { Quote, Star, ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection({ testimonials, faqs }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Testimonials */}
      <div className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#385e87] px-3 py-1 rounded-full bg-[#eaf1f7] border border-[#d4e2ee]">
            Client Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082a52] tracking-tight mt-3 mb-4">
            Words From Those We Have <span className="font-serif italic font-normal text-[#0b418a]">Defended</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4e6782]">
            Read first-hand accounts from business leaders, professionals, and individual litigants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 shadow-card border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="text-[#cfe1ed] mb-4" size={36} />

              <p className="text-sm text-[#3b5570] leading-relaxed italic mb-6">
                "{item.quote}"
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#09294f]">
                    {item.author}
                  </h4>
                  <div className="text-xs text-[#52708e]">
                    {item.designation}
                  </div>
                  <div className="text-[11px] text-[#385e87] font-semibold mt-0.5">
                    {item.type}
                  </div>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eaf1f7] text-[#385e87] text-xs font-semibold mb-2">
              <HelpCircle size={14} />
              <span>Clarity & Transparency</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#09294f]">
              Frequently Asked Legal Questions
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition"
                  >
                    <span className="font-semibold text-sm sm:text-base text-[#09294f]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#48719a] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 bg-white text-xs sm:text-sm text-[#47607a] leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
