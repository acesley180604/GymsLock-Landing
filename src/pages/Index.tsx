import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb w-[800px] h-[800px] bg-purple-500/20 -top-40 -right-40 fixed"></div>
      <div className="orb w-[600px] h-[600px] bg-blue-500/20 bottom-0 -left-40 fixed"></div>
      <div className="orb w-[500px] h-[500px] bg-emerald-500/20 top-1/2 right-1/4 fixed"></div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default Index;