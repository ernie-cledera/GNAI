import React from 'react';
import { Target, Compass, Sparkles, HeartHandshake, Shield, Layers } from 'lucide-react';
import { organizationInfo } from '../data/organizationData';

export default function MissionVision() {
  const pillars = [
    {
      icon: Sparkles,
      title: "Duplicable & Formative",
      desc: "Creating sustainable health initiatives that communities can independently replicate and maintain for generations."
    },
    {
      icon: HeartHandshake,
      title: "Uplifting the Underserved",
      desc: "Delivering empathetic, dignified clinical interventions to those facing acute geographic, economic, and systemic barriers."
    },
    {
      icon: Layers,
      title: "Inter-Agency Linkage",
      desc: "Building collaborative bridges between Nevada hospital systems, international partners, and grassroots clinics."
    },
    {
      icon: Shield,
      title: "Vocation-Driven Care",
      desc: "Elevating the nursing profession beyond routine duty into a life-affirming global humanitarian calling."
    }
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Purpose & Calling
          </span>
          <h2 className="mt-2.5 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Mission & Guiding Vision
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600 leading-relaxed">
            Founded on deep clinical compassion and community service, Global Nurses Alliance Incorporated provides a collaborative avenue for healthcare workers to transform lives.
          </p>
        </div>

        {/* Mission & Vision Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
          
          {/* Mission Card */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-4 sm:mb-6 border border-brand-100">
                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 flex items-center">
                Our Mission
              </h3>
              <p className="text-slate-700 text-sm sm:text-lg leading-relaxed font-normal">
                "{organizationInfo.mission}"
              </p>
            </div>
            <div className="mt-5 pt-4 sm:pt-6 border-t border-slate-100 flex items-center text-xs sm:text-sm font-semibold text-brand-700">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-600 mr-2 flex-shrink-0"></span>
              Formative • Life-Changing • Scalable
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4 sm:mb-6 border border-teal-100">
                <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 flex items-center">
                Our Vision
              </h3>
              <p className="text-slate-700 text-sm sm:text-lg leading-relaxed font-normal">
                "{organizationInfo.vision}"
              </p>
            </div>
            <div className="mt-5 pt-4 sm:pt-6 border-t border-slate-100 flex items-center text-xs sm:text-sm font-semibold text-teal-700">
              <span className="inline-block w-2 h-2 rounded-full bg-teal-600 mr-2 flex-shrink-0"></span>
              Advocacy • Upliftment • Inter-Agency Synergy
            </div>
          </div>

        </div>

        {/* Guiding Philosophy Callout with Official GNAI Insignia */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-900 via-brand-800 to-teal-900 text-white p-6 sm:p-10 lg:p-12 shadow-xl mb-10 sm:mb-16">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left">
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-white/10 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 border border-white/15 backdrop-blur-md flex items-center justify-center shadow-2xl">
              <img src="/logo-emblem.png" alt="GNAI Official Insignia" className="w-full h-full object-contain drop-shadow-xl" />
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2">
                <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                  Founder's Guiding Creed
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-teal-300">
                  Let's Unite • Give Love • Heal the World • Restore Humanity
                </span>
              </div>
              
              <blockquote className="text-base sm:text-2xl lg:text-3xl font-serif italic font-medium leading-snug text-white">
                "{organizationInfo.quote.text}"
              </blockquote>
              
              <div className="pt-1">
                <p className="text-xs sm:text-base font-semibold text-teal-200">{organizationInfo.quote.author}</p>
                <p className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider">{organizationInfo.quote.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Tenets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200/80 shadow-sm hover:border-teal-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
