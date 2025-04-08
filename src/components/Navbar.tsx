import { Timer, Home, Lightbulb, HelpCircle, MessageSquare, CreditCard, Menu, X, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-slate-950/80 backdrop-blur-lg relative">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGridNavbar" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGridNavbar)" />
        </svg>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-white flex items-center hover:text-white/90 transition-colors">
          <Timer className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
          GymsLock
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
            <Home className="w-4 h-4" />
            <span>{t("home")}</span>
          </Link>
          <Link to="/features" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            <span>{t("features")}</span>
          </Link>
          <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            <span>{t("howItWorks")}</span>
          </Link>
          <Link to="/pricing" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            <span>{t("pricing")}</span>
          </Link>
          
          {/* Language Selector - Desktop */}
          <div className="relative">
            <button 
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
              onClick={toggleLangDropdown}
            >
              <Globe className="w-4 h-4" />
              <span>{language}</span>
            </button>
            
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 py-2 bg-slate-900/95 backdrop-blur-lg rounded-md shadow-lg z-50 border border-slate-700/50">
                <button
                  className={`w-full px-4 py-2 text-left hover:bg-slate-800/80 transition-colors ${language === "English" ? "text-white" : "text-white/70"}`}
                  onClick={() => changeLanguage("English")}
                >
                  English
                </button>
                <button
                  className={`w-full px-4 py-2 text-left hover:bg-slate-800/80 transition-colors ${language === "繁體中文" ? "text-white" : "text-white/70"}`}
                  onClick={() => changeLanguage("繁體中文")}
                >
                  繁體中文
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-[72px] bg-slate-950/95 backdrop-blur-lg md:hidden z-50"
            >
              {/* Grid pattern overlay for mobile menu */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="smallGridMobileMenu" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#smallGridMobileMenu)" />
                </svg>
              </div>
              
              {/* Subtle gradient overlay for mobile menu */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90 pointer-events-none"></div>
              
              {/* Accent color dots for mobile menu */}
              <div className="absolute top-20 right-[20%] w-72 h-72 rounded-full bg-blue-600/10 blur-[120px]"></div>
              <div className="absolute bottom-40 left-[15%] w-80 h-80 rounded-full bg-purple-600/10 blur-[100px]"></div>
              
              <motion.div 
                className="flex flex-col items-center pt-8 space-y-6 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Link to="/" className="text-white/80 hover:text-white transition-colors flex items-center gap-2" onClick={toggleMenu}>
                    <Home className="w-5 h-5" />
                    <span>{t("home")}</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <Link to="/features" className="text-white/80 hover:text-white transition-colors flex items-center gap-2" onClick={toggleMenu}>
                    <Lightbulb className="w-5 h-5" />
                    <span>{t("features")}</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors flex items-center gap-2" onClick={toggleMenu}>
                    <HelpCircle className="w-5 h-5" />
                    <span>{t("howItWorks")}</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Link to="/pricing" className="text-white/80 hover:text-white transition-colors flex items-center gap-2" onClick={toggleMenu}>
                    <CreditCard className="w-5 h-5" />
                    <span>{t("pricing")}</span>
                  </Link>
                </motion.div>
                
                {/* Language Selector - Mobile */}
                <motion.div 
                  className="flex flex-col items-center space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <div className="text-white/80 flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    <span>{t("language")}</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    <button
                      className={`px-3 py-1 rounded-full ${language === "English" ? "bg-slate-800/80 text-white" : "text-white/70"}`}
                      onClick={() => changeLanguage("English")}
                    >
                      English
                    </button>
                    <button
                      className={`px-3 py-1 rounded-full ${language === "繁體中文" ? "bg-slate-800/80 text-white" : "text-white/70"}`}
                      onClick={() => changeLanguage("繁體中文")}
                    >
                      繁體中文
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
