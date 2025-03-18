
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I was addicted to my phone, constantly scrolling for hours. FitScreen helped me cut my screen time by 80% and motivated me to hit the gym regularly.",
      author: "Alex, 28",
      role: "Software Developer"
    },
    {
      quote: "As someone who struggled with getting off the couch, the gym equipment scanning feature was a game-changer. Now I'm seeing actual progress in my fitness journey.",
      author: "Jason, 24",
      role: "Marketing Specialist"
    },
    {
      quote: "I was always too lazy to go to the gym after work. This app gave me the push I needed. My focus has improved dramatically both at work and during workouts.",
      author: "Ryan, 30",
      role: "Financial Analyst"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          What Our Users Say
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of young men who've overcome phone addiction and transformed their fitness habits
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 mb-4 italic">{testimonial.quote}</p>
              <div className="text-white font-semibold">{testimonial.author}</div>
              <div className="text-white/60 text-sm">{testimonial.role}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
