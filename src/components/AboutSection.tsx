import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionHeader title="About Me" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-xl p-8 border-glow"
      >
        <p className="text-foreground leading-relaxed text-lg">
          I'm a data scientist with strong analytical skills, creative thinking, and a
          detail-oriented mindset. With a Master of Science in Data Science (Magna Cum Laude)
          from the University of Arizona, I specialize in machine learning, statistical modeling,
          healthcare data analysis, and data visualization.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Currently volunteering as a researcher at UArizona, exploring cybersecurity
          vulnerabilities in AI and contributing to the D-REP Lab's machine learning studies.
          I'm passionate about turning raw data into compelling visual stories and building
          tools that drive organizational growth.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
