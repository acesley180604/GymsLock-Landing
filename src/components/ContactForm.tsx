
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(5, { message: "Message must be at least 5 characters." })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    // This will submit to the form.io endpoint
    console.log("Form data:", data);
  };

  return (
    <div className="w-full max-w-md">
      <form action="https://submit-form.com/gorFfKm9y" method="POST" className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>
        
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
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
            className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
            rows={4}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-white text-black hover:bg-white/90 flex items-center gap-2 py-6"
        >
          <Send className="w-5 h-5" />
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
