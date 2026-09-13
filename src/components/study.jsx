import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Schools = () => {
  const { language } = useLanguage();
  const t = translations[language].study;

  return (
    <section className="relative z-10 py-24" id="study">
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

        {/* Double-bezel table container */}
        <div className="mx-4 rounded-[1.25rem] bg-canvas/[0.7] p-[5px] ring-1 ring-ink/[0.14] dark:bg-white/[0.04] dark:ring-white/[0.08]">
          <div className="rounded-[calc(1.25rem-5px)] bg-paper/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:bg-zinc-900/90 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            {t.schools.map((school, id) => (
              <motion.div
                key={id}
                className="flex flex-col md:flex-row md:justify-between md:items-start px-5 py-5 border-b border-ink/[0.12] last:border-b-0 dark:border-white/[0.07]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: id * 0.07, ease: [0.32, 0.72, 0, 1] }}
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-ink mb-1">{school.school}</h3>
                  <p className="text-sm text-muted">{school.description}</p>
                </div>
                {school.year && (
                  <p className="font-mono text-sm text-muted shrink-0 md:ml-8 mt-1 md:mt-0">{school.year}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schools;
