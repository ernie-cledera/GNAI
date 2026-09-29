import React, { useState, useEffect } from 'react';
import { X, Heart, ShieldCheck, CheckCircle, CreditCard, Landmark, DollarSign, Mail } from 'lucide-react';
import { organizationInfo } from '../data/organizationData';

export default function DonationModal({ isOpen, onClose, initialData }) {
  const [amount, setAmount] = useState(initialData?.amount || 100);
  const [isMonthly, setIsMonthly] = useState(initialData?.isMonthly || false);
  const [designation, setDesignation] = useState(initialData?.designation || 'Medical Missions & Prescriptions');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialData?.amount) {
      setAmount(initialData.amount);
    }
    if (typeof initialData?.isMonthly === 'boolean') {
      setIsMonthly(initialData.isMonthly);
    }
    if (initialData?.designation) {
      setDesignation(initialData.designation);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-brand-950 via-slate-900 to-brand-900 text-white p-5 sm:p-6 sticky top-0 z-10 border-b border-blue-900/50">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 text-slate-300 hover:text-white p-2 rounded-full hover:bg-white/10 active:bg-white/20 transition"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <div className="flex items-center space-x-1.5 text-amber-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
            <span>501(c)(3) Tax-Deductible Gift</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">Global Nurses Alliance</h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Empowering medical missions & emergency disaster relief
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-4 sm:py-6 space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 text-brand-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-brand-800" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900">Thank You, {donorName || 'Generous Donor'}!</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Your pledge of <strong className="text-brand-900">${amount} {isMonthly ? '/ month' : ''}</strong> designated for <em>{designation}</em> will bring critical medicine and relief to underserved communities.
              </p>

              <div className="bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200 text-left text-xs space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Receipt Ref:</span>
                  <span className="font-mono text-slate-900 font-bold">GNAI-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Organization:</span>
                  <span className="truncate max-w-[200px] sm:max-w-none">{organizationInfo.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Tax Status:</span>
                  <span>501(c)(3) Public Charity (NV)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Confirmation Sent:</span>
                  <span className="text-slate-900 truncate max-w-[180px] sm:max-w-none">{donorEmail || organizationInfo.email}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 bg-brand-900 hover:bg-brand-950 active:scale-98 text-amber-300 font-bold rounded-xl text-sm transition border border-amber-400/30"
              >
                Close Receipt
              </button>
            </div>
          ) : (
            <form onSubmit={handleDonateSubmit} className="space-y-4">
              
              {/* Selected Tier Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Contribution Amount
                </label>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {[25, 50, 100, 250].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt)}
                      className={`py-2 rounded-xl text-sm font-bold border transition active:scale-95 ${
                        amount === amt
                          ? 'border-amber-500 bg-amber-50/80 text-slate-950 shadow-xs ring-1 ring-amber-400'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly or One-Time */}
              <div className="flex items-center space-x-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <input
                  type="checkbox"
                  id="monthly-checkbox-modal"
                  checked={isMonthly}
                  onChange={(e) => setIsMonthly(e.target.checked)}
                  className="w-4 h-4 text-brand-700 rounded border-slate-300 focus:ring-brand-700 flex-shrink-0"
                />
                <label htmlFor="monthly-checkbox-modal" className="text-xs font-semibold text-slate-700 cursor-pointer">
                  Make this a recurring monthly contribution
                </label>
              </div>

              {/* Donor Name & Email */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Tax Receipt Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-700"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2 rounded-xl border flex flex-col items-center justify-center text-[11px] sm:text-xs font-semibold transition active:scale-95 ${
                      paymentMethod === 'card' ? 'border-amber-500 bg-amber-50 text-slate-950 shadow-xs ring-1 ring-amber-400 font-bold' : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 mb-1" />
                    Credit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('zelle')}
                    className={`p-2 rounded-xl border flex flex-col items-center justify-center text-[11px] sm:text-xs font-semibold transition active:scale-95 ${
                      paymentMethod === 'zelle' ? 'border-amber-500 bg-amber-50 text-slate-950 shadow-xs ring-1 ring-amber-400 font-bold' : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <Landmark className="w-4 h-4 mb-1" />
                    Zelle / ACH
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('check')}
                    className={`p-2 rounded-xl border flex flex-col items-center justify-center text-[11px] sm:text-xs font-semibold transition active:scale-95 ${
                      paymentMethod === 'check' ? 'border-amber-500 bg-amber-50 text-slate-950 shadow-xs ring-1 ring-amber-400 font-bold' : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <Mail className="w-4 h-4 mb-1" />
                    By Check
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-extrabold text-slate-950 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 active:scale-98 shadow-md shadow-amber-500/20 transition flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
                  <span>Confirm ${amount} {isMonthly ? 'Monthly' : ''} Gift</span>
                </button>
              </div>

              <p className="text-[10px] sm:text-[11px] text-center text-slate-500">
                100% of your gift supports GNAI's healthcare humanitarian projects and medical missions.
              </p>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
