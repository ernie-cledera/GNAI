import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Menu, 
  X, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ChevronRight,
  Info,
  Layers,
  History,
  Users,
  Hospital,
  HeartHandshake
} from 'lucide-react';
import { organizationInfo } from '../data/organizationData';

export default function Navbar({ onOpenDonate, onOpenVolunteer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About & Mission', href: '#about', icon: Info },
    { name: 'Focus Areas', href: '#focus-areas', icon: Layers },
    { name: 'Our Journey', href: '#timeline', icon: History },
    { name: 'Founder & Team', href: '#leadership', icon: Users },
    { name: 'Ambassadors', href: '#ambassadors', icon: Hospital },
    { name: 'Get Involved', href: '#get-involved', icon: HeartHandshake },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Non-Profit Banner */}
      <div className="bg-slate-900 text-slate-200 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1">
          <div className="flex items-center space-x-2 truncate">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full font-semibold bg-teal-900/80 text-teal-300 border border-teal-700/50 text-[10px] sm:text-xs flex-shrink-0">
              <ShieldCheck className="w-3 h-3 mr-1" /> 501(c)(3) Non-Profit
            </span>
            <span className="text-slate-400 hidden xs:inline">|</span>
            <span className="hidden xs:inline text-slate-300 truncate">
              <MapPin className="w-3 h-3 mr-1 text-teal-400 inline" /> Las Vegas, NV
            </span>
          </div>
          <div className="flex items-center space-x-2 text-right flex-shrink-0">
            <a
              href={`mailto:${organizationInfo.email}`}
              className="flex items-center text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 mr-1 text-teal-400" />
              <span className="hidden md:inline">{organizationInfo.email}</span>
              <span className="md:hidden font-medium text-teal-300">Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3' : 'bg-white py-3 sm:py-4'} transition-all duration-300 border-b border-slate-100`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center space-x-2.5 sm:space-x-3 group">
              <img src="/logo-emblem.png" alt="GNAI Official Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform group-hover:scale-105 flex-shrink-0 drop-shadow-sm" />
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors">
                    GNAI
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.2 rounded bg-brand-50 text-brand-700 border border-brand-200">
                    501(c)(3)
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-wide uppercase leading-tight">
                  Global Nurses Alliance Inc.
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Buttons (Desktop) */}
            <div className="hidden sm:flex items-center space-x-2.5">
              <button
                onClick={onOpenVolunteer}
                className="px-3.5 py-2 text-xs sm:text-sm font-medium text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-lg transition-colors border border-brand-200"
              >
                Volunteer
              </button>
              <button
                onClick={onOpenDonate}
                className="flex items-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <Heart className="w-4 h-4 mr-1.5 fill-white" />
                Donate
              </button>
            </div>

            {/* Mobile Header Controls */}
            <div className="lg:hidden flex items-center space-x-1.5">
              <button
                onClick={onOpenDonate}
                className="flex sm:hidden items-center px-3 py-1.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 active:scale-95 rounded-lg shadow-sm transition"
              >
                <Heart className="w-3 h-3 mr-1 fill-white" />
                Donate
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -mr-1 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen Overlay Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[88px] sm:top-[98px] z-50 bg-slate-950/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white h-[calc(100vh-88px)] sm:h-[calc(100vh-98px)] overflow-y-auto px-4 pt-4 pb-24 shadow-2xl flex flex-col justify-between">
              
              {/* Navigation Items List */}
              <div className="space-y-1 divide-y divide-slate-100">
                <div className="pb-2">
                  <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Explore Organization
                  </p>
                  {navLinks.map((link) => {
                    const IconComp = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={handleLinkClick}
                        className="flex items-center justify-between px-3 py-3.5 rounded-xl text-slate-800 hover:text-brand-700 hover:bg-brand-50 active:bg-brand-100 text-sm font-semibold transition"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span>{link.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </a>
                    );
                  })}
                </div>

                {/* Headquarters Info snippet inside mobile menu */}
                <div className="pt-4 px-3 space-y-2 text-xs text-slate-500">
                  <p className="font-semibold text-slate-700">Global Nurses Alliance Inc.</p>
                  <p className="flex items-start">
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>9265 West Russell Road, Suite 240, Las Vegas, NV 89148</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons at bottom of mobile menu */}
              <div className="pt-4 border-t border-slate-200 space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDonate();
                  }}
                  className="w-full flex items-center justify-center py-3.5 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-teal-500 rounded-xl shadow-md active:scale-98 transition"
                >
                  <Heart className="w-4 h-4 mr-2 fill-white" />
                  Make a Tax-Deductible Donation
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenVolunteer();
                  }}
                  className="w-full py-3 text-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-xl active:bg-brand-100 transition"
                >
                  Join as a Volunteer Nurse / Ally
                </button>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
