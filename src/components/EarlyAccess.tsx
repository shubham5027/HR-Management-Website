
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { GradientButton } from "./ui/gradient-button";
import { Check, MessageSquare, CalendarClock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

const EarlyAccess: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call to join waitlist
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail("");
      toast({
        title: "You're on the list!",
        description: "Thanks for joining the waitlist. We'll be in touch soon!",
      });
    }, 1000);
  };

  return (
    <section id="early-access" className="section-container">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-hireos-blue to-hireos-purple rounded-2xl overflow-hidden shadow-lg">
        <div className="p-8 md:p-12 text-white">
          <div className="text-center mb-10">
            <h2 className="heading-md mb-4">Get Early Access</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Join our waitlist to be among the first to experience NexusHR
              and receive exclusive early adopter benefits.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-hireos-teal h-12"
                  aria-label="Email address"
                  required
                />
                {error && (
                  <Alert variant="destructive" className="mt-2 py-2 px-3 bg-white/10 border-none text-white">
                    <AlertDescription className="text-xs">{error}</AlertDescription>
                  </Alert>
                )}
              </div>
              <GradientButton 
                type="submit" 
                disabled={isSubmitting || submitted}
                className="sm:w-auto h-12 px-6"
              >
                {isSubmitting ? 
                  "Joining..." : 
                  submitted ? 
                  <span className="flex items-center gap-1"><Check size={16} /> Joined</span> : 
                  "Join Waitlist"}
              </GradientButton>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button 
              className="flex items-center justify-center gap-2 h-12 px-6 bg-white/10 hover:bg-white/20 transition-colors rounded-md border border-white/20 hover:scale-105 transform duration-200"
              onClick={() => {
                toast({
                  title: "Demo Request Submitted",
                  description: "Our team will reach out to you soon to schedule a demo.",
                });
              }}
            >
              <CalendarClock size={18} />
              Book a Demo
            </button>
            <button 
              className="flex items-center justify-center gap-2 h-12 px-6 bg-white/10 hover:bg-white/20 transition-colors rounded-md border border-white/20 hover:scale-105 transform duration-200"
              onClick={() => {
                toast({
                  title: "Chat Initiated",
                  description: "Our support team will connect with you shortly.",
                });
              }}
            >
              <MessageSquare size={18} />
              Chat with Us
            </button>
          </div>
          
          <div className="text-center mt-8 text-sm text-white/70">
            <p>Your data is encrypted and never shared. We're building with privacy-first architecture.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
