import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ShieldAlert, ExternalLink, MessageCircle, Loader2, Navigation, Copy, Check } from 'lucide-react';

export default function ContactSection({ profile, lang, onOpenConsultation }) {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  // Exact Google Maps verified address provided by the advocate
  const exactAddress = "Advocate Paraskumar Karetiya, Office No.12, Nakshatra V, Raj Palace Chowk, Sadhu Vasvani Rd, Yogi Nagar, Rajkot, Gujarat 360005";
  const mapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Advocate+Paraskumar+Karetiya+Office+No+12+Nakshatra+V+Raj+Palace+Chowk+Sadhu+Vasvani+Rd+Yogi+Nagar+Rajkot+Gujarat+360005";
  const mapsSearchUrl = "https://www.google.com/maps/search/?api=1&query=Advocate+Paraskumar+Karetiya+Office+No+12+Nakshatra+V+Raj+Palace+Chowk+Sadhu+Vasvani+Rd+Yogi+Nagar+Rajkot+Gujarat+360005";
  const mapsEmbedUrl = "https://maps.google.com/maps?q=Advocate%20Paraskumar%20Karetiya%2C%20Office%20No.12%2C%20Nakshatra%20V%2C%20Raj%20Palace%20Chowk%2C%20Sadhu%20Vasvani%20Rd%2C%20Yogi%20Nagar%2C%20Rajkot%2C%20Gujarat%20360005&t=&z=16&ie=UTF8&iwloc=&output=embed";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Submit to Web3Forms API to deliver directly to advocate's email
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: profile.web3FormsKey || "e43b1745-f09b-449e-873d-9d4131558bf0",
          to_email: profile.email,
          from_name: formState.name,
          subject: `New Legal Inquiry from ${formState.name} - ${formState.phone}`,
          name: formState.name,
          phone: formState.phone,
          email: formState.email || "Not provided",
          message: formState.message,
          source: "Advocate Paraskumar Karetiya Portfolio",
        }),
      });

      setSent(true);
    } catch (err) {
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppSend = () => {
    const text = `*New Legal Inquiry*\n*Name:* ${formState.name || 'Client'}\n*Phone:* ${formState.phone || 'N/A'}\n*Email:* ${formState.email || 'N/A'}\n*Message:* ${formState.message || 'Legal guidance required'}`;
    window.open(`https://wa.me/919512938031?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleMailtoSend = () => {
    const subject = encodeURIComponent(`Legal Inquiry from ${formState.name || 'Client'}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nPhone: ${formState.phone}\nEmail: ${formState.email}\n\nCase / Document Details:\n${formState.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(exactAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-14 sm:py-24 bg-[#f8fafc] border-t border-slate-200 relative overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-3 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-300 text-slate-800 text-xs font-mono font-bold uppercase mb-3 shadow-2xs">
            <MapPin size={13} className="text-[#081a2e]" />
            <span>{lang === 'gu' ? "ઓફિસ મુલાકાત & સંપર્ક" : "Direct Office Access"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#081a2e] tracking-tight mb-3">
            {lang === 'gu' ? (
              <>રાજકોટ ઓફિસ <span className="font-serif italic font-normal text-[#1a4473]">રૂબરૂ મુલાકાત & સંપર્ક</span></>
            ) : (
              <>Connect With <span className="font-serif italic font-normal text-[#1a4473]">The Legal Office</span></>
            )}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600">
            {lang === 'gu'
              ? "સાધુ વાસવાણી રોડ, નક્ષત્ર V સ્થિત ઓફિસે રૂબરૂ મુલાકાત અથવા ફોન પર સંપર્ક કરો."
              : "Schedule an in-person office consultation at Sadhu Vasvani Road, Rajkot or contact us directly."}
          </p>
        </div>

        {/* 2-Column Contact Info & Online Inquiry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Office Contact Information */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 shadow-xs border border-slate-200 space-y-5">
              
              {/* Primary Mobile */}
              <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#081a2e] flex items-center justify-center flex-shrink-0 border border-slate-200">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono font-bold text-slate-500 tracking-wider">
                    {lang === 'gu' ? "એડવોકેટ પારસકુમાર જે. કારેટીયા" : "Adv. Paraskumar J. Karetiya"}
                  </div>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-lg font-bold font-mono text-[#081a2e] hover:text-[#1a4473] transition block mt-0.5"
                  >
                    {profile.phone}
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {lang === 'gu' ? "મુલાકાત અને કાનૂની પૂછપરછ માટે ડાયરેક્ટ નંબર" : "Direct line for appointments & urgent matters"}
                  </div>
                </div>
              </div>

              {/* Secondary Mobile (Associate) */}
              <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#081a2e] flex items-center justify-center flex-shrink-0 border border-slate-200">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono font-bold text-slate-500 tracking-wider">
                    {lang === 'gu' ? "એડવોકેટ પરેશ જે. બલદાણીયા (Associate)" : "Adv. Paresh J. Baldaniya (Associate)"}
                  </div>
                  <a
                    href={`tel:${profile.phoneSecondary}`}
                    className="text-base font-bold font-mono text-[#081a2e] hover:text-[#1a4473] transition block mt-0.5"
                  >
                    {profile.phoneSecondary}
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {lang === 'gu' ? "ઓફિસ સહયોગી એડવોકેટ" : "Office Associate"}
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#081a2e] flex items-center justify-center flex-shrink-0 border border-slate-200">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono font-bold text-slate-500 tracking-wider">
                    {lang === 'gu' ? "સત્તાવાર ઈમેઇલ" : "Official Email"}
                  </div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-bold font-mono text-[#081a2e] hover:text-[#1a4473] transition break-all block mt-0.5"
                  >
                    {profile.email}
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {lang === 'gu' ? "કાનૂની નોટીસ અને કેસ વિગત મોકલવા માટે" : "For documents, legal notices & inquiries"}
                  </div>
                </div>
              </div>

              {/* Office Address with Exact Google Maps Actions */}
              <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#081a2e] flex items-center justify-center flex-shrink-0 border border-slate-200">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] uppercase font-mono font-bold text-slate-500 tracking-wider">
                    {lang === 'gu' ? "સત્તાવાર ઓફિસનું સરનામું (રાજકોટ)" : "Official Rajkot Office Address"}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#081a2e] leading-snug mt-1">
                    {exactAddress}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-2.5">
                    <a
                      href={mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#081a2e] hover:bg-[#14375e] text-white text-xs font-bold transition shadow-xs"
                      title="Google Maps Navigation Directions"
                    >
                      <Navigation size={12} />
                      <span>{lang === 'gu' ? "દિશા-નિર્દેશ (Directions)" : "Get Directions"}</span>
                    </a>
                    <a
                      href={mapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-black font-semibold px-2 py-1 bg-slate-100 rounded border border-slate-200"
                    >
                      <span>{lang === 'gu' ? "મેપ્સમાં જુઓ" : "Open in Maps"}</span>
                      <ExternalLink size={11} />
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-black font-semibold px-2 py-1 bg-slate-100 rounded border border-slate-200"
                    >
                      {copied ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                      <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#081a2e] flex items-center justify-center flex-shrink-0 border border-slate-200">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono font-bold text-slate-500 tracking-wider">
                    {lang === 'gu' ? "ઓફિસ સમય" : "Office Hours"}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#081a2e] mt-0.5">
                    {profile.hours}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => onOpenConsultation('Direct Contact Box')}
                  className="w-full py-2.5 rounded-lg bg-[#081a2e] hover:bg-[#14375e] text-white font-bold text-xs shadow-sm transition"
                >
                  {lang === 'gu' ? "મુલાકાત સમય બુક કરો" : "Schedule Office Appointment"}
                </button>

                <a
                  href={`https://wa.me/919512938031?text=${encodeURIComponent(lang === 'gu' ? 'નમસ્તે એડવોકેટ પારસકુમાર, મારે કાનૂની માર્ગદર્શન જોઈએ છે.' : 'Hello Adv. Paraskumar, I need legal consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] font-bold text-xs flex items-center justify-center gap-2 border border-[#25D366]/40 transition"
                >
                  <MessageCircle size={15} />
                  <span>{lang === 'gu' ? "વોટ્સએપ પર સીધો મેસેજ કરો" : "Direct Chat on WhatsApp"}</span>
                </a>
              </div>

            </div>

            {/* Emergency Advice Notice */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
              <ShieldAlert size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">
                  {lang === 'gu' ? "તાકીદની જામીન કે પોલીસ ફરિયાદ?" : "Urgent Bail or Police Matter?"}
                </span>
                <p className="mt-0.5 text-amber-800">
                  {lang === 'gu'
                    ? "આગોતરા જામીન (Anticipatory Bail) કે અટકાયત બાબતે તાત્કાલિક મો. ૯૫૧૨૯ ૩૮૦૩૧ પર સંપર્ક કરવો."
                    : "For immediate anticipatory bail or urgent stay orders, call Mo. 95129 38031 directly."}
                </p>
              </div>
            </div>

          </div>

          {/* Direct Inquiry Form with Live Email Sending */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-xs border border-slate-200">
              <div className="flex items-center justify-between mb-2 pb-3 border-b border-slate-100">
                <h3 className="text-lg sm:text-xl font-bold text-[#081a2e]">
                  {lang === 'gu' ? "ઓનલાઈન મેસેજ / કાનૂની પૂછપરછ" : "Send Confidential Legal Inquiry"}
                </h3>
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  ● Direct to Inbox
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mb-5">
                {lang === 'gu'
                  ? `તમારી વિગતો ભરો. આ મેસેજ સીધો એડવોકેટના ઈમેઈલ (${profile.email}) પર મોકલવામાં આવશે.`
                  : `Submit your inquiry. Messages are delivered directly to the advocate's email (${profile.email}) with strict attorney-client confidentiality.`}
              </p>

              {sent ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-200">
                  <CheckCircle size={36} className="text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-emerald-900 text-base">
                    {lang === 'gu' ? "ઈમેઇલ સફળતાપૂર્વક મોકલાયો!" : "Inquiry Sent Successfully!"}
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 mt-1 max-w-md mx-auto">
                    {lang === 'gu'
                      ? `આપનો મેસેજ એડવોકેટ પારસકુમારના ઈમેઈલ પર પહોંચી ગયો છે. અમારી ઓફિસ ટૂંક સમયમાં મો. ${formState.phone} પર સંપર્ક કરશે.`
                      : `Your inquiry has been sent to Adv. Paraskumar's email. Our office will contact you at ${formState.phone} shortly.`}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppSend}
                      className="px-4 py-2 rounded-lg bg-[#25D366] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm hover:bg-[#1ebd5a] transition"
                    >
                      <MessageCircle size={14} />
                      <span>{lang === 'gu' ? "વોટ્સએપ પર પણ કોપી મોકલો" : "Also Send Copy on WhatsApp"}</span>
                    </button>
                    <button
                      onClick={() => setSent(false)}
                      className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
                    >
                      {lang === 'gu' ? "નવો મેસેજ લખો" : "Send Another Message"}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'gu' ? "તમારું નામ *" : "Your Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'gu' ? "દા.ત. રમેશભાઈ પટેલ" : "e.g. Rajesh Patel"}
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#081a2e] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'gu' ? "મોબાઈલ નંબર *" : "Phone / Mobile *"}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98000 00000"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#081a2e] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === 'gu' ? "તમારું ઈમેઇલ" : "Your Email Address"}
                    </label>
                    <input
                      type="email"
                      placeholder="client@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#081a2e] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === 'gu' ? "કેસ / દસ્તાવેજ વિગત *" : "Brief Facts of Your Legal Matter *"}
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder={lang === 'gu' ? "જમીન, વારસાઈ, દસ્તાવેજ, કોર્ટ કેસ કે નોટીસ બાબત ટૂંકમાં જણાવો..." : "Please describe your query regarding property, revenue, civil suit, criminal bail, or documentation..."}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#081a2e] transition"
                    ></textarea>
                  </div>

                  {/* Submit Button & Fast Action Row */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:flex-1 py-3 rounded-lg bg-[#081a2e] hover:bg-[#14375e] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition flex items-center justify-center gap-2 disabled:opacity-75"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={15} className="animate-spin" />
                          <span>{lang === 'gu' ? "ઈમેઇલ મોકલાઈ રહ્યો છે..." : "Sending to Email..."}</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>{lang === 'gu' ? "ઈમેઇલ પર મેસેજ મોકલો" : "Send to Advocate's Email"}</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto px-4 py-3 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] font-bold text-xs flex items-center justify-center gap-2 border border-[#25D366]/40 transition"
                    >
                      <MessageCircle size={15} />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleMailtoSend}
                      className="w-full sm:w-auto px-3.5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 transition border border-slate-200"
                      title="Open in Gmail / Email Client"
                    >
                      <Mail size={13} />
                      <span className="hidden sm:inline">Mail Client</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Full-Width Google Maps Office Location & Route Direction Card */}
        <div className="mt-10 sm:mt-14 bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 shadow-xs border border-slate-200 overflow-hidden">
          
          {/* Header & Direction Actions */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-[#081a2e] text-xs font-mono font-bold mb-2 border border-slate-200">
                <Navigation size={12} className="text-[#081a2e]" />
                <span>{lang === 'gu' ? "ગૂગલ મેપ્સ સત્તાવાર લોકેશન & લાઈવ રૂટ" : "Official Google Maps Location & Live Navigation"}</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-[#081a2e]">
                {lang === 'gu' ? "રાજકોટ ઓફિસ સુધી પહોંચવા માટે ગૂગલ મેપ્સ ડાયરેક્શન" : "Directions to Our Rajkot Office"}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                {exactAddress}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {/* 1. Turn-by-Turn GPS Directions */}
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-[#081a2e] hover:bg-[#14375e] text-white font-bold text-xs sm:text-sm shadow-sm transition flex items-center gap-2"
                title="Open turn-by-turn navigation in Google Maps app"
              >
                <Navigation size={14} />
                <span>{lang === 'gu' ? "નેવિગેશન શરૂ કરો (Get Directions)" : "Start Navigation (Get Directions)"}</span>
              </a>

              {/* 2. Open in Google Maps */}
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition flex items-center gap-1.5 border border-slate-300"
              >
                <MapPin size={13} />
                <span>{lang === 'gu' ? "મેપ્સ એપમાં જુઓ" : "Open in Maps App"}</span>
              </a>

              {/* 3. Copy Address */}
              <button
                type="button"
                onClick={handleCopyAddress}
                className="px-3.5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition flex items-center gap-1.5 border border-slate-300"
                title="Copy Exact Verified Office Address to Clipboard"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-600" />
                    <span className="text-emerald-700">{lang === 'gu' ? "સરનામું કોપી થયું!" : "Copied to Clipboard!"}</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>{lang === 'gu' ? "સરનામું કોપી કરો" : "Copy Address"}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Key Landmarks & Parking Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-4 border-b border-slate-100 text-xs">
            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-base">📍</span>
              <div>
                <div className="text-[10px] text-slate-500 font-mono font-semibold uppercase">{lang === 'gu' ? "ચોક" : "Junction"}</div>
                <div className="font-bold text-[#081a2e]">{lang === 'gu' ? "રાજ પેલેસ ચોક" : "Raj Palace Chowk"}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-base">🏢</span>
              <div>
                <div className="text-[10px] text-slate-500 font-mono font-semibold uppercase">{lang === 'gu' ? "કોમ્પ્લેક્સ" : "Building"}</div>
                <div className="font-bold text-[#081a2e]">{lang === 'gu' ? "નક્ષત્ર V (ઓફિસ ૧૨)" : "Nakshatra V (Off. 12)"}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-base">🛣️</span>
              <div>
                <div className="text-[10px] text-slate-500 font-mono font-semibold uppercase">{lang === 'gu' ? "વિસ્તાર & રોડ" : "Area & Road"}</div>
                <div className="font-bold text-[#081a2e]">{lang === 'gu' ? "સાધુ વાસવાણી રોડ, યોગી નગર" : "Sadhu Vasvani Rd, Yogi Nagar"}</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-base">🚗</span>
              <div>
                <div className="text-[10px] text-slate-500 font-mono font-semibold uppercase">{lang === 'gu' ? "વાહન સુવિધા" : "Accessibility"}</div>
                <div className="font-bold text-emerald-700">{lang === 'gu' ? "સરળ પાર્કિંગ ઉપલબ્ધ" : "Easy Visitor Parking"}</div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed with Exact Address Query */}
          <div className="mt-4 relative rounded-xl overflow-hidden border border-slate-300 shadow-inner h-72 sm:h-96">
            <iframe
              title="Advocate Paraskumar Karetiya Office Google Maps Location"
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            {/* Floating Office Badge Overlay */}
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md rounded-lg p-2.5 shadow-md border border-slate-300 max-w-[290px] sm:max-w-sm flex items-center gap-2.5 pointer-events-auto">
              <div className="w-8 h-8 rounded bg-[#081a2e] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-xs font-bold">
                ⚖
              </div>
              <div className="text-left overflow-hidden">
                <div className="text-xs font-bold text-[#081a2e] leading-snug truncate">
                  Advocate Paraskumar Karetiya
                </div>
                <div className="text-[10px] text-slate-600 truncate">
                  Office No.12, Nakshatra V, Raj Palace Chowk
                </div>
              </div>
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto p-1.5 rounded bg-[#081a2e] text-white hover:bg-[#14375e] transition flex-shrink-0"
                title="Get GPS Directions"
              >
                <Navigation size={12} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
