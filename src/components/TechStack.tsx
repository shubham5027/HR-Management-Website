import React from "react";

const TechStack: React.FC = () => {
  return (
    <section className="bg-hireos-blue text-white py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Behind the Scenes</h2>
          <p className="subtitle mx-auto text-white/80">
          </p>
        </div>

        <div className="glass-card backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Powered by:</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-white/10 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8" viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear)"/>
                  <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear)" fillOpacity="0.2"/>
                  <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.04075L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#249361"/>
                      <stop offset="1" stopColor="#3ECF8E"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="106.386" gradientUnits="userSpaceOnUse">
                      <stop/>
                      <stop offset="1" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-sm font-medium">Supabase</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-white/10 rounded-xl flex items-center justify-center mb-3">
                <div className="flex gap-1">
                  <div className="h-3 w-3 rounded-full bg-hireos-teal"></div>
                  <div className="h-3 w-3 rounded-full bg-white/80"></div>
                </div>
              </div>
              <span className="text-sm font-medium">GitHub/LinkedIn API</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-white/10 rounded-xl flex items-center justify-center mb-3">
                <div className="text-2xl font-bold gradient-text">N</div>
              </div>
              <span className="text-sm font-medium">Next.js</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 bg-white/10 rounded-xl flex items-center justify-center mb-3">
                <div className="h-8 w-8 bg-gradient-to-br from-hireos-purple to-hireos-teal rounded-full"></div>
              </div>
              <span className="text-sm font-medium">Firebase</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="h-2 w-2 rounded-full bg-hireos-teal"></div>
            <span className="text-sm">Your data is encrypted and never shared. We're building with privacy-first architecture.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
