
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "FitScreen helped me reduce my screen time by 40% and I've been going to the gym 3 times a week now!",
      author: "Sarah Johnson",
      role: "Marketing Professional"
    },
    {
      quote: "The QR scanner feature makes it fun to track my gym sessions. It's like a game that rewards me with more screen time.",
      author: "Michael Chen",
      role: "Software Engineer"
    },
    {
      quote: "As a parent, I love how this app encourages my teenagers to balance screen time with physical activity.",
      author: "Emma Davis",
      role: "Parent of two"
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
          Join thousands of satisfied users who have found balance between their digital and physical lives
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
