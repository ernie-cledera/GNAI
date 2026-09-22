import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Users, ShieldCheck } from 'lucide-react';
import { organizationInfo } from '../data/organizationData';

export default function VolunteerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Registered Nurse (RN)');
  const [hospital, setHospital] = useState('');

  // Lock background scroll when modal is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-brand-900 text-white p-5 sm:p-6 sticky top-0 z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 text-slate-300 hover:text-white p-2 rounded-full hover:bg-white/10 active:bg-white/20 transition"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <div className="flex items-center space-x-1.5 text-teal-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1">
            <Users className="w-3.5 h-3.5" />
            <span>Join the Global Alliance</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">Volunteer With GNAI</h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Serving communities locally in Nevada and globally
          </p>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-8">
          {submitted ? (
            <div className="text-center py-4 sm:py-6 space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900">Application Received!</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Thank you for offering your skills and compassionate heart to GNAI, <strong>{name}</strong>. Our Operations Director will review your details and connect with you at <strong>{email}</strong>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-3 bg-brand-700 hover:bg-brand-800 active:scale-98 text-white rounded-xl text-sm font-semibold transition"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Santos, BSN, RN"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="youremail@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Healthcare Profession / Specialty
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Registered Nurse (RN)">Registered Nurse (RN)</option>
                  <option value="Nurse Supervisor / Charge Nurse">Nurse Supervisor / Charge Nurse</option>
                  <option value="Physician (MD/DO)">Physician (MD/DO)</option>
                  <option value="Nurse Practitioner / APRN">Nurse Practitioner / APRN</option>
                  <option value="Nursing Student">Nursing Student</option>
                  <option value="Emergency Medical Technician (EMT)">Emergency Medical Technician (EMT)</option>
                  <option value="Community Volunteer">Community Volunteer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Hospital / Workplace (Optional)
                </label>
                <input
                  type="text"
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                  placeholder="e.g. Summerlin Hospital, UMC, St. Rose..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-brand-700 hover:bg-brand-800 active:scale-98 shadow-md transition flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Volunteer Interest</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
