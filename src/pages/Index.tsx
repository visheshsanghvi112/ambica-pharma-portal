
import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import MissionVision from "../components/MissionVision";
import GlobalReach from "../components/GlobalReach";
import Testimonials from "../components/Testimonials";
import Statistics from "../components/Statistics";
import EmergencyCall from "../components/EmergencyCall";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Statistics />
      <AboutSection />
      <MissionVision />
      <GlobalReach />
      <Testimonials />
      <EmergencyCall />
    </div>
  );
};

export default Index;
