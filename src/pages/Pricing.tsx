import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import EarlyAccessPopup from "@/components/EarlyAccessPopup";

const PricingPage = () => {
  const features = [
    "Unlimited screen time tracking",
    "Gym equipment QR code scanning",
    "Personalized screen time limits",
    "Smart notifications",
    "Progress analytics and reports",
    "Workout suggestions",
    "Eye health protection",
    "Focus mode",
    "App blocking capabilities",
    "Balance score calculations",
    "Priority customer support",
    "Regular feature updates"
  ];

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <EarlyAccessPopup />
      {/* Decorative orbs */}
      <div className="orb w-[600px] h-[600px] bg-purple-500/20 -top-40 -left-40"></div>
      <div className="orb w-[500px] h-[500px] bg-blue-500/20 bottom-0 -right-40"></div>
      <div className="orb w-[400px] h-[400px] bg-emerald-500/20 top-1/2 left-1/4"></div>
      
      <Navbar />
      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              One affordable plan with everything you need to balance your digital and physical wellbeing.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <Card className="p-8 glass-effect border border-accent/20 hover-lift relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Sparkle decorations */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-br-full"></div>
              <div className="absolute top-4 left-4">
                <Sparkles className="w-6 h-6 text-yellow-400/80" />
              </div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                <h2 className="text-3xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">Premium Plan</h2>
                <div className="flex items-baseline mb-6">
                  <span className="text-6xl font-bold gradient-text">$29</span>
                  <span className="text-xl text-white/60 ml-2">/ year</span>
                </div>
                <p className="text-white/60 mb-8 group-hover:text-white/80 transition-colors duration-300">
                  All the tools you need to transform your habits and balance your digital and physical wellbeing.
                </p>
                
                <div className="w-full border-t border-accent/10 pt-6 mb-8"></div>
                
                <div className="text-left w-full space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center group/item">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/80 group-hover/item:text-white transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            
            <div className="mt-12 text-center text-white/60">
              <p className="group hover:text-white/80 transition-colors duration-300 cursor-default">
                All plans come with a 14-day free trial. No credit card required.
              </p>
              <p className="mt-2 group hover:text-white/80 transition-colors duration-300 cursor-default">
                100% satisfaction guarantee or your money back within 30 days.
              </p>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto mt-8 grid gap-6">
              <Card className="p-6 glass-effect group hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">Can I cancel my subscription?</h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.</p>
              </Card>
              <Card className="p-6 glass-effect group hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">Are there any hidden fees?</h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">No, the $29 per year is all you pay. There are no additional fees or in-app purchases required to access all features.</p>
              </Card>
              <Card className="p-6 glass-effect group hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">Which gyms are compatible with the QR scanning?</h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">We're expanding our network weekly. Currently, we support most major gym chains and thousands of independent fitness centers. Check our gym finder in the app.</p>
              </Card>
              <Card className="p-6 glass-effect group hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">Can I use GymLocks on multiple devices?</h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">Yes, your subscription allows you to use GymLocks on up to 3 devices simultaneously with the same account.</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage; 