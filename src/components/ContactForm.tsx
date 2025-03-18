
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
  };

  return (
    <div className="w-full max-w-md">
      <form action="https://submit-form.com/gorFfKm9y" method="POST" className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-white text-black hover:bg-white/90 flex items-center gap-2 py-6"
        >
          <Mail className="w-5 h-5" />
          Get Early Access
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
