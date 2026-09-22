import React from 'react';
import { Heart, Users, ShieldCheck, ArrowRight, Award, Globe, Activity } from 'lucide-react';
import { organizationInfo } from '../data/organizationData';

export default function Hero({ onOpenDonate, onOpenVolunteer }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-brand-950 to-slate-900 text-white pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28">
      {/* Background Decorative Medical Subtle Grid & Glows */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-brand-500 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#38a5f6_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Main Hero Copy (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-400/30">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-teal-400 flex-shrink-0" />
                501(c)(3) Tax-Exempt
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                <Award className="w-3.5 h-3.5 mr-1 text-amber-400 flex-shrink-0" />
                DAISY Award Nurse Founded
              </span>
            </div>

            {/* Headline with mobile fluid scale */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] sm:leading-[1.15] text-white">
              Healing Communities. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-200">
                Uplifting Lives Across Borders.
              </span>
            </h1>

            {/* Mission Hook */}
            <p className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Global Nurses Alliance Incorporated (GNAI) unites nurses, clinical leaders, and community allies to deliver life-changing medical missions, disaster relief, and health empowerment to vulnerable populations globally.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onOpenDonate}
                className="w-full sm:w-auto flex items-center justify-center px-6 sm:px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 active:scale-98 rounded-xl shadow-lg shadow-teal-900/40 transition-all duration-200"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 fill-white text-white" />
                Support Our Medical Missions
              </button>
              
              <button
                onClick={onOpenVolunteer}
                className="w-full sm:w-auto flex items-center justify-center px-5 sm:px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 active:bg-slate-700 border border-slate-600 rounded-xl transition-all duration-200 hover:text-white"
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-teal-400" />
                Join as Volunteer
              </button>
            </div>

            {/* Trust Quote Teaser */}
            <div className="pt-3 sm:pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-1 sm:gap-2 text-slate-400 text-xs sm:text-sm">
              <span className="italic text-center sm:text-left">"{organizationInfo.quote.text}"</span>
              <span className="hidden sm:inline text-slate-600">—</span>
              <span className="text-slate-300 font-medium text-center sm:text-left">{organizationInfo.quote.author}</span>
            </div>

          </div>

          {/* Right Visual Card & Impact Highlights (Right 5 Cols) */}
          <div className="lg:col-span-5 mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Feature Glass Card */}
              <div className="bg-gradient-to-br from-slate-800/95 to-brand-950/95 border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-2xl backdrop-blur-xl relative z-10 space-y-4 sm:space-y-5">
                
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-700/60">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 p-1 border border-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <img src="/logo-emblem.png" alt="GNAI Official Insignia" className="w-full h-full object-contain drop-shadow" />
                    </div>
                    <div>
                      <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Humanitarian Alliance</h2>
                      <p className="text-[11px] sm:text-xs text-slate-400">Las Vegas, NV & Global Outreach</p>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-teal-900/60 text-teal-300 border border-teal-700/40">
                    Active Missions
                  </span>
                </div>

                {/* Metric Items Grid - Tightly tuned for mobile */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                  <div className="bg-slate-900/70 rounded-xl p-3 sm:p-4 border border-slate-800">
                    <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">32+</p>
                    <p className="text-[11px] sm:text-xs font-semibold text-slate-200 mt-0.5">Years Mastery</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">DAISY award clinical standard</p>
                  </div>
                  <div className="bg-slate-900/70 rounded-xl p-3 sm:p-4 border border-slate-800">
                    <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">9</p>
                    <p className="text-[11px] sm:text-xs font-semibold text-slate-200 mt-0.5">Ambassadors</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">Nevada hospital network linkages</p>
                  </div>
                  <div className="bg-slate-900/70 rounded-xl p-3 sm:p-4 border border-slate-800">
                    <p className="text-2xl sm:text-3xl font-extrabold text-blue-400">100%</p>
                    <p className="text-[11px] sm:text-xs font-semibold text-slate-200 mt-0.5">Tax-Deductible</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">Direct mission impact funding</p>
                  </div>
                  <div className="bg-slate-900/70 rounded-xl p-3 sm:p-4 border border-slate-800">
                    <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">Global</p>
                    <p className="text-[11px] sm:text-xs font-semibold text-slate-200 mt-0.5">Disaster Aid</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">Philippines & overseas relief</p>
                  </div>
                </div>

                {/* Impact Pillar Mini Banner */}
                <div className="bg-gradient-to-r from-teal-950/70 to-brand-900/70 border border-teal-800/40 rounded-xl p-3 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 truncate">
                    <Globe className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-200 truncate text-[11px] sm:text-xs">Inter-agency linkage for maximum care</span>
                  </div>
                  <a
                    href="#focus-areas"
                    className="text-teal-300 font-semibold hover:text-white flex items-center text-[11px] sm:text-xs flex-shrink-0 ml-2"
                  >
                    Programs <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </div>

              </div>
              
              {/* Subtle back decorative element */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur-lg opacity-20 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
