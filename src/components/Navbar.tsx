
import { Button } from "@/components/ui/button";
import { LogIn, Timer } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white flex items-center">
          <Timer className="w-6 h-6 mr-2" />
          FitScreen
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">How It Works</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            Get Started
          </Button>
          <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
            Sign in
            <LogIn className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
