import { Timer, Home, Lightbulb, HelpCircle, MessageSquare, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white flex items-center hover:text-white/90 transition-colors">
          <Timer className="w-6 h-6 mr-2" />
          GymLocks
        </Link>
        <div className="hidden md:flex items-center space-x-8">
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
      </div>
    </nav>
  );
};

export default Navbar;
