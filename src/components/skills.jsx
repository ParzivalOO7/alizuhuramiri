import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const SKILLS = ["HTML", "CSS", "JavaScript", "WordPress (Elementor)", "Git"];

const Skills = () => {
  const { language } = useLanguage();
  const heading = language === "nl" ? "Vaardigheden" : "Skills";

  return (
    <section className="relative z-10 py-24" id="skills">
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
          className="mb-10 text-2xl lg:text-3xl font-semibold text-ink"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          {heading}
        </motion.h2>

        {/* Double-bezel pill container */}
        <div className="inline-block rounded-[1.25rem] bg-canvas/[0.7] p-1.5 ring-1 ring-ink/[0.14] dark:bg-white/[0.04] dark:ring-white/[0.08]">
          <div className="flex flex-wrap gap-2 rounded-[calc(1.25rem-6px)] bg-paper/90 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:bg-zinc-900/90 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            {SKILLS.map((skill, index) => (
              <motion.span
                key={skill}
                className="border border-ink/30 rounded-[9px] px-5 py-1.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent hover:text-paper hover:border-accent dark:border-white/20 dark:text-white dark:hover:bg-accent dark:hover:border-accent"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.07, ease: [0.32, 0.72, 0, 1] }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
