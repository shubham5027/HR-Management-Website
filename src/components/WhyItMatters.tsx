
import React from "react";
import { Clock, PieChart, Unplug } from "lucide-react";

interface PainPointCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PainPointCard: React.FC<PainPointCardProps> = ({ icon, title, description }) => (
  <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300">
    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-hireos-purple/20 to-hireos-teal/20 text-hireos-purple mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const SolutionCard: React.FC = () => (
  <div className="glass-card rounded-xl overflow-hidden">
    <div className="bg-gradient-to-r from-hireos-purple to-hireos-teal p-1 text-center text-white font-medium">
      The NexusHR Solution
    </div>
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="h-12 w-12 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-hireos-purple/20 to-hireos-teal/20 text-hireos-purple mb-3">
            <span className="font-bold">1</span>
          </div>
          <h4 className="font-semibold mb-1">Automate</h4>
          <p className="text-sm text-muted-foreground">Screening & interviews</p>
        </div>
        <div className="text-center">
          <div className="h-12 w-12 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-hireos-purple/20 to-hireos-teal/20 text-hireos-purple mb-3">
            <span className="font-bold">2</span>
          </div>
          <h4 className="font-semibold mb-1">Analyze</h4>
          <p className="text-sm text-muted-foreground">Candidates & skills</p>
        </div>
        <div className="text-center">
          <div className="h-12 w-12 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-hireos-purple/20 to-hireos-teal/20 text-hireos-purple mb-3">
            <span className="font-bold">3</span>
          </div>
          <h4 className="font-semibold mb-1">Optimize</h4>
          <p className="text-sm text-muted-foreground">Your entire workflow</p>
        </div>
      </div>
    </div>
  </div>
);

const WhyItMatters: React.FC = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">Why It Matters</h2>
        <p className="subtitle mx-auto">
          Traditional hiring processes are broken. NexusHR fixes the fundamentals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <PainPointCard
          icon={<Clock size={24} />}
          title="Manual screening wastes time"
          description="Recruiters spend 70% of their time reviewing resumes that don't match the job requirements."
        />
        <PainPointCard
          icon={<PieChart size={24} />}
          title="Interviews lack insight"
          description="Traditional interviews fail to capture candidate potential and are susceptible to bias."
        />
        <PainPointCard
          icon={<Unplug size={24} />}
          title="HR tools don't talk to each other"
          description="Teams juggle multiple disconnected tools, creating inefficiencies and data silos."
        />
      </div>

      <SolutionCard />
    </section>
  );
};

export default WhyItMatters;
