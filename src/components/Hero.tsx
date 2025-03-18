import { Timer, Dumbbell, Sparkles } from "lucide-react";
import ContactForm from "./ContactForm";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 gradient-bg relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb w-96 h-96 bg-purple-500/30 top-20 -left-48"></div>
      <div className="orb w-80 h-80 bg-blue-500/30 bottom-10 -right-20"></div>
      <div className="orb w-64 h-64 bg-emerald-500/30 top-1/2 left-1/3"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Balance <span className="gradient-text">Digital Life</span> With <span className="gradient-text">Physical Activity</span>
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            Our app helps you manage screen time while encouraging gym visits. Set limits on digital usage, then scan gym equipment to unlock extended screen time.
          </p>
          
          <ContactForm />
          
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-3xl font-bold gradient-text">80%</div>
              <div className="text-white/60">Reduced screen time</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-3xl font-bold gradient-text">85%</div>
              <div className="text-white/60">More gym visits</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-3xl font-bold gradient-text">4.8</div>
              <div className="text-white/60">App Rating</div>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-2 gap-6">
          {/* App Interface */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 glow">
            <div className="relative aspect-[9/19] bg-gradient-to-b from-[#1a1a1a] to-[#0A1F3C]">
              {/* Phone Frame */}
              <div className="absolute inset-0 p-3">
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#FF1CF7]/5 via-[#b249f8]/5 to-[#00DDEB]/5 backdrop-blur">
                  {/* Status Bar */}
                  <div className="absolute top-0 inset-x-0 h-12 bg-black/20 backdrop-blur-lg flex items-center justify-between px-6">
                    <div className="w-14 h-1.5 bg-white/90 rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <Timer className="w-4 h-4 text-white/90" />
                      <span className="text-sm text-white/90 font-medium">2h 15m</span>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="absolute inset-0 pt-12 flex flex-col items-center justify-center text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] flex items-center justify-center mb-4">
                      <Timer className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Screen Time Limit</h3>
                    <p className="text-sm text-white/70 mb-6">Visit the gym to unlock more screen time!</p>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Focused Gym User Interface */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 glow mt-10">
            <div className="relative aspect-[9/19]">
              {/* Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop"
                alt="Focused young man working out in the gym"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C] via-transparent to-transparent"></div>
              
              {/* Phone Frame */}
              <div className="absolute inset-0 p-3">
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="absolute top-0 inset-x-0 h-12 bg-black/20 backdrop-blur-lg flex items-center justify-between px-6">
                    <div className="w-14 h-1.5 bg-white/90 rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <Dumbbell className="w-4 h-4 text-white/90" />
                      <span className="text-sm text-white/90 font-medium">Focus Mode</span>
                    </div>
                  </div>
                  
                  {/* Bottom Content Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#0A1F3C] to-transparent">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">Focus Mode Active</h3>
                        <p className="text-sm text-white/70">Phone notifications blocked</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00DDEB] to-[#0A1F3C] flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-[#00DDEB] to-[#0A1F3C]"></div>
                    </div>
                    <p className="text-xs text-white/60 mt-2">45 min streak - Personal Best!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
