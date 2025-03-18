import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EarlyAccessPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      // Only show if not previously dismissed
      const hasSeenPopup = localStorage.getItem("hasSeenEarlyAccessPopup");
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenEarlyAccessPopup", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md transform transition-all">
        <div className="relative bg-background rounded-lg shadow-xl p-6 glass-effect border border-accent/20">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] via-[#b249f8] via-[#00DDEB] to-[#0A1F3C]">
              Get Early Access
            </h3>
            <p className="text-white/60 mt-2">
              Join our waitlist to be among the first to experience GymLocks and receive exclusive early-bird benefits.
            </p>
          </div>

          <form 
            action="https://submit-form.com/gorFfKm9y" 
            method="POST" 
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
              const form = e.target as HTMLFormElement;
              form.submit();
              handleClose();
            }}
          >
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] text-white hover:opacity-90 transition-opacity"
            >
              Join Waitlist
            </Button>
          </form>

          <p className="text-white/40 text-sm text-center mt-4">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccessPopup; 