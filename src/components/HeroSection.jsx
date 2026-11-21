import React from 'react';
import { Calendar, PhoneCall, ShieldCheck, ArrowUpRight, MapPin, MessageCircle, Navigation } from 'lucide-react';

export default function HeroSection({ profile, lang, onOpenConsultation, customPhotoUrl }) {
  const photoSrc = customPhotoUrl || '/paras-cutout.png';

  const exactDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Advocate+Paraskumar+Karetiya+Office+No+12+Nakshatra+V+Raj+Palace+Chowk+Sadhu+Vasvani+Rd+Yogi+Nagar+Rajkot+Gujarat+360005";

  return (
    <section id="home" className="relative pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden scroll-mt-28">
      
      {/* Executive Master Container - Deep Architectural Navy & Crisp Hairline Borders */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#081a2e] border border-[#1b3452] shadow-[0_20px_50px_-15px_rgba(5,15,28,0.5)] p-5 sm:p-9 lg:p-12">
        
        {/* Subtle geometric line pattern (Crisp & architectural, not blurry blobs) */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" 
        />
        
        {/* Subtle executive top corner ambient light */}
        <div className="absolute -top-32 right-0 w-96 h-96 bg-[#1a4473]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT EDITORIAL COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* High Court & Bar Status Badge - Sharp, Architectural */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#102742] text-[#93c5fd] text-[11px] font-mono font-bold tracking-widest uppercase mb-4 sm:mb-6 border border-[#1f4570] w-fit shadow-xs">
              <ShieldCheck size={14} className="text-[#60a5fa] flex-shrink-0" />
              <span>{profile.badgeText}</span>
            </div>

            {/* Authoritative Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] leading-[1.2] font-bold text-white tracking-tight mb-4 sm:mb-5">
              <span className="font-serif italic font-normal text-[#d4a359] mr-2">
                {profile.heroTaglineStart}
              </span>
              {profile.heroTaglineEnd}
            </h1>

            {/* Subtext with high legibility */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-xl mb-6 font-normal">
              {profile.heroSubtext}
            </p>

            {/* Architectural Degree Metadata Strip (No childish emojis, crisp & professional) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-7">
              <div className="px-3 py-1.5 rounded-lg bg-[#102742] text-[#e2e8f0] text-xs font-mono font-bold border border-[#1e426a] flex items-center gap-1.5">
                <span className="text-[#60a5fa]">■</span>
                <span>B.Com. (2021)</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#102742] text-[#e2e8f0] text-xs font-mono font-bold border border-[#1e426a] flex items-center gap-1.5">
                <span className="text-[#60a5fa]">■</span>
                <span>LL.B. (2024)</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#d4a359]/15 text-[#f6d89b] text-xs font-mono font-bold border border-[#d4a359]/40 flex items-center gap-1.5">
                <span className="text-[#d4a359]">■</span>
                <span>LL.M. (Running)</span>
              </div>
            </div>

            {/* Action Buttons - Solid, Sharp, High Contrast */}
            <div className="space-y-2.5 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
              {/* Primary Consultation Button */}
              <button
                onClick={() => onOpenConsultation('Hero Section')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-[#f1f5f9] text-[#081a2e] font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
              >
                <Calendar size={15} className="text-[#081a2e]" />
                <span>{profile.ctaPrimary}</span>
              </button>

              {/* Direct Phone Call */}
              <a
                href={`tel:${profile.phone}`}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#132f50] hover:bg-[#1a3d68] text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 border border-[#234c7a]"
              >
                <PhoneCall size={14} className="text-[#60a5fa]" />
                <span>{profile.phone}</span>
              </a>

              {/* WhatsApp Quick Link */}
              <a
                href={`https://wa.me/919512938031?text=${encodeURIComponent(lang === 'gu' ? 'નમસ્તે એડવોકેટ પારસકુમાર, મારે કાનૂની સલાહ લેવી છે.' : 'Hello Adv. Paraskumar, I would like to consult with you.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#4ade80] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 border border-[#25D366]/40"
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>

              {/* Explore Services Link */}
              <a
                href="#services"
                className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-transparent hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1 border border-white/15"
              >
                <span>{profile.ctaSecondary}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Exact Verified Office Location & Live Direction Strip */}
            <div className="mt-7 pt-4 border-t border-[#1b3452] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2 truncate max-w-[calc(100%-125px)]">
                <MapPin size={14} className="text-[#60a5fa] flex-shrink-0" />
                <span className="font-medium text-slate-300 truncate" title={profile.office}>
                  {profile.office}
                </span>
              </div>
              <a
                href={exactDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#93c5fd] hover:text-white transition flex-shrink-0 bg-[#132f50] px-3 py-1.5 rounded-lg border border-[#224870]"
                title="Google Maps Turn-by-Turn Navigation"
              >
                <Navigation size={12} className="text-[#60a5fa]" />
                <span>{lang === 'gu' ? "દિશા-નિર્દેશ" : "Directions"}</span>
              </a>
            </div>

          </div>

          {/* RIGHT ARCHITECTURAL PORTRAIT SHOWCASE */}
          <div className="lg:col-span-5 flex justify-center">
            
            {/* Tailored Editorial Framed Box */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-2xl bg-gradient-to-b from-[#102742] via-[#0d223a] to-[#081729] border border-[#20446e] shadow-2xl p-4 sm:p-5 flex flex-col items-center">
              
              {/* Top Status Bar inside Frame */}
              <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#1b375b] text-[11px] font-mono font-semibold">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{lang === 'gu' ? "સક્રિય વકીલાત" : "Active Courtroom Practice"}</span>
                </div>
                <div className="text-slate-400">
                  {lang === 'gu' ? "નક્ષત્ર V • ઓફિસ ૧૨" : "Nakshatra V • Off. 12"}
                </div>
              </div>

              {/* Portrait Image Container */}
              <div className="relative w-full aspect-[4/4.8] rounded-xl overflow-hidden bg-[#061423] border border-[#1a385c] flex items-end justify-center">
                
                {/* Subtle studio backdrop illumination behind portrait */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_40%,rgba(37,78,124,0.45)_0%,transparent_70%)]" />

                {/* Portrait Image */}
                <img
                  src={photoSrc}
                  alt={`${profile.name} - Advocate Gujarat High Court & Rajkot District Courts`}
                  className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-[1.02]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/paras-portrait-raw.jpg';
                  }}
                />

                {/* Bottom dark subtle vignette for crisp photo integration */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#061423] via-[#061423]/60 to-transparent z-10 pointer-events-none" />
              </div>

              {/* Engraved Executive Nameplate */}
              <div className="mt-4 w-full p-3.5 rounded-xl bg-[#091f36] border border-[#1f436d] text-center">
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white">
                  {profile.name}
                </h3>
                <p className="text-[11px] text-[#93c5fd] font-medium mt-0.5 tracking-wide">
                  {profile.qualifications}
                </p>
                <div className="mt-2 pt-2 border-t border-[#16365b] flex items-center justify-center gap-1.5 text-[10px] text-slate-300 font-mono">
                  <span>CIVIL</span>
                  <span className="text-[#d4a359]">•</span>
                  <span>REVENUE</span>
                  <span className="text-[#d4a359]">•</span>
                  <span>CRIMINAL</span>
                  <span className="text-[#d4a359]">•</span>
                  <span>DOCS</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
