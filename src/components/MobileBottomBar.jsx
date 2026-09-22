import React from 'react';
import { Heart, Users, Mail } from 'lucide-react';

export default function MobileBottomBar({ onOpenDonate, onOpenVolunteer, isModalOpen }) {
  if (isModalOpen) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl px-3 py-2.5 safe-bottom transition-all">
      <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto">
        <button
          onClick={onOpenVolunteer}
          className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-xl font-bold text-xs text-brand-700 bg-brand-50 border border-brand-200 active:bg-brand-100 transition shadow-xs"
        >
          <Users className="w-3.5 h-3.5 mr-1.5 text-teal-600" />
          <span>Volunteer</span>
        </button>
        
        <button
          onClick={onOpenDonate}
          className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-teal-600 to-teal-500 active:from-teal-700 active:to-teal-600 transition shadow-md"
        >
          <Heart className="w-3.5 h-3.5 mr-1.5 fill-white" />
          <span>Donate Now</span>
        </button>
      </div>
    </div>
  );
}
