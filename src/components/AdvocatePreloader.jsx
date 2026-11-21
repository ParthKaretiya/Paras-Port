import React, { useState, useEffect } from 'react';

export default function AdvocatePreloader({ lang }) {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Show preloader for a smooth 1.3s then fade out
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1250);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 1850);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#436c93] via-[#567fa6] to-[#6b93bb] transition-all duration-700 ease-out px-4 ${
        fading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background ambient lighting orbs matching the hero theme */}
      <div className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-white/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-72 sm:w-80 h-72 sm:h-80 bg-[#25466b]/35 rounded-full blur-2xl pointer-events-none" />

      {/* Centerpiece: Signature Frosted White Glass Card */}
      <div className="relative z-10 bg-white/95 backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-10 shadow-[0_25px_60px_-15px_rgba(7,28,56,0.3)] border border-white/90 max-w-sm sm:max-w-md w-full flex flex-col items-center text-center">
        
        {/* Animated Advocate Emblem with Double Ring */}
        <div className="relative mb-5">
          
          {/* Rotating Dotted Ring */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-[#48719a]/40 animate-[spin_10s_linear_infinite]" />
          
          {/* Soft Pulsing Ambient Glow */}
          <div className="absolute inset-1 rounded-full border border-[#48719a]/20 animate-ping opacity-30" />

          {/* Central Judicial Seal Badge */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-b from-[#edf4f9] via-white to-[#edf4f9] border-2 border-[#48719a]/30 shadow-md flex items-center justify-center p-2.5">
            
            {/* SVG Official Advocate Emblem */}
            <svg
              viewBox="0 0 100 100"
              className="w-14 h-14 sm:w-16 sm:h-16 text-[#09294f] drop-shadow-xs"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Circular Seal border */}
              <circle cx="50" cy="50" r="46" stroke="#48719a" strokeWidth="2" opacity="0.75" />
              <circle cx="50" cy="50" r="41" stroke="#09294f" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

              {/* Central Scales of Justice Pillar */}
              <line x1="50" y1="20" x2="50" y2="76" stroke="#09294f" strokeWidth="3" strokeLinecap="round" />
              
              {/* Pillar Base */}
              <line x1="38" y1="76" x2="62" y2="76" stroke="#09294f" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="42" y1="72" x2="58" y2="72" stroke="#48719a" strokeWidth="2" />

              {/* Top Arch / Beam */}
              <path d="M26 34 Q 50 28 74 34" stroke="#09294f" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="50" cy="28" r="3.5" fill="#48719a" />

              {/* Left Scale Pan with strings */}
              <line x1="28" y1="34" x2="22" y2="48" stroke="#48719a" strokeWidth="1.2" opacity="0.9" />
              <line x1="28" y1="34" x2="34" y2="48" stroke="#48719a" strokeWidth="1.2" opacity="0.9" />
              <path d="M19 48 Q 28 54 37 48 Z" fill="#09294f" />

              {/* Right Scale Pan with strings */}
              <line x1="72" y1="34" x2="66" y2="48" stroke="#48719a" strokeWidth="1.2" opacity="0.9" />
              <line x1="72" y1="34" x2="78" y2="48" stroke="#48719a" strokeWidth="1.2" opacity="0.9" />
              <path d="M63 48 Q 72 54 81 48 Z" fill="#09294f" />

              {/* Advocate White Collar Bands at Top Center */}
              <g transform="translate(0, -2)">
                {/* Left Collar Band with dark stroke */}
                <polygon points="45,21 48,21 47,30 43,30" fill="#ffffff" stroke="#09294f" strokeWidth="0.8" />
                {/* Right Collar Band with dark stroke */}
                <polygon points="52,21 55,21 57,30 53,30" fill="#ffffff" stroke="#09294f" strokeWidth="0.8" />
              </g>
            </svg>

          </div>

        </div>

        {/* Advocate Name */}
        <h2 className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#09294f] mb-1">
          {lang === 'gu' ? "એડવોકેટ પારસકુમાર જે. કારેટીયા" : "Adv. Paraskumar J. Karetiya"}
        </h2>

        {/* Qualifications */}
        <p className="text-xs sm:text-sm font-bold text-[#385c82] tracking-wide mb-1">
          {lang === 'gu' ? "બી.કોમ. • એલ.એલ.બી. • એલ.એલ.એમ. (ચાલુ)" : "B.Com. • LL.B. • LL.M. (Running)"}
        </p>

        {/* Court Jurisdiction */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#edf4f9] text-[#24486f] text-[10px] sm:text-xs font-semibold border border-[#d6e4f0] mb-5">
          <span>{lang === 'gu' ? "ગુજરાત હાઈકોર્ટ • રાજકોટ" : "Gujarat High Court • Rajkot"}</span>
        </div>

        {/* Animated Progress Bar matching site theme */}
        <div className="w-44 sm:w-52 h-1.5 rounded-full bg-slate-200/80 overflow-hidden relative mb-3">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#48719a] via-[#2d5885] to-[#48719a] rounded-full animate-[progress_1.2s_ease-in-out_infinite]" />
        </div>

        {/* Legal Motto */}
        <span className="text-[11px] text-slate-500 font-semibold tracking-wider">
          {lang === 'gu' ? "સત્યમેવ જયતે • વિશ્વાસપાત્ર કાનૂની સેવા" : "Truth Alone Triumphs • Trusted Legal Counsel"}
        </span>

      </div>
    </div>
  );
}
