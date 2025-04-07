import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Check, Sparkles, Percent } from "lucide-react";
import EarlyAccessPopup from "@/components/EarlyAccessPopup";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

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

  // Monthly plan metrics
  const monthlyTotalSlots = 50;
  const monthlyFilledSlots = 34;
  const monthlyRemainingSlots = monthlyTotalSlots - monthlyFilledSlots;
  const monthlyProgressPercentage = (monthlyFilledSlots / monthlyTotalSlots) * 100;
  
  // Yearly plan metrics
  const yearlyTotalSlots = 100;
  const yearlyFilledSlots = 57;
  const yearlyRemainingSlots = yearlyTotalSlots - yearlyFilledSlots;
  const yearlyProgressPercentage = (yearlyFilledSlots / yearlyTotalSlots) * 100;
  
  // Monthly plan pricing
  const monthlyOriginalPrice = 12.9;
  const monthlyEarlyAccessPrice = 3.5;
  const monthlyDiscountPercentage = Math.round(((monthlyOriginalPrice - monthlyEarlyAccessPrice) / monthlyOriginalPrice) * 100);
  
  // Yearly plan pricing
  const yearlyOriginalPrice = 129;
  const yearlyEarlyAccessPrice = 34.9;
  const yearlyDiscountPercentage = Math.round(((yearlyOriginalPrice - yearlyEarlyAccessPrice) / yearlyOriginalPrice) * 100);

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
              <pattern id="smallGridPricing" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGridPricing)" />
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
                {t("pricingTitle")}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-slate-400 max-w-3xl mx-auto"
              >
                {t("pricingSubtitle")}
              </motion.p>
            </div>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Monthly Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="p-8 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 relative overflow-hidden group border border-slate-700/50 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Sparkle decorations */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-br-full"></div>
                  <div className="absolute top-4 left-4">
                    <Sparkles className="w-6 h-6 text-yellow-400/80" />
                  </div>
                  
                  {/* Early access badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-400/20">
                      <Percent className="w-3 h-3 mr-1" />
                      {monthlyDiscountPercentage}% OFF
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-all duration-300">Monthly Plan</h2>
                    
                    {/* Pricing display */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="flex items-baseline">
                        <span className="text-6xl font-bold text-blue-400">${monthlyEarlyAccessPrice}</span>
                        <span className="text-xl text-slate-400 ml-2">{t("perMonth")}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <span className="text-lg text-slate-500 line-through">${monthlyOriginalPrice}</span>
                        <span className="text-sm text-green-400 ml-2">Early Access Price</span>
                      </div>
                    </div>
                    
                    {/* Early access progress bar */}
                    <div className="w-full mb-6">
                      <div className="flex justify-between text-sm text-slate-400 mb-2">
                        <span>Early Access Slots</span>
                        <span>{monthlyFilledSlots}/{monthlyTotalSlots} filled</span>
                      </div>
                      <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                          initial={{ width: 0 }}
                          animate={{ width: `${monthlyProgressPercentage}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 text-right">
                        {monthlyRemainingSlots} slots remaining
                      </p>
                    </div>
                    
                    <p className="text-slate-400 mb-8 group-hover:text-slate-300 transition-colors duration-300">
                      {t("planDescription")}
                    </p>
                    
                    <div className="w-full border-t border-slate-700/50 pt-6 mb-8"></div>
                    
                    <div className="text-left w-full space-y-4 mb-8">
                      {features.map((feature, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center group/item"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300 border border-blue-400/20">
                            <Check className="w-4 h-4 text-blue-400" />
                          </div>
                          <span className="text-slate-300 group-hover/item:text-white transition-colors duration-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20">
                      Get Early Access
                    </button>
                  </div>
                </Card>
              </motion.div>
              
              {/* Yearly Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Card className="p-8 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 relative overflow-hidden group border border-slate-700/50 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Sparkle decorations */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-br-full"></div>
                  <div className="absolute top-4 left-4">
                    <Sparkles className="w-6 h-6 text-yellow-400/80" />
                  </div>
                  
                  {/* Early access badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-400/20">
                      <Percent className="w-3 h-3 mr-1" />
                      {yearlyDiscountPercentage}% OFF
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-all duration-300">{t("premiumPlan")}</h2>
                    
                    {/* Pricing display */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="flex items-baseline">
                        <span className="text-6xl font-bold text-blue-400">${yearlyEarlyAccessPrice}</span>
                        <span className="text-xl text-slate-400 ml-2">{t("perYear")}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <span className="text-lg text-slate-500 line-through">${yearlyOriginalPrice}</span>
                        <span className="text-sm text-green-400 ml-2">Early Access Price</span>
                      </div>
                    </div>
                    
                    {/* Early access progress bar */}
                    <div className="w-full mb-6">
                      <div className="flex justify-between text-sm text-slate-400 mb-2">
                        <span>Early Access Slots</span>
                        <span>{yearlyFilledSlots}/{yearlyTotalSlots} filled</span>
                      </div>
                      <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                          initial={{ width: 0 }}
                          animate={{ width: `${yearlyProgressPercentage}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 text-right">
                        {yearlyRemainingSlots} slots remaining
                      </p>
                    </div>
                    
                    <p className="text-slate-400 mb-8 group-hover:text-slate-300 transition-colors duration-300">
                      {t("planDescription")}
                    </p>
                    
                    <div className="w-full border-t border-slate-700/50 pt-6 mb-8"></div>
                    
                    <div className="text-left w-full space-y-4 mb-8">
                      {features.map((feature, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center group/item"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300 border border-blue-400/20">
                            <Check className="w-4 h-4 text-blue-400" />
                          </div>
                          <span className="text-slate-300 group-hover/item:text-white transition-colors duration-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20">
                      Get Early Access
                    </button>
                  </div>
                </Card>
              </motion.div>
            </div>
              
            <motion.div 
              className="mt-12 text-center text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="group hover:text-slate-300 transition-colors duration-300 cursor-default">
                {t("freeTrial")}
              </p>
              <p className="mt-2 group hover:text-slate-300 transition-colors duration-300 cursor-default">
                {t("moneyBack")}
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">{t("faq")}</h2>
              <div className="max-w-3xl mx-auto mt-8 grid gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group border border-slate-700/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-all duration-300">{t("faqQuestion1")}</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{t("faqAnswer1")}</p>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group border border-slate-700/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-all duration-300">{t("faqQuestion2")}</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{t("faqAnswer2")}</p>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group border border-slate-700/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-all duration-300">{t("faqQuestion3")}</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{t("faqAnswer3")}</p>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group border border-slate-700/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-all duration-300">{t("faqQuestion4")}</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{t("faqAnswer4")}</p>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PricingPage; 