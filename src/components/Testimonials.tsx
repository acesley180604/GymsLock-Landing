import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "GymLocks transformed my relationship with technology. I'm more productive and healthier than ever!",
      author: "Sarah M.",
      role: "Product Designer"
    },
    {
      text: "The perfect balance of motivation and accountability. My screen time is down 70% and gym visits up 3x!",
      author: "James K.",
      role: "Software Engineer"
    },
    {
      text: "Finally, an app that understands the connection between digital wellness and physical health.",
      author: "Emily R.",
      role: "Fitness Trainer"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] via-[#b249f8] via-[#00DDEB] to-[#00F0FF]">
              What Our Users Say
            </h2>
          </div>
          <p className="text-xl text-white/60 mt-6 max-w-2xl mx-auto">
            Join thousands of satisfied users who have found their perfect balance with GymLocks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-white/80 mb-4">{testimonial.text}</p>
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
