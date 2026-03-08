import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
        >
          Data Scientist · Researcher · Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-glow text-foreground"
        >
          Stephanie Marbella
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          M.S. Data Science — University of Arizona · Turning complex data into
          actionable insights through machine learning and visual analytics.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/SMarbella"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/stephanie-marbella/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:smartdataguru@yahoo.com"
            className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
