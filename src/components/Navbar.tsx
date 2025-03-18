import { Timer, Home, Lightbulb, HelpCircle, MessageSquare, CreditCard, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-white flex items-center hover:text-white/90 transition-colors">
          <Timer className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
          GymLocks
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link to="/features" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            <span>Features</span>
          </Link>
          <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            <span>How It Works</span>
          </Link>
          <Link to="/testimonials" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            <span>Testimonials</span>
          </Link>
          <Link to="/pricing" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            <span>Pricing</span>
          </Link>
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
                <span>Home</span>
              </Link>
              <Link to="/features" className="text-white/80 hover:text-white transition-colors flex items-center gap-2" onClick={toggleMenu}>
                <Lightbulb className="w-5 h-5" />
                <span>Features</span>
              </Link>
              <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors flex items-center gap-2" onClick={toggleMenu}>
                <HelpCircle className="w-5 h-5" />
                <span>How It Works</span>
              </Link>
              <Link to="/testimonials" className="text-white/80 hover:text-white transition-colors flex items-center gap-2" onClick={toggleMenu}>
                <MessageSquare className="w-5 h-5" />
                <span>Testimonials</span>
              </Link>
              <Link to="/pricing" className="text-white/80 hover:text-white transition-colors flex items-center gap-2" onClick={toggleMenu}>
                <CreditCard className="w-5 h-5" />
                <span>Pricing</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
