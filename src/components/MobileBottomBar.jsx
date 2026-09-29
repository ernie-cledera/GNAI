import React from 'react';
import { Heart, Users, Mail } from 'lucide-react';

export default function MobileBottomBar({ onOpenDonate, onOpenVolunteer, isModalOpen }) {
  if (isModalOpen) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl px-3 py-2.5 safe-bottom transition-all">
      <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto">
        <button
          onClick={onOpenVolunteer}
          className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-xl font-bold text-xs text-brand-900 bg-blue-50 border border-blue-200 active:bg-blue-100 transition shadow-xs"
        >
          <Users className="w-3.5 h-3.5 mr-1.5 text-brand-700" />
          <span>Volunteer</span>
        </button>
        
        <button
          onClick={onOpenDonate}
          className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-xl font-extrabold text-xs text-slate-950 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 active:from-amber-400 active:to-yellow-400 transition shadow-md shadow-amber-500/25"
        >
          <Heart className="w-3.5 h-3.5 mr-1.5 fill-slate-950 text-slate-950" />
          <span>Donate Now</span>
        </button>
      </div>
    </div>
  );
}
