import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import FeaturesPage from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import PricingPage from "./pages/Pricing";
import PaymentSuccess from "./pages/PaymentSuccess";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { LanguageProvider } from "./context/LanguageContext";
import AnimatedBackground from "./components/AnimatedBackground";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <Router>
          <div className="relative min-h-screen">
            <AnimatedBackground />
            <div className="relative z-10">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
              </Routes>
            </div>
          </div>
        </Router>
      </LanguageProvider>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
