import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import FocusAreas from './components/FocusAreas';
import Timeline from './components/Timeline';
import FounderSpotlight from './components/FounderSpotlight';
import Leadership from './components/Leadership';
import Ambassadors from './components/Ambassadors';
import DonationSection from './components/DonationSection';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';
import VolunteerModal from './components/VolunteerModal';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [donationInitialData, setDonationInitialData] = useState({
    amount: 100,
    isMonthly: false,
    designation: 'Medical Missions & Prescriptions'
  });

  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);

  const handleOpenDonate = (data) => {
    if (data && typeof data === 'object' && 'amount' in data) {
      setDonationInitialData(data);
    } else {
      setDonationInitialData({
        amount: 100,
        isMonthly: false,
        designation: 'Medical Missions & Prescriptions'
      });
    }
    setDonateModalOpen(true);
  };

  const handleOpenVolunteer = () => {
    setVolunteerModalOpen(true);
  };

  const isAnyModalOpen = donateModalOpen || volunteerModalOpen;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Navigation */}
      <Navbar
        onOpenDonate={() => handleOpenDonate()}
        onOpenVolunteer={handleOpenVolunteer}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onOpenDonate={() => handleOpenDonate()}
          onOpenVolunteer={handleOpenVolunteer}
        />
        
        <MissionVision />

        <FocusAreas
          onOpenDonate={() => handleOpenDonate()}
          onOpenVolunteer={handleOpenVolunteer}
        />

        <Timeline />

        <FounderSpotlight />

        <Leadership />

        <Ambassadors
          onOpenVolunteer={handleOpenVolunteer}
        />

        <DonationSection
          onOpenDonateModal={handleOpenDonate}
        />

        <GetInvolved />
      </main>

      {/* Footer */}
      <Footer
        onOpenDonate={() => handleOpenDonate()}
      />

      {/* Floating Sticky Mobile Quick Action Bar */}
      <MobileBottomBar
        onOpenDonate={() => handleOpenDonate()}
        onOpenVolunteer={handleOpenVolunteer}
        isModalOpen={isAnyModalOpen}
      />

      {/* Interactive Modals */}
      <DonationModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        initialData={donationInitialData}
      />

      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
      />
    </div>
  );
}
