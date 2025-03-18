import { Card } from "@/components/ui/card";
import { Timer, Dumbbell, Scan, Bell, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Screen Time Limits",
      description: "Set daily usage limits for apps and overall screen time"
    },
    {
      icon: <Scan className="w-6 h-6 text-white" />,
      title: "Gym Equipment Scanner",
      description: "Scan QR codes on gym equipment to verify your workout"
    },
    {
      icon: <Bell className="w-6 h-6 text-white" />,
      title: "Smart Notifications",
      description: "Get alerts when approaching limits and gym motivation reminders"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] via-[#b249f8] via-[#00DDEB] to-[#00F0FF]">
                Balance Digital and Physical Wellbeing
              </h2>
            </div>
            <p className="text-xl text-white/60">
              Our app helps you manage screen time and promotes physical activity. Set limits on your digital usage, then extend your time by visiting the gym and scanning equipment.
            </p>
          </div>
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift glass-effect flex items-start gap-4 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
