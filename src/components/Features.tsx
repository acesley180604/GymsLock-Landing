import { Card } from "@/components/ui/card";
import { Smartphone, Dumbbell, LineChart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
      title: t("smartTimeManagement"),
      description: t("smartTimeManagementDesc"),
      delay: 0.1
    },
    {
      icon: <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />,
      title: t("gymIntegration"),
      description: t("gymIntegrationDesc"),
      delay: 0.2
    },
    {
      icon: <LineChart className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />,
      title: t("progressAnalytics"),
      description: t("progressAnalyticsDesc"),
      delay: 0.3
    }
  ];

  return (
    <div className="py-20 sm:py-32 px-4 sm:px-6 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGridFeatures" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGridFeatures)" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading section with animation */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-slate-800 text-blue-400 shadow-sm border border-slate-700/50">
              {t("featuresTitle")}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6"
          >
            {t("featuresTitle")}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-slate-400"
          >
            {t("featuresSubtitle")}
          </motion.p>
        </div>
        
        {/* Features grid with Arc-style cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-slate-800/30 border border-slate-700/30 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">                
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 border border-slate-700/30">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-base text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
