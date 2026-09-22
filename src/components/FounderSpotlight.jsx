import React from 'react';
import { Award, Briefcase, GraduationCap, ShieldCheck, Heart, Hospital, Check } from 'lucide-react';
import { founderDetails } from '../data/organizationData';

export default function FounderSpotlight() {
  return (
    <section className="py-14 sm:py-20 bg-slate-100 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Portrait Badge, Honors & Quick Stats */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-950 via-slate-900 to-brand-900 text-white p-5 sm:p-8 lg:p-12 flex flex-col justify-between">
              <div>
                
                <div className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-4 sm:mb-6">
                  <Award className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                  Founder Spotlight
                </div>

                <div className="flex items-center space-x-3.5 sm:space-x-4 mb-4 sm:mb-6">
                  {/* Stylized Nurse Avatar Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-teal-500 to-brand-500 p-0.5 shadow-xl flex-shrink-0">
                    <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                      <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-200">
                        CC
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                      {founderDetails.name}
                    </h3>
                    <p className="text-teal-300 font-semibold text-xs sm:text-sm">
                      {founderDetails.credentials}
                    </p>
                    <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5">
                      {founderDetails.roles}
                    </p>
                  </div>
                </div>

                {/* 32 Years Clinical Experience Stat */}
                <div className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/10 backdrop-blur-sm mb-4 sm:mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-amber-400">{founderDetails.experienceYears}</span>
                    <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-300 font-medium">In the Medical Field</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Distinguished career spanning critical care, post-anesthesia recovery, cardiovascular units, oncology, and nursing leadership.
                  </p>
                </div>

                {/* Key Honors */}
                <div className="space-y-2.5 sm:space-y-3">
                  <p className="text-[11px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">
                    Honors & Special Certifications:
                  </p>
                  {founderDetails.honors.map((honor, idx) => (
                    <div key={idx} className="bg-slate-800/80 rounded-xl p-3 sm:p-3.5 border border-slate-700/80">
                      <div className="flex items-start space-x-2 sm:space-x-2.5">
                        <Award className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-white">{honor.title}</p>
                          <p className="text-[11px] text-teal-300 font-medium">{honor.organization}</p>
                          <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5 leading-normal">{honor.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-800">
                <p className="text-xs text-slate-400 flex items-start sm:items-center">
                  <GraduationCap className="w-4 h-4 mr-2 text-teal-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>Alma Mater: <strong className="text-slate-200">{founderDetails.almaMater}</strong></span>
                </p>
              </div>

            </div>

            {/* Right Column: Narrative Biography & Clinical Career Record */}
            <div className="lg:col-span-7 p-5 sm:p-8 lg:p-12 space-y-6 sm:space-y-8">
              
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  Leadership Journey
                </span>
                <h3 className="mt-2.5 text-xl sm:text-3xl font-bold text-slate-900">
                  A Life Devoted to Servant Healthcare
                </h3>
                <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  <p>
                    {founderDetails.biography}
                  </p>
                </div>
              </div>

              {/* Guiding Quote Box */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-xl">
                <p className="text-slate-800 font-serif italic text-sm sm:text-lg">
                  "If you are in service to others, you are in service to God."
                </p>
                <p className="text-[11px] sm:text-xs font-bold text-amber-800 mt-1.5 uppercase tracking-wide">
                  — Charles S. Cledera's Guiding Philosophy
                </p>
              </div>

              {/* Institutional Career Record */}
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 sm:mb-4 flex items-center">
                  <Hospital className="w-4 h-4 mr-2 text-brand-600" />
                  Clinical Appointments & Hospital History
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {founderDetails.careerHighlights.map((career, i) => (
                    <div key={i} className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <p className="text-xs font-bold text-slate-900">{career.role}</p>
                      <p className="text-xs font-medium text-brand-700 mt-0.5">{career.institution}</p>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
                        {career.location} {career.period && `• ${career.period}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
