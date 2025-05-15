import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Users, Zap, Target } from "lucide-react";
import { Card } from "@/components/ui/card"; // Assuming Card component is available and styled

const UserBenefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Users className="w-10 h-10 text-blue-400" />,
      title: t("benefit1Title"),
      description: t("benefit1Desc"),
      color: "blue"
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-400" />,
      title: t("benefit2Title"),
      description: t("benefit2Desc"),
      color: "purple"
    },
    {
      icon: <Target className="w-10 h-10 text-green-400" />,
      title: t("benefit3Title"),
      description: t("benefit3Desc"),
      color: "green"
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            {t("userBenefitsTitle")}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className={`p-6 sm:p-8 bg-slate-800/50 backdrop-blur-md border border-slate-700/60 rounded-xl shadow-lg h-full flex flex-col items-center text-center hover:border-${benefit.color}-500/50 transition-colors duration-300`}>
                <div className={`mb-5 sm:mb-6 p-4 rounded-full bg-${benefit.color}-500/10`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserBenefits; 