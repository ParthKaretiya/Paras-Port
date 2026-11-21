import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';

export default function FAQSection({ lang, onOpenConsultation }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = {
    gu: [
      {
        q: "રાજકોટમાં ઓફિસ ક્યાં આવેલી છે અને મુલાકાતનો સમય શું છે?",
        a: "અમારી ઓફિસ રાજકોટ ખાતે 'ઓફિસ નં. ૧૨, નક્ષત્ર કોમ્પ્લેક્સ-૫, રાજ પેલેસ ચોક, સાધુ વાસવાણી રોડ, રાજકોટ - ૩૬૦૦૦૫' પર આવેલી છે. સોમવાર થી શનિવાર સવારે ૯:૦૦ થી રાત્રે ૮:૩૦ સુધી રૂબરૂ મળી શકાય છે. રવિવારે પૂર્વ મુલાકાત (Appointment) અનુસાર સમય ફાળવવામાં આવે છે."
      },
      {
        q: "એડવોકેટ પારસકુમાર કારેટીયા કઈ કઈ અદાલતોમાં કેસો ચલાવે છે?",
        a: "એડવોકેટ પારસકુમાર જે. કારેટીયા ગુજરાત હાઈકોર્ટ તેમજ રાજકોટ જિલ્લા અને સેશન્સ કોર્ટ, મેજિસ્ટ્રેટ કોર્ટ, ફેમિલી કોર્ટ અને તમામ રેવન્યુ અદાલતો (મામલતદાર કોર્ટ, પ્રાંત અધિકારી, કલેક્ટર કચેરી અને SSRD અમદાવાદ) માં સચોટ કાનૂની રજૂઆત કરે છે."
      },
      {
        q: "દસ્તાવેજ, સાટાખત અને મિલકત ટાઇટલ વેરિફિકેશનમાં કેવી સેવા મળે છે?",
        a: "જમીન, મકાન કે પ્લોટ ખરીદતા પહેલા ૭/૧૨ અને હક્કપત્રક સર્ચ, ટાઈટલ ક્લિયર સર્ચ રિપોર્ટ, સાટાખત (Agreement to Sale), કાયદેસર રજીસ્ટર્ડ દસ્તાવેજ (Sale Deed), વારસાઈ નોંધ, હક્ક કમી, વહેંચણી કરાર અને મોર્ગેજ ડીડનું ભૂલરહિત ડ્રાફ્ટિંગ અને સબ-રજીસ્ટ્રાર કચેરીએ નોંધણી કરાવી આપવામાં આવે છે."
      },
      {
        q: "કાનૂની સલાહ કે મુલાકાત માટે કેવી રીતે સંપર્ક કરવો?",
        a: "તમે સીધા ફોન કોલ અથવા વોટ્સએપ દ્વારા Mo. +91 95129 38031 (એડવોકેટ પારસકુમાર) અથવા Mo. +91 97376 76067 (એસોસિયેટ એડવોકેટ પરેશ બલદાણીયા) નો સંપર્ક કરી શકો છો. તેમજ વેબસાઇટ પર 'મુલાકાત બુક કરો' ફોર્મ ભરીને પણ ઓનલાઇન અપોઇન્ટમેન્ટ મેળવી શકો છો."
      },
      {
        q: "ચેક રિટર્ન (કલમ ૧૩૮) કે નોટીસ મોકલવા બાબતે શું પ્રોસેસ હોય છે?",
        a: "ચેક બાઉન્સ થયાની જાણ બેંક મેમો મળ્યાના ૩૦ દિવસમાં સામેવાળા પક્ષકારને ૧૫ દિવસની કાનૂની ડિમાન્ડ નોટીસ મોકલવાની રહે છે. મુદત પૂરી થયા બાદ રાજકોટ કોર્ટમાં કલમ ૧૩૮ હેઠળ ફોજદારી કેસ દાખલ કરી નાણાંની વસૂલાત અને ન્યાયિક કાર્યવાહી કરવામાં આવે છે."
      },
      {
        q: "પરિવાર અને લગ્ન વિષયક કાનૂની પ્રશ્નોમાં કેવી મદદ મળે છે?",
        a: "હિન્દુ મેરેજ એક્ટ અને સ્પેશિયલ મેરેજ એક્ટ અન્વયે રજીસ્ટર્ડ લગ્ન નોંધણી (Marriage Registration Certificate), ભરણપોષણ અરજી (કલમ ૧૨૫), આપસી સમજૂતીથી છૂટાછેડા (Mutual Consent Divorce) તેમજ કોર્ટમાં સંપૂર્ણ ગોપનીયતા સાથે ન્યાયિક માર્ગદર્શન આપવામાં આવે છે."
      }
    ],
    en: [
      {
        q: "Where is Adv. Paraskumar Karetiya's office located and what are the working hours?",
        a: "Our office is located at Office No. 12, Nakshatra Complex-5, Raj Palace Chowk, Sadhu Vasvani Road, Rajkot - 360005, Gujarat. Working hours are Monday to Saturday from 9:00 AM to 8:30 PM. Sunday consultations are available by prior appointment."
      },
      {
        q: "Which courts and tribunals does Adv. Paraskumar Karetiya practice in?",
        a: "Adv. Paraskumar J. Karetiya regularly represents clients before the Gujarat High Court (Ahmedabad), Rajkot District & Sessions Courts, Family Courts, Commercial Courts, and Revenue Tribunals including Mamlatdar, Sub-Divisional Magistrate / Prant Officer, Collector, and SSRD."
      },
      {
        q: "What property and documentation services are provided?",
        a: "Complete title search verification, 30-year search reports, drafting and registration of Agreement to Sale (Satakhat), Sale Deeds (Dastavej), Succession/Pedigree records (Varsai), Relinquishment Deeds (Hakka Kami), Partition Deeds (Vahenchni), and Mortgages at the Sub-Registrar office."
      },
      {
        q: "How can I schedule a consultation or case assessment?",
        a: "You can call or WhatsApp directly at +91 95129 38031 (Adv. Paraskumar Karetiya) or +91 97376 76067 (Associate Adv. Paresh Baldaniya). You can also click 'Schedule a Consultation' to send your inquiry directly to paraskaretiya66@gmail.com."
      },
      {
        q: "What is the procedure for Cheque Bounce cases under Section 138 NI Act?",
        a: "Within 30 days of receiving the bank memo of dishonour, a statutory 15-day legal demand notice must be served to the drawer. If payment is unpaid, a criminal complaint is filed before the competent Judicial Magistrate Court in Rajkot to recover the dues."
      },
      {
        q: "Do you handle Family Law, Court Marriage, and Mutual Divorce?",
        a: "Yes, we handle statutory Court Marriage registration under the Hindu Marriage Act and Special Marriage Act, Section 125 CrPC maintenance petitions, and Mutual Consent Divorce proceedings with strict client confidentiality."
      }
    ]
  };

  const list = faqs[lang] || faqs.en;

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24 sm:scroll-mt-28">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf4f9] text-[#2c537d] text-xs font-bold mb-3 border border-[#d2e2ef]">
          <HelpCircle size={14} className="text-[#3b6694]" />
          <span>{lang === 'gu' ? "સામાન્ય કાનૂની પ્રશ્નોત્તરી (FAQ)" : "Frequently Asked Questions"}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#09294f] tracking-tight mb-3">
          {lang === 'gu' ? "તમારા કાનૂની પ્રશ્નોના સરળ જવાબો" : "Legal FAQs & Helpful Information"}
        </h2>
        <p className="text-xs sm:text-sm text-[#47607a] leading-relaxed max-w-2xl mx-auto">
          {lang === 'gu' 
            ? "રાજકોટ અને ગુજરાત હાઈકોર્ટમાં કાનૂની સેવાઓ, ઓફિસ મુલાકાત અને કોર્ટ કાર્યવાહી વિશે વારંવાર પૂછાતા પ્રશ્નો."
            : "Clear answers to frequently asked questions regarding our legal practice, office visits, court representation, and property documentation."}
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5 max-w-4xl mx-auto">
        {list.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl transition-all duration-300 border ${
                isOpen
                  ? 'bg-white shadow-lg border-[#48719a]/40 ring-1 ring-[#48719a]/20'
                  : 'bg-white/80 hover:bg-white border-[#d8e6f2] shadow-xs'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                    isOpen ? 'bg-[#3b6694] text-white' : 'bg-[#edf4f9] text-[#3b6694]'
                  }`}>
                    Q{idx + 1}
                  </span>
                  <span className="font-bold text-xs sm:text-sm md:text-base text-[#09294f] leading-snug">
                    {item.q}
                  </span>
                </div>
                <div className={`p-1.5 rounded-full transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-[#edf4f9] text-[#3b6694]' : 'text-slate-400'
                }`}>
                  <ChevronDown size={18} />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#47607a] leading-relaxed border-t border-[#f0f4f8]">
                  <p className="pt-2">{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Help Callout */}
      <div className="mt-10 sm:mt-12 bg-gradient-to-r from-[#436c93] to-[#5b84ae] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 max-w-4xl mx-auto">
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-bold mb-1">
            {lang === 'gu' ? "અન્ય કોઈ ચોક્કસ કાનૂની પ્રશ્ન છે?" : "Have a Specific Legal Question?"}
          </h3>
          <p className="text-xs sm:text-sm text-white/90">
            {lang === 'gu' 
              ? "અમારી ઓફિસનો સીધો સંપર્ક કરો અથવા મુલાકાત માટે સમય નક્કી કરો."
              : "Reach out to our Rajkot office directly or book a confidential consultation."}
          </p>
        </div>
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            onClick={() => onOpenConsultation('FAQ Section')}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white text-[#09294f] font-bold text-xs sm:text-sm hover:bg-[#f0f5fa] transition-all shadow-md text-center"
          >
            {lang === 'gu' ? "સલાહ મેળવો" : "Get Legal Advice"}
          </button>
          <a
            href="tel:+919512938031"
            className="p-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all border border-white/30"
            title="Call Adv. Paraskumar Karetiya"
          >
            <PhoneCall size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
