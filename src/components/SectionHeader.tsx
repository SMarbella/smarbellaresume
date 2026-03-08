import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    className="mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h2>
    <div className="h-1 w-16 bg-primary rounded-full mb-4" />
    {subtitle && <p className="text-muted-foreground max-w-xl">{subtitle}</p>}
  </motion.div>
);

export default SectionHeader;
