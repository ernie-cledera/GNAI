import React, { useState } from 'react';
import { Hospital, MapPin, Search, Building2, UserCheck, HeartHandshake } from 'lucide-react';
import { ambassadors } from '../data/organizationData';

export default function Ambassadors({ onOpenVolunteer }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAmbassadors = ambassadors.filter(amb => 
    amb.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    amb.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
    amb.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="ambassadors" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Healthcare Alliances
          </span>
          <h2 className="mt-2.5 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nevada Hospital & Regional Ambassadors
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600">
            GNAI bridges Nevada's premier medical centers with humanitarian relief. Our dedicated ambassadors represent partner hospitals, mobilizing nurse volunteers, medical resources, and community linkage.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-md mx-auto mb-8 sm:mb-10">
          <div className="relative">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 top-3.5 sm:top-3.5" />
            <input
              type="text"
              placeholder="Search by ambassador, hospital, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm"
            />
          </div>
        </div>

        {/* Ambassadors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {filteredAmbassadors.map((amb, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 flex-shrink-0">
                    <Hospital className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 flex items-center">
                    <MapPin className="w-3 h-3 mr-1 text-teal-500" />
                    {amb.region}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {amb.name}
                </h3>
                
                <p className="text-xs sm:text-sm font-semibold text-brand-700 mt-1 flex items-start sm:items-center">
                  <Building2 className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 text-slate-400 mt-0.5 sm:mt-0" />
                  <span>{amb.hospital}</span>
                </p>

                <div className="mt-3.5 pt-3 border-t border-slate-100">
                  <span className="inline-block text-[11px] sm:text-xs font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                    {amb.badge}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
                <span className="flex items-center text-teal-600 font-medium">
                  <UserCheck className="w-3.5 h-3.5 mr-1" />
                  Community Liaison
                </span>
                <span>Active Partner</span>
              </div>
            </div>
          ))}
        </div>

        {filteredAmbassadors.length === 0 && (
          <div className="text-center py-8 bg-white rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-500 text-xs sm:text-sm">No ambassadors found matching "{searchTerm}".</p>
          </div>
        )}

        {/* Partner Hospital Invitation Callout */}
        <div className="bg-gradient-to-r from-brand-900 to-teal-900 rounded-2xl p-5 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1.5 sm:space-y-2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start">
              <HeartHandshake className="w-5 h-5 mr-2 text-amber-400 flex-shrink-0" />
              Represent Your Healthcare Facility
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              Are you a nurse, clinical supervisor, or healthcare administrator in Nevada or abroad? Join our Ambassador Network to link your institution with humanitarian medical missions.
            </p>
          </div>
          <button
            onClick={onOpenVolunteer}
            className="w-full sm:w-auto flex-shrink-0 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-md text-center"
          >
            Become a Hospital Ambassador
          </button>
        </div>

      </div>
    </section>
  );
}
