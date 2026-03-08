import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "R", "SQL", "Java", "C#", "Kotlin", "Swift", "PHP", "JavaScript"],
  },
  {
    title: "ML & Analytics",
    skills: ["Scikit-learn", "Spark ML", "Pandas", "NumPy", "Matplotlib", "Jupyter", "Databricks"],
  },
  {
    title: "Databases & Cloud",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Azure Cosmos DB", "Snowflake", "AWS Redshift", "GCP", "Hadoop"],
  },
  {
    title: "Visualization & BI",
    skills: ["Power BI", "Google Looker Studio", "Amazon QuickSight", "Recharts", "D3.js"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git/GitHub", "EQuIS", "Unity", "React", "HTML/CSS", "VS Code", "DBeaver"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6 bg-grid">
    <div className="max-w-4xl mx-auto">
      <SectionHeader title="Skills & Tools" />
      <div className="space-y-8">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-3">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
