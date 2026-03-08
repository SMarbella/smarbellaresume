import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { FlaskConical, Shield } from "lucide-react";

const research = [
  {
    icon: <Shield size={20} />,
    role: "Volunteer Researcher — AI Cybersecurity",
    org: "University of Arizona · Prof. Zhuolin Yang",
    period: "Sep 2025 – Present",
    bullets: [
      "Investigating cybersecurity vulnerabilities involving AI systems",
      "Analyzing adversarial attack vectors on machine learning models",
    ],
  },
  {
    icon: <FlaskConical size={20} />,
    role: "Volunteer Researcher — D-REP Lab",
    org: "University of Arizona · Profs. Sandra Bae & Takanori Fujiwara",
    period: "Oct 2025 – Present",
    bullets: [
      "Conducting machine learning studies in the D-REP Lab",
      "Developing data-visualization techniques for complex datasets",
      "Contributing to research on visual analytics methodologies",
    ],
  },
];

const ResearchSection = () => (
  <section id="research" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionHeader
        title="Research Experience"
        subtitle="Current volunteer research at the University of Arizona"
      />
      <div className="grid md:grid-cols-2 gap-6">
        {research.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors border-glow"
          >
            <div className="text-primary mb-3">{r.icon}</div>
            <h3 className="text-lg font-semibold text-foreground">{r.role}</h3>
            <p className="text-primary font-mono text-xs mt-1">{r.org}</p>
            <p className="text-muted-foreground text-xs mb-4">{r.period}</p>
            <ul className="space-y-2">
              {r.bullets.map((b, j) => (
                <li key={j} className="text-sm text-secondary-foreground flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
