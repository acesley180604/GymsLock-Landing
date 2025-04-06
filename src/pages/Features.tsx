import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Smartphone, Dumbbell, LineChart } from "lucide-react";
import EarlyAccessPopup from "@/components/EarlyAccessPopup";
import { useLanguage } from "@/context/LanguageContext";

const FeaturesPage = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: t("smartTimeManagement"),
      description: t("smartTimeManagementDesc"),
      gradient: "from-pink-500 to-purple-600",
      animation: "animate-float"
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-white" />,
      title: t("gymIntegration"),
      description: t("gymIntegrationDesc"),
      gradient: "from-blue-500 to-cyan-400",
      animation: "animate-float animation-delay-400"
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: t("progressAnalytics"),
      description: t("progressAnalyticsDesc"),
      gradient: "from-green-400 to-emerald-500",
      animation: "animate-float animation-delay-800"
    }
  ];

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <EarlyAccessPopup />
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
      
      <Navbar />
      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading section with animation */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] via-[#b249f8] via-[#00DDEB] to-[#00F0FF] leading-tight mb-6">
              {t("featuresTitle")}
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              {t("featuresSubtitle")}
            </p>
          </div>
          
          {/* Features grid with beautiful cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`p-8 sm:p-10 hover-lift glass-effect group transition-all duration-500 border-0 ${feature.animation} h-full overflow-hidden relative`}
              >
                {/* Gradient background that appears on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-white/70 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-3xl"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage; 