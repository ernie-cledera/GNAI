import React from 'react';
import { Calendar, CheckCircle, Flag, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import { timelineMilestones } from '../data/organizationData';

export default function Timeline() {
  return (
    <section id="timeline" className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-teal-300 bg-teal-900/60 px-3 py-1 rounded-full border border-teal-700/60">
            Our Journey & Growth
          </span>
          <h2 className="mt-2.5 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Global Nurses Alliance Was Built
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-300">
            From a pandemic frontline epiphany in 2020 to an active 501(c)(3) humanitarian alliance with hospital ambassadors across Nevada and sustained missions overseas.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-slate-700 ml-3.5 sm:ml-32 md:ml-40 space-y-8 sm:space-y-12">
          {timelineMilestones.map((item, index) => {
            const isLatest = index === timelineMilestones.length - 1;
            const isFirst = index === 0;

            return (
              <div key={index} className="relative pl-6 sm:pl-10 group">
                
                {/* Year Pill: On mobile, shown right inside content card or above; On tablet/desktop, shown on the left */}
                <div className="sm:absolute sm:-left-36 sm:top-0 text-left sm:text-right sm:w-28 mb-2 sm:mb-0">
                  <span className={`inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider ${
                    isLatest
                      ? 'bg-amber-400 text-slate-950 font-extrabold'
                      : isFirst
                      ? 'bg-teal-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-teal-300 border border-slate-700'
                  }`}>
                    {item.year}
                  </span>
                </div>

                {/* Timeline Bullet Node */}
                <div className={`absolute -left-[18px] top-1 sm:top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 sm:border-4 flex items-center justify-center transition-transform group-hover:scale-110 ${
                  isLatest
                    ? 'border-amber-400 bg-slate-950 text-amber-400'
                    : 'border-teal-500 bg-slate-900 text-teal-400'
                }`}>
                  {isLatest ? (
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  ) : isFirst ? (
                    <Flag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  ) : (
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  )}
                </div>

                {/* Content Box */}
                <div className="bg-slate-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/80 hover:border-teal-500/50 transition-colors shadow-lg">
                  <h3 className="text-base sm:text-xl font-bold text-white flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-slate-300 text-xs sm:text-base leading-relaxed">
                    {item.summary}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Timeline Bottom Summary Banner */}
        <div className="mt-10 sm:mt-16 bg-gradient-to-r from-teal-900/60 to-brand-900/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-teal-700/40 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-teal-200">
            <strong>Continuing the mission:</strong> Every new hospital partner, nurse volunteer, and donor helps write the next chapter of compassionate healthcare.
          </p>
        </div>

      </div>
    </section>
  );
}
