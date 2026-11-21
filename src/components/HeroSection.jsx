import React from 'react';
import { Calendar, PhoneCall, ShieldCheck, ArrowUpRight, MapPin, MessageCircle, Navigation } from 'lucide-react';

export default function HeroSection({ profile, lang, onOpenConsultation, customPhotoUrl }) {
  const photoSrc = customPhotoUrl || '/paras-cutout.png';

  return (
    <section id="home" className="relative pt-2 pb-8 sm:pb-16 px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Outer Hero Container with Slate-Blue Gradient Theme */}
      <div className="relative rounded-[1.75rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#4b729a] via-[#5c85ae] to-[#6e95bd] shadow-hero border border-white/35 p-4 sm:p-7 lg:p-11">
        
        {/* Soft background ambient glow orbs */}
        <div className="absolute top-0 right-1/4 w-60 sm:w-96 h-60 sm:h-96 bg-white/20 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute -bottom-24 -left-20 w-60 sm:w-80 h-60 sm:h-80 bg-[#244569]/40 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT FLOATING WHITE CARD */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="bg-gradient-to-r from-white via-white/95 to-white/90 backdrop-blur-md rounded-[1.5rem] sm:rounded-[2.25rem] p-4 sm:p-7 lg:p-10 shadow-2xl border border-white/80 relative overflow-hidden transition-all duration-300">
              
              {/* Top Trust Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eaf1f7] text-[#2c537d] text-[11px] sm:text-xs font-bold mb-3 sm:mb-5 border border-[#d2e2ef]">
                <ShieldCheck size={13} className="text-[#3b6694] flex-shrink-0" />
                <span className="truncate">{profile.badgeText}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.25] font-bold text-[#093570] tracking-tight mb-3 sm:mb-4">
                <span className="font-serif italic font-normal text-[#0b418a] mr-1.5 sm:mr-2">
                  {profile.heroTaglineStart}
                </span>
                {profile.heroTaglineEnd}
              </h1>

              {/* Subtext */}
              <p className="text-xs sm:text-sm md:text-base text-[#47607a] leading-relaxed max-w-xl mb-5 font-normal">
                {profile.heroSubtext}
              </p>

              {/* Degrees Pill Row - Responsive wrap */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-5 sm:mb-7">
                <span className="px-2.5 py-1 rounded-lg sm:rounded-xl bg-[#edf4f9] text-[#20456c] text-[11px] sm:text-xs font-bold border border-[#d6e5f1] shadow-2xs">
                  🎓 B.Com. - 2021
                </span>
                <span className="px-2.5 py-1 rounded-lg sm:rounded-xl bg-[#edf4f9] text-[#20456c] text-[11px] sm:text-xs font-bold border border-[#d6e5f1] shadow-2xs">
                  ⚖️ LL.B. - 2024
                </span>
                <span className="px-2.5 py-1 rounded-lg sm:rounded-xl bg-[#fdf3e2] text-[#9a6411] text-[11px] sm:text-xs font-bold border border-[#fae2be] shadow-2xs">
                  📚 LL.M. (Running)
                </span>
              </div>

              {/* Action Buttons - Fully Responsive Grid/Flex */}
              <div className="space-y-2.5 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
                {/* Main Schedule Button */}
                <button
                  onClick={() => onOpenConsultation('Hero Section')}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl sm:rounded-2xl bg-[#48719a] hover:bg-[#385c82] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar size={16} className="text-white/80" />
                  <span>{profile.ctaPrimary}</span>
                </button>

                {/* Call & WhatsApp (50% each on mobile, flex on desktop) */}
                <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-2">
                  <a
                    href={`tel:${profile.phone}`}
                    className="px-3 sm:px-4 py-3 rounded-xl sm:rounded-2xl bg-[#eaf4ec] hover:bg-[#d9ece0] text-[#1c6a38] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 border border-[#c1e2cb]"
                  >
                    <PhoneCall size={14} />
                    <span className="truncate">{profile.phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/919512938031?text=${encodeURIComponent(lang === 'gu' ? 'નમસ્તે એડવોકેટ પારસકુમાર, મારે કાનૂની સલાહ લેવી છે.' : 'Hello Adv. Paraskumar, I would like to consult with you.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-3 rounded-xl sm:rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 border border-[#25D366]/30"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Explore Services Link */}
                <a
                  href="#services"
                  className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl sm:rounded-2xl bg-[#eef4f9] hover:bg-[#e1ecf5] text-[#2d4e73] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1"
                >
                  <span>{profile.ctaSecondary}</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Office Location Bar under card */}
              <div className="mt-5 pt-3.5 border-t border-[#e2edf6] flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-[#52708f]">
                <div className="flex items-center gap-2 truncate max-w-[calc(100%-110px)]">
                  <MapPin size={13} className="text-[#3b6694] flex-shrink-0" />
                  <span className="font-semibold truncate">
                    {profile.office}
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Office+No+12+Nakshatra+Complex+5+Raj+Palace+Chowk+Sadhu+Vasvani+Road+Rajkot+360005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#385c82] hover:text-[#09294f] transition flex-shrink-0 bg-[#eff5fa] px-2.5 py-1 rounded-lg border border-[#d2e2ef]"
                  title="Google Maps Navigation Directions"
                >
                  <Navigation size={12} className="text-[#3b6694]" />
                  <span>{lang === 'gu' ? "દિશા-નિર્દેશ" : "Directions"}</span>
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT ADVOCATE PORTRAIT */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center justify-center relative mt-2 lg:mt-0">
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[390px] flex flex-col items-center">
              
              {/* Back ambient halo glow */}
              <div className="absolute w-52 sm:w-72 h-52 sm:h-72 rounded-full bg-white/20 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

              {/* Portrait Container with smooth float animation */}
              <div className="relative z-10 w-full flex justify-center group animate-soft-float">
                
                {/* Transparent Cutout Image */}
                <img
                  src={photoSrc}
                  alt={`${profile.name} - Advocate Gujarat High Court & Rajkot District Courts`}
                  className="w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(7,28,56,0.32)] transition-transform duration-500 hover:scale-[1.02]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/paras-portrait-raw.jpg';
                  }}
                />

                {/* Top Badge: Clamped within container boundaries */}
                <div className="absolute top-1 left-1 sm:-left-2 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-xl border border-white/80 flex items-center gap-1.5 text-[10px] sm:text-xs text-[#1e426b] font-bold max-w-[170px] sm:max-w-none animate-badge-left">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping flex-shrink-0" />
                  <span className="truncate">
                    {lang === 'gu' ? "ગુજરાત હાઈકોર્ટ એડવોકેટ" : "Gujarat High Court Advocate"}
                  </span>
                </div>

                {/* Bottom Badge: Clamped within container boundaries */}
                <div className="absolute bottom-1 right-1 sm:-right-2 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-xl border border-white/80 max-w-[170px] sm:max-w-[210px] animate-badge-right">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-[#38597e] text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-xs flex-shrink-0">
                      ⚖
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-[#14375e] leading-tight truncate">
                      {lang === 'gu' ? "રાજકોટ ઓફિસ નં. ૧૨" : "Rajkot Office No. 12"}
                    </div>
                  </div>
                  <div className="text-[9px] text-[#4d6d8c] font-medium leading-snug truncate">
                    {lang === 'gu' 
                      ? "નક્ષત્ર કોમ્પ્લેક્સ-૫, સાધુ વાસવાણી રોડ"
                      : "Nakshatra Complex-5, Rajkot"}
                  </div>
                </div>

              </div>

              {/* Name & Credentials Card below portrait */}
              <div className="mt-3 text-center text-white relative z-20 w-full px-2">
                <h3 className="font-serif text-lg sm:text-2xl font-bold tracking-wide text-white drop-shadow-md truncate">
                  {profile.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/90 font-medium mt-0.5">
                  {profile.qualifications}
                </p>
                <div className="mt-1 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold border border-white/30">
                  <span>{lang === 'gu' ? "સિવિલ • રેવન્યુ • ક્રિમીનલ • દસ્તાવેજ" : "Civil • Revenue • Criminal • Documentation"}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
