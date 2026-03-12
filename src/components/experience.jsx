import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section className="relative z-10 bg-white" id="experience">
      <h2 className="my-10 text-xl lg:text-2xl font-semibold text-black px-4 uppercase tracking-widest">{t.heading}</h2>
      <div className="max-w-6xl">
        <div className="max-w-6xl">
          {t.entries.map((exp, id) => (
            <div key={id} className="mx-4 mb-20">
              <h2 className="font-medium lg:text-2xl text-black">
                {exp.company}
              </h2>
              {exp.subtitle && (
                <p className="text-sm text-black">{exp.subtitle}</p>
              )}

              <div className="flex justify-between">
                <p className="py-4 lg:text-xl text-black">
                  {exp.startDate} – {exp.endDate}
                </p>
              </div>

              <p className="text-black">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
