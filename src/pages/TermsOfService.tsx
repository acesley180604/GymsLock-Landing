import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <div className="max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2 className="text-white">1. Agreement to Terms</h2>
            <p>By using the GymsLock application (the "Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.</p>
            
            <h2 className="text-white">2. Description of Service</h2>
            <p>GymsLock is a mobile application that helps users manage their screen time. The Service allows users to set screen time limits and earn additional time by verifying their attendance at a gym. Verification is performed by the user taking a photo of themselves with gym equipment, which is then analyzed by our Service.</p>

            <h2 className="text-white">3. User Accounts</h2>
            <p>To use certain features of the Service, you may be required to create an account. You are responsible for safeguarding your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

            <h2 className="text-white">4. Acceptable Use</h2>
            <p>You agree not to misuse the Service. This includes, but is not limited to:</p>
            <ul>
              <li>Uploading photos that are not genuine, have been manipulated, or were not taken at a gym for the purpose of verifying a workout.</li>
              <li>Attempting to circumvent the screen time limitations through any fraudulent means.</li>
              <li>Using the Service for any illegal or unauthorized purpose.</li>
            </ul>

            <h2 className="text-white">5. User-Generated Content</h2>
            <p>You retain all ownership rights to the photos you upload to the Service. However, by uploading a photo, you grant us a worldwide, non-exclusive, royalty-free license to use, store, and analyze that photo for the sole purpose of providing and improving the verification feature of the Service.</p>

            <h2 className="text-white">6. Termination</h2>
            <p>We may terminate or suspend your account and access to the Service at our sole discretion, without prior notice or liability, for any reason, including if you breach these Terms of Service.</p>
            
            <h2 className="text-white">7. Disclaimer of Warranties</h2>
            <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, express or implied, regarding the operation or availability of the Service, or that it will be error-free or uninterrupted.</p>

            <h2 className="text-white">8. Limitation of Liability</h2>
            <p>In no event shall GymsLock or its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Service.</p>

            <h2 className="text-white">9. Changes to These Terms</h2>
            <p>We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page. By continuing to use the Service after those changes become effective, you agree to be bound by the revised terms.</p>

            <h2 className="text-white">10. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at: [Your Contact Email Address]</p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService; 