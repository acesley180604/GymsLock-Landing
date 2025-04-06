import { Timer, Home, Lightbulb, HelpCircle, MessageSquare, CreditCard, Menu, X, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
              <div className="absolute right-0 mt-2 w-36 py-2 bg-background/95 backdrop-blur-lg rounded-md shadow-lg z-50 border border-white/10">
                <button
                  className={`w-full px-4 py-2 text-left hover:bg-white/10 transition-colors ${language === "English" ? "text-white" : "text-white/70"}`}
                  onClick={() => changeLanguage("English")}
                >
                  English
                </button>
                <button
                  className={`w-full px-4 py-2 text-left hover:bg-white/10 transition-colors ${language === "繁體中文" ? "text-white" : "text-white/70"}`}
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

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-background/95 backdrop-blur-lg md:hidden">
            <div className="flex flex-col items-center pt-8 space-y-6">
              <Link to="/" className="text-white/80 hover:text-white transition-colors flex items-center gap-2" onClick={toggleMenu}>
                <Home className="w-5 h-5" />
                <span>{t("home")}</span>
              </Link>
              <Link to="/features" className="text-white/80 hover:text-white transition-colors flex items-center gap-2" onClick={toggleMenu}>
                <Lightbulb className="w-5 h-5" />
                <span>{t("features")}</span>
              </Link>
              <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors flex items-center gap-2" onClick={toggleMenu}>
                <HelpCircle className="w-5 h-5" />
                <span>{t("howItWorks")}</span>
              </Link>
              <Link to="/pricing" className="text-white/80 hover:text-white transition-colors flex items-center gap-2" onClick={toggleMenu}>
                <CreditCard className="w-5 h-5" />
                <span>{t("pricing")}</span>
              </Link>
              
              {/* Language Selector - Mobile */}
              <div className="flex flex-col items-center space-y-2">
                <div className="text-white/80 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span>{t("language")}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    className={`px-3 py-1 rounded-full ${language === "English" ? "bg-white/20 text-white" : "text-white/70"}`}
                    onClick={() => changeLanguage("English")}
                  >
                    English
                  </button>
                  <button
                    className={`px-3 py-1 rounded-full ${language === "繁體中文" ? "bg-white/20 text-white" : "text-white/70"}`}
                    onClick={() => changeLanguage("繁體中文")}
                  >
                    繁體中文
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
