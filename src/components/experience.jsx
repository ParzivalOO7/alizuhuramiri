import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section className="relative z-10 py-24" id="experience">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-12 px-4 text-2xl lg:text-3xl font-semibold text-ink"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          {t.heading}
        </motion.h2>
        <div className="px-4">
          {t.entries.map((exp, id) => (
            <motion.div
              key={id}
              className="mb-10 border-l-2 border-accent pl-6"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: id * 0.1, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                <h3 className="text-xl lg:text-2xl font-semibold text-ink">
                  {exp.company}
                </h3>
                <p className="font-mono text-sm text-muted shrink-0">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              {exp.subtitle && (
                <p className="font-mono text-sm text-muted mb-2">{exp.subtitle}</p>
              )}
              <p className="text-ink opacity-70">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
