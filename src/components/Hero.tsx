
import { Timer, Dumbbell } from "lucide-react";
import ContactForm from "./ContactForm";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Balance Digital Life With Physical Activity
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            Our app helps you manage screen time while encouraging gym visits. Set limits on digital usage, then scan gym equipment to unlock extended screen time.
          </p>
          
          <ContactForm />
          
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">30%</div>
              <div className="text-white/60">Reduced screen time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">65%</div>
              <div className="text-white/60">More gym visits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">4.8</div>
              <div className="text-white/60">App Rating</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=1200&auto=format&fit=crop"
              alt="Person checking FitScreen app on smartwatch"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
