
import React from "react";
import { GradientButton } from "./ui/gradient-button";
import { Brain, Github, Linkedin, FileText, BarChart4, Workflow } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-center gap-4 mb-4">
      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-hireos-purple/20 to-hireos-teal/20 text-hireos-purple">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="bg-hireos-gray py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Platform Features</h2>
          <p className="subtitle mx-auto">
            Powerful AI-driven tools that transform your hiring process end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain size={20} />}
            title="AI Interview System"
            description="Video, audio, sentiment analysis, and cheating detection for comprehensive candidate assessment."
          />
          <FeatureCard
            icon={<div className="flex items-center gap-1"><Github size={16} /><Linkedin size={16} /><FileText size={16} /></div>}
            title="Multi-Source Analysis"
            description="Analyze GitHub, LinkedIn, and resumes to match candidates with job requirements accurately."
          />
          <FeatureCard
            icon={<BarChart4 size={20} />}
            title="Candidate Scoring & Ranking"
            description="Objective ranking algorithms to highlight the most qualified candidates for your roles."
          />
          <FeatureCard
            icon={<Workflow size={20} />}
            title="Workflow Automation"
            description="Seamless automation from onboarding to payroll and performance appraisals."
          />
          <FeatureCard
            icon={<BarChart4 size={20} />}
            title="Visual Hiring Pipeline"
            description="Interactive dashboards to track candidates through every stage of the recruitment process."
          />
          <div className="glass-card rounded-xl p-6 flex flex-col justify-between bg-gradient-to-br from-hireos-purple/10 to-hireos-teal/10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Ready to transform your hiring?</h3>
              <p className="text-muted-foreground mb-6">
                Join the waitlist for early access to all features and priority onboarding.
              </p>
            </div>
            <GradientButton className="w-full">Join Waitlist</GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
