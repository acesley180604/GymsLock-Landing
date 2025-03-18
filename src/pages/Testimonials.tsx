import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MessageSquare, Star, Quote } from "lucide-react";
import EarlyAccessPopup from "@/components/EarlyAccessPopup";

const TestimonialsPage = () => {
  const testimonials = [
    {
      quote: "I was addicted to my phone, constantly scrolling for hours. GymLocks helped me cut my screen time by 80% and motivated me to hit the gym regularly.",
      author: "Alex, 28",
      role: "Software Developer",
      rating: 5
    },
    {
      quote: "As someone who struggled with getting off the couch, the gym equipment scanning feature was a game-changer. Now I'm seeing actual progress in my fitness journey.",
      author: "Jason, 24",
      role: "Marketing Specialist",
      rating: 5
    },
    {
      quote: "I was always too lazy to go to the gym after work. This app gave me the push I needed. My focus has improved dramatically both at work and during workouts.",
      author: "Ryan, 30",
      role: "Financial Analyst",
      rating: 5
    },
    {
      quote: "The balance between screen time and gym time has completely transformed my productivity. I've lost 15 pounds and my screen time is down to a healthy level.",
      author: "Michael, 26",
      role: "Graphic Designer",
      rating: 5
    },
    {
      quote: "As a college student, I was spending way too much time on social media. GymLocks helped me create better habits and now I'm in the best shape of my life.",
      author: "David, 21",
      role: "College Student",
      rating: 4
    },
    {
      quote: "I've tried many screen time apps, but this is the first one that actually changed my behavior. The gym integration is brilliant and keeps me motivated.",
      author: "Chris, 32",
      role: "Project Manager",
      rating: 5
    },
    {
      quote: "My productivity at work has skyrocketed since I started using GymLocks. I'm more focused during the day and more active in the evenings.",
      author: "Thomas, 29",
      role: "Sales Executive",
      rating: 5
    },
    {
      quote: "The analytics feature helps me see my progress over time, which is incredibly motivating. I've recommended this app to everyone in my friend group.",
      author: "Kevin, 27",
      role: "Data Scientist",
      rating: 4
    },
    {
      quote: "I used to make excuses for not going to the gym. Now I'm excited to scan equipment and earn more screen time. It's gamified my fitness journey in the best way.",
      author: "Josh, 25",
      role: "Account Manager",
      rating: 5
    }
  ];

  // Function to render star ratings
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}`} 
        />
      );
    }
    return <div className="flex space-x-1 mt-2">{stars}</div>;
  };

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <EarlyAccessPopup />
      {/* Decorative orbs */}
      <div className="orb w-[600px] h-[600px] bg-purple-500/20 -top-40 -right-40"></div>
      <div className="orb w-[500px] h-[500px] bg-blue-500/20 bottom-0 -left-40"></div>
      <div className="orb w-[400px] h-[400px] bg-emerald-500/20 top-1/2 right-1/4"></div>
      
      <Navbar />
      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              User <span className="gradient-text">Testimonials</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Hear from our community of users who have successfully balanced their digital and physical wellbeing with GymLocks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover-lift glass-effect group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white/80 mb-4 italic group-hover:text-white transition-colors duration-300">{testimonial.quote}</p>
                  <div className="text-white font-semibold group-hover:gradient-text transition-all duration-300">{testimonial.author}</div>
                  <div className="text-white/60 text-sm mb-2">{testimonial.role}</div>
                  {renderRating(testimonial.rating)}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Thousands of users are transforming their habits with GymLocks. Start your journey today.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialsPage; 