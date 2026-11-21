import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, ShieldCheck, MapPin, Building, CheckCircle, PhoneCall, ExternalLink, Eye, Navigation } from 'lucide-react';

export default function AboutSection({ profile, education, lang, onOpenConsultation }) {
  const [showOfficePhotoModal, setShowOfficePhotoModal] = useState(false);

  return (
    <section id="about" className="py-12 sm:py-24 max-w-7xl mx-auto px-3 sm:px-8 overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8f1f8] text-[#365e8a] text-xs font-semibold mb-3">
          <GraduationCap size={15} />
          <span>{lang === 'gu' ? "શૈક્ષણિક લાયકાત & પરિચય" : "Academic Qualifications & Office"}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#082a52] tracking-tight">
          {lang === 'gu' ? (
            <>શૈક્ષણિક લાયકાત અને <span className="font-serif italic font-normal text-[#0b418a]">સમર્પિત કાનૂની સેવા</span></>
          ) : (
            <>Academic Qualifications & <span className="font-serif italic font-normal text-[#0b418a]">Dedicated Legal Practice</span></>
          )}
        </h2>
        <p className="text-sm sm:text-base text-[#4f6b88] mt-3">
          {lang === 'gu'
            ? "હરિવંદના કોલેજ, એ.એમ.પી. ગવર્મેન્ટ લો કોલેજ અને ભક્ત કવિ નરસિંહ મહેતા યુનિવર્સિટી સાથે કાનૂની ઉચ્ચ શિક્ષણનો ગૌરવવંતો પ્રવાસ."
            : "Comprehensive legal education across Harivandana College, A.M.P. Govt. Law College, and Bhakta Kavi Narsinh Mehta University."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Educational Journey Cards */}
        <div className="lg:col-span-6 space-y-5">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 shadow-card border border-slate-100">
            <h3 className="text-xl font-bold text-[#09294f] mb-6 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-[#edf4f9] text-[#385e87] flex items-center justify-center text-sm">
                🎓
              </span>
              <span>{lang === 'gu' ? "શૈક્ષણિક લાયકાત (Degrees)" : "Academic Qualifications"}</span>
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#d8e7f3]">
              {education.map((item, idx) => (
                <div key={idx} className="relative pl-9 group">
                  {/* Timeline bullet */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#48719a] group-hover:scale-125 transition-transform" />

                  <div className="p-4 rounded-2xl bg-[#f7fafc] border border-[#e2edf6] hover:bg-[#eff6fb] transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <span className="text-xs font-bold text-[#385e87] uppercase tracking-wide">
                        {item.status}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white text-[#21436a] border border-[#d5e4f0]">
                        {item.year}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#09294f]">
                      {item.degree}
                    </h4>

                    <div className="text-xs font-semibold text-[#3b5d82] mt-0.5">
                      {item.institution}
                    </div>

                    <p className="text-xs text-[#52708e] mt-2 leading-relaxed">
                      {item.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bar Council & High Court Standing */}
            <div className="mt-7 pt-6 border-t border-slate-100 flex items-start gap-3 text-xs text-[#416488]">
              <ShieldCheck size={20} className="text-[#3b6694] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#153a63]">
                  {lang === 'gu' ? "અદાલતી અધિકારક્ષેત્ર:" : "Court Jurisdictions:"}
                </strong>
                <p className="mt-0.5">{profile.jurisdiction}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Actual Office Showcase */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Office Card with real photo */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 shadow-card border border-slate-100 relative overflow-hidden">
            <h3 className="text-xl font-bold text-[#09294f] mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-[#edf4f9] text-[#385e87] flex items-center justify-center text-sm">
                  🏢
                </span>
                <span>{lang === 'gu' ? "રાજકોટ ઓફિસ" : "Rajkot Office"}</span>
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ● {lang === 'gu' ? "ખુલ્લું છે" : "Active Practice"}
              </span>
            </h3>

            {/* Office photo preview card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 group mb-6">
              <img
                src="/office-board.jpg"
                alt="Advocate Office Rajkot - Adv. Paraskumar J. Karetiya"
                className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end justify-between p-4 text-white">
                <div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    {lang === 'gu' ? "ઓફિસ નં. ૧૨, નક્ષત્ર V, રાજ પેલેસ ચોક" : "Office No. 12, Nakshatra V, Raj Palace Chowk"}
                  </div>
                  <div className="text-[11px] text-white/80">
                    {lang === 'gu' ? "સાધુ વાસવાણી રોડ, યોગી નગર, રાજકોટ - ૩૬૦૦૦૫" : "Sadhu Vasvani Rd, Yogi Nagar, Rajkot - 360005"}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Advocate+Paraskumar+Karetiya+Office+No+12+Nakshatra+V+Raj+Palace+Chowk+Sadhu+Vasvani+Rd+Yogi+Nagar+Rajkot+Gujarat+360005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1 transition shadow-sm"
                    title="Get Turn-by-Turn Google Maps Directions"
                  >
                    <Navigation size={12} />
                    <span>{lang === 'gu' ? "દિશા-નિર્દેશ" : "Directions"}</span>
                  </a>
                  <button
                    onClick={() => setShowOfficePhotoModal(true)}
                    className="px-2.5 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1 transition"
                  >
                    <Eye size={13} />
                    <span>{lang === 'gu' ? "ફોટો જુઓ" : "Photo"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Office Advocates Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-2xl bg-[#f5f9fc] border border-[#e1edf6]">
                <div className="text-[10px] uppercase font-bold text-[#48719a] tracking-wider">
                  {lang === 'gu' ? "એડવોકેટ (હાઈકોર્ટ)" : "Advocate High Court"}
                </div>
                <div className="font-bold text-sm text-[#09294f] mt-0.5">
                  {lang === 'gu' ? "પારસકુમાર જે. કારેટીયા" : "Paraskumar J. Karetiya"}
                </div>
                <div className="text-xs text-[#52708f]">
                  (B.Com., LL.B., LL.M. Running)
                </div>
                <a
                  href="tel:9512938031"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b5d32] mt-2 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 hover:bg-emerald-100 transition"
                >
                  <PhoneCall size={12} />
                  <span>Mo. 95129 38031</span>
                </a>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#f5f9fc] border border-[#e1edf6]">
                <div className="text-[10px] uppercase font-bold text-[#48719a] tracking-wider">
                  {lang === 'gu' ? "એડવોકેટ (હાઈકોર્ટ)" : "Advocate High Court"}
                </div>
                <div className="font-bold text-sm text-[#09294f] mt-0.5">
                  {lang === 'gu' ? "પરેશ જે. બલદાણીયા" : "Paresh J. Baldaniya"}
                </div>
                <div className="text-xs text-[#52708f]">
                  (B.Com., LL.B.)
                </div>
                <a
                  href="tel:9737676067"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b5d32] mt-2 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 hover:bg-emerald-100 transition"
                >
                  <PhoneCall size={12} />
                  <span>Mo. 97376 76067</span>
                </a>
              </div>
            </div>

            {/* Office Timing & CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <div className="text-xs text-[#52708f]">
                <span className="font-semibold text-[#183d66]">
                  {lang === 'gu' ? "ઓફિસ સમય:" : "Office Hours:"}
                </span>{" "}
                {profile.hours}
              </div>
              <button
                onClick={() => onOpenConsultation('Office Visit')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#48719a] hover:bg-[#385c82] text-white font-semibold text-xs transition shadow-sm"
              >
                {lang === 'gu' ? "ઓફિસે મુલાકાત બુક કરો" : "Book Office Visit"}
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Modal for Full Office Signboard Image */}
      {showOfficePhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl relative">
            <button
              onClick={() => setShowOfficePhotoModal(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center z-10 transition font-bold"
            >
              ✕
            </button>
            <div className="text-sm font-bold text-[#09294f] mb-3">
              {lang === 'gu' ? "ઓફિસ બોર્ડ & સેવાઓની વિગત" : "Official Office Shutter Board & Services"}
            </div>
            <div className="max-h-[75vh] overflow-y-auto rounded-2xl border border-slate-200">
              <img
                src="/office-board.jpg"
                alt="Advocate Karetiya Office Board Full View"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
