import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Download, Timer, Scan, LineChart, Zap, Smartphone } from "lucide-react";
import EarlyAccessPopup from "@/components/EarlyAccessPopup";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Download className="w-8 h-8 text-white" />,
      title: "Download & Setup",
      description: "Download GymLocks from your app store and complete a simple setup process. Connect your accounts, set your fitness goals, and customize your screen time preferences."
    },
    {
      icon: <Timer className="w-8 h-8 text-white" />,
      title: "Set Your Limits",
      description: "Choose daily screen time limits for different apps and overall usage. Our AI assistant will help recommend healthy limits based on your usage patterns and goals."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Get Notified",
      description: "Receive smart notifications when you're approaching your limits. GymLocks will gently remind you to take breaks and suggest physical activities."
    },
    {
      icon: <Scan className="w-8 h-8 text-white" />,
      title: "Visit The Gym",
      description: "When you visit a participating gym, open GymLocks and scan the QR codes on equipment. Each successful scan verifies your workout and adds bonus screen time to your allowance."
    },
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: "Track Progress",
      description: "Monitor your improvement over time with detailed analytics. See how your screen time has decreased while your gym attendance has increased."
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Earn Rewards",
      description: "Unlock achievements and earn digital rewards as you improve your screen-gym balance. Share your progress with friends for additional motivation."
    }
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
              How <span className="gradient-text">GymLocks</span> Works
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Our simple yet powerful system helps you balance your digital life with physical activity through a rewarding feedback loop.
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-accent/10 hidden md:block"></div>
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`md:flex items-center gap-16 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    {/* Step number */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full glass-effect flex items-center justify-center z-10 text-white font-bold text-xl hidden md:flex glow">
                      {index + 1}
                    </div>
                    
                    {/* Step content */}
                    <Card className={`p-6 glass-effect hover-lift w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} group relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-2 text-white group-hover:gradient-text transition-all duration-300">{step.title}</h3>
                          <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
              Join thousands of users who've transformed their relationship with technology and fitness using GymLocks.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks; 