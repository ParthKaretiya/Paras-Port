import React, { useState } from 'react';
import { Settings, X, Upload, RefreshCw, Palette, User, Award, Check } from 'lucide-react';

export default function ThemeCustomizer({ profile, setProfile, customPhotoUrl, setCustomPhotoUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhotoUrl(url);
    }
  };

  const handleResetPhoto = () => {
    setCustomPhotoUrl(null);
  };

  return (
    <>
      {/* Floating Gear Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3.5 rounded-full bg-[#385b82] text-white shadow-2xl hover:bg-[#2c4767] hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/60 flex items-center gap-2 group"
          title="Customize Advocate Details"
        >
          <Settings size={20} className="group-hover:rotate-45 transition-transform duration-300" />
          <span className="hidden sm:inline text-xs font-semibold pr-1">Edit Info / Photo</span>
        </button>
      </div>

      {/* Slide-over Customization Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-l border-slate-200">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2 text-[#09294f]">
                  <Settings size={20} className="text-[#48719a]" />
                  <h3 className="font-bold text-lg">Advocate Info & Theme</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="text-xs text-[#52708f] mb-6">
                You can easily customize your brother's name, qualifications, title, phone, and even upload his actual advocate portrait photo!
              </p>

              {/* Photo Upload Option */}
              <div className="mb-6 p-4 rounded-2xl bg-[#f5f9fc] border border-[#e1edf6]">
                <label className="block text-xs font-bold text-[#183d66] mb-2">
                  Advocate Portrait Photo
                </label>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-slate-200 overflow-hidden border border-white shadow-sm flex-shrink-0">
                    <img
                      src={customPhotoUrl || '/advocate-portrait.png'}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-[#2c4e72] hover:bg-slate-50 shadow-sm">
                      <Upload size={14} />
                      <span>Upload Brother's Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                    {customPhotoUrl && (
                      <button
                        onClick={handleResetPhoto}
                        className="block text-[11px] text-red-600 hover:underline"
                      >
                        Reset to default mockup photo
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Field Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1e3c60] mb-1">
                    Advocate Name
                  </label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#48719a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e3c60] mb-1">
                    Brand / Logo Title (Top Left)
                  </label>
                  <input
                    type="text"
                    value={profile.brandName || "Jurino"}
                    onChange={(e) => setProfile({ ...profile, brandName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#48719a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e3c60] mb-1">
                    Qualifications & Degrees
                  </label>
                  <input
                    type="text"
                    value={profile.qualifications}
                    onChange={(e) => setProfile({ ...profile, qualifications: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#48719a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e3c60] mb-1">
                    Phone / Helpline
                  </label>
                  <input
                    type="text"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#48719a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e3c60] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#48719a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e3c60] mb-1">
                    Office Address
                  </label>
                  <input
                    type="text"
                    value={profile.office}
                    onChange={(e) => setProfile({ ...profile, office: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#48719a]"
                  />
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Updates live instantly</span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#48719a] text-white font-semibold text-xs shadow hover:bg-[#385c82] transition"
              >
                Close Drawer
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
