import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { ExternalLink } from "lucide-react";
import SkillsRadar from "./SkillsRadar";

const projects = [
  {
    title: "Global Healthcare Dataset Analysis",
    date: "May 2025",
    description:
      "Applied ML techniques on a 1M-record Kaggle healthcare dataset to uncover significant trends across countries with varying geography and economics.",
    tech: ["Python", "Jupyter", "Scikit-learn"],
  },
  {
    title: "ML: Colleges, Vehicles & Boston Housing",
    date: "Jan 2024",
    description:
      "Built machine learning models in R to identify meaningful patterns across US colleges, vehicle features, and the Boston housing market.",
    tech: ["R", "Machine Learning"],
  },
  {
    title: "Diabetes Data Mining Prediction",
    date: "Jul–Aug 2023",
    description:
      "Measured diabetes frequency among Pima indigenous women using association rules and nine statistical visualizations in R.",
    tech: ["R", "Data Mining", "Statistics"],
  },
  {
    title: "Ukraine-Russia War Casualty Analysis",
    date: "Apr–May 2022",
    description:
      "SQL-based calculation of casualty totals/averages with interactive Google Data Studio line charts for trend comparison.",
    tech: ["SQL", "Google Data Studio", "GCP"],
  },
  {
    title: "SF 311 Requests Interactive Map",
    date: "Mar 2022",
    description:
      "Interactive map showing 311 service requests by type and neighborhood in San Francisco using Google Data Studio.",
    tech: ["Google Data Studio", "GIS"],
  },
  {
    title: "Animated Parallax — SIGCSE 2019",
    date: "Mar 2019",
    description:
      "Python parallax animation presented at the SIGCSE Technical Symposium in Minneapolis — the world's largest computing education conference.",
    tech: ["Python", "Animation"],
    highlight: true,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <SectionHeader
        title="Projects & Publications"
        subtitle="Selected academic and side projects in data science and visual analytics"
      />

      {/* Interactive data viz demo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-xl p-6 mb-12 border-glow"
      >
        <h3 className="text-lg font-semibold text-foreground mb-1">Interactive Skills Visualization</h3>
        <p className="text-muted-foreground text-sm mb-6">Hover over the chart to explore skill proficiency levels</p>
        <SkillsRadar />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`bg-card border rounded-xl p-6 hover:border-primary/50 transition-colors ${
              p.highlight ? "border-primary/40 border-glow" : "border-border"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-base font-semibold text-foreground leading-snug pr-4">
                {p.title}
              </h3>
              {p.highlight && <ExternalLink size={16} className="text-primary shrink-0 mt-0.5" />}
            </div>
            <p className="text-xs font-mono text-primary mb-3">{p.date}</p>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
