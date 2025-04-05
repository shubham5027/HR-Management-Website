
import React from "react";
import { FileText, Search, Award, Video, UserCheck } from "lucide-react";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, step }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-4">
      <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-hireos-purple to-hireos-teal text-white">
        {icon}
      </div>
      <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white flex items-center justify-center text-xs font-bold text-hireos-purple border border-hireos-purple/20">
        {step}
      </div>
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">How It Works</h2>
        <p className="subtitle mx-auto">
          A simple, five-step process that revolutionizes your hiring workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
        {/* Desktop connector line */}
        <div className="hidden md:block absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-hireos-purple via-hireos-teal to-hireos-purple"></div>

        <Step
          icon={<FileText size={24} />}
          title="Post a JD"
          description="Create and publish your job description with specific requirements."
          step={1}
        />

        <Step
          icon={<Search size={24} />}
          title="System Parses"
          description="AI automatically screens and filters applicants based on your criteria."
          step={2}
        />

        <Step
          icon={<Award size={24} />}
          title="Candidates Scored"
          description="Multi-source data analysis ranks candidates by qualification."
          step={3}
        />

        <Step
          icon={<Video size={24} />}
          title="AI Interview"
          description="Automated interviews with real-time insights and analysis."
          step={4}
        />

        <Step
          icon={<UserCheck size={24} />}
          title="Auto-Onboard"
          description="Seamlessly onboard selected candidates or reject with feedback."
          step={5}
        />
      </div>
    </section>
  );
};

export default HowItWorks;
