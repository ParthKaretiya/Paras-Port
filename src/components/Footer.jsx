import React from 'react';
import { ArrowUp, PhoneCall, MapPin } from 'lucide-react';

export default function Footer({ profile, lang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1b2b3d] text-slate-300 pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-700/60">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl text-white font-bold tracking-tight">
                {profile.name}
              </span>
            </div>

            <p className="text-xs text-[#95b8db] font-semibold">
              {profile.qualifications}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {lang === 'gu'
                ? "ગુજરાત હાઈકોર્ટ તેમજ રાજકોટ અદાલતોમાં સિવિલ, રેવન્યુ, ક્રિમીનલ અને તમામ પ્રકારના દસ્તાવેજી કામકાજ માટે વિશ્વસનીય કાનૂની સેવાઓ."
                : "Trusted legal counsel for Civil, Revenue, Criminal, and documentation matters across Gujarat High Court and Rajkot District Courts."}
            </p>

            <div className="text-xs text-slate-300 space-y-1.5 pt-2">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-[#6492bf] flex-shrink-0 mt-0.5" />
                <span>{profile.office}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall size={15} className="text-emerald-400 flex-shrink-0" />
                <span><strong>Adv. Paraskumar:</strong> {profile.phone} | <strong>Adv. Paresh:</strong> {profile.phoneSecondary}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">
              {lang === 'gu' ? "નેવિગેશન" : "Quick Links"}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-white transition">{lang === 'gu' ? "હોમ" : "Home"}</a></li>
              <li><a href="#about" className="hover:text-white transition">{lang === 'gu' ? "પરિચય & ડિગ્રી" : "About & Degrees"}</a></li>
              <li><a href="#services" className="hover:text-white transition">{lang === 'gu' ? "કાનૂની સેવાઓ (૨૦+)" : "Legal Services"}</a></li>
              <li><a href="#workflow" className="hover:text-white transition">{lang === 'gu' ? "કાર્યપદ્ધતિ" : "How We Work"}</a></li>
              <li><a href="#contact" className="hover:text-white transition">{lang === 'gu' ? "ઓફિસ & સંપર્ક" : "Office & Contact"}</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">
              {lang === 'gu' ? "મુખ્ય કાનૂની સેવાઓ" : "Core Legal Domains"}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <span>વારસાઈ & રેવન્યુ</span>
              <span>સાટાખત & દસ્તાવેજ</span>
              <span>સિવિલ દાવો & સ્ટે ઓર્ડર</span>
              <span>ક્રિમીનલ કેસ & જામીન</span>
              <span>હક્ક કમી & વહેંચણી</span>
              <span>ભરણપોષણ & લગ્ન નોંધણી</span>
              <span>ભાડા કરાર & મોર્ગેજ</span>
              <span>ચેક રીટર્ન (કલમ ૧૩૮)</span>
            </div>
          </div>

        </div>

        {/* Mandatory Bar Council of India Compliance Disclaimer */}
        <div className="py-8 border-b border-slate-700/40 text-[11px] text-slate-400 leading-relaxed">
          <p className="font-semibold text-slate-300 mb-1">
            {lang === 'gu' ? "કાનૂની સૂચના & બાર કાઉન્સિલ ડિસ્ક્લેમર:" : "LEGAL NOTICE & BAR COUNCIL OF INDIA DISCLAIMER:"}
          </p>
          <p>
            {lang === 'gu'
              ? "બાર કાઉન્સિલ ઓફ ઈન્ડિયાના નિયમો અનુસાર એડવોકેટ્સને કોઈપણ પ્રકારની જાહેરાત કરવાની મનાઈ છે. આ વેબસાઈટ માત્ર સામાન્ય માહિતી અને પરિચય આપવા માટે છે અને તેનો ઉપયોગ કાનૂની સલાહ તરીકે કરવો નહીં. મુલાકાતી સ્વેચ્છાએ માહિતી મેળવવા માટે આ પોર્ટલ જોઈ રહ્યા છે."
              : "As per the rules of the Bar Council of India, advocates are strictly prohibited from soliciting work or advertising. This website is purely intended to provide general factual information regarding the academic credentials and practice areas of Adv. Paraskumar J. Karetiya. The content herein does not constitute legal advice."}
          </p>
        </div>

        {/* Bottom Credits & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {profile.name}. Advocate Gujarat High Court & Rajkot.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition"
          >
            <span>{lang === 'gu' ? "ટોચ પર જાઓ" : "Back to Top"}</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
