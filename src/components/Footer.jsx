import React from 'react';
import { Heart, Mail, MapPin, ShieldCheck, Globe, ArrowUp } from 'lucide-react';
import { organizationInfo } from '../data/organizationData';

export default function Footer({ onOpenDonate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 sm:pt-16 pb-24 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Non-Profit Identity (5 Cols) */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/logo-emblem.png" alt="GNAI Official Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0 drop-shadow-md" />
              <div>
                <span className="text-lg sm:text-xl font-black tracking-tight text-white">GNAI</span>
                <p className="text-[10px] sm:text-xs font-semibold text-teal-400 tracking-wider uppercase">
                  Global Nurses Alliance Incorporated
                </p>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              A 501(c)(3) tax-exempt humanitarian non-profit organization based in Las Vegas, Nevada. Uniting the global nursing community to elevate society through medical missions, disaster relief, and health education.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-teal-900/50 text-teal-300 border border-teal-700/50">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-teal-400 flex-shrink-0" />
                501(c)(3) Public Charity • Tax-Deductible
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-teal-400 transition py-0.5 inline-block">About Our Mission</a>
              </li>
              <li>
                <a href="#focus-areas" className="hover:text-teal-400 transition py-0.5 inline-block">Programs & Focus Areas</a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-teal-400 transition py-0.5 inline-block">Our History & Growth</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-teal-400 transition py-0.5 inline-block">Founder & Leadership</a>
              </li>
              <li>
                <a href="#ambassadors" className="hover:text-teal-400 transition py-0.5 inline-block">Nevada Ambassadors</a>
              </li>
              <li>
                <a href="#get-involved" className="hover:text-teal-400 transition py-0.5 inline-block">Volunteer Opportunities</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Contact & Headquarters (4 Cols) */}
          <div className="lg:col-span-4 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Official Headquarters
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>{organizationInfo.address.full}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href={`mailto:${organizationInfo.email}`} className="hover:text-teal-300 transition break-all">
                  {organizationInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>{organizationInfo.website}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDonate}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 active:scale-98 rounded-lg transition"
              >
                <Heart className="w-3.5 h-3.5 mr-1.5 fill-slate-950" />
                Support Medical Missions
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-500">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} Global Nurses Alliance Incorporated (GNAI). All rights reserved.</p>
            <p className="text-[10px] sm:text-[11px] text-slate-600 mt-0.5">
              Registered non-profit in Nevada • Recognized 501(c)(3) tax-exempt charity.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 active:bg-slate-700 transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
