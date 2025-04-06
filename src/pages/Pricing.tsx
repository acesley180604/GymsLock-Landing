import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import EarlyAccessPopup from "@/components/EarlyAccessPopup";
import { useLanguage } from "@/context/LanguageContext";

const PricingPage = () => {
  const { t } = useLanguage();
  
  const features = [
    t("feature1"),
    t("feature2"),
    t("feature3"),
    t("feature4"),
    t("feature5"),
    t("feature6"),
    t("feature7"),
    t("feature8"),
    t("feature9"),
    t("feature10"),
    t("feature11"),
    t("feature12")
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
              {t("pricingTitle")}
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              {t("pricingSubtitle")}
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
                <h2 className="text-3xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">{t("premiumPlan")}</h2>
                <div className="flex items-baseline mb-6">
                  <span className="text-6xl font-bold gradient-text">$29</span>
                  <span className="text-xl text-white/60 ml-2">{t("perYear")}</span>
                </div>
                <p className="text-white/60 mb-8 group-hover:text-white/80 transition-colors duration-300">
                  {t("planDescription")}
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
                {t("freeTrial")}
              </p>
              <p className="mt-2 group hover:text-white/80 transition-colors duration-300 cursor-default">
                {t("moneyBack")}
              </p>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t("faq")}</h2>
            <div className="max-w-3xl mx-auto mt-8 grid gap-6">
              <Card className="p-6 glass-effect group hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">{t("faqQuestion1")}</h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">{t("faqAnswer1")}</p>
              </Card>
              <Card className="p-6 glass-effect group hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">{t("faqQuestion2")}</h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">{t("faqAnswer2")}</p>
              </Card>
              <Card className="p-6 glass-effect group hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">{t("faqQuestion3")}</h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">{t("faqAnswer3")}</p>
              </Card>
              <Card className="p-6 glass-effect group hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">{t("faqQuestion4")}</h3>
                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">{t("faqAnswer4")}</p>
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