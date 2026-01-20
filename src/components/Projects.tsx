import { motion } from "framer-motion";
import { ExternalLink, Award, Globe, Users } from "lucide-react";

const projects = [
  {
    title: "Click2Ration",
    subtitle: "Consolation Prize Winner 🏆",
    description:
      "A rural-friendly application designed to simplify government ration distribution. Features multi-language support and enables doorstep delivery of government-verified rations to underserved communities.",
    tags: ["Social Impact", "Multi-language", "Government Services"],
    highlights: [
      { icon: Award, text: "Won Consolation Prize" },
      { icon: Globe, text: "Multi-language Support" },
      { icon: Users, text: "Rural Community Focused" },
    ],
    color: "primary",
  },
  {
    title: "Habit Dependency Tracker",
    subtitle: "Personal Productivity Tool",
    description:
      "A comprehensive habit tracking application that helps users build and maintain positive habits by understanding dependencies between different routines and behaviors.",
    tags: ["Productivity", "Habit Tracking", "Self-improvement"],
    highlights: [
      { icon: Users, text: "User-Centric Design" },
      { icon: Globe, text: "Dependency Mapping" },
    ],
    color: "secondary",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-muted-foreground font-medium text-sm uppercase tracking-widest font-body">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground mt-4 mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Projects that showcase my skills and passion for creating impactful solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-500 border border-border/50">
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-2 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium font-body text-primary italic">
                        {project.subtitle}
                      </p>
                    </div>
                    <button className="p-3 rounded-full border border-border hover:border-foreground/30 hover:bg-muted transition-all">
                      <ExternalLink size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                    </button>
                  </div>

                  <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8 max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-6 mb-8">
                    {project.highlights.map((highlight) => (
                      <div key={highlight.text} className="flex items-center gap-2 text-muted-foreground">
                        <highlight.icon size={18} className="text-foreground/70" />
                        <span className="text-sm font-body">{highlight.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
