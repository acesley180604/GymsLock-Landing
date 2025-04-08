import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { t } = useLanguage();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
  };

  const handleGetStarted = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form action="https://submit-form.com/gorFfKm9y" method="POST" className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder={t("emailPlaceholder")}
            required
            className="w-full h-full bg-slate-800/60 border-slate-700/50 text-white placeholder:text-slate-400 py-6 px-4 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
          <Button 
            type="submit" 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 py-6 px-8 rounded-xl font-medium h-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            onClick={handleGetStarted}
          >
            {t("getStarted")}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </form>
      <p className="text-xs text-slate-500 text-center mt-3">{t("privacyNote")}</p>
    </div>
  );
};

export default ContactForm;
