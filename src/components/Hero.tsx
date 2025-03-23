import { Timer, Dumbbell, Sparkles } from "lucide-react";
import ContactForm from "./ContactForm";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 gradient-bg relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      </div>

      {/* Decorative orbs - adjusted for better mobile appearance */}
      <div className="orb w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/30 top-20 -left-32 sm:-left-48"></div>
      <div className="orb w-56 sm:w-80 h-56 sm:h-80 bg-blue-500/30 bottom-10 -right-20"></div>
      <div className="orb w-48 sm:w-64 h-48 sm:h-64 bg-emerald-500/30 top-1/2 left-1/3"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Balance <span className="gradient-text">Digital Life</span> With <span className="gradient-text">Physical Activity</span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-xl">
            Our app helps you manage screen time while encouraging gym visits. Set limits on digital usage, then scan gym equipment to unlock extended screen time.
          </p>
          
          <ContactForm />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">80%</div>
              <div className="text-sm sm:text-base text-white/60">Reduced screen time</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">85%</div>
              <div className="text-sm sm:text-base text-white/60">More gym visits</div>
            </div>
            <div className="glass-effect p-4 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">4.8</div>
              <div className="text-sm sm:text-base text-white/60">App Rating</div>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="relative">
          {/* Large Gym Image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop"
              alt="Man focused on workout"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40 backdrop-blur-sm"></div>
          </div>

          {/* Phone Interfaces - Made responsive and adjusted for different screen sizes */}
          <div className="relative grid grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto lg:max-w-none">
            {/* First iPhone - Screen Time Limit */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 glow border-[8px] border-[#1a1a1a]">
              <div className="relative aspect-[9/19] bg-gradient-to-b from-[#1a1a1a] to-[#0A1F3C]">
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-[#1a1a1a] rounded-b-xl z-10"></div>
                
                {/* iPhone Screen */}
                <div className="absolute inset-0">
                  <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#FF1CF7]/5 via-[#b249f8]/5 to-[#00DDEB]/5 backdrop-blur">
                    {/* Status Bar */}
                    <div className="absolute top-0 inset-x-0 h-8 sm:h-12 bg-black/20 backdrop-blur-lg flex items-center justify-between px-3 sm:px-6 pt-6">
                      <div className="flex items-center">
                        <div className="text-xs text-white/90">9:41</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="text-xs text-white/90">100%</div>
                        <Timer className="w-3 h-3 sm:w-4 sm:h-4 text-white/90" />
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="absolute inset-0 pt-16 sm:pt-20 flex flex-col items-center justify-center text-center p-3 sm:p-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] flex items-center justify-center mb-3 sm:mb-4">
                        <Timer className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Screen Time Limit</h3>
                      <p className="text-xs sm:text-sm text-white/70 mb-4 sm:mb-6">Visit the gym to unlock more screen time!</p>
                      <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]"></div>
                      </div>
                    </div>
                    
                    {/* iPhone Home Indicator */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white/80 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second iPhone - Focused Gym User */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 glow mt-6 sm:mt-10 border-[8px] border-[#1a1a1a]">
              <div className="relative aspect-[9/19]">
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-[#1a1a1a] rounded-b-xl z-10"></div>
                
                {/* Background Image - Changed to show camera taking photo of gym equipment */}
                <img 
                  src="https://images.unsplash.com/photo-1637926188904-97fb8d1dcfd1?q=80&w=2532&auto=format&fit=crop"
                  alt="Person taking a photo of gym equipment"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C] via-[#0A1F3C]/50 to-transparent"></div>
                
                {/* Camera Interface Overlay */}
                <div className="absolute inset-0 z-20">
                  {/* Camera UI */}
                  <div className="absolute top-14 inset-x-0 flex justify-center">
                    <div className="bg-black/40 backdrop-blur-md rounded-full px-4 py-1 text-xs text-white font-medium">
                      PHOTO
                    </div>
                  </div>
                  
                  {/* Camera Frame */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 border-2 border-white/80 rounded-lg flex items-center justify-center">
                      <div className="absolute inset-0 w-full h-full border-4 border-white/30 rounded-lg"></div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Equipment Recognition Indicator */}
                  <div className="absolute top-[60%] left-1/2 -translate-x-1/2 text-center">
                    <div className="bg-black/40 backdrop-blur-md rounded-lg px-4 py-2 inline-block">
                      <div className="text-sm sm:text-base font-medium text-white">Equipment Recognized ✓</div>
                      <div className="text-xs text-green-400 mt-1">Treadmill Detected</div>
                    </div>
                  </div>
                  
                  {/* Camera Controls */}
                  <div className="absolute bottom-12 inset-x-0 flex justify-center items-center space-x-6">
                    <div className="w-5 h-5 bg-white/80 rounded-full p-4 flex items-center justify-center border border-white/40">
                      <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 3H15L12 0L9 3Z"></path>
                        <path d="M9 21H15L12 24L9 21Z"></path>
                        <path d="M3 9V15L0 12L3 9Z"></path>
                        <path d="M21 9V15L24 12L21 9Z"></path>
                      </svg>
                    </div>
                    <div className="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full"></div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 6v12a3 3 0 003-3V9a3 3 0 00-3-3z" />
                        <rect x="6" y="6" width="9" height="12" rx="3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-6 bg-gradient-to-t from-[#0A1F3C] to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white">Unlock Extra Time</h3>
                      <p className="text-xs sm:text-sm text-white/70">Photo recognized - unlocking</p>
                    </div>
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#00DDEB] to-[#0A1F3C] flex items-center justify-center">
                      <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-white/10 rounded-full mt-3 sm:mt-4 overflow-hidden">
                    <div className="w-[60%] h-full bg-gradient-to-r from-[#00DDEB] to-[#0A1F3C]"></div>
                  </div>
                  <p className="text-[10px] sm:text-xs text-white/60 mt-1 sm:mt-2">+30 min will be added to your screen time</p>
                  
                  {/* iPhone Home Indicator */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white/80 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Large Lock Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-black/60 backdrop-blur-xl flex items-center justify-center">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
