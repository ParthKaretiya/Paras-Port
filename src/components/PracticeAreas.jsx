import React, { useState } from 'react';
import { 
  Scale, FileText, FileCheck, PenTool, Landmark, Shield, 
  ShieldAlert, ArrowUpRight, UserMinus, Layers, Briefcase, 
  Building, FileSpreadsheet, Mail, HeartHandshake, Users, 
  UserX, FileBadge, Send, DollarSign, ChevronRight, Search 
} from 'lucide-react';

const iconMap = {
  Scale, FileText, FileCheck, PenTool, Landmark, Shield, 
  ShieldAlert, ArrowUpRight, UserMinus, Layers, Briefcase, 
  Building, FileSpreadsheet, Mail, HeartHandshake, Users, 
  UserX, FileBadge, Send, DollarSign
};

export default function PracticeAreas({ services, lang, onOpenConsultation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Categories in both languages
  const categories = lang === 'gu' 
    ? ['બધા (All)', 'સિવિલ', 'રેવન્યુ', 'દસ્તાવેજ', 'ક્રિમીનલ', 'કૌટુંબિક']
    : ['All', 'Civil', 'Revenue', 'Documentation', 'Criminal', 'Family'];

  const filteredServices = services.filter((item) => {
    // Category match
    const catMatch = 
      selectedCategory === 'All' || 
      selectedCategory === 'બધા (All)' ||
      (selectedCategory === 'સિવિલ' && (item.category === 'સિવિલ' || item.category === 'Civil')) ||
      (selectedCategory === 'Civil' && (item.category === 'Civil' || item.category === 'સિવિલ')) ||
      (selectedCategory === 'રેવન્યુ' && (item.category === 'રેવન્યુ' || item.category === 'Revenue')) ||
      (selectedCategory === 'Revenue' && (item.category === 'Revenue' || item.category === 'રેવન્યુ')) ||
      (selectedCategory === 'દસ્તાવેજ' && (item.category === 'દસ્તાવેજ' || item.category === 'Documentation')) ||
      (selectedCategory === 'Documentation' && (item.category === 'Documentation' || item.category === 'દસ્તાવેજ')) ||
      (selectedCategory === 'ક્રિમીનલ' && (item.category === 'ક્રિમીનલ' || item.category === 'Criminal')) ||
      (selectedCategory === 'Criminal' && (item.category === 'Criminal' || item.category === 'ક્રિમીનલ')) ||
      (selectedCategory === 'કૌટુંબિક' && (item.category === 'કૌટુંબિક' || item.category === 'Family')) ||
      (selectedCategory === 'Family' && (item.category === 'Family' || item.category === 'કૌટુંબિક')) ||
      item.category === selectedCategory;

    // Search query match
    const q = searchQuery.toLowerCase().trim();
    if (!q) return catMatch;

    const textMatch = 
      item.title.toLowerCase().includes(q) ||
      (item.nameGujarati && item.nameGujarati.toLowerCase().includes(q)) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);

    return catMatch && textMatch;
  });

  return (
    <section id="services" className="py-12 sm:py-24 bg-gradient-to-b from-[#f3f7fa] to-[#e8f1f7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#385e87] text-[11px] sm:text-xs font-semibold shadow-xs border border-slate-100 mb-3 sm:mb-4">
            <span>{lang === 'gu' ? "તમામ કાનૂની સેવાઓ (ઓફિસ શટર બોર્ડ)" : "Full Legal Services (20+ Domains)"}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#082a52] tracking-tight mb-3 sm:mb-4">
            {lang === 'gu' ? (
              <>સિવિલ, રેવન્યુ, ક્રિમીનલ & <span className="font-serif italic font-normal text-[#0b418a]">તમામ કાનૂની સેવાઓ</span></>
            ) : (
              <>Civil, Revenue, Criminal & <span className="font-serif italic font-normal text-[#0b418a]">All Types of Legal Services</span></>
            )}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#4f6b88] leading-relaxed">
            {lang === 'gu'
              ? "અરજી, ફરીયાદ, સોગંદનામું, દસ્તાવેજ, સાટાખત, મોર્ગેજ, વારસાઈ, હક્ક કમી, વહેંચણી, ભાડા કરાર, નોટીસ, દાવો, અપીલ, ભરણપોષણ, લગ્ન નોંધણી, છુટાછેડા અને કુલમુખત્યારનામા સહિતની તમામ કામગીરી."
              : "Comprehensive legal representation and documentation across Gujarat High Court, Rajkot District Courts, and Revenue Tribunals."}
          </p>

          {/* Search Input Bar */}
          <div className="mt-6 sm:mt-8 max-w-md mx-auto relative px-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
            <input
              type="text"
              placeholder={lang === 'gu' ? "સેવા શોધો (દા.ત. વારસાઈ, સાટાખત, જામીન)..." : "Search service (e.g. Succession, Agreement, Bail)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#48719a]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#48719a] text-white shadow-xs'
                    : 'bg-white text-[#47607a] hover:bg-white/80 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredServices.map((item) => {
            const IconComponent = iconMap[item.icon] || Scale;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-card border border-slate-100/90 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#eff5fa] text-[#426c96] flex items-center justify-center group-hover:bg-[#48719a] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComponent size={22} />
                    </div>

                    <span className="text-[11px] font-semibold tracking-wider text-[#4d739b] px-2.5 py-0.5 rounded-md bg-[#f1f6fa] border border-[#e1edf6]">
                      {item.category}
                    </span>
                  </div>

                  {/* Gujarati Board Name Highlight */}
                  {item.nameGujarati && (
                    <div className="text-xs font-bold text-[#b45309] bg-amber-50 px-2 py-0.5 rounded-md inline-block mb-1.5 border border-amber-200/60">
                      {item.nameGujarati}
                    </div>
                  )}

                  <h3 className="text-base font-bold text-[#09294f] mb-2 group-hover:text-[#0b418a] transition leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#4e6782] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => onOpenConsultation(`Legal Service: ${item.title}`)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#f5f9fc] hover:bg-[#48719a] text-[#2f5175] hover:text-white text-xs font-semibold transition flex items-center justify-between group-hover:bg-[#48719a] group-hover:text-white"
                  >
                    <span>{lang === 'gu' ? "કાનૂની સલાહ મેળવો" : "Consult on this"}</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* If no results found */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-500 text-sm">
              {lang === 'gu' 
                ? "કોઈ સેવા મળી નથી. કૃપા કરીને અન્ય કીવર્ડથી શોધો." 
                : "No matching legal services found. Please try a different search keyword."}
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 px-4 py-2 rounded-xl bg-[#48719a] text-white text-xs font-semibold"
            >
              {lang === 'gu' ? "તમામ સેવાઓ ફરી જુઓ" : "Reset Filters"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
