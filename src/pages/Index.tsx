import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import { useRef, useEffect, useState } from "react";
import EarlyAccessPopup from "@/components/EarlyAccessPopup";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import DataVisualization from "@/components/DataVisualization";

const Index = () => {
  const { t } = useLanguage();
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      const elements = parallaxRef.current.querySelectorAll('.parallax-element');
      
      elements.forEach((el, i) => {
        const speed = 0.1 * (i + 1);
        const htmlEl = el as HTMLElement;
        htmlEl.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <EarlyAccessPopup />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <DataVisualization />
        <Features />
        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default Index;