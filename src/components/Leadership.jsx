import React from 'react';
import { Users, Shield, Award, CheckCircle } from 'lucide-react';
import { leadershipTeam, boardMembers } from '../data/organizationData';

export default function Leadership() {
  return (
    <section id="leadership" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Governance & Officers
          </span>
          <h2 className="mt-2.5 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Executive Leadership Team
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600">
            Guided by seasoned nurse clinicians, financial fiduciaries, operational specialists, and licensed healthcare directors dedicated to transparent non-profit stewardship.
          </p>
        </div>

        {/* Executive Officers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {leadershipTeam.map((officer, index) => {
            const initials = officer.name
              .split(' ')
              .map(n => n[0])
              .join('')
              .slice(0, 2);

            return (
              <div
                key={index}
                className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand-700 to-teal-600 text-white font-bold flex items-center justify-center text-xs sm:text-sm shadow-sm">
                      {initials}
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                      {officer.credentials}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {officer.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-brand-700 mt-0.5">
                    {officer.role}
                  </p>
                  {officer.subtitle && (
                    <p className="text-[11px] text-teal-600 font-medium mt-0.5">
                      {officer.subtitle}
                    </p>
                  )}
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                    {officer.focus}
                  </p>
                </div>

                <div className="mt-3.5 pt-3.5 border-t border-slate-200/60 flex items-center text-[10px] sm:text-[11px] font-medium text-slate-400">
                  <Shield className="w-3 h-3 mr-1 text-teal-500" />
                  GNAI Executive Committee
                </div>
              </div>
            );
          })}
        </div>

        {/* Board of Directors Section */}
        <div className="bg-gradient-to-br from-slate-900 to-brand-950 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-10">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
              Institutional Oversight
            </span>
            <h3 className="mt-2.5 text-xl sm:text-3xl font-extrabold text-white">
              Board of Directors
            </h3>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-slate-300">
              Providing strategic counsel, fiduciary governance, and institutional oversight to fulfill GNAI's 501(c)(3) mission.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {boardMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-[11px] sm:text-xs mb-2 border border-teal-500/30">
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{member.name}</h4>
                <p className="text-[10px] sm:text-[11px] text-teal-300 font-medium mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
