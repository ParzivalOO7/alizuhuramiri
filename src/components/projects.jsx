import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section className="relative z-10 px-4 py-24 bg-white" id="projects">
      <div className="mx-auto max-w-4xl">
        <motion.p
          className="mb-10 text-xs font-medium uppercase tracking-widest text-black opacity-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {t.heading}
        </motion.p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {PROJECTS.map((project, index) => {
            const translatedItem = t.items.find((i) => i.id === project.id);
            return (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.09,
                  ease: [0.32, 0.72, 0, 1],
                }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.985 }}
              >
                {/* Double-bezel outer shell */}
                <div className="rounded-[1.5rem] bg-black/[0.07] p-[5px] ring-1 ring-black/[0.18] transition-shadow duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:shadow-[0_24px_64px_rgba(0,0,0,0.14)] dark:bg-white/[0.04] dark:ring-white/[0.08] dark:group-hover:shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
                  {/* Inner core */}
                  <div className="overflow-hidden rounded-[calc(1.5rem-5px)] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:bg-zinc-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    {project.imgSrc && (
                      <div className="overflow-hidden">
                        <img
                          src={project.imgSrc}
                          alt={project.title}
                          className="w-full aspect-video object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="mb-1 text-base font-semibold text-black">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-500">
                        {translatedItem ? translatedItem.description : project.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-black opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                        {language === "nl" ? "Bekijk project" : "View project"}
                        <span className="translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
