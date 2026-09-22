import React, { useState } from 'react';
import { 
  Stethoscope, 
  HeartHandshake, 
  TrendingUp, 
  GraduationCap, 
  Network, 
  CheckCircle2, 
  ArrowRight, 
  Heart 
} from 'lucide-react';
import { focusAreas } from '../data/organizationData';

const iconMap = {
  Stethoscope,
  HeartHandshake,
  TrendingUp,
  GraduationCap,
  Network
};

export default function FocusAreas({ onOpenDonate, onOpenVolunteer }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentArea = focusAreas[activeTab];
  const CurrentIcon = iconMap[currentArea.icon] || Stethoscope;

  return (
    <section id="focus-areas" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            What We Do
          </span>
          <h2 className="mt-2.5 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Core Focus Areas & Programs
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600">
            Through targeted interventions and nurse-led coordination, GNAI addresses critical humanitarian needs from acute emergency care to sustainable community development.
          </p>
        </div>

        {/* Tab Navigation - Touch scrollable on mobile with smooth styling */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-3 mb-6 sm:mb-10 gap-2 no-scrollbar px-1">
          {focusAreas.map((area, idx) => {
            const IconComponent = iconMap[area.icon] || Stethoscope;
            const isActive = activeTab === idx;
            return (
              <button
                key={area.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center space-x-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 flex-shrink-0 active:scale-95 ${
                  isActive
                    ? 'bg-brand-900 text-white shadow-md shadow-brand-900/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-teal-400' : 'text-slate-500'}`} />
                <span>{area.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Focus Area Detailed Showcase Card */}
        <div className="bg-gradient-to-br from-slate-50 to-teal-50/40 rounded-2xl sm:rounded-3xl border border-slate-200/80 p-5 sm:p-8 lg:p-12 shadow-sm mb-10 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-lg bg-teal-100 text-teal-800 text-[11px] sm:text-xs font-semibold">
                <CurrentIcon className="w-3.5 h-3.5" />
                <span>Focus Pillar 0{activeTab + 1} of 0{focusAreas.length}</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-bold text-slate-900">
                {currentArea.title}
              </h3>

              <p className="text-slate-700 text-sm sm:text-lg leading-relaxed">
                {currentArea.shortDesc}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-1 sm:pt-2">
                <p className="text-[11px] sm:text-xs uppercase font-bold text-slate-500 tracking-wider">
                  Program Capabilities & Activities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {currentArea.highlights.map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Footer / Action */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                <button
                  onClick={onOpenDonate}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 active:scale-98 transition shadow-sm"
                >
                  <Heart className="w-4 h-4 mr-2 fill-white" />
                  Fund This Program
                </button>
                <button
                  onClick={onOpenVolunteer}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-brand-700 bg-white border border-brand-200 hover:bg-brand-50 active:bg-brand-100 transition"
                >
                  Volunteer Your Expertise
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            </div>

            {/* Impact Metric & Visual Info Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-sm space-y-4 sm:space-y-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-600/30">
                  <CurrentIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">Humanitarian Metric</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {currentArea.stats}
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                  <span className="font-bold block text-amber-950">501(c)(3) Transparency Note:</span>
                  All donations directed to this pillar are strictly earmarked for patient consumables, prescription distribution, and direct field outreach supplies.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Grid Summary of all 5 Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
          {focusAreas.map((area, idx) => {
            const IconComp = iconMap[area.icon] || Stethoscope;
            const isSelected = activeTab === idx;
            return (
              <div
                key={area.id}
                onClick={() => setActiveTab(idx)}
                className={`cursor-pointer p-3 sm:p-4 rounded-xl border transition-all active:scale-95 ${
                  isSelected
                    ? 'border-teal-500 bg-teal-50/60 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <IconComp className={`w-4 h-4 sm:w-5 sm:h-5 mb-1.5 ${isSelected ? 'text-teal-600' : 'text-slate-500'}`} />
                <h4 className="text-xs sm:text-xs font-bold text-slate-900 line-clamp-1">{area.title}</h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 line-clamp-2">{area.shortDesc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
