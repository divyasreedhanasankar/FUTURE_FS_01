import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-hero-gradient">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium font-body">
              Junior Software Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-foreground leading-tight mb-6 tracking-tight"
          >
            Hi, I'm{" "}
            <span className="italic text-primary">Divyasree D</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground font-body font-light max-w-2xl mb-8 leading-relaxed"
          >
            2nd year student at Sri Sairam Engineering College, passionate about 
            building impactful full-stack applications that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium transition-all hover:shadow-elevated hover:-translate-y-1 font-body"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/30 text-foreground rounded-full font-medium transition-all hover:border-foreground hover:bg-foreground/5 font-body"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-6 text-muted-foreground text-sm font-body"
          >
            <a href="mailto:divyasreed1507@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} />
              divyasreed1507@gmail.com
            </a>
            <a href="tel:+919444642347" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} />
              +91 9444642347
            </a>
            <a href="https://www.linkedin.com/in/divyasree-dhanasankar-a72a41329" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href="https://github.com/divyasreedhanasankar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Github size={16} />
              GitHub
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm font-body">Scroll to explore</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Hero;
