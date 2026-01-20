import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2 text-muted-foreground font-body">
            <span>Built with</span>
            <Heart size={16} className="text-primary fill-primary" />
            <span>by Divyasree D</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:divyasreed1507@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              Email
            </a>
            <a
              href="tel:+919444642347"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              Phone
            </a>
            <a
              href="https://github.com/divyasreedhanasankar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/divyasree-dhanasankar-a72a41329"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/drive/folders/1xRJDgOKRpmuVu1ytlgrGOHXsUqvkuqRP?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              Certifications
            </a>
          </div>

          <p className="text-muted-foreground text-sm font-body">
            © 2026 All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
