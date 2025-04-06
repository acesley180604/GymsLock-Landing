import { Github, Twitter, Instagram, Timer, Dumbbell } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-12 sm:py-20 px-4 sm:px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-4">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-white flex items-center hover:text-white/90 transition-colors">
              <Timer className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              GymsLock
            </Link>
            <p className="text-sm sm:text-base text-white/60">
              Balancing digital life with physical activity. Reduce screen time, increase gym engagement.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-white/10">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <a href="https://www.tiktok.com/@gymslock" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-white/10">
                  <svg 
                    viewBox="0 0 24 24"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.267 5.104 5.104 0 0 1-1.625-2.74h-3.14v11.954c0 1.025-.386 1.962-1.025 2.676a3.523 3.523 0 0 1-2.676 1.024 3.523 3.523 0 0 1-2.676-1.024 3.529 3.529 0 0 1 0-5.353 3.523 3.523 0 0 1 2.676-1.023c.293 0 .573.04.84.108v-3.263a6.957 6.957 0 0 0-1.238-.107 6.796 6.796 0 0 0-4.823 2.002 6.766 6.766 0 0 0-1.996 4.811c0 1.821.707 3.535 1.996 4.811a6.799 6.799 0 0 0 4.823 2.002 6.798 6.798 0 0 0 4.817-2.002 6.765 6.765 0 0 0 1.995-4.811V9.582a8.504 8.504 0 0 0 4.483 1.267v-3.146a5.12 5.12 0 0 1-1.017-2.141z" />
                  </svg>
                </Button>
              </a>
              <a href="https://www.instagram.com/gymslock/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-white/10">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </a>
              <a href="https://www.threads.net/@gymslock" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.83 14.73c-.54.54-1.22.84-1.95.84-1.63 0-2.95-1.33-2.95-2.95 0-.73.31-1.42.84-1.95.54-.54 1.22-.84 1.95-.84 1.63 0 2.95 1.33 2.95 2.95 0 .73-.31 1.42-.84 1.95zm2.41-3.26c-.22-.18-.38-.49-.38-.84 0-.73.6-1.33 1.33-1.33v-1.64c-1.82 0-3.3 1.48-3.3 3.3 0 .84.34 1.65.94 2.25.22.22.22.57 0 .78-.21.22-.56.22-.78 0-1.66-1.66-1.66-4.37 0-6.03 1.58-1.58 4.06-1.64 5.72-.19l.37.37.61-.61-.37-.37c-1.88-1.88-4.91-2.01-6.97-.37-2.36 1.88-2.76 5.32-.89 7.69 1.88 2.36 5.32 2.76 7.69.89.22-.17.22-.51 0-.68-.18-.15-.4-.22-.63-.22h-.31c-1.01-.02-1.93-.41-2.65-1.05-.16-.14-.38-.21-.59-.21s-.42.07-.56.2z" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">{t("app")}</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link to="/features" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">{t("features")}</Link></li>
              <li><Link to="/how-it-works" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">{t("howItWorks")}</Link></li>
              <li><Link to="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">{t("gymPartners")}</Link></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">{t("download")}</a></li>
            </ul>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">{t("company")}</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">{t("aboutUs")}</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">{t("careers")}</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">{t("press")}</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">{t("blog")}</a></li>
            </ul>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">{t("support")}</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">{t("helpCenter")}</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">{t("privacyPolicy")}</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">{t("termsOfService")}</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">{t("contactUs")}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
          <p className="text-center text-sm sm:text-base text-white/60">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
