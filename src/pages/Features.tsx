import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Timer, Dumbbell, Scan, Bell, Smartphone, LineChart, Scale, Eye, Lock, Focus, Zap } from "lucide-react";
import EarlyAccessPopup from "@/components/EarlyAccessPopup";

const FeaturesPage = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Smart Screen Time Limits",
      description: "Set personalized daily usage limits for apps and overall screen time. Our algorithm adapts to your usage patterns for better recommendations."
    },
    {
      icon: <Scan className="w-6 h-6 text-white" />,
      title: "Gym Equipment Scanner",
      description: "Scan QR codes on gym equipment to verify your workout sessions. Each scan extends your screen time allowance as a reward."
    },
    {
      icon: <Bell className="w-6 h-6 text-white" />,
      title: "Smart Notifications",
      description: "Get customized alerts when approaching limits and receive gym motivation reminders at optimal times based on your schedule."
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: "Progress Tracking",
      description: "Visualize your screen time reduction and gym attendance improvements with detailed analytics and insights."
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-white" />,
      title: "Workout Suggestions",
      description: "Receive personalized workout recommendations based on your fitness level and equipment you've previously used."
    },
    {
      icon: <Scale className="w-6 h-6 text-white" />,
      title: "Balance Score",
      description: "Our proprietary algorithm calculates your digital-physical balance score, helping you maintain a healthy lifestyle."
    },
    {
      icon: <Eye className="w-6 h-6 text-white" />,
      title: "Eye Health Protection",
      description: "Get reminders to take breaks and protect your vision during extended screen sessions."
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "App Blocking",
      description: "Temporarily block distracting apps during focus periods or when you've reached your daily limit."
    },
    {
      icon: <Focus className="w-6 h-6 text-white" />,
      title: "Focus Mode",
      description: "Enable focus sessions that restrict access to distracting apps while allowing essential communications."
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Reward System",
      description: "Earn digital rewards and unlock achievements as you improve your screen-gym balance."
    }
  ];

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <EarlyAccessPopup />
      {/* Decorative orbs */}
      <div className="orb w-[500px] h-[500px] bg-purple-500/20 -top-40 -right-40"></div>
      <div className="orb w-[600px] h-[600px] bg-blue-500/20 bottom-0 -left-40"></div>
      <div className="orb w-[400px] h-[400px] bg-emerald-500/20 top-1/2 right-1/4"></div>
      
      <Navbar />
      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Powerful</span> Features
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              GymLocks combines cutting-edge technology with behavioral science to help you balance your digital and physical wellbeing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift glass-effect flex flex-col items-start gap-4 group transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:gradient-text transition-all duration-300">{feature.title}</h3>
                  <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage; 