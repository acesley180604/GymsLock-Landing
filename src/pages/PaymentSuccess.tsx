import { motion } from "framer-motion";
import { CheckCircle2, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PaymentSuccess = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Modern background design inspired by Arc */}
      <div className="absolute inset-0 z-0">
        {/* Primary background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGridSuccess" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGridSuccess)" />
          </svg>
        </div>
        
        {/* Accent color dots - subtle positioning */}
        <div className="absolute top-20 right-[20%] w-72 h-72 rounded-full bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute bottom-40 left-[15%] w-80 h-80 rounded-full bg-purple-600/10 blur-[100px]"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-indigo-600/10 blur-[80px]"></div>
      </div>

      {/* Subtle animated glow effects */}
      <motion.div 
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[80px]"
      ></motion.div>

      {/* Light streak accent */}
      <motion.div 
        initial={{ opacity: 0, width: "30%" }}
        animate={{ opacity: [0, 0.05, 0], width: ["30%", "70%", "30%"] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
      ></motion.div>

      <div className="relative z-10">
        <Navbar />
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-16 h-16 text-green-400" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Payment Successful!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-slate-400 mb-8"
            >
              Thank you for your purchase. We'll be in touch shortly with your account details.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">Contact Us</h2>
              </div>
              <p className="text-slate-400 mb-4">
                If you have any questions, please contact us at:
              </p>
              <a
                href="mailto:acesley180604@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                acesley180604@gmail.com
              </a>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PaymentSuccess; 