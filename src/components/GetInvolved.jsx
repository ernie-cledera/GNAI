import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, HeartHandshake, UserPlus, Hospital, Globe } from 'lucide-react';
import { organizationInfo } from '../data/organizationData';

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Registered Nurse (RN)',
    facility: '',
    interests: 'Medical Missions & Field Outreach',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="get-involved" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Join the Alliance
          </span>
          <h2 className="mt-2.5 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get Involved & Volunteer With GNAI
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600">
            Whether you are a bedside nurse, physician, allied health professional, or an ardent humanitarian advocate, there is a place for your talents in our life-changing mission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          
          {/* Contact & Organization Information (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-8 border border-slate-200">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-5 flex items-center">
                <HeartHandshake className="w-5 h-5 mr-2 text-teal-600 flex-shrink-0" />
                Contact Headquarters
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Headquarters</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">{organizationInfo.address.street}</p>
                    <p className="text-xs sm:text-sm text-slate-600">{organizationInfo.address.city}, {organizationInfo.address.state} {organizationInfo.address.zip}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Email Inquiries</p>
                    <a
                      href={`mailto:${organizationInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-brand-700 hover:text-brand-800 transition break-all"
                    >
                      {organizationInfo.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Official Portal</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">{organizationInfo.website}</p>
                  </div>
                </div>
              </div>

              {/* 501(c)(3) Transparency Box */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <div className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  <strong className="text-slate-800 font-semibold block mb-1">Non-Profit Status:</strong>
                  {organizationInfo.einNotice}
                </div>
              </div>

            </div>

            {/* Ways to Volunteer Highlights */}
            <div className="bg-gradient-to-br from-brand-900 to-slate-900 text-white rounded-2xl p-5 sm:p-7 space-y-3 sm:space-y-4">
              <h4 className="text-sm sm:text-base font-bold text-white flex items-center">
                <UserPlus className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-teal-400 flex-shrink-0" />
                Who Can Join Us?
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2 mt-1.5 flex-shrink-0"></span>
                  <span><strong>Registered Nurses & NPs:</strong> Triage, wound care, screenings</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2 mt-1.5 flex-shrink-0"></span>
                  <span><strong>Physicians & Specialists:</strong> Outpatient consultations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2 mt-1.5 flex-shrink-0"></span>
                  <span><strong>Nursing Students:</strong> Clinical shadowing & health literacy</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2 mt-1.5 flex-shrink-0"></span>
                  <span><strong>Community Supporters:</strong> Supply packing, logistics, media</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Volunteer / Contact Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 border border-slate-200 shadow-md">
              
              {submitted ? (
                <div className="py-8 sm:py-12 text-center space-y-3 sm:space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Thank You for Reaching Out!</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
                    We have received your message and volunteer inquiry. An officer from the Global Nurses Alliance will be in touch with you shortly at <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        role: 'Registered Nurse (RN)',
                        facility: '',
                        interests: 'Medical Missions & Field Outreach',
                        message: ''
                      });
                    }}
                    className="mt-3 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-semibold transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="border-b border-slate-100 pb-3 sm:pb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">Volunteer & Membership Form</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                      Fill out this form to volunteer for upcoming medical missions or inquire about institutional alliance.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maria Santos, RN"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(702) 555-0199"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Clinical Profession / Role
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="Registered Nurse (RN)">Registered Nurse (RN)</option>
                        <option value="Nurse Practitioner / APRN">Nurse Practitioner / APRN</option>
                        <option value="Physician / Specialist">Physician / Specialist (MD/DO)</option>
                        <option value="Nursing Student">Nursing Student</option>
                        <option value="Pharmacist / Allied Health">Pharmacist / Allied Health</option>
                        <option value="Hospital Administrator">Hospital Administrator</option>
                        <option value="Community Supporter / Volunteer">Community Supporter / Volunteer</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Hospital or Facility Affiliation
                      </label>
                      <input
                        type="text"
                        value={formData.facility}
                        onChange={(e) => setFormData({ ...formData, facility: e.target.value })}
                        placeholder="e.g. Summerlin, UMC, Sunrise..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Primary Area of Interest
                      </label>
                      <select
                        value={formData.interests}
                        onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="Medical Missions & Field Outreach">Medical Missions & Field Outreach</option>
                        <option value="Disaster Relief Emergency Response">Disaster Relief Emergency Response</option>
                        <option value="Community Health & Nurse Mentorship">Community Health & Nurse Mentorship</option>
                        <option value="Fundraising Events & Donor Galas">Fundraising Events & Donor Galas</option>
                        <option value="Hospital Ambassador Program">Hospital Ambassador Program</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Your Message or Experience Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your nursing specialty, language proficiencies, or how you would like to support GNAI's missions..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-brand-700 hover:bg-brand-800 active:scale-98 transition flex items-center justify-center space-x-2 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Volunteer & Alliance Application</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
