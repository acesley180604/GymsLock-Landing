import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <div className="max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p>Welcome to GymsLock ("we," "our," "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application (the "Service"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.</p>
            
            <h2 className="text-white">1. INFORMATION WE COLLECT</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect via the Service includes:</p>
            <ul>
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name and email address, that you voluntarily give to us when you register with the Service or join our waitlist.</li>
              <li><strong>User-Generated Content (Photos):</strong> We collect photos you upload to the Service. These photos are taken at a gym to verify your physical activity. The photos may contain images of you and your surroundings.</li>
              <li><strong>Location Data:</strong> We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using the Service, to help verify that photos were taken at a gym. If you wish to change our access or permissions, you may do so in your device's settings.</li>
              <li><strong>Usage Data:</strong> Information that our servers automatically collect when you access the Service, such as your device type, operating system, and your usage of the app, including screen time data.</li>
            </ul>

            <h2 className="text-white">2. HOW WE USE YOUR INFORMATION</h2>
            <p>Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Service to:</p>
            <ul>
              <li>Create and manage your account.</li>
              <li>Fulfill the core function of the Service, which is to verify your gym attendance through photos to grant you additional screen time.</li>
              <li>Analyze usage and trends to improve our Service.</li>
              <li>Notify you of updates to the Service.</li>
              <li>Request feedback and contact you about your use of the Service.</li>
            </ul>

            <h2 className="text-white">3. DISCLOSURE OF YOUR INFORMATION</h2>
            <p>We do not share, sell, rent, or trade your information with third parties for their commercial purposes.</p>
            <p>Your photos are used solely for the purpose of gym visit verification and are not shared with other users or any third parties, except for the secure, third-party service providers who may assist us in operating the Service (e.g., cloud storage, AI analysis service). These service providers will only have access to your information to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

            <h2 className="text-white">4. DATA SECURITY</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

            <h2 className="text-white">5. CHILDREN'S PRIVACY</h2>
            <p>Our Service is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information from our files as soon as possible.</p>

            <h2 className="text-white">6. CHANGES TO THIS PRIVACY POLICY</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

            <h2 className="text-white">7. CONTACT US</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at: [Your Contact Email Address]</p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 