import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "M.S. in Data Science",
    school: "University of Arizona",
    date: "May 2025",
    detail: "GPA 3.89 — Magna Cum Laude",
  },
  {
    degree: "B.S. in Information Science & Technology",
    school: "University of Arizona",
    date: "December 2022",
    detail: "Minor in Information Science & eSociety · GPA 3.72 — Magna Cum Laude",
  },
  {
    degree: "General Education",
    school: "Pima Community College",
    date: "Fall 2016 – Fall 2021",
    detail: "GPA 3.75",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 px-6 bg-grid">
    <div className="max-w-4xl mx-auto">
      <SectionHeader title="Education" />
      <div className="relative border-l-2 border-primary/30 ml-4 space-y-10">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8"
          >
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
              <GraduationCap size={12} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
            <p className="text-primary font-mono text-sm">{edu.school}</p>
            <p className="text-muted-foreground text-sm mt-1">{edu.date}</p>
            <p className="text-secondary-foreground text-sm mt-1">{edu.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
