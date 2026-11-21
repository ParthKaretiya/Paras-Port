import React, { useState } from 'react';
import { Menu, X, PhoneCall, Globe } from 'lucide-react';

export default function Navbar({ lang, setLang, profile, navLinks, onOpenConsultation, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'gu' : 'en');
  };

  return (
    <header className="sticky top-2 sm:top-4 z-50 px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300">
      
      {/* Floating Pill Container - Responsive Padding */}
      <div className="flex items-center justify-between py-2 sm:py-3 px-3.5 sm:px-7 rounded-full bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(15,35,60,0.15)] transition-all">
        
        {/* Brand Logo - Responsive Sizing */}
        <a href="#home" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#48719a] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
            ⚖
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-lg lg:text-xl font-bold tracking-tight text-[#09294f] leading-tight group-hover:text-[#48719a] transition-colors truncate max-w-[150px] sm:max-w-none">
              {lang === 'gu' ? "એડવોકેટ પારસકુમાર" : "Adv. Paraskumar"}
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold text-[#4e6c8e] tracking-wide hidden xs:inline">
              {lang === 'gu' ? "ગુજરાત હાઈકોર્ટ • રાજકોટ" : "Gujarat High Court • Rajkot"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs xl:text-sm font-bold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative flex items-center gap-1.5 py-1.5 px-3 rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'text-[#09294f] bg-[#edf4f9] font-extrabold shadow-xs' 
                    : 'text-[#355577] hover:text-[#09294f] hover:bg-slate-100 font-semibold'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b6694] animate-pulse" />
                )}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action Controls - Adaptively Hidden/Compact on Mobile */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-[#edf4f9] hover:bg-[#e2eef7] text-[#1c4772] border border-[#d0e1f0] transition-all active:scale-95 shadow-xs"
            title="Switch Language / ભાષા બદલો"
          >
            <Globe size={13} className="text-[#3b6694] flex-shrink-0" />
            <span>{lang === 'en' ? 'ગુજરાતી' : 'English'}</span>
          </button>

          {/* Direct Phone Button: Full pill on desktop, circular call icon on mobile */}
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-1.5 p-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-bold bg-[#14375e] hover:bg-[#0d2642] text-white shadow-sm transition-all"
            title={`Call ${profile.phone}`}
          >
            <PhoneCall size={13} className="text-emerald-400" />
            <span className="hidden md:inline">95129 38031</span>
          </a>

          {/* Main Consultation CTA Button - Shown on tablet & desktop */}
          <button
            onClick={() => onOpenConsultation('Navbar')}
            className="hidden sm:inline-flex px-4 sm:px-5 py-2 rounded-full font-bold text-xs sm:text-sm bg-[#48719a] hover:bg-[#385c82] text-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            {lang === 'gu' ? 'મુલાકાત બુક કરો' : "Let's Talk"}
          </button>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#09294f] border border-slate-200 transition focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

        </div>

      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 sm:p-5 rounded-3xl bg-white/98 backdrop-blur-2xl border border-slate-200 text-slate-800 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 max-w-7xl mx-auto">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-slate-100 text-[#09294f] font-bold transition text-sm flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-400">→</span>
              </a>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${profile.phone}`}
                className="w-full py-2.5 rounded-xl bg-[#edf4f9] text-[#14375e] text-xs font-bold flex items-center justify-center gap-2 border border-[#d2e3f1]"
              >
                <PhoneCall size={14} className="text-emerald-600" />
                <span>Call Mo. {profile.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation('Mobile Nav');
                }}
                className="w-full py-2.5 rounded-full bg-[#48719a] text-white font-bold text-sm shadow hover:bg-[#385c82] transition text-center"
              >
                {lang === 'gu' ? 'મુલાકાત બુક કરો' : "Schedule Consultation"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
