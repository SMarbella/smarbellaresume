import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  { icon: <Mail size={20} />, label: "smartdataguru@yahoo.com", href: "mailto:smartdataguru@yahoo.com" },
  { icon: <Github size={20} />, label: "github.com/SMarbella", href: "https://github.com/SMarbella" },
  { icon: <Linkedin size={20} />, label: "linkedin.com/in/stephanie-marbella", href: "https://www.linkedin.com/in/stephanie-marbella/" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <SectionHeader title="Get in Touch" subtitle="Open to data science, data analyst, and database engineering opportunities." />
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors text-sm text-muted-foreground hover:text-primary"
          >
            {link.icon}
            {link.label}
          </motion.a>
        ))}
      </div>
      <p className="mt-16 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Stephanie Marbella. Built with React & Tailwind CSS.
      </p>
    </div>
  </section>
);

export default ContactSection;
