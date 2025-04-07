import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Download, Timer, Scan, LineChart, Zap, Smartphone } from "lucide-react";
import EarlyAccessPopup from "@/components/EarlyAccessPopup";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <EarlyAccessPopup />
      
      {/* Modern background design inspired by Arc */}
      <div className="absolute inset-0 z-0">
        {/* Primary background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGridHowItWorks" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGridHowItWorks)" />
          </svg>
        </div>
        
        {/* Accent color dots - subtle positioning */}
        <div className="absolute top-20 right-[20%] w-72 h-72 rounded-full bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute bottom-40 left-[15%] w-80 h-80 rounded-full bg-purple-600/10 blur-[100px]"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-indigo-600/10 blur-[80px]"></div>
      </div>

      {/* Subtle animated glow effects */}
      <motion.div 
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[80px]"
      ></motion.div>

      {/* Light streak accent */}
      <motion.div 
        initial={{ opacity: 0, width: "30%" }}
        animate={{ opacity: [0, 0.05, 0], width: ["30%", "70%", "30%"] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
      ></motion.div>
      
      <div className="relative z-10">
        <Navbar />
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold mb-6 text-white"
              >
                {t("howItWorksTitle")}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-slate-400 max-w-3xl mx-auto"
              >
                {t("howItWorksSubtitle")}
              </motion.p>
            </div>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-400/50 to-blue-400/10 hidden md:block"></div>
              
              <div className="space-y-16">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`md:flex items-center gap-16 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                      {/* Step number */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center z-10 text-white font-bold text-xl hidden md:flex border border-slate-700/50 shadow-lg">
                        {index + 1}
                      </div>
                      
                      {/* Step content */}
                      <Card className={`p-6 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} group relative overflow-hidden border border-slate-700/50`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-400/20">
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-all duration-300">{step.title}</h3>
                            <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{step.description}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              className="mt-24 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">{t("readyJourney")}</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                {t("transformedUsers")}
              </p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HowItWorks; 