import { motion } from "framer-motion";
import { Code, Layers, Zap, Target } from "lucide-react";

const technicalSkills = [
  { name: "C", level: "Basics" },
  { name: "Java", level: "Learning" },
  { name: "HTML/CSS", level: "Intermediate" },
  { name: "JavaScript", level: "Learning" },
  { name: "React", level: "Learning" },
  { name: "Full Stack", level: "Growing" },
];

const softSkills = [
  { name: "Written Communication", category: "Communication" },
  { name: "Presentation Skills", category: "Communication" },
  { name: "Technical Documentation", category: "Communication" },
  { name: "Team Collaboration", category: "Teamwork" },
  { name: "Cross-functional Coordination", category: "Teamwork" },
  { name: "Active Listening", category: "Teamwork" },
  { name: "Conflict Handling", category: "Teamwork" },
  { name: "Logical Reasoning", category: "Problem Solving" },
  { name: "Structured Thinking", category: "Problem Solving" },
  { name: "Requirement Analysis", category: "Problem Solving" },
  { name: "Prioritization", category: "Problem Solving" },
];

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing readable, maintainable code that others can understand",
  },
  {
    icon: Layers,
    title: "Full Stack Focus",
    description: "Building end-to-end solutions from frontend to backend",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and frameworks",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Creating solutions that address real-world challenges",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-muted-foreground font-medium text-sm uppercase tracking-widest font-body">About Me</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground mt-4 mb-6 tracking-tight">
            Crafting digital experiences with purpose
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            I'm a passionate 2nd year Computer Science student at Sri Sairam Engineering College, 
            driven by the desire to build applications that make a difference. My journey in tech 
            started with curiosity, and now I'm channeling that into becoming a skilled Full Stack Developer.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-background rounded-2xl shadow-soft hover:shadow-card transition-shadow border border-border/50"
            >
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
                <item.icon className="text-foreground" size={22} />
              </div>
              <h3 className="font-display font-medium text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-display font-medium text-foreground mb-8">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-5 py-3 bg-background rounded-full border border-border hover:border-foreground/30 transition-colors group"
              >
                <span className="font-medium text-foreground transition-colors font-body">
                  {skill.name}
                </span>
                <span className="text-muted-foreground text-sm ml-2 font-body">• {skill.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-display font-medium text-foreground mb-8">Professional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-5 py-3 bg-background rounded-full border border-border hover:border-foreground/30 transition-colors group"
              >
                <span className="font-medium text-foreground transition-colors font-body">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
