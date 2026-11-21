import React, { useState, useEffect } from 'react';

export default function AdvocatePreloader({ lang }) {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Smooth 1.25s load then fade out
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1200);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 1750);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#081a2e] transition-all duration-500 ease-out px-4 ${
        fading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Subtle fine geometric line texture */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      {/* Centerpiece: Executive Architectural Card */}
      <div className="relative z-10 bg-[#0c223a] rounded-2xl p-7 sm:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-[#1f436d] max-w-sm sm:max-w-md w-full flex flex-col items-center text-center">
        
        {/* Animated Judicial Seal Badge */}
        <div className="relative mb-5">
          
          {/* Subtle Rotating Dotted Ring */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-dashed border-[#d4a359]/40 animate-[spin_12s_linear_infinite]" />
          
          {/* Central Seal */}
          <div className="absolute inset-2 rounded-full bg-[#081a2e] border-2 border-[#1e4470] shadow-md flex items-center justify-center p-2.5">
            <svg
              viewBox="0 0 100 100"
              className="w-14 h-14 sm:w-16 sm:h-16 text-[#60a5fa] drop-shadow-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Circular Seal border */}
              <circle cx="50" cy="50" r="46" stroke="#d4a359" strokeWidth="2" opacity="0.8" />
              <circle cx="50" cy="50" r="41" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

              {/* Central Scales of Justice Pillar */}
              <line x1="50" y1="20" x2="50" y2="76" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
              
              {/* Pillar Base */}
              <line x1="38" y1="76" x2="62" y2="76" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="42" y1="72" x2="58" y2="72" stroke="#d4a359" strokeWidth="2" />

              {/* Top Arch / Beam */}
              <path d="M26 34 Q 50 28 74 34" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="50" cy="28" r="3.5" fill="#d4a359" />

              {/* Left Scale Pan with strings */}
              <line x1="28" y1="34" x2="22" y2="48" stroke="#93c5fd" strokeWidth="1.2" opacity="0.9" />
              <line x1="28" y1="34" x2="34" y2="48" stroke="#93c5fd" strokeWidth="1.2" opacity="0.9" />
              <path d="M19 48 Q 28 54 37 48 Z" fill="#60a5fa" />

              {/* Right Scale Pan with strings */}
              <line x1="72" y1="34" x2="66" y2="48" stroke="#93c5fd" strokeWidth="1.2" opacity="0.9" />
              <line x1="72" y1="34" x2="78" y2="48" stroke="#93c5fd" strokeWidth="1.2" opacity="0.9" />
              <path d="M63 48 Q 72 54 81 48 Z" fill="#60a5fa" />

              {/* Advocate White Collar Bands */}
              <g transform="translate(0, -2)">
                <polygon points="45,21 48,21 47,30 43,30" fill="#ffffff" stroke="#081a2e" strokeWidth="0.8" />
                <polygon points="52,21 55,21 57,30 53,30" fill="#ffffff" stroke="#081a2e" strokeWidth="0.8" />
              </g>
            </svg>
          </div>

        </div>

        {/* Advocate Name */}
        <h2 className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-white mb-1">
          {lang === 'gu' ? "એડવોકેટ પારસકુમાર જે. કારેટીયા" : "Adv. Paraskumar J. Karetiya"}
        </h2>

        {/* Qualifications */}
        <p className="text-xs sm:text-sm font-mono font-medium text-[#93c5fd] tracking-wide mb-1">
          {lang === 'gu' ? "બી.કોમ. • એલ.એલ.બી. • એલ.એલ.એમ. (ચાલુ)" : "B.Com. • LL.B. • LL.M. (Running)"}
        </p>

        {/* Court Jurisdiction */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#102742] text-[#93c5fd] text-[10px] sm:text-xs font-mono font-semibold border border-[#1f4570] mb-5">
          <span>{lang === 'gu' ? "ગુજરાત હાઈકોર્ટ • રાજકોટ" : "Gujarat High Court • Rajkot"}</span>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-44 sm:w-52 h-1 rounded-full bg-[#132f50] overflow-hidden relative mb-3">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#60a5fa] via-[#d4a359] to-[#60a5fa] rounded-full animate-[progress_1.2s_ease-in-out_infinite]" />
        </div>

        {/* Legal Motto */}
        <span className="text-[11px] text-slate-400 font-medium tracking-wider">
          {lang === 'gu' ? "સત્યમેવ જયતે • વિશ્વાસપાત્ર કાનૂની સેવા" : "Truth Alone Triumphs • Trusted Legal Counsel"}
        </span>

      </div>
    </div>
  );
}
