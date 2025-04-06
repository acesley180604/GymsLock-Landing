import { cn } from "@/lib/utils";
import { Apple, Play, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const Download = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden bg-slate-950" id="download">
      {/* Subtle background with grid pattern */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGridDownload" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGridDownload)" />
          </svg>
        </div>
        
        {/* Subtle gradient spots */}
        <div className="absolute top-20 right-[30%] w-72 h-72 rounded-full bg-blue-600/5 blur-[100px]"></div>
        <div className="absolute bottom-40 left-[20%] w-80 h-80 rounded-full bg-indigo-600/5 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-20 w-20 mx-auto mb-8 rounded-xl bg-slate-800 border border-slate-700/50 flex items-center justify-center shadow-lg"
          >
            <span className="text-2xl font-bold text-blue-400">GL</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-slate-800 text-blue-400 shadow-sm border border-slate-700/50">
              {t("download")}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4"
          >
            {t("downloadTitle")}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-slate-400"
          >
            {t("downloadDescription")}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-slate-800/60 border border-slate-700/50 px-8 py-4 text-base font-medium text-white rounded-lg flex items-center justify-center gap-3 hover:bg-slate-800/80 transition-all shadow-sm"
            >
              <Apple className="h-5 w-5 text-blue-400" />
              <span>{t("appStore")}</span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-8 py-4 text-base font-medium text-white rounded-lg flex items-center justify-center gap-3 transition-all shadow-sm"
            >
              <Play className="h-5 w-5" />
              <span>{t("playStore")}</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Download;
