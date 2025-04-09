import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
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
const yearlyPlanLink = "https://buy.stripe.com/test_28o4ha0O4grd5c47sx";

const handleRedirectToPayment = (link: string) => {
  window.location.href = link;
};

const PricingPlans = () => {
  // Monthly plan pricing
  const monthlyDiscountPercentage = Math.round(((monthlyPrice - monthlyEarlyAccessPrice) / monthlyPrice) * 100);
  
  // Yearly plan pricing
  const yearlyDiscountPercentage = Math.round(((yearlyPrice - yearlyEarlyAccessPrice) / yearlyPrice) * 100);

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Monthly Plan Card - Less prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Card className="relative p-8 bg-slate-900/30 backdrop-blur-sm border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 shadow-lg shadow-slate-950/50">
              <div className="absolute -top-3 left-8 bg-slate-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                Monthly Plan
              </div>
              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white/80">${monthlyEarlyAccessPrice}</span>
                  <span className="text-slate-500">/month</span>
                </div>
                <div className="mt-2">
                  <span className="text-slate-500 line-through">${monthlyPrice}</span>
                  <span className="ml-2 text-green-400/80">Save {monthlyDiscountPercentage}%</span>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">Early Access Progress</span>
                  <span className="text-slate-500">{monthlyFilledSlots}/{monthlyTotalSlots} slots</span>
                </div>
                <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500/50 rounded-full transition-all duration-500"
                    style={{ width: `${monthlyProgressPercentage}%` }}
                  />
                </div>
                <p className="text-slate-500 text-sm mt-2">
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
                    <Check className="h-5 w-5 text-green-400/70" />
                    <span className="text-slate-400">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => handleRedirectToPayment(monthlyPlanLink)}
                className="mt-8 w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Get Early Access
              </button>
            </Card>
          </motion.div>
          
          {/* Yearly Plan Card - Emphasized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <Card className="relative p-8 bg-slate-900/50 backdrop-blur-sm border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 shadow-xl shadow-purple-500/10 scale-105 z-10">
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
      </div>
    </div>
  );
};

export default PricingPlans; 