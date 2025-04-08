import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Check, Sparkles, Percent, Star, Zap, Shield } from "lucide-react";
import EarlyAccessPopup from "@/components/EarlyAccessPopup";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const features = [
  "Smart Screen Time Management",
  "Instant Equipment Recognition",
  "AI-Powered Progress Tracking"
];

// Monthly plan metrics
const monthlyPrice = 12.9;
const monthlyEarlyAccessPrice = 3.49;
const monthlyTotalSlots = 100;
const monthlyFilledSlots = 85;
const monthlyRemainingSlots = monthlyTotalSlots - monthlyFilledSlots;
const monthlyProgressPercentage = (monthlyFilledSlots / monthlyTotalSlots) * 100;
const monthlyPlanLink = "https://buy.stripe.com/test_5kA9BuaoE6QD7kc5kn";

// Yearly plan metrics
const yearlyPrice = 129;
const yearlyEarlyAccessPrice = 34.9;
const yearlyTotalSlots = 100;
const yearlyFilledSlots = 92;
const yearlyRemainingSlots = yearlyTotalSlots - yearlyFilledSlots;
const yearlyProgressPercentage = (yearlyFilledSlots / yearlyTotalSlots) * 100;
const yearlyPlanLink = "https://buy.stripe.com/test_5kA9BuaoE6QD7kc5kn";

const handleRedirectToPayment = (link: string) => {
  window.location.href = link;
};

const PricingPage = () => {
  const { t } = useLanguage();
  
  // Monthly plan pricing
  const monthlyDiscountPercentage = Math.round(((monthlyPrice - monthlyEarlyAccessPrice) / monthlyPrice) * 100);
  
  // Yearly plan pricing
  const yearlyDiscountPercentage = Math.round(((yearlyPrice - yearlyEarlyAccessPrice) / yearlyPrice) * 100);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <EarlyAccessPopup />
      
      {/* Modern background design */}
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
        
        {/* Accent color dots */}
        <div className="absolute top-20 right-[20%] w-72 h-72 rounded-full bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute bottom-40 left-[15%] w-80 h-80 rounded-full bg-purple-600/10 blur-[100px]"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-indigo-600/10 blur-[80px]"></div>
      </div>

      {/* Animated glow effects */}
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
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
              {/* Monthly Plan Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="relative p-8 bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-slate-700 transition-all duration-300">
                  <div className="absolute -top-3 left-8 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Monthly Plan
                  </div>
                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">${monthlyEarlyAccessPrice}</span>
                      <span className="text-slate-400">/month</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-slate-400 line-through">${monthlyPrice}</span>
                      <span className="ml-2 text-green-400">Save {monthlyDiscountPercentage}%</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Early Access Progress</span>
                      <span className="text-slate-400">{monthlyFilledSlots}/{monthlyTotalSlots} slots</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${monthlyProgressPercentage}%` }}
                      />
                    </div>
                    <p className="text-slate-400 text-sm mt-2">
                      Only {monthlyRemainingSlots} slots remaining!
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <Check className="h-5 w-5 text-green-400" />
                        <span className="text-slate-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleRedirectToPayment(monthlyPlanLink)}
                    className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Get Early Access
                  </button>
                </Card>
              </motion.div>
              
              {/* Yearly Plan Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full"
              >
                <Card className="relative p-8 bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-slate-700 transition-all duration-300">
                  <div className="absolute -top-3 left-8 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Yearly Plan
                  </div>
                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">${yearlyEarlyAccessPrice}</span>
                      <span className="text-slate-400">/year</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-slate-400 line-through">${yearlyPrice}</span>
                      <span className="ml-2 text-green-400">Save {yearlyDiscountPercentage}%</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Early Access Progress</span>
                      <span className="text-slate-400">{yearlyFilledSlots}/{yearlyTotalSlots} slots</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${yearlyProgressPercentage}%` }}
                      />
                    </div>
                    <p className="text-slate-400 text-sm mt-2">
                      Only {yearlyRemainingSlots} slots remaining!
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <Check className="h-5 w-5 text-green-400" />
                        <span className="text-slate-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleRedirectToPayment(yearlyPlanLink)}
                    className="mt-8 w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Get Early Access
                  </button>
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