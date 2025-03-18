import { Github, Twitter, Linkedin, Instagram, Timer, Dumbbell } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-20 px-4 sm:px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-4">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-white flex items-center hover:text-white/90 transition-colors">
              <Timer className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              GymLocks
            </Link>
            <p className="text-sm sm:text-base text-white/60">
              Balancing digital life with physical activity. Reduce screen time, increase gym engagement.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-white/10">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-white/10">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-white/10">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">App</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link to="/features" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/how-it-works" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Gym Partners</Link></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
          <p className="text-center text-sm sm:text-base text-white/60">
            © 2024 GymLocks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
