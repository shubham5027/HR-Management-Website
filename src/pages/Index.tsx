
import React from "react";
import Hero from "@/components/Hero";
import WhyItMatters from "@/components/WhyItMatters";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <WhyItMatters />
      <Features />
      <HowItWorks />
      <TechStack />
      <EarlyAccess />
      <Footer />
    </div>
  );
};

export default Index;
