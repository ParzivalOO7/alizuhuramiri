import { PROJECTS } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section className="relative z-10 px-4 py-8 bg-white" id="projects">
      <h2 className="my-10 text-xl lg:text-2xl font-semibold text-black uppercase tracking-widest">{t.heading}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {PROJECTS.map((project) => {
          const translatedItem = t.items.find((i) => i.id === project.id);
          return (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-semibold text-black mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {translatedItem ? translatedItem.description : project.description}
                  </p>
                  <span className="text-xs font-medium text-black group-hover:underline">
                    {language === "nl" ? "Bekijk project →" : "View project →"}
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
