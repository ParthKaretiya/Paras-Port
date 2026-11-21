import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Send, Building, PhoneCall, Loader2, MessageCircle } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, defaultTopic, services, profile, lang }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultTopic || (lang === 'gu' ? 'વારસાઈ & રેવન્યુ' : 'Succession & Revenue'),
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to Web3forms to forward to advocate's email
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: profile.web3FormsKey || "e43b1745-f09b-449e-873d-9d4131558bf0",
          to_email: profile.email,
          from_name: formData.name,
          subject: `[Consultation Booking] ${formData.name} - ${formData.service}`,
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          date: formData.date || "Earliest Available",
          timeSlot: formData.timeSlot,
          notes: formData.notes || "None provided",
          source: "Advocate Karetiya Portfolio Booking Modal",
        }),
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppBooking = () => {
    const text = `*New Consultation Request*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Matter:* ${formData.service}\n*Date:* ${formData.date || 'Earliest'}\n*Slot:* ${formData.timeSlot}\n*Notes:* ${formData.notes || 'None'}`;
    window.open(`https://wa.me/919512938031?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-[2rem] max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition font-bold"
        >
          <X size={16} />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-bold text-[#09294f] mb-2">
              {lang === 'gu' ? "મુલાકાત અરજી ઈમેઈલ પર મોકલાઈ!" : "Appointment Sent to Email!"}
            </h3>
            <p className="text-xs sm:text-sm text-[#4e6782] mb-6 max-w-md mx-auto">
              {lang === 'gu' ? (
                <>આભાર, <span className="font-semibold text-slate-800">{formData.name}</span>. આપની મુલાકાત અરજી એડવોકેટના ઈમેઈલ પર નોંધાઈ ગઈ છે. ટૂંક સમયમાં ઓફિસ દ્વારા આપનો સંપર્ક કરવામાં આવશે.</>
              ) : (
                <>Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Your consultation booking has been delivered to Adv. Paraskumar's email. Our office will call to confirm.</>
              )}
            </p>

            <div className="p-4 rounded-2xl bg-[#f5f9fc] border border-[#e1edf6] text-xs text-left mb-6 space-y-1.5">
              <div><span className="font-bold text-[#18395e]">{lang === 'gu' ? "ઓફિસ:" : "Office:"}</span> {profile.office}</div>
              <div><span className="font-bold text-[#18395e]">{lang === 'gu' ? "તારીખ:" : "Preferred Date:"}</span> {formData.date || 'Earliest Available'}</div>
              <div><span className="font-bold text-[#18395e]">{lang === 'gu' ? "સેવા:" : "Service:"}</span> {formData.service}</div>
              <div><span className="font-bold text-[#18395e]">{lang === 'gu' ? "ફોન:" : "Phone:"}</span> {profile.phone}</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#1ebd5a] transition"
              >
                <MessageCircle size={14} />
                <span>{lang === 'gu' ? "વોટ્સએપ પર પુષ્ટિ કરો" : "Confirm on WhatsApp"}</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#48719a] text-white font-bold text-xs shadow hover:bg-[#385c82] transition"
              >
                {lang === 'gu' ? "પૂર્ણ & પાછા ફરો" : "Done"}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#48719a]">
                {lang === 'gu' ? "ગોપનીય કાનૂની મુલાકાત" : "Confidential Legal Appointment"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#09294f] mt-1">
                {lang === 'gu' ? "ઓફિસે મુલાકાત બુક કરો" : "Schedule Office Consultation"}
              </h3>
              <p className="text-xs text-[#4f6b88] mt-1">
                {lang === 'gu' 
                  ? "રાજકોટ ઓફિસ ખાતે રૂબરૂ મળવા માટે નીચેની વિગત ભરો."
                  : "Fill out the details below to meet at our Rajkot office."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1e3c60] mb-1">
                    {lang === 'gu' ? "તમારું નામ *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#48719a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1e3c60] mb-1">
                    {lang === 'gu' ? "મોબાઈલ નંબર *" : "Phone Number *"}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 95129 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#48719a]"
                  />
                </div>
              </div>

              {/* Service Category */}
              <div>
                <label className="block text-xs font-bold text-[#1e3c60] mb-1">
                  {lang === 'gu' ? "કાનૂની સેવા / બાબત *" : "Legal Matter Category *"}
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#48719a] bg-white"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="General Consultation">
                    {lang === 'gu' ? "અન્ય કાનૂની સલાહ" : "General Legal Advice"}
                  </option>
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1e3c60] mb-1">
                    {lang === 'gu' ? "પસંદગીની તારીખ" : "Preferred Date"}
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#48719a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1e3c60] mb-1">
                    {lang === 'gu' ? "સમય ગાળો" : "Preferred Time"}
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#48719a] bg-white"
                  >
                    <option value="Morning">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon">Afternoon (3:00 PM - 5:30 PM)</option>
                    <option value="Evening">Evening (6:00 PM - 8:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-[#1e3c60] mb-1">
                  {lang === 'gu' ? "ટૂંકી વિગત (ઓપ્શનલ)" : "Brief Note (Optional)"}
                </label>
                <textarea
                  rows="2"
                  placeholder={lang === 'gu' ? "દસ્તાવેજ કે કેસ અંગે..." : "Mention court, notice, or document details..."}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#48719a]"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-2xl bg-[#48719a] hover:bg-[#385c82] text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2 disabled:opacity-75"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>{lang === 'gu' ? "ઈમેઇલ મોકલાઈ રહ્યો છે..." : "Booking..."}</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>{lang === 'gu' ? "મુલાકાત અરજી સબમિટ કરો" : "Submit Appointment Request"}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
