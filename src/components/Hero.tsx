
// import React from "react";
// import { GradientButton } from "./ui/gradient-button";

// const Hero: React.FC = () => {
//   return (
//     <div className="relative overflow-hidden bg-gradient-to-br from-hireos-blue via-hireos-purple/60 to-hireos-purple min-h-screen flex items-center">
//       {/* Background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-16 -right-16 w-64 h-64 bg-hireos-teal/20 rounded-full blur-3xl" />
//         <div className="absolute top-1/3 -left-32 w-96 h-96 bg-hireos-purple/20 rounded-full blur-3xl" />
//       </div>

//       {/* Content */}
//       <div className="section-container relative z-10 text-white">
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
//           <div className="lg:col-span-3 space-y-6">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
//               <span className="h-2 w-2 rounded-full bg-hireos-teal animate-pulse" />
//               <span className="text-sm font-medium">Now in Early Access</span>
//             </div>

//             <h1 className="heading-xl">
//               Say Hello to the{" "}
//               <span className="text-hireos-teal">Future of Hiring</span>
//             </h1>
            
//             <p className="subtitle text-white/80 md:text-xl lg:text-2xl">
//               Automate interviews, analyze candidates, and manage talent with 
//               AI-first precision. The complete platform for modern recruitment.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 mt-8">
//               <GradientButton size="lg">
//                 Join the Early Access Waitlist
//               </GradientButton>
//               <button className="inline-flex items-center justify-center h-11 px-6 font-medium text-white bg-white/10 rounded-md hover:bg-white/20 transition-colors border border-white/20">
//                 Learn more
//               </button>
//             </div>
//           </div>

//           {/* Hero illustration */}
//           <div className="lg:col-span-2 relative">
//             <div className="relative w-full aspect-square max-w-md mx-auto">
//               <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden p-6 flex flex-col animate-float">
//                 <div className="h-4 w-32 bg-white/20 rounded-full mb-4"></div>
//                 <div className="h-20 w-full bg-white/10 rounded-xl mb-4"></div>
//                 <div className="flex gap-3 mb-4">
//                   <div className="h-12 w-12 bg-hireos-teal/30 rounded-lg"></div>
//                   <div className="h-12 flex-1 bg-white/10 rounded-lg"></div>
//                 </div>
//                 <div className="flex-1 bg-gradient-to-br from-white/5 to-white/10 rounded-xl"></div>
//                 <div className="absolute bottom-6 right-6 h-10 w-24 bg-gradient-to-r from-hireos-purple to-hireos-teal rounded-lg shadow-lg"></div>
                
//                 {/* Animated scanning line */}
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hireos-teal to-transparent animate-pulse-slow"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
//     </div>
//   );
// };

// export default Hero;



import React from "react";
import { GradientButton } from "./ui/gradient-button";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-hireos-blue via-hireos-purple/60 to-hireos-purple min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-hireos-teal/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-hireos-purple/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <span className="h-2 w-2 rounded-full bg-hireos-teal animate-pulse" />
              <span className="text-sm font-medium">Now in Early Access</span>
            </div> */}

            <h1 className="heading-xl">
              Say Hello to the{" "}
              <span className="text-hireos-teal">Future of Human Resource</span>
            </h1>
            
            <p className="subtitle text-white/80 md:text-xl lg:text-2xl">
              Automate interviews, analyze candidates, and manage talent with 
              AI-first precision. The complete platform for modern recruitment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <GradientButton size="lg">
        Try NexusHR
        <span className="ml-2">&#8594;</span> {/* Right arrow symbol */}
      </GradientButton>
    </div>
          </div>

          {/* Image with 20% larger size */}
          <div className="lg:col-span-2 relative">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/023/803/057/non_2x/hr-department-human-resources-management-employer-hiring-candidates-recruitment-agency-employment-headhunting-business-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg" 
              alt="Errasor.io Illustration" 
              className="w-full max-w-[120%] mx-auto rounded-2xl shadow-xl transform scale-110"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
};

export default Hero;
