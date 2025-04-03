
import React from "react";
import HeroSection from "../components/HeroSection";
import Statistics from "../components/Statistics";
import EmergencyCall from "../components/EmergencyCall";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Statistics />
      <EmergencyCall />
    </div>
  );
};

export default Index;
