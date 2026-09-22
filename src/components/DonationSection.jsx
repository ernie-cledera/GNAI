import React, { useState } from 'react';
import { Heart, ShieldCheck, CheckCircle2, DollarSign, Gift, ArrowRight, FileText, Sparkles } from 'lucide-react';
import { donationTiers, organizationInfo } from '../data/organizationData';

export default function DonationSection({ onOpenDonateModal }) {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [designation, setDesignation] = useState('Medical Missions & Prescriptions');

  const handleSelectTier = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    setSelectedAmount(val ? Number(val) : 0);
  };

  const activeAmount = customAmount ? Number(customAmount) : selectedAmount;
  
  const getImpactMessage = (amt) => {
    if (amt >= 500) {
      return "Directly co-sponsors a comprehensive rural medical outreach clinic providing doctor consultations, free triage, emergency medication, and wound care for up to 100 vulnerable villagers.";
    } else if (amt >= 250) {
      return "Provides emergency disaster medical bundles, emergency nutrition, and clean water filtration supplies for 5 families in deep distress.";
    } else if (amt >= 100) {
      return "Funds vital diagnostic supplies, glucose testing monitors, surgical dressings, and PPE for a full day of field outreach.";
    } else if (amt >= 50) {
      return "Supplies 10 underserved chronic care patients with life-saving prescription medications (hypertension, antibiotics, diabetes care).";
    } else if (amt >= 25) {
      return "Provides pediatric vitamins, basic wound care kits, and hygiene essentials for 5 clinic patients.";
    } else if (amt > 0) {
      return `Every dollar directly funds front-line humanitarian medical supplies and non-profit logistics.`;
    }
    return "Select an amount to preview the direct patient impact of your gift.";
  };

  const handleProceed = () => {
    onOpenDonateModal({
      amount: activeAmount || 50,
      isMonthly,
      designation
    });
  };

  return (
    <section id="donate" className="py-14 sm:py-20 bg-gradient-to-b from-white via-teal-50/20 to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
            501(c)(3) Tax-Deductible Giving
          </span>
          <h2 className="mt-2.5 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Support Our Life-Saving Medical Missions
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600">
            GNAI relies on compassionate donors, fundraising events, and healthcare allies to bring free clinics, prescription medicines, and emergency disaster relief to those with nowhere else to turn.
          </p>
        </div>

        {/* Donation Interactive Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
          
          {/* Frequency Toggle Banner */}
          <div className="bg-slate-900 px-4 sm:px-6 py-3.5 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-center sm:text-left">
              <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span>100% Tax Deductible (EIN-Verified 501(c)(3) Charity)</span>
            </div>
            
            {/* Frequency Switch */}
            <div className="inline-flex p-1 bg-slate-800 rounded-xl border border-slate-700 w-full sm:w-auto justify-center">
              <button
                type="button"
                onClick={() => setIsMonthly(false)}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-bold transition active:scale-95 ${
                  !isMonthly ? 'bg-teal-500 text-slate-950 shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                One-Time Gift
              </button>
              <button
                type="button"
                onClick={() => setIsMonthly(true)}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 active:scale-95 ${
                  isMonthly ? 'bg-teal-500 text-slate-950 shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                Monthly Ally
              </button>
            </div>
          </div>

          <div className="p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
            
            {/* Tier Buttons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Select Contribution Amount {isMonthly && <span className="text-teal-600 font-semibold">(Monthly)</span>}
              </label>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
                {donationTiers.map((tier) => {
                  const isSelected = !customAmount && selectedAmount === tier.amount;
                  return (
                    <button
                      key={tier.amount}
                      type="button"
                      onClick={() => handleSelectTier(tier.amount)}
                      className={`relative p-3 sm:p-4 rounded-xl text-center border-2 transition-all active:scale-95 ${
                        isSelected
                          ? 'border-teal-500 bg-teal-50/60 text-slate-950 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      {tier.popular && (
                        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[9px] sm:text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap">
                          Most Chosen
                        </span>
                      )}
                      <div className="text-xl sm:text-2xl font-extrabold">${tier.amount}</div>
                      <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5 line-clamp-1">
                        {tier.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount Input */}
              <div className="mt-3 sm:mt-4">
                <div className="relative max-w-full sm:max-w-xs">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-bold text-sm">
                    $
                  </div>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className={`w-full pl-8 pr-4 py-2.5 rounded-xl border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      customAmount ? 'border-teal-500 bg-teal-50/30' : 'border-slate-300'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Impact Calculation Preview Card */}
            <div className="bg-gradient-to-br from-teal-900 to-brand-950 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-inner">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 text-teal-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] sm:text-xs uppercase font-bold text-amber-300 tracking-wider">
                    Immediate Patient Impact (${activeAmount || 0} {isMonthly ? '/ month' : 'gift'})
                  </div>
                  <p className="text-slate-100 text-xs sm:text-sm sm:leading-relaxed">
                    {getImpactMessage(activeAmount)}
                  </p>
                </div>
              </div>
            </div>

            {/* Allocation Designation Dropdown */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Designate Gift Purpose
              </label>
              <select
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="Medical Missions & Prescriptions">Free Medical Missions & Prescription Medicines</option>
                <option value="Disaster Relief Emergency Aid">Emergency Disaster Relief & Rapid Aid Packs</option>
                <option value="Livelihood & Community Empowerment">Formative Livelihood & Education Programs</option>
                <option value="Where Needed Most">Where Most Urgently Needed (General Care Fund)</option>
              </select>
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                onClick={handleProceed}
                className="w-full py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 active:scale-98 shadow-lg shadow-teal-900/20 transition-all flex items-center justify-center space-x-2"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                <span>Complete ${activeAmount || 50} {isMonthly ? 'Monthly' : ''} Contribution</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
              </button>
              <p className="text-center text-[10px] sm:text-xs text-slate-500 mt-2">
                Official 501(c)(3) tax receipt generated instantly upon submission.
              </p>
            </div>

          </div>

          {/* Mail Check / Direct Transfer Details */}
          <div className="bg-slate-50 p-4 sm:p-6 border-t border-slate-200/80 text-xs text-slate-600">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <span className="font-bold text-slate-800 block sm:inline mr-2">Prefer donating by check or bank wire?</span>
                <span className="block sm:inline">Payable to <strong>Global Nurses Alliance Incorporated</strong>:</span>
                <span className="block text-slate-700 mt-0.5">{organizationInfo.address.full}</span>
              </div>
              <div className="flex items-center space-x-1 text-teal-700 font-semibold flex-shrink-0">
                <FileText className="w-4 h-4 mr-1" />
                <span>EIN verified non-profit</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
