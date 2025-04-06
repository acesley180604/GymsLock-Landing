import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Download, Timer, Scan, LineChart, Zap, Smartphone } from "lucide-react";
import EarlyAccessPopup from "@/components/EarlyAccessPopup";
import { useLanguage } from "@/context/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: <Download className="w-8 h-8 text-white" />,
      title: t("downloadSetup"),
      description: t("downloadSetupDesc")
    },
    {
      icon: <Timer className="w-8 h-8 text-white" />,
      title: t("setLimits"),
      description: t("setLimitsDesc")
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: t("getNotified"),
      description: t("getNotifiedDesc")
    },
    {
      icon: <Scan className="w-8 h-8 text-white" />,
      title: t("visitGym"),
      description: t("visitGymDesc")
    },
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: t("trackProgress"),
      description: t("trackProgressDesc")
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: t("earnRewards"),
      description: t("earnRewardsDesc")
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
              {t("howItWorksTitle")}
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              {t("howItWorksSubtitle")}
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
            <h2 className="text-3xl font-bold text-white mb-4">{t("readyJourney")}</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
              {t("transformedUsers")}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks; 