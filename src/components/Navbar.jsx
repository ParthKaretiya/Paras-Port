import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Globe, ArrowRight } from 'lucide-react';

export default function Navbar({ lang, setLang, profile, navLinks, onOpenConsultation, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'gu' : 'en');
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none ${
        isScrolled ? 'pt-2 sm:pt-3' : 'pt-3 sm:pt-5'
      }`}
    >
      
      {/* Floating Pill Container - Sticky Navbar with High Blur & Elevation */}
      <div 
        className={`pointer-events-auto flex items-center justify-between transition-all duration-300 rounded-full border ${
          isScrolled 
            ? 'py-2 px-3 sm:py-2.5 sm:px-6 bg-white/95 backdrop-blur-2xl border-white/90 shadow-[0_12px_35px_-8px_rgba(9,41,79,0.22)] ring-1 ring-black/5' 
            : 'py-2.5 sm:py-3.5 px-3.5 sm:px-7 bg-white/90 backdrop-blur-xl border-white/80 shadow-[0_8px_30px_-10px_rgba(9,41,79,0.12)]'
        }`}
      >
        
        {/* Brand Logo - Responsive Sizing */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group flex-shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#48719a] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
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

        {/* Desktop Navigation Links with Smooth Indicator */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 text-xs xl:text-sm font-bold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative flex items-center gap-1.5 py-1.5 px-3 rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'text-[#09294f] bg-[#edf4f9] font-extrabold shadow-2xs ring-1 ring-[#48719a]/20' 
                    : 'text-[#355577] hover:text-[#09294f] hover:bg-slate-100/80 font-semibold'
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

        {/* Right Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-[#edf4f9] hover:bg-[#e2eef7] text-[#1c4772] border border-[#d0e1f0] transition-all active:scale-95 shadow-2xs"
            title="Switch Language / ભાષા બદલો"
          >
            <Globe size={13} className="text-[#3b6694] flex-shrink-0" />
            <span>{lang === 'en' ? 'ગુજરાતી' : 'English'}</span>
          </button>

          {/* Direct Phone Button */}
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-1.5 p-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-bold bg-[#14375e] hover:bg-[#0d2642] text-white shadow-xs transition-all hover:scale-105 active:scale-95"
            title={`Call ${profile.phone}`}
          >
            <PhoneCall size={13} className="text-emerald-400" />
            <span className="hidden md:inline">95129 38031</span>
          </a>

          {/* Main Consultation CTA Button */}
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
        <div className="pointer-events-auto lg:hidden mt-2 p-4 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/90 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#edf4f9] text-[#09294f] font-extrabold'
                      : 'text-[#355577] hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#3b6694]" />}
                    <span>{link.name}</span>
                  </div>
                  <ArrowRight size={13} className="text-slate-400" />
                </a>
              );
            })}
          </nav>

          <div className="pt-3 mt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation('Mobile Navbar');
              }}
              className="w-full py-2.5 rounded-xl bg-[#48719a] text-white font-bold text-xs shadow-sm text-center"
            >
              {lang === 'gu' ? 'કાનૂની સલાહ માટે મુલાકાત બુક કરો' : 'Schedule Legal Consultation'}
            </button>
            <a
              href={`tel:${profile.phone}`}
              className="w-full py-2 rounded-xl bg-[#eaf4ec] text-[#1c6a38] font-bold text-xs flex items-center justify-center gap-1.5 border border-[#c1e2cb]"
            >
              <PhoneCall size={13} />
              <span>{profile.phone}</span>
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
