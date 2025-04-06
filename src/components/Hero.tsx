import { Timer, Dumbbell, Sparkles } from "lucide-react";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex items-center px-4 sm:px-6 pt-20 sm:pt-24 relative overflow-hidden bg-slate-950">
      {/* Modern background design inspired by Arc */}
      <div className="absolute inset-0 z-0">
        {/* Primary background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
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
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Tag decoration */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-slate-800 text-blue-400 shadow-sm border border-slate-700/50">
            <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
            {t("balanceYourLife")}
          </span>
        </motion.div>
        
        {/* Main headline - Arc style */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto tracking-tight"
          >
            <span className="block">GymsLock is the new way</span>
            <span className="block">to balance digital life.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Beautifully designed app that helps you manage screen time by rewarding gym visits with bonus digital time. Create a healthier relationship with technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
        
        {/* iPhone and stats - two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 mb-32">
          {/* Left column - iPhone mockup with Arc styling */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[320px] h-[690px] mx-auto rounded-[40px] border-[14px] border-slate-800 shadow-xl overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 text-white">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-4 shadow-lg">
                  <Timer className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-white/90 text-center px-4 font-medium mb-2">
                  {t("screenTimeLimit")}
                </p>
                <p className="text-xs text-slate-400 text-center px-4 mb-6">
                  {t("visitGymUnlock")}
                </p>
                <p className="text-xs text-slate-500 text-center px-4 absolute bottom-8">
                  iPhone 16 GIF placeholder (320×690px)<br/>GIF will be added here later
                </p>
              </div>
              
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-black rounded-b-xl z-10"></div>
              
              {/* iPhone Home Indicator */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white/80 rounded-full"></div>
            </div>
            
            {/* Device Highlight Effect */}
            <div className="absolute -bottom-10 w-[260px] h-[20px] bg-blue-500/20 blur-[60px] z-0"></div>
            
            {/* Lock Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="w-24 h-24 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/30 flex items-center justify-center shadow-2xl"
              >
                <svg className="w-12 h-12 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column - Stats with icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white">{t("whatUsersAchieve")}</h3>
            
            <motion.div 
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
              className="bg-slate-800/40 p-5 rounded-xl flex items-start space-x-4 border border-slate-700/30 shadow-sm"
            >
              <div className="rounded-full p-3 bg-blue-500/10 text-blue-400">
                <Timer className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-white mb-1">80% {t("reducedScreenTime")}</div>
                <p className="text-slate-400">{t("screenTimeDescription")}</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
              className="bg-slate-800/40 p-5 rounded-xl flex items-start space-x-4 border border-slate-700/30 shadow-sm"
            >
              <div className="rounded-full p-3 bg-indigo-500/10 text-indigo-400">
                <Dumbbell className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-white mb-1">85% {t("moreGymVisits")}</div>
                <p className="text-slate-400">{t("gymVisitsDescription")}</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
              className="bg-slate-800/40 p-5 rounded-xl flex items-start space-x-4 border border-slate-700/30 shadow-sm"
            >
              <div className="rounded-full p-3 bg-purple-500/10 text-purple-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-white mb-1">4.8 {t("appRating")}</div>
                <p className="text-slate-400">{t("appRatingDescription")}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
