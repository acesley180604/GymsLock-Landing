import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const EarlyAccessPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const progressPercentage = 76;

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      // Only show if not previously dismissed
      const hasSeenPopup = localStorage.getItem("hasSeenEarlyAccessPopup");
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenEarlyAccessPopup", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md transform transition-all">
        <div className="relative bg-background rounded-lg shadow-xl p-6 glass-effect border border-accent/20">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] via-[#b249f8] via-[#00DDEB] to-[#0A1F3C]">
              {t("earlyAccessTitle")}
            </h3>
            <p className="text-white/60 mt-2">
              {t("earlyAccessDesc")}
            </p>
          </div>

          <form 
            action="https://submit-form.com/gorFfKm9y" 
            method="POST" 
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
              const form = e.target as HTMLFormElement;
              form.submit();
              handleClose();
            }}
          >
            <div>
              <Input
                type="email"
                name="email"
                placeholder={t("emailPlaceholder")}
                required
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] text-white hover:opacity-90 transition-opacity"
            >
              {t("joinWaitlist")}
            </Button>
          </form>

          {/* Development Progress Bar */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-white/80">{t("developmentProgress")}</span>
              <span className="text-sm font-medium text-white/80">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[#FF1CF7] via-[#b249f8] to-[#00DDEB]"
              ></motion.div>
            </div>
            <p className="text-white/60 text-sm mt-2">
              {t("progressMessage")}
            </p>
          </div>

          <p className="text-white/40 text-sm text-center mt-4">
            {t("privacyNote")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccessPopup; 