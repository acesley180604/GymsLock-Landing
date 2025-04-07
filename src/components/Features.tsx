import { Card } from "@/components/ui/card";
import { Timer, QrCode, Bell, LineChart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Features = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const features = [
    {
      title: t("smartScreenTime"),
      description: t("smartScreenTimeDesc"),
      icon: <Timer className="h-6 w-6" />,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
      image: "/images/features/screen-time.jpg",
      imageAlt: "Smart Screen Time Management",
    },
    {
      title: t("gymScanner"),
      description: t("gymScannerDesc"),
      icon: <QrCode className="h-6 w-6" />,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20",
      image: "/images/features/gym-scanner.jpg",
      imageAlt: "Gym Scanner",
    },
    {
      title: t("smartNotifications"),
      description: t("smartNotificationsDesc"),
      icon: <Bell className="h-6 w-6" />,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20",
      image: "/images/features/notifications.jpg",
      imageAlt: "Smart Notifications",
    },
    {
      title: t("progressTracking"),
      description: t("progressTrackingDesc"),
      icon: <LineChart className="h-6 w-6" />,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/20",
      image: "/images/features/progress.jpg",
      imageAlt: "Progress Tracking",
    },
  ];

  return (
    <div ref={containerRef} className="py-20 sm:py-32 px-4 sm:px-6 bg-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
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
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading section with enhanced animations */}
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
        
        {/* Features with images */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              {/* Image section */}
              <motion.div 
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
              </motion.div>
              
              {/* Content section */}
              <div className="w-full md:w-1/2">
                <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-6 border ${feature.borderColor}`}>
                  <span className={feature.color}>
                    {feature.icon}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-slate-400 mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mr-3" />
                    {t("featureBenefit1")}
                  </li>
                  <li className="flex items-center text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mr-3" />
                    {t("featureBenefit2")}
                  </li>
                  <li className="flex items-center text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mr-3" />
                    {t("featureBenefit3")}
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
