import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Research Data Support Specialist II",
    company: "University of Arizona — Community Environment & Policy Department",
    date: "March 2026 – Present",
    bullets: [],
  },
  {
    title: "Volunteer Researcher",
    company: "University of Arizona",
    date: "September 2025 – Present",
    bullets: [
      "Researches cybersecurity vulnerabilities involving AI with Professor Zhuolin Yang.",
      "Conducts machine learning studies at D-REP Lab with Professors Sandra Bae and Takanori Fujiwara.",
    ],
  },
  {
    title: "Database Analyst, Administrator & Web Developer",
    company: "Santa Cruz Valley Heritage Alliance",
    date: "January 2024 – Present",
    bullets: [
      "Manages database in Bitrix 24 and enhances data collection via Google Tag Manager, Analytics & Ads.",
      "Improves SEO and updates website content to increase visitor engagement.",
    ],
  },
  {
    title: "Part-time Software Developer / Data Analyst",
    company: "Sophchron.com",
    date: "January 2020 – Present",
    bullets: [
      "Develops custom tools using MS Access, SQL, Jupyter Notebooks, Python, R, and GCP to track clinical quality KPIs.",
      "Prepares ad-hoc data requests and visualization reports for stakeholders.",
    ],
  },
  {
    title: "Volunteer Web Developer & Data Analyst",
    company: "Geriguides.com (Duke University Project)",
    date: "December 2024 – Present",
    bullets: [
      "Participates in meetings to discuss Duke University's Geriguides project.",
    ],
  },
  {
    title: "Environmental Database Engineer Intern",
    company: "Barrick's Nevada Gold Mines",
    date: "May 2024 – August 2024",
    bullets: [
      "Developed conceptual, logical, and physical data models for environmental data.",
      "Used EQuIS Professional & Enterprise to create a centralized database.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionHeader title="Work Experience" />
      <div className="relative border-l-2 border-primary/30 ml-4 space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative pl-8"
          >
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
              <Briefcase size={12} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
            <p className="text-primary font-mono text-sm">{exp.company}</p>
            <p className="text-muted-foreground text-sm mt-1">{exp.date}</p>
            {exp.bullets.length > 0 && (
              <ul className="mt-2 space-y-1">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-secondary-foreground text-sm flex gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
