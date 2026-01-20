import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github, FolderOpen } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider font-body">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              Let's work together
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be 
              part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:divyasreed1507@gmail.com"
                className="flex items-center gap-4 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <Mail className="text-foreground" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Email</p>
                  <p className="text-foreground font-medium font-body group-hover:text-primary/80 transition-colors">
                    divyasreed1507@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919444642347"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <Phone className="text-foreground" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Phone</p>
                  <p className="text-foreground font-medium font-body group-hover:text-primary/80 transition-colors">
                    +91 9444642347
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center">
                  <MapPin className="text-foreground" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Location</p>
                  <p className="text-foreground font-medium font-body">
                    Chennai, India
                  </p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/divyasree-dhanasankar-a72a41329"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <Linkedin className="text-foreground" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">LinkedIn</p>
                  <p className="text-foreground font-medium font-body group-hover:text-primary/80 transition-colors">
                    Connect with me
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/divyasreedhanasankar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <Github className="text-foreground" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">GitHub</p>
                  <p className="text-foreground font-medium font-body group-hover:text-primary/80 transition-colors">
                    View my projects
                  </p>
                </div>
              </a>

              <a
                href="https://drive.google.com/drive/folders/1xRJDgOKRpmuVu1ytlgrGOHXsUqvkuqRP?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <FolderOpen className="text-foreground" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">Certifications</p>
                  <p className="text-foreground font-medium font-body group-hover:text-primary/80 transition-colors">
                    View my certificates
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-background p-8 md:p-10 rounded-3xl shadow-card border border-border/50">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-body">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-body">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-body">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none font-body"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-medium transition-all hover:shadow-elevated hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 font-body"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
