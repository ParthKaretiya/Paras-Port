import React, { useState, useEffect } from 'react';

export default function AdvocatePreloader({ lang }) {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Elegant 1.6s display (+0.5s added) then smooth fade-out
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1600);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ease-out px-4 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Proper, Handcrafted Centerpiece - Clean & Elegant, No Blue Soup */}
      <div className="flex flex-col items-center text-center max-w-sm w-full">
        
        {/* Official Advocate Judicial Seal */}
        <div className="relative mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#09223d] flex items-center justify-center p-2.5 shadow-sm bg-white">
            <svg
              viewBox="0 0 100 100"
              className="w-14 h-14 sm:w-16 sm:h-16 text-[#09223d]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Circular Seal border */}
              <circle cx="50" cy="50" r="46" stroke="#09223d" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="42" stroke="#c59b27" strokeWidth="1" strokeDasharray="3 3" />

              {/* Central Pillar of Justice */}
              <line x1="50" y1="20" x2="50" y2="76" stroke="#09223d" strokeWidth="3" strokeLinecap="round" />
              
              {/* Pillar Base */}
              <line x1="36" y1="76" x2="64" y2="76" stroke="#09223d" strokeWidth="3" strokeLinecap="round" />
              <line x1="40" y1="72" x2="60" y2="72" stroke="#c59b27" strokeWidth="1.5" />

              {/* Beam */}
              <path d="M24 34 Q 50 28 76 34" stroke="#09223d" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="50" cy="28" r="3" fill="#c59b27" />

              {/* Left Scale Pan */}
              <line x1="26" y1="34" x2="20" y2="48" stroke="#09223d" strokeWidth="1.2" />
              <line x1="26" y1="34" x2="32" y2="48" stroke="#09223d" strokeWidth="1.2" />
              <path d="M17 48 Q 26 54 35 48 Z" fill="#09223d" />

              {/* Right Scale Pan */}
              <line x1="74" y1="34" x2="68" y2="48" stroke="#09223d" strokeWidth="1.2" />
              <line x1="74" y1="34" x2="80" y2="48" stroke="#09223d" strokeWidth="1.2" />
              <path d="M65 48 Q 74 54 83 48 Z" fill="#09223d" />

              {/* Advocate White Collar Bands */}
              <g transform="translate(0, -2)">
                <polygon points="45,21 48,21 47,30 43,30" fill="#ffffff" stroke="#09223d" strokeWidth="0.8" />
                <polygon points="52,21 55,21 57,30 53,30" fill="#ffffff" stroke="#09223d" strokeWidth="0.8" />
              </g>
            </svg>
          </div>
        </div>

        {/* Advocate Name in Classical Editorial Serif */}
        <h2 className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#09223d] mb-1">
          {lang === 'gu' ? "એડવોકેટ પારસકુમાર જે. કારેટીયા" : "Adv. Paraskumar J. Karetiya"}
        </h2>

        {/* Official Standing */}
        <p className="text-xs font-mono font-semibold text-slate-500 tracking-widest uppercase mb-4">
          {lang === 'gu' ? "ગુજરાત હાઈકોર્ટ • રાજકોટ બાર" : "Gujarat High Court • Rajkot Bar"}
        </p>

        {/* Elegant Minimalist Hairline Progress Bar */}
        <div className="w-40 sm:w-48 h-[2px] bg-slate-200 rounded-full overflow-hidden relative mb-3">
          <div className="absolute inset-y-0 left-0 bg-[#09223d] rounded-full animate-[progress_1.6s_ease-in-out_infinite]" />
        </div>

        {/* Official Emblem Text */}
        <span className="text-[11px] font-mono text-slate-400 tracking-widest uppercase">
          {lang === 'gu' ? "સત્યમેવ જયતે" : "Satyameva Jayate"}
        </span>

      </div>
    </div>
  );
}
