
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-hireos-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text">NexusHR</h3>
            <p className="text-white/60 text-sm mt-1">
              Built for the Future of Hiring — Automated, Intelligent, End-to-End.
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-white/80 hover:text-hireos-teal transition-colors">
              About the Project
            </a>
            <a href="#" className="text-white/80 hover:text-hireos-teal transition-colors">
              Roadmap
            </a>
            <a href="mailto:contact@ai-hireos.com" className="text-white/80 hover:text-hireos-teal transition-colors">
              Contact
            </a>
          </div>

          <div className="w-full max-w-md h-px bg-white/10 mb-8"></div>

          <div className="text-center">
            <p className="text-white/60 text-sm mb-2">
            </p>
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} NexuxHR. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
